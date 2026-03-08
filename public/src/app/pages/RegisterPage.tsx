import { useState } from "react";
import { Link } from "react-router";
import { Eye, EyeOff, Percent, Gift, Truck, Sparkles, ArrowRight, Check } from "lucide-react";
import { motion } from "motion/react";

const perks = [
  { icon: Percent, title: "20% Off First Order", desc: "Instant discount on your entire cart" },
  { icon: Gift, title: "Exclusive Deals", desc: "Members-only flash sales every week" },
  { icon: Truck, title: "Free Shipping", desc: "Free delivery on orders over €50 in Estonia" },
  { icon: Sparkles, title: "Early Access", desc: "New collections before anyone else" },
];

const passwordRules = [
  { label: "At least 8 characters", test: (v: string) => v.length >= 8 },
  { label: "One uppercase letter", test: (v: string) => /[A-Z]/.test(v) },
  { label: "One number", test: (v: string) => /\d/.test(v) },
];

export function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="min-h-[85vh] flex items-center justify-center py-10 md:py-16 px-4 bg-[#FAFAF9]">
      <div className="w-full max-w-[1060px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-white rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-[0_8px_60px_rgba(0,0,0,0.08)]"
        >
          {/* ── Left: Form ── */}
          <div className="flex-1 px-8 sm:px-12 py-10 sm:py-14 relative">
            {/* Accent top line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C8A08C] via-[#C8A08C]/50 to-transparent" />

            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-[13px] text-[#999] hover:text-[#C8A08C] transition-colors"
              style={{ fontWeight: 500 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              Back to Store
            </Link>

            <h1 className="mt-7 text-[#1A1A1A]" style={{ fontSize: 28, fontWeight: 800, lineHeight: 1.15 }}>
              Create an account
            </h1>
            <p className="mt-2 text-[14.5px] text-[#888]">
              Join 12,000+ professionals. Get <span className="text-[#264236]" style={{ fontWeight: 700 }}>20% off</span> your first order.
            </p>

            {/* Google */}
            <button
              type="button"
              className="mt-8 w-full h-[50px] rounded-full border border-[#e5e5e5] bg-white flex items-center justify-center gap-2.5 text-[14px] text-[#3a3a3a] hover:border-[#C8A08C] hover:shadow-[0_4px_20px_rgba(200,160,140,0.15)] transition-all cursor-pointer"
              style={{ fontWeight: 600 }}
            >
              <svg width="18" height="18" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59A14.5 14.5 0 0 1 9.5 24c0-1.59.28-3.14.76-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.77.9 7.35 2.56 10.52l7.97-5.93z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 5.93C6.51 42.62 14.62 48 24 48z"/>
              </svg>
              Continue with Google
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-7">
              <div className="flex-1 h-px bg-[#f0eeec]" />
              <span className="text-[11px] text-[#ccc] uppercase tracking-widest" style={{ fontWeight: 600 }}>or register with email</span>
              <div className="flex-1 h-px bg-[#f0eeec]" />
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name row */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[12px] text-[#6B6B6B] mb-2 uppercase tracking-wider" style={{ fontWeight: 600 }}>
                    First name
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Jane"
                    className="w-full h-[48px] px-5 rounded-xl border border-[#e5e5e5] bg-[#FAFAF9] text-[14px] text-[#1A1A1A] placeholder:text-[#ccc] outline-none focus:border-[#C8A08C] focus:bg-white focus:shadow-[0_0_0_4px_rgba(200,160,140,0.1)] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[12px] text-[#6B6B6B] mb-2 uppercase tracking-wider" style={{ fontWeight: 600 }}>
                    Last name
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Doe"
                    className="w-full h-[48px] px-5 rounded-xl border border-[#e5e5e5] bg-[#FAFAF9] text-[14px] text-[#1A1A1A] placeholder:text-[#ccc] outline-none focus:border-[#C8A08C] focus:bg-white focus:shadow-[0_0_0_4px_rgba(200,160,140,0.1)] transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-[12px] text-[#6B6B6B] mb-2 uppercase tracking-wider" style={{ fontWeight: 600 }}>
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full h-[48px] px-5 rounded-xl border border-[#e5e5e5] bg-[#FAFAF9] text-[14px] text-[#1A1A1A] placeholder:text-[#ccc] outline-none focus:border-[#C8A08C] focus:bg-white focus:shadow-[0_0_0_4px_rgba(200,160,140,0.1)] transition-all"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-[12px] text-[#6B6B6B] mb-2 uppercase tracking-wider" style={{ fontWeight: 600 }}>
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min. 8 characters"
                    className="w-full h-[48px] px-5 pr-12 rounded-xl border border-[#e5e5e5] bg-[#FAFAF9] text-[14px] text-[#1A1A1A] placeholder:text-[#ccc] outline-none focus:border-[#C8A08C] focus:bg-white focus:shadow-[0_0_0_4px_rgba(200,160,140,0.1)] transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#bbb] hover:text-[#6B6B6B] transition-colors cursor-pointer"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {/* Password strength indicators */}
                {password.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1"
                  >
                    {passwordRules.map((rule, i) => {
                      const pass = rule.test(password);
                      return (
                        <span
                          key={i}
                          className={`flex items-center gap-1.5 text-[11px] transition-colors ${pass ? "text-[#264236]" : "text-[#ccc]"}`}
                          style={{ fontWeight: 500 }}
                        >
                          <Check size={11} className={pass ? "text-[#264236]" : "text-[#ddd]"} />
                          {rule.label}
                        </span>
                      );
                    })}
                  </motion.div>
                )}
              </div>

              {/* Agree checkbox */}
              <label className="flex items-start gap-3 cursor-pointer group -mt-1">
                <span
                  className={`mt-0.5 w-[18px] h-[18px] rounded-md border flex items-center justify-center shrink-0 transition-all ${
                    agreed
                      ? "bg-[#264236] border-[#264236]"
                      : "border-[#ddd] bg-white group-hover:border-[#C8A08C]"
                  }`}
                  onClick={() => setAgreed(!agreed)}
                >
                  {agreed && <Check size={12} className="text-white" />}
                </span>
                <span className="text-[12.5px] text-[#888] leading-relaxed" style={{ fontWeight: 400 }}>
                  I agree to the{" "}
                  <Link to="/terms" className="text-[#1A1A1A] underline hover:text-[#C8A08C] transition-colors">Terms of Service</Link>
                  {" "}and{" "}
                  <Link to="/privacy" className="text-[#1A1A1A] underline hover:text-[#C8A08C] transition-colors">Privacy Policy</Link>
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="w-full h-[50px] rounded-xl bg-[#1A1A1A] text-white text-[14.5px] flex items-center justify-center gap-2 hover:bg-[#3a3a3a] transition-all cursor-pointer relative overflow-hidden group"
                style={{ fontWeight: 700 }}
              >
                <span className="relative z-[1] flex items-center gap-2">
                  Create Account
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#C8A08C] to-[#b8907c] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </form>

            {/* Sign in link */}
            <p className="mt-6 text-center text-[13.5px] text-[#888]">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#1A1A1A] hover:text-[#C8A08C] transition-colors"
                style={{ fontWeight: 700 }}
              >
                Sign In
              </Link>
            </p>
          </div>

          {/* ── Right: Green Promo Bar ── */}
          <div className="w-full lg:w-[360px] shrink-0 bg-[#264236] relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-white/[0.03]" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/[0.03]" />
            <div className="absolute top-1/2 right-0 w-32 h-32 rounded-full bg-white/[0.02]" />

            <div className="relative z-10 px-8 sm:px-10 py-10 sm:py-14 flex flex-col h-full">
              {/* Big discount badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-8"
              >
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-5">
                  <span className="w-2 h-2 rounded-full bg-[#C8A08C] animate-pulse" />
                  <span className="text-[11px] text-white/80 uppercase tracking-widest" style={{ fontWeight: 600 }}>
                    Members Only
                  </span>
                </div>

                <h2 className="text-white mb-2" style={{ fontSize: 42, fontWeight: 800, lineHeight: 1.05 }}>
                  20<span className="text-[#C8A08C]">%</span>
                </h2>
                <p className="text-white/90" style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.3 }}>
                  discount for all
                  <br />registered users
                </p>
                <p className="mt-3 text-white/50 text-[13px] leading-relaxed" style={{ fontWeight: 400 }}>
                  Create a free account and enjoy exclusive savings on professional nail products.
                </p>
              </motion.div>

              {/* Separator */}
              <div className="h-px bg-white/10 mb-7" />

              {/* Perks */}
              <ul className="flex flex-col gap-4 flex-1">
                {perks.map((perk, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                    className="flex items-start gap-3.5"
                  >
                    <span className="w-9 h-9 rounded-xl bg-white/[0.08] flex items-center justify-center shrink-0">
                      <perk.icon size={16} className="text-[#C8A08C]" />
                    </span>
                    <div>
                      <p className="text-white text-[13px]" style={{ fontWeight: 600 }}>
                        {perk.title}
                      </p>
                      <p className="text-white/40 text-[12px] mt-0.5" style={{ fontWeight: 400 }}>
                        {perk.desc}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>

              {/* Bottom trust line */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white/30 text-[11px] leading-relaxed" style={{ fontWeight: 400 }}>
                  Trusted by 12,000+ nail professionals across Europe. Your data is always secure.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}