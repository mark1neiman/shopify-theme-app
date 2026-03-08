import { Truck, ShieldCheck, RefreshCw, Headphones } from "lucide-react";

export function FullWidthBanner() {
  return (
    <section className="px-4 sm:px-6 py-6 sm:py-8">
      <div className="max-w-[1415px] mx-auto">
        <div className="relative rounded-2xl overflow-hidden min-h-[280px] sm:h-[360px] bg-[#1A1A1A] group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
          <div className="absolute inset-0 flex items-center px-6 sm:px-10 lg:px-16">
            <div>
              <span className="text-white/70 text-[11px] sm:text-[12px] uppercase tracking-[0.15em]" style={{ fontWeight: 500 }}>
                Access Exclusive Deals
              </span>
              <h2 className="text-white text-[26px] sm:text-[32px] lg:text-[40px] leading-tight mt-2 sm:mt-3 tracking-[-0.02em]" style={{ fontWeight: 700 }}>
                Become a nanails<br />Professional Partner
              </h2>
              <p className="text-white/70 text-[13px] sm:text-[14px] mt-2 sm:mt-3 mb-5 sm:mb-6 max-w-[340px]">
                Get wholesale pricing, priority shipping, and exclusive access to new collections.
              </p>
              <button className="bg-[#C8A08C] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-[13px] sm:text-[14px] hover:bg-[#b8907a] transition-colors" style={{ fontWeight: 600 }}>
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustBadges() {
  const badges = [
    { icon: Truck, title: "Free Shipping", desc: "On orders over €50" },
    { icon: ShieldCheck, title: "Secure Payment", desc: "SSL encrypted checkout" },
    { icon: RefreshCw, title: "Easy Returns", desc: "30-day return policy" },
    { icon: Headphones, title: "Expert Support", desc: "Professional advice 24/7" },
  ];

  return (
    <section className="px-4 sm:px-6 py-8 sm:py-14">
      <div className="max-w-[1415px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {badges.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F5F0ED] flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#C8A08C]/10 transition-colors">
                <Icon size={22} className="text-[#C8A08C]" strokeWidth={1.5} />
              </div>
              <h4 className="text-[13px] sm:text-[14px] text-[#1A1A1A] mb-1" style={{ fontWeight: 600 }}>
                {title}
              </h4>
              <p className="text-[11px] sm:text-[12px] text-[#999]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Newsletter() {
  return (
    <section className="px-4 sm:px-6 py-6 sm:py-8">
      <div className="max-w-[1415px] mx-auto">
        <div className="bg-[#C8A08C] rounded-2xl px-6 sm:px-8 lg:px-12 py-7 sm:py-8 lg:py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="text-center sm:text-left">
            <h3 className="text-white text-[18px] sm:text-[20px] lg:text-[22px] tracking-[-0.01em]" style={{ fontWeight: 700 }}>
              Sign up for promotions
            </h3>
            <p className="text-white/80 text-[12px] sm:text-[13px] mt-1">
              Subscribe & save 15% on your first order
            </p>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white/90 backdrop-blur-sm px-4 sm:px-5 py-3 rounded-full text-[13px] flex-1 sm:w-[260px] lg:w-[300px] min-w-0 outline-none focus:ring-2 focus:ring-white/50 placeholder:text-[#999]"
            />
            <button className="bg-[#1A1A1A] text-white px-5 sm:px-7 py-3 rounded-full text-[13px] sm:text-[14px] hover:bg-[#333] transition-colors shrink-0" style={{ fontWeight: 600 }}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}