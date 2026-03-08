import { useState } from "react";
import { Link } from "react-router";
import {
  Search,
  SlidersHorizontal,
  Heart,
  ChevronDown,
  ChevronRight,
  Grid3X3,
  List,
  X,
  Check,
  Star,
  Plus,
} from "lucide-react";

import imgPantone10 from "figma:asset/12315c22a26e7ef389758f785bb8655d0750f39b.png";
import imgPantone11 from "figma:asset/845f521bf9b9c5f5237256480183f6bf7c541dbe.png";
import imgPantone8 from "figma:asset/1b49202eb1555df77eb03fa251584457d575f99d.png";
import imgPantone9 from "figma:asset/7782f6519c7497135102c7950464d4ee116b1e3d.png";

/* ─── Static data ─── */

const products = [
  { id: 1, image: imgPantone8, name: "Gel Polish Holy Molly Pantone 8", volume: "11ml", price: 7.0, originalPrice: 9.5, rating: 5.0, reviews: 31, badge: "Sale" as string | null, colors: ["#2E4A3E", "#5A7A6A"] },
  { id: 2, image: imgPantone11, name: "Gel Polish Holy Molly Pantone 11", volume: "11ml", price: 7.0, originalPrice: null as number | null, rating: 4.6, reviews: 18, badge: null, colors: ["#E8DDD5", "#F5F3F1"] },
  { id: 3, image: imgPantone10, name: "Gel Polish Holy Molly Pantone 10", volume: "11ml", price: 7.0, originalPrice: null, rating: 4.8, reviews: 24, badge: null, colors: ["#8B2332", "#C8A08C", "#3a3a3a"] },
  { id: 4, image: imgPantone9, name: "Gel Polish Holy Molly Pantone 9", volume: "11ml", price: 7.0, originalPrice: null, rating: 4.9, reviews: 12, badge: "New", colors: ["#6B5040", "#8B6F5C", "#C8A08C"] },
  { id: 5, image: imgPantone10, name: "Gel Polish Holy Molly Pantone 5", volume: "11ml", price: 7.0, originalPrice: null, rating: 4.3, reviews: 9, badge: null, colors: ["#8B2332"] },
  { id: 6, image: imgPantone11, name: "Gel Polish Holy Molly Pantone 6", volume: "11ml", price: 7.0, originalPrice: 8.5, rating: 4.7, reviews: 15, badge: "Sale", colors: ["#E8DDD5"] },
  { id: 7, image: imgPantone8, name: "Gel Polish Holy Molly Pantone 3", volume: "11ml", price: 7.0, originalPrice: null, rating: 4.5, reviews: 22, badge: null, colors: ["#2E4A3E"] },
  { id: 8, image: imgPantone9, name: "Gel Polish Holy Molly Pantone 4", volume: "11ml", price: 7.0, originalPrice: null, rating: 4.8, reviews: 7, badge: "New", colors: ["#6B5040", "#C8A08C"] },
];

const filterGroups = [
  { key: "availability", label: "Availability", options: ["In Stock", "Pre-Order"] },
  { key: "price", label: "Price", options: ["Under €5", "€5 – €10", "€10 – €20", "€20+"] },
  { key: "capacity", label: "Capacities", options: ["5ml", "8ml", "11ml", "15ml", "30ml"] },
  { key: "brand", label: "Brand", options: ["Holy Molly", "Kodi", "Oxxi", "Siller", "Lunaline", "Moon Full"] },
  { key: "category", label: "Category", options: ["Gel Polish", "Builder Gel", "Top Coat", "Base Coat", "Nail Art"] },
];

/* ─── Components ─── */

function FilterSection({ label, options }: { label: string; options: string[] }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-[#e5e5e5]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-[14px] text-[#1A1A1A] hover:text-[#C8A08C] transition-colors cursor-pointer"
        style={{ fontWeight: 500 }}
      >
        {label}
        <Plus size={14} className={`text-[#999] transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`} />
      </button>
      {isOpen && (
        <div className="pb-4 flex flex-col gap-1.5">
          {options.map((opt) => (
            <button
              key={opt}
              className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-[13px] text-[#6B6B6B] hover:text-[#1A1A1A] hover:bg-[#F5F3F1] transition-colors text-left cursor-pointer"
            >
              <span className="w-4 h-4 rounded border border-[#ddd] shrink-0" />
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ProductCard({ product }: { product: (typeof products)[0] }) {
  const [liked, setLiked] = useState(false);

  return (
    <Link to={`/product/${product.id}`} className="group relative block">
      <div className="relative bg-[#F5F3F1] rounded-2xl overflow-hidden aspect-square mb-4">
        <img src={product.image} alt={product.name} className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500" />
        <button
          onClick={(e) => { e.preventDefault(); setLiked(!liked); }}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
            liked ? "bg-[#C8A08C]/10" : "bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100"
          }`}
        >
          <Heart size={16} className={liked ? "fill-[#C8A08C] text-[#C8A08C]" : "text-[#999]"} />
        </button>
        {product.badge && (
          <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] text-white ${product.badge === "Sale" ? "bg-[#C8A08C]" : "bg-[#1A1A1A]"}`} style={{ fontWeight: 600 }}>
            {product.badge}
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <button
            onClick={(e) => e.preventDefault()}
            className="w-full py-2.5 bg-[#1A1A1A] text-white text-[12px] rounded-lg hover:bg-[#C8A08C] transition-colors cursor-pointer"
            style={{ fontWeight: 600 }}
          >
            Quick Add
          </button>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-1 mb-1.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={11} className={i < Math.floor(product.rating) ? "fill-[#C8A08C] text-[#C8A08C]" : "text-[#ddd]"} />
          ))}
          <span className="text-[10px] text-[#999] ml-0.5">({product.reviews})</span>
        </div>
        <h3 className="text-[13px] text-[#1A1A1A] leading-snug mb-1.5 group-hover:text-[#C8A08C] transition-colors" style={{ fontWeight: 500 }}>
          {product.name} {product.volume}
        </h3>
        <div className="flex items-center gap-1 mb-2">
          {product.colors.map((c, i) => (
            <span key={i} className="w-3 h-3 rounded-full border border-white shadow-sm" style={{ backgroundColor: c }} />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[15px] text-[#1A1A1A]" style={{ fontWeight: 700 }}>€{product.price.toFixed(2)}</span>
          {product.originalPrice && <span className="text-[12px] text-[#999] line-through">€{product.originalPrice.toFixed(2)}</span>}
        </div>
      </div>
    </Link>
  );
}

/* ═══════════════════════════════════════════
   SEARCH PAGE — static demo
═══════════════════════════════════════════ */

export function SearchPage() {
  const [query] = useState("Holy Molly");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(true);
  const [showSort, setShowSort] = useState(false);
  const [sortBy, setSortBy] = useState("Relevance");

  const sortOptions = ["Relevance", "Price, low to high", "Price, high to low", "Best Selling", "Newest"];

  return (
    <div className="pb-16">
      {/* Breadcrumb */}
      <div className="max-w-[1415px] mx-auto px-6 pt-5 pb-4">
        <nav className="flex items-center gap-2 text-[13px]">
          <Link to="/" className="text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors">Home</Link>
          <ChevronRight size={12} className="text-[#ccc]" />
          <span className="text-[#1A1A1A]" style={{ fontWeight: 500 }}>Search results</span>
        </nav>
      </div>

      {/* Title + search bar */}
      <div className="max-w-[1415px] mx-auto px-6 mb-8 text-center">
        <h1 className="text-[36px] text-[#1A1A1A] tracking-[-0.02em] mb-6" style={{ fontWeight: 700 }}>
          Search results
        </h1>
        <div className="max-w-[600px] mx-auto relative">
          <input
            type="text"
            defaultValue={query}
            placeholder="Search products..."
            className="w-full h-[52px] bg-white rounded-full pl-6 pr-24 text-[15px] text-[#1A1A1A] placeholder:text-[#bbb] outline-none focus:ring-2 focus:ring-[#C8A08C]/30 transition-shadow border border-[#e5e5e5]"
            readOnly
          />
          <button className="absolute right-14 top-1/2 -translate-y-1/2 text-[13px] text-[#999] hover:text-[#1A1A1A] transition-colors cursor-pointer" style={{ fontWeight: 500 }}>
            Clear
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#F5F3F1] transition-colors">
            <Search size={20} className="text-[#999]" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="max-w-[1415px] mx-auto px-6 mb-6">
        <div className="flex items-center justify-between py-3 border-t border-b border-[#e5e5e5]">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] transition-colors cursor-pointer ${
                showFilters ? "bg-[#1A1A1A] text-white" : "bg-[#F5F3F1] text-[#1A1A1A] hover:bg-[#e5e5e5]"
              }`}
              style={{ fontWeight: 600 }}
            >
              <SlidersHorizontal size={14} />
              Filter
            </button>
            <span className="text-[13px] text-[#999]">
              <span style={{ fontWeight: 600 }} className="text-[#1A1A1A]">{products.length}</span>{" "}results
            </span>
          </div>
          <div className="flex items-center gap-4">
            {/* Sort */}
            <div className="relative">
              <button
                onClick={() => setShowSort(!showSort)}
                className="flex items-center gap-2 text-[13px] text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors cursor-pointer"
              >
                <span className="text-[#999]">Sort by:</span>
                <span style={{ fontWeight: 500 }} className="text-[#1A1A1A]">{sortBy}</span>
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
                        className={`w-full text-left px-4 py-2 text-[13px] transition-colors cursor-pointer ${
                          sortBy === opt ? "text-[#C8A08C] bg-[#C8A08C]/5" : "text-[#6B6B6B] hover:bg-[#F5F3F1] hover:text-[#1A1A1A]"
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

            {/* View toggle */}
            <div className="flex items-center bg-[#F5F3F1] rounded-lg p-0.5">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-colors cursor-pointer ${
                  viewMode === "grid" ? "bg-white shadow-sm text-[#1A1A1A]" : "text-[#999] hover:text-[#6B6B6B]"
                }`}
              >
                <Grid3X3 size={16} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-colors cursor-pointer ${
                  viewMode === "list" ? "bg-white shadow-sm text-[#1A1A1A]" : "text-[#999] hover:text-[#6B6B6B]"
                }`}
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-[1415px] mx-auto px-6">
        <div className="flex gap-8">
          {/* Sidebar filters */}
          {showFilters && (
            <aside className="w-[240px] shrink-0">
              {filterGroups.map((group) => (
                <FilterSection key={group.key} label={group.label} options={group.options} />
              ))}
            </aside>
          )}

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            <div className={`grid gap-3 sm:gap-5 grid-cols-2 sm:grid-cols-3 ${showFilters ? "lg:grid-cols-3 xl:grid-cols-4" : "md:grid-cols-4 lg:grid-cols-5"}`}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}