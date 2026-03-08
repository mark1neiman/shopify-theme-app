import { useState } from "react";
import { Link } from "react-router";
import { ChevronRight, Cookie, ChevronDown, Info, Shield, BarChart3, Megaphone, Settings } from "lucide-react";

interface CookieCategory {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  legal: string;
  cookies: { name: string; purpose: string; provider: string; duration: string }[];
}

const cookieCategories: CookieCategory[] = [
  {
    id: "essential",
    icon: Shield,
    title: "Essential Cookies",
    description:
      "These cookies are strictly necessary for the website to function and cannot be switched off. They enable core features such as session management, shopping cart persistence, form security (CSRF protection), and storing your cookie consent preferences. Without these cookies, the website cannot operate properly.",
    legal: "Legal basis: Legitimate interest (Art. 6(1)(f) GDPR). No consent required.",
    cookies: [
      { name: "session_id", purpose: "Maintains your session across pages", provider: "nanails.eu", duration: "Session" },
      { name: "cart_token", purpose: "Preserves your shopping cart contents between visits", provider: "nanails.eu", duration: "30 days" },
      { name: "csrf_token", purpose: "Protects forms against cross-site request forgery attacks", provider: "nanails.eu", duration: "Session" },
      { name: "cookie_consent", purpose: "Stores your cookie consent preferences", provider: "nanails.eu", duration: "1 year" },
    ],
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Analytics Cookies",
    description:
      "We use analytics cookies to understand how visitors interact with our website — which pages are most popular, how users navigate, and where they encounter issues. This data is aggregated and anonymised, meaning it cannot be used to identify you personally. The insights help us improve website performance, content, and user experience.",
    legal: "Legal basis: Consent (Art. 6(1)(a) GDPR). You can withdraw consent at any time.",
    cookies: [
      { name: "_ga", purpose: "Distinguishes unique users by assigning a randomly generated number", provider: "Google Analytics", duration: "2 years" },
      { name: "_ga_*", purpose: "Maintains session state for Google Analytics 4", provider: "Google Analytics", duration: "2 years" },
      { name: "_gid", purpose: "Distinguishes users for a 24-hour period", provider: "Google Analytics", duration: "24 hours" },
    ],
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Marketing Cookies",
    description:
      "Marketing cookies are used to track visitors across websites and display relevant advertisements. They help us measure the effectiveness of our advertising campaigns on platforms like Facebook and Google. These cookies may be set by our advertising partners and used to build a profile of your interests.",
    legal: "Legal basis: Consent (Art. 6(1)(a) GDPR). You can withdraw consent at any time.",
    cookies: [
      { name: "_fbp", purpose: "Tracks visits across websites for Facebook advertising", provider: "Facebook (Meta)", duration: "3 months" },
      { name: "_pin_unauth", purpose: "Tracks usage of the Pinterest tag on our site", provider: "Pinterest", duration: "1 year" },
      { name: "ads/ga-audiences", purpose: "Used by Google Ads for remarketing audiences", provider: "Google Ads", duration: "Session" },
    ],
  },
  {
    id: "preferences",
    icon: Settings,
    title: "Preference Cookies",
    description:
      "Preference cookies enable personalised features that enhance your browsing experience. They remember your language selection, preferred currency, recently viewed products, and display settings. Without these cookies, some personalisation features may not work correctly.",
    legal: "Legal basis: Consent (Art. 6(1)(a) GDPR). You can withdraw consent at any time.",
    cookies: [
      { name: "locale", purpose: "Stores your preferred language setting", provider: "nanails.eu", duration: "1 year" },
      { name: "currency", purpose: "Stores your preferred display currency", provider: "nanails.eu", duration: "1 year" },
      { name: "recently_viewed", purpose: "Tracks products you have recently viewed", provider: "nanails.eu", duration: "30 days" },
    ],
  },
];

export function CookieSettingsPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <div className="bg-white border-b border-[#f0eeec]">
        <div className="max-w-[1415px] mx-auto px-4 sm:px-6 pt-8 sm:pt-10 pb-8 sm:pb-10">
          <div className="flex items-center gap-2 text-[12px] text-[#999] mb-6 sm:mb-8">
            <Link to="/" className="hover:text-[#1A1A1A] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-[#1A1A1A]" style={{ fontWeight: 500 }}>Cookie Policy</span>
          </div>
          <div className="flex items-start gap-4 sm:gap-5">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#C8A08C]/10 flex items-center justify-center shrink-0 mt-1">
              <Cookie size={22} className="text-[#C8A08C]" />
            </div>
            <div>
              <h1 className="text-[28px] sm:text-[38px] text-[#1A1A1A] tracking-[-0.03em]" style={{ fontWeight: 700 }}>
                Cookie Policy
              </h1>
              <p className="text-[14px] sm:text-[15px] text-[#999] mt-2 max-w-[560px]">
                How and why nanails.eu uses cookies. Last updated: February 1, 2026.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[860px] mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* Intro */}
        <div className="flex items-start gap-3 sm:gap-4 bg-[#F5F3F1] rounded-2xl p-5 sm:p-6 mb-8 sm:mb-10 border border-[#f0eeec]">
          <Info size={18} className="text-[#C8A08C] shrink-0 mt-0.5" />
          <div className="text-[13px] sm:text-[14px] text-[#6B6B6B] leading-[1.7]">
            <p className="mb-3">
              Cookies are small text files stored on your device when you visit a website. They serve various purposes — from keeping your shopping cart alive to helping us understand which pages are most useful.
            </p>
            <p className="mb-3">
              At <span style={{ fontWeight: 600 }}>nanails.eu</span>, we use cookies in compliance with the <span style={{ fontWeight: 600 }}>EU General Data Protection Regulation (GDPR)</span> and the <span style={{ fontWeight: 600 }}>ePrivacy Directive</span>. Essential cookies are used based on our legitimate interest to operate the website. All other cookies require your consent, which you can manage via your browser settings.
            </p>
            <p>
              For full details on how we handle your personal data, see our{" "}
              <Link to="/privacy" className="text-[#1A1A1A] underline underline-offset-2 hover:text-[#C8A08C] transition-colors" style={{ fontWeight: 500 }}>
                Privacy Policy
              </Link>.
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-4 sm:gap-5 mb-8 sm:mb-10">
          {cookieCategories.map((cat) => {
            const isExpanded = expandedId === cat.id;
            const Icon = cat.icon;
            return (
              <div key={cat.id} className="bg-white rounded-2xl border border-[#f0eeec] overflow-hidden">
                {/* Header */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F3F1] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={18} className="text-[#C8A08C]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[16px] sm:text-[17px] text-[#1A1A1A] mb-2" style={{ fontWeight: 700 }}>{cat.title}</h3>
                      <p className="text-[13px] sm:text-[14px] text-[#6B6B6B] leading-[1.7] mb-3">{cat.description}</p>
                      <p className="text-[12px] text-[#999] italic">{cat.legal}</p>
                    </div>
                  </div>
                </div>

                {/* Expand toggle */}
                <div className="px-5 sm:px-6 pb-4">
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : cat.id)}
                    className="flex items-center gap-1.5 text-[12px] sm:text-[13px] text-[#C8A08C] hover:text-[#8B6F5C] transition-colors cursor-pointer"
                    style={{ fontWeight: 600 }}
                  >
                    {isExpanded ? "Hide details" : `View ${cat.cookies.length} cookies used`}
                    <ChevronDown size={14} className={`transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                  </button>
                </div>

                {/* Cookie table */}
                {isExpanded && (
                  <div className="border-t border-[#f0eeec] mx-5 sm:mx-6 pb-5 sm:pb-6 pt-4">
                    {/* Desktop table */}
                    <div className="hidden sm:block">
                      <table className="w-full text-[13px]">
                        <thead>
                          <tr className="text-left text-[11px] text-[#999] uppercase tracking-[0.05em]" style={{ fontWeight: 600 }}>
                            <th className="pb-3">Cookie</th>
                            <th className="pb-3">Purpose</th>
                            <th className="pb-3">Provider</th>
                            <th className="pb-3 text-right">Duration</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cat.cookies.map((c) => (
                            <tr key={c.name} className="border-t border-[#f5f3f1]">
                              <td className="py-2.5 text-[#1A1A1A] font-mono text-[12px]" style={{ fontWeight: 500 }}>{c.name}</td>
                              <td className="py-2.5 text-[#6B6B6B]">{c.purpose}</td>
                              <td className="py-2.5 text-[#999]">{c.provider}</td>
                              <td className="py-2.5 text-[#999] text-right">{c.duration}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Mobile cards */}
                    <div className="sm:hidden flex flex-col gap-3">
                      {cat.cookies.map((c) => (
                        <div key={c.name} className="bg-[#FAFAF9] rounded-lg p-3">
                          <p className="text-[12px] text-[#1A1A1A] font-mono mb-1" style={{ fontWeight: 600 }}>{c.name}</p>
                          <p className="text-[12px] text-[#6B6B6B] mb-1">{c.purpose}</p>
                          <div className="flex items-center justify-between text-[11px] text-[#999]">
                            <span>{c.provider}</span>
                            <span>{c.duration}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* How to manage */}
        <div className="bg-white rounded-2xl border border-[#f0eeec] p-5 sm:p-6 mb-8 sm:mb-10">
          <h3 className="text-[16px] sm:text-[17px] text-[#1A1A1A] mb-3" style={{ fontWeight: 700 }}>How to manage cookies</h3>
          <div className="text-[13px] sm:text-[14px] text-[#6B6B6B] leading-[1.7] space-y-3">
            <p>
              You can control and manage cookies through your browser settings. Most browsers allow you to block or delete cookies, set preferences for specific websites, and browse in "private" or "incognito" mode.
            </p>
            <p>
              Please note that blocking essential cookies may affect the functionality of our website — for example, your shopping cart may not work correctly.
            </p>
            <p>
              For more information on managing cookies in your browser:
            </p>
            <ul className="list-disc list-inside text-[#999] space-y-1 ml-1">
              <li>Chrome: Settings &rarr; Privacy and security &rarr; Cookies</li>
              <li>Firefox: Settings &rarr; Privacy & Security &rarr; Cookies</li>
              <li>Safari: Preferences &rarr; Privacy &rarr; Manage Website Data</li>
              <li>Edge: Settings &rarr; Cookies and site permissions</li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-[#F5F3F1] rounded-2xl p-5 sm:p-6 border border-[#f0eeec]">
          <p className="text-[13px] sm:text-[14px] text-[#6B6B6B] leading-[1.7]">
            If you have any questions about our use of cookies or your privacy, please contact us at{" "}
            <a href="mailto:info@nanails.eu" className="text-[#1A1A1A] hover:text-[#C8A08C] transition-colors" style={{ fontWeight: 600 }}>
              info@nanails.eu
            </a>{" "}
            or visit our{" "}
            <Link to="/privacy" className="text-[#1A1A1A] underline underline-offset-2 hover:text-[#C8A08C] transition-colors" style={{ fontWeight: 500 }}>
              Privacy Policy
            </Link>{" "}
            page for full details on how we handle your personal data.
          </p>
        </div>
      </div>
    </div>
  );
}