export function CollectionBanner() {
  return (
    <section className="px-4 sm:px-6 py-4">
      <div className="max-w-[1415px] mx-auto text-center mb-6 sm:mb-10">
        <h2 className="text-[20px] sm:text-[24px] md:text-[28px] text-[#1A1A1A] tracking-[-0.01em]" style={{ fontWeight: 600 }}>
          Explore our collection of{" "}
          <span className="text-[#C8A08C]">Professional Tools</span>
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>from top brands in the industry
        </h2>
      </div>

      <div className="max-w-[1415px] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {[
            { label: "Gel Base", color: "#2C2926" },
            { label: "Salon Equipment", color: "#3B3530" },
            { label: "Acryl & Extensions", color: "#4A423B" },
            { label: "Nail Art Supplies", color: "#584F47" },
            { label: "Body Care", color: "#665C53" },
            { label: "Accessories", color: "#5C4A3E" },
          ].map((item) => (
            <div
              key={item.label}
              className="group rounded-xl overflow-hidden cursor-pointer relative h-[80px] sm:h-[100px]"
              style={{ backgroundColor: item.color }}
            >
              <div className="absolute inset-0 flex items-center justify-center group-hover:bg-white/5 transition-colors duration-200">
                <span className="text-white text-[12px] sm:text-[14px] text-center tracking-[0.02em]" style={{ fontWeight: 600 }}>
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedSection() {
  return (
    <section className="px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-[1415px] mx-auto">
        <div className="bg-[#2E4A3E] rounded-2xl overflow-hidden flex flex-col lg:flex-row min-h-[320px] lg:min-h-[400px]">
          {/* Left Side */}
          <div className="flex-1 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
            <span className="text-white/60 text-[11px] sm:text-[12px] uppercase tracking-[0.15em] mb-3" style={{ fontWeight: 500 }}>
              Quality & Safety
            </span>
            <h2 className="text-white text-[24px] sm:text-[30px] lg:text-[36px] leading-tight tracking-[-0.02em] mb-4 sm:mb-6" style={{ fontWeight: 700 }}>
              Premium Certified<br />Products Only
            </h2>
            <p className="text-white/70 text-[13px] sm:text-[15px] leading-relaxed mb-5 sm:mb-6 max-w-[420px]">
              Every product in our store meets the highest European safety standards. All gels are TPO-free — safe for both nail technicians and clients.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-6 mb-6 sm:mb-8">
              {["EU Certified", "TPO-Free Gels", "Salon Tested", "Cruelty-Free"].map((tag) => (
                <span key={tag} className="text-white/80 text-[12px] sm:text-[13px] flex items-center gap-2" style={{ fontWeight: 500 }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A08C]" />
                  {tag}
                </span>
              ))}
            </div>
            <button className="bg-white text-[#2E4A3E] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-[13px] sm:text-[14px] hover:bg-[#C8A08C] hover:text-white transition-all duration-300 w-fit" style={{ fontWeight: 600 }}>
              View Certificates
            </button>
          </div>

          {/* Right Side */}
          <div className="flex-1 relative hidden md:block">
            <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-12">
              <div className="bg-[#D9CEC5] rounded-2xl w-full h-full overflow-hidden" />
            </div>
            <div className="absolute right-6 lg:right-12 bottom-6 lg:bottom-12 bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-5 max-w-[240px] sm:max-w-[260px]">
              <p className="text-[12px] sm:text-[13px] text-[#3a3a3a] leading-relaxed">
                All our gels are formulated without TPO photoinitiators — no burning sensation under the lamp, safe for sensitive clients and professionals alike.
              </p>
              <a href="#" className="text-[#C8A08C] text-[12px] sm:text-[13px] mt-2 inline-block" style={{ fontWeight: 600 }}>
                Learn more &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
