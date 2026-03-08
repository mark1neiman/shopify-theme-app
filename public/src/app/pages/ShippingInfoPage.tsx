import { Link } from "react-router";
import {
  ChevronRight,
  Truck,
  Zap,
  Globe,
  Package,
  Clock,
  MapPin,
  Check,
  ArrowRight,
  Info,
  Store,
} from "lucide-react";

import imgSmartposti from "figma:asset/057cebd5573e775ff570e8e1bf327f206efe98c5.png";

const zones = [
  { region: "Estonia", methods: "SmartPosti / Self-pickup", delivery: "1–2 days", price: "€2.50", freeFrom: "€50" },
  { region: "Latvia", methods: "SmartPosti", delivery: "2–3 days", price: "€5.50", freeFrom: "€100" },
  { region: "Lithuania", methods: "SmartPosti", delivery: "2–3 days", price: "€6.00", freeFrom: "€100" },
  { region: "Finland", methods: "SmartPosti", delivery: "3–5 days", price: "€10.50", freeFrom: "€150" },
  { region: "UK, Norway, Switzerland", methods: "Worldwide shipping", delivery: "7–14 days", price: "€30.00", freeFrom: "€300" },
  { region: "Israel, UAE, Saudi Arabia", methods: "Worldwide shipping", delivery: "10–18 days", price: "€30.00", freeFrom: "€300" },
  { region: "Canada, Scotland, Cyprus", methods: "Worldwide shipping", delivery: "10–18 days", price: "€30.00", freeFrom: "€300" },
  { region: "Åland Islands, Canary Islands", methods: "Worldwide shipping", delivery: "10–18 days", price: "€30.00", freeFrom: "€300" },
  { region: "Australia", methods: "Worldwide shipping", delivery: "14–21 days", price: "€70.00", freeFrom: "€400" },
];

const carriers = [
  {
    name: "SmartPosti",
    desc: "Parcel lockers across Estonia, Latvia, Lithuania & Finland. Quick and convenient 24/7 pickup.",
    icon: Package,
    image: imgSmartposti,
  },
  {
    name: "Worldwide Shipping",
    desc: "International delivery with full tracking to 15+ countries. Reliable and secure.",
    icon: Globe,
  },
  {
    name: "Self-pickup",
    desc: "Pick up your order for free at our store: Pärnu mnt 23, Tallinn. Mon–Fri 09:00–17:00.",
    icon: Store,
  },
];

export function ShippingInfoPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <div className="bg-white border-b border-[#f0eeec]">
        <div className="max-w-[1415px] mx-auto px-4 sm:px-6 pt-8 sm:pt-10 pb-8 sm:pb-10">
          <div className="flex items-center gap-2 text-[12px] text-[#999] mb-6 sm:mb-8">
            <Link to="/" className="hover:text-[#1A1A1A] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-[#1A1A1A]" style={{ fontWeight: 500 }}>Shipping Info</span>
          </div>
          <div className="flex items-start gap-4 sm:gap-5">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#009DE0]/10 flex items-center justify-center shrink-0 mt-1">
              <Truck size={22} className="text-[#009DE0]" />
            </div>
            <div>
              <h1 className="text-[28px] sm:text-[38px] text-[#1A1A1A] tracking-[-0.03em]" style={{ fontWeight: 700 }}>
                Shipping Information
              </h1>
              <p className="text-[14px] sm:text-[15px] text-[#999] mt-2 max-w-[560px]">
                Fast, reliable delivery across Europe and worldwide. Free shipping starts from €50 for Estonia.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* Perks strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-14">
          {[
            { icon: Truck, title: "Free Shipping", desc: "From €50 in Estonia", color: "#2E4A3E" },
            { icon: Zap, title: "Same-Day Dispatch", desc: "Order before 14:00 EET", color: "#009DE0" },
            { icon: Store, title: "Free Self-pickup", desc: "Pärnu mnt 23, Tallinn", color: "#C8A08C" },
            { icon: Globe, title: "15+ Countries", desc: "Worldwide delivery", color: "#8B6F5C" },
          ].map((p) => (
            <div key={p.title} className="bg-white rounded-2xl border border-[#f0eeec] p-4 sm:p-6 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl mx-auto mb-3 sm:mb-4 flex items-center justify-center" style={{ backgroundColor: `${p.color}10` }}>
                <p.icon size={18} style={{ color: p.color }} />
              </div>
              <p className="text-[14px] sm:text-[15px] text-[#1A1A1A] mb-1" style={{ fontWeight: 700 }}>{p.title}</p>
              <p className="text-[12px] sm:text-[13px] text-[#999]">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Shipping zones table */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-[22px] sm:text-[24px] text-[#1A1A1A] tracking-[-0.02em] mb-4 sm:mb-6" style={{ fontWeight: 700 }}>
            Shipping zones & rates
          </h2>
          <div className="bg-white rounded-2xl border border-[#f0eeec] overflow-hidden">
            {/* Desktop table */}
            <div className="hidden md:block">
              <table className="w-full text-[14px]">
                <thead>
                  <tr className="text-left text-[11px] text-[#999] uppercase tracking-[0.08em] bg-[#FAFAF9]" style={{ fontWeight: 600 }}>
                    <th className="px-6 py-4">Region</th>
                    <th className="px-6 py-4">Method</th>
                    <th className="px-6 py-4">Delivery time</th>
                    <th className="px-6 py-4">Shipping Fee</th>
                    <th className="px-6 py-4">Free From</th>
                  </tr>
                </thead>
                <tbody>
                  {zones.map((z, i) => (
                    <tr key={z.region} className={i > 0 ? "border-t border-[#f0eeec]" : ""}>
                      <td className="px-6 py-4 text-[#1A1A1A]" style={{ fontWeight: 600 }}>{z.region}</td>
                      <td className="px-6 py-4 text-[#6B6B6B]">{z.methods}</td>
                      <td className="px-6 py-4 text-[#6B6B6B]">{z.delivery}</td>
                      <td className="px-6 py-4 text-[#6B6B6B]">{z.price}</td>
                      <td className="px-6 py-4">
                        <span className="text-[#2E4A3E] bg-[#2E4A3E]/8 px-2.5 py-1 rounded-full text-[12px]" style={{ fontWeight: 600 }}>
                          {z.freeFrom}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile card list */}
            <div className="md:hidden divide-y divide-[#f0eeec]">
              {zones.map((z) => (
                <div key={z.region} className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[14px] text-[#1A1A1A]" style={{ fontWeight: 700 }}>{z.region}</p>
                    <span className="text-[#2E4A3E] bg-[#2E4A3E]/8 px-2 py-0.5 rounded-full text-[11px]" style={{ fontWeight: 600 }}>
                      Free from {z.freeFrom}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-x-5 gap-y-1 text-[12px] text-[#999]">
                    <span>{z.methods}</span>
                    <span>{z.delivery}</span>
                    <span className="text-[#1A1A1A]" style={{ fontWeight: 600 }}>{z.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-start gap-3 mt-4 bg-[#F5F3F1] rounded-xl p-4 border border-[#f0eeec]">
            <Info size={14} className="text-[#C8A08C] shrink-0 mt-0.5" />
            <p className="text-[13px] text-[#6B6B6B] leading-relaxed">
              Self-pickup at <span style={{ fontWeight: 600 }}>NaNails — Pärnu mnt 23, Tallinn</span> is always free regardless of order amount. Available Mon–Fri 09:00–17:00.
            </p>
          </div>
        </div>

        {/* Carriers */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-[22px] sm:text-[24px] text-[#1A1A1A] tracking-[-0.02em] mb-4 sm:mb-6" style={{ fontWeight: 700 }}>
            Our delivery partners
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {carriers.map((c) => (
              <div key={c.name} className="bg-white rounded-2xl border border-[#f0eeec] p-6">
                {c.image ? (
                  <img src={c.image} alt={c.name} className="h-7 w-auto mb-4" />
                ) : (
                  <c.icon size={24} className="text-[#C8A08C] mb-4" />
                )}
                <h3 className="text-[18px] text-[#1A1A1A] mb-2" style={{ fontWeight: 700 }}>{c.name}</h3>
                <p className="text-[14px] text-[#6B6B6B] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dispatch info */}
        <div className="bg-[#1A1A1A] rounded-2xl p-6 sm:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-white/[0.02] -translate-y-1/2 translate-x-1/3" />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
            <div>
              <h3 className="text-[20px] sm:text-[22px] text-white tracking-[-0.02em] mb-4" style={{ fontWeight: 700 }}>
                Dispatch schedule
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  "Orders placed before 14:00 EET are dispatched the same business day",
                  "Orders placed after 14:00 EET are dispatched the next business day",
                  "Dispatch hours: Monday–Friday, 09:00–17:00 EET",
                  "No dispatch on Estonian public holidays",
                  "Self-pickup orders are available within 1 hour during business hours",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <Check size={14} className="text-[#C8A08C] shrink-0 mt-1" />
                    <p className="text-[13px] sm:text-[14px] text-white/60 leading-relaxed">{t}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-white/[0.06] rounded-xl p-5 border border-white/[0.05]">
                <div className="flex items-center gap-2 mb-2">
                  <Info size={14} className="text-[#C8A08C]" />
                  <span className="text-[13px] text-white/80" style={{ fontWeight: 600 }}>Packaging</span>
                </div>
                <p className="text-[13px] text-white/40 leading-relaxed">
                  All orders are carefully packed with protective materials. Fragile items (lamps, equipment) receive extra cushioning.
                </p>
              </div>
              <div className="bg-white/[0.06] rounded-xl p-5 border border-white/[0.05]">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={14} className="text-[#C8A08C]" />
                  <span className="text-[13px] text-white/80" style={{ fontWeight: 600 }}>Ship from</span>
                </div>
                <p className="text-[13px] text-white/40 leading-relaxed">
                  All orders ship from Pärnu mnt 23, Tallinn, Estonia — centrally located for fast EU-wide delivery.
                </p>
              </div>
              <Link to="/track-order" className="h-[44px] px-6 rounded-full bg-white text-[#1A1A1A] text-[14px] flex items-center justify-center gap-2 hover:bg-white/90 transition-colors mt-auto" style={{ fontWeight: 600 }}>
                Track your order <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
