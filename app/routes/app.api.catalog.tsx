import type { LoaderFunctionArgs } from "react-router";

import { authenticate } from "../shopify.server";
import { adminGraphql } from "../shipping.server";

type CatalogEntity = "products" | "collections";

type CatalogItem = {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
};

function json(data: unknown, init?: ResponseInit) {
  return new Response(JSON.stringify(data), {
    status: init?.status ?? 200,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

function toGid(raw: string, entity: CatalogEntity): string {
  const value = String(raw || "").trim();
  if (!value) return "";
  if (value.startsWith("gid://")) return value;
  const numeric = value.replace(/[^\d]/g, "");
  if (!numeric) return "";
  if (entity === "products") return `gid://shopify/Product/${numeric}`;
  return `gid://shopify/Collection/${numeric}`;
}

function parseIds(rawIds: string, entity: CatalogEntity): string[] {
  return Array.from(
    new Set(
      rawIds
        .split(",")
        .map((raw) => toGid(raw, entity))
        .filter(Boolean),
    ),
  );
}

function mapNodeToCatalogItem(node: any, entity: CatalogEntity): CatalogItem {
  const image = entity === "products" ? node?.featuredImage : node?.image;
  const handle = String(node?.handle || "").trim();
  return {
    id: String(node?.id || ""),
    title: String(node?.title || "").trim() || String(node?.id || ""),
    subtitle: handle ? `/${handle}` : String(node?.id || ""),
    imageUrl: String(image?.url || ""),
  };
}

async function fetchProductsBySearch(admin: any, q: string): Promise<CatalogItem[]> {
  const query = `#graphql
    query ProductsSearch($query: String!) {
      products(first: 40, query: $query, sortKey: TITLE) {
        nodes {
          id
          title
          handle
          featuredImage {
            url
          }
        }
      }
    }
  `;

  const queryText = q.trim() ? q.trim() : "status:active";
  const res = await adminGraphql(admin, query, { variables: { query: queryText } });
  const body = await res.json();
  const nodes = Array.isArray(body?.data?.products?.nodes) ? body.data.products.nodes : [];
  return nodes.map((node: any) => mapNodeToCatalogItem(node, "products")).filter((item: CatalogItem) => Boolean(item.id));
}

async function fetchCollectionsBySearch(admin: any, q: string): Promise<CatalogItem[]> {
  const query = `#graphql
    query CollectionsSearch($query: String!) {
      collections(first: 40, query: $query, sortKey: TITLE) {
        nodes {
          id
          title
          handle
          image {
            url
          }
        }
      }
    }
  `;

  const queryText = q.trim();
  const res = await adminGraphql(admin, query, { variables: { query: queryText } });
  const body = await res.json();
  const nodes = Array.isArray(body?.data?.collections?.nodes) ? body.data.collections.nodes : [];
  return nodes.map((node: any) => mapNodeToCatalogItem(node, "collections")).filter((item: CatalogItem) => Boolean(item.id));
}

async function fetchByIds(admin: any, entity: CatalogEntity, ids: string[]): Promise<CatalogItem[]> {
  if (!ids.length) return [];

  const query = `#graphql
    query CatalogNodesByIds($ids: [ID!]!) {
      nodes(ids: $ids) {
        ... on Product {
          id
          title
          handle
          featuredImage {
            url
          }
        }
        ... on Collection {
          id
          title
          handle
          image {
            url
          }
        }
      }
    }
  `;

  const res = await adminGraphql(admin, query, { variables: { ids } });
  const body = await res.json();
  const nodes = Array.isArray(body?.data?.nodes) ? body.data.nodes : [];

  const allowedPrefix = entity === "products" ? "gid://shopify/Product/" : "gid://shopify/Collection/";
  const mapped: CatalogItem[] = nodes
    .filter((node: any) => String(node?.id || "").startsWith(allowedPrefix))
    .map((node: any) => mapNodeToCatalogItem(node, entity));
  const byId = new Map(mapped.map((item) => [item.id, item]));
  return ids.map((id) => byId.get(id)).filter((item): item is CatalogItem => Boolean(item));
}

async function resolveProductVariantIds(admin: any, productIds: string[]): Promise<string[]> {
  if (!productIds.length) return [];
  const query = `#graphql
    query ProductVariantsByIds($ids: [ID!]!) {
      nodes(ids: $ids) {
        ... on Product {
          id
          variants(first: 250) {
            nodes {
              id
            }
          }
        }
      }
    }
  `;
  const res = await adminGraphql(admin, query, { variables: { ids: productIds } });
  const body = await res.json();
  const nodes = Array.isArray(body?.data?.nodes) ? body.data.nodes : [];
  const out: string[] = [];
  nodes.forEach((node: any) => {
    const variants = Array.isArray(node?.variants?.nodes) ? node.variants.nodes : [];
    variants.forEach((variant: any) => {
      const id = String(variant?.id || "").trim();
      if (id) out.push(id);
    });
  });
  return Array.from(new Set(out));
}

async function resolveCollectionVariantIds(admin: any, collectionIds: string[]): Promise<string[]> {
  if (!collectionIds.length) return [];

  const query = `#graphql
    query CollectionProductsVariants($id: ID!, $cursor: String) {
      collection(id: $id) {
        products(first: 80, after: $cursor) {
          pageInfo {
            hasNextPage
            endCursor
          }
          nodes {
            variants(first: 60) {
              nodes {
                id
              }
            }
          }
        }
      }
    }
  `;

  const out = new Set<string>();

  for (const collectionId of collectionIds) {
    let cursor: string | null = null;
    let hasNextPage = true;
    let page = 0;

    while (hasNextPage && page < 20 && out.size < 5000) {
      const res = await adminGraphql(admin, query, { variables: { id: collectionId, cursor } });
      const body = await res.json();
      const products = body?.data?.collection?.products;
      const nodes = Array.isArray(products?.nodes) ? products.nodes : [];
      nodes.forEach((product: any) => {
        const variants = Array.isArray(product?.variants?.nodes) ? product.variants.nodes : [];
        variants.forEach((variant: any) => {
          const id = String(variant?.id || "").trim();
          if (id) out.add(id);
        });
      });

      hasNextPage = Boolean(products?.pageInfo?.hasNextPage);
      cursor = hasNextPage ? String(products?.pageInfo?.endCursor || "") : null;
      page += 1;
    }
  }

  return Array.from(out);
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const entity = url.searchParams.get("entity") === "collections" ? "collections" : "products";
  const mode = String(url.searchParams.get("mode") || "search").trim().toLowerCase();
  const q = String(url.searchParams.get("q") || "").trim();
  const ids = parseIds(String(url.searchParams.get("ids") || ""), entity);

  const ctx = await authenticate.admin(request);
  const admin = ctx.admin;

  if (mode === "resolvevariants") {
    const variantIds =
      entity === "products"
        ? await resolveProductVariantIds(admin, ids)
        : await resolveCollectionVariantIds(admin, ids);
    return json({ variantIds });
  }

  if (ids.length) {
    const items = await fetchByIds(admin, entity, ids);
    return json({ items });
  }

  const items =
    entity === "products" ? await fetchProductsBySearch(admin, q) : await fetchCollectionsBySearch(admin, q);
  return json({ items });
}
