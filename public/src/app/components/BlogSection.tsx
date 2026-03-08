import { ArrowRight, Clock, Bookmark, TrendingUp } from "lucide-react";
import { Link } from "react-router";

const blogPosts = [
  {
    id: 1,
    bg: "bg-gradient-to-br from-[#C8A08C] to-[#A67B68]",
    category: "Education",
    date: "Feb 20, 2026",
    readTime: "5 min",
    title: "TPO-Free Gels: Why European Salons Are Making the Switch",
    excerpt:
      "Understanding the science behind TPO-free formulas and why they're becoming the new industry standard for professional nail technicians.",
    featured: true,
  },
  {
    id: 2,
    bg: "bg-gradient-to-br from-[#E8DDD5] to-[#D4C4B8]",
    category: "Trends",
    date: "Feb 14, 2026",
    readTime: "4 min",
    title: "Spring 2026 Colour Forecast: Shades Every Nail Pro Should Stock",
    excerpt:
      "From soft lavenders to warm terracotta — the trending palettes that clients will be requesting this season.",
  },
  {
    id: 3,
    bg: "bg-gradient-to-br from-[#2E4A3E] to-[#1E3A2E]",
    category: "Business",
    date: "Feb 8, 2026",
    readTime: "6 min",
    title: "How to Set Up a Profitable Nail Station: Equipment Checklist",
    excerpt:
      "Essential salon equipment guide — from LED lamps to dust collectors — curated for professionals starting out.",
  },
  {
    id: 4,
    bg: "bg-gradient-to-br from-[#3a3a3a] to-[#1A1A1A]",
    category: "Techniques",
    date: "Jan 30, 2026",
    readTime: "7 min",
    title: "Builder Gel Application: Common Mistakes and How to Fix Them",
    excerpt:
      "Master the apex, avoid lifting, and achieve flawless structure — pro tips from certified educators.",
  },
];

const categoryStyles: Record<string, { badge: string; accent: string }> = {
  Education: {
    badge: "bg-white/20 text-white",
    accent: "#C8A08C",
  },
  Trends: {
    badge: "bg-[#C8A08C]/15 text-[#8B6F5C]",
    accent: "#C8A08C",
  },
  Business: {
    badge: "bg-white/15 text-white/90",
    accent: "#6BAF8D",
  },
  Techniques: {
    badge: "bg-white/15 text-white/90",
    accent: "#999",
  },
};

export function BlogSection() {
  const featured = blogPosts[0];
  const secondary = blogPosts[1];
  const rest = blogPosts.slice(2);

  return (
    <section className="px-4 sm:px-6 py-10 sm:py-14">
      <div className="max-w-[1415px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-10 gap-3">
          <div>
            <span
              className="text-[11px] sm:text-[12px] uppercase tracking-[0.15em] text-[#C8A08C] mb-2 block"
              style={{ fontWeight: 600 }}
            >
              From the Blog
            </span>
            <h2
              className="text-[24px] sm:text-[32px] text-[#1A1A1A] tracking-[-0.02em]"
              style={{ fontWeight: 700 }}
            >
              News & Pro Tips
            </h2>
          </div>
          <Link
            to="/blog"
            className="flex items-center gap-2 text-[12px] sm:text-[13px] text-[#1A1A1A] hover:text-[#C8A08C] transition-colors uppercase tracking-[0.1em] group"
            style={{ fontWeight: 600 }}
          >
            View All Articles
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Row 1: Featured hero card + vertical secondary */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-4 sm:gap-5 mb-4 sm:mb-5">
          {/* Featured — large card with text overlay */}
          <Link
            to="/blog/tpo-free-gels-european-salons"
            className={`group relative rounded-2xl overflow-hidden ${featured.bg} p-6 sm:p-8 lg:p-10 flex flex-col justify-end min-h-[280px] sm:min-h-[340px] lg:min-h-[380px]`}
          >
            {/* Decorative pattern */}
            <div className="absolute top-0 right-0 w-[260px] h-[260px] rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3" />
            <div className="absolute bottom-0 left-1/2 w-[180px] h-[180px] rounded-full bg-white/5 translate-y-1/2" />

            {/* Top row */}
            <div className="absolute top-6 left-8 right-8 flex items-center justify-between">
              <span
                className={`px-3.5 py-1.5 rounded-full text-[11px] ${categoryStyles[featured.category].badge}`}
                style={{ fontWeight: 600 }}
              >
                {featured.category}
              </span>
              <span className="flex items-center gap-1.5 text-white/50 text-[12px]">
                <Clock size={12} />
                {featured.readTime}
              </span>
            </div>

            {/* Bottom content */}
            <div className="relative z-10">
              <span className="text-white/50 text-[12px] mb-3 block">
                {featured.date}
              </span>
              <h3
                className="text-white text-[28px] leading-tight tracking-[-0.02em] mb-3 max-w-[440px]"
                style={{ fontWeight: 700 }}
              >
                {featured.title}
              </h3>
              <p className="text-white/70 text-[14px] leading-relaxed max-w-[400px] mb-5">
                {featured.excerpt}
              </p>
              <span
                className="inline-flex items-center gap-2 text-white text-[13px] group-hover:gap-3 transition-all"
                style={{ fontWeight: 600 }}
              >
                Read Article
                <ArrowRight size={14} />
              </span>
            </div>
          </Link>

          {/* Secondary — tall vertical card */}
          <Link
            to="/blog/spring-2026-colour-forecast"
            className="group relative rounded-2xl overflow-hidden bg-[#FAFAF9] border border-[#e5e5e5] flex flex-col"
          >
            {/* Color block top */}
            <div
              className={`${secondary.bg} h-[160px] relative overflow-hidden`}
            >
              <div className="absolute bottom-4 right-4 w-[80px] h-[80px] rounded-full bg-white/10" />
              <div className="absolute top-3 left-4">
                <span
                  className={`px-3 py-1 rounded-full text-[11px] ${categoryStyles[secondary.category].badge}`}
                  style={{ fontWeight: 600 }}
                >
                  {secondary.category}
                </span>
              </div>
              {/* Trending indicator */}
              <div className="absolute top-3 right-4 flex items-center gap-1 bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-full">
                <TrendingUp size={11} className="text-[#8B6F5C]" />
                <span
                  className="text-[10px] text-[#8B6F5C]"
                  style={{ fontWeight: 600 }}
                >
                  Trending
                </span>
              </div>
            </div>

            {/* Text content */}
            <div className="flex-1 p-6 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[12px] text-[#999]">
                  {secondary.date}
                </span>
                <span className="w-1 h-1 rounded-full bg-[#ddd]" />
                <span className="flex items-center gap-1 text-[12px] text-[#999]">
                  <Clock size={11} />
                  {secondary.readTime}
                </span>
              </div>
              <h4
                className="text-[18px] text-[#1A1A1A] leading-snug tracking-[-0.01em] mb-3 group-hover:text-[#C8A08C] transition-colors"
                style={{ fontWeight: 700 }}
              >
                {secondary.title}
              </h4>
              <p className="text-[13px] text-[#6B6B6B] leading-relaxed flex-1">
                {secondary.excerpt}
              </p>
              <div className="flex items-center justify-between mt-5 pt-4 border-t border-[#e5e5e5]">
                <span
                  className="text-[13px] text-[#C8A08C] group-hover:underline"
                  style={{ fontWeight: 600 }}
                >
                  Read more
                </span>
                <Bookmark
                  size={16}
                  className="text-[#ccc] hover:text-[#C8A08C] transition-colors"
                />
              </div>
            </div>
          </Link>
        </div>

        {/* Row 2: Two equal cards — different styles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {rest.map((post, i) => (
            <Link
              key={post.id}
              to={`/blog/${post.id === 3 ? "profitable-nail-station-equipment" : "builder-gel-application-mistakes"}`}
              className="group relative rounded-2xl overflow-hidden bg-white border border-[#e5e5e5] flex flex-col sm:flex-row h-auto sm:h-[200px] hover:border-[#C8A08C]/40 transition-colors"
            >
              {/* Left color block */}
              <div
                className={`${post.bg} w-full h-[140px] sm:w-[180px] lg:w-[200px] sm:h-full shrink-0 relative overflow-hidden`}
              >
                {/* Decorative shapes */}
                {i === 0 ? (
                  <>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] rounded-full border-2 border-white/15" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full border border-white/8" />
                  </>
                ) : (
                  <>
                    <div className="absolute -bottom-4 -right-4 w-[100px] h-[100px] rounded-2xl bg-white/8 rotate-12" />
                    <div className="absolute top-4 left-4 w-[40px] h-[40px] rounded-lg bg-white/10" />
                  </>
                )}
                {/* Big number */}
                <span
                  className="absolute bottom-3 left-4 text-white/10 text-[72px] leading-none"
                  style={{ fontWeight: 800 }}
                >
                  0{post.id}
                </span>
              </div>

              {/* Right content */}
              <div className="flex-1 p-4 sm:p-6 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2.5">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] ${
                      post.category === "Business"
                        ? "bg-[#2E4A3E]/10 text-[#2E4A3E]"
                        : "bg-[#1A1A1A]/8 text-[#3a3a3a]"
                    }`}
                    style={{ fontWeight: 600 }}
                  >
                    {post.category}
                  </span>
                  <span className="text-[11px] text-[#999]">{post.date}</span>
                  <span className="flex items-center gap-1 text-[11px] text-[#999]">
                    <Clock size={10} />
                    {post.readTime}
                  </span>
                </div>
                <h4
                  className="text-[16px] text-[#1A1A1A] leading-snug tracking-[-0.01em] mb-2 group-hover:text-[#C8A08C] transition-colors"
                  style={{ fontWeight: 600 }}
                >
                  {post.title}
                </h4>
                <p className="text-[12px] text-[#999] leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <span
                  className="text-[12px] text-[#C8A08C] mt-3 inline-flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ fontWeight: 600 }}
                >
                  Read article
                  <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}