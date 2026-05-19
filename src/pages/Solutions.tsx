import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import SolutionsCapabilities from "@/components/solutions/SolutionsCapabilities";
import SolutionCategories from "@/components/solutions/SolutionCategories";
import SolutionsFAQ from "@/components/solutions/SolutionsFAQ";

const Solutions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      <ScrollProgress />
      <Navbar />
      <main className="relative">
        <SolutionsHero />
        <SolutionsCapabilities />
        <SolutionCategories />
        <SolutionsFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
