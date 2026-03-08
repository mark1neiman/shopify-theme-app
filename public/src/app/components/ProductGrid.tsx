import { useState } from "react";
import { ProductCard } from "./ProductCard";

const products = {
  "New Arrivals": [
    { name: "Luxe Gel Polish — Nude Rose", price: "€14.99", badge: "New" as const },
    { name: "Professional Base Coat", price: "€11.99" },
    { name: "UV/LED Nail Lamp 48W", price: "€39.99", oldPrice: "€54.99", badge: "Sale" as const },
    { name: "Nail Art Brush Set (15 pcs)", price: "€18.99", badge: "Bestseller" as const },
    { name: "Cuticle Oil — Almond", price: "€7.99" },
    { name: "Glitter Collection Set", price: "€22.99", badge: "New" as const },
    { name: "Gel Extension Kit", price: "€34.99", oldPrice: "€44.99", badge: "Sale" as const },
    { name: "Matte Top Coat", price: "€9.99" },
    { name: "Pro Nail File Set (3 pcs)", price: "€5.99" },
    { name: "Hand Cream Professional", price: "€12.99", badge: "Bestseller" as const },
  ],
  "Bestsellers": [
    { name: "Luxe Gel Polish — Nude Rose", price: "€14.99", badge: "Bestseller" as const },
    { name: "UV/LED Nail Lamp 48W", price: "€39.99", badge: "Bestseller" as const },
    { name: "Nail Art Brush Set (15 pcs)", price: "€18.99", badge: "Bestseller" as const },
    { name: "Gel Extension Kit", price: "€34.99", oldPrice: "€44.99", badge: "Sale" as const },
    { name: "Professional Base Coat", price: "€11.99" },
    { name: "Glitter Collection Set", price: "€22.99" },
    { name: "Hand Cream Professional", price: "€12.99" },
    { name: "Matte Top Coat", price: "€9.99" },
    { name: "Cuticle Oil — Almond", price: "€7.99" },
    { name: "Pro Nail File Set (3 pcs)", price: "€5.99" },
  ],
  "Hot Items": [
    { name: "UV/LED Nail Lamp 48W", price: "€39.99", oldPrice: "€54.99", badge: "Sale" as const },
    { name: "Luxe Gel Polish — Nude Rose", price: "€14.99", badge: "New" as const },
    { name: "Glitter Collection Set", price: "€22.99" },
    { name: "Gel Extension Kit", price: "€34.99", oldPrice: "€44.99", badge: "Sale" as const },
    { name: "Hand Cream Professional", price: "€12.99", badge: "Bestseller" as const },
    { name: "Professional Base Coat", price: "€11.99" },
    { name: "Nail Art Brush Set (15 pcs)", price: "€18.99" },
    { name: "Cuticle Oil — Almond", price: "€7.99" },
    { name: "Matte Top Coat", price: "€9.99" },
    { name: "Pro Nail File Set (3 pcs)", price: "€5.99" },
  ],
};

const tabs = ["New Arrivals", "Hot Items", "Bestsellers"] as const;

export function ProductGrid() {
  const [activeTab, setActiveTab] = useState<string>("New Arrivals");

  const currentProducts = products[activeTab as keyof typeof products] || products["New Arrivals"];

  return (
    <section className="px-4 sm:px-6 py-10 sm:py-16">
      <div className="max-w-[1415px] mx-auto">
        {/* Header with Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-10 gap-4">
          <h2 className="text-[24px] sm:text-[30px] text-[#1A1A1A] tracking-[-0.02em]" style={{ fontWeight: 700 }}>
            Latest Products
          </h2>
          <div className="flex gap-4 sm:gap-8 overflow-x-auto pb-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[13px] sm:text-[14px] pb-1.5 border-b-2 transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab
                    ? "text-[#1A1A1A] border-[#1A1A1A]"
                    : "text-[#999] border-transparent hover:text-[#3a3a3a]"
                }`}
                style={{ fontWeight: activeTab === tab ? 600 : 500 }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6">
          {currentProducts.map((product, i) => (
            <ProductCard key={`${activeTab}-${i}`} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
