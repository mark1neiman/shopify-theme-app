import { Outlet, ScrollRestoration } from "react-router";
import { DevNavBar } from "./components/DevNavBar";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BlogSection } from "./components/BlogSection";
import { Newsletter } from "./components/TrustBadges";

export function Layout() {
  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <DevNavBar />
      <Header />
      <Outlet />
      <BlogSection />
      <Newsletter />
      <Footer />
      <ScrollRestoration />
    </div>
  );
}