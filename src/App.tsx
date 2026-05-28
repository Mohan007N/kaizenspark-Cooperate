import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index          from "./pages/Index";
import About          from "./pages/About";
import Services       from "./pages/Services";
import WebAppDevelopment from "./pages/WebAppDevelopment";
import EnterpriseSolutions from "./pages/EnterpriseSolutions";
import AIAutomation from "./pages/AIAutomation";
import StartupSupport from "./pages/StartupSupport";
import UiUxDesign from "./pages/UiUxDesign";
import BusinessSoftware from "./pages/products/BusinessSoftware";
import Education from "./pages/products/Education";
import IndustrySolutions from "./pages/products/IndustrySolutions";
import AiAutomationProducts from "./pages/products/AiAutomationProducts";
import Partnership    from "./pages/Partnership";
import ReferClient    from "./pages/ReferClient";
import Contact        from "./pages/Contact";
import Careers        from "./pages/Careers";
import ManagedServices from "./pages/ManagedServices";
import Solutions      from "./pages/Solutions";
import PrivacyPolicy  from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy   from "./pages/CookiePolicy";
import NotFound       from "./pages/NotFound";
import CookieConsent  from "./components/CookieConsent";
import Blog           from "./pages/Blog";
import OurWork        from "./pages/OurWork";
import IndustryDetailPage from "./pages/IndustryDetailPage";
import ProductDetailPage from "./pages/products/ProductDetailPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CookieConsent />
        <Routes>
          <Route path="/"               element={<Index />} />
          <Route path="/about"          element={<About />} />
          <Route path="/services"       element={<Services />} />
          <Route path="/services/web-app-development" element={<WebAppDevelopment />} />
          <Route path="/services/enterprise-solutions" element={<EnterpriseSolutions />} />
          <Route path="/services/ai-automation" element={<AIAutomation />} />
          <Route path="/services/startup-support" element={<StartupSupport />} />
          <Route path="/services/ui-ux-design"   element={<UiUxDesign />} />
          
          <Route path="/products/business-software" element={<BusinessSoftware />} />
          <Route path="/products/education"         element={<Education />} />
          <Route path="/products/industry-solutions" element={<IndustrySolutions />} />
          <Route path="/products/ai-automation"     element={<AiAutomationProducts />} />
          
          <Route path="/partnership"     element={<Partnership />} />
          <Route path="/partnership/refer-client" element={<ReferClient />} />
          <Route path="/contact"        element={<Contact />} />
          <Route path="/careers"        element={<Careers />} />
          <Route path="/managed-services" element={<ManagedServices />} />
          <Route path="/solutions"      element={<Solutions />} />
          <Route path="/our-work"       element={<OurWork />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy"  element={<CookiePolicy />} />
          <Route path="/blog"           element={<Blog />} />
          <Route path="/industries/:id"  element={<IndustryDetailPage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="*"               element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
