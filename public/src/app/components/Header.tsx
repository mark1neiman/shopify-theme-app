import { useState, useEffect } from "react";
import { Search, User, ShoppingBag, ChevronDown, Menu, X } from "lucide-react";
import { useNavigate } from "react-router";
import logoDark from "figma:asset/031218a70e977cff89b935f419aad0591368f18b.png";
import logoLight from "figma:asset/21235c36774508d4b0c063d2870a477e8837a9ea.png";
import { CartDrawer } from "./CartDrawer";

export function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearchSubmit();
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Manicure", hasDropdown: true },
    { label: "Pedicure | Podiatry", hasDropdown: true },
    { label: "Eyelashes | Eyebrows", hasDropdown: true },
    { label: "Face | The body", hasDropdown: true },
    { label: "Epilation | Waxing", hasDropdown: true },
    { label: "For hair", hasDropdown: true },
    { label: "Disposable products", hasDropdown: true },
    { label: "Disinfection", hasDropdown: false },
    { label: "Cabin equipment", hasDropdown: false },
    { label: "Others", hasDropdown: true },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* ========== Section 1: Top Announcement Bar ========== */}
      <div
        className={`bg-white border-b border-[#e5e5e5] overflow-hidden transition-all duration-300 ${
          scrolled ? "max-h-0 border-b-0" : "max-h-[50px]"
        }`}
      >
        <div className="max-w-[1415px] mx-auto px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between">
          {/* Left — Shipping promo */}
          <div className="flex items-center gap-2">
            <span className="text-[12px] sm:text-[14px] text-[#1A1A1A]" style={{ fontWeight: 400 }}>
              Free Shipping on orders over €50 in Estonia!
            </span>
          </div>

          {/* Right — Language / Country selector */}
          <button className="hidden sm:flex items-center gap-1.5 text-[14px] text-[#1A1A1A] hover:text-[#C8A08C] transition-colors group">
            {/* Flag indicator */}
            <span className="w-5 h-[14px] rounded-[3px] overflow-hidden flex items-center justify-center bg-[#1291FF] relative shrink-0">
              <span className="absolute inset-x-0 top-0 h-1/3 bg-[#1291FF]" />
              <span className="absolute inset-x-0 top-1/3 h-1/3 bg-black" />
              <span className="absolute inset-x-0 bottom-0 h-1/3 bg-white" />
            </span>
            <span style={{ fontWeight: 400 }}>Estonia (EUR €)</span>
            <ChevronDown size={12} className="text-[#999] group-hover:text-[#C8A08C] transition-colors" />
          </button>
        </div>
      </div>

      {/* ========== Section 2: Main Header Bar ========== */}
      <div className={`bg-[#F5F3F1] relative z-[2] border-b border-[#e5e5e5] ${scrolled ? "shadow-[0px_2px_12px_0px_rgba(0,0,0,0.06)]" : ""}`}>
        <div className="max-w-[1415px] mx-auto px-4 sm:px-6 flex items-center h-[72px] sm:h-[96px] gap-3 sm:gap-5">
          {/* Left — Logo + Search together */}
          <a href="#" className="shrink-0 flex items-center" aria-label="nanails.eu home">
            <img
              src={logoDark}
              alt="NANAILS"
              className="h-[44px] sm:h-[64px] w-auto object-contain"
            />
          </a>

          {/* Search Bar — right next to logo */}
          <div className="hidden md:flex flex-1 max-w-[540px]">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="What are you looking for?"
                className="w-full h-[46px] bg-white rounded-full pl-6 pr-12 text-[14px] text-[#1A1A1A] placeholder:text-[#999] outline-none focus:ring-2 focus:ring-[#C8A08C]/30 transition-shadow border border-[#e5e5e5]"
                onKeyDown={handleSearchKeyDown}
              />
              {/* Clear button (visible when typing) */}
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-12 top-1/2 -translate-y-1/2 text-[12px] text-[#999] hover:text-[#1A1A1A] transition-colors uppercase tracking-wider"
                  style={{ fontWeight: 700 }}
                >
                  Clear
                </button>
              )}
              {/* Search icon */}
              <button className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity" onClick={handleSearchSubmit}>
                <Search size={20} className="text-[#999]" strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* Spacer to push right content */}
          <div className="flex-1" />

          {/* Right — Account & Cart */}
          <div className="flex items-center gap-5 shrink-0">
            {/* Social & Phone icons */}
            <div className="hidden sm:flex items-center gap-2">
              <a
                href="tel:+37256968888"
                aria-label="Phone"
                className="w-[38px] h-[38px] rounded-full border border-[#e5e5e5] flex items-center justify-center hover:border-[#C8A08C] hover:bg-[#C8A08C]/5 transition-all group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-[#1A1A1A] group-hover:text-[#C8A08C] transition-colors"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-[38px] h-[38px] rounded-full border border-[#e5e5e5] flex items-center justify-center hover:border-[#C8A08C] hover:bg-[#C8A08C]/5 transition-all group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-[#1A1A1A] group-hover:text-[#C8A08C] transition-colors"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-[38px] h-[38px] rounded-full border border-[#e5e5e5] flex items-center justify-center hover:border-[#C8A08C] hover:bg-[#C8A08C]/5 transition-all group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-[#1A1A1A] group-hover:text-[#C8A08C] transition-colors"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-6 bg-[#e5e5e5]" />

            {/* Account */}
            <a
              href="/login"
              className="hidden sm:flex items-center gap-2 text-[#1A1A1A] hover:text-[#C8A08C] transition-colors group"
            >
              <User size={22} className="text-[#1A1A1A] group-hover:text-[#C8A08C] transition-colors" strokeWidth={1.8} />
              <span className="text-[14px] text-[#1A1A1A] group-hover:text-[#C8A08C] transition-colors" style={{ fontWeight: 400 }}>
                Sign in / Register
              </span>
            </a>

            {/* Cart */}
            <button
              className="relative flex items-center justify-center w-[44px] h-[44px] bg-white rounded-full hover:bg-[#e5e5e5] transition-colors border border-[#e5e5e5] cursor-pointer"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag size={22} className="text-[#1A1A1A]" strokeWidth={2} />
              {/* Badge */}
              <span className="absolute -top-[2px] -right-[10px] bg-[#C8A08C] text-white text-[13px] min-w-[22px] h-[22px] rounded-full flex items-center justify-center px-1 border-2 border-[#F5F3F1]" style={{ fontWeight: 500 }}>
                3
              </span>
            </button>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 text-[#1A1A1A] hover:text-[#C8A08C] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* ========== Section 3: Navigation Bar ========== */}
      <div className="bg-white relative z-[1] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.06)]">
        <div className="max-w-[1415px] mx-auto px-6">
          <nav className="hidden lg:flex items-center h-[48px] gap-0">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className="flex items-center h-full px-3 text-[13px] text-[#3a3a3a] hover:text-[#C8A08C] transition-colors relative group gap-1 whitespace-nowrap"
                style={{ fontWeight: 500 }}
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown size={12} className="text-[#999] group-hover:text-[#C8A08C] transition-colors" />
                )}
                {/* Active indicator on hover */}
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#C8A08C] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* ========== Mobile Navigation Overlay ========== */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-0 z-[100] bg-white">
          <div className="flex items-center justify-between px-6 h-[64px] border-b border-[#e5e5e5]">
            <a href="#" className="shrink-0">
              <img src={logoDark} alt="NANAILS" className="h-[40px] w-auto object-contain" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:bg-[#F5F3F1] rounded-full transition-colors"
            >
              <X size={24} className="text-[#1A1A1A]" />
            </button>
          </div>

          {/* Mobile search */}
          <div className="px-6 py-4 border-b border-[#e5e5e5]">
            <div className="relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full h-[44px] bg-[#F5F3F1] rounded-full pl-6 pr-12 text-[14px] text-[#1A1A1A] placeholder:text-[#999] outline-none focus:ring-2 focus:ring-[#C8A08C]/40"
                onKeyDown={handleSearchKeyDown}
              />
              <Search size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#999]" />
            </div>
          </div>

          {/* Mobile nav items */}
          <nav className="px-6 py-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-4 border-b border-[#e5e5e5] text-[16px] text-[#1A1A1A] hover:text-[#C8A08C] transition-colors"
                style={{ fontWeight: 600 }}
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown size={16} className="text-[#999] -rotate-90" />
                )}
              </a>
            ))}
          </nav>

          {/* Mobile account */}
          <div className="px-6 pt-4">
            <a
              href="/login"
              className="flex items-center gap-3 py-3 text-[14px] text-[#6B6B6B] hover:text-[#C8A08C] transition-colors"
            >
              <User size={20} />
              <span style={{ fontWeight: 500 }}>Sign in / Register</span>
            </a>
          </div>

          {/* Mobile language */}
          <div className="px-6 pt-2">
            <button className="flex items-center gap-2 text-[14px] text-[#6B6B6B]">
              <span className="w-5 h-[14px] rounded-[3px] overflow-hidden flex items-center justify-center relative shrink-0">
                <span className="absolute inset-x-0 top-0 h-1/3 bg-[#1291FF]" />
                <span className="absolute inset-x-0 top-1/3 h-1/3 bg-black" />
                <span className="absolute inset-x-0 bottom-0 h-1/3 bg-white" />
              </span>
              <span style={{ fontWeight: 400 }}>Estonia (EUR €)</span>
              <ChevronDown size={12} className="text-[#999]" />
            </button>
          </div>
        </div>
      )}

      {/* ========== Cart Drawer ========== */}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
  );
}