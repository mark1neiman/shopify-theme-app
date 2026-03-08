import { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router";
import {
  Home,
  Grid3X3,
  Search,
  ShoppingBag,
  ShoppingCart,
  FileText,
  Users,
  Settings,
  ChevronDown,
  Shield,
  FileCheck,
  Cookie,
  HelpCircle,
  Truck,
  RotateCcw,
  Package,
  Building2,
  LogIn,
  UserPlus,
  User,
  LayoutDashboard,
  Heart,
  UserCog,
  MapPin,
  Tag,
  Sparkles,
  Eye,
  ClipboardList,
} from "lucide-react";

const pages = [
  { path: "/", label: "Home", icon: Home },
  { path: "/catalog", label: "Catalog", icon: Grid3X3 },
  { path: "/search", label: "Search", icon: Search },
  { path: "/product", label: "Product Page", icon: ShoppingBag },
  { path: "/cart", label: "Cart", icon: ShoppingCart },
  { path: "/blog", label: "Blog", icon: FileText },
  { path: "/about", label: "About", icon: Users },
  { path: "/contact", label: "Contact", icon: Settings },
];

const morePages = [
  {
    group: "Legal",
    items: [
      { path: "/privacy", label: "Privacy Policy", icon: Shield },
      { path: "/terms", label: "Terms & Conditions", icon: FileCheck },
      { path: "/cookies", label: "Cookie Settings", icon: Cookie },
    ],
  },
  {
    group: "Support",
    items: [
      { path: "/help", label: "Help Center", icon: HelpCircle },
      { path: "/shipping", label: "Shipping Info", icon: Truck },
      { path: "/returns", label: "Returns & Refunds", icon: RotateCcw },
      { path: "/track-order", label: "Track Order", icon: Package },
    ],
  },
  {
    group: "Programs",
    items: [
      { path: "/b2b", label: "B2B Program", icon: Building2 },
    ],
  },
];

const accountPages = [
  {
    group: "Auth",
    items: [
      { path: "/login", label: "Sign In", icon: LogIn },
      { path: "/register", label: "Create Account", icon: UserPlus },
    ],
  },
  {
    group: "My Account",
    items: [
      { path: "/account", label: "Dashboard", icon: LayoutDashboard },
      { path: "/account/orders", label: "Orders", icon: ShoppingBag },
      { path: "/account/lists", label: "My Lists", icon: Heart },
      { path: "/account/info", label: "Account Info", icon: UserCog },
      { path: "/account/addresses", label: "Address Book", icon: MapPin },
    ],
  },
  {
    group: "Credits & Activity",
    items: [
      { path: "/account/offers", label: "Sales & Offers", icon: Tag },
      { path: "/account/special-offer", label: "Special Offer", icon: Sparkles },
      { path: "/account/watch-history", label: "Watch History", icon: Eye },
      { path: "/account/order-details", label: "Order Details", icon: ClipboardList },
    ],
  },
];

const allMorePaths = morePages.flatMap((g) => g.items.map((i) => i.path));
const allAccountPaths = accountPages.flatMap((g) => g.items.map((i) => i.path));

function Dropdown({
  label,
  groups,
  isActive,
}: {
  label: string;
  groups: { group: string; items: { path: string; label: string; icon: any }[] }[];
  isActive: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[12px] transition-all cursor-pointer ${
          isActive
            ? "bg-white/15 text-white"
            : open
            ? "bg-white/10 text-white/80"
            : "text-white/45 hover:text-white/80 hover:bg-white/5"
        }`}
        style={{ fontWeight: 500 }}
      >
        {label}
        <ChevronDown
          size={11}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1.5 w-[240px] bg-[#242424] rounded-xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.5)] py-2 overflow-hidden">
          {groups.map((group, gi) => (
            <div key={group.group}>
              {gi > 0 && <div className="h-px bg-white/6 mx-3 my-1.5" />}
              <div
                className="px-4 pt-2 pb-1 text-[10px] text-white/25 uppercase tracking-[0.12em]"
                style={{ fontWeight: 600 }}
              >
                {group.group}
              </div>
              {group.items.map(({ path, label, icon: Icon }) => (
                <NavLink
                  key={path}
                  to={path}
                  end={path === "/account"}
                  className={({ isActive }) =>
                    `flex items-center gap-2.5 px-4 py-2 text-[12px] transition-all ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-white/50 hover:text-white hover:bg-white/5"
                    }`
                  }
                  style={{ fontWeight: 500 }}
                >
                  <Icon size={13} className="shrink-0" />
                  {label}
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function DevNavBar() {
  const location = useLocation();

  const isMoreActive = allMorePaths.includes(location.pathname);
  const isAccountActive =
    allAccountPaths.includes(location.pathname) ||
    location.pathname.startsWith("/account");

  return (
    <div className="bg-[#1A1A1A] relative z-[999] hidden lg:block">
      <div className="max-w-[1415px] mx-auto px-6 flex items-center h-[40px] gap-1">
        {/* Label */}
        <span
          className="text-[10px] text-white/30 uppercase tracking-[0.15em] mr-4 shrink-0"
          style={{ fontWeight: 600 }}
        >
          Pages
        </span>

        {/* Main nav links */}
        {pages.map(({ path, label, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[12px] transition-all ${
                isActive
                  ? "bg-white/15 text-white"
                  : "text-white/45 hover:text-white/80 hover:bg-white/5"
              }`
            }
            style={{ fontWeight: 500 }}
            end={path === "/"}
          >
            <Icon size={12} />
            {label}
          </NavLink>
        ))}

        {/* Account dropdown */}
        <Dropdown label="Account" groups={accountPages} isActive={isAccountActive} />

        {/* More dropdown */}
        <Dropdown label="More" groups={morePages} isActive={isMoreActive} />

        {/* Right — status */}
        <div className="ml-auto flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-[10px] text-white/25 uppercase tracking-[0.1em]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Dev Preview
          </span>
        </div>
      </div>
    </div>
  );
}