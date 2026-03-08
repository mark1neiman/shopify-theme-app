import { Link } from "react-router";
import {
  ChevronRight,
  RotateCcw,
  Check,
  X,
  ArrowRight,
  AlertCircle,
  Package,
  Mail,
  Truck,
  Clock,
  CreditCard,
} from "lucide-react";

const steps = [
  { num: "01", icon: Mail, title: "Contact us", desc: "Email info@nanails.eu with your order number and reason for return. We'll respond within 24 hours with instructions." },
  { num: "02", icon: Package, title: "Pack & ship", desc: "Pack items in their original packaging. Attach the return label we provide (or ship to our Tallinn warehouse address)." },
  { num: "03", icon: Check, title: "We inspect", desc: "Once received, our team inspects the returned items within 2 business days and confirms eligibility." },
  { num: "04", icon: CreditCard, title: "Refund issued", desc: "Refund is processed to your original payment method within 14 days. Bank processing may take an additional 3–5 days." },
];

export function ReturnsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <div className="bg-white border-b border-[#f0eeec]">
        <div className="max-w-[1415px] mx-auto px-6 pt-10 pb-10">
          <div className="flex items-center gap-2 text-[12px] text-[#999] mb-8">
            <Link to="/" className="hover:text-[#1A1A1A] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-[#1A1A1A]" style={{ fontWeight: 500 }}>Returns & Refunds</span>
          </div>
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[#8B6F5C]/10 flex items-center justify-center shrink-0 mt-1">
              <RotateCcw size={24} className="text-[#8B6F5C]" />
            </div>
            <div>
              <h1 className="text-[38px] text-[#1A1A1A] tracking-[-0.03em]" style={{ fontWeight: 700 }}>
                Returns & Refunds
              </h1>
              <p className="text-[15px] text-[#999] mt-2 max-w-[560px]">
                30-day return policy. Hassle-free process. Your satisfaction is our priority.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 py-14">
        {/* Key points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-16">
          {[
            { icon: Clock, val: "14 days", label: "Return window", desc: "From date of delivery" },
            { icon: CreditCard, val: "14 days", label: "Refund processing", desc: "After return received" },
            { icon: RotateCcw, val: "Free", label: "Return shipping", desc: "If our error" },
          ].map((k) => (
            <div key={k.label} className="bg-white rounded-2xl border border-[#f0eeec] p-7 text-center">
              <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center bg-[#C8A08C]/10">
                <k.icon size={20} className="text-[#C8A08C]" />
              </div>
              <p className="text-[28px] text-[#1A1A1A] tracking-[-0.03em]" style={{ fontWeight: 700 }}>{k.val}</p>
              <p className="text-[14px] text-[#1A1A1A] mt-1" style={{ fontWeight: 600 }}>{k.label}</p>
              <p className="text-[13px] text-[#999] mt-0.5">{k.desc}</p>
            </div>
          ))}
        </div>

        {/* Process steps */}
        <h2 className="text-[28px] text-[#1A1A1A] tracking-[-0.02em] mb-8" style={{ fontWeight: 700 }}>
          How it works
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 mb-16">
          {steps.map((s, i) => (
            <div key={s.num} className="relative">
              {i < steps.length - 1 && (
                <div className="absolute top-7 left-[calc(50%+40px)] right-[-20px] h-px bg-[#e5e5e5] hidden lg:block" />
              )}
              <div className="bg-white rounded-2xl border border-[#f0eeec] p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#F5F3F1] flex items-center justify-center">
                    <s.icon size={18} className="text-[#C8A08C]" />
                  </div>
                  <span className="text-[36px] text-[#f0eeec]" style={{ fontWeight: 800 }}>{s.num}</span>
                </div>
                <h3 className="text-[16px] text-[#1A1A1A] mb-2" style={{ fontWeight: 700 }}>{s.title}</h3>
                <p className="text-[13px] text-[#6B6B6B] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Eligible / Not eligible */}
        <div className="grid grid-cols-2 gap-6 mb-16">
          <div className="bg-white rounded-2xl border border-[#f0eeec] p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#2E4A3E]/8 flex items-center justify-center">
                <Check size={18} className="text-[#2E4A3E]" />
              </div>
              <h3 className="text-[20px] text-[#1A1A1A]" style={{ fontWeight: 700 }}>Eligible for return</h3>
            </div>
            <div className="flex flex-col gap-3">
              {[
                "Unused products in original, sealed packaging",
                "Equipment and tools in original box with all accessories",
                "Incorrect items (we sent the wrong product)",
                "Defective or damaged products (photo required)",
                "Items that differ from the website description",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <Check size={14} className="text-[#2E4A3E] shrink-0 mt-1" />
                  <p className="text-[14px] text-[#6B6B6B] leading-relaxed">{t}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[#f0eeec] p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                <X size={18} className="text-red-400" />
              </div>
              <h3 className="text-[20px] text-[#1A1A1A]" style={{ fontWeight: 700 }}>Not eligible</h3>
            </div>
            <div className="flex flex-col gap-3">
              {[
                "Opened cosmetics with broken hygiene seal",
                "Used gel polishes, bases, or top coats",
                "Opened skincare or nail care products",
                "Products damaged by misuse or improper storage",
                "Items returned after the 14-day window",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <X size={14} className="text-red-400 shrink-0 mt-1" />
                  <p className="text-[14px] text-[#6B6B6B] leading-relaxed">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Important notice */}
        <div className="bg-[#C8A08C]/8 rounded-2xl p-7 border border-[#C8A08C]/12 mb-16 flex items-start gap-4">
          <AlertCircle size={20} className="text-[#8B6F5C] shrink-0 mt-0.5" />
          <div>
            <p className="text-[15px] text-[#8B6F5C] mb-2" style={{ fontWeight: 600 }}>Important note on shipping costs</p>
            <p className="text-[14px] text-[#8B6F5C]/70 leading-[1.7]">
              Return shipping costs are the customer's responsibility for change-of-mind returns. If the return is due to our error (wrong item, defective product, or discrepancy), we provide a prepaid return label at no cost to you. Original shipping fees are non-refundable.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-white rounded-2xl border border-[#f0eeec] p-10">
          <RotateCcw size={28} className="text-[#C8A08C] mx-auto mb-4" />
          <h3 className="text-[24px] text-[#1A1A1A] tracking-[-0.02em] mb-3" style={{ fontWeight: 700 }}>
            Need to return something?
          </h3>
          <p className="text-[14px] text-[#999] mb-7 max-w-[400px] mx-auto">
            Start the process by contacting our support team. We'll guide you through every step.
          </p>
          <div className="flex items-center justify-center gap-3">
            <a href="mailto:info@nanails.eu" className="h-[44px] px-7 rounded-full bg-[#1A1A1A] text-white text-[14px] flex items-center gap-2 hover:bg-[#3a3a3a] transition-colors" style={{ fontWeight: 600 }}>
              <Mail size={14} /> Email info@nanails.eu
            </a>
            <Link to="/help" className="h-[44px] px-6 rounded-full border border-[#e5e5e5] text-[#6B6B6B] text-[14px] flex items-center gap-2 hover:border-[#ccc] transition-colors" style={{ fontWeight: 500 }}>
              Visit Help Center
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}