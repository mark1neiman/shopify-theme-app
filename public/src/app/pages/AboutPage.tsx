import { useRef } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import {
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Phone,
  Clock,
  Mail,
  Globe,
  Users,
  Truck,
  ShieldCheck,
  Award,
  Heart,
  Package,
  Sparkles,
  Quote,
  Zap,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

/* ─── Images ─── */
const imgHero =
  "https://admin.nanails.eu/wp-content/uploads/2023/04/photo_2023-03-13_17-13-55-Copy.jpg";
const imgTallinn =
  "https://images.unsplash.com/photo-1627727240079-2d3c29bf8a23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWxsaW5uJTIwZXN0b25pYSUyMG9sZCUyMHRvd24lMjBhZXJpYWx8ZW58MXx8fHwxNzcyMTE4OTcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgWarehouse =
  "https://images.unsplash.com/photo-1685119166946-d4050647b0e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29ya2luZyUyMHdhcmVob3VzZSUyMHBhY2tpbmclMjBib3hlc3xlbnwxfHx8fDE3NzIxMTg5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgProducts =
  "https://images.unsplash.com/photo-1600597704016-b524cef750bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBwcm9kdWN0cyUyMHNoZWxmJTIwZGlzcGxheSUyMG1pbmltYWx8ZW58MXx8fHwxNzcyMTE4OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgStore =
  "https://images.unsplash.com/photo-1767715380018-c2287192f6ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXRhaWwlMjBzdG9yZSUyMGludGVyaW9yJTIwd2hpdGU8ZW58MXx8fHwxNzcyMTE4OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgManicure =
  "https://images.unsplash.com/photo-1762121903467-8cf5cc423ba5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGhhbmRzJTIwbWFuaWN1cmUlMjBlbGVnYW50JTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NzIxMTk2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

/* ─── Data ─── */
const timeline = [
  { year: "2014", title: "Founded in Tallinn", text: "A single shop, a bold idea — make pro-grade nail products accessible across Europe." },
  { year: "2017", title: "Baltic expansion", text: "Latvia, Lithuania, Finland. Cross-border shipping and salon partnerships." },
  { year: "2021", title: "Complete rebrand", text: "New identity, refreshed platform, curated TPO-free product lines." },
  { year: "2024", title: "25+ countries", text: "Same-week delivery, wholesale program, lash & skincare lines added." },
  { year: "2026", title: "Today", text: "3 000+ SKUs. 15 000+ professionals. Wolt express in Tallinn. Still growing." },
];

/* ─── Animated section wrapper ─── */
function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF9]">

      {/* ═══════════════════════════════════════════════
          HERO — full-bleed split: text left, image right
          ═══════════════════════════════════════════════ */}
      <section className="bg-[#1A1A1A] overflow-hidden">
        <div className="max-w-[1415px] mx-auto px-6 pt-8">
          {/* breadcrumb */}
          <div className="flex items-center gap-2 text-[12px] text-white/35 mb-10">
            <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white/60" style={{ fontWeight: 500 }}>About</span>
          </div>
        </div>

        <div className="max-w-[1415px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-0 items-end min-h-[360px] sm:min-h-[420px] lg:min-h-[520px]">
          {/* Left — text */}
          <div className="pb-10 lg:pb-16 pr-0 lg:pr-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-[1px] bg-[#C8A08C]" />
                <span className="text-[12px] uppercase tracking-[0.2em] text-[#C8A08C]" style={{ fontWeight: 600 }}>
                  Est. 2014 · Tallinn
                </span>
              </div>

              <h1
                className="text-[32px] sm:text-[42px] lg:text-[56px] text-white tracking-[-0.04em] leading-[1.05] mb-5 sm:mb-7"
                style={{ fontWeight: 700 }}
              >
                We don't just sell
                <br />
                products.
                <br />
                <span className="text-[#C8A08C]">We equip</span> pros.
              </h1>

              <p className="text-[17px] text-white/50 leading-[1.75] max-w-[440px] mb-10">
                From a small Tallinn shop to 25+ European countries — Nanails is the supplier nail professionals trust with their craft.
              </p>

              {/* stat chips */}
              <div className="flex items-center gap-3 flex-wrap">
                {[
                  { val: "12+", label: "years" },
                  { val: "3k+", label: "products" },
                  { val: "25+", label: "countries" },
                  { val: "15k+", label: "pros" },
                ].map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.07] border border-white/[0.08]"
                  >
                    <span className="text-[18px] text-white tracking-[-0.02em]" style={{ fontWeight: 700 }}>
                      {s.val}
                    </span>
                    <span className="text-[12px] text-white/40 uppercase tracking-[0.05em]" style={{ fontWeight: 500 }}>
                      {s.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — hero image, bleeds to bottom */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative h-full min-h-[280px] sm:min-h-[360px] lg:min-h-[520px] hidden md:block"
          >
            <div className="absolute inset-0 rounded-tl-[32px] overflow-hidden">
              <ImageWithFallback
                src={imgHero}
                alt="Nanails team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/40 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          MARQUEE — scrolling keywords strip
          ═══════════════════════════════════════════════ */}
      <div className="bg-[#1A1A1A] border-t border-white/[0.06] overflow-hidden py-4">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          className="flex items-center gap-8 whitespace-nowrap"
        >
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex items-center gap-8">
              {[
                "EU-Certified",
                "TPO-Free Formulations",
                "Same-Day Dispatch",
                "Wolt Express Tallinn",
                "15 000+ Professionals",
                "Wholesale Available",
                "3 000+ Products",
                "Free EU Shipping",
                "25+ Countries",
                "Since 2014",
              ].map((t) => (
                <span key={`${setIdx}-${t}`} className="flex items-center gap-3 text-[13px] text-white/30 uppercase tracking-[0.1em]" style={{ fontWeight: 500 }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A08C]/60" />
                  {t}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════════
          BENTO GRID — story + images
          ═══════════════════════════════════════════════ */}
      <section className="max-w-[1415px] mx-auto px-4 sm:px-6 py-14 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 lg:auto-rows-[160px]">
          {/* Story text */}
          <FadeIn className="lg:col-span-5 lg:row-span-3 bg-white rounded-3xl border border-[#f0eeec] p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-[2px] bg-[#C8A08C]" />
              <span className="text-[12px] uppercase tracking-[0.15em] text-[#C8A08C]" style={{ fontWeight: 600 }}>
                Our Story
              </span>
            </div>
            <h2
              className="text-[32px] text-[#1A1A1A] tracking-[-0.03em] leading-[1.15] mb-5"
              style={{ fontWeight: 700 }}
            >
              A partner you can
              <br />count on — not just
              <br />another supplier
            </h2>
            <p className="text-[15px] text-[#6B6B6B] leading-[1.8] mb-4">
              Nanails.eu is a professional beauty products company serving manicure masters, salon owners, and beauty pros across Europe. Since 2014, we've curated only the highest quality, EU-certified products — from gel polishes to salon equipment.
            </p>
            <p className="text-[15px] text-[#6B6B6B] leading-[1.8]">
              What started as a single shop in Tallinn has grown into a trusted pan-European brand with over 3 000 products, wholesale services, and a community of 15 000+ loyal professionals.
            </p>
          </FadeIn>

          {/* Image — store */}
          <FadeIn delay={0.1} className="lg:col-span-4 lg:row-span-2 rounded-3xl overflow-hidden relative group min-h-[200px]">
            <ImageWithFallback src={imgStore} alt="Our store" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-5 left-5">
              <p className="text-[13px] text-white/60" style={{ fontWeight: 500 }}>Tallinn flagship</p>
              <p className="text-[18px] text-white tracking-[-0.02em]" style={{ fontWeight: 700 }}>Visit our store</p>
            </div>
          </FadeIn>

          {/* Stat card — dark */}
          <FadeIn delay={0.15} className="lg:col-span-3 lg:row-span-1 bg-[#1A1A1A] rounded-3xl p-6 flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[#C8A08C]/15 flex items-center justify-center shrink-0">
              <Globe size={22} className="text-[#C8A08C]" />
            </div>
            <div>
              <p className="text-[32px] text-white tracking-[-0.03em] leading-none" style={{ fontWeight: 700 }}>25+</p>
              <p className="text-[13px] text-white/40 mt-1" style={{ fontWeight: 500 }}>European countries served</p>
            </div>
          </FadeIn>

          {/* Image — manicure */}
          <FadeIn delay={0.2} className="lg:col-span-3 lg:row-span-2 rounded-3xl overflow-hidden relative group min-h-[200px]">
            <ImageWithFallback src={imgManicure} alt="Manicure" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </FadeIn>

          {/* Quote card */}
          <FadeIn delay={0.15} className="lg:col-span-4 lg:row-span-1 bg-[#2E4A3E] rounded-3xl p-6 flex items-center gap-5 relative overflow-hidden">
            <div className="absolute -top-4 -left-2 opacity-10">
              <Quote size={80} className="text-white" />
            </div>
            <div className="relative">
              <p className="text-[15px] text-white/80 leading-[1.6] italic">
                "We only stock what we'd use ourselves — no exceptions."
              </p>
              <p className="text-[12px] text-white/40 mt-2" style={{ fontWeight: 600 }}>— Nanails founding principle</p>
            </div>
          </FadeIn>

          {/* Image — products */}
          <FadeIn delay={0.2} className="lg:col-span-5 lg:row-span-2 rounded-3xl overflow-hidden relative group min-h-[200px]">
            <ImageWithFallback src={imgProducts} alt="Products" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <p className="text-[13px] text-white/60" style={{ fontWeight: 500 }}>Curated selection</p>
                <p className="text-[18px] text-white tracking-[-0.02em]" style={{ fontWeight: 700 }}>3 000+ products</p>
              </div>
              <Link
                to="/catalog"
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <ArrowUpRight size={16} className="text-white" />
              </Link>
            </div>
          </FadeIn>

          {/* Stat cards row */}
          <FadeIn delay={0.25} className="lg:col-span-4 lg:row-span-1 bg-[#F5F3F1] rounded-3xl p-6 flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <Award size={22} className="text-[#C8A08C]" />
            </div>
            <div>
              <p className="text-[32px] text-[#1A1A1A] tracking-[-0.03em] leading-none" style={{ fontWeight: 700 }}>12+</p>
              <p className="text-[13px] text-[#999] mt-1" style={{ fontWeight: 500 }}>Years of experience</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} className="lg:col-span-3 lg:row-span-1 bg-white rounded-3xl border border-[#f0eeec] p-6 flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[#C8A08C]/10 flex items-center justify-center shrink-0">
              <Heart size={22} className="text-[#C8A08C]" />
            </div>
            <div>
              <p className="text-[32px] text-[#1A1A1A] tracking-[-0.03em] leading-none" style={{ fontWeight: 700 }}>15k+</p>
              <p className="text-[13px] text-[#999] mt-1" style={{ fontWeight: 500 }}>Happy professionals</p>
            </div>
          </FadeIn>

          {/* Image — warehouse wide */}
          <FadeIn delay={0.25} className="lg:col-span-5 lg:row-span-1 rounded-3xl overflow-hidden relative group min-h-[160px]">
            <ImageWithFallback src={imgWarehouse} alt="Warehouse" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          VALUES — large editorial cards
          ═══════════════════════════════════════════════ */}
      <section className="bg-white border-y border-[#f0eeec]">
        <div className="max-w-[1415px] mx-auto px-6 py-24">
          <FadeIn>
            <div className="flex items-end justify-between mb-16">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-[2px] bg-[#C8A08C]" />
                  <span className="text-[12px] uppercase tracking-[0.15em] text-[#C8A08C]" style={{ fontWeight: 600 }}>
                    What Drives Us
                  </span>
                </div>
                <h2 className="text-[40px] text-[#1A1A1A] tracking-[-0.03em] leading-[1.1]" style={{ fontWeight: 700 }}>
                  Four pillars of<br />everything we do
                </h2>
              </div>
              <p className="text-[15px] text-[#999] max-w-[360px] text-right leading-relaxed">
                We believe in substance over slogans. These aren't marketing words — they're the decisions we make every day.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {[
              {
                icon: ShieldCheck,
                num: "01",
                title: "Quality without compromise",
                text: "Every product is EU-certified and salon-tested before it reaches our shelves. We personally vet each formulation — if we wouldn't use it on our own clients, we don't stock it.",
                accent: "#2E4A3E",
              },
              {
                icon: Users,
                num: "02",
                title: "Built for working professionals",
                text: "From member pricing (−20%) to bulk wholesale, every feature is designed for the people who do this for a living. Salon owners, nail techs, beauty educators — you're our people.",
                accent: "#C8A08C",
              },
              {
                icon: Zap,
                num: "03",
                title: "Speed you can rely on",
                text: "Same-day dispatch Mon–Fri, SmartPosti delivery across Baltics & Finland, free shipping from €50 in Estonia, and a no-hassle 30-day return policy. Your time matters.",
                accent: "#009DE0",
              },
              {
                icon: Sparkles,
                num: "04",
                title: "Always one step ahead",
                text: "We continuously expand our range, adopt TPO-free formulations early, and listen to our community of 15 000+ pros to stay ahead of trends and regulations.",
                accent: "#8B6F5C",
              },
            ].map((v, i) => (
              <FadeIn key={v.num} delay={i * 0.1}>
                <div className="group bg-[#FAFAF9] rounded-3xl p-9 border border-[#f0eeec] hover:border-[#e0ddd9] hover:shadow-[0_8px_40px_rgba(0,0,0,0.04)] transition-all h-full">
                  <div className="flex items-start justify-between mb-8">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${v.accent}10` }}
                    >
                      <v.icon size={22} style={{ color: v.accent }} />
                    </div>
                    <span className="text-[48px] text-[#f0eeec] leading-none tracking-[-0.05em]" style={{ fontWeight: 800 }}>
                      {v.num}
                    </span>
                  </div>
                  <h3 className="text-[22px] text-[#1A1A1A] tracking-[-0.02em] mb-3" style={{ fontWeight: 700 }}>
                    {v.title}
                  </h3>
                  <p className="text-[14px] text-[#6B6B6B] leading-[1.75]">{v.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          TIMELINE — horizontal with snap scroll
          ═══════════════════════════════════════════════ */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-[1415px] mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-[#C8A08C]" />
              <span className="text-[12px] uppercase tracking-[0.15em] text-[#C8A08C]" style={{ fontWeight: 600 }}>
                Our Journey
              </span>
            </div>
            <h2 className="text-[40px] text-[#1A1A1A] tracking-[-0.03em] mb-14" style={{ fontWeight: 700 }}>
              From Tallinn to all of Europe
            </h2>
          </FadeIn>

          {/* horizontal timeline */}
          <FadeIn>
            <div className="relative">
              {/* line */}
              <div className="absolute top-[30px] left-0 right-0 h-px bg-[#e5e5e5] hidden sm:block" />

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {timeline.map((item, idx) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.12 }}
                    className="relative pt-[52px]"
                  >
                    {/* dot */}
                    <div className="absolute top-[22px] left-0">
                      <div
                        className={`w-[18px] h-[18px] rounded-full border-[3px] ${
                          idx === timeline.length - 1
                            ? "bg-[#C8A08C] border-[#C8A08C]/30 shadow-[0_0_0_4px_rgba(200,160,140,0.15)]"
                            : "bg-white border-[#C8A08C]"
                        }`}
                      />
                    </div>

                    <span className="text-[28px] text-[#1A1A1A] tracking-[-0.03em] block mb-2" style={{ fontWeight: 800 }}>
                      {item.year}
                    </span>
                    <h3 className="text-[15px] text-[#1A1A1A] mb-2" style={{ fontWeight: 700 }}>
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-[#999] leading-[1.7]">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          WHOLESALE CTA — bold dark green
          ═══════════════════════════════════════════════ */}
      <section className="px-6 pb-8">
        <div className="max-w-[1415px] mx-auto">
          <FadeIn>
            <div className="bg-[#2E4A3E] rounded-3xl overflow-hidden relative">
              {/* deco circles */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white/[0.03] -translate-y-1/2 translate-x-1/4" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-white/[0.03] translate-y-1/2 -translate-x-1/4" />

              <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] items-center">
                <div className="p-6 sm:p-10 lg:p-14">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-[2px] bg-white/30" />
                    <span className="text-[12px] uppercase tracking-[0.15em] text-white/40" style={{ fontWeight: 600 }}>
                      For Businesses
                    </span>
                  </div>
                  <h2 className="text-[36px] text-white tracking-[-0.03em] leading-[1.15] mb-5" style={{ fontWeight: 700 }}>
                    Wholesale & B2B
                    <br />partnerships
                  </h2>
                  <p className="text-[15px] text-white/50 leading-relaxed mb-9 max-w-[400px]">
                    Competitive bulk pricing, dedicated account manager, priority shipping, and volume discounts for salons, distributors, and beauty schools.
                  </p>
                  <div className="flex items-center gap-3">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 h-[48px] px-8 bg-white text-[#2E4A3E] text-[14px] rounded-full hover:bg-white/90 transition-colors"
                      style={{ fontWeight: 600 }}
                    >
                      Get in touch
                      <ArrowRight size={14} />
                    </Link>
                    <a
                      href="tel:+37256968888"
                      className="inline-flex items-center gap-2 h-[48px] px-6 border border-white/15 text-white/70 text-[14px] rounded-full hover:border-white/30 hover:text-white transition-colors"
                      style={{ fontWeight: 500 }}
                    >
                      <Phone size={14} />
                      +372 5696 8888
                    </a>
                  </div>
                </div>

                <div className="p-6 sm:p-10 lg:p-14 lg:pl-4">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: Package, label: "Volume discounts", sub: "Starting from 10 units" },
                      { icon: Truck, label: "Priority shipping", sub: "Across all EU countries" },
                      { icon: Users, label: "Account manager", sub: "Dedicated personal support" },
                      { icon: ShieldCheck, label: "EU-certified", sub: "100% compliant products" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="bg-white/[0.06] backdrop-blur-sm rounded-2xl p-5 border border-white/[0.05] hover:bg-white/[0.1] transition-colors"
                      >
                        <item.icon size={18} className="text-white/40 mb-3" />
                        <p className="text-[14px] text-white mb-0.5" style={{ fontWeight: 600 }}>
                          {item.label}
                        </p>
                        <p className="text-[12px] text-white/35">{item.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          VISIT US — map + contact
          ═══════════════════════════════════════════════ */}
      <section className="max-w-[1415px] mx-auto px-6 py-20">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-10 items-center">
            {/* map */}
            <div className="rounded-3xl overflow-hidden h-[280px] sm:h-[380px] border border-[#f0eeec] relative group">
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
              <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3.5 shadow-[0_4px_24px_rgba(0,0,0,0.08)] flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#2E4A3E] flex items-center justify-center">
                  <MapPin size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-[14px] text-[#1A1A1A]" style={{ fontWeight: 600 }}>Pärnu mnt 23</p>
                  <p className="text-[12px] text-[#999]">Tallinn, Estonia 10141</p>
                </div>
                <a
                  href="https://maps.google.com/?q=Pärnu+mnt+23,+Tallinn,+Estonia,+10141"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 w-9 h-9 rounded-xl bg-[#F5F3F1] flex items-center justify-center hover:bg-[#ebe8e5] transition-colors"
                >
                  <ArrowUpRight size={14} className="text-[#1A1A1A]" />
                </a>
              </div>
            </div>

            {/* contact info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-[2px] bg-[#C8A08C]" />
                <span className="text-[12px] uppercase tracking-[0.15em] text-[#C8A08C]" style={{ fontWeight: 600 }}>
                  Visit Our Store
                </span>
              </div>
              <h2 className="text-[34px] text-[#1A1A1A] tracking-[-0.03em] mb-10" style={{ fontWeight: 700 }}>
                Come say hello
              </h2>

              <div className="flex flex-col gap-0">
                {[
                  { icon: MapPin, label: "Address", value: "Pärnu mnt 23, Tallinn, Estonia, 10141", href: null },
                  { icon: Phone, label: "Phone", value: "+372 5696 8888", href: "tel:+37256968888" },
                  { icon: Mail, label: "Email", value: "info@nanails.eu", href: "mailto:info@nanails.eu" },
                  { icon: Clock, label: "Dispatch", value: "Mon–Fri, 09:00–17:00 EET", href: null },
                ].map((c, i) => (
                  <div key={c.label} className={`flex items-center gap-4 py-4 ${i > 0 ? "border-t border-[#f0eeec]" : ""}`}>
                    <div className="w-11 h-11 rounded-xl bg-[#F5F3F1] flex items-center justify-center shrink-0">
                      <c.icon size={16} className="text-[#C8A08C]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[12px] text-[#999] mb-0.5" style={{ fontWeight: 500 }}>{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="text-[15px] text-[#1A1A1A] hover:text-[#C8A08C] transition-colors" style={{ fontWeight: 600 }}>
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-[15px] text-[#1A1A1A]" style={{ fontWeight: 600 }}>{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 h-[46px] px-7 bg-[#1A1A1A] text-white text-[14px] rounded-full hover:bg-[#3a3a3a] transition-colors mt-8"
                style={{ fontWeight: 600 }}
              >
                Send us a message
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}