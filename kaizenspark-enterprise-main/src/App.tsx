import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index          from "./pages/Index";
import About          from "./pages/About";
import Services       from "./pages/Services";
import Process        from "./pages/Process";
import Contact        from "./pages/Contact";
import Careers        from "./pages/Careers";
import PrivacyPolicy  from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy   from "./pages/CookiePolicy";
import ManagedServices from "./pages/ManagedServices";
import Solutions      from "./pages/Solutions";
import NotFound       from "./pages/NotFound";
import CookieConsent  from "./components/CookieConsent";

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
          <Route path="/process"        element={<Process />} />
          <Route path="/contact"        element={<Contact />} />
          <Route path="/careers"        element={<Careers />} />
          <Route path="/managed-services" element={<ManagedServices />} />
          <Route path="/solutions"      element={<Solutions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy"  element={<CookiePolicy />} />
          <Route path="*"               element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
