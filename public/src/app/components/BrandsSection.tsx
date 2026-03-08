import { useState } from "react";

const brands = [
  "Molokom", "Holy Molly", "Belom", "Imen", "Imenka",
  "Semilac", "Indigo Nails", "NeoNail", "Gelish", "OPI", "CND Shellac",
  "Kodi Professional", "Komilfo", "Oxxi Professional", "Global Fashion",
  "Siller Professional", "Lovely", "Naomi", "FOX", "Couture Colour",
  "Moon Full", "Podomonium", "Staleks", "Gehwol", "Alessandro",
  "LCN", "IBD", "Young Nails", "Presto", "Akzentz",
  "Bio Sculpture", "Light Elegance", "Luxio", "Aprés", "Ugly Duckling",
  "Orly", "Essie", "Zoya", "LeChat", "Revel Nail",
  "Kiara Sky", "DND", "Modelones", "Beetles", "Makartt",
];

const INITIAL_VISIBLE = 20;

export function BrandsSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleBrands = showAll ? brands : brands.slice(0, INITIAL_VISIBLE);

  return (
    <section className="py-8 sm:py-10 bg-white">
      <div className="max-w-[1415px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-5 sm:mb-6">
          <h2
            className="text-[18px] sm:text-[22px] text-[#1A1A1A] tracking-[-0.01em]"
            style={{ fontWeight: 600 }}
          >
            Our Brands
          </h2>
          <a
            href="#"
            className="text-[12px] sm:text-[13px] text-[#C8A08C] hover:text-[#b08a74] transition-colors uppercase tracking-[0.1em]"
            style={{ fontWeight: 600 }}
          >
            View All
          </a>
        </div>

        {/* Brand grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
          {visibleBrands.map((brand) => (
            <a
              key={brand}
              href="#"
              className="h-[56px] sm:h-[72px] rounded-lg border border-[#e5e5e5] bg-[#FAFAF9] flex items-center justify-center hover:border-[#C8A08C] hover:bg-white transition-all group"
            >
              <span
                className="text-[12px] sm:text-[13px] text-[#6B6B6B] group-hover:text-[#1A1A1A] transition-colors whitespace-nowrap tracking-[0.03em]"
                style={{ fontWeight: 500 }}
              >
                {brand}
              </span>
            </a>
          ))}
        </div>

        {/* Show more / less */}
        {brands.length > INITIAL_VISIBLE && (
          <div className="flex justify-center mt-5">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-[12px] sm:text-[13px] text-[#1A1A1A] hover:text-[#C8A08C] transition-colors uppercase tracking-[0.1em] border border-[#e5e5e5] rounded-full px-6 sm:px-8 py-2.5 hover:border-[#C8A08C]"
              style={{ fontWeight: 600 }}
            >
              {showAll ? "Show Less" : `Show All ${brands.length} Brands`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
