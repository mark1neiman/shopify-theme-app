import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  LayoutDashboard,
  ShoppingBag,
  Heart,
  UserCog,
  MapPin,
  Tag,
  Sparkles,
  Eye,
  FileText,
  LogOut,
  Search,
  Download,
  ExternalLink,
  Building2,
  TrendingUp,
  ArrowUpRight,
  ChevronRight,
  Package,
  Gift,
  Copy,
  Check,
  Zap,
  Clock,
  ShieldCheck,
  Trash2,
  Menu,
  X,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

/* ─── sidebar config ─── */
const sidebarSections = [
  {
    title: "My Account",
    items: [
      { path: "/account", label: "Dashboard", icon: LayoutDashboard, end: true },
      { path: "/account/orders", label: "Orders", icon: ShoppingBag, badge: "11" },
      { path: "/account/lists", label: "My Lists", icon: Heart, badge: "4" },
      { path: "/account/info", label: "Account Information", icon: UserCog },
      { path: "/account/addresses", label: "Address Book", icon: MapPin },
    ],
  },
  {
    title: "Credits & savings",
    items: [
      { path: "/account/offers", label: "Sales & Offers", icon: Tag, badge: "3" },
      { path: "/account/special-offer", label: "Special Offer", icon: Sparkles },
    ],
  },
  {
    title: "My Activity",
    items: [
      { path: "/account/watch-history", label: "Watch History", icon: Eye },
      { path: "/account/order-details", label: "Order Details", icon: FileText },
    ],
  },
];

/* ─── mock data ─── */
const mockOrders = [
  { id: "NN-1012", date: "Feb 12, 2026", payment: "Voided", fulfillment: "Unfulfilled", discount: "-", total: "€9,05" },
  { id: "NN-1011", date: "Feb 12, 2026", payment: "Voided", fulfillment: "Unfulfilled", discount: "-", total: "€5,95" },
  { id: "NN-1010", date: "Feb 12, 2026", payment: "Voided", fulfillment: "Unfulfilled", discount: "-", total: "€15,00" },
  { id: "NN-1009", date: "Feb 12, 2026", payment: "Voided", fulfillment: "Unfulfilled", discount: "-", total: "€15,00" },
  { id: "NN-1008", date: "Feb 12, 2026", payment: "Voided", fulfillment: "Unfulfilled", discount: "-", total: "€9,05" },
  { id: "NN-1007", date: "Feb 12, 2026", payment: "Voided", fulfillment: "Unfulfilled", discount: "-", total: "€26,90" },
  { id: "NN-1006", date: "Feb 12, 2026", payment: "Pending", fulfillment: "Fulfilled", discount: "-", total: "€15,00" },
  { id: "NN-1005", date: "Feb 12, 2026", payment: "Voided", fulfillment: "Fulfilled", discount: "-", total: "€5,95" },
  { id: "NN-1004", date: "Feb 12, 2026", payment: "Voided", fulfillment: "Fulfilled", discount: "-", total: "€5,95" },
  { id: "NN-1003", date: "Feb 12, 2026", payment: "Paid", fulfillment: "Fulfilled", discount: "-", total: "€38,80" },
  { id: "NN-1002", date: "Feb 6, 2026", payment: "Voided", fulfillment: "Unfulfilled", discount: "-", total: "€24,10" },
];

const productImages = [
  "https://images.unsplash.com/photo-1605188346442-07b7c6fc6ca9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZWwlMjBuYWlsJTIwcG9saXNoJTIwYm90dGxlJTIwcHJvZHVjdHxlbnwxfHx8fDE3NzIxNzU1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1636019411401-82485711b6ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwYXJ0JTIwbWFuaWN1cmUlMjBjb2xvciUyMGJvdHRsZXN8ZW58MXx8fHwxNzcyMTc1NTIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1758738880475-dac2ab1c92d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBuYWlsJTIwbGFjcXVlciUyMGJlYXV0eSUyMHByb2R1Y3R8ZW58MXx8fHwxNzcyMTc1NTI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1512207046665-7592bb0ce5e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwcG9saXNoJTIwY29sbGVjdGlvbiUyMGNvbG9yZnVsJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MjE3NTUyNHww&ixlib=rb-4.1.0&q=80&w=1080",
];

const watchProducts = [
  { name: "Gel Polish Holy Molly Pantone 10 11ml", price: "€5,95", order: "#NN-1009", img: productImages[0] },
  { name: "Gel Polish Holy Molly Pantone 8 11ml", price: "€5,95", order: "#NN-1012", img: productImages[1] },
  { name: "Gel Polish Holy Molly Pantone 11 11ml", price: "€5,95", order: "#NN-1010", img: productImages[2] },
];

const recommendedProducts = [
  { name: "Gel Polish Pantone 5", price: "€5,95", img: productImages[0] },
  { name: "Gel Polish Pantone 8", price: "€5,95", img: productImages[1] },
  { name: "Base Coat Pro UV/LED", price: "€12,90", img: productImages[2] },
  { name: "Top Coat No Wipe", price: "€8,50", img: productImages[3] },
];

/* ─── Animated Counter ─── */
function AnimatedNumber({ target, prefix = "" }: { target: number; prefix?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(start + (target - start) * eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target]);
  return <>{prefix}{count}</>;
}

/* ─── Status Pill ─── */
function StatusPill({ label, type }: { label: string; type: "success" | "warning" | "neutral" | "accent" }) {
  const colors = {
    success: "bg-[#E8F5E9] text-[#264236]",
    warning: "bg-[#FFF8E1] text-[#B8860B]",
    neutral: "bg-[#F5F3F1] text-[#999]",
    accent: "bg-[#FFF0E8] text-[#C8A08C]",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] ${colors[type]}`} style={{ fontWeight: 600 }}>
      <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
        type === "success" ? "bg-[#264236]" : type === "warning" ? "bg-[#B8860B]" : type === "accent" ? "bg-[#C8A08C]" : "bg-[#ccc]"
      }`} />
      {label}
    </span>
  );
}

/* ─── Sidebar Component ─── */
function Sidebar() {
  return (
    <aside className="w-full lg:w-[260px] shrink-0">
      {/* Profile card */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-[#264236] rounded-2xl p-5 mb-5 relative overflow-hidden"
      >
        <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-white/[0.04]" />
        <div className="absolute bottom-0 left-0 w-32 h-16 rounded-tr-full bg-white/[0.03]" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-[#C8A08C] flex items-center justify-center text-white text-[18px] ring-2 ring-white/20" style={{ fontWeight: 700 }}>
              M
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-[15px] truncate" style={{ fontWeight: 700 }}>Mark Neiman</p>
              <p className="text-white/50 text-[12px]">mark1neiman@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-white/10 text-white/70 px-2.5 py-1 rounded-full text-[11px]" style={{ fontWeight: 600 }}>
              <Building2 size={11} />
              Personal Account
            </span>
          </div>

        </div>
      </motion.div>

      {/* Nav sections */}
      <div className="bg-white rounded-2xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
        {sidebarSections.map((section, si) => (
          <div key={section.title} className={si > 0 ? "mt-3 pt-3 border-t border-[#f0eeec]" : ""}>
            <p
              className="text-[10px] text-[#bbb] mb-1.5 px-3 uppercase tracking-[0.12em]"
              style={{ fontWeight: 600 }}
            >
              {section.title}
            </p>
            <ul className="flex flex-col gap-0.5">
              {section.items.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.end}
                    className={({ isActive }) =>
                      `flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[13px] transition-all relative ${
                        isActive
                          ? "bg-[#264236] text-white shadow-[0_2px_8px_rgba(38,66,54,0.2)]"
                          : "text-[#6B6B6B] hover:text-[#1A1A1A] hover:bg-[#F5F3F1]"
                      }`
                    }
                    style={({ isActive }) => ({ fontWeight: isActive ? 600 : 500 })}
                  >
                    <item.icon size={15} className="shrink-0" />
                    <span className="flex-1">{item.label}</span>
                    {item.badge && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/20 min-w-[20px] text-center" style={{ fontWeight: 600 }}>
                        {item.badge}
                      </span>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Bottom actions */}
        <div className="mt-4 pt-3 border-t border-[#f0eeec] flex flex-col gap-2">
          <Link
            to="/account/addresses"
            className="flex items-center justify-center gap-2 h-[38px] rounded-xl border border-[#264236] text-[#264236] text-[12.5px] hover:bg-[#264236] hover:text-white transition-all"
            style={{ fontWeight: 600 }}
          >
            <MapPin size={13} />
            Manage Addresses
          </Link>
          <button
            className="flex items-center justify-center gap-2 h-[38px] rounded-xl text-[#C8A08C] text-[12.5px] hover:bg-[#C8A08C]/10 transition-all cursor-pointer"
            style={{ fontWeight: 600 }}
          >
            <LogOut size={13} />
            Log Out
          </button>
        </div>
      </div>
    </aside>
  );
}

/* ═══════════════════════════════════════════════════
   SUB-PAGES
   ═══════════════════════════════════════════════════ */

/* ─── Dashboard ─── */
function DashboardView() {
  const dashCards = [
    { title: "Orders", desc: "Track, return & review", icon: ShoppingBag, color: "#264236", gradient: "from-[#264236] to-[#3a6355]", path: "/account/orders", stat: "11" },
    { title: "Address Book", desc: "Manage addresses", icon: MapPin, color: "#4A6B8A", gradient: "from-[#4A6B8A] to-[#6B8BA8]", path: "/account/addresses", stat: "2" },
    { title: "Sales & Offers", desc: "Your personal promos", icon: Tag, color: "#8B6B4A", gradient: "from-[#8B6B4A] to-[#A8876B]", path: "/account/offers", stat: "3" },
    { title: "My Lists", desc: "Saved for later", icon: Heart, color: "#6B4A8B", gradient: "from-[#6B4A8B] to-[#876BA8]", path: "/account/lists", stat: "4" },
    { title: "Watch History", desc: "Recently viewed", icon: Eye, color: "#4A8B6B", gradient: "from-[#4A8B6B] to-[#6BA887]", path: "/account/watch-history", stat: "3" },
    { title: "Special Offer", desc: "Discounts for you", icon: Sparkles, color: "#8B4A6B", gradient: "from-[#8B4A6B] to-[#A86B87]", path: "/account/special-offer", stat: "!" },
  ];

  return (
    <div className="space-y-5">
      {/* Hero greeting */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="relative rounded-2xl overflow-hidden bg-[#264236] p-5 sm:p-8 md:p-10"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1628235172251-6b87dab144b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5pY3VyZSUyMGhhbmRzJTIwZWxlZ2FudCUyMHNwYSUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NzIxNzU5Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center opacity-[0.08]" />
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#C8A08C]/10" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/[0.03]" />
        <div className="relative z-10">
          <div className="flex items-center gap-1.5 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C8A08C] animate-pulse" />
            <span className="text-[11px] text-white/50 uppercase tracking-widest" style={{ fontWeight: 600 }}>Welcome back</span>
          </div>
          <h1 className="text-white mb-2" style={{ fontSize: 26, fontWeight: 800, lineHeight: 1.1 }}>
            Hey, Mark!
          </h1>
          <p className="text-white/50 text-[14.5px] max-w-[420px]" style={{ fontWeight: 400 }}>
            You have <span className="text-[#C8A08C]" style={{ fontWeight: 700 }}>3 active offers</span> and <span className="text-[#C8A08C]" style={{ fontWeight: 700 }}>7 open orders</span>. Here's your account overview.
          </p>
        </div>
      </motion.div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "Total orders", value: 10, icon: ShoppingBag, color: "#264236" },
          { label: "Open orders", value: 7, icon: Clock, color: "#C8A08C" },
          { label: "Total spent", value: 180, icon: TrendingUp, color: "#264236", prefix: "€" },
          { label: "Saved items", value: 4, icon: Heart, color: "#8B6B4A" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * i, duration: 0.35 }}
            className="bg-white rounded-2xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] group hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: stat.color + "12" }}>
                <stat.icon size={16} style={{ color: stat.color }} />
              </span>
              <ArrowUpRight size={14} className="text-[#ccc] group-hover:text-[#264236] transition-colors" />
            </div>
            <p className="text-[#1A1A1A]" style={{ fontSize: 26, fontWeight: 800 }}>
              <AnimatedNumber target={stat.value} prefix={stat.prefix || ""} />
            </p>
            <p className="text-[12px] text-[#999] mt-0.5" style={{ fontWeight: 500 }}>{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Quick access cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
        {dashCards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 * i, duration: 0.35 }}
          >
            <Link
              to={card.path}
              className="flex items-start gap-4 p-5 rounded-2xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.08)] transition-all group h-full border border-transparent hover:border-[#264236]/10"
            >
              <span className={`w-11 h-11 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <card.icon size={18} className="text-white" />
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <h3 className="text-[#1A1A1A] text-[14.5px] truncate" style={{ fontWeight: 700 }}>
                    {card.title}
                  </h3>
                  {card.stat && (
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#F5F3F1] text-[#1A1A1A] shrink-0 ml-2" style={{ fontWeight: 600 }}>
                      {card.stat}
                    </span>
                  )}
                </div>
                <p className="text-[12.5px] text-[#999]" style={{ fontWeight: 400 }}>
                  {card.desc}
                </p>
              </div>
              <ChevronRight size={16} className="text-[#ccc] group-hover:text-[#264236] shrink-0 mt-0.5 group-hover:translate-x-1 transition-all" />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Recommended for you */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
      >
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="text-[#1A1A1A] text-[16px]" style={{ fontWeight: 700 }}>Recommended for you</h3>
            <p className="text-[12px] text-[#999] mt-0.5">Based on your purchase history</p>
          </div>
          <Link to="/catalog" className="text-[12px] text-[#264236] hover:underline flex items-center gap-1" style={{ fontWeight: 600 }}>
            View all <ChevronRight size={12} />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {recommendedProducts.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35 + 0.06 * i, duration: 0.3 }}
              className="group cursor-pointer"
            >
              <div className="aspect-square rounded-xl bg-[#F5F3F1] overflow-hidden border border-[#e5e5e5] group-hover:border-[#C8A08C] transition-colors mb-2">
                <ImageWithFallback src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <p className="text-[12.5px] text-[#3a3a3a] truncate" style={{ fontWeight: 500 }}>{p.name}</p>
              <p className="text-[13px] text-[#264236]" style={{ fontWeight: 700 }}>{p.price}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Orders ─── */
function OrdersView() {
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState<"all" | "open" | "completed">("all");
  const filtered = mockOrders.filter((o) => {
    const matchSearch =
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.payment.toLowerCase().includes(search.toLowerCase());
    if (tab === "open") return matchSearch && o.fulfillment === "Unfulfilled";
    if (tab === "completed") return matchSearch && o.fulfillment === "Fulfilled";
    return matchSearch;
  });

  return (
    <div className="space-y-5">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h2 className="text-[#1A1A1A]" style={{ fontSize: 24, fontWeight: 800 }}>Orders</h2>
          <p className="text-[13px] text-[#999] mt-0.5">{mockOrders.length} total orders</p>
        </div>
        <Link
          to="/account"
          className="text-[12px] text-[#264236] hover:underline flex items-center gap-1"
          style={{ fontWeight: 600 }}
        >
          Back to Dashboard
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="bg-white rounded-2xl shadow-[0_2px_16px_rgba(0,0,0,0.04)] overflow-hidden"
      >
        {/* Tabs + Search */}
        <div className="px-6 pt-5 pb-4 border-b border-[#f0eeec]">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex gap-1 bg-[#F5F3F1] rounded-xl p-1">
              {(["all", "open", "completed"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`px-4 py-2 rounded-lg text-[12.5px] transition-all cursor-pointer ${
                    tab === t ? "bg-white text-[#1A1A1A] shadow-sm" : "text-[#999] hover:text-[#1A1A1A]"
                  }`}
                  style={{ fontWeight: tab === t ? 600 : 500 }}
                >
                  {t === "all" ? "All" : t === "open" ? "Open" : "Completed"}
                </button>
              ))}
            </div>
            <div className="relative w-[260px]">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search orders..."
                className="w-full h-[38px] pl-9 pr-4 rounded-xl border border-[#e5e5e5] bg-[#FAFAF9] text-[13px] text-[#1A1A1A] placeholder:text-[#bbb] outline-none focus:border-[#C8A08C] transition-all"
              />
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#bbb]" />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#f0eeec]">
                {["ORDER", "DATE", "PAYMENT", "FULFILLMENT", "TOTAL", ""].map((h) => (
                  <th key={h || "action"} className="text-left text-[10px] text-[#bbb] uppercase tracking-[0.1em] py-3 px-5 first:pl-6 last:pr-6" style={{ fontWeight: 600 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {filtered.map((order, i) => (
                  <motion.tr
                    key={order.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.02 * i }}
                    className="border-b border-[#f8f8f7] hover:bg-[#FAFAF9]/70 transition-colors group"
                  >
                    <td className="py-4 px-5 first:pl-6">
                      <Link to={`/account/orders/${order.id}`} className="text-[13px] text-[#264236] hover:underline" style={{ fontWeight: 600 }}>
                        #{order.id}
                      </Link>
                    </td>
                    <td className="py-4 px-5 text-[13px] text-[#888]">{order.date}</td>
                    <td className="py-4 px-5">
                      <StatusPill
                        label={order.payment}
                        type={order.payment === "Paid" ? "success" : order.payment === "Pending" ? "warning" : "neutral"}
                      />
                    </td>
                    <td className="py-4 px-5">
                      <StatusPill
                        label={order.fulfillment}
                        type={order.fulfillment === "Fulfilled" ? "success" : "accent"}
                      />
                    </td>
                    <td className="py-4 px-5 text-[13px] text-[#1A1A1A]" style={{ fontWeight: 600 }}>{order.total}</td>
                    <td className="py-4 px-5 last:pr-6">
                      <Link
                        to={`/account/orders/${order.id}`}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[12px] text-[#264236] bg-[#264236]/5 hover:bg-[#264236] hover:text-white transition-all opacity-0 group-hover:opacity-100"
                        style={{ fontWeight: 600 }}
                      >
                        View <ArrowUpRight size={12} />
                      </Link>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Order Details ─── */
function OrderDetailView() {
  return (
    <div className="space-y-5">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Link to="/account/orders" className="w-9 h-9 rounded-xl bg-white border border-[#e5e5e5] flex items-center justify-center hover:border-[#264236] transition-colors shrink-0">
            <ChevronRight size={16} className="text-[#3a3a3a] rotate-180" />
          </Link>
          <div>
            <h2 className="text-[#1A1A1A]" style={{ fontSize: 20, fontWeight: 800 }}>Order #NN-1012</h2>
            <p className="text-[12px] text-[#999] mt-0.5">February 12, 2026</p>
          </div>
        </div>
        <StatusPill label="Unfulfilled" type="accent" />
      </motion.div>

      {/* Status cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          { label: "Date", value: "Feb 12, 2026", icon: Clock, color: "#264236" },
          { label: "Payment", value: "Voided", icon: ShieldCheck, color: "#999" },
          { label: "Fulfillment", value: "Unfulfilled", icon: Package, color: "#C8A08C" },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 * i, duration: 0.35 }}
            className="bg-white rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: s.color + "12" }}>
                <s.icon size={14} style={{ color: s.color }} />
              </span>
              <span className="text-[11px] text-[#bbb] uppercase tracking-wider" style={{ fontWeight: 600 }}>{s.label}</span>
            </div>
            <p className="text-[#1A1A1A]" style={{ fontSize: 18, fontWeight: 800 }}>{s.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Product + Totals */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden"
      >
        {/* Product row */}
        <div className="p-6 flex items-center gap-4 border-b border-[#f0eeec]">
          <div className="w-16 h-16 rounded-xl bg-[#F5F3F1] overflow-hidden shrink-0 border border-[#e5e5e5]">
            <ImageWithFallback src={productImages[1]} alt="product" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <Link to="/product" className="text-[14px] text-[#1A1A1A] hover:text-[#264236] transition-colors" style={{ fontWeight: 600 }}>
              Gel Polish Holy Molly Pantone 8 11ml
            </Link>
            <p className="text-[12px] text-[#999] mt-0.5">Qty: 1</p>
          </div>
          <p className="text-[15px] text-[#1A1A1A] shrink-0" style={{ fontWeight: 700 }}>€5,95</p>
        </div>

        {/* Totals */}
        <div className="p-6 space-y-2.5">
          {[
            { label: "Subtotal", value: "€5,95" },
            { label: "Shipping", value: "€3,10" },
            { label: "Tax (EE VAT)", value: "€1,75" },
          ].map((row) => (
            <div key={row.label} className="flex justify-between text-[13px]">
              <span className="text-[#888]" style={{ fontWeight: 500 }}>{row.label}</span>
              <span className="text-[#3a3a3a]" style={{ fontWeight: 500 }}>{row.value}</span>
            </div>
          ))}
          <div className="h-px bg-[#f0eeec] my-1" />
          <div className="flex justify-between text-[15px]">
            <span className="text-[#1A1A1A]" style={{ fontWeight: 700 }}>Total</span>
            <span className="text-[#1A1A1A]" style={{ fontWeight: 800 }}>€9,05 EUR</span>
          </div>
        </div>
      </motion.div>

      {/* Savings callout */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-r from-[#264236] to-[#3a6355] rounded-2xl p-5 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
            <Zap size={18} className="text-[#C8A08C]" />
          </span>
          <div>
            <p className="text-white text-[13px]" style={{ fontWeight: 600 }}>You saved on this order</p>
            <p className="text-white/50 text-[12px]">Discount applied at checkout</p>
          </div>
        </div>
        <span className="text-white" style={{ fontSize: 20, fontWeight: 800 }}>-€1,05</span>
      </motion.div>

      {/* Addresses + Delivery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { type: "Billing address", icon: FileText, color: "#264236" },
          { type: "Shipping address", icon: Package, color: "#C8A08C" },
        ].map((addr) => (
          <motion.div
            key={addr.type}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="bg-white rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: addr.color + "12" }}>
                <addr.icon size={14} style={{ color: addr.color }} />
              </span>
              <span className="text-[12px]" style={{ color: addr.color, fontWeight: 600 }}>{addr.type}</span>
            </div>
            <div className="text-[13px] text-[#3a3a3a] space-y-0.5">
              <p style={{ fontWeight: 600 }}>Mark Neiman</p>
              <p>Kooli tn 6-28</p>
              <p>76904 Tallinn, Estonia</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Delivery details */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
      >
        <h3 className="text-[#1A1A1A] text-[15px] mb-4" style={{ fontWeight: 700 }}>Delivery details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-[13px]">
          {[
            { label: "Method", value: "SmartPosti Parcel Locker" },
            { label: "Provider", value: "smartposti" },
            { label: "Location", value: "Tallinna Prisle Selver" },
            { label: "Country", value: "EE" },
            { label: "Recipient", value: "Mark Neiman" },
            { label: "Phone", value: "55988931" },
          ].map((d) => (
            <div key={d.label}>
              <p className="text-[#bbb] text-[11px] uppercase tracking-wider mb-0.5" style={{ fontWeight: 600 }}>{d.label}</p>
              <p className="text-[#3a3a3a]" style={{ fontWeight: 500 }}>{d.value}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* VAT Invoice */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
      >
        <h3 className="text-[#1A1A1A] text-[15px] mb-4" style={{ fontWeight: 700 }}>VAT Invoice</h3>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#1A1A1A] text-[#1A1A1A] text-[13px] hover:bg-[#1A1A1A] hover:text-white transition-all cursor-pointer" style={{ fontWeight: 600 }}>
            <ExternalLink size={14} /> Open PDF
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#264236] text-white text-[13px] hover:bg-[#1a3328] transition-all cursor-pointer" style={{ fontWeight: 600 }}>
            <Download size={14} /> Download PDF
          </button>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── My Lists ─── */
function MyListsView() {
  const savedItems = [
    { name: "Gel Polish Holy Molly Pantone 10 11ml", price: "€5,95", img: productImages[0] },
    { name: "Base Coat Professional UV/LED 15ml", price: "€12,90", img: productImages[1] },
    { name: "Top Coat No Wipe Glossy 11ml", price: "€8,50", img: productImages[2] },
    { name: "Gel Polish Holy Molly Pantone 3 11ml", price: "€5,95", img: productImages[3] },
  ];

  return (
    <div className="space-y-5">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-[#1A1A1A]" style={{ fontSize: 24, fontWeight: 800 }}>My Lists</h2>
        <p className="text-[13px] text-[#999] mt-0.5">{savedItems.length} saved items</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {savedItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 * i, duration: 0.35 }}
            className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all group"
          >
            <div className="aspect-square bg-[#F5F3F1] overflow-hidden relative">
              <ImageWithFallback src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#C8A08C] hover:text-white text-[#999] cursor-pointer shadow-sm">
                <Heart size={14} />
              </button>
            </div>
            <div className="p-4">
              <p className="text-[13.5px] text-[#1A1A1A] mb-1 line-clamp-2" style={{ fontWeight: 600 }}>{item.name}</p>
              <p className="text-[15px] text-[#264236] mb-3" style={{ fontWeight: 700 }}>{item.price}</p>
              <button className="w-full h-[38px] rounded-xl bg-[#1A1A1A] text-white text-[12.5px] hover:bg-[#264236] transition-colors cursor-pointer relative overflow-hidden group/btn" style={{ fontWeight: 600 }}>
                <span className="relative z-10">Add to Cart</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#C8A08C] to-[#b8907c] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─── Account Information ─── */
function AccountInfoView() {
  return (
    <div className="space-y-5">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-[#1A1A1A]" style={{ fontSize: 24, fontWeight: 800 }}>Account Information</h2>
        <p className="text-[13px] text-[#999] mt-0.5">Manage your personal details</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="bg-white rounded-2xl p-7 shadow-[0_2px_16px_rgba(0,0,0,0.04)]"
      >
        {/* Avatar section */}
        <div className="flex items-center gap-5 pb-6 mb-6 border-b border-[#f0eeec]">
          <div className="w-16 h-16 rounded-2xl bg-[#264236] flex items-center justify-center text-white text-[24px]" style={{ fontWeight: 700 }}>
            M
          </div>
          <div>
            <p className="text-[#1A1A1A] text-[16px]" style={{ fontWeight: 700 }}>Mark Neiman</p>
            <p className="text-[13px] text-[#999]">Personal Account · since 2024</p>
          </div>
          <button className="ml-auto text-[12px] text-[#264236] px-4 py-2 rounded-xl border border-[#264236] hover:bg-[#264236] hover:text-white transition-all cursor-pointer" style={{ fontWeight: 600 }}>
            Upload Photo
          </button>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[600px]">
          {[
            { label: "First name", value: "Mark", type: "text" },
            { label: "Last name", value: "Neiman", type: "text" },
            { label: "Email", value: "mark1neiman@gmail.com", type: "email" },
            { label: "Phone", value: "+372 55988931", type: "tel" },
          ].map((field) => (
            <div key={field.label}>
              <label className="block text-[11px] text-[#bbb] mb-2 uppercase tracking-[0.1em]" style={{ fontWeight: 600 }}>{field.label}</label>
              <input
                type={field.type}
                defaultValue={field.value}
                className="w-full h-[46px] px-4 rounded-xl border border-[#e5e5e5] bg-[#FAFAF9] text-[14px] text-[#1A1A1A] outline-none focus:border-[#C8A08C] focus:bg-white focus:shadow-[0_0_0_4px_rgba(200,160,140,0.1)] transition-all"
              />
            </div>
          ))}

          <div className="md:col-span-2 flex gap-3 pt-2">
            <button type="submit" className="px-6 py-2.5 rounded-xl bg-[#264236] text-white text-[13px] hover:bg-[#1a3328] transition-colors cursor-pointer" style={{ fontWeight: 600 }}>
              Save Changes
            </button>
            <button type="button" className="px-6 py-2.5 rounded-xl border border-[#e5e5e5] text-[#6B6B6B] text-[13px] hover:border-[#C8A08C] transition-colors cursor-pointer" style={{ fontWeight: 500 }}>
              Change Password
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

/* ─── Address Book ─── */
function AddressBookView() {
  const addresses = [
    { type: "Default shipping", name: "Mark Neiman", street: "Kooli tn 6-28", city: "76904 Tallinn", country: "Estonia", icon: Package },
    { type: "Default billing", name: "Mark Neiman", street: "Kooli tn 6-28", city: "76904 Tallinn", country: "Estonia", icon: FileText },
  ];

  return (
    <div className="space-y-5">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
        <div>
          <h2 className="text-[#1A1A1A]" style={{ fontSize: 24, fontWeight: 800 }}>Address Book</h2>
          <p className="text-[13px] text-[#999] mt-0.5">{addresses.length} saved addresses</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#264236] text-white text-[13px] hover:bg-[#1a3328] transition-colors cursor-pointer" style={{ fontWeight: 600 }}>
          <MapPin size={14} /> Add Address
        </button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {addresses.map((addr, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 * i, duration: 0.35 }}
            className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.08)] transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-[#264236] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-9 h-9 rounded-xl bg-[#264236]/8 flex items-center justify-center">
                <addr.icon size={16} className="text-[#264236]" />
              </span>
              <span className="text-[12px] text-[#264236] bg-[#E8F5E9] px-3 py-1 rounded-full" style={{ fontWeight: 600 }}>
                {addr.type}
              </span>
            </div>
            <div className="text-[13.5px] text-[#3a3a3a] space-y-0.5 mb-4">
              <p style={{ fontWeight: 600 }}>{addr.name}</p>
              <p>{addr.street}</p>
              <p>{addr.city}</p>
              <p>{addr.country}</p>
            </div>
            <div className="flex gap-3">
              <button className="text-[12px] text-[#264236] hover:underline cursor-pointer flex items-center gap-1" style={{ fontWeight: 600 }}>
                <UserCog size={12} /> Edit
              </button>
              <button className="text-[12px] text-[#C8A08C] hover:underline cursor-pointer flex items-center gap-1" style={{ fontWeight: 600 }}>
                <Trash2 size={12} /> Remove
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─── Sales & Offers ─── */
function SalesOffersView() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const offers = [
    { title: "Welcome Back", desc: "Extra 5% off your next order", code: "WELCOME5", active: true, icon: Gift },
    { title: "Free Shipping", desc: "Free shipping on orders over €50 (Estonia)", code: "FREESHIP50", active: true, icon: Package },
    { title: "Holiday Special", desc: "20% off holiday collection", code: "HOLIDAY20", active: true, icon: Sparkles },
    { title: "Spring Sale", desc: "10% off gel polish collection", code: "SPRING10", active: false, icon: Tag },
  ];

  const copyCode = (code: string) => {
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="space-y-5">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-[#1A1A1A]" style={{ fontSize: 24, fontWeight: 800 }}>Sales & Offers</h2>
        <p className="text-[13px] text-[#999] mt-0.5">Your personal promos and active discounts</p>
      </motion.div>

      {/* Summary banner */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="bg-gradient-to-r from-[#264236] to-[#3a6355] rounded-2xl p-6 flex items-center gap-4"
      >
        <span className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
          <Tag size={22} className="text-[#C8A08C]" />
        </span>
        <div className="flex-1">
          <p className="text-white text-[15px]" style={{ fontWeight: 700 }}>You have 3 active offers</p>
          <p className="text-white/50 text-[12.5px] mt-0.5">Apply them at checkout to save on your next order</p>
        </div>
      </motion.div>

      <div className="space-y-3">
        {offers.map((offer, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.08 * i, duration: 0.35 }}
            className={`bg-white rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex items-center justify-between gap-4 transition-all ${
              offer.active ? "hover:shadow-[0_6px_24px_rgba(0,0,0,0.08)]" : "opacity-50"
            }`}
          >
            <div className="flex items-center gap-4">
              <span className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                offer.active ? "bg-gradient-to-br from-[#264236] to-[#3a6355]" : "bg-[#e5e5e5]"
              }`}>
                <offer.icon size={18} className="text-white" />
              </span>
              <div>
                <p className="text-[14.5px] text-[#1A1A1A]" style={{ fontWeight: 600 }}>{offer.title}</p>
                <p className="text-[12.5px] text-[#999]">{offer.desc}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <code className="text-[12px] text-[#264236] bg-[#F0F7F4] px-3 py-1.5 rounded-lg" style={{ fontWeight: 600 }}>{offer.code}</code>
              {offer.active && offer.code !== "AUTO-APPLIED" && (
                <button
                  onClick={() => copyCode(offer.code)}
                  className="w-8 h-8 rounded-lg bg-[#F5F3F1] flex items-center justify-center text-[#999] hover:text-[#264236] hover:bg-[#E8F5E9] transition-all cursor-pointer"
                >
                  {copiedCode === offer.code ? <Check size={14} /> : <Copy size={14} />}
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─── Special Offer ─── */
function SpecialOfferView() {
  const specials = [
    { name: "Gel Polish Holy Molly Pantone 5 11ml", oldPrice: "€5,95", newPrice: "€4,76", discount: "-20%", img: productImages[0] },
    { name: "Base Coat Professional UV/LED 15ml", oldPrice: "€12,90", newPrice: "€10,32", discount: "-20%", img: productImages[1] },
    { name: "Top Coat Matte Finish 11ml", oldPrice: "€8,50", newPrice: "€6,80", discount: "-20%", img: productImages[2] },
  ];

  return (
    <div className="space-y-5">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-[#1A1A1A]" style={{ fontSize: 24, fontWeight: 800 }}>Special Offers</h2>
        <p className="text-[13px] text-[#999] mt-0.5">Personalized discounts from your history</p>
      </motion.div>

      {/* Timer banner */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="bg-gradient-to-r from-[#C8A08C] to-[#b8907c] rounded-2xl p-5 flex items-center gap-4"
      >
        <span className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
          <Zap size={18} className="text-white" />
        </span>
        <div>
          <p className="text-white text-[14px]" style={{ fontWeight: 700 }}>Special offers just for you</p>
          <p className="text-white/60 text-[12px]">Prices below already reflect the discount</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {specials.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * i, duration: 0.35 }}
            className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all group"
          >
            <div className="aspect-square bg-[#F5F3F1] overflow-hidden relative">
              <ImageWithFallback src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute top-3 left-3 bg-[#264236] text-white text-[11px] px-2.5 py-1 rounded-lg" style={{ fontWeight: 700 }}>
                {item.discount}
              </span>
            </div>
            <div className="p-4">
              <p className="text-[13.5px] text-[#1A1A1A] mb-2 line-clamp-2" style={{ fontWeight: 600 }}>{item.name}</p>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[16px] text-[#264236]" style={{ fontWeight: 800 }}>{item.newPrice}</span>
                <span className="text-[13px] text-[#ccc] line-through">{item.oldPrice}</span>
              </div>
              <button className="w-full h-[38px] rounded-xl bg-[#1A1A1A] text-white text-[12.5px] hover:bg-[#264236] transition-colors cursor-pointer relative overflow-hidden group/btn" style={{ fontWeight: 600 }}>
                <span className="relative z-10">Add to Cart</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#C8A08C] to-[#b8907c] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─── Watch History ─── */
function WatchHistoryView() {
  return (
    <div className="space-y-5">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-[#1A1A1A]" style={{ fontSize: 24, fontWeight: 800 }}>Watch History</h2>
        <p className="text-[13px] text-[#999] mt-0.5">Products you recently interacted with</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {watchProducts.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 * i, duration: 0.35 }}
            className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all group"
          >
            <div className="aspect-square bg-[#F5F3F1] overflow-hidden relative">
              <ImageWithFallback src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-3 left-3 right-3">
                <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-[11px] text-[#3a3a3a] shadow-sm" style={{ fontWeight: 500 }}>
                  <ShoppingBag size={11} className="text-[#C8A08C]" />
                  From order <span className="text-[#264236]" style={{ fontWeight: 600 }}>{item.order}</span>
                </span>
              </div>
            </div>
            <div className="p-4">
              <p className="text-[14px] text-[#1A1A1A] mb-1 line-clamp-2" style={{ fontWeight: 600 }}>{item.name}</p>
              <p className="text-[15px] text-[#264236] mb-3" style={{ fontWeight: 700 }}>{item.price}</p>
              <div className="flex gap-2">
                <button className="flex-1 h-[36px] rounded-xl bg-[#1A1A1A] text-white text-[12px] hover:bg-[#264236] transition-colors cursor-pointer" style={{ fontWeight: 600 }}>
                  Buy Again
                </button>
                <button className="w-[36px] h-[36px] rounded-xl border border-[#e5e5e5] flex items-center justify-center text-[#999] hover:border-[#C8A08C] hover:text-[#C8A08C] transition-all cursor-pointer shrink-0">
                  <Heart size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════ */
export function MyAccountPage() {
  const location = useLocation();
  const path = location.pathname;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar on navigation
  useEffect(() => {
    setSidebarOpen(false);
  }, [path]);

  const renderContent = () => {
    if (path === "/account" || path === "/account/") return <DashboardView />;
    if (path === "/account/orders" || path === "/account/orders/") return <OrdersView />;
    if (path.startsWith("/account/orders/")) return <OrderDetailView />;
    if (path === "/account/lists") return <MyListsView />;
    if (path === "/account/info") return <AccountInfoView />;
    if (path === "/account/addresses") return <AddressBookView />;
    if (path === "/account/offers") return <SalesOffersView />;
    if (path === "/account/special-offer") return <SpecialOfferView />;
    if (path === "/account/watch-history") return <WatchHistoryView />;
    if (path === "/account/order-details") return <OrderDetailView />;
    return <DashboardView />;
  };

  return (
    <section className="bg-[#FAFAF9] min-h-[80vh] py-6 sm:py-8 md:py-12 px-4">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-5 sm:gap-7">
        {/* Mobile sidebar toggle */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden flex items-center gap-2 bg-white rounded-xl px-4 py-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-[13px] text-[#1A1A1A] w-fit"
          style={{ fontWeight: 600 }}
        >
          {sidebarOpen ? <X size={16} /> : <Menu size={16} />}
          {sidebarOpen ? "Close Menu" : "Account Menu"}
        </button>

        {/* Sidebar — hidden on mobile unless toggled */}
        <div className={`${sidebarOpen ? "block" : "hidden"} lg:block`}>
          <Sidebar />
        </div>

        <main className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={path}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </section>
  );
}
