import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ManagedServicesHero from "@/components/managed/ManagedServicesHero";
import PMSSection from "@/components/managed/PMSSection";
import FMSSection from "@/components/managed/FMSSection";
import PMSvsFMS from "@/components/managed/PMSvsFMS";
import SLASection from "@/components/managed/SLASection";
import SupportTiers from "@/components/managed/SupportTiers";
import ManagedFAQ from "@/components/managed/ManagedFAQ";

const ManagedServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      <ScrollProgress />
      <Navbar />
      <main className="relative">
        <ManagedServicesHero />
        <PMSSection />
        <FMSSection />
        <PMSvsFMS />
        <SLASection />
        <SupportTiers />
        <ManagedFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default ManagedServices;
