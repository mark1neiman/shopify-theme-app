import { useState, useRef } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  Search,
  TrendingUp,
  Bookmark,
  ChevronRight,
  X,
  Sparkles,
} from "lucide-react";
import { blogPosts, categories } from "../data/blogData";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

/* ─── helpers ─── */
const categoryColors: Record<string, { bg: string; text: string; accent: string }> = {
  Education: { bg: "bg-[#C8A08C]/12", text: "text-[#8B6F5C]", accent: "#C8A08C" },
  Trends: { bg: "bg-[#8B5CF6]/10", text: "text-[#7C3AED]", accent: "#8B5CF6" },
  Business: { bg: "bg-[#2E4A3E]/10", text: "text-[#2E4A3E]", accent: "#2E4A3E" },
  Techniques: { bg: "bg-[#1A1A1A]/8", text: "text-[#3a3a3a]", accent: "#3a3a3a" },
};

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const filtered = blogPosts.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      !searchQuery ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = filtered.find((p) => p.featured) || filtered[0];
  const trending = filtered.filter((p) => p.trending && p !== featured);
  const rest = filtered.filter((p) => p !== featured && !trending.includes(p));

  /* split rest into "editor picks" (first 2) + remaining grid */
  const editorPicks = rest.slice(0, 2);
  const gridPosts = rest.slice(2);

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* ═══════════════════════════════════════════════
          HERO — full-bleed featured article
          ═══════════════════════════════════════════════ */}
      {featured && !searchQuery && activeCategory === "All" && (
        <section className="relative bg-[#1A1A1A] overflow-hidden">
          <div className="absolute inset-0">
            <ImageWithFallback
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-[#1A1A1A]/30" />
          </div>

          <div className="relative max-w-[1415px] mx-auto px-6 pt-8 pb-20">
            {/* breadcrumb + search row */}
            <div className="flex items-center justify-between mb-20">
              <div className="flex items-center gap-2 text-[12px] text-white/35">
                <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
                <ChevronRight size={12} />
                <span className="text-white/60" style={{ fontWeight: 500 }}>Blog</span>
              </div>

              <button
                onClick={() => setSearchOpen(true)}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/15 transition-colors"
              >
                <Search size={16} className="text-white/60" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 lg:gap-16 items-end">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className={`px-3 py-1 rounded-full text-[11px] ${categoryColors[featured.category]?.bg ?? "bg-white/10"} ${categoryColors[featured.category]?.text ?? "text-white/60"}`}
                    style={{ fontWeight: 600 }}
                  >
                    {featured.category}
                  </span>
                  {featured.featured && (
                    <span className="flex items-center gap-1.5 text-[11px] text-[#C8A08C]" style={{ fontWeight: 600 }}>
                      <Sparkles size={12} />
                      Featured
                    </span>
                  )}
                </div>

                <Link to={`/blog/${featured.slug}`} className="group">
                  <h1
                    className="text-[28px] sm:text-[36px] lg:text-[48px] text-white tracking-[-0.04em] leading-[1.08] mb-5 group-hover:text-[#C8A08C] transition-colors"
                    style={{ fontWeight: 700 }}
                  >
                    {featured.title}
                  </h1>
                </Link>

                <p className="text-[17px] text-white/45 leading-[1.7] max-w-[540px] mb-8">
                  {featured.excerpt}
                </p>

                <div className="flex items-center gap-6">
                  <Link
                    to={`/blog/${featured.slug}`}
                    className="inline-flex items-center gap-2 h-[46px] px-7 bg-white text-[#1A1A1A] text-[14px] rounded-full hover:bg-white/90 transition-colors"
                    style={{ fontWeight: 600 }}
                  >
                    Read article
                    <ArrowRight size={14} />
                  </Link>
                  <div className="flex items-center gap-3 text-[13px] text-white/30">
                    <span>{featured.date}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {featured.readTime}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Right — author card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/[0.07] backdrop-blur-xl rounded-2xl border border-white/[0.08] p-6 hidden lg:block"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-[#C8A08C]/20 flex items-center justify-center text-[14px] text-[#C8A08C]" style={{ fontWeight: 700 }}>
                    {featured.author.name.split(" ").map(w => w[0]).join("")}
                  </div>
                  <div>
                    <p className="text-[14px] text-white" style={{ fontWeight: 600 }}>{featured.author.name}</p>
                    <p className="text-[12px] text-white/40">{featured.author.role}</p>
                  </div>
                </div>
                <p className="text-[13px] text-white/35 leading-relaxed mb-5">
                  {featured.excerpt.slice(0, 120)}…
                </p>
                <div className="flex flex-wrap gap-2">
                  {featured.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[11px] text-white/30 px-2.5 py-1 rounded-full border border-white/10" style={{ fontWeight: 500 }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════
          SEARCH OVERLAY
          ═══════════════════════════════════════════════ */}
      {searchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-[#1A1A1A]/80 backdrop-blur-sm flex items-start justify-center pt-[20vh]"
          onClick={() => setSearchOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="w-[calc(100%-32px)] sm:w-[580px] bg-white rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.3)] overflow-hidden mx-4 sm:mx-0"
          >
            <div className="flex items-center gap-3 px-6 h-[60px] border-b border-[#f0eeec]">
              <Search size={18} className="text-[#999] shrink-0" />
              <input
                autoFocus
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, topics, techniques…"
                className="flex-1 text-[16px] text-[#1A1A1A] placeholder:text-[#ccc] outline-none bg-transparent"
              />
              <button
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery("");
                }}
                className="w-8 h-8 rounded-lg bg-[#F5F3F1] flex items-center justify-center hover:bg-[#ebe8e5] transition-colors"
              >
                <X size={14} className="text-[#999]" />
              </button>
            </div>
            {searchQuery && (
              <div className="max-h-[340px] overflow-y-auto">
                {filtered.length > 0 ? (
                  filtered.slice(0, 5).map((p) => (
                    <Link
                      key={p.id}
                      to={`/blog/${p.slug}`}
                      onClick={() => setSearchOpen(false)}
                      className="flex items-center gap-4 px-6 py-3.5 hover:bg-[#FAFAF9] transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0">
                        <ImageWithFallback src={p.image} alt={p.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[14px] text-[#1A1A1A] truncate" style={{ fontWeight: 600 }}>{p.title}</p>
                        <p className="text-[12px] text-[#999]">{p.category} · {p.readTime}</p>
                      </div>
                      <ArrowUpRight size={14} className="text-[#ccc] shrink-0" />
                    </Link>
                  ))
                ) : (
                  <div className="px-6 py-8 text-center text-[14px] text-[#999]">No results found</div>
                )}
              </div>
            )}
            {!searchQuery && (
              <div className="px-6 py-5">
                <p className="text-[12px] text-[#999] mb-3" style={{ fontWeight: 500 }}>Popular topics</p>
                <div className="flex flex-wrap gap-2">
                  {["TPO-Free", "Builder Gel", "Chrome Nails", "Salon Business", "EU Regulations", "Spring Trends"].map((t) => (
                    <button
                      key={t}
                      onClick={() => setSearchQuery(t)}
                      className="text-[12px] text-[#6B6B6B] px-3 py-1.5 rounded-full bg-[#F5F3F1] hover:bg-[#ebe8e5] transition-colors"
                      style={{ fontWeight: 500 }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}

      {/* ═══════════════════════════════════════════════
          FILTER BAR — sticky
          ═══════════════════════════════════════════════ */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-[#f0eeec]">
        <div className="max-w-[1415px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-[56px]">
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`h-[32px] px-4 rounded-full text-[13px] transition-all cursor-pointer ${
                    activeCategory === cat
                      ? "bg-[#1A1A1A] text-white"
                      : "text-[#6B6B6B] hover:bg-[#F5F3F1] hover:text-[#1A1A1A]"
                  }`}
                  style={{ fontWeight: 500 }}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {searchQuery && (
                <div className="flex items-center gap-2 text-[13px] text-[#999]">
                  <span>"{searchQuery}"</span>
                  <button
                    onClick={() => setSearchQuery("")}
                    className="w-5 h-5 rounded-full bg-[#F5F3F1] flex items-center justify-center hover:bg-[#ebe8e5] transition-colors"
                  >
                    <X size={10} className="text-[#999]" />
                  </button>
                </div>
              )}
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 h-[32px] px-4 rounded-full text-[13px] text-[#999] hover:bg-[#F5F3F1] transition-colors"
                style={{ fontWeight: 500 }}
              >
                <Search size={14} />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          CONTENT AREA
          ═══════════════════════════════════════════════ */}
      <div className="max-w-[1415px] mx-auto px-6 py-14">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <div className="w-16 h-16 rounded-2xl bg-[#F5F3F1] flex items-center justify-center mx-auto mb-6">
              <Search size={24} className="text-[#ccc]" />
            </div>
            <p className="text-[20px] text-[#1A1A1A] mb-2" style={{ fontWeight: 700 }}>No articles found</p>
            <p className="text-[14px] text-[#999] mb-6">Try a different search term or category</p>
            <button
              onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
              className="h-[40px] px-6 rounded-full bg-[#1A1A1A] text-white text-[13px] hover:bg-[#3a3a3a] transition-colors"
              style={{ fontWeight: 600 }}
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <>
            {/* ── Trending strip ── */}
            {trending.length > 0 && !searchQuery && activeCategory === "All" && (
              <FadeIn className="mb-14">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C8A08C]/10">
                    <TrendingUp size={13} className="text-[#C8A08C]" />
                    <span className="text-[12px] text-[#8B6F5C]" style={{ fontWeight: 700 }}>Trending Now</span>
                  </div>
                  <div className="flex-1 h-px bg-[#f0eeec]" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                  {[...trending, ...rest.slice(0, 3 - trending.length)].slice(0, 3).map((post, i) => (
                    <Link
                      key={post.id}
                      to={`/blog/${post.slug}`}
                      className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white border border-transparent hover:border-[#f0eeec] transition-all"
                    >
                      <span className="text-[36px] text-[#f0eeec] leading-none shrink-0 mt-1" style={{ fontWeight: 800 }}>
                        0{i + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <span className={`text-[11px] ${categoryColors[post.category]?.text ?? "text-[#999]"}`} style={{ fontWeight: 600 }}>
                          {post.category}
                        </span>
                        <h3 className="text-[15px] text-[#1A1A1A] leading-snug mt-1 group-hover:text-[#C8A08C] transition-colors line-clamp-2" style={{ fontWeight: 700 }}>
                          {post.title}
                        </h3>
                        <p className="text-[12px] text-[#999] mt-2">{post.date} · {post.readTime}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </FadeIn>
            )}

            {/* ── Editor's picks — 2 large cards ── */}
            {editorPicks.length > 0 && (
              <FadeIn className="mb-10">
                {!searchQuery && activeCategory === "All" && (
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[13px] text-[#1A1A1A]" style={{ fontWeight: 700 }}>Latest Articles</span>
                    <div className="flex-1 h-px bg-[#f0eeec]" />
                    <span className="text-[12px] text-[#999]">{filtered.length} article{filtered.length !== 1 ? "s" : ""}</span>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-6">
                  {editorPicks.map((post, idx) => (
                    <FadeIn key={post.id} delay={idx * 0.1}>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="group bg-white rounded-3xl overflow-hidden border border-[#f0eeec] hover:border-[#e0ddd9] hover:shadow-[0_8px_40px_rgba(0,0,0,0.05)] transition-all flex flex-col"
                      >
                        <div className="relative overflow-hidden h-[200px] sm:h-[280px]">
                          <ImageWithFallback
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                          {/* category + trending badge */}
                          <div className="absolute top-5 left-5 flex items-center gap-2">
                            <span
                              className="px-3 py-1.5 rounded-full text-[11px] bg-white/90 backdrop-blur-sm"
                              style={{ fontWeight: 600, color: categoryColors[post.category]?.accent ?? "#6B6B6B" }}
                            >
                              {post.category}
                            </span>
                            {post.trending && (
                              <span className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[11px] bg-white/90 backdrop-blur-sm text-[#C8A08C]" style={{ fontWeight: 600 }}>
                                <TrendingUp size={11} />
                                Trending
                              </span>
                            )}
                          </div>

                          {/* read time bottom-right */}
                          <div className="absolute bottom-4 right-4">
                            <span className="flex items-center gap-1 text-[11px] text-white/80 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full" style={{ fontWeight: 500 }}>
                              <Clock size={10} />
                              {post.readTime}
                            </span>
                          </div>
                        </div>

                        <div className="p-7 flex-1 flex flex-col">
                          <p className="text-[12px] text-[#999] mb-3">{post.date}</p>
                          <h3
                            className="text-[22px] text-[#1A1A1A] tracking-[-0.02em] leading-[1.25] mb-3 group-hover:text-[#C8A08C] transition-colors"
                            style={{ fontWeight: 700 }}
                          >
                            {post.title}
                          </h3>
                          <p className="text-[14px] text-[#6B6B6B] leading-relaxed flex-1 line-clamp-2 mb-6">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center justify-between pt-5 border-t border-[#f0eeec]">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-[#F5F3F1] flex items-center justify-center text-[11px] text-[#1A1A1A]" style={{ fontWeight: 700 }}>
                                {post.author.name.split(" ").map(w => w[0]).join("")}
                              </div>
                              <div>
                                <p className="text-[13px] text-[#1A1A1A]" style={{ fontWeight: 600 }}>{post.author.name}</p>
                                <p className="text-[11px] text-[#999]">{post.author.role}</p>
                              </div>
                            </div>
                            <div className="w-9 h-9 rounded-full bg-[#F5F3F1] flex items-center justify-center group-hover:bg-[#1A1A1A] transition-colors">
                              <ArrowUpRight size={14} className="text-[#999] group-hover:text-white transition-colors" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </FadeIn>
                  ))}
                </div>
              </FadeIn>
            )}

            {/* ── Remaining articles — 3-column compact cards ── */}
            {gridPosts.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {gridPosts.map((post, idx) => (
                  <FadeIn key={post.id} delay={(idx % 3) * 0.08}>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="group bg-white rounded-2xl overflow-hidden border border-[#f0eeec] hover:border-[#e0ddd9] hover:shadow-[0_6px_30px_rgba(0,0,0,0.04)] transition-all flex flex-col h-full"
                    >
                      <div className="relative overflow-hidden h-[200px]">
                        <ImageWithFallback
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4">
                          <span
                            className="px-2.5 py-1 rounded-full text-[10px] bg-white/90 backdrop-blur-sm"
                            style={{ fontWeight: 600, color: categoryColors[post.category]?.accent ?? "#6B6B6B" }}
                          >
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-3 text-[12px] text-[#999]">
                          <span>{post.date}</span>
                          <span className="w-1 h-1 rounded-full bg-[#ddd]" />
                          <span className="flex items-center gap-1">
                            <Clock size={11} />
                            {post.readTime}
                          </span>
                        </div>

                        <h3
                          className="text-[17px] text-[#1A1A1A] leading-snug tracking-[-0.01em] mb-2.5 group-hover:text-[#C8A08C] transition-colors"
                          style={{ fontWeight: 700 }}
                        >
                          {post.title}
                        </h3>

                        <p className="text-[13px] text-[#6B6B6B] leading-relaxed flex-1 line-clamp-2">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between mt-5 pt-4 border-t border-[#f0eeec]">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-[#F5F3F1] flex items-center justify-center text-[10px] text-[#1A1A1A]" style={{ fontWeight: 700 }}>
                              {post.author.name.split(" ").map(w => w[0]).join("")}
                            </div>
                            <span className="text-[12px] text-[#999]" style={{ fontWeight: 500 }}>
                              {post.author.name}
                            </span>
                          </div>
                          <div className="w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowUpRight size={13} className="text-[#C8A08C]" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </FadeIn>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}