import { useState, useEffect } from "react";
import { Link } from "react-router";
import {
  X,
  Minus,
  Plus,
  Truck,
  ChevronRight,
  Tag,
  ShoppingBag,
  Shield,
  RotateCcw,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import imgPantone8 from "figma:asset/1b49202eb1555df77eb03fa251584457d575f99d.png";
import imgPantone10 from "figma:asset/12315c22a26e7ef389758f785bb8655d0750f39b.png";
import imgPantone11 from "figma:asset/845f521bf9b9c5f5237256480183f6bf7c541dbe.png";

interface CartItem {
  id: number;
  name: string;
  volume: string;
  image: string;
  shade?: string;
  shadeColor?: string;
  price: number;
  originalPrice?: number;
  qty: number;
}

const initialItems: CartItem[] = [
  {
    id: 1,
    name: "Gel Polish Holy Molly Pantone 8",
    volume: "11ml",
    image: imgPantone8,
    shade: "Off Holly",
    shadeColor: "#2E4A3E",
    price: 6.3,
    originalPrice: 7.0,
    qty: 1,
  },
  {
    id: 2,
    name: "Gel Polish Holy Molly Pantone 10",
    volume: "11ml",
    image: imgPantone10,
    shade: "Warm Rose",
    shadeColor: "#8B2332",
    price: 7.0,
    qty: 2,
  },
  {
    id: 3,
    name: "Top Coat No Wipe",
    volume: "15ml",
    image: imgPantone11,
    price: 9.5,
    qty: 1,
  },
];

const FREE_SHIPPING_THRESHOLD = 50;

export function CartDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [items, setItems] = useState<CartItem[]>(initialItems);
  const [removingId, setRemovingId] = useState<number | null>(null);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const updateQty = (id: number, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setRemovingId(id);
    setTimeout(() => {
      setItems((prev) => prev.filter((item) => item.id !== id));
      setRemovingId(null);
    }, 280);
  };

  const totalItems = items.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const freeShipping = remaining <= 0;

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/45 backdrop-blur-[2px] z-[200]"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-[430px] z-[201] flex flex-col transition-transform duration-[380ms] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
      >
        {/* Accent top edge */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C8A08C] via-[#2E4A3E] to-[#C8A08C] z-10" />

        <div className="flex flex-col h-full bg-[#FAFAF9] overflow-hidden">
          {/* ── Shipping banner ── */}
          <div className="bg-[#2E4A3E] px-5 py-2.5 flex items-center justify-center gap-2">
            <Truck size={14} className="text-white/70" />
            <span className="text-[12px] text-white/90 tracking-wide" style={{ fontWeight: 500 }}>
              {freeShipping
                ? "✓ Free shipping unlocked!"
                : "Free Shipping on orders over €50 in Estonia"}
            </span>
          </div>

          {/* ── Header ── */}
          <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-[#f0eeec]">
            <div className="flex items-center gap-2.5">
              <div className="w-[28px] h-[28px] rounded-full bg-[#1A1A1A] flex items-center justify-center">
                <ShoppingBag size={13} className="text-white" />
              </div>
              <div>
                <h2 className="text-[16px] text-[#1A1A1A] leading-none" style={{ fontWeight: 700 }}>
                  Your Cart
                </h2>
                <span className="text-[11px] text-[#999]">
                  {totalItems} {totalItems === 1 ? "item" : "items"} · Ship to Estonia
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#F5F3F1] flex items-center justify-center hover:bg-[#e5e5e5] transition-colors cursor-pointer group"
            >
              <X size={15} className="text-[#999] group-hover:text-[#1A1A1A] transition-colors" />
            </button>
          </div>

          {/* ── Free shipping progress ── */}
          {items.length > 0 && (
            <div className="px-6 py-3 bg-white border-b border-[#f0eeec]">
              <p className="text-[12px] text-[#6B6B6B] mb-2">
                {remaining > 0 ? (
                  <>
                    Spend{" "}
                    <span className="text-[#2E4A3E]" style={{ fontWeight: 700 }}>
                      €{remaining.toFixed(2).replace(".", ",")}
                    </span>{" "}
                    more for free shipping
                  </>
                ) : (
                  <span className="text-[#2E4A3E]" style={{ fontWeight: 600 }}>
                    ✓ Free shipping unlocked!
                  </span>
                )}
              </p>
              <div className="w-full h-[4px] bg-[#f0eeec] rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[#C8A08C] to-[#2E4A3E]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </div>
            </div>
          )}

          {/* ── Cart items ── */}
          <div className="flex-1 overflow-y-auto">
            {items.length > 0 ? (
              <div className="px-5 py-4 flex flex-col gap-3">
                <AnimatePresence mode="popLayout">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 12 }}
                      animate={{
                        opacity: removingId === item.id ? 0 : 1,
                        x: removingId === item.id ? 50 : 0,
                      }}
                      exit={{ opacity: 0, x: 50 }}
                      transition={{ duration: 0.25 }}
                      className="bg-white rounded-2xl border border-[#f0eeec] p-3.5 hover:shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-shadow"
                    >
                      <div className="flex gap-3.5">
                        {/* Image */}
                        <div className="w-[74px] h-[74px] shrink-0 rounded-xl bg-[#F5F3F1] overflow-hidden relative">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-contain p-2"
                          />
                          {item.originalPrice && (
                            <div className="absolute top-1 left-1 px-1.5 py-[1px] rounded bg-[#C8A08C] text-[8px] text-white" style={{ fontWeight: 700 }}>
                              SALE
                            </div>
                          )}
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0 flex flex-col justify-between">
                          <div>
                            <div className="flex items-start justify-between gap-2">
                              <h4 className="text-[13px] text-[#1A1A1A] leading-snug" style={{ fontWeight: 600 }}>
                                {item.name}
                              </h4>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center hover:bg-red-50 transition-colors cursor-pointer opacity-40 hover:opacity-100"
                              >
                                <X size={10} className="text-[#999]" />
                              </button>
                            </div>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className="text-[11px] text-[#999]">{item.volume}</span>
                              {item.shade && (
                                <span className="inline-flex items-center gap-1 text-[10px] text-[#6B6B6B]" style={{ fontWeight: 500 }}>
                                  <span
                                    className="w-2.5 h-2.5 rounded-full border border-white shadow-[0_0_0_1px_rgba(0,0,0,0.08)]"
                                    style={{ backgroundColor: item.shadeColor || "#999" }}
                                  />
                                  {item.shade}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Bottom: qty + price */}
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center h-[28px] rounded-full bg-[#F5F3F1]">
                              <button
                                onClick={() => updateQty(item.id, -1)}
                                className="w-[28px] h-full flex items-center justify-center rounded-l-full hover:bg-[#e5e5e5] transition-colors cursor-pointer"
                              >
                                <Minus size={11} className="text-[#6B6B6B]" />
                              </button>
                              <span
                                className="w-[24px] h-full flex items-center justify-center text-[12px] text-[#1A1A1A]"
                                style={{ fontWeight: 700 }}
                              >
                                {item.qty}
                              </span>
                              <button
                                onClick={() => updateQty(item.id, 1)}
                                className="w-[28px] h-full flex items-center justify-center rounded-r-full hover:bg-[#e5e5e5] transition-colors cursor-pointer"
                              >
                                <Plus size={11} className="text-[#6B6B6B]" />
                              </button>
                            </div>
                            <div className="flex items-baseline gap-1.5">
                              {item.originalPrice && (
                                <span className="text-[11px] text-[#ccc] line-through">
                                  €{(item.originalPrice * item.qty).toFixed(2)}
                                </span>
                              )}
                              <span className="text-[15px] text-[#1A1A1A]" style={{ fontWeight: 700 }}>
                                €{(item.price * item.qty).toFixed(2)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              /* Empty state */
              <div className="flex flex-col items-center justify-center h-full py-16 px-8">
                <div className="w-16 h-16 rounded-full bg-[#F5F3F1] flex items-center justify-center mb-4">
                  <ShoppingBag size={24} className="text-[#C8A08C]" />
                </div>
                <h3 className="text-[17px] text-[#1A1A1A] mb-1.5" style={{ fontWeight: 700 }}>
                  Your cart is empty
                </h3>
                <p className="text-[13px] text-[#999] mb-6 text-center leading-relaxed">
                  Discover our professional nail products and find your perfect match.
                </p>
                <Link
                  to="/catalog"
                  onClick={onClose}
                  className="h-[42px] px-6 rounded-full bg-[#1A1A1A] text-white text-[13px] flex items-center gap-2 hover:bg-[#3a3a3a] transition-colors"
                  style={{ fontWeight: 600 }}
                >
                  Browse catalog <ChevronRight size={14} />
                </Link>
              </div>
            )}
          </div>

          {/* ── Footer ── */}
          {items.length > 0 && (
            <div className="bg-white border-t border-[#f0eeec]">
              {/* Coupon + Shipping shortcuts */}
              <div className="px-6 pt-3.5 pb-2 flex items-center gap-2">
                <button className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#e5e5e5] text-[11px] text-[#6B6B6B] hover:border-[#C8A08C] hover:text-[#C8A08C] transition-colors cursor-pointer" style={{ fontWeight: 500 }}>
                  <Tag size={11} />
                  Coupon
                </button>
                <button className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#e5e5e5] text-[11px] text-[#6B6B6B] hover:border-[#C8A08C] hover:text-[#C8A08C] transition-colors cursor-pointer" style={{ fontWeight: 500 }}>
                  <Truck size={11} />
                  Estimate Shipping
                </button>
              </div>

              {/* Total */}
              <div className="px-6 pb-3">
                <div className="flex items-center justify-between">
                  <span className="text-[14px] text-[#6B6B6B]">Subtotal</span>
                  <span className="text-[19px] text-[#1A1A1A] tracking-tight" style={{ fontWeight: 800 }}>
                    €{subtotal.toFixed(2).replace(".", ",")}
                  </span>
                </div>
                <p className="text-[11px] text-[#888] mt-0.5">
                  Tax included · Shipping at checkout
                </p>
              </div>

              {/* CTA */}
              <div className="px-6 pb-4 flex flex-col gap-1.5">
                <Link
                  to="/cart"
                  onClick={onClose}
                  className="w-full h-[48px] rounded-full bg-[#1A1A1A] text-white text-[14px] flex items-center justify-center gap-2 transition-all cursor-pointer relative overflow-hidden group/cta"
                  style={{ fontWeight: 700 }}
                >
                  <span className="relative z-[1]">View Cart</span>
                  <ChevronRight size={15} className="relative z-[1] group-hover/cta:translate-x-0.5 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#C8A08C] to-[#b8907c] opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300" />
                </Link>
              </div>

              {/* Trust row */}
              <div className="px-6 pb-4 flex items-center justify-center gap-5">
                <span className="flex items-center gap-1 text-[10px] text-[#888]">
                  <Shield size={9} /> Secure checkout
                </span>
                <span className="flex items-center gap-1 text-[10px] text-[#888]">
                  <Truck size={9} /> Fast delivery
                </span>
                <span className="flex items-center gap-1 text-[10px] text-[#888]">
                  <RotateCcw size={9} /> 30-day returns
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}