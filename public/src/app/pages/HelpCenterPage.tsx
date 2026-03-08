import { useState } from "react";
import { Link } from "react-router";
import {
  ChevronRight,
  ChevronDown,
  Search,
  ShoppingCart,
  Truck,
  RotateCcw,
  CreditCard,
  User,
  Package,
  MessageCircle,
  Mail,
  ArrowRight,
  HelpCircle,
} from "lucide-react";

const categories = [
  {
    icon: ShoppingCart,
    title: "Ordering",
    color: "#C8A08C",
    faqs: [
      { q: "How do I place an order?", a: "Browse our catalog, add items to your cart, and proceed to checkout. Our checkout is powered by Shopify — a secure, fast, and reliable platform. You can checkout as a guest or create an account for faster future orders and member pricing." },
      { q: "Can I modify or cancel my order?", a: "Orders can be modified or cancelled within 1 hour of placement. After that, contact us immediately at info@nanails.eu — we'll do our best if the order hasn't been dispatched yet." },
      { q: "Is there a minimum order value?", a: "No minimum for retail orders. For wholesale B2B orders, the minimum is €500 per order." },
      { q: "Do you offer bulk/quantity discounts?", a: "Yes! Our B2B Program offers volume discounts starting from 10 units. Registered members also get exclusive pricing on all products. Contact us at info@nanails.eu for B2B enquiries." },
    ],
  },
  {
    icon: CreditCard,
    title: "Payment",
    color: "#2E4A3E",
    faqs: [
      { q: "What payment methods do you accept?", a: "We use Klix by Citadele as our payment platform. Accepted methods include: Visa, Mastercard, and other major cards; Baltic bank links (Swedbank, SEB, Luminor, Citadele, Coop Pank, LHV); Apple Pay; and Klix Pay Later — a buy now, pay later option. All transactions are securely processed through Klix." },
      { q: "Is my payment information secure?", a: "Absolutely. Our checkout is powered by Shopify with Klix as the payment provider. We never store your card details. All payments are processed through PCI DSS Level 1 certified infrastructure with 256-bit SSL encryption." },
      { q: "Can I pay in instalments?", a: "Yes! Klix Pay Later is available at checkout, allowing you to split your payment into convenient instalments. Availability and terms may vary depending on your order total and location." },
      { q: "When is my card charged?", a: "Your card is charged immediately upon order confirmation. For bank link payments, the order is processed once payment is received and confirmed by the bank." },
    ],
  },
  {
    icon: Truck,
    title: "Shipping",
    color: "#009DE0",
    faqs: [
      { q: "How much does shipping cost?", a: "Free shipping on orders over €50 in Estonia, €100 in Latvia/Lithuania, €150 in Finland, and €300 for worldwide destinations. Below these thresholds, SmartPosti parcel locker delivery starts from €2.50. Self-pickup at our Tallinn store (Pärnu mnt 23) is always free." },
      { q: "How long does delivery take?", a: "Estonia: 1–2 business days. Baltic states: 2–3 days. EU countries: 3–7 days. Wolt express in Tallinn: same-day for orders before 15:00. Orders are dispatched Mon–Fri, 09:00–17:00." },
      { q: "Do you ship outside the EU?", a: "Yes! We ship worldwide, including to Israel, UK, Norway, Switzerland, UAE, Saudi Arabia, Canada, Australia, and more. Worldwide shipping starts at €30 (free over €300). Australia shipping is €70 (free over €400). Contact us at info@nanails.eu for specific destinations." },
      { q: "Can I track my order?", a: "Yes! Once dispatched, you'll receive a tracking email with a link to follow your package in real-time. You can also track via our Track Order page." },
    ],
  },
  {
    icon: RotateCcw,
    title: "Returns",
    color: "#8B6F5C",
    faqs: [
      { q: "What is your return policy?", a: "14-day return window from the date of delivery, as required by EU law. Products must be unused, in original packaging, and in resalable condition. Contact us at info@nanails.eu to initiate a return." },
      { q: "Can I return opened cosmetics?", a: "For hygiene reasons, opened cosmetics (gel polish, skincare, etc.) with broken seals cannot be returned. Unopened items in original sealed packaging are accepted." },
      { q: "How long does a refund take?", a: "Refunds are processed within 14 days of receiving your return. The refund goes to your original payment method via Klix/Shopify. Bank processing may take an additional 3–5 business days." },
      { q: "Who pays return shipping?", a: "For standard returns, the customer covers return shipping. If the return is due to our error (wrong item, defect), we provide a prepaid return label. Products can also be returned in person at Pärnu mnt 23, Tallinn." },
    ],
  },
  {
    icon: User,
    title: "Account",
    color: "#C8A08C",
    faqs: [
      { q: "How do I create an account?", a: "Click 'Sign Up' in the header and enter your details. Account holders get member pricing, order history, wishlists, and faster Shopify checkout." },
      { q: "I forgot my password. What do I do?", a: "Click 'Forgot password' on the login page. We'll send a reset link to your registered email address. The link expires after 24 hours." },
      { q: "How do I update my details?", a: "Log in and go to My Account > Profile. You can update your name, email, password, shipping addresses, and notification preferences." },
      { q: "How can I delete my account?", a: "Contact us at info@nanails.eu to request account deletion. Per GDPR, we'll process your request within 30 days. Note that order history is retained for 7 years for tax/legal compliance as required by Estonian law." },
    ],
  },
  {
    icon: Package,
    title: "Products",
    color: "#2E4A3E",
    faqs: [
      { q: "Are your products EU-certified?", a: "Yes, every product we sell is fully EU-certified and compliant with EC 1223/2009 (Cosmetic Products Regulation). We provide Safety Data Sheets upon request." },
      { q: "Are your gels TPO-free?", a: "Yes! All our gels are TPO-free (also known as HEMA-free / photoinitiator-free) as required by EU regulation. This means they are safer for both nail technicians and clients, reducing the risk of allergic reactions." },
      { q: "How should I store gel products?", a: "Store gel polishes and UV/LED products in a cool, dark place at 15–25°C. Do not freeze. Important: never expose gels to direct sunlight — even in dark/opaque containers, sunlight can provoke crystallisation of the liquid inside the jar, making the product unusable. Keep lids tightly closed when not in use." },
      { q: "Can I get product samples?", a: "We offer sample/mini sizes on selected products. For B2B customers, sample kits are available upon request. Contact us at info@nanails.eu for details." },
    ],
  },
];

export function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleFaq = (key: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const allFaqs = categories.flatMap((cat) =>
    cat.faqs.map((faq) => ({ ...faq, category: cat.title }))
  );

  const filteredFaqs = searchQuery
    ? allFaqs.filter(
        (f) =>
          f.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          f.a.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Hero */}
      <div className="bg-[#1A1A1A] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#C8A08C]/5 -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#C8A08C]/5 translate-y-1/2 -translate-x-1/3" />
        </div>
        <div className="relative max-w-[1415px] mx-auto px-4 sm:px-6 pt-8 sm:pt-10 pb-12 sm:pb-14">
          <div className="flex items-center gap-2 text-[12px] text-white/35 mb-10 sm:mb-12">
            <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white/60" style={{ fontWeight: 500 }}>Help Center</span>
          </div>

          <div className="text-center max-w-[600px] mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-white/8 flex items-center justify-center mx-auto mb-6">
              <HelpCircle size={28} className="text-[#C8A08C]" />
            </div>
            <h1 className="text-[32px] sm:text-[42px] text-white tracking-[-0.03em] mb-4" style={{ fontWeight: 700 }}>
              How can we help?
            </h1>
            <p className="text-[15px] sm:text-[16px] text-white/40 mb-8">
              Find answers to common questions or get in touch with our support team.
            </p>

            {/* Search */}
            <div className="relative max-w-[480px] mx-auto">
              <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-white/25" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for answers..."
                className="w-full h-[52px] pl-13 pr-5 bg-white/[0.07] border border-white/10 rounded-full text-[15px] text-white placeholder:text-white/25 outline-none focus:border-[#C8A08C]/40 transition-colors"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1415px] mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* Search results */}
        {filteredFaqs && (
          <div className="max-w-[760px] mx-auto mb-14">
            <p className="text-[13px] text-[#999] mb-5" style={{ fontWeight: 500 }}>
              {filteredFaqs.length} result{filteredFaqs.length !== 1 ? "s" : ""} for "{searchQuery}"
            </p>
            {filteredFaqs.length > 0 ? (
              <div className="flex flex-col gap-3">
                {filteredFaqs.map((faq) => {
                  const key = `search-${faq.q}`;
                  const isOpen = openItems.has(key);
                  return (
                    <div key={key} className="bg-white rounded-xl border border-[#f0eeec] overflow-hidden">
                      <button onClick={() => toggleFaq(key)} className="w-full flex items-center justify-between p-5 text-left cursor-pointer">
                        <div>
                          <span className="text-[11px] text-[#C8A08C] mb-1 block" style={{ fontWeight: 600 }}>{faq.category}</span>
                          <span className="text-[15px] text-[#1A1A1A]" style={{ fontWeight: 600 }}>{faq.q}</span>
                        </div>
                        <ChevronDown size={16} className={`text-[#999] shrink-0 ml-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 pt-0">
                          <p className="text-[14px] text-[#6B6B6B] leading-[1.7]">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-2xl border border-[#f0eeec]">
                <p className="text-[16px] text-[#1A1A1A] mb-2" style={{ fontWeight: 600 }}>No results found</p>
                <p className="text-[14px] text-[#999]">Try different keywords or <Link to="/contact" className="text-[#C8A08C] underline">contact us</Link></p>
              </div>
            )}
          </div>
        )}

        {/* Category grid */}
        {!filteredFaqs && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-16">
              {categories.map((cat) => (
                <a
                  key={cat.title}
                  href={`#cat-${cat.title.toLowerCase()}`}
                  className="group bg-white rounded-2xl border border-[#f0eeec] p-7 hover:border-[#e0ddd9] hover:shadow-[0_6px_30px_rgba(0,0,0,0.04)] transition-all"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${cat.color}10` }}>
                    <cat.icon size={20} style={{ color: cat.color }} />
                  </div>
                  <h3 className="text-[17px] text-[#1A1A1A] mb-1.5" style={{ fontWeight: 700 }}>{cat.title}</h3>
                  <p className="text-[13px] text-[#999]">{cat.faqs.length} questions</p>
                </a>
              ))}
            </div>

            {/* All categories expanded */}
            <div className="max-w-[860px] mx-auto flex flex-col gap-14">
              {categories.map((cat) => (
                <section key={cat.title} id={`cat-${cat.title.toLowerCase()}`} className="scroll-mt-24">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${cat.color}10` }}>
                      <cat.icon size={18} style={{ color: cat.color }} />
                    </div>
                    <h2 className="text-[24px] text-[#1A1A1A] tracking-[-0.02em]" style={{ fontWeight: 700 }}>{cat.title}</h2>
                  </div>
                  <div className="flex flex-col gap-2">
                    {cat.faqs.map((faq) => {
                      const key = `${cat.title}-${faq.q}`;
                      const isOpen = openItems.has(key);
                      return (
                        <div key={key} className="bg-white rounded-xl border border-[#f0eeec] overflow-hidden">
                          <button onClick={() => toggleFaq(key)} className="w-full flex items-center justify-between p-5 text-left cursor-pointer">
                            <span className="text-[15px] text-[#1A1A1A]" style={{ fontWeight: 600 }}>{faq.q}</span>
                            <ChevronDown size={16} className={`text-[#ccc] shrink-0 ml-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                          </button>
                          {isOpen && (
                            <div className="px-5 pb-5 pt-0">
                              <p className="text-[14px] text-[#6B6B6B] leading-[1.7]">{faq.a}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          </>
        )}

        {/* Contact CTA */}
        <div className="max-w-[860px] mx-auto mt-16">
          <div className="bg-[#1A1A1A] rounded-2xl p-8 sm:p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-white/[0.02] -translate-y-1/2 translate-x-1/3" />
            <div className="relative">
              <MessageCircle size={28} className="text-[#C8A08C] mx-auto mb-4" />
              <h3 className="text-[24px] text-white tracking-[-0.02em] mb-3" style={{ fontWeight: 700 }}>Still need help?</h3>
              <p className="text-[14px] text-white/40 mb-7 max-w-[400px] mx-auto">
                Our support team is available Mon–Fri, 09:00–17:00 EET. We typically respond within 2 hours.
              </p>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <Link to="/contact" className="h-[44px] px-7 rounded-full bg-white text-[#1A1A1A] text-[14px] flex items-center gap-2 hover:bg-white/90 transition-colors" style={{ fontWeight: 600 }}>
                  Contact us <ArrowRight size={14} />
                </Link>
                <a href="mailto:info@nanails.eu" className="h-[44px] px-6 rounded-full border border-white/15 text-white/60 text-[14px] flex items-center gap-2 hover:border-white/30 hover:text-white transition-colors" style={{ fontWeight: 500 }}>
                  <Mail size={14} /> info@nanails.eu
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
