import { createBrowserRouter } from "react-router";
import { Layout } from "./Layout";
import { HomePage } from "./pages/HomePage";
import { CatalogPage } from "./pages/CatalogPage";
import { ProductPage } from "./pages/ProductPage";
import { PlaceholderPage } from "./pages/PlaceholderPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { BlogPage } from "./pages/BlogPage";
import { BlogPostPage } from "./pages/BlogPostPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsPage } from "./pages/TermsPage";
import { CookieSettingsPage } from "./pages/CookieSettingsPage";
import { HelpCenterPage } from "./pages/HelpCenterPage";
import { ShippingInfoPage } from "./pages/ShippingInfoPage";
import { ReturnsPage } from "./pages/ReturnsPage";
import { TrackOrderPage } from "./pages/TrackOrderPage";
import { B2BProgramPage } from "./pages/B2BProgramPage";
import { SearchPage } from "./pages/SearchPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { MyAccountPage } from "./pages/MyAccountPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "catalog", Component: CatalogPage },
      { path: "search", Component: SearchPage },
      { path: "product", Component: ProductPage },
      { path: "product/:id", Component: ProductPage },
      { path: "cart", Component: CheckoutPage },
      { path: "blog", Component: BlogPage },
      { path: "blog/:slug", Component: BlogPostPage },
      { path: "about", Component: AboutPage },
      { path: "contact", Component: ContactPage },
      { path: "privacy", Component: PrivacyPolicyPage },
      { path: "terms", Component: TermsPage },
      { path: "cookies", Component: CookieSettingsPage },
      { path: "help", Component: HelpCenterPage },
      { path: "shipping", Component: ShippingInfoPage },
      { path: "returns", Component: ReturnsPage },
      { path: "track-order", Component: TrackOrderPage },
      { path: "b2b", Component: B2BProgramPage },
      { path: "login", Component: LoginPage },
      { path: "register", Component: RegisterPage },
      { path: "account", Component: MyAccountPage },
      { path: "account/*", Component: MyAccountPage },
      { path: "*", Component: PlaceholderPage },
    ],
  },
]);