import { Heart, ShoppingBag } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: string;
  oldPrice?: string;
  image?: string;
  badge?: "New" | "Sale" | "Bestseller";
}

export function ProductCard({ name, price, oldPrice, badge }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      {/* Image Container — placeholder */}
      <div className="relative aspect-square rounded-xl overflow-hidden bg-[#F5F3F1] mb-4">
        {/* Badge */}
        {badge && (
          <span
            className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] tracking-[0.04em] ${
              badge === "Sale"
                ? "bg-[#C8A08C] text-white"
                : badge === "Bestseller"
                ? "bg-[#1A1A1A] text-white"
                : "bg-white text-[#1A1A1A] border border-[#e8e5e3]"
            }`}
            style={{ fontWeight: 600 }}
          >
            {badge}
          </span>
        )}

        {/* Wishlist */}
        <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white">
          <Heart size={15} className="text-[#3a3a3a]" />
        </button>

        {/* Quick Add */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <button className="w-full flex items-center justify-center gap-2 bg-[#1A1A1A] text-white py-2.5 rounded-lg text-[13px] hover:bg-[#333] transition-colors" style={{ fontWeight: 500 }}>
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-1">
        <h3 className="text-[14px] text-[#1A1A1A] group-hover:text-[#C8A08C] transition-colors line-clamp-1" style={{ fontWeight: 500 }}>
          {name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-[15px] text-[#1A1A1A]" style={{ fontWeight: 600 }}>
            {price}
          </span>
          {oldPrice && (
            <span className="text-[13px] text-[#999] line-through">
              {oldPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
