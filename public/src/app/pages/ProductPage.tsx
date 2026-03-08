import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";
import {
  ChevronRight,
  ChevronDown,
  Heart,
  Minus,
  Plus,
  Star,
  Check,
  Truck,
  RotateCcw,
  MapPin,
  ChevronLeft,
  Zap,
} from "lucide-react";

import imgPantone10 from "figma:asset/12315c22a26e7ef389758f785bb8655d0750f39b.png";
import imgPantone11 from "figma:asset/845f521bf9b9c5f5237256480183f6bf7c541dbe.png";
import imgPantone8 from "figma:asset/1b49202eb1555df77eb03fa251584457d575f99d.png";
import imgPantone9 from "figma:asset/7782f6519c7497135102c7950464d4ee116b1e3d.png";
import imgMainProduct from "figma:asset/37036aeabc9b1fb32bddc296a668bc0acaf1e264.png";

/* ─── DATA ─── */

const galleryImages = [imgMainProduct, imgPantone10, imgPantone11, imgPantone8];

const similarProducts = [
  { id: 1, image: imgPantone10, name: "Gel Polish Holy Molly Pantone 10", volume: "11ml", price: 7.0 },
  { id: 2, image: imgPantone11, name: "Gel Polish Holy Molly Pantone 11", volume: "11ml", price: 7.0 },
  { id: 3, image: imgPantone8, name: "Gel Polish Holy Molly Pantone 8", volume: "11ml", price: 7.0, originalPrice: 9.5 },
  { id: 4, image: imgPantone9, name: "Gel Polish Holy Molly Pantone 9", volume: "11ml", price: 7.0 },
  { id: 5, image: imgPantone10, name: "Gel Polish Holy Molly Pantone 5", volume: "11ml", price: 7.0 },
  { id: 6, image: imgPantone11, name: "Gel Polish Holy Molly Pantone 6", volume: "11ml", price: 7.0 },
];

const reviews = [
  {
    name: "Melissa H.",
    verified: true,
    rating: 5,
    text: "Hands down one of the best gel polishes I've ever used. Applies smoothly, cures perfectly, and lasts for weeks without chipping.",
  },
  {
    name: "Anna K.",
    verified: true,
    rating: 5,
    text: "The pigmentation is incredible — full coverage in just two thin coats. My clients absolutely love the shade selection.",
  },
  {
    name: "Tatiana M.",
    verified: true,
    rating: 4,
    text: "Great quality for the price. The consistency is perfect, not too thick and not too runny. Highly recommend for professionals.",
  },
  {
    name: "Kristina P.",
    verified: false,
    rating: 5,
    text: "Beautiful, rich color that stays vibrant. I've been using Holy Molly for over a year now — never disappoints.",
  },
];

const faqItems = [
  {
    question: "How long does this gel polish last?",
    answer:
      "With proper application and a quality base and top coat, Holy Molly gel polish typically lasts 3–4 weeks without chipping or lifting. Results may vary based on nail preparation and lifestyle.",
  },
  {
    question: "Is this product TPO-free?",
    answer:
      "Yes, all Holy Molly gel polishes are 100% TPO-free and HEMA-free, making them a safer choice for both technicians and clients. They are EU-certified and compliant with the latest European cosmetic regulations.",
  },
  {
    question: "What lamp should I use for curing?",
    answer:
      "Holy Molly gel polishes cure under both UV and LED lamps. We recommend 60 seconds under a 48W LED lamp or 120 seconds under a 36W UV lamp for optimal results.",
  },
  {
    question: "Can I mix this with other brands?",
    answer:
      "While Holy Molly products work best within their own system, they are generally compatible with most professional gel polish brands. We recommend testing on a tip first.",
  },
];

/* ─── ACCORDION COMPONENT ─── */

function Accordion({
  title,
  children,
  defaultOpen = true,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-[#e5e5e5]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span
          className="text-[16px] text-[#1A1A1A] group-hover:text-[#C8A08C] transition-colors"
          style={{ fontWeight: 600 }}
        >
          {title}
        </span>
        <ChevronDown
          size={18}
          className={`text-[#999] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[600px] opacity-100 pb-5" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

/* ─── MAIN PAGE ─── */

export function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);
  const [reviewSlide, setReviewSlide] = useState(0);

  return (
    <div className="pb-16">
      {/* Breadcrumb */}
      <div className="max-w-[1415px] mx-auto px-4 sm:px-6 lg:px-12 pt-5 pb-4 sm:pb-6">
        <nav className="flex items-center gap-2 text-[13px]">
          <a href="/" className="text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors">
            Home
          </a>
          <ChevronRight size={12} className="text-[#ccc]" />
          <a href="/catalog" className="text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors">
            Gel polish color
          </a>
          <ChevronRight size={12} className="text-[#ccc]" />
          <span className="text-[#999]">Gel Polish Holy Molly Pantone 10 11ml</span>
        </nav>
      </div>

      {/* Product Section */}
      <div className="max-w-[1415px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          {/* LEFT: Gallery */}
          <div className="w-full lg:w-[55%] shrink-0">
            {/* Main image */}
            <div className="bg-[#F5F3F1] rounded-2xl overflow-hidden aspect-square mb-4 relative">
              <ImageWithFallback
                src={galleryImages[selectedImage]}
                alt="Gel Polish Holy Molly Pantone 10"
                className="w-full h-full object-contain p-10"
              />
              <button
                onClick={() => setLiked(!liked)}
                className={`absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  liked ? "bg-[#C8A08C]/10" : "bg-white/80 backdrop-blur-sm"
                }`}
              >
                <Heart
                  size={20}
                  className={liked ? "fill-[#C8A08C] text-[#C8A08C]" : "text-[#999]"}
                />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-20 rounded-xl overflow-hidden bg-[#F5F3F1] transition-all ${
                    selectedImage === i
                      ? "ring-2 ring-[#C8A08C] ring-offset-2"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-contain p-2" />
                </button>
              ))}
            </div>

            {/* Accordions under gallery (from Figma) */}
            <div className="mt-10">
              <Accordion title="Specifications" defaultOpen={true}>
                <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                  {[
                    ["Brand", "Holy Molly"],
                    ["Volume", "11ml"],
                    ["Finish", "Glossy"],
                    ["Curing Time (LED)", "60 sec"],
                    ["Curing Time (UV)", "120 sec"],
                    ["Coverage", "Full (2 coats)"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between py-1.5 border-b border-[#f0f0f0]">
                      <span className="text-[13px] text-[#999]">{label}</span>
                      <span className="text-[13px] text-[#1A1A1A]" style={{ fontWeight: 500 }}>
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </Accordion>

              <Accordion title="Product Details" defaultOpen={true}>
                <p className="text-[14px] text-[#6B6B6B] leading-relaxed">
                  Holy Molly Pantone 10 is a professional-grade gel polish featuring rich, vibrant
                  pigmentation in a modern warm nude shade. Designed for salon use, it offers
                  exceptional wear resistance, smooth self-leveling application, and a high-gloss
                  finish that lasts up to 4 weeks. Compatible with all professional UV/LED curing
                  lamps.
                </p>
              </Accordion>

              <Accordion title="Ingredients" defaultOpen={true}>
                <p className="text-[14px] text-[#6B6B6B] leading-relaxed">
                  Acrylates Copolymer, Trimethylbenzoyl Diphenylphosphine Oxide-Free Formula,
                  Hydroxycyclohexyl Phenyl Ketone, CI 77891 (Titanium Dioxide), CI 77491 (Iron
                  Oxides). HEMA-free. TPO-free. EU-certified cosmetic product.
                </p>
              </Accordion>

              <Accordion title="Payment & Security" defaultOpen={true}>
                <p className="text-[13px] text-[#6B6B6B] leading-relaxed">
                  Your payment information is processed securely. We do not store credit card
                  details nor have access to your credit card information. All transactions are
                  encrypted with SSL 256-bit security.
                </p>
                <div className="flex gap-2 mt-3">
                  {["Visa", "MC", "Klix", "Apple Pay"].map((m) => (
                    <span
                      key={m}
                      className="px-2.5 py-1 rounded bg-[#F5F3F1] border border-[#e5e5e5] text-[10px] text-[#999]"
                      style={{ fontWeight: 500 }}
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </Accordion>
            </div>
          </div>

          {/* RIGHT: Product Info */}
          <div className="flex-1 pt-2 lg:sticky lg:top-6 lg:self-start">
            {/* Title */}
            <h1
              className="text-[24px] sm:text-[28px] lg:text-[32px] text-[#1A1A1A] tracking-[-0.02em] leading-tight mb-3"
              style={{ fontWeight: 700 }}
            >
              Gel Polish Holy Molly
              <br />
              Pantone 10 11ml
            </h1>

            {/* Vendor */}
            <div className="flex items-center gap-1.5 mb-4 text-[14px]">
              <span className="text-[#999]">Vendor:</span>
              <a
                href="#"
                className="text-[#1A1A1A] border-b border-[#1A1A1A] hover:text-[#C8A08C] hover:border-[#C8A08C] transition-colors"
                style={{ fontWeight: 600 }}
              >
                Holy Molly
              </a>
            </div>

            {/* Price */}
            <div className="mb-1 flex items-baseline gap-3">
              <span className="text-[28px] text-[#1A1A1A]" style={{ fontWeight: 600 }}>
                €7,00
              </span>
              <div className="flex items-center gap-2 bg-[#2E4A3E] rounded-full px-3.5 py-1.5">
                <span className="text-[15px] text-white" style={{ fontWeight: 700 }}>
                  €5,60
                </span>
                <span className="text-[11px] text-white/70" style={{ fontWeight: 600 }}>
                  with account · −20%
                </span>
              </div>
            </div>
            <p className="text-[13px] text-[#999] mb-5">Tax included. <a href="#" className="text-[#2E4A3E] hover:underline" style={{ fontWeight: 600 }}>Sign in</a> for member pricing.</p>

            {/* USP tags */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-5">
              {["Modern", "Eco-certified", "Warranty"].map((tag) => (
                <div key={tag} className="flex items-center gap-2">
                  <Check size={16} className="text-[#1A1A1A]" />
                  <span className="text-[14px] text-[#1A1A1A]" style={{ fontWeight: 600 }}>
                    {tag}
                  </span>
                </div>
              ))}
            </div>

            {/* Stock status */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#0d8756]" />
              <span className="text-[14px] text-[#0d8756]" style={{ fontWeight: 600 }}>
                In stock
              </span>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-3 mb-4">
              {/* Quantity */}
              <div className="flex items-center border border-[#e5e5e5] rounded-full h-[48px] w-[125px]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-[45px] h-full flex items-center justify-center text-[#999] hover:text-[#1A1A1A] transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="flex-1 text-center text-[14px] text-[#1A1A1A]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-[45px] h-full flex items-center justify-center text-[#1A1A1A] hover:text-[#C8A08C] transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>

              {/* Add to cart */}
              <button
                className="flex-1 h-[48px] bg-[#1A1A1A] text-white text-[14px] rounded-full hover:bg-[#C8A08C] transition-colors"
                style={{ fontWeight: 700 }}
              >
                Add to cart
              </button>
            </div>

            {/* Save product */}
            <button
              onClick={() => setLiked(!liked)}
              className="w-full h-[48px] flex items-center justify-center gap-2 bg-[#F5F3F1] text-[#1A1A1A] text-[14px] rounded-full hover:bg-[#e5e5e5] transition-colors mb-6"
              style={{ fontWeight: 700 }}
            >
              <Heart size={16} className={liked ? "fill-[#C8A08C] text-[#C8A08C]" : ""} />
              Save product
            </button>

            {/* Shipping perks */}
            <div className="bg-[#2E4A3E] rounded-xl p-4 mb-6">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Truck size={18} className="text-white" />
                  <div className="text-[14px] text-white">
                    <span style={{ fontWeight: 600 }}>Free Shipping</span>
                    <span className="text-white/70"> — Estonia over €50 · Latvia/Lithuania over €100</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <RotateCcw size={18} className="text-white" />
                  <span className="text-[14px] text-white">
                    <span style={{ fontWeight: 600 }}>Free Returns</span>
                    <span className="text-white/70"> — within 30 days</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Pickup availability */}
            <div className="border border-[#e5e5e5] rounded-xl p-4 mb-3">
              <div className="flex gap-3">
                <MapPin size={20} className="text-[#1A1A1A] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[14px] text-[#1A1A1A] leading-snug" style={{ fontWeight: 600 }}>
                    Pickup available at Pärnu mnt 23, Tallinn
                  </p>
                  <p className="text-[12px] text-[#999] mt-1">Usually ready in 24 hours</p>
                </div>
              </div>
            </div>

            {/* Wolt delivery */}
            <div className="border border-[#e5e5e5] rounded-xl p-4 mb-6">
              <div className="flex gap-3">
                <Zap size={20} className="text-[#009DE0] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[14px] text-[#1A1A1A] leading-snug" style={{ fontWeight: 600 }}>
                    Wolt delivery — within 4 hours
                  </p>
                  <p className="text-[12px] text-[#999] mt-1">Mon–Fri, 09:00–16:00</p>
                </div>
              </div>
            </div>

            {/* Share */}
            <div className="flex items-center gap-3">
              <span className="text-[13px] text-[#999]" style={{ fontWeight: 500 }}>
                Share:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="#"
                  className="w-9 h-9 rounded-full border border-[#e5e5e5] flex items-center justify-center text-[#6B6B6B] hover:border-[#1877F2] hover:text-[#1877F2] transition-colors"
                  aria-label="Share on Facebook"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" /></svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full border border-[#e5e5e5] flex items-center justify-center text-[#6B6B6B] hover:border-[#1A1A1A] hover:text-[#1A1A1A] transition-colors"
                  aria-label="Share on X"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full border border-[#e5e5e5] flex items-center justify-center text-[#6B6B6B] hover:border-[#E60023] hover:text-[#E60023] transition-colors"
                  aria-label="Share on Pinterest"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0a12 12 0 0 0-4.373 23.178c-.07-.633-.133-1.604.028-2.295.145-.624.938-3.977.938-3.977s-.24-.479-.24-1.187c0-1.113.645-1.943 1.448-1.943.683 0 1.012.512 1.012 1.127 0 .687-.437 1.714-.663 2.668-.189.796.399 1.446 1.185 1.446 1.42 0 2.514-1.498 2.514-3.662 0-1.915-1.376-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A12 12 0 1 0 12 0z" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── REVIEWS SECTION ─── */}
      <div className="max-w-[1415px] mx-auto px-4 sm:px-6 lg:px-12 mt-12 sm:mt-20">
        <div className="flex items-center justify-between mb-8">
          <h2
            className="text-[28px] text-[#1A1A1A] tracking-[-0.02em]"
            style={{ fontWeight: 700 }}
          >
            Clients Love Us
          </h2>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setReviewSlide(Math.max(0, reviewSlide - 1))}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                reviewSlide === 0
                  ? "bg-[#F5F3F1] text-[#ccc]"
                  : "bg-[#e8ded4] text-[#1A1A1A] hover:bg-[#C8A08C] hover:text-white"
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() =>
                setReviewSlide(Math.min(reviews.length - 3, reviewSlide + 1))
              }
              className="w-12 h-12 rounded-full bg-[#e8ded4] text-[#1A1A1A] flex items-center justify-center hover:bg-[#C8A08C] hover:text-white transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {reviews.slice(reviewSlide, reviewSlide + 3).map((review, i) => (
            <div
              key={i}
              className="bg-white border border-[#e5e5e5] rounded-2xl p-6 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="text-[16px] text-[#1A1A1A]"
                  style={{ fontWeight: 700 }}
                >
                  {review.name}
                </span>
                {review.verified && (
                  <span className="text-[12px] text-[#999]">Verified Buyer</span>
                )}
              </div>
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className={
                      j < review.rating
                        ? "fill-[#C8A08C] text-[#C8A08C]"
                        : "text-[#ddd]"
                    }
                  />
                ))}
              </div>
              <p className="text-[14px] text-[#1A1A1A] leading-relaxed flex-1">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── SIMILAR PRODUCTS ─── */}
      <div className="max-w-[1415px] mx-auto px-4 sm:px-6 lg:px-12 mt-12 sm:mt-20">
        <h2
          className="text-[28px] text-[#1A1A1A] tracking-[-0.02em] mb-8"
          style={{ fontWeight: 700 }}
        >
          In The Same Style
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {similarProducts.map((product) => (
            <a
              key={product.id}
              href="/product"
              className="group cursor-pointer block"
            >
              <div className="bg-[#F5F3F1] rounded-xl overflow-hidden aspect-square mb-3 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4
                className="text-[12px] text-[#1A1A1A] leading-snug mb-0.5 group-hover:text-[#C8A08C] transition-colors"
                style={{ fontWeight: 500 }}
              >
                {product.name}
              </h4>
              <span className="text-[11px] text-[#999]">{product.volume}</span>
              <div className="flex items-center gap-2 mt-1">
                <span
                  className="text-[13px] text-[#1A1A1A]"
                  style={{ fontWeight: 700 }}
                >
                  €{product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-[11px] text-[#999] line-through">
                    €{product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ─── FAQ SECTION ─── */}
      <div className="max-w-[1415px] mx-auto px-4 sm:px-6 lg:px-12 mt-12 sm:mt-20">
        <div className="flex flex-col lg:flex-row gap-0 items-stretch rounded-2xl overflow-hidden min-h-[480px] lg:min-h-[580px]">
          {/* FAQ image side */}
          <div className="w-full h-[200px] lg:w-[420px] lg:h-auto shrink-0 relative overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-[#e8ded4] via-[#C8A08C]/30 to-[#F5F3F1]" />
            {/* Overlay content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="inline-block px-3 py-1 rounded-full bg-[#1A1A1A]/15 backdrop-blur-sm text-[#1A1A1A] text-[11px] tracking-wider mb-3" style={{ fontWeight: 600 }}>
                NEED HELP?
              </span>
              <p className="text-[#3a3a3a] text-[14px] leading-relaxed">
                Our team of nail professionals is here to assist you with any questions.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 mt-4 text-[#1A1A1A] text-[13px] border-b border-[#1A1A1A]/40 pb-0.5 hover:border-[#1A1A1A] transition-colors"
                style={{ fontWeight: 600 }}
              >
                Contact us
                <ChevronRight size={14} />
              </a>
            </div>
          </div>

          {/* FAQ content side */}
          <div className="flex-1 bg-[#FAFAF9] px-5 sm:px-8 lg:px-10 py-7 sm:py-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-[2px] bg-[#C8A08C]" />
              <span className="text-[11px] text-[#C8A08C] tracking-[0.15em] uppercase" style={{ fontWeight: 600 }}>
                FAQ
              </span>
            </div>
            <h2
              className="text-[28px] text-[#1A1A1A] tracking-[-0.02em] mb-8"
              style={{ fontWeight: 700 }}
            >Frequently Asked Questions</h2>

            {faqItems.map((faq, i) => (
              <Accordion key={i} title={faq.question} defaultOpen={true}>
                <p className="text-[14px] text-[#6B6B6B] leading-relaxed">
                  {faq.answer}
                </p>
              </Accordion>
            ))}

            <div className="mt-8 pt-6 border-t border-[#e5e5e5]">
              <p className="text-[13px] text-[#999]">
                Still have questions?{" "}
                <a
                  href="/contact"
                  className="text-[#C8A08C] hover:text-[#A67B68] transition-colors"
                  style={{ fontWeight: 600 }}
                >
                  Get in touch with our team
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}