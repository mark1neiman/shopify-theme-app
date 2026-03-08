export function HeroSection() {
  return (
    <section className="bg-white pt-4 sm:pt-8 px-4 sm:px-6">
      <div className="max-w-[1415px] mx-auto">
        {/* Grid: large square | tall vertical | 2 small stacked */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-3 md:h-[500px] lg:h-[700px]">

          {/* 1. Large square — spans full height, left */}
          <div className="md:row-span-2 relative rounded-xl overflow-hidden bg-[#F5F3F1] group cursor-pointer min-h-[280px] sm:min-h-[360px]">
            <div className="absolute bottom-0 left-0 p-5 sm:p-8 flex flex-col gap-3 sm:gap-4">
              <span className="text-[#999] text-[12px] sm:text-[13px] uppercase tracking-[0.15em]" style={{ fontWeight: 500 }}>
                Spring '26 Collection
              </span>
              <h1 className="text-[#1A1A1A] text-[28px] sm:text-[36px] lg:text-[48px] leading-[1.1] tracking-[-0.02em]" style={{ fontWeight: 700 }}>
                Professional<br />Gel Polish
              </h1>
              <button className="mt-1 sm:mt-2 bg-[#1A1A1A] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-[13px] sm:text-[14px] tracking-[0.02em] hover:bg-[#333] transition-all duration-300 w-fit" style={{ fontWeight: 600 }}>
                Shop Collection
              </button>
            </div>
          </div>

          {/* 2. Tall vertical — spans full height, center */}
          <div className="md:row-span-2 relative rounded-xl overflow-hidden bg-[#EDE8E3] group cursor-pointer min-h-[240px] sm:min-h-[280px]">
            <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center">
              <span className="text-[#C8A08C] text-[12px] sm:text-[13px] uppercase tracking-[0.15em] mb-3" style={{ fontWeight: 600 }}>
                Members Only
              </span>
              <p className="text-[#1A1A1A] text-[44px] sm:text-[52px] lg:text-[64px] leading-none tracking-[-0.03em] mb-1" style={{ fontWeight: 800 }}>
                –20%
              </p>
              <p className="text-[#1A1A1A] text-[16px] sm:text-[18px] leading-snug tracking-[-0.01em] mb-3 sm:mb-4" style={{ fontWeight: 600 }}>
                on your first order
              </p>
              <p className="text-[#6B6B6B] text-[12px] sm:text-[13px] leading-relaxed mb-4 sm:mb-6 max-w-[200px]">
                Register at nanails.eu and get your personal discount on the entire catalog
              </p>
              <button className="bg-[#1A1A1A] text-white text-[12px] sm:text-[13px] px-6 sm:px-7 py-2.5 sm:py-3 rounded-full hover:bg-[#333] transition-colors" style={{ fontWeight: 600 }}>
                Create Account
              </button>
            </div>
          </div>

          {/* 3. Small top-right */}
          <div className="relative rounded-xl overflow-hidden bg-[#E8E3DE] group cursor-pointer min-h-[140px] sm:min-h-[160px]">
            <div className="absolute inset-0 p-5 flex flex-col justify-between">
              <div>
                <p className="text-[#1A1A1A] text-[20px] leading-tight" style={{ fontWeight: 700 }}>
                  Gel Colors
                </p>
                <p className="text-[#999] text-[13px] mt-1">Starting at €12.99</p>
              </div>
              <button className="bg-[#1A1A1A] text-white text-[12px] px-5 py-2 rounded-full hover:bg-[#333] transition-colors w-fit" style={{ fontWeight: 600 }}>
                Shop
              </button>
            </div>
          </div>

          {/* 4. Small bottom-right */}
          <div className="relative rounded-xl overflow-hidden bg-[#E3DDD7] group cursor-pointer min-h-[140px] sm:min-h-[160px]">
            <div className="absolute inset-0 p-5 flex flex-col justify-between">
              <div>
                <p className="text-[#1A1A1A] text-[20px] leading-tight" style={{ fontWeight: 700 }}>
                  Nail Care
                </p>
                <p className="text-[#999] text-[13px] mt-1">Starting at €8.99</p>
              </div>
              <button className="bg-[#1A1A1A] text-white text-[12px] px-5 py-2 rounded-full hover:bg-[#333] transition-colors w-fit" style={{ fontWeight: 600 }}>
                Shop
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}