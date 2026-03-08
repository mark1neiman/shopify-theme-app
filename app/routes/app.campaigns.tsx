import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import { Form, useActionData, useLoaderData, useNavigation } from "react-router";
import {
  Page,
  Layout,
  Card,
  Text,
  TextField,
  Select,
  Checkbox,
  Button,
  InlineStack,
  BlockStack,
  Divider,
  Banner,
  Modal,
} from "@shopify/polaris";
import * as React from "react";

import { authenticate } from "../shopify.server";
import { adminGraphql } from "../shipping.server";

/* =============================================================================
 * Types
 * ========================================================================== */

export type CampaignType =
  | "BuyXGetOneFree"
  | "BuyXGetZFree"
  | "BuyXGetZChoice"
  | "CartThresholdDiscount"
  | "CartThresholdFreeChoice";

export type CampaignBase = {
  id: string;
  type: CampaignType;
  label: string;
  priority: number;
  stackable: boolean;
};

export type CampaignAppliesTo = "products" | "collections";

export type CampaignScope = {
  appliesTo: CampaignAppliesTo;
  productIds: string[];
  collectionIds: string[];
};

export type BuyXGetOneFreeCampaign = CampaignBase & {
  type: "BuyXGetOneFree";
  buyQuantity: number;
  eligibleVariantIds: string[];
  eligibleScope?: CampaignScope;
};

export type BuyXGetZFreeCampaign = CampaignBase & {
  type: "BuyXGetZFree";
  buyQuantity: number;
  triggerVariantIds: string[];
  freeVariantId: string;
  triggerScope?: CampaignScope;
};

export type BuyXGetZChoiceCampaign = CampaignBase & {
  type: "BuyXGetZChoice";
  buyQuantity: number;
  triggerVariantIds: string[];
  choiceVariantIds: string[];
  triggerScope?: CampaignScope;
  choiceScope?: CampaignScope;
};

export type CartThresholdDiscountCampaign = CampaignBase & {
  type: "CartThresholdDiscount";
  thresholdAmount: number;
  discount: {
    type: "percentage" | "fixed";
    value: number;
  };
};

export type CartThresholdFreeChoiceCampaign = CampaignBase & {
  type: "CartThresholdFreeChoice";
  thresholdAmount: number;
  giftQuantity: number;
  repeatPerThreshold: boolean;
  choiceVariantIds: string[];
  choiceScope?: CampaignScope;
};

export type Campaign =
  | BuyXGetOneFreeCampaign
  | BuyXGetZFreeCampaign
  | BuyXGetZChoiceCampaign
  | CartThresholdDiscountCampaign
  | CartThresholdFreeChoiceCampaign;

type LoaderData = {
  campaigns: Campaign[];
  memberDiscountPercent: number;
  metafieldId: string | null;
  shopId: string;
};

type ActionData = { ok: true } | { ok: false; error: string };

/* =============================================================================
 * Storage (Shop metafield: mk.campaigns)
 * ========================================================================== */

const META_NAMESPACE = "mkx";
const META_KEY = "campaigns";
const SETTINGS_KEY = "pricing_settings";
const META_TYPE = "json";
const DEFAULT_LOGGED_IN_DISCOUNT_PERCENT = 15;

function safeJsonParse<T>(value: string | null | undefined, fallback: T): T {
  if (!value) return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

function toGidVariant(raw: string): string {
  const s = String(raw || "").trim();
  if (!s) return "";
  if (s.startsWith("gid://")) return s;
  return `gid://shopify/ProductVariant/${s.replace(/[^\d]/g, "")}`;
}

function toGidProduct(raw: string): string {
  const s = String(raw || "").trim();
  if (!s) return "";
  if (s.startsWith("gid://")) return s;
  const numeric = s.replace(/[^\d]/g, "");
  if (!numeric) return "";
  return `gid://shopify/Product/${numeric}`;
}

function toGidCollection(raw: string): string {
  const s = String(raw || "").trim();
  if (!s) return "";
  if (s.startsWith("gid://")) return s;
  const numeric = s.replace(/[^\d]/g, "");
  if (!numeric) return "";
  return `gid://shopify/Collection/${numeric}`;
}

function uniq(ids: string[]): string[] {
  return Array.from(new Set(ids.filter(Boolean)));
}

function toNumber(value: unknown, fallback = 0): number {
  const n = typeof value === "number" ? value : Number(String(value ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
}

function ensureId(id: string): string {
  const s = String(id || "").trim();
  if (s) return s;
  return `cmp-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function clone<T>(v: T): T {
  return JSON.parse(JSON.stringify(v)) as T;
}

function asStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.map((item) => String(item || "").trim()).filter(Boolean);
}

function defaultCampaignScope(): CampaignScope {
  return {
    appliesTo: "products",
    productIds: [],
    collectionIds: [],
  };
}

function normalizeCampaignScope(value: unknown): CampaignScope {
  const raw = value && typeof value === "object" ? (value as Record<string, unknown>) : {};
  const appliesTo = raw.appliesTo === "collections" ? "collections" : "products";
  const productIds = uniq(asStringArray(raw.productIds).map(toGidProduct));
  const collectionIds = uniq(asStringArray(raw.collectionIds).map(toGidCollection));
  return {
    appliesTo,
    productIds,
    collectionIds,
  };
}

function selectedScopeIds(scope: CampaignScope): string[] {
  return scope.appliesTo === "collections" ? scope.collectionIds : scope.productIds;
}

/* =============================================================================
 * Variant search picker
 * ========================================================================== */

type VariantOption = {
  id: string; // expects gid
  title: string;
  sku?: string;
};

type VariantPickerProps = {
  label: string;
  selectedIds: string[];
  onChange: (next: string[]) => void;
  single?: boolean;
  helpText?: string;
  placeholder?: string;
};

function VariantPicker({
  label,
  selectedIds,
  onChange,
  single = false,
  helpText,
  placeholder = "Start typing to search products",
}: VariantPickerProps) {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState<VariantOption[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [selectedOptionsById, setSelectedOptionsById] = React.useState<Record<string, VariantOption>>({});

  // very small debounce to avoid spamming the server
  const debounceRef = React.useRef<number | null>(null);

  async function runSearch(nextQuery: string) {
    const q = nextQuery.trim();
    if (!q) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch(`/app/api/variants?q=${encodeURIComponent(q)}`, {
        headers: { Accept: "application/json" },
      });
      if (!res.ok) {
        setResults([]);
        return;
      }

      const data = await res.json();
      const items = Array.isArray(data?.items) ? data.items : [];

      setResults(
        items.map((item: any) => ({
          id: toGidVariant(String(item.id)),
          title: String(item.title || item.id),
          sku: item.sku ? String(item.sku) : undefined,
        })),
      );
    } finally {
      setIsLoading(false);
    }
  }

  function scheduleSearch(next: string) {
    if (debounceRef.current) window.clearTimeout(debounceRef.current);
    debounceRef.current = window.setTimeout(() => {
      runSearch(next);
    }, 150);
  }

  function addVariant(rawId: string) {
    const id = toGidVariant(rawId);
    if (!id) return;

    if (single) {
      onChange([id]);
      return;
    }

    if (selectedIds.includes(id)) return;
    onChange(uniq([...selectedIds, id]));
  }

  function removeVariant(id: string) {
    onChange(selectedIds.filter((variantId) => variantId !== id));
  }

  React.useEffect(() => {
    const missingIds = selectedIds.filter((id) => !selectedOptionsById[id]);
    if (!missingIds.length) return;

    let cancelled = false;

    (async () => {
      try {
        const res = await fetch(`/app/api/variants?ids=${encodeURIComponent(missingIds.join(","))}`, {
          headers: { Accept: "application/json" },
        });
        if (!res.ok) return;

        const data = await res.json();
        const items = Array.isArray(data?.items) ? data.items : [];

        if (cancelled) return;

        const next: Record<string, VariantOption> = {};
        items.forEach((item: any) => {
          const id = toGidVariant(String(item.id || ""));
          if (!id) return;
          next[id] = {
            id,
            title: String(item.title || id),
            sku: item.sku ? String(item.sku) : undefined,
          };
        });

        if (!Object.keys(next).length) return;
        setSelectedOptionsById((prev) => ({ ...prev, ...next }));
      } catch {
        // ignore lookup errors in picker UX
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [selectedIds, selectedOptionsById]);

  return (
    <BlockStack gap="200">
      <TextField
        label={label}
        value={query}
        onChange={(value: string) => {
          setQuery(value);
          scheduleSearch(value);
        }}
        autoComplete="off"
        helpText={helpText}
        placeholder={placeholder}
      />

      {isLoading ? (
        <Text as="p" tone="subdued">
          Searching...
        </Text>
      ) : null}

      {results.length > 0 ? (
        <Card padding="200">
          <BlockStack gap="200">
            <Text as="h3" variant="headingSm">
              Results
            </Text>

            <BlockStack gap="150">
              {results.map((item) => (
                <InlineStack key={item.id} align="space-between" blockAlign="center" gap="200">
                  <BlockStack gap="100">
                    <Text as="span" variant="bodySm">
                      {item.title}
                    </Text>
                    <Text as="span" tone="subdued" variant="bodySm">
                      {item.sku ? `${item.sku} • ${item.id}` : item.id}
                    </Text>
                  </BlockStack>

                  <Button size="slim" onClick={() => addVariant(item.id)}>
                    Add
                  </Button>
                </InlineStack>
              ))}
            </BlockStack>
          </BlockStack>
        </Card>
      ) : null}

      <BlockStack gap="150">
        {selectedIds.length === 0 ? (
          <Text as="p" tone="subdued">
            No variants selected yet.
          </Text>
        ) : (
          selectedIds.map((id) => (
            <InlineStack key={id} align="space-between" blockAlign="center" gap="200">
              <BlockStack gap="100">
                <Text as="span" variant="bodySm">
                  {selectedOptionsById[id]?.title || id}
                </Text>
                <Text as="span" tone="subdued" variant="bodySm">
                  {selectedOptionsById[id]?.sku ? `${selectedOptionsById[id]?.sku} • ${id}` : id}
                </Text>
              </BlockStack>
              <Button size="slim" tone="critical" onClick={() => removeVariant(id)}>
                Remove
              </Button>
            </InlineStack>
          ))
        )}
      </BlockStack>
    </BlockStack>
  );
}

type CatalogOption = {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
};

type CampaignScopePickerProps = {
  label: string;
  value?: CampaignScope;
  onChange: (nextScope: CampaignScope, nextVariantIds: string[]) => void;
  resolvedVariantCount: number;
  helpText?: string;
};

function CampaignScopePicker({ label, value, onChange, resolvedVariantCount, helpText }: CampaignScopePickerProps) {
  const scope = React.useMemo(() => normalizeCampaignScope(value), [value]);
  const selectedIds = React.useMemo(() => selectedScopeIds(scope), [scope]);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [results, setResults] = React.useState<CatalogOption[]>([]);
  const [isSearching, setIsSearching] = React.useState(false);
  const [isResolving, setIsResolving] = React.useState(false);
  const [resolveError, setResolveError] = React.useState("");
  const [selectedItemsById, setSelectedItemsById] = React.useState<Record<string, CatalogOption>>({});
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalQuery, setModalQuery] = React.useState("");
  const [modalResults, setModalResults] = React.useState<CatalogOption[]>([]);
  const [modalLoading, setModalLoading] = React.useState(false);
  const [draftIds, setDraftIds] = React.useState<string[]>([]);
  const searchDebounceRef = React.useRef<number | null>(null);

  const resourceLabel = scope.appliesTo === "collections" ? "collections" : "products";

  const fetchItems = React.useCallback(async (entity: CampaignAppliesTo, query: string, ids: string[]) => {
    const params = new URLSearchParams();
    params.set("entity", entity);
    if (ids.length) params.set("ids", ids.join(","));
    else params.set("q", query);
    const res = await fetch(`/app/api/catalog?${params.toString()}`, { headers: { Accept: "application/json" } });
    if (!res.ok) return [];
    const data = await res.json();
    const items = Array.isArray(data?.items) ? data.items : [];
    return items.map((item: any) => ({
      id: String(item?.id || ""),
      title: String(item?.title || item?.id || ""),
      subtitle: String(item?.subtitle || ""),
      imageUrl: String(item?.imageUrl || ""),
    })) as CatalogOption[];
  }, []);

  const resolveVariantIds = React.useCallback(async (entity: CampaignAppliesTo, ids: string[]) => {
    if (!ids.length) return [];
    const params = new URLSearchParams();
    params.set("entity", entity);
    params.set("mode", "resolveVariants");
    params.set("ids", ids.join(","));
    const res = await fetch(`/app/api/catalog?${params.toString()}`, { headers: { Accept: "application/json" } });
    if (!res.ok) return [];
    const data = await res.json();
    const variantIds = Array.isArray(data?.variantIds) ? data.variantIds : [];
    return uniq(variantIds.map(toGidVariant));
  }, []);

  const applyScope = React.useCallback(
    async (nextAppliesTo: CampaignAppliesTo, nextIdsRaw: string[]) => {
      const normalizedIds = uniq(
        nextIdsRaw.map(nextAppliesTo === "collections" ? toGidCollection : toGidProduct).filter(Boolean),
      );
      const nextScope: CampaignScope =
        nextAppliesTo === "collections"
          ? { ...scope, appliesTo: "collections", collectionIds: normalizedIds }
          : { ...scope, appliesTo: "products", productIds: normalizedIds };

      setResolveError("");
      if (!normalizedIds.length) {
        onChange(nextScope, []);
        return;
      }

      setIsResolving(true);
      try {
        const variantIds = await resolveVariantIds(nextAppliesTo, normalizedIds);
        onChange(nextScope, variantIds);
      } catch {
        onChange(nextScope, []);
        setResolveError("Could not resolve variants from selected items.");
      } finally {
        setIsResolving(false);
      }
    },
    [onChange, resolveVariantIds, scope],
  );

  const runInlineSearch = React.useCallback(
    async (query: string) => {
      const trimmed = query.trim();
      if (!trimmed) {
        setResults([]);
        return;
      }
      setIsSearching(true);
      try {
        const items = await fetchItems(scope.appliesTo, trimmed, []);
        setResults(items);
      } finally {
        setIsSearching(false);
      }
    },
    [fetchItems, scope.appliesTo],
  );

  const runModalSearch = React.useCallback(
    async (query: string) => {
      setModalLoading(true);
      try {
        const items = await fetchItems(scope.appliesTo, query.trim(), []);
        setModalResults(items);
      } finally {
        setModalLoading(false);
      }
    },
    [fetchItems, scope.appliesTo],
  );

  React.useEffect(() => {
    if (searchDebounceRef.current) window.clearTimeout(searchDebounceRef.current);
    searchDebounceRef.current = window.setTimeout(() => {
      runInlineSearch(searchQuery);
    }, 180);
    return () => {
      if (searchDebounceRef.current) window.clearTimeout(searchDebounceRef.current);
    };
  }, [searchQuery, runInlineSearch]);

  React.useEffect(() => {
    const missing = selectedIds.filter((id) => !selectedItemsById[id]);
    if (!missing.length) return;
    let cancelled = false;
    (async () => {
      const items = await fetchItems(scope.appliesTo, "", missing);
      if (cancelled || !items.length) return;
      setSelectedItemsById((prev) => {
        const next = { ...prev };
        items.forEach((item) => {
          next[item.id] = item;
        });
        return next;
      });
    })();
    return () => {
      cancelled = true;
    };
  }, [fetchItems, scope.appliesTo, selectedIds, selectedItemsById]);

  React.useEffect(() => {
    setResults([]);
    setSearchQuery("");
    setResolveError("");
  }, [scope.appliesTo]);

  const inlineOptions = results.filter((item) => !selectedIds.includes(item.id));

  return (
    <BlockStack gap="300">
      <Select
        label="Applies to"
        options={[
          { label: "Specific products", value: "products" },
          { label: "Specific collections", value: "collections" },
        ]}
        value={scope.appliesTo}
        onChange={(next) => {
          const nextAppliesTo = next === "collections" ? "collections" : "products";
          const nextIds = nextAppliesTo === "collections" ? scope.collectionIds : scope.productIds;
          void applyScope(nextAppliesTo, nextIds);
        }}
      />

      <InlineStack gap="200" blockAlign="end">
        <div style={{ flex: 1 }}>
          <TextField
            label={label}
            labelHidden
            value={searchQuery}
            onChange={setSearchQuery}
            autoComplete="off"
            placeholder={`Search ${resourceLabel}`}
            helpText={helpText}
          />
        </div>
        <Button
          onClick={() => {
            setIsModalOpen(true);
            setDraftIds([...selectedIds]);
            setModalQuery("");
            void runModalSearch("");
          }}
        >
          Browse
        </Button>
      </InlineStack>

      {isSearching ? (
        <Text as="p" tone="subdued">
          Searching...
        </Text>
      ) : null}

      {inlineOptions.length > 0 ? (
        <Card padding="200">
          <BlockStack gap="150">
            {inlineOptions.slice(0, 8).map((item) => (
              <InlineStack key={item.id} align="space-between" blockAlign="center" gap="200">
                <InlineStack gap="200" blockAlign="center">
                  {item.imageUrl ? (
                    <img
                      src={item.imageUrl}
                      alt=""
                      width={40}
                      height={40}
                      style={{ width: 40, height: 40, borderRadius: 8, objectFit: "cover", border: "1px solid #e1e3e5" }}
                    />
                  ) : (
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 8,
                        background: "#f6f6f7",
                        border: "1px solid #e1e3e5",
                      }}
                    />
                  )}
                  <BlockStack gap="0">
                    <Text as="span" variant="bodySm">
                      {item.title}
                    </Text>
                    <Text as="span" tone="subdued" variant="bodySm">
                      {item.subtitle}
                    </Text>
                  </BlockStack>
                </InlineStack>
                <Button
                  size="slim"
                  onClick={() => {
                    const nextIds = uniq([...selectedIds, item.id]);
                    void applyScope(scope.appliesTo, nextIds);
                  }}
                >
                  Add
                </Button>
              </InlineStack>
            ))}
          </BlockStack>
        </Card>
      ) : null}

      <Card padding="0">
        <BlockStack gap="0">
          {selectedIds.length === 0 ? (
            <div style={{ padding: 12 }}>
              <Text as="p" tone="subdued">
                No selected {resourceLabel}.
              </Text>
            </div>
          ) : (
            selectedIds.map((id, index) => (
              <div
                key={id}
                style={{
                  padding: 12,
                  borderTop: index > 0 ? "1px solid #e1e3e5" : undefined,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                }}
              >
                <InlineStack gap="200" blockAlign="center">
                  {selectedItemsById[id]?.imageUrl ? (
                    <img
                      src={selectedItemsById[id].imageUrl}
                      alt=""
                      width={44}
                      height={44}
                      style={{ width: 44, height: 44, borderRadius: 8, objectFit: "cover", border: "1px solid #e1e3e5" }}
                    />
                  ) : (
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 8,
                        background: "#f6f6f7",
                        border: "1px solid #e1e3e5",
                      }}
                    />
                  )}
                  <BlockStack gap="0">
                    <Text as="span" variant="bodySm">
                      {selectedItemsById[id]?.title || id}
                    </Text>
                    <Text as="span" tone="subdued" variant="bodySm">
                      {selectedItemsById[id]?.subtitle || id}
                    </Text>
                  </BlockStack>
                </InlineStack>
                <Button
                  tone="critical"
                  variant="tertiary"
                  onClick={() => {
                    const nextIds = selectedIds.filter((itemId) => itemId !== id);
                    void applyScope(scope.appliesTo, nextIds);
                  }}
                >
                  Remove
                </Button>
              </div>
            ))
          )}
        </BlockStack>
      </Card>

      <Text as="p" tone={resolveError ? "critical" : "subdued"} variant="bodySm">
        {resolveError
          ? resolveError
          : isResolving
            ? "Resolving variants..."
            : `Resolved variants: ${resolvedVariantCount}`}
      </Text>

      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Select ${resourceLabel}`}
        primaryAction={{
          content: "Done",
          loading: isResolving,
          onAction: () => {
            void (async () => {
              await applyScope(scope.appliesTo, draftIds);
              setIsModalOpen(false);
            })();
          },
        }}
        secondaryActions={[
          {
            content: "Cancel",
            onAction: () => setIsModalOpen(false),
          },
        ]}
      >
        <Modal.Section>
          <BlockStack gap="300">
            <TextField
              label={`Search ${resourceLabel}`}
              value={modalQuery}
              onChange={(value: string) => {
                setModalQuery(value);
                void runModalSearch(value);
              }}
              autoComplete="off"
            />

            {modalLoading ? (
              <Text as="p" tone="subdued">
                Loading...
              </Text>
            ) : modalResults.length === 0 ? (
              <Text as="p" tone="subdued">
                No results.
              </Text>
            ) : (
              <Card padding="0">
                <BlockStack gap="0">
                  {modalResults.map((item, index) => {
                    const checked = draftIds.includes(item.id);
                    return (
                      <div
                        key={item.id}
                        style={{
                          padding: 12,
                          borderTop: index > 0 ? "1px solid #e1e3e5" : undefined,
                        }}
                      >
                        <InlineStack align="space-between" blockAlign="center" gap="200">
                          <InlineStack gap="200" blockAlign="center">
                            {item.imageUrl ? (
                              <img
                                src={item.imageUrl}
                                alt=""
                                width={40}
                                height={40}
                                style={{
                                  width: 40,
                                  height: 40,
                                  borderRadius: 8,
                                  objectFit: "cover",
                                  border: "1px solid #e1e3e5",
                                }}
                              />
                            ) : (
                              <div
                                style={{
                                  width: 40,
                                  height: 40,
                                  borderRadius: 8,
                                  background: "#f6f6f7",
                                  border: "1px solid #e1e3e5",
                                }}
                              />
                            )}
                            <BlockStack gap="0">
                              <Text as="span" variant="bodySm">
                                {item.title}
                              </Text>
                              <Text as="span" tone="subdued" variant="bodySm">
                                {item.subtitle}
                              </Text>
                            </BlockStack>
                          </InlineStack>
                          <Checkbox
                            label=""
                            labelHidden
                            checked={checked}
                            onChange={(nextChecked: boolean) => {
                              setDraftIds((prev) => {
                                if (nextChecked) return uniq([...prev, item.id]);
                                return prev.filter((id) => id !== item.id);
                              });
                            }}
                          />
                        </InlineStack>
                      </div>
                    );
                  })}
                </BlockStack>
              </Card>
            )}
          </BlockStack>
        </Modal.Section>
      </Modal>
    </BlockStack>
  );
}

/* =============================================================================
 * Loader / Action
 * ========================================================================== */

export async function loader({ request }: LoaderFunctionArgs) {
  const { admin } = await authenticate.admin(request);

  const query = `#graphql
    query CampaignsConfig {
      shop {
        id
        metafield(namespace: "${META_NAMESPACE}", key: "${META_KEY}") {
          id
          value
        }
        pricingSettings: metafield(namespace: "${META_NAMESPACE}", key: "${SETTINGS_KEY}") {
          id
          value
        }
      }
    }
  `;

  const res = await adminGraphql(admin, query);
  const json = await res.json();

  const shopId = json?.data?.shop?.id as string | undefined;
  if (!shopId) {
    return new Response("Shop not found", { status: 500 });
  }

  const mf = json?.data?.shop?.metafield;
  const settingsMf = json?.data?.shop?.pricingSettings;
  const campaigns = safeJsonParse<Campaign[]>(mf?.value, []);
  const rawSettings = safeJsonParse<Record<string, unknown>>(settingsMf?.value, {});
  const rawPercent = Number(rawSettings?.loggedInDiscountPercent ?? DEFAULT_LOGGED_IN_DISCOUNT_PERCENT);
  const memberDiscountPercent = Number.isFinite(rawPercent)
    ? Math.max(0, Math.min(100, rawPercent))
    : DEFAULT_LOGGED_IN_DISCOUNT_PERCENT;

  const data: LoaderData = {
    campaigns,
    memberDiscountPercent,
    metafieldId: mf?.id ?? null,
    shopId,
  };

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

export async function action({ request }: ActionFunctionArgs) {
  const { admin } = await authenticate.admin(request);

  const form = await request.formData();
  const jsonText = String(form.get("campaignsJson") ?? "").trim();
  const memberDiscountRaw = Number(String(form.get("memberDiscountPercent") ?? DEFAULT_LOGGED_IN_DISCOUNT_PERCENT));
  const memberDiscountPercent = Number.isFinite(memberDiscountRaw)
    ? Math.max(0, Math.min(100, memberDiscountRaw))
    : DEFAULT_LOGGED_IN_DISCOUNT_PERCENT;
  if (!jsonText) {
    const out: ActionData = { ok: false, error: "campaignsJson is empty" };
    return new Response(JSON.stringify(out), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  let campaigns: Campaign[];
  try {
    campaigns = JSON.parse(jsonText) as Campaign[];
    if (!Array.isArray(campaigns)) throw new Error("Not an array");
  } catch {
    const out: ActionData = { ok: false, error: "Invalid JSON payload" };
    return new Response(JSON.stringify(out), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // sanitation + normalize ids
  const sanitized: Campaign[] = campaigns.map((c) => {
    const base: CampaignBase = {
      id: ensureId(c.id),
      type: c.type,
      label: String(c.label ?? "").trim(),
      priority: toNumber((c as any).priority, 0),
      stackable: Boolean((c as any).stackable),
    };

    if (c.type === "BuyXGetOneFree") {
      return {
        ...base,
        type: "BuyXGetOneFree",
        buyQuantity: toNumber((c as any).buyQuantity, 4),
        eligibleVariantIds: uniq(((c as any).eligibleVariantIds ?? []).map(toGidVariant)),
        eligibleScope: normalizeCampaignScope((c as any).eligibleScope),
      };
    }

    if (c.type === "BuyXGetZFree") {
      return {
        ...base,
        type: "BuyXGetZFree",
        buyQuantity: toNumber((c as any).buyQuantity, 2),
        triggerVariantIds: uniq(((c as any).triggerVariantIds ?? []).map(toGidVariant)),
        freeVariantId: toGidVariant((c as any).freeVariantId ?? ""),
        triggerScope: normalizeCampaignScope((c as any).triggerScope),
      };
    }

    if (c.type === "BuyXGetZChoice") {
      return {
        ...base,
        type: "BuyXGetZChoice",
        buyQuantity: toNumber((c as any).buyQuantity, 3),
        triggerVariantIds: uniq(((c as any).triggerVariantIds ?? []).map(toGidVariant)),
        choiceVariantIds: uniq(((c as any).choiceVariantIds ?? []).map(toGidVariant)),
        triggerScope: normalizeCampaignScope((c as any).triggerScope),
        choiceScope: normalizeCampaignScope((c as any).choiceScope),
      };
    }

    if (c.type === "CartThresholdDiscount") {
      const dtype = (c as any).discount?.type === "fixed" ? "fixed" : "percentage";
      return {
        ...base,
        type: "CartThresholdDiscount",
        thresholdAmount: toNumber((c as any).thresholdAmount, 100),
        discount: {
          type: dtype,
          value: toNumber((c as any).discount?.value, 10),
        },
      };
    }

    // CartThresholdFreeChoice
    return {
      ...base,
      type: "CartThresholdFreeChoice",
      thresholdAmount: toNumber((c as any).thresholdAmount, 150),
      giftQuantity: Math.max(1, toNumber((c as any).giftQuantity, 1)),
      repeatPerThreshold: Boolean((c as any).repeatPerThreshold),
      choiceVariantIds: uniq(((c as any).choiceVariantIds ?? []).map(toGidVariant)),
      choiceScope: normalizeCampaignScope((c as any).choiceScope),
    };
  });

  // fetch shop id for ownerId
  const shopRes = await adminGraphql(
    admin,
    `#graphql
      query ShopId {
        shop { id }
      }
    `,
  );
  const shopJson = await shopRes.json();
  const shopId = shopJson?.data?.shop?.id as string | undefined;
  if (!shopId) {
    const out: ActionData = { ok: false, error: "Shop ID not found" };
    return new Response(JSON.stringify(out), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const mutation = `#graphql
    mutation SaveCampaigns($metafields: [MetafieldsSetInput!]!) {
      metafieldsSet(metafields: $metafields) {
        metafields { id namespace key }
        userErrors { field message }
      }
    }
  `;

  const variables = {
    metafields: [
      {
        ownerId: shopId,
        namespace: META_NAMESPACE,
        key: META_KEY,
        type: META_TYPE,
        value: JSON.stringify(sanitized),
      },
      {
        ownerId: shopId,
        namespace: META_NAMESPACE,
        key: SETTINGS_KEY,
        type: META_TYPE,
        value: JSON.stringify({ loggedInDiscountPercent: memberDiscountPercent }),
      },
    ],
  };

  const saveRes = await adminGraphql(admin, mutation, { variables });
  const saveJson = await saveRes.json();

  const errs = saveJson?.data?.metafieldsSet?.userErrors ?? [];
  if (errs.length) {
    const out: ActionData = { ok: false, error: errs.map((e: any) => e.message).join("; ") };
    return new Response(JSON.stringify(out), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const out: ActionData = { ok: true };
  return new Response(JSON.stringify(out), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

/* =============================================================================
 * UI helpers
 * ========================================================================== */

const CAMPAIGN_TYPE_OPTIONS: { label: string; value: CampaignType }[] = [
  { label: "Buy X get 1 free", value: "BuyXGetOneFree" },
  { label: "Buy X get Z free", value: "BuyXGetZFree" },
  { label: "Buy X choose a free gift", value: "BuyXGetZChoice" },
  { label: "Threshold discount", value: "CartThresholdDiscount" },
  { label: "Threshold free choice", value: "CartThresholdFreeChoice" },
];

function typeLabel(t: CampaignType): string {
  return CAMPAIGN_TYPE_OPTIONS.find((x) => x.value === t)?.label ?? t;
}

/* =============================================================================
 * Component
 * ========================================================================== */

export default function CampaignsPage() {
  const { campaigns: initialCampaigns, memberDiscountPercent: initialMemberDiscountPercent } = useLoaderData() as LoaderData;
  const actionData = useActionData() as ActionData | undefined;
  const nav = useNavigation();

  const [campaigns, setCampaigns] = React.useState<Campaign[]>(() => clone(initialCampaigns));
  const [memberDiscountPercent, setMemberDiscountPercent] = React.useState<number>(initialMemberDiscountPercent);
  const [selectedType, setSelectedType] = React.useState<CampaignType>("BuyXGetOneFree");

  const isSaving = nav.state !== "idle";

  function updateCampaign(index: number, next: Campaign) {
    setCampaigns((prev) => {
      const copy = [...prev];
      copy[index] = next;
      return copy;
    });
  }

  function removeCampaign(index: number) {
    setCampaigns((prev) => prev.filter((_, i) => i !== index));
  }

  function addCampaign() {
    const base: CampaignBase = {
      id: ensureId(""),
      type: selectedType,
      label: "",
      priority: 0,
      stackable: true,
    };

    let next: Campaign;

    if (selectedType === "BuyXGetOneFree") {
      next = { ...base, type: "BuyXGetOneFree", buyQuantity: 4, eligibleVariantIds: [], eligibleScope: defaultCampaignScope() };
    } else if (selectedType === "BuyXGetZFree") {
      next = {
        ...base,
        type: "BuyXGetZFree",
        buyQuantity: 2,
        triggerVariantIds: [],
        freeVariantId: "",
        triggerScope: defaultCampaignScope(),
      };
    } else if (selectedType === "BuyXGetZChoice") {
      next = {
        ...base,
        type: "BuyXGetZChoice",
        buyQuantity: 3,
        triggerVariantIds: [],
        choiceVariantIds: [],
        triggerScope: defaultCampaignScope(),
        choiceScope: defaultCampaignScope(),
      };
    } else if (selectedType === "CartThresholdDiscount") {
      next = {
        ...base,
        type: "CartThresholdDiscount",
        thresholdAmount: 100,
        discount: { type: "percentage", value: 10 },
      };
    } else {
      next = {
        ...base,
        type: "CartThresholdFreeChoice",
        thresholdAmount: 150,
        giftQuantity: 1,
        repeatPerThreshold: false,
        choiceVariantIds: [],
        choiceScope: defaultCampaignScope(),
      };
    }

    setCampaigns((prev) => [...prev, next]);
  }

  function renderTypeFields(c: Campaign, idx: number) {
    if (c.type === "BuyXGetOneFree") {
      return (
        <BlockStack gap="300">
          <TextField
            label="Set size (X, incl. free item)"
            type="number"
            value={String(c.buyQuantity)}
            onChange={(value: string) => updateCampaign(idx, { ...c, buyQuantity: toNumber(value, 0) })}
            autoComplete="off"
            helpText="Example: X=4 means in each 4 eligible items, 1 cheapest item is free."
          />
          <CampaignScopePicker
            label="Search products"
            value={c.eligibleScope}
            resolvedVariantCount={c.eligibleVariantIds.length}
            helpText="Use Browse to pick products or collections."
            onChange={(nextScope, nextVariantIds) =>
              updateCampaign(idx, {
                ...c,
                eligibleScope: nextScope,
                eligibleVariantIds: nextVariantIds,
              })
            }
          />
        </BlockStack>
      );
    }

    if (c.type === "BuyXGetZFree") {
      return (
        <BlockStack gap="300">
          <TextField
            label="Buy quantity (X)"
            type="number"
            value={String(c.buyQuantity)}
            onChange={(value: string) => updateCampaign(idx, { ...c, buyQuantity: toNumber(value, 0) })}
            autoComplete="off"
          />
          <CampaignScopePicker
            label="Search products"
            value={c.triggerScope}
            resolvedVariantCount={c.triggerVariantIds.length}
            helpText="Define which products/collections trigger the campaign."
            onChange={(nextScope, nextVariantIds) =>
              updateCampaign(idx, {
                ...c,
                triggerScope: nextScope,
                triggerVariantIds: nextVariantIds,
              })
            }
          />

          <TextField
            label="Free variant ID (Z) (auto-filled)"
            value={c.freeVariantId || ""}
            onChange={() => undefined}
            readOnly
            autoComplete="off"
          />

          <VariantPicker
            label="Search free variant"
            selectedIds={c.freeVariantId ? [c.freeVariantId] : []}
            onChange={(next) => updateCampaign(idx, { ...c, freeVariantId: toGidVariant(next[0] || "") })}
            single
          />
        </BlockStack>
      );
    }

    if (c.type === "BuyXGetZChoice") {
      return (
        <BlockStack gap="300">
          <TextField
            label="Buy quantity (X)"
            type="number"
            value={String(c.buyQuantity)}
            onChange={(value: string) => updateCampaign(idx, { ...c, buyQuantity: toNumber(value, 0) })}
            autoComplete="off"
          />
          <CampaignScopePicker
            label="Search products"
            value={c.triggerScope}
            resolvedVariantCount={c.triggerVariantIds.length}
            helpText="Define which items are required in cart."
            onChange={(nextScope, nextVariantIds) =>
              updateCampaign(idx, {
                ...c,
                triggerScope: nextScope,
                triggerVariantIds: nextVariantIds,
              })
            }
          />
          <CampaignScopePicker
            label="Search gifts"
            value={c.choiceScope}
            resolvedVariantCount={c.choiceVariantIds.length}
            helpText="Define allowed free gift pool."
            onChange={(nextScope, nextVariantIds) =>
              updateCampaign(idx, {
                ...c,
                choiceScope: nextScope,
                choiceVariantIds: nextVariantIds,
              })
            }
          />
        </BlockStack>
      );
    }

    if (c.type === "CartThresholdDiscount") {
      return (
        <BlockStack gap="300">
          <TextField
            label="Threshold amount"
            type="number"
            value={String(c.thresholdAmount)}
            onChange={(value: string) => updateCampaign(idx, { ...c, thresholdAmount: toNumber(value, 0) })}
            autoComplete="off"
          />

          <Select
            label="Discount type"
            options={[
              { label: "Percentage", value: "percentage" },
              { label: "Fixed amount", value: "fixed" },
            ]}
            value={c.discount.type}
            onChange={(value: string) =>
              updateCampaign(idx, { ...c, discount: { ...c.discount, type: value as "percentage" | "fixed" } })
            }
          />

          <TextField
            label={c.discount.type === "percentage" ? "Percentage value (e.g. 10)" : "Fixed value (e.g. 5.00)"}
            type="number"
            value={String(c.discount.value)}
            onChange={(value: string) => updateCampaign(idx, { ...c, discount: { ...c.discount, value: toNumber(value, 0) } })}
            autoComplete="off"
          />
        </BlockStack>
      );
    }

    // CartThresholdFreeChoice
    return (
      <BlockStack gap="300">
        <TextField
          label="Threshold amount"
          type="number"
          value={String(c.thresholdAmount)}
          onChange={(value: string) => updateCampaign(idx, { ...c, thresholdAmount: toNumber(value, 0) })}
          autoComplete="off"
        />

        <TextField
          label="Gift quantity per threshold"
          type="number"
          value={String(c.giftQuantity ?? 1)}
          onChange={(value: string) => updateCampaign(idx, { ...c, giftQuantity: Math.max(1, toNumber(value, 1)) })}
          autoComplete="off"
          helpText="How many free choice items are granted when threshold is met."
        />

        <Checkbox
          label="Repeat for each threshold step"
          checked={Boolean(c.repeatPerThreshold ?? false)}
          onChange={(value: boolean) => updateCampaign(idx, { ...c, repeatPerThreshold: value })}
          helpText="If enabled: gifts scale by floor(subtotal / thresholdAmount)."
        />
        <CampaignScopePicker
          label="Search gifts"
          value={c.choiceScope}
          resolvedVariantCount={c.choiceVariantIds.length}
          helpText="Choose products or collections for free-choice gifts."
          onChange={(nextScope, nextVariantIds) =>
            updateCampaign(idx, {
              ...c,
              choiceScope: nextScope,
              choiceVariantIds: nextVariantIds,
            })
          }
        />
      </BlockStack>
    );
  }

  return (
    <Page
      title="Campaigns"
      subtitle="Configure automatic campaigns used by pricingEngine (stored in mk.campaigns metafield)"
      primaryAction={undefined}
    >
      <Layout>
        <Layout.Section>
          {actionData && !actionData.ok ? (
            <Banner tone="critical" title="Save failed">
              <p>{actionData.error}</p>
            </Banner>
          ) : null}

          {actionData && actionData.ok ? (
            <Banner tone="success" title="Saved">
              <p>Campaigns config saved successfully.</p>
            </Banner>
          ) : null}

          <Card padding="400">
            <BlockStack gap="400">
              <Text as="h2" variant="headingMd">
                Add campaign
              </Text>

              <InlineStack gap="300" align="start" blockAlign="center">
                <div style={{ minWidth: 320 }}>
                  <Select
                    label="Type"
                    options={CAMPAIGN_TYPE_OPTIONS.map((o) => ({ label: o.label, value: o.value }))}
                    value={selectedType}
                    onChange={(value: string) => setSelectedType(value as CampaignType)}
                  />
                </div>

                <Button onClick={addCampaign} variant="primary">
                  Add
                </Button>
              </InlineStack>
            </BlockStack>
          </Card>

          <div style={{ height: 16 }} />

          <Card padding="400">
            <BlockStack gap="400">
              <Text as="h2" variant="headingMd">
                Campaigns list
              </Text>

              {campaigns.length === 0 ? (
                <Text as="p" tone="subdued">
                  No campaigns yet.
                </Text>
              ) : (
                <BlockStack gap="500">
                  {campaigns.map((c, idx) => (
                    <Card key={c.id} padding="400">
                      <BlockStack gap="400">
                        <InlineStack gap="300" align="space-between" blockAlign="center">
                          <Text as="h3" variant="headingSm">
                            {typeLabel(c.type)}
                          </Text>
                          <Button tone="critical" onClick={() => removeCampaign(idx)}>
                            Delete
                          </Button>
                        </InlineStack>

                        <Divider />

                        <BlockStack gap="300">
                          <TextField
                            label="ID"
                            value={c.id}
                            onChange={(value: string) => updateCampaign(idx, { ...(c as any), id: String(value || "").trim() })}
                            helpText="Unique campaign ID"
                            autoComplete="off"
                          />

                          <TextField
                            label="Label"
                            value={c.label}
                            onChange={(value: string) => updateCampaign(idx, { ...(c as any), label: String(value || "") })}
                            autoComplete="off"
                          />

                          <InlineStack gap="300">
                            <div style={{ flex: 1 }}>
                              <TextField
                                label="Priority"
                                type="number"
                                value={String(c.priority)}
                                onChange={(value: string) => updateCampaign(idx, { ...(c as any), priority: toNumber(value, 0) })}
                                autoComplete="off"
                              />
                            </div>
                            <div style={{ flex: 1 }}>
                              <Select
                                label="Stackable"
                                options={[
                                  { label: "Yes", value: "true" },
                                  { label: "No", value: "false" },
                                ]}
                                value={c.stackable ? "true" : "false"}
                                onChange={(value: string) => updateCampaign(idx, { ...(c as any), stackable: value === "true" })}
                              />
                            </div>
                          </InlineStack>

                          <Divider />

                          {renderTypeFields(c, idx)}
                        </BlockStack>
                      </BlockStack>
                    </Card>
                  ))}
                </BlockStack>
              )}

              <Divider />

              <Form method="post">
                <input type="hidden" name="campaignsJson" value={JSON.stringify(campaigns)} />
                <TextField
                  label="Logged-in customer discount (%)"
                  type="number"
                  name="memberDiscountPercent"
                  value={String(memberDiscountPercent)}
                  onChange={(value: string) =>
                    setMemberDiscountPercent(Math.max(0, Math.min(100, toNumber(value, DEFAULT_LOGGED_IN_DISCOUNT_PERCENT))))
                  }
                  autoComplete="off"
                  helpText="Applied for any authenticated storefront customer, regardless of role."
                />
                <div style={{ height: 12 }} />
                <InlineStack gap="300" align="end">
                  <Button submit variant="primary" loading={isSaving}>
                    Save campaigns
                  </Button>
                </InlineStack>
              </Form>

              <Text as="p" tone="subdued">
                These campaigns are used by your backend pricingEngine. After saving, they are stored in shop metafield{" "}
                <code>mk.campaigns</code>.
              </Text>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
