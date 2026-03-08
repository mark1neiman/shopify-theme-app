import { useParams, Link } from "react-router";
import {
  ArrowLeft,
  Clock,
  ChevronRight,
  Bookmark,
  ArrowRight,
  Share2,
} from "lucide-react";
import { getPostBySlug, getRelatedPosts } from "../data/blogData";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const categoryColors: Record<string, { bg: string; text: string }> = {
  Education: { bg: "bg-[#C8A08C]/12", text: "text-[#8B6F5C]" },
  Trends: { bg: "bg-[#C8A08C]/12", text: "text-[#8B6F5C]" },
  Business: { bg: "bg-[#2E4A3E]/10", text: "text-[#2E4A3E]" },
  Techniques: { bg: "bg-[#1A1A1A]/8", text: "text-[#3a3a3a]" },
};

/* ── Social SVG icons ── */
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);
const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const PinterestIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z" />
  </svg>
);

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[24px] text-[#1A1A1A] mb-2" style={{ fontWeight: 600 }}>
            Article not found
          </p>
          <p className="text-[14px] text-[#999] mb-6">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[14px] text-[#C8A08C] hover:underline"
            style={{ fontWeight: 600 }}
          >
            <ArrowLeft size={14} />
            Back to blog
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelatedPosts(post.slug, post.category, 3);
  const catStyle = categoryColors[post.category] ?? {
    bg: "bg-[#f0eeec]",
    text: "text-[#6B6B6B]",
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* ── Hero image ── */}
      <div className="relative w-full h-[420px] overflow-hidden bg-[#1A1A1A]">
        <ImageWithFallback
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-[#1A1A1A]/20 to-transparent" />

        {/* back btn */}
        <div className="absolute top-6 left-6">
          <Link
            to="/blog"
            className="flex items-center gap-2 text-[13px] text-white/80 hover:text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full transition-colors"
            style={{ fontWeight: 500 }}
          >
            <ArrowLeft size={14} />
            All articles
          </Link>
        </div>

        {/* bottom overlay content */}
        <div className="absolute bottom-0 left-0 right-0 px-6">
          <div className="max-w-[820px] mx-auto pb-10">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="px-3.5 py-1 rounded-full text-[11px] bg-white/15 backdrop-blur-sm text-white"
                style={{ fontWeight: 600 }}
              >
                {post.category}
              </span>
              <span className="text-[12px] text-white/60">{post.date}</span>
              <span className="flex items-center gap-1 text-[12px] text-white/60">
                <Clock size={11} />
                {post.readTime} read
              </span>
            </div>
            <h1
              className="text-[40px] text-white tracking-[-0.03em] leading-[1.15]"
              style={{ fontWeight: 700 }}
            >
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* ── Article body ── */}
      <div className="max-w-[820px] mx-auto px-6 -mt-0">
        {/* author + actions bar */}
        <div className="flex items-center justify-between py-6 border-b border-[#f0eeec] mb-10">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full bg-[#F5F3F1] border border-[#e5e5e5] flex items-center justify-center text-[13px] text-[#1A1A1A]"
              style={{ fontWeight: 700 }}
            >
              {post.author.name
                .split(" ")
                .map((w) => w[0])
                .join("")}
            </div>
            <div>
              <p className="text-[14px] text-[#1A1A1A]" style={{ fontWeight: 600 }}>
                {post.author.name}
              </p>
              <p className="text-[12px] text-[#999]">{post.author.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="w-9 h-9 rounded-full border border-[#e5e5e5] flex items-center justify-center text-[#999] hover:text-[#1A1A1A] hover:border-[#ccc] transition-colors">
              <Bookmark size={15} />
            </button>
            <button className="w-9 h-9 rounded-full border border-[#e5e5e5] flex items-center justify-center text-[#999] hover:text-[#1A1A1A] hover:border-[#ccc] transition-colors">
              <Share2 size={15} />
            </button>
          </div>
        </div>

        {/* ── Rendered article content ── */}
        <article className="mb-14">
          {post.content.map((block, idx) => {
            if (block.startsWith("## ")) {
              return (
                <h2
                  key={idx}
                  className="text-[22px] text-[#1A1A1A] tracking-[-0.02em] mt-10 mb-4"
                  style={{ fontWeight: 700 }}
                >
                  {block.replace("## ", "")}
                </h2>
              );
            }
            // Bold paragraphs (e.g. "**Title** — description")
            if (block.startsWith("**")) {
              const parts = block.split("**").filter(Boolean);
              return (
                <p
                  key={idx}
                  className="text-[16px] text-[#3a3a3a] leading-[1.8] mb-4"
                >
                  {parts.map((part, pi) =>
                    pi % 2 === 0 ? (
                      <span key={pi} style={{ fontWeight: 700 }} className="text-[#1A1A1A]">
                        {part}
                      </span>
                    ) : (
                      <span key={pi}>{part}</span>
                    )
                  )}
                </p>
              );
            }
            return (
              <p
                key={idx}
                className="text-[16px] text-[#3a3a3a] leading-[1.8] mb-5"
              >
                {block}
              </p>
            );
          })}
        </article>

        {/* ── Tags ── */}
        <div className="pb-8 border-b border-[#f0eeec] mb-8">
          <p className="text-[11px] text-[#999] uppercase tracking-[0.08em] mb-3" style={{ fontWeight: 600 }}>
            Tags
          </p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="h-[30px] px-4 rounded-full bg-[#F5F3F1] text-[12px] text-[#6B6B6B] flex items-center hover:bg-[#eee] transition-colors cursor-default"
                style={{ fontWeight: 500 }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── Share ── */}
        <div className="pb-10 border-b border-[#f0eeec] mb-12">
          <p className="text-[11px] text-[#999] uppercase tracking-[0.08em] mb-3" style={{ fontWeight: 600 }}>
            Share this article
          </p>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full border border-[#e5e5e5] flex items-center justify-center text-[#999] hover:text-[#1877F2] hover:border-[#1877F2]/30 transition-colors">
              <FacebookIcon />
            </button>
            <button className="w-10 h-10 rounded-full border border-[#e5e5e5] flex items-center justify-center text-[#999] hover:text-[#000] hover:border-[#000]/20 transition-colors">
              <XIcon />
            </button>
            <button className="w-10 h-10 rounded-full border border-[#e5e5e5] flex items-center justify-center text-[#999] hover:text-[#E60023] hover:border-[#E60023]/30 transition-colors">
              <PinterestIcon />
            </button>
          </div>
        </div>
      </div>

      {/* ── Related articles ── */}
      {related.length > 0 && (
        <div className="max-w-[1415px] mx-auto px-6 pb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-[24px] text-[#1A1A1A] tracking-[-0.02em]" style={{ fontWeight: 700 }}>
              Related Articles
            </h2>
            <Link
              to="/blog"
              className="flex items-center gap-2 text-[13px] text-[#1A1A1A] hover:text-[#C8A08C] transition-colors uppercase tracking-[0.08em] group"
              style={{ fontWeight: 600 }}
            >
              All articles
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {related.map((rp) => (
              <Link
                key={rp.id}
                to={`/blog/${rp.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-[#f0eeec] hover:border-[#C8A08C]/30 transition-all flex flex-col"
              >
                <div className="relative overflow-hidden h-[200px]">
                  <ImageWithFallback
                    src={rp.image}
                    alt={rp.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] bg-white/90 backdrop-blur-sm ${
                        categoryColors[rp.category]?.text ?? "text-[#6B6B6B]"
                      }`}
                      style={{ fontWeight: 600 }}
                    >
                      {rp.category}
                    </span>
                  </div>
                </div>

                <div className="flex-1 p-5 flex flex-col">
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="text-[12px] text-[#999]">{rp.date}</span>
                    <span className="w-1 h-1 rounded-full bg-[#ddd]" />
                    <span className="flex items-center gap-1 text-[12px] text-[#999]">
                      <Clock size={11} />
                      {rp.readTime}
                    </span>
                  </div>
                  <h3
                    className="text-[16px] text-[#1A1A1A] leading-snug tracking-[-0.01em] mb-2 group-hover:text-[#C8A08C] transition-colors"
                    style={{ fontWeight: 700 }}
                  >
                    {rp.title}
                  </h3>
                  <p className="text-[13px] text-[#6B6B6B] leading-relaxed line-clamp-2 flex-1">
                    {rp.excerpt}
                  </p>
                  <span
                    className="text-[12px] text-[#C8A08C] mt-4 inline-flex items-center gap-1.5"
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
      )}
    </div>
  );
}