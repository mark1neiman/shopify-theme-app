import { Instagram, Facebook, Youtube, ArrowRight, MapPin, Phone, Mail, Truck, ShieldCheck, RotateCcw, CreditCard, Clock } from "lucide-react";
import logoLight from "figma:asset/21235c36774508d4b0c063d2870a477e8837a9ea.png";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white mt-4">

      {/* ── Perks strip ── */}
      <div className="border-b border-white/8">
        <div className="max-w-[1415px] mx-auto px-4 sm:px-6 py-5 sm:py-6 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { icon: Truck, title: "Free Shipping", desc: "On orders over €50" },
            { icon: ShieldCheck, title: "EU Certified", desc: "TPO-free, salon tested" },
            { icon: RotateCcw, title: "Easy Returns", desc: "30-day return policy" },
            { icon: CreditCard, title: "Secure Payment", desc: "SSL encrypted checkout" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <Icon size={16} className="text-[#C8A08C]" />
              </div>
              <div>
                <p className="text-[12px] sm:text-[13px] text-white/90" style={{ fontWeight: 600 }}>{title}</p>
                <p className="text-[11px] sm:text-[12px] text-white/35">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Main footer ── */}
      <div className="max-w-[1415px] mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-10 sm:pb-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr] gap-8 sm:gap-10">

          {/* Brand column */}
          <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-1">
            <img src={logoLight} alt="NANAILS" className="h-[56px] sm:h-[72px] w-auto object-contain mb-4 sm:mb-5" />
            <p className="text-white/40 text-[13px] sm:text-[14px] leading-[1.75] mb-5 sm:mb-6 max-w-[320px]">
              Professional nail supplies for salons and beauty professionals across Europe. Quality you can trust.
            </p>

            {/* Social */}
            <div className="flex gap-3 mb-6 sm:mb-7">
              {[
                { Icon: Instagram, label: "Instagram", href: "#" },
                { Icon: Facebook, label: "Facebook", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-[40px] sm:h-[44px] px-3 sm:px-4 rounded-full bg-[#C8A08C]/15 border border-[#C8A08C]/25 flex items-center gap-2 hover:bg-[#C8A08C]/25 transition-all group"
                >
                  <Icon size={16} className="text-[#C8A08C]" />
                  <span className="text-[12px] sm:text-[13px] text-[#C8A08C] hidden sm:inline" style={{ fontWeight: 500 }}>{label}</span>
                </a>
              ))}
            </div>

            {/* Phone */}
            <a href="tel:+37256968888" className="flex items-center gap-3 mb-2 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#C8A08C]/15 border border-[#C8A08C]/25 flex items-center justify-center shrink-0">
                <Phone size={14} className="text-[#C8A08C]" />
              </div>
              <span className="text-[14px] sm:text-[16px] text-white/90 group-hover:text-[#C8A08C] transition-colors" style={{ fontWeight: 600 }}>+372 5696 8888</span>
            </a>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[11px] sm:text-[12px] uppercase tracking-[0.15em] text-[#C8A08C] mb-4 sm:mb-5" style={{ fontWeight: 600 }}>
              Shop
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {["Gel Polish", "Equipment", "Nail Art", "Care Products", "Accessories", "New Arrivals", "Sale"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="text-[13px] sm:text-[14px] text-white/50 hover:text-white hover:translate-x-1 transition-all inline-block">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] sm:text-[12px] uppercase tracking-[0.15em] text-[#C8A08C] mb-4 sm:mb-5" style={{ fontWeight: 600 }}>
              Company
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {[
                { label: "About Us", to: "/about" },
                { label: "Our Brands", to: "/catalog" },
                { label: "Blog", to: "/blog" },
                { label: "B2B Program", to: "/b2b" },
                { label: "Contact", to: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-[13px] sm:text-[14px] text-white/50 hover:text-white hover:translate-x-1 transition-all inline-block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="hidden md:block">
            <h4 className="text-[11px] sm:text-[12px] uppercase tracking-[0.15em] text-[#C8A08C] mb-4 sm:mb-5" style={{ fontWeight: 600 }}>
              Support
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {[
                { label: "Help Center", to: "/help" },
                { label: "Shipping Info", to: "/shipping" },
                { label: "Returns & Refunds", to: "/returns" },
                { label: "Track Order", to: "/track-order" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-[13px] sm:text-[14px] text-white/50 hover:text-white hover:translate-x-1 transition-all inline-block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <h4 className="text-[11px] sm:text-[12px] uppercase tracking-[0.15em] text-[#C8A08C] mb-4 sm:mb-5" style={{ fontWeight: 600 }}>
              Get in Touch
            </h4>
            <div className="space-y-3 sm:space-y-3.5 mb-6 sm:mb-7">
              <div className="flex items-start gap-2.5">
                <Mail size={14} className="text-white/25 shrink-0 mt-0.5" />
                <span className="text-[13px] sm:text-[14px] text-white/50">info@nanails.eu</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-white/25 shrink-0 mt-0.5" />
                <span className="text-[13px] sm:text-[14px] text-white/50 leading-[1.6]">
                  Pärnu mnt 23, Tallinn,<br />Estonia, 10141
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock size={14} className="text-white/25 shrink-0 mt-0.5" />
                <span className="text-[13px] sm:text-[14px] text-white/50 leading-[1.6]">
                  Dispatch: Mon–Fri 09:00–17:00<br />
                  <span className="text-[11px] sm:text-[12px] text-white/30">Hours may change on public holidays</span>
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-white/[0.04] rounded-xl p-4 sm:p-5">
              <p className="text-[12px] sm:text-[13px] text-white/70 mb-3" style={{ fontWeight: 600 }}>
                Subscribe for exclusive offers
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 min-w-0 h-[40px] sm:h-[42px] bg-white/6 border border-white/10 rounded-full pl-4 pr-3 text-[13px] text-white placeholder:text-white/25 outline-none focus:border-[#C8A08C]/50 transition-colors"
                />
                <button className="h-[40px] sm:h-[42px] w-[40px] sm:w-[42px] shrink-0 rounded-full bg-[#C8A08C] flex items-center justify-center hover:bg-[#b8907a] transition-colors">
                  <ArrowRight size={16} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Payment methods ── */}
      <div className="border-t border-white/6">
        <div className="max-w-[1415px] mx-auto px-4 sm:px-6 py-4 sm:py-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {["Visa", "Mastercard", "Apple Pay", "Swedbank", "SEB", "LHV", "Klix"].map((method) => (
              <div
                key={method}
                className="h-[26px] sm:h-[28px] px-2.5 sm:px-3 bg-white/5 rounded flex items-center justify-center"
              >
                <span className="text-[9px] sm:text-[10px] text-white/30 tracking-[0.02em]" style={{ fontWeight: 600 }}>
                  {method}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            {["SSL Secure", "GDPR Compliant"].map((badge) => (
              <div
                key={badge}
                className="h-[26px] sm:h-[28px] px-2.5 sm:px-3 border border-white/8 rounded flex items-center gap-1.5"
              >
                <ShieldCheck size={11} className="text-[#C8A08C]/60" />
                <span className="text-[9px] sm:text-[10px] text-white/30" style={{ fontWeight: 500 }}>
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/6">
        <div className="max-w-[1415px] mx-auto px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] sm:text-[12px] text-white/25">
            &copy; 2026 nanails.eu — All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-8">
            {[
              { label: "Privacy Policy", to: "/privacy" },
              { label: "Terms & Conditions", to: "/terms" },
              { label: "Cookie Policy", to: "/cookies" },
            ].map((item) => (
              <Link key={item.label} to={item.to} className="text-[11px] sm:text-[12px] text-white/25 hover:text-white/50 transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}