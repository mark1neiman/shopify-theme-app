import { useState } from "react";
import { Link } from "react-router";
import {
  Minus,
  Plus,
  Trash2,
  ChevronDown,
  Truck,
  Package,
  ShieldCheck,
  Lock,
  CreditCard,
  ArrowLeft,
  Gift,
  Zap,
  Check,
} from "lucide-react";

import imgPantone9 from "figma:asset/5fbcedfe6fa636b10882210e37c6764f801f80a5.png";
import imgPantone8 from "figma:asset/69ddf0f2b0c2f6734304a58aa6d8e213565ac486.png";
import imgSmartposti from "figma:asset/057cebd5573e775ff570e8e1bf327f206efe98c5.png";

/* ─── types ─── */
interface CartItem {
  id: number;
  name: string;
  variant: string;
  image: string;
  quantity: number;
  price: number;
  originalPrice?: number;
  discountLabel?: string;
  isFree?: boolean;
}

/* ─── data ─── */
const initialCart: CartItem[] = [
  {
    id: 1,
    name: "Gel Polish Holy Molly Pantone 9",
    variant: "11ml · Full size",
    image: imgPantone9,
    quantity: 2,
    price: 0,
    isFree: true,
  },
  {
    id: 2,
    name: "Gel Polish Holy Molly Pantone 8",
    variant: "11ml · Full size",
    image: imgPantone8,
    quantity: 2,
    price: 6.3,
    originalPrice: 7.0,
    discountLabel: "−10%",
  },
];

const countries = [
  { code: "EE", name: "Estonia", flag: "🇪🇪" },
  { code: "LV", name: "Latvia", flag: "🇱🇻" },
  { code: "LT", name: "Lithuania", flag: "🇱🇹" },
  { code: "FI", name: "Finland", flag: "🇫🇮" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
  { code: "NO", name: "Norway", flag: "🇳🇴" },
  { code: "CH", name: "Switzerland", flag: "🇨🇭" },
  { code: "IL", name: "Israel", flag: "🇮🇱" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
];

const pickupPoints = [
  "Tallinn Ülemiste Smartpost",
  "Tallinn Kristiine Smartpost",
  "Tallinn Lasnamäe Smartpost",
  "Tartu Lõunakeskus Smartpost",
  "Pärnu Kaubamaja Smartpost",
];

// Shipping config matching real backend
function getShippingOptions(countryCode: string, cartTotal: number) {
  switch (countryCode) {
    case "EE":
      return [
        { id: "1", name: "SmartPosti", price: cartTotal >= 50 ? 0 : 2.5 },
        { id: "3", name: "NaNails — Pärnu mnt 23, Tallinn", price: 0 },
      ];
    case "LV":
      return [{ id: "4", name: "SmartPosti", price: cartTotal >= 100 ? 0 : 5.5 }];
    case "LT":
      return [{ id: "5", name: "SmartPosti", price: cartTotal >= 100 ? 0 : 6.0 }];
    case "FI":
      return [{ id: "6", name: "SmartPosti", price: cartTotal >= 150 ? 0 : 10.5 }];
    case "AU":
      return [{ id: "19", name: "Worldwide", price: cartTotal >= 400 ? 0 : 70.0 }];
    default:
      return [{ id: "w", name: "Worldwide", price: cartTotal >= 300 ? 0 : 30.0 }];
  }
}

function getFreeThreshold(countryCode: string) {
  switch (countryCode) {
    case "EE": return 50;
    case "LV": case "LT": return 100;
    case "FI": return 150;
    case "AU": return 400;
    default: return 300;
  }
}

const fmt = (n: number) => `€${n.toFixed(2).replace(".", ",")}`;
const inputCls =
  "w-full h-[44px] px-4 border border-[#e5e5e5] rounded-xl text-[14px] text-[#1A1A1A] bg-[#FAFAF9] placeholder:text-[#ccc] focus:outline-none focus:border-[#C8A08C] transition-colors";

/* ═══════════════════════════════════════════ */

export function CheckoutPage() {
  const [cart, setCart] = useState<CartItem[]>(initialCart);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [country, setCountry] = useState("EE");
  const [delivery, setDelivery] = useState<"smartpost" | "flat">("smartpost");
  const [pickupPoint, setPickupPoint] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    countryCode: "+372",
    phone: "",
    email: "",
  });

  const totalItems = cart.reduce((s, i) => s + i.quantity, 0);
  const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const savings = cart.reduce(
    (s, i) =>
      s +
      (i.originalPrice ? (i.originalPrice - i.price) * i.quantity : 0) +
      (i.isFree && i.originalPrice ? i.originalPrice * i.quantity : 0),
    0
  );
  const shipCost = delivery === "smartpost" ? 3.99 : 4.99;
  const freeAt = getFreeThreshold(country);
  const toFree = Math.max(0, freeAt - subtotal);
  const isFreeShip = toFree === 0;
  const finalShip = isFreeShip ? 0 : shipCost;
  const total = subtotal + finalShip;
  const progress = Math.min(100, (subtotal / freeAt) * 100);
  const selectedCountry = countries.find((c) => c.code === country);

  const updateQty = (id: number, d: number) =>
    setCart((p) => p.map((i) => (i.id === id ? { ...i, quantity: Math.max(1, i.quantity + d) } : i)));
  const remove = (id: number) => setCart((p) => p.filter((i) => i.id !== id));
  const setField = (f: string, v: string) => setForm((p) => ({ ...p, [f]: v }));

  /* ─── empty ─── */
  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-20 h-20 rounded-full bg-[#F5F3F1] flex items-center justify-center mx-auto mb-5">
            <Package size={28} className="text-[#C8A08C]" />
          </div>
          <p className="text-[20px] text-[#1A1A1A] mb-2" style={{ fontWeight: 600 }}>Your cart is empty</p>
          <p className="text-[14px] text-[#999] mb-7 max-w-[280px] mx-auto">Discover our professional nail care collection</p>
          <Link to="/catalog" className="inline-flex items-center gap-2 h-[46px] px-8 bg-[#1A1A1A] text-white text-[14px] rounded-full hover:bg-[#3a3a3a] transition-colors" style={{ fontWeight: 600 }}>
            Browse catalog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 pt-4 sm:pt-6 pb-16 sm:pb-24">

        {/* ─── top bar ─── */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <Link to="/catalog" className="flex items-center gap-2 text-[13px] text-[#999] hover:text-[#1A1A1A] transition-colors group">
            <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" />
            <span className="hidden sm:inline">Continue shopping</span>
            <span className="sm:hidden">Back</span>
          </Link>

          {/* steps: Cart → Payment */}
          <div className="flex items-center">
            {[
              { n: 1, label: "Cart", active: true },
              { n: 2, label: "Payment", active: false },
            ].map((step, idx) => (
              <div key={step.n} className="flex items-center">
                {idx > 0 && <div className="w-8 sm:w-12 h-px bg-[#e5e5e5] mx-2 sm:mx-3" />}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div
                    className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[10px] sm:text-[11px] ${
                      step.active ? "bg-[#1A1A1A] text-white" : "bg-[#e5e5e5] text-[#999]"
                    }`}
                    style={{ fontWeight: 600 }}
                  >
                    {step.active ? <Check size={12} /> : step.n}
                  </div>
                  <span className={`text-[12px] sm:text-[13px] ${step.active ? "text-[#1A1A1A]" : "text-[#999]"}`} style={{ fontWeight: step.active ? 600 : 400 }}>
                    {step.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-[13px] text-[#999]">
            <Lock size={13} /> Secure checkout
          </div>
        </div>

        {/* ─── title ─── */}
        <div className="mb-5 sm:mb-6">
          <h1 className="text-[24px] sm:text-[32px] text-[#1A1A1A] tracking-[-0.03em]" style={{ fontWeight: 700 }}>Checkout</h1>
          <p className="text-[13px] sm:text-[14px] text-[#999] mt-1">{totalItems} {totalItems === 1 ? "item" : "items"} · Ship to {selectedCountry?.flag} {selectedCountry?.name}</p>
        </div>

        {/* ─── shipping bar ─── */}
        <div className="bg-white rounded-2xl border border-[#f0eeec] px-4 sm:px-6 py-3.5 mb-6 sm:mb-8 flex items-center gap-3 sm:gap-5">
          <div className="w-9 h-9 rounded-xl bg-[#2E4A3E]/10 flex items-center justify-center shrink-0">
            <Truck size={16} className="text-[#2E4A3E]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[12px] sm:text-[13px] text-[#1A1A1A] mb-1.5">
              {isFreeShip ? (
                <><span style={{ fontWeight: 600 }}>Free shipping unlocked!</span> <span className="text-[#2E4A3E]">✓</span></>
              ) : (
                <>Add <span style={{ fontWeight: 700 }}>{fmt(toFree)}</span> for <span style={{ fontWeight: 600 }}>free shipping</span></>
              )}
            </p>
            <div className="w-full h-[4px] bg-[#f0eeec] rounded-full overflow-hidden">
              <div className="h-full rounded-full transition-all duration-700 ease-out" style={{ width: `${progress}%`, background: isFreeShip ? "#2E4A3E" : "linear-gradient(90deg, #C8A08C, #d4b5a3)" }} />
            </div>
          </div>
          <span className="text-[11px] text-[#999] shrink-0" style={{ fontWeight: 500 }}>{isFreeShip ? "Free" : `${fmt(freeAt)}`}</span>
        </div>

        {/* ═══ MAIN GRID — left form, right cart ═══ */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">

          {/* ═══ LEFT — DELIVERY & FORM (wider) ═══ */}
          <div className="flex-1 min-w-0 flex flex-col gap-5 w-full">

            {/* Delivery card */}
            <div className="bg-white rounded-2xl border border-[#f0eeec] overflow-hidden">
              <div className="px-4 sm:px-6 py-4 border-b border-[#f0eeec] bg-[#FAFAF9]/60 flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center text-[10px]" style={{ fontWeight: 700 }}>1</div>
                <h3 className="text-[14px] sm:text-[15px] text-[#1A1A1A]" style={{ fontWeight: 700 }}>Shipping method</h3>
              </div>

              <div className="p-4 sm:p-6 flex flex-col gap-5">
                {/* Country */}
                <div>
                  <label className="block text-[11px] text-[#999] mb-1.5 uppercase tracking-[0.06em]" style={{ fontWeight: 600 }}>Country</label>
                  <div className="relative">
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className={`${inputCls} appearance-none pr-10 cursor-pointer`}
                    >
                      {countries.map((c) => (
                        <option key={c.code} value={c.code}>{c.flag} {c.name}</option>
                      ))}
                    </select>
                    <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#bbb] pointer-events-none" />
                  </div>
                </div>

                {/* Method */}
                <div>
                  <label className="block text-[11px] text-[#999] mb-1.5 uppercase tracking-[0.06em]" style={{ fontWeight: 600 }}>Method</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button onClick={() => setDelivery("smartpost")}
                      className={`flex flex-col items-center gap-1.5 sm:gap-2 p-3 sm:p-4 rounded-xl border transition-all ${
                        delivery === "smartpost" ? "border-[#1A1A1A] bg-[#FAFAF9] shadow-[0_0_0_1px_#1A1A1A]" : "border-[#e5e5e5] bg-white hover:border-[#ccc]"
                      }`}
                    >
                      <img src={imgSmartposti} alt="Smartpost" className="h-5 sm:h-6 w-auto" />
                      <span className="text-[11px] sm:text-[12px] text-[#1A1A1A]" style={{ fontWeight: 600 }}>Parcel locker</span>
                      <span className="text-[11px] text-[#999]">{fmt(3.99)}</span>
                    </button>
                    <button onClick={() => setDelivery("flat")}
                      className={`flex flex-col items-center gap-1.5 sm:gap-2 p-3 sm:p-4 rounded-xl border transition-all ${
                        delivery === "flat" ? "border-[#1A1A1A] bg-[#FAFAF9] shadow-[0_0_0_1px_#1A1A1A]" : "border-[#e5e5e5] bg-white hover:border-[#ccc]"
                      }`}
                    >
                      <Package size={20} className="text-[#999]" />
                      <span className="text-[11px] sm:text-[12px] text-[#1A1A1A]" style={{ fontWeight: 600 }}>Courier</span>
                      <span className="text-[11px] text-[#999]">{fmt(4.99)}</span>
                    </button>
                  </div>
                </div>

                {/* Pickup */}
                {delivery === "smartpost" && (
                  <div>
                    <label className="block text-[11px] text-[#999] mb-1.5 uppercase tracking-[0.06em]" style={{ fontWeight: 600 }}>Pickup point</label>
                    <div className="relative">
                      <select
                        value={pickupPoint}
                        onChange={(e) => setPickupPoint(e.target.value)}
                        className={`${inputCls} appearance-none pr-10 cursor-pointer`}
                      >
                        <option value="">Select a pickup point...</option>
                        {pickupPoints.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                      <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#bbb] pointer-events-none" />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Contact / Address form */}
            <div className="bg-white rounded-2xl border border-[#f0eeec] overflow-hidden">
              <div className="px-4 sm:px-6 py-4 border-b border-[#f0eeec] bg-[#FAFAF9]/60 flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center text-[10px]" style={{ fontWeight: 700 }}>2</div>
                <h3 className="text-[14px] sm:text-[15px] text-[#1A1A1A]" style={{ fontWeight: 700 }}>Contact & address</h3>
              </div>

              <div className="p-4 sm:p-6 flex flex-col gap-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="col-span-1 sm:col-span-2">
                    <label className="block text-[11px] text-[#999] mb-1.5 uppercase tracking-[0.06em]" style={{ fontWeight: 600 }}>Full name</label>
                    <input type="text" placeholder="Mark Neiman" className={inputCls} value={form.fullName} onChange={(e) => setField("fullName", e.target.value)} />
                  </div>
                  <div className="col-span-1 sm:col-span-2">
                    <label className="block text-[11px] text-[#999] mb-1.5 uppercase tracking-[0.06em]" style={{ fontWeight: 600 }}>Email</label>
                    <input type="email" placeholder="email@example.com" className={inputCls} value={form.email} onChange={(e) => setField("email", e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#999] mb-1.5 uppercase tracking-[0.06em]" style={{ fontWeight: 600 }}>Phone</label>
                    <div className="flex gap-2">
                      <select value={form.countryCode} onChange={(e) => setField("countryCode", e.target.value)} className="w-[80px] h-[44px] px-2 border border-[#e5e5e5] rounded-xl text-[13px] text-[#1A1A1A] bg-[#FAFAF9] focus:outline-none focus:border-[#C8A08C] appearance-none text-center">
                        <option value="+372">+372</option>
                        <option value="+371">+371</option>
                        <option value="+370">+370</option>
                        <option value="+358">+358</option>
                      </select>
                      <input type="tel" placeholder="55988931" className={`${inputCls} flex-1`} value={form.phone} onChange={(e) => setField("phone", e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#999] mb-1.5 uppercase tracking-[0.06em]" style={{ fontWeight: 600 }}>Postal code</label>
                    <input type="text" placeholder="10141" className={inputCls} value={form.postalCode} onChange={(e) => setField("postalCode", e.target.value)} />
                  </div>
                </div>

                {delivery === "flat" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="col-span-1 sm:col-span-2">
                      <label className="block text-[11px] text-[#999] mb-1.5 uppercase tracking-[0.06em]" style={{ fontWeight: 600 }}>Street address</label>
                      <input type="text" placeholder="Pärnu mnt 23" className={inputCls} value={form.address} onChange={(e) => setField("address", e.target.value)} />
                    </div>
                    <div>
                      <label className="block text-[11px] text-[#999] mb-1.5 uppercase tracking-[0.06em]" style={{ fontWeight: 600 }}>City</label>
                      <input type="text" placeholder="Tallinn" className={inputCls} value={form.city} onChange={(e) => setField("city", e.target.value)} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ═══ RIGHT — CART SUMMARY ═══ */}
          <div className="w-full lg:w-[420px] shrink-0 flex flex-col gap-5">

            {/* Cart items */}
            <div className="bg-white rounded-2xl border border-[#f0eeec] overflow-hidden">
              <div className="px-4 sm:px-6 py-4 border-b border-[#f0eeec] bg-[#FAFAF9]/60 flex items-center justify-between">
                <h3 className="text-[14px] sm:text-[15px] text-[#1A1A1A]" style={{ fontWeight: 700 }}>Your cart</h3>
                <span className="text-[12px] text-[#999]">{totalItems} items</span>
              </div>

              <div className="divide-y divide-[#f0eeec]">
                {cart.map((item) => (
                  <div key={item.id} className="p-4 sm:p-5 flex gap-3 sm:gap-4">
                    <div className="w-[60px] sm:w-[72px] h-[60px] sm:h-[72px] rounded-xl bg-[#F5F3F1] overflow-hidden shrink-0 border border-[#f0eeec]">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="text-[13px] sm:text-[14px] text-[#1A1A1A] truncate" style={{ fontWeight: 600 }}>{item.name}</p>
                          <p className="text-[11px] sm:text-[12px] text-[#999] mt-0.5">{item.variant}</p>
                        </div>
                        <button onClick={() => remove(item.id)} className="text-[#ccc] hover:text-[#C8A08C] transition-colors shrink-0 cursor-pointer">
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-2 sm:mt-3">
                        <div className="flex items-center border border-[#e5e5e5] rounded-lg overflow-hidden">
                          <button onClick={() => updateQty(item.id, -1)} className="w-7 h-7 flex items-center justify-center text-[#999] hover:text-[#1A1A1A] transition-colors cursor-pointer"><Minus size={13} /></button>
                          <span className="w-7 text-center text-[13px] text-[#1A1A1A]" style={{ fontWeight: 600 }}>{item.quantity}</span>
                          <button onClick={() => updateQty(item.id, 1)} className="w-7 h-7 flex items-center justify-center text-[#999] hover:text-[#1A1A1A] transition-colors cursor-pointer"><Plus size={13} /></button>
                        </div>
                        <div className="text-right">
                          {item.isFree ? (
                            <div className="flex items-center gap-1.5">
                              <Gift size={12} className="text-[#2E4A3E]" />
                              <span className="text-[13px] text-[#2E4A3E]" style={{ fontWeight: 700 }}>FREE</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-1.5">
                              {item.discountLabel && <span className="text-[10px] text-white bg-[#C8A08C] px-1.5 py-0.5 rounded-md" style={{ fontWeight: 600 }}>{item.discountLabel}</span>}
                              <span className="text-[13px] text-[#1A1A1A]" style={{ fontWeight: 700 }}>{fmt(item.price * item.quantity)}</span>
                              {item.originalPrice && <span className="text-[11px] text-[#ccc] line-through">{fmt(item.originalPrice * item.quantity)}</span>}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Promo code */}
            <div className="bg-white rounded-2xl border border-[#f0eeec] p-4 sm:p-5">
              <label className="block text-[11px] text-[#999] mb-2 uppercase tracking-[0.06em]" style={{ fontWeight: 600 }}>Promo code</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter code"
                  className={`${inputCls} flex-1`}
                />
                <button
                  onClick={() => { if (promoCode) setPromoApplied(true); }}
                  className="h-[44px] px-5 bg-[#1A1A1A] text-white text-[13px] rounded-xl hover:bg-[#3a3a3a] transition-colors shrink-0 cursor-pointer"
                  style={{ fontWeight: 600 }}
                >
                  {promoApplied ? <Check size={16} /> : "Apply"}
                </button>
              </div>
            </div>

            {/* Order summary */}
            <div className="bg-white rounded-2xl border border-[#f0eeec] p-4 sm:p-5">
              <h4 className="text-[14px] text-[#1A1A1A] mb-4" style={{ fontWeight: 700 }}>Order summary</h4>
              <div className="space-y-2.5">
                <div className="flex justify-between text-[13px]">
                  <span className="text-[#6B6B6B]">Subtotal</span>
                  <span className="text-[#1A1A1A]" style={{ fontWeight: 600 }}>{fmt(subtotal)}</span>
                </div>
                <div className="flex justify-between text-[13px]">
                  <span className="text-[#6B6B6B]">Shipping</span>
                  <span className={isFreeShip ? "text-[#2E4A3E]" : "text-[#1A1A1A]"} style={{ fontWeight: 600 }}>
                    {isFreeShip ? "FREE" : fmt(finalShip)}
                  </span>
                </div>
                {savings > 0 && (
                  <div className="flex justify-between text-[13px]">
                    <span className="text-[#2E4A3E]">You save</span>
                    <span className="text-[#2E4A3E]" style={{ fontWeight: 600 }}>−{fmt(savings)}</span>
                  </div>
                )}
                <div className="border-t border-[#f0eeec] pt-3 mt-3 flex justify-between">
                  <span className="text-[15px] text-[#1A1A1A]" style={{ fontWeight: 700 }}>Total</span>
                  <span className="text-[18px] text-[#1A1A1A]" style={{ fontWeight: 800 }}>{fmt(total)}</span>
                </div>
              </div>
            </div>

            {/* Pay button */}
            <button className="w-full h-[52px] bg-[#1A1A1A] text-white text-[15px] rounded-2xl flex items-center justify-center gap-2 hover:bg-[#3a3a3a] transition-colors cursor-pointer" style={{ fontWeight: 700 }}>
              <CreditCard size={18} />
              Proceed to Payment
            </button>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-4 sm:gap-5">
              {[
                { icon: Lock, label: "SSL Secure" },
                { icon: ShieldCheck, label: "GDPR" },
                { icon: Zap, label: "Fast checkout" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-[11px] text-[#ccc]">
                  <Icon size={12} />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}