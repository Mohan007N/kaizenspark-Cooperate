import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedCompanies from "@/components/TrustedCompanies";
import DifferenceSection from "@/components/DifferenceSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BookOpen, Zap, Settings, ArrowRight } from "lucide-react";

const quickLinks = [
  {
    icon: BookOpen,
    title: "About KaizenSpark",
    desc: "Learn who we are, our values, and the enterprise engineering mindset we bring to every project.",
    href: "/about",
    color: "from-blue-500 to-cyan-500",
    border: "border-blue-500/20",
  },
  {
    icon: Zap,
    title: "Our Services",
    desc: "Infrastructure, cloud, security, AI automation, managed IT support, and custom ERP/CRM — all in one integrator.",
    href: "/services",
    color: "from-indigo-500 to-violet-500",
    border: "border-indigo-500/20",
  },
  {
    icon: Settings,
    title: "Our Process",
    desc: "See how we take you from discovery and architecture through deployment, QA, and ongoing managed support.",
    href: "/process",
    color: "from-emerald-500 to-teal-500",
    border: "border-emerald-500/20",
  },
];

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="relative">
      <ScrollProgress />
      <Navbar />
      <main className="relative">
        {/* Hero */}
        <HeroSection />

        {/* Trusted companies ticker */}
        <TrustedCompanies />

        {/* The vConnect IQ Difference Section */}
        <DifferenceSection />

        {/* Quick-nav cards */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Explore{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  KaizenSpark Tech
                </span>
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                Enterprise IT solutions designed, deployed, and operated for businesses that demand reliability and scale.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {quickLinks.map((ql, i) => {
                const Icon = ql.icon;
                return (
                  <motion.div
                    key={ql.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.5 }}
                    whileHover={{ y: -6 }}
                    className="group"
                  >
                    <button
                      onClick={() => navigate(ql.href)}
                      className={`w-full h-full text-left bg-gradient-to-br from-slate-900/90 to-slate-950/90 border ${ql.border} rounded-2xl p-7 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-opacity-60 flex flex-col relative`}
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ql.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-[16px] font-bold text-white mb-2.5 group-hover:text-blue-300 transition-colors">
                        {ql.title}
                      </h3>
                      <p className="text-slate-400 text-[13px] leading-relaxed flex-1">{ql.desc}</p>
                      <div className="flex items-center gap-1.5 mt-5 text-[12px] font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                        Explore <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
