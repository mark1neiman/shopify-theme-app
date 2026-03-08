import { HeroSection } from "../components/HeroSection";
import { PromoBanner } from "../components/PromoBanner";
import { Categories } from "../components/Categories";
import { ProductGrid } from "../components/ProductGrid";
import { CollectionBanner, FeaturedSection } from "../components/CollectionBanner";
import {
  ShopBySection,
  EditorialSection,
  ShowcaseSection,
  PromoBannerDual,
  FavoritesSection,
  PopularSearches,
} from "../components/ShopBySection";
import { FullWidthBanner, TrustBadges } from "../components/TrustBadges";
import { BrandsSection } from "../components/BrandsSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <PromoBanner />
      <Categories />
      <BrandsSection />
      <ProductGrid />
      <CollectionBanner />
      <FeaturedSection />
      <ShopBySection />
      <EditorialSection />
      <ShowcaseSection />
      <PromoBannerDual />
      <FavoritesSection />
      <PopularSearches />
      <FullWidthBanner />
      <TrustBadges />
    </>
  );
}