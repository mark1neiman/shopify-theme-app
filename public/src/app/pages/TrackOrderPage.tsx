import { useState } from "react";
import { Link } from "react-router";
import {
  ChevronRight,
  Search,
  Package,
  Truck,
  MapPin,
  Check,
  Clock,
  ArrowRight,
  Mail,
  Box,
  CheckCircle2,
} from "lucide-react";

/* demo order for illustration */
const demoOrder = {
  id: "NA-2026-48291",
  date: "Feb 24, 2026",
  status: "In Transit",
  carrier: "DPD",
  tracking: "EE9028471625384",
  estimatedDelivery: "Feb 27, 2026",
  steps: [
    { label: "Order placed", date: "Feb 24, 09:12", done: true },
    { label: "Payment confirmed", date: "Feb 24, 09:12", done: true },
    { label: "Dispatched from Tallinn", date: "Feb 24, 15:30", done: true },
    { label: "In transit", date: "Feb 25, 08:45", done: true, active: true },
    { label: "Out for delivery", date: "", done: false },
    { label: "Delivered", date: "", done: false },
  ],
};

export function TrackOrderPage() {
  const [query, setQuery] = useState("");
  const [showDemo, setShowDemo] = useState(false);

  const handleTrack = () => {
    if (query.trim()) setShowDemo(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <div className="bg-white border-b border-[#f0eeec]">
        <div className="max-w-[1415px] mx-auto px-6 pt-10 pb-10">
          <div className="flex items-center gap-2 text-[12px] text-[#999] mb-8">
            <Link to="/" className="hover:text-[#1A1A1A] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-[#1A1A1A]" style={{ fontWeight: 500 }}>Track Order</span>
          </div>
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[#009DE0]/10 flex items-center justify-center shrink-0 mt-1">
              <Package size={24} className="text-[#009DE0]" />
            </div>
            <div>
              <h1 className="text-[38px] text-[#1A1A1A] tracking-[-0.03em]" style={{ fontWeight: 700 }}>
                Track Your Order
              </h1>
              <p className="text-[15px] text-[#999] mt-2 max-w-[560px]">
                Enter your order number or tracking code to see real-time delivery status.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[760px] mx-auto px-6 py-14">
        {/* Search box */}
        <div className="bg-white rounded-2xl border border-[#f0eeec] p-8 mb-8">
          <label className="text-[14px] text-[#1A1A1A] mb-3 block" style={{ fontWeight: 600 }}>
            Order number or tracking code
          </label>
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ccc]" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleTrack()}
                placeholder="e.g. NA-2026-48291 or EE9028471625384"
                className="w-full h-[48px] pl-11 pr-4 border border-[#e5e5e5] rounded-xl text-[15px] text-[#1A1A1A] placeholder:text-[#ccc] focus:outline-none focus:border-[#C8A08C] transition-colors"
              />
            </div>
            <button
              onClick={handleTrack}
              className="h-[48px] px-7 rounded-xl bg-[#1A1A1A] text-white text-[14px] hover:bg-[#3a3a3a] transition-colors shrink-0"
              style={{ fontWeight: 600 }}
            >
              Track
            </button>
          </div>
          <p className="text-[12px] text-[#999] mt-3">
            Your order number is in the confirmation email, e.g. NA-2026-XXXXX
          </p>
        </div>

        {/* Demo tracking result */}
        {showDemo && (
          <div className="bg-white rounded-2xl border border-[#f0eeec] overflow-hidden mb-8">
            {/* Header */}
            <div className="p-6 border-b border-[#f0eeec] flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <p className="text-[18px] text-[#1A1A1A]" style={{ fontWeight: 700 }}>
                    Order {demoOrder.id}
                  </p>
                  <span className="text-[11px] text-[#009DE0] bg-[#009DE0]/8 px-2.5 py-0.5 rounded-full" style={{ fontWeight: 600 }}>
                    {demoOrder.status}
                  </span>
                </div>
                <p className="text-[13px] text-[#999]">Placed {demoOrder.date}</p>
              </div>
              <div className="text-right">
                <p className="text-[12px] text-[#999]">Carrier: <span className="text-[#1A1A1A]" style={{ fontWeight: 500 }}>{demoOrder.carrier}</span></p>
                <p className="text-[12px] text-[#999]">Tracking: <span className="text-[#1A1A1A] font-mono text-[11px]" style={{ fontWeight: 500 }}>{demoOrder.tracking}</span></p>
              </div>
            </div>

            {/* Estimated delivery */}
            <div className="px-6 py-4 bg-[#2E4A3E]/5 border-b border-[#f0eeec] flex items-center gap-3">
              <Clock size={14} className="text-[#2E4A3E]" />
              <p className="text-[13px] text-[#2E4A3E]">
                <span style={{ fontWeight: 600 }}>Estimated delivery:</span> {demoOrder.estimatedDelivery}
              </p>
            </div>

            {/* Timeline */}
            <div className="p-6">
              <div className="relative">
                {demoOrder.steps.map((step, i) => (
                  <div key={step.label} className="flex gap-4 relative">
                    {/* vertical line */}
                    {i < demoOrder.steps.length - 1 && (
                      <div className={`absolute left-[11px] top-[24px] w-[2px] h-[calc(100%)] ${step.done ? "bg-[#2E4A3E]" : "bg-[#e5e5e5]"}`} />
                    )}
                    {/* dot */}
                    <div className="relative z-10 shrink-0 mt-0.5">
                      {step.done ? (
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${step.active ? "bg-[#009DE0]" : "bg-[#2E4A3E]"}`}>
                          {step.active ? (
                            <Truck size={12} className="text-white" />
                          ) : (
                            <Check size={12} className="text-white" />
                          )}
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full border-2 border-[#e5e5e5] bg-white" />
                      )}
                    </div>
                    {/* content */}
                    <div className={`pb-6 flex-1 ${!step.done ? "opacity-40" : ""}`}>
                      <p className="text-[14px] text-[#1A1A1A]" style={{ fontWeight: 600 }}>{step.label}</p>
                      {step.date && <p className="text-[12px] text-[#999] mt-0.5">{step.date}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Info cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl border border-[#f0eeec] p-6">
            <Box size={20} className="text-[#C8A08C] mb-3" />
            <h3 className="text-[15px] text-[#1A1A1A] mb-2" style={{ fontWeight: 700 }}>Can't find your order?</h3>
            <p className="text-[13px] text-[#999] leading-relaxed mb-4">
              Check your email for the order confirmation. The tracking number is sent once dispatched (usually within 24h).
            </p>
            <Link to="/help" className="text-[13px] text-[#C8A08C] flex items-center gap-1 hover:gap-2 transition-all" style={{ fontWeight: 600 }}>
              Help Center <ArrowRight size={12} />
            </Link>
          </div>
          <div className="bg-white rounded-2xl border border-[#f0eeec] p-6">
            <Mail size={20} className="text-[#C8A08C] mb-3" />
            <h3 className="text-[15px] text-[#1A1A1A] mb-2" style={{ fontWeight: 700 }}>Need assistance?</h3>
            <p className="text-[13px] text-[#999] leading-relaxed mb-4">
              Our support team can help locate your package or resolve any delivery issues.
            </p>
            <Link to="/contact" className="text-[13px] text-[#C8A08C] flex items-center gap-1 hover:gap-2 transition-all" style={{ fontWeight: 600 }}>
              Contact support <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
