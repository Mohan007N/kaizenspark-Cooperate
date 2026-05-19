import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ProcessSection from "@/components/ProcessSection";

const Process = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="relative">
      <ScrollProgress />
      <Navbar />
      <main className="relative pt-20">
        <ProcessSection />
      </main>
      <Footer />
    </div>
  );
};

export default Process;
