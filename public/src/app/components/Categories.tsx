import { ChevronRight } from "lucide-react";

const categories = [
  { name: "Gel Polish" },
  { name: "Nail Tools" },
  { name: "UV/LED Lamps" },
  { name: "Nail Care" },
  { name: "Decorations" },
  { name: "Extensions" },
  { name: "Kits" },
];

export function Categories() {
  return (
    <section className="px-4 sm:px-6 mt-2">
      <div className="max-w-[1415px] mx-auto">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="group border border-[#e8e5e3] rounded-xl p-3 sm:p-4 bg-white cursor-pointer hover:border-[#C8A08C] hover:shadow-sm transition-all duration-200"
            >
              <div className="aspect-square rounded-lg overflow-hidden bg-[#F5F3F1] mb-2 sm:mb-3" />
              <div className="flex items-center justify-between">
                <span className="text-[11px] sm:text-[13px] text-[#1A1A1A]" style={{ fontWeight: 600 }}>
                  {cat.name}
                </span>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-[#e8e5e3] flex items-center justify-center group-hover:border-[#C8A08C] transition-colors hidden sm:flex">
                  <ChevronRight size={14} className="text-[#999] group-hover:text-[#C8A08C] transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
