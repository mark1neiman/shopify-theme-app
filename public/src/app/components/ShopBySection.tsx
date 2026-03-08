import { ProductCard } from "./ProductCard";

const swatchProducts = [
  { name: "Nude Collection 6-Pack", price: "€49.99", oldPrice: "€64.99", badge: "Sale" as const },
  { name: "French Manicure Set", price: "€24.99", badge: "Bestseller" as const },
  { name: "Builder Gel Clear 30ml", price: "€16.99" },
  { name: "Polygel Starter Kit", price: "€42.99", badge: "New" as const },
  { name: "Rubber Base Coat 15ml", price: "€13.99" },
];

export function ShopBySection() {
  return (
    <section className="px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-[1415px] mx-auto">
        <h2 className="text-[22px] sm:text-[28px] text-[#1A1A1A] tracking-[-0.02em] mb-6 sm:mb-8" style={{ fontWeight: 700 }}>
          Shop By Gel Systems
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6">
          {swatchProducts.map((product, i) => (
            <ProductCard key={i} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function EditorialSection() {
  return (
    <section className="px-4 sm:px-6 py-6 sm:py-8">
      <div className="max-w-[1415px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Left - The Story */}
          <div className="bg-[#F5EDE6] rounded-2xl overflow-hidden flex flex-col sm:flex-row">
            <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <span className="text-[11px] uppercase tracking-[0.15em] text-[#999] mb-3" style={{ fontWeight: 600 }}>
                The nanails story
              </span>
              <h3 className="text-[22px] sm:text-[28px] text-[#1A1A1A] leading-tight tracking-[-0.02em] mb-3 sm:mb-4" style={{ fontWeight: 700 }}>
                Quality<br />Standards
              </h3>
              <p className="text-[12px] sm:text-[13px] text-[#6B6B6B] leading-relaxed mb-4 sm:mb-6">
                European-made formulas with salon-grade performance. Trusted by professionals.
              </p>
              <a href="#" className="text-[#C8A08C] text-[13px]" style={{ fontWeight: 600 }}>
                Read more &rarr;
              </a>
            </div>
            <div className="w-full h-[160px] sm:w-[200px] lg:w-[240px] sm:h-auto shrink-0 bg-[#E8DDD5]" />
          </div>

          {/* Right - Company Data */}
          <div className="bg-white border border-[#e8e5e3] rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <span className="text-[11px] uppercase tracking-[0.15em] text-[#999] mb-4 sm:mb-5" style={{ fontWeight: 600 }}>
              Company facts
            </span>
            <div className="grid grid-cols-2 gap-5 sm:gap-8">
              {[
                { num: "500+", label: "Professional Products" },
                { num: "25K+", label: "Salon Partners" },
                { num: "15+", label: "European Countries" },
                { num: "99%", label: "Customer Satisfaction" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-[24px] sm:text-[32px] text-[#C8A08C] leading-none mb-1" style={{ fontWeight: 700 }}>
                    {stat.num}
                  </div>
                  <div className="text-[12px] sm:text-[13px] text-[#6B6B6B]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ShowcaseSection() {
  return (
    <section className="px-4 sm:px-6 py-6 sm:py-8">
      <div className="max-w-[1415px] mx-auto">
        <div className="bg-[#C8A08C]/10 rounded-2xl p-6 sm:p-8 lg:p-10 text-center">
          <h2 className="text-[20px] sm:text-[26px] text-[#1A1A1A] tracking-[-0.01em] mb-2" style={{ fontWeight: 700 }}>
            Showcase Us
          </h2>
          <p className="text-[13px] sm:text-[14px] text-[#6B6B6B] mb-5 sm:mb-6">
            Share your work using <span className="text-[#C8A08C]" style={{ fontWeight: 600 }}>#nanails</span> and get featured
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden bg-[#F5F3F1]" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PromoBannerDual() {
  return (
    <section className="px-4 sm:px-6 py-6 sm:py-8">
      <div className="max-w-[1415px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {/* Left banner */}
        <div className="relative rounded-2xl overflow-hidden h-[200px] sm:h-[240px] lg:h-[280px] bg-[#1A1A1A] group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-5 sm:p-6 lg:p-8">
            <h3 className="text-white text-[20px] sm:text-[24px] lg:text-[28px] leading-tight mb-2" style={{ fontWeight: 700 }}>
              Gel Collection<br />Essentials
            </h3>
            <button className="mt-2 sm:mt-4 bg-white/50 text-[#1A1A1A] px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-[12px] sm:text-[13px] hover:bg-white transition-all" style={{ fontWeight: 600 }}>
              Shop Now
            </button>
          </div>
        </div>

        {/* Right banner */}
        <div className="relative rounded-2xl overflow-hidden h-[200px] sm:h-[240px] lg:h-[280px] bg-[#1A1A1A] group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-5 sm:p-6 lg:p-8">
            <h3 className="text-white text-[20px] sm:text-[24px] lg:text-[28px] leading-tight mb-2" style={{ fontWeight: 700 }}>
              25% Off<br />Care Products
            </h3>
            <button className="mt-2 sm:mt-4 bg-white/50 text-[#1A1A1A] px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-[12px] sm:text-[13px] hover:bg-white transition-all" style={{ fontWeight: 600 }}>
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FavoritesSection() {
  const favorites = [
    { name: "Starter Kit Premium", price: "€69.99", oldPrice: "€89.99", badge: "Sale" as const },
    { name: "Nail Art Decoration Set", price: "€28.99", badge: "Bestseller" as const },
    { name: "Professional Lamp 96W", price: "€59.99" },
    { name: "Cuticle Oil Set 3-Pack", price: "€19.99", badge: "New" as const },
    { name: "Gel Remover Kit", price: "€14.99" },
  ];

  return (
    <section className="px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-[1415px] mx-auto">
        <h2 className="text-[22px] sm:text-[28px] text-[#1A1A1A] tracking-[-0.02em] text-center mb-6 sm:mb-8" style={{ fontWeight: 700 }}>
          Pro Favorites
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6">
          {favorites.map((product, i) => (
            <ProductCard key={i} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function PopularSearches() {
  const searches = [
    "Gel Polish Sets", "Builder Gel", "Nail Lamp", "French Tips",
    "Nail Art Brushes", "Base Coat", "Top Coat", "Cuticle Oil",
    "Nail Stickers", "Polygel Kit", "Rubber Base", "Chrome Powder",
  ];

  return (
    <section className="px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-[1415px] mx-auto text-center">
        <h2 className="text-[22px] sm:text-[28px] text-[#1A1A1A] tracking-[-0.02em] mb-6 sm:mb-8" style={{ fontWeight: 700 }}>
          Explore Popular Searches
        </h2>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {searches.map((term) => (
            <a
              key={term}
              href="#"
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-[#e8e5e3] text-[12px] sm:text-[13px] text-[#3a3a3a] hover:border-[#C8A08C] hover:text-[#C8A08C] transition-all duration-200"
              style={{ fontWeight: 500 }}
            >
              {term}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
