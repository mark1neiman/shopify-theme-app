import { useState, useRef } from "react";
import { Link } from "react-router";
import {
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  HelpCircle,
  Package,
  Users,
  ArrowUpRight,
  Instagram,
  Facebook,
  CheckCircle2,
  Copy,
  Check,
} from "lucide-react";

/* ─── Contact cards data ─── */
const contactMethods = [
  {
    icon: Phone,
    label: "Call us",
    value: "+372 5696 8888",
    sub: "Mon–Fri, 09:00–17:00 EET",
    href: "tel:+37256968888",
    color: "#2E4A3E",
  },
  {
    icon: Mail,
    label: "Email us",
    value: "info@nanails.eu",
    sub: "We reply within 24 hours",
    href: "mailto:info@nanails.eu",
    color: "#C8A08C",
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: "Pärnu mnt 23",
    sub: "Tallinn, Estonia 10141",
    href: "https://maps.google.com/?q=Pärnu+mnt+23,+Tallinn,+Estonia,+10141",
    color: "#009DE0",
  },
  {
    icon: Clock,
    label: "Dispatch hours",
    value: "Mon – Fri",
    sub: "09:00 – 17:00 EET",
    href: null,
    color: "#8B6F5C",
  },
];

const quickLinks = [
  {
    icon: Package,
    title: "Track my order",
    desc: "Check dispatch status & tracking info",
    to: "/",
  },
  {
    icon: HelpCircle,
    title: "FAQ & Help Center",
    desc: "Shipping, returns, member pricing & more",
    to: "/",
  },
  {
    icon: Users,
    title: "Wholesale inquiries",
    desc: "B2B pricing, bulk orders & partnerships",
    to: "/about",
  },
  {
    icon: MessageCircle,
    title: "Product advice",
    desc: "Not sure what to choose? We'll help",
    to: "/catalog",
  },
];

const subjects = [
  "General inquiry",
  "Order issue",
  "Product question",
  "Wholesale / B2B",
  "Returns & refunds",
  "Partnership proposal",
  "Other",
];

export function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* ════════════ HERO ════════════ */}
      <section className="bg-white border-b border-[#f0eeec]">
        <div className="max-w-[1415px] mx-auto px-6 pt-8 pb-14">
          {/* breadcrumb */}
          <div className="flex items-center gap-2 text-[12px] text-[#999] mb-12">
            <Link to="/" className="hover:text-[#1A1A1A] transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <span className="text-[#1A1A1A]" style={{ fontWeight: 500 }}>
              Contact
            </span>
          </div>

          <div className="max-w-[600px]">
            <span
              className="text-[12px] uppercase tracking-[0.15em] text-[#C8A08C] mb-3 block"
              style={{ fontWeight: 600 }}
            >
              Get in Touch
            </span>
            <h1
              className="text-[44px] text-[#1A1A1A] tracking-[-0.03em] leading-[1.1] mb-4"
              style={{ fontWeight: 700 }}
            >
              We'd love to hear
              <br />
              from you
            </h1>
            <p className="text-[16px] text-[#6B6B6B] leading-relaxed">
              Whether you're a salon owner looking for wholesale pricing, a nail
              tech with a product question, or just want to say hi — we're here
              for you.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════ CONTACT CARDS ════════════ */}
      <section className="relative -mt-0 z-10 px-6">
        <div className="max-w-[1415px] mx-auto -mt-0">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 -translate-y-8">
            {contactMethods.map((m) => (
              <div
                key={m.label}
                className="group bg-white rounded-2xl border border-[#f0eeec] p-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-[#e5e5e5] transition-all relative overflow-hidden"
              >
                {/* top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ backgroundColor: m.color }}
                />

                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${m.color}10` }}
                >
                  <m.icon size={18} style={{ color: m.color }} />
                </div>

                <p
                  className="text-[12px] text-[#999] mb-1"
                  style={{ fontWeight: 500 }}
                >
                  {m.label}
                </p>

                <div className="flex items-center gap-2">
                  {m.href ? (
                    <a
                      href={m.href}
                      target={m.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-[16px] text-[#1A1A1A] hover:text-[#C8A08C] transition-colors"
                      style={{ fontWeight: 700 }}
                    >
                      {m.value}
                    </a>
                  ) : (
                    <p
                      className="text-[16px] text-[#1A1A1A]"
                      style={{ fontWeight: 700 }}
                    >
                      {m.value}
                    </p>
                  )}

                  {m.href && m.href.startsWith("mailto") && (
                    <button
                      onClick={() => handleCopy(m.value)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-md hover:bg-[#F5F3F1]"
                      title="Copy"
                    >
                      {copied === m.value ? (
                        <Check size={12} className="text-[#2E4A3E]" />
                      ) : (
                        <Copy size={12} className="text-[#999]" />
                      )}
                    </button>
                  )}
                </div>

                <p className="text-[13px] text-[#999] mt-1">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ FORM + MAP ════════════ */}
      <section className="max-w-[1415px] mx-auto px-4 sm:px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 lg:gap-10 items-start">
          {/* ── Left: Form ── */}
          <div className="bg-white rounded-2xl border border-[#f0eeec] p-5 sm:p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-[#F5F3F1] flex items-center justify-center">
                <Send size={16} className="text-[#C8A08C]" />
              </div>
              <div>
                <h2
                  className="text-[20px] text-[#1A1A1A] tracking-[-0.02em]"
                  style={{ fontWeight: 700 }}
                >
                  Send a message
                </h2>
                <p className="text-[13px] text-[#999]">
                  We typically respond within a few hours
                </p>
              </div>
            </div>

            {sent && (
              <div className="flex items-center gap-3 bg-[#2E4A3E]/5 border border-[#2E4A3E]/10 rounded-xl px-5 py-4 mb-6">
                <CheckCircle2 size={18} className="text-[#2E4A3E] shrink-0" />
                <div>
                  <p
                    className="text-[14px] text-[#2E4A3E]"
                    style={{ fontWeight: 600 }}
                  >
                    Message sent!
                  </p>
                  <p className="text-[13px] text-[#2E4A3E]/60">
                    Thank you — we'll get back to you soon.
                  </p>
                </div>
              </div>
            )}

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              {/* row: name + email */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    className="text-[13px] text-[#1A1A1A] mb-1.5 block"
                    style={{ fontWeight: 600 }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    placeholder="Your name"
                    className="w-full h-[44px] px-4 rounded-xl border border-[#e5e5e5] text-[14px] text-[#1A1A1A] placeholder:text-[#ccc] outline-none focus:border-[#C8A08C] focus:ring-2 focus:ring-[#C8A08C]/10 transition-all bg-[#FAFAF9]"
                  />
                </div>
                <div>
                  <label
                    className="text-[13px] text-[#1A1A1A] mb-1.5 block"
                    style={{ fontWeight: 600 }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="your@email.com"
                    className="w-full h-[44px] px-4 rounded-xl border border-[#e5e5e5] text-[14px] text-[#1A1A1A] placeholder:text-[#ccc] outline-none focus:border-[#C8A08C] focus:ring-2 focus:ring-[#C8A08C]/10 transition-all bg-[#FAFAF9]"
                  />
                </div>
              </div>

              {/* subject */}
              <div>
                <label
                  className="text-[13px] text-[#1A1A1A] mb-1.5 block"
                  style={{ fontWeight: 600 }}
                >
                  Subject
                </label>
                <div className="flex flex-wrap gap-2">
                  {subjects.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setForm({ ...form, subject: s })}
                      className={`h-[34px] px-4 rounded-full text-[13px] border transition-all ${
                        form.subject === s
                          ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
                          : "bg-white text-[#6B6B6B] border-[#e5e5e5] hover:border-[#ccc] hover:text-[#1A1A1A]"
                      }`}
                      style={{ fontWeight: 500 }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* message */}
              <div>
                <label
                  className="text-[13px] text-[#1A1A1A] mb-1.5 block"
                  style={{ fontWeight: 600 }}
                >
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Tell us how we can help…"
                  className="w-full px-4 py-3 rounded-xl border border-[#e5e5e5] text-[14px] text-[#1A1A1A] placeholder:text-[#ccc] outline-none focus:border-[#C8A08C] focus:ring-2 focus:ring-[#C8A08C]/10 transition-all bg-[#FAFAF9] resize-none"
                />
              </div>

              <button
                type="submit"
                className="self-start inline-flex items-center gap-2 h-[46px] px-8 bg-[#1A1A1A] text-white text-[14px] rounded-full hover:bg-[#3a3a3a] transition-colors mt-1"
                style={{ fontWeight: 600 }}
              >
                <Send size={14} />
                Send message
              </button>
            </form>
          </div>

          {/* ── Right: Map + quick links ── */}
          <div className="flex flex-col gap-6">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-[320px] border border-[#f0eeec] relative group">
              <iframe
                title="Nanails.eu location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2028.8!2d24.7453!3d59.4370!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692949c8f4e6b3b%3A0x4e3e7b0e7b0e7b0e!2sP%C3%A4rnu+mnt+23%2C+10141+Tallinn%2C+Estonia!5e0!3m2!1sen!2see!4v1700000000000!5m2!1sen!2see"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* floating badge */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#2E4A3E] flex items-center justify-center">
                  <MapPin size={15} className="text-white" />
                </div>
                <div>
                  <p
                    className="text-[13px] text-[#1A1A1A]"
                    style={{ fontWeight: 600 }}
                  >
                    Pärnu mnt 23
                  </p>
                  <p className="text-[11px] text-[#999]">
                    Tallinn, Estonia 10141
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=Pärnu+mnt+23,+Tallinn,+Estonia,+10141"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 w-8 h-8 rounded-lg bg-[#F5F3F1] flex items-center justify-center hover:bg-[#ebe8e5] transition-colors"
                >
                  <ArrowUpRight size={13} className="text-[#1A1A1A]" />
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div className="bg-white rounded-2xl border border-[#f0eeec] overflow-hidden">
              <div className="px-6 pt-6 pb-4">
                <h3
                  className="text-[16px] text-[#1A1A1A]"
                  style={{ fontWeight: 700 }}
                >
                  Quick links
                </h3>
              </div>
              <div>
                {quickLinks.map((ql, idx) => (
                  <Link
                    key={ql.title}
                    to={ql.to}
                    className={`flex items-center gap-4 px-6 py-4 hover:bg-[#FAFAF9] transition-colors group/link ${
                      idx < quickLinks.length - 1
                        ? "border-b border-[#f0eeec]"
                        : ""
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#F5F3F1] flex items-center justify-center shrink-0 group-hover/link:bg-[#ebe8e5] transition-colors">
                      <ql.icon size={16} className="text-[#C8A08C]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-[14px] text-[#1A1A1A]"
                        style={{ fontWeight: 600 }}
                      >
                        {ql.title}
                      </p>
                      <p className="text-[12px] text-[#999]">{ql.desc}</p>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-[#ccc] group-hover/link:text-[#C8A08C] transition-colors shrink-0"
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 px-2">
              <span className="text-[13px] text-[#999]" style={{ fontWeight: 500 }}>
                Follow us
              </span>
              <div className="h-px flex-1 bg-[#e5e5e5]" />
              <div className="flex items-center gap-2">
                {[
                  { icon: Instagram, href: "https://instagram.com/nanails.eu", hover: "#E1306C" },
                  { icon: Facebook, href: "https://facebook.com/nanails.eu", hover: "#1877F2" },
                ].map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg border border-[#e5e5e5] flex items-center justify-center text-[#999] transition-all hover:border-transparent hover:text-white hover:scale-105"
                    style={{}}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = s.hover;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                    }}
                  >
                    <s.icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}