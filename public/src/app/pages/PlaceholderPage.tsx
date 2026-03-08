import { useLocation } from "react-router";
import { Construction } from "lucide-react";

export function PlaceholderPage() {
  const { pathname } = useLocation();
  const pageName = pathname.replace("/", "").replace(/-/g, " ") || "page";

  return (
    <section className="px-6 py-24">
      <div className="max-w-[800px] mx-auto text-center">
        <div className="w-20 h-20 rounded-2xl bg-[#F5F3F1] flex items-center justify-center mx-auto mb-8">
          <Construction size={32} className="text-[#C8A08C]" strokeWidth={1.5} />
        </div>
        <h1
          className="text-[36px] text-[#1A1A1A] tracking-[-0.02em] capitalize mb-4"
          style={{ fontWeight: 700 }}
        >
          {pageName}
        </h1>
        <p className="text-[16px] text-[#6B6B6B] leading-relaxed mb-8 max-w-[480px] mx-auto">
          This page is under construction. We're working on designing and building this section of nanails.eu.
        </p>
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F5F3F1] text-[13px] text-[#999]">
          <span className="w-2 h-2 rounded-full bg-[#C8A08C] animate-pulse" />
          <span style={{ fontWeight: 500 }}>Coming soon</span>
        </div>
      </div>
    </section>
  );
}
