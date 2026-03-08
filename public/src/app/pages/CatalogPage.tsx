import { useState } from "react";
import {
  SlidersHorizontal,
  Heart,
  ChevronDown,
  ChevronRight,
  Grid3X3,
  List,
  X,
  Check,
  Star,
} from "lucide-react";

// Product images from Figma
import imgPantone10 from "figma:asset/12315c22a26e7ef389758f785bb8655d0750f39b.png";
import imgPantone11 from "figma:asset/845f521bf9b9c5f5237256480183f6bf7c541dbe.png";
import imgPantone8 from "figma:asset/1b49202eb1555df77eb03fa251584457d575f99d.png";
import imgPantone9 from "figma:asset/7782f6519c7497135102c7950464d4ee116b1e3d.png";

/* ─── DATA ─── */

const recentlyViewed = [
  { id: 101, image: imgPantone8, name: "Builder Gel Clear", volume: "30ml", price: 14.90 },
  { id: 102, image: imgPantone11, name: "Top Coat No Wipe", volume: "15ml", price: 9.50 },
  { id: 103, image: imgPantone10, name: "Rubber Base Nude", volume: "11ml", price: 8.00 },
  { id: 104, image: imgPantone9, name: "Gel Polish Pantone 12", volume: "11ml", price: 7.00 },
  { id: 105, image: imgPantone8, name: "Cat Eye Magnetic", volume: "11ml", price: 8.50 },
  { id: 106, image: imgPantone11, name: "Matte Top Coat", volume: "15ml", price: 9.00 },
];

const products = [
  {
    id: 1,
    image: imgPantone10,
    name: "Gel Polish Holy Molly Pantone 10",
    volume: "11ml",
    price: 7.0,
    originalPrice: null,
    rating: 4.8,
    reviews: 24,
    badge: null,
    colors: ["#8B2332", "#C8A08C", "#3a3a3a"],
  },
  {
    id: 2,
    image: imgPantone11,
    name: "Gel Polish Holy Molly Pantone 11",
    volume: "11ml",
    price: 7.0,
    originalPrice: null,
    rating: 4.6,
    reviews: 18,
    badge: null,
    colors: ["#E8DDD5", "#F5F3F1"],
  },
  {
    id: 3,
    image: imgPantone8,
    name: "Gel Polish Holy Molly Pantone 8",
    volume: "11ml",
    price: 7.0,
    originalPrice: 9.5,
    rating: 5.0,
    reviews: 31,
    badge: "Sale",
    colors: ["#2E4A3E", "#5A7A6A"],
  },
  {
    id: 4,
    image: imgPantone9,
    name: "Gel Polish Holy Molly Pantone 9",
    volume: "11ml",
    price: 7.0,
    originalPrice: null,
    rating: 4.9,
    reviews: 12,
    badge: "New",
    colors: ["#6B5040", "#8B6F5C", "#C8A08C"],
  },
  {
    id: 5,
    image: imgPantone10,
    name: "Gel Polish Holy Molly Pantone 5",
    volume: "11ml",
    price: 7.0,
    originalPrice: null,
    rating: 4.3,
    reviews: 9,
    badge: null,
    colors: ["#8B2332"],
  },
  {
    id: 6,
    image: imgPantone11,
    name: "Gel Polish Holy Molly Pantone 6",
    volume: "11ml",
    price: 7.0,
    originalPrice: 8.5,
    rating: 4.7,
    reviews: 15,
    badge: "Sale",
    colors: ["#E8DDD5"],
  },
  {
    id: 7,
    image: imgPantone8,
    name: "Gel Polish Holy Molly Pantone 3",
    volume: "11ml",
    price: 7.0,
    originalPrice: null,
    rating: 4.5,
    reviews: 22,
    badge: null,
    colors: ["#2E4A3E"],
  },
  {
    id: 8,
    image: imgPantone9,
    name: "Gel Polish Holy Molly Pantone 4",
    volume: "11ml",
    price: 7.0,
    originalPrice: null,
    rating: 4.8,
    reviews: 7,
    badge: "New",
    colors: ["#6B5040", "#C8A08C"],
  },
];

const filterGroups = [
  {
    key: "availability",
    label: "Availability",
    options: ["In Stock", "Pre-Order", "Coming Soon"],
  },
  {
    key: "price",
    label: "Price",
    options: ["Under €5", "€5 – €10", "€10 – €20", "€20+"],
  },
  {
    key: "capacity",
    label: "Capacities",
    options: ["5ml", "8ml", "11ml", "15ml", "30ml"],
  },
  {
    key: "finish",
    label: "Finishes",
    options: ["Glossy", "Matte", "Shimmer", "Glitter", "Cat Eye"],
  },
  {
    key: "brand",
    label: "Brand",
    options: ["Holy Molly", "Kodi", "Oxxi", "Siller", "Lunaline", "Moon Full"],
  },
  {
    key: "category",
    label: "Category",
    options: ["Gel Polish", "Builder Gel", "Top Coat", "Base Coat", "Nail Art"],
  },
];

const sortOptions = [
  "Alphabetically, A–Z",
  "Alphabetically, Z–A",
  "Price, low to high",
  "Price, high to low",
  "Best Selling",
  "Newest",
];

/* ─── COMPONENTS ─── */

function FilterSection({
  label,
  options,
  isOpen,
  onToggle,
  selected,
  onSelect,
}: {
  label: string;
  options: string[];
  isOpen: boolean;
  onToggle: () => void;
  selected: string[];
  onSelect: (opt: string) => void;
}) {
  return (
    <div className="border-b border-[#e5e5e5]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-[14px] text-[#1A1A1A] hover:text-[#C8A08C] transition-colors"
        style={{ fontWeight: 500 }}
      >
        <span className="flex items-center gap-2">
          {label}
          {selected.length > 0 && (
            <span className="w-5 h-5 rounded-full bg-[#C8A08C] text-white text-[10px] flex items-center justify-center"
              style={{ fontWeight: 600 }}>
              {selected.length}
            </span>
          )}
        </span>
        <ChevronDown
          size={16}
          className={`text-[#999] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="pb-4 flex flex-col gap-1.5">
          {options.map((opt) => {
            const isSelected = selected.includes(opt);
            return (
              <button
                key={opt}
                onClick={() => onSelect(opt)}
                className={`flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-[13px] transition-colors text-left ${
                  isSelected ? "bg-[#C8A08C]/8 text-[#1A1A1A]" : "text-[#6B6B6B] hover:text-[#1A1A1A] hover:bg-[#F5F3F1]"
                }`}
              >
                <span
                  className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${
                    isSelected ? "bg-[#C8A08C] border-[#C8A08C]" : "border-[#ddd]"
                  }`}
                >
                  {isSelected && <Check size={10} className="text-white" />}
                </span>
                {opt}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function ProductCard({
  product,
  viewMode,
}: {
  product: (typeof products)[0];
  viewMode: "grid" | "list";
}) {
  const [liked, setLiked] = useState(false);

  if (viewMode === "list") {
    return (
      <div className="flex gap-6 bg-white rounded-2xl border border-[#e5e5e5] p-4 hover:border-[#C8A08C]/30 transition-colors group">
        <div className="w-[160px] h-[160px] shrink-0 rounded-xl bg-[#F5F3F1] overflow-hidden relative">
          <img src={product.image} alt={product.name} className="w-full h-full object-contain p-4" />
          {product.badge && (
            <span
              className={`absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] text-white ${
                product.badge === "Sale" ? "bg-[#C8A08C]" : "bg-[#1A1A1A]"
              }`}
              style={{ fontWeight: 600 }}
            >
              {product.badge}
            </span>
          )}
        </div>
        <div className="flex-1 flex flex-col justify-center py-1">
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={i < Math.floor(product.rating) ? "fill-[#C8A08C] text-[#C8A08C]" : "text-[#ddd]"}
              />
            ))}
            <span className="text-[11px] text-[#999] ml-1">({product.reviews})</span>
          </div>
          <h3
            className="text-[15px] text-[#1A1A1A] mb-1 group-hover:text-[#C8A08C] transition-colors"
            style={{ fontWeight: 500 }}
          >
            {product.name}
          </h3>
          <span className="text-[12px] text-[#999] mb-3">{product.volume}</span>
          <div className="flex items-center gap-1.5 mb-3">
            {product.colors.map((c, i) => (
              <span key={i} className="w-3.5 h-3.5 rounded-full border border-white shadow-sm" style={{ backgroundColor: c }} />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[16px] text-[#1A1A1A]" style={{ fontWeight: 700 }}>
              €{product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-[13px] text-[#999] line-through">€{product.originalPrice.toFixed(2)}</span>
            )}
          </div>
        </div>
        <div className="flex flex-col items-end justify-between py-1">
          <button
            onClick={() => setLiked(!liked)}
            className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-[#F5F3F1] transition-colors"
          >
            <Heart size={18} className={liked ? "fill-[#C8A08C] text-[#C8A08C]" : "text-[#ccc]"} />
          </button>
          <button
            className="px-5 py-2 bg-[#1A1A1A] text-white text-[12px] rounded-lg hover:bg-[#C8A08C] transition-colors"
            style={{ fontWeight: 600 }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative">
      {/* Image */}
      <div className="relative bg-[#F5F3F1] rounded-2xl overflow-hidden aspect-square mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
        />
        {/* Wishlist */}
        <button
          onClick={() => setLiked(!liked)}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
            liked ? "bg-[#C8A08C]/10" : "bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100"
          }`}
        >
          <Heart size={16} className={liked ? "fill-[#C8A08C] text-[#C8A08C]" : "text-[#999]"} />
        </button>
        {/* Badge */}
        {product.badge && (
          <span
            className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] text-white ${
              product.badge === "Sale" ? "bg-[#C8A08C]" : "bg-[#1A1A1A]"
            }`}
            style={{ fontWeight: 600 }}
          >
            {product.badge}
          </span>
        )}
        {/* Quick add */}
        <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <button
            className="w-full py-2.5 bg-[#1A1A1A] text-white text-[12px] rounded-lg hover:bg-[#C8A08C] transition-colors"
            style={{ fontWeight: 600 }}
          >
            Quick Add
          </button>
        </div>
      </div>

      {/* Info */}
      <div>
        {/* Rating */}
        <div className="flex items-center gap-1 mb-1.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={11}
              className={i < Math.floor(product.rating) ? "fill-[#C8A08C] text-[#C8A08C]" : "text-[#ddd]"}
            />
          ))}
          <span className="text-[10px] text-[#999] ml-0.5">({product.reviews})</span>
        </div>
        {/* Title */}
        <h3
          className="text-[13px] text-[#1A1A1A] leading-snug mb-1.5 group-hover:text-[#C8A08C] transition-colors"
          style={{ fontWeight: 500 }}
        >
          {product.name} {product.volume}
        </h3>
        {/* Colors */}
        <div className="flex items-center gap-1 mb-2">
          {product.colors.map((c, i) => (
            <span
              key={i}
              className="w-3 h-3 rounded-full border border-white shadow-sm"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-[15px] text-[#1A1A1A]" style={{ fontWeight: 700 }}>
            €{product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-[12px] text-[#999] line-through">€{product.originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── MAIN PAGE ─── */

export function CatalogPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("Alphabetically, A–Z");
  const [showSort, setShowSort] = useState(false);
  const [showFilters, setShowFilters] = useState(true);
  const [openFilters, setOpenFilters] = useState<Record<string, boolean>>({
    availability: true,
    price: true,
    capacity: true,
    finish: true,
    brand: true,
    category: true,
  });
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

  const toggleFilter = (key: string) => {
    setOpenFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleOption = (filterKey: string, option: string) => {
    setSelectedFilters((prev) => {
      const current = prev[filterKey] || [];
      if (current.includes(option)) {
        return { ...prev, [filterKey]: current.filter((o) => o !== option) };
      }
      return { ...prev, [filterKey]: [...current, option] };
    });
  };

  const totalActiveFilters = Object.values(selectedFilters).reduce((sum, arr) => sum + arr.length, 0);

  const clearAllFilters = () => setSelectedFilters({});

  return (
    <div className="pb-16">
      {/* Breadcrumb */}
      <div className="max-w-[1415px] mx-auto px-4 sm:px-6 pt-5 pb-4">
        <nav className="flex items-center gap-2 text-[13px]">
          <a href="/" className="text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors">
            Home
          </a>
          <ChevronRight size={12} className="text-[#ccc]" />
          <span className="text-[#1A1A1A]" style={{ fontWeight: 500 }}>
            Products
          </span>
        </nav>
      </div>

      {/* Products Banner */}
      <div className="max-w-[1415px] mx-auto px-4 sm:px-6 mb-6 sm:mb-8">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#C8A08C] to-[#DEC0AE] px-6 sm:px-10 py-7 sm:py-10">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-white/5 -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-1/3 w-[180px] h-[180px] rounded-full bg-white/5 translate-y-1/2" />
          <h1
            className="text-[26px] sm:text-[36px] text-white tracking-[-0.02em] relative z-10"
            style={{ fontWeight: 700 }}
          >
            Products
          </h1>
          <p className="text-white/70 text-[14px] mt-1 relative z-10">
            Professional nail products for salons and technicians
          </p>
        </div>
      </div>

      {/* Toolbar */}
      <div className="max-w-[1415px] mx-auto px-4 sm:px-6 mb-5 sm:mb-6">
        <div className="flex flex-wrap items-center justify-between gap-3 py-3 border-t border-b border-[#e5e5e5]">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] transition-colors ${
                showFilters
                  ? "bg-[#1A1A1A] text-white"
                  : "bg-[#F5F3F1] text-[#1A1A1A] hover:bg-[#e5e5e5]"
              }`}
              style={{ fontWeight: 600 }}
            >
              <SlidersHorizontal size={14} />
              Filter
              {totalActiveFilters > 0 && (
                <span className="ml-1 w-5 h-5 rounded-full bg-[#C8A08C] text-white text-[10px] flex items-center justify-center">
                  {totalActiveFilters}
                </span>
              )}
            </button>
            <span className="text-[13px] text-[#999]">
              <span style={{ fontWeight: 600 }} className="text-[#1A1A1A]">
                {products.length}
              </span>{" "}
              products
            </span>
            {totalActiveFilters > 0 && (
              <button
                onClick={clearAllFilters}
                className="flex items-center gap-1 text-[12px] text-[#C8A08C] hover:text-[#A67B68] transition-colors"
                style={{ fontWeight: 500 }}
              >
                <X size={12} />
                Clear all
              </button>
            )}
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setShowSort(!showSort)}
                className="flex items-center gap-2 text-[13px] text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors"
              >
                <span className="text-[#999]">Sort by:</span>
                <span style={{ fontWeight: 500 }} className="text-[#1A1A1A]">
                  {sortBy}
                </span>
                <ChevronDown size={14} className={`transition-transform ${showSort ? "rotate-180" : ""}`} />
              </button>
              {showSort && (
                <>
                  <div className="fixed inset-0 z-30" onClick={() => setShowSort(false)} />
                  <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-lg border border-[#e5e5e5] py-2 min-w-[220px] z-40">
                    {sortOptions.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => { setSortBy(opt); setShowSort(false); }}
                        className={`w-full text-left px-4 py-2 text-[13px] transition-colors ${
                          sortBy === opt
                            ? "text-[#C8A08C] bg-[#C8A08C]/5"
                            : "text-[#6B6B6B] hover:bg-[#F5F3F1] hover:text-[#1A1A1A]"
                        }`}
                        style={{ fontWeight: sortBy === opt ? 600 : 400 }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className="flex items-center bg-[#F5F3F1] rounded-lg p-0.5">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === "grid" ? "bg-white shadow-sm text-[#1A1A1A]" : "text-[#999] hover:text-[#6B6B6B]"
                }`}
              >
                <Grid3X3 size={16} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === "list" ? "bg-white shadow-sm text-[#1A1A1A]" : "text-[#999] hover:text-[#6B6B6B]"
                }`}
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content: Sidebar + Grid */}
      <div className="max-w-[1415px] mx-auto px-4 sm:px-6">
        <div className="flex gap-6 lg:gap-8">
          {showFilters && (
            <aside className="hidden md:block w-[220px] lg:w-[240px] shrink-0">
              {totalActiveFilters > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-4 pb-4 border-b border-[#e5e5e5]">
                  {Object.entries(selectedFilters).map(([filterKey, options]) =>
                    options.map((opt) => (
                      <button
                        key={`${filterKey}-${opt}`}
                        onClick={() => toggleOption(filterKey, opt)}
                        className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#F5F3F1] text-[11px] text-[#6B6B6B] hover:bg-[#C8A08C]/10 hover:text-[#C8A08C] transition-colors"
                        style={{ fontWeight: 500 }}
                      >
                        {opt}
                        <X size={10} />
                      </button>
                    ))
                  )}
                </div>
              )}
              {filterGroups.map((group) => (
                <FilterSection
                  key={group.key}
                  label={group.label}
                  options={group.options}
                  isOpen={openFilters[group.key] || false}
                  onToggle={() => toggleFilter(group.key)}
                  selected={selectedFilters[group.key] || []}
                  onSelect={(opt) => toggleOption(group.key, opt)}
                />
              ))}
            </aside>
          )}
          <div className="flex-1 min-w-0">
            {viewMode === "grid" ? (
              <div className={`grid gap-3 sm:gap-5 grid-cols-2 sm:grid-cols-3 ${showFilters ? "lg:grid-cols-3 xl:grid-cols-4" : "md:grid-cols-4 lg:grid-cols-5"}`}>
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} viewMode="grid" />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} viewMode="list" />
                ))}
              </div>
            )}
            <div className="flex items-center justify-center gap-1.5 mt-12">
              {[1, 2, 3, "...", 12].map((page, i) => (
                <button
                  key={i}
                  className={`w-10 h-10 rounded-lg text-[13px] transition-colors ${
                    page === 1
                      ? "bg-[#1A1A1A] text-white"
                      : page === "..."
                      ? "text-[#999] cursor-default"
                      : "text-[#6B6B6B] hover:bg-[#F5F3F1] hover:text-[#1A1A1A]"
                  }`}
                  style={{ fontWeight: page === 1 ? 600 : 400 }}
                >
                  {page}
                </button>
              ))}
              <button className="flex items-center gap-1 px-4 h-10 rounded-lg text-[13px] text-[#6B6B6B] hover:bg-[#F5F3F1] transition-colors ml-2">
                Next
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recently Viewed */}
      <div className="max-w-[1415px] mx-auto px-4 sm:px-6 mt-12 sm:mt-16">
        <div className="flex items-center justify-between mb-6">
          <h2
            className="text-[22px] text-[#1A1A1A] tracking-[-0.02em]"
            style={{ fontWeight: 700 }}
          >
            Recently Viewed
          </h2>
          <button
            className="text-[13px] text-[#C8A08C] hover:text-[#A67B68] transition-colors flex items-center gap-1"
            style={{ fontWeight: 500 }}
          >
            Clear history
            <X size={14} />
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {recentlyViewed.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="bg-[#F5F3F1] rounded-xl overflow-hidden aspect-square mb-3 relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4
                className="text-[12px] text-[#1A1A1A] leading-snug mb-0.5 group-hover:text-[#C8A08C] transition-colors"
                style={{ fontWeight: 500 }}
              >
                {item.name}
              </h4>
              <span className="text-[11px] text-[#999]">{item.volume}</span>
              <p
                className="text-[13px] text-[#1A1A1A] mt-1"
                style={{ fontWeight: 700 }}
              >
                €{item.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* About section */}
      <div className="max-w-[1415px] mx-auto px-4 sm:px-6 mt-12 sm:mt-16">
        <div className="bg-[#F5F3F1] rounded-2xl p-6 sm:p-10">
          <h2
            className="text-[24px] text-[#1A1A1A] tracking-[-0.02em] mb-4"
            style={{ fontWeight: 700 }}
          >
            About Our Products
          </h2>
          <p className="text-[14px] text-[#6B6B6B] leading-relaxed max-w-[800px] mb-3">
            From professional gel polishes to premium builder gels and cutting-edge nail art supplies, every product in our catalog meets the highest European quality standards. We work directly with manufacturers to ensure authenticity, freshness, and the best prices for salon professionals.
          </p>
          <p className="text-[14px] text-[#6B6B6B] leading-relaxed max-w-[800px]">
            All products are TPO-free certified, EU-compliant, and tested by professional nail technicians across Europe. Whether you're stocking your salon or building your personal kit — we've curated only the best for you.
          </p>
        </div>
      </div>
    </div>
  );
}