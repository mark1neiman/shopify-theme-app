import { useState } from "react";
import { Link } from "react-router";
import {
  ChevronRight,
  ArrowRight,
  ArrowDown,
  Phone,
  Check,
  Users,
  Truck,
  Package,
  Percent,
  HeadphonesIcon,
  CreditCard,
  BarChart3,
  Building2,
  Zap,
  CheckCircle2,
  Mail,
  Send,
} from "lucide-react";

const benefits = [
  { icon: Percent, title: "Volume discounts", desc: "Up to 30% off retail pricing based on order volume and tier." },
  { icon: Truck, title: "Priority shipping", desc: "Free EU shipping, express options, and priority dispatch queue." },
  { icon: HeadphonesIcon, title: "Dedicated support", desc: "Personal account manager who knows your business." },
  { icon: CreditCard, title: "Flexible payment", desc: "Net 14/30 terms, monthly invoicing, custom arrangements." },
  { icon: Package, title: "Product samples", desc: "Try new products before committing to bulk orders." },
  { icon: BarChart3, title: "Business tools", desc: "Sales reports, inventory alerts, and reorder automations." },
];

const idealFor = [
  { icon: Building2, title: "Nail salons", desc: "Stock up on essentials with volume pricing" },
  { icon: Users, title: "Beauty schools", desc: "Bulk kits for students and training programs" },
  { icon: Package, title: "Distributors", desc: "Wholesale supply for your retail network" },
  { icon: Zap, title: "Freelance pros", desc: "Member pricing for independent technicians" },
];

const businessTypes = [
  "Nail salon",
  "Beauty salon / SPA",
  "Beauty school / Academy",
  "Distributor / Wholesaler",
  "Freelance nail technician",
  "Online retailer",
  "Other",
];

const volumeOptions = [
  "€200 – €500 / month",
  "€500 – €1 000 / month",
  "€1 000 – €2 000 / month",
  "€2 000 – €5 000 / month",
  "€5 000+ / month",
];

export function B2BProgramPage() {
  const [form, setForm] = useState({
    companyName: "",
    vatNumber: "",
    regCode: "",
    contactName: "",
    email: "",
    phone: "",
    businessType: "",
    country: "",
    city: "",
    volume: "",
    message: "",
    agreeTerms: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = (field: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => { const n = { ...prev }; delete n[field]; return n; });
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.companyName.trim()) errs.companyName = "Required";
    if (!form.contactName.trim()) errs.contactName = "Required";
    if (!form.email.trim()) errs.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.phone.trim()) errs.phone = "Required";
    if (!form.businessType) errs.businessType = "Please select";
    if (!form.country.trim()) errs.country = "Required";
    if (!form.volume) errs.volume = "Please select";
    if (!form.agreeTerms) errs.agreeTerms = "You must agree to continue";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  const scrollToForm = () => {
    document.getElementById("b2b-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const inputBase = "w-full h-[48px] px-4 border rounded-xl text-[14px] text-[#1A1A1A] placeholder:text-[#bbb] outline-none focus:border-[#2E4A3E] transition-colors bg-white";
  const selectBase = "w-full h-[48px] px-4 border rounded-xl text-[14px] text-[#1A1A1A] outline-none focus:border-[#2E4A3E] transition-colors bg-white appearance-none cursor-pointer";
  const labelBase = "text-[13px] text-[#1A1A1A] mb-1.5 block";

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Hero */}
      <div className="bg-[#1A1A1A] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#2E4A3E]/20 -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#2E4A3E]/15 translate-y-1/2 -translate-x-1/4" />
        </div>
        <div className="relative max-w-[1415px] mx-auto px-6 pt-10 pb-16">
          <div className="flex items-center gap-2 text-[12px] text-white/35 mb-14">
            <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white/60" style={{ fontWeight: 500 }}>B2B Program</span>
          </div>

          <div className="max-w-[640px]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[2px] bg-[#C8A08C]" />
              <span className="text-[12px] uppercase tracking-[0.15em] text-[#C8A08C]" style={{ fontWeight: 600 }}>
                Wholesale & B2B
              </span>
            </div>
            <h1 className="text-[48px] text-white tracking-[-0.04em] leading-[1.08] mb-5" style={{ fontWeight: 700 }}>
              Built for businesses
              <br />that mean business
            </h1>
            <p className="text-[17px] text-white/40 leading-[1.7] mb-8 max-w-[500px]">
              Volume pricing, dedicated support, and priority logistics for salons, distributors, schools, and professional technicians.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={scrollToForm}
                className="h-[48px] px-8 rounded-full bg-white text-[#1A1A1A] text-[14px] flex items-center gap-2 hover:bg-white/90 transition-colors cursor-pointer"
                style={{ fontWeight: 600 }}
              >
                Register your business <ArrowDown size={14} />
              </button>
              <a href="tel:+37256968888" className="h-[48px] px-6 rounded-full border border-white/15 text-white/60 text-[14px] flex items-center gap-2 hover:border-white/30 hover:text-white transition-colors" style={{ fontWeight: 500 }}>
                <Phone size={14} /> +372 5696 8888
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1415px] mx-auto px-6 py-20">
        {/* Ideal for */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 mb-20">
          {idealFor.map((item) => (
            <div key={item.title} className="bg-white rounded-2xl border border-[#f0eeec] p-6 hover:shadow-[0_6px_30px_rgba(0,0,0,0.04)] transition-all">
              <div className="w-11 h-11 rounded-xl bg-[#2E4A3E]/8 flex items-center justify-center mb-4">
                <item.icon size={18} className="text-[#2E4A3E]" />
              </div>
              <h3 className="text-[16px] text-[#1A1A1A] mb-1" style={{ fontWeight: 700 }}>{item.title}</h3>
              <p className="text-[13px] text-[#999]">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Benefits grid */}
        <div className="text-center mb-12">
          <h2 className="text-[34px] text-[#1A1A1A] tracking-[-0.03em] mb-3" style={{ fontWeight: 700 }}>
            Why partner with us
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-24">
          {benefits.map((b) => (
            <div key={b.title} className="bg-white rounded-2xl border border-[#f0eeec] p-7 hover:shadow-[0_6px_30px_rgba(0,0,0,0.04)] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#C8A08C]/10 flex items-center justify-center mb-4">
                <b.icon size={20} className="text-[#C8A08C]" />
              </div>
              <h3 className="text-[17px] text-[#1A1A1A] mb-2" style={{ fontWeight: 700 }}>{b.title}</h3>
              <p className="text-[14px] text-[#6B6B6B] leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* ══════════════════════════════════════════════
            B2B Application Form
        ══════════════════════════════════════════════ */}
        <div id="b2b-form" className="scroll-mt-24">
          {submitted ? (
            /* ── Success state ── */
            <div className="max-w-[640px] mx-auto text-center py-16">
              <div className="w-20 h-20 rounded-full bg-[#2E4A3E]/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={36} className="text-[#2E4A3E]" />
              </div>
              <h2 className="text-[32px] text-[#1A1A1A] tracking-[-0.03em] mb-4" style={{ fontWeight: 700 }}>
                Application received!
              </h2>
              <p className="text-[16px] text-[#6B6B6B] leading-[1.7] mb-3 max-w-[460px] mx-auto">
                Thank you, <span style={{ fontWeight: 600 }}>{form.contactName}</span>. We've received your B2B application for <span style={{ fontWeight: 600 }}>{form.companyName}</span>.
              </p>
              <p className="text-[14px] text-[#999] leading-[1.7] mb-8 max-w-[460px] mx-auto">
                Our wholesale team will review your application and contact you at <span className="text-[#1A1A1A]" style={{ fontWeight: 500 }}>{form.email}</span> within 1–2 business days with your personalised offer.
              </p>
              <div className="flex items-center justify-center gap-3">
                <Link to="/catalog" className="h-[46px] px-7 rounded-full bg-[#1A1A1A] text-white text-[14px] flex items-center gap-2 hover:bg-[#3a3a3a] transition-colors" style={{ fontWeight: 600 }}>
                  Browse catalog <ArrowRight size={14} />
                </Link>
                <Link to="/" className="h-[46px] px-6 rounded-full border border-[#e5e5e5] text-[#6B6B6B] text-[14px] flex items-center gap-2 hover:border-[#ccc] transition-colors" style={{ fontWeight: 500 }}>
                  Back to home
                </Link>
              </div>
            </div>
          ) : (
            /* ── Form ── */
            <div className="bg-white rounded-3xl border border-[#f0eeec] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.04)]">
              {/* Form header */}
              <div className="bg-[#2E4A3E] px-5 sm:px-8 lg:px-10 py-7 sm:py-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-white/[0.04] -translate-y-1/2 translate-x-1/3" />
                <div className="relative flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <Building2 size={24} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-[28px] text-white tracking-[-0.02em]" style={{ fontWeight: 700 }}>
                      Register your business
                    </h2>
                    <p className="text-[14px] text-white/50 mt-1">
                      Fill out the form below and our wholesale team will prepare a personalised offer within 1–2 business days.
                    </p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-5 sm:p-8 lg:p-10">
                {/* ── Section: Company info ── */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-7 h-7 rounded-lg bg-[#2E4A3E]/8 flex items-center justify-center">
                      <Building2 size={13} className="text-[#2E4A3E]" />
                    </div>
                    <h3 className="text-[16px] text-[#1A1A1A]" style={{ fontWeight: 700 }}>Company information</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                    <div>
                      <label className={labelBase} style={{ fontWeight: 600 }}>
                        Company name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.companyName}
                        onChange={(e) => update("companyName", e.target.value)}
                        placeholder="e.g. Beauty Studio OÜ"
                        className={`${inputBase} ${errors.companyName ? "border-red-300" : "border-[#e5e5e5]"}`}
                      />
                      {errors.companyName && <p className="text-[11px] text-red-400 mt-1">{errors.companyName}</p>}
                    </div>
                    <div>
                      <label className={labelBase} style={{ fontWeight: 600 }}>
                        Business type <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <select
                          value={form.businessType}
                          onChange={(e) => update("businessType", e.target.value)}
                          className={`${selectBase} ${!form.businessType ? "text-[#bbb]" : ""} ${errors.businessType ? "border-red-300" : "border-[#e5e5e5]"}`}
                        >
                          <option value="" disabled>Select type...</option>
                          {businessTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                        <ChevronRight size={14} className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-[#bbb] pointer-events-none" />
                      </div>
                      {errors.businessType && <p className="text-[11px] text-red-400 mt-1">{errors.businessType}</p>}
                    </div>
                    <div>
                      <label className={labelBase} style={{ fontWeight: 600 }}>
                        VAT number <span className="text-[#999] text-[11px]" style={{ fontWeight: 400 }}>(if applicable)</span>
                      </label>
                      <input
                        type="text"
                        value={form.vatNumber}
                        onChange={(e) => update("vatNumber", e.target.value)}
                        placeholder="e.g. EE123456789"
                        className={`${inputBase} border-[#e5e5e5]`}
                      />
                    </div>
                    <div>
                      <label className={labelBase} style={{ fontWeight: 600 }}>
                        Registration code <span className="text-[#999] text-[11px]" style={{ fontWeight: 400 }}>(optional)</span>
                      </label>
                      <input
                        type="text"
                        value={form.regCode}
                        onChange={(e) => update("regCode", e.target.value)}
                        placeholder="e.g. 14123456"
                        className={`${inputBase} border-[#e5e5e5]`}
                      />
                    </div>
                    <div>
                      <label className={labelBase} style={{ fontWeight: 600 }}>
                        Country <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.country}
                        onChange={(e) => update("country", e.target.value)}
                        placeholder="e.g. Estonia"
                        className={`${inputBase} ${errors.country ? "border-red-300" : "border-[#e5e5e5]"}`}
                      />
                      {errors.country && <p className="text-[11px] text-red-400 mt-1">{errors.country}</p>}
                    </div>
                    <div>
                      <label className={labelBase} style={{ fontWeight: 600 }}>
                        City <span className="text-[#999] text-[11px]" style={{ fontWeight: 400 }}>(optional)</span>
                      </label>
                      <input
                        type="text"
                        value={form.city}
                        onChange={(e) => update("city", e.target.value)}
                        placeholder="e.g. Tallinn"
                        className={`${inputBase} border-[#e5e5e5]`}
                      />
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-[#f0eeec] mb-10" />

                {/* ── Section: Contact person ── */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-7 h-7 rounded-lg bg-[#C8A08C]/10 flex items-center justify-center">
                      <Users size={13} className="text-[#C8A08C]" />
                    </div>
                    <h3 className="text-[16px] text-[#1A1A1A]" style={{ fontWeight: 700 }}>Contact person</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5">
                    <div>
                      <label className={labelBase} style={{ fontWeight: 600 }}>
                        Full name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.contactName}
                        onChange={(e) => update("contactName", e.target.value)}
                        placeholder="e.g. Maria Ivanova"
                        className={`${inputBase} ${errors.contactName ? "border-red-300" : "border-[#e5e5e5]"}`}
                      />
                      {errors.contactName && <p className="text-[11px] text-red-400 mt-1">{errors.contactName}</p>}
                    </div>
                    <div>
                      <label className={labelBase} style={{ fontWeight: 600 }}>
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="e.g. maria@studio.ee"
                        className={`${inputBase} ${errors.email ? "border-red-300" : "border-[#e5e5e5]"}`}
                      />
                      {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className={labelBase} style={{ fontWeight: 600 }}>
                        Phone <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        placeholder="e.g. +372 5123 4567"
                        className={`${inputBase} ${errors.phone ? "border-red-300" : "border-[#e5e5e5]"}`}
                      />
                      {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-[#f0eeec] mb-10" />

                {/* ── Section: Order details ── */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-7 h-7 rounded-lg bg-[#2E4A3E]/8 flex items-center justify-center">
                      <Package size={13} className="text-[#2E4A3E]" />
                    </div>
                    <h3 className="text-[16px] text-[#1A1A1A]" style={{ fontWeight: 700 }}>Order expectations</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                    <div>
                      <label className={labelBase} style={{ fontWeight: 600 }}>
                        Estimated monthly volume <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <select
                          value={form.volume}
                          onChange={(e) => update("volume", e.target.value)}
                          className={`${selectBase} ${!form.volume ? "text-[#bbb]" : ""} ${errors.volume ? "border-red-300" : "border-[#e5e5e5]"}`}
                        >
                          <option value="" disabled>Select volume...</option>
                          {volumeOptions.map((v) => <option key={v} value={v}>{v}</option>)}
                        </select>
                        <ChevronRight size={14} className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-[#bbb] pointer-events-none" />
                      </div>
                      {errors.volume && <p className="text-[11px] text-red-400 mt-1">{errors.volume}</p>}
                    </div>
                    <div>
                      <label className={labelBase} style={{ fontWeight: 600 }}>
                        Additional message <span className="text-[#999] text-[11px]" style={{ fontWeight: 400 }}>(optional)</span>
                      </label>
                      <textarea
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        placeholder="Tell us about your business needs, preferred brands, or specific products..."
                        rows={1}
                        className="w-full h-[48px] px-4 py-3 border border-[#e5e5e5] rounded-xl text-[14px] text-[#1A1A1A] placeholder:text-[#bbb] outline-none focus:border-[#2E4A3E] transition-colors bg-white resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-[#f0eeec] mb-8" />

                {/* ── Terms + submit ── */}
                <div className="flex flex-col sm:flex-row items-start justify-between gap-6 sm:gap-8">
                  <div className="flex items-start gap-3 flex-1">
                    <button
                      type="button"
                      onClick={() => update("agreeTerms", !form.agreeTerms)}
                      className={`w-5 h-5 rounded border-2 shrink-0 mt-0.5 flex items-center justify-center transition-colors cursor-pointer ${
                        form.agreeTerms
                          ? "bg-[#2E4A3E] border-[#2E4A3E]"
                          : errors.agreeTerms
                          ? "border-red-300"
                          : "border-[#ddd]"
                      }`}
                    >
                      {form.agreeTerms && <Check size={12} className="text-white" />}
                    </button>
                    <div>
                      <p className="text-[13px] text-[#6B6B6B] leading-relaxed">
                        I agree to the{" "}
                        <Link to="/terms" className="text-[#1A1A1A] underline underline-offset-2 hover:text-[#C8A08C] transition-colors" style={{ fontWeight: 500 }}>Terms of Service</Link>{" "}
                        and{" "}
                        <Link to="/privacy" className="text-[#1A1A1A] underline underline-offset-2 hover:text-[#C8A08C] transition-colors" style={{ fontWeight: 500 }}>Privacy Policy</Link>.
                        I consent to Nanails OÜ processing my business data for the purpose of B2B partnership.
                      </p>
                      {errors.agreeTerms && <p className="text-[11px] text-red-400 mt-1">{errors.agreeTerms}</p>}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="h-[50px] px-8 rounded-full bg-[#2E4A3E] text-white text-[14px] flex items-center gap-2.5 hover:bg-[#243d33] transition-colors shrink-0 cursor-pointer w-full sm:w-auto justify-center"
                    style={{ fontWeight: 600 }}
                  >
                    <Send size={15} />
                    Submit application
                  </button>
                </div>

                {/* Help note */}
                <div className="mt-8 flex items-center gap-4 bg-[#F5F3F1] rounded-xl p-5 border border-[#f0eeec]">
                  <Mail size={18} className="text-[#C8A08C] shrink-0" />
                  <p className="text-[13px] text-[#999] leading-relaxed">
                    Prefer to discuss first?{" "}
                    <a href="mailto:info@nanails.eu" className="text-[#1A1A1A] hover:text-[#C8A08C] transition-colors" style={{ fontWeight: 600 }}>info@nanails.eu</a>{" "}
                    or call{" "}
                    <a href="tel:+37256968888" className="text-[#1A1A1A] hover:text-[#C8A08C] transition-colors" style={{ fontWeight: 600 }}>+372 5696 8888</a>{" "}
                    (Mon–Fri 09:00–17:00)
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}