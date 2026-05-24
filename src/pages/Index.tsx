import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedCompanies from "@/components/TrustedCompanies";
import FounderSection from "@/components/FounderSection";
import ServicesShowcase from "@/components/ServicesShowcase";
import EngineeringProcess from "@/components/EngineeringProcess";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import WhyPartnerSection from "@/components/WhyPartnerSection";
import IndustriesSection from "@/components/IndustriesSection";
import GlobalPresence from "@/components/GlobalPresence";
import BusinessEmailSection from "@/components/BusinessEmailSection";
import TechStackMarquee from "@/components/TechStackMarquee";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BookOpen, Zap, Settings, ArrowRight, ChevronDown, Send } from "lucide-react";
import { useScrollReveal } from "@/hooks/useParallax";

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
    title: "Engineering Solutions",
    desc: "Scalable software systems, AI-powered business process automation, cloud architecture, and UI/UX design systems.",
    href: "/services",
    color: "from-indigo-500 to-violet-500",
    border: "border-indigo-500/20",
  },
  {
    icon: Settings,
    title: "Our Process",
    desc: "See how we take you from discovery and architecture through agile deployment, rigorous testing, and managed support.",
    href: "/process",
    color: "from-emerald-500 to-teal-500",
    border: "border-emerald-500/20",
  },
];

const faqs = [
  {
    q: "What engineering solutions does KaizenSpark Tech offer?",
    a: "We design, build, and operate high-scale software systems, custom enterprise ERP/CRM solutions, AI workflow automation platforms, cloud-native deployments (AWS/GCP/Azure), DevOps pipelines, and digital interface systems."
  },
  {
    q: "What is your typical software engineering timeline?",
    a: "Our deliverables are structured in agile sprints. A targeted MVP or specialized automation integration typically launches within 3–4 weeks. Large-scale enterprise platforms or scalable SaaS architecture ranges from 8–16 weeks."
  },
  {
    q: "How do you ensure enterprise-grade security and reliability?",
    a: "All of our systems follow a secure-by-design approach. We implement strict zero-trust network configurations, end-to-end data encryption, continuous CI/CD security scanning, and automatic container backups."
  },
  {
    q: "Do you sign Non-Disclosure Agreements (NDAs)?",
    a: "Yes. To protect your proprietary logic, IP, and company data, we execute comprehensive mutual NDAs before any technical blueprints or architecture requirements are shared."
  },
  {
    q: "Do you offer post-launch managed support?",
    a: "Yes. We offer service-level agreement (SLA) based support covering 24/7 server monitoring, performance optimization, security updates, and iterative feature development."
  },
  {
    q: "How can we get started with a project proposal?",
    a: "Simply book a technical discovery call via our website. Our software architects will discuss your technical requirements, design an initial blueprint, and deliver a comprehensive proposal within 24 hours."
  }
];

const Index = () => {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [newsEmail, setNewsEmail] = useState("");
  const [newsSent, setNewsSent] = useState(false);

  // Activate scroll-reveal for all .scroll-reveal elements site-wide
  useScrollReveal("-80px");

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="relative bg-slate-950 min-h-screen text-slate-100 overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main className="relative">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Trusted Partners (Upgraded Ticker) */}
        <TrustedCompanies />

        {/* 3. Founder Section ("Built by Founders, Not Freelancers") */}
        <FounderSection />

        {/* 4. Engineering Solutions Showcase */}
        <ServicesShowcase />

        {/* 5. Predictable Engineering Process */}
        <EngineeringProcess />

        {/* 6. Case Studies Section (Challenge, Solution, Tech Stack, Hard Metrics) */}
        <CaseStudiesSection />

        {/* 7. Why Partner Section (Traditional vs KaizenSpark Table) */}
        <WhyPartnerSection />

        {/* 8. Industries We Serve Grid */}
        <IndustriesSection />

        {/* 9. Global Presence Section (Flag cards & global reach stats) */}
        <GlobalPresence />

        {/* 10. Tech Stack Marquee */}
        <TechStackMarquee />

        {/* 11. Business Email Onboarding Package */}
        <BusinessEmailSection />

        {/* 12. Quick Navigation Section */}
        <section className="relative py-24 overflow-hidden border-t border-slate-900">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/10 to-slate-950" />
          <div className="container relative z-10 mx-auto px-4">
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
                Enterprise software architecture and infrastructure solutions engineered for reliability, safety, and business value.
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

        {/* 13. Engineering Insights Blog */}
        <BlogSection />

        {/* 14. Client Outcomes Testimonials */}
        <TestimonialsSection />

        {/* 14. Descriptive FAQ Section */}
        <section className="relative py-24 border-t border-slate-900 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-500/4 rounded-full blur-3xl pointer-events-none" />

          <div className="container max-w-3xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-slate-400 text-sm">Everything you need to know about working with KaizenSpark Tech.</p>
            </motion.div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06, duration: 0.45 }}
                  className="bg-slate-900/40 border border-slate-800/60 hover:border-slate-700/80 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left group"
                  >
                    <span className="font-semibold text-sm sm:text-base text-slate-100 group-hover:text-white transition-colors pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-slate-500 flex-shrink-0 transition-transform duration-300 ${
                        activeFaq === idx ? "rotate-180 text-blue-400" : ""
                      }`}
                    />
                  </button>

                  <motion.div
                    initial={false}
                    animate={activeFaq === idx
                      ? { height: "auto", opacity: 1 }
                      : { height: 0,      opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-slate-400 text-sm leading-relaxed border-t border-slate-800/60 pt-4">
                      {faq.a}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 15. Premium Newsletter subscription */}
        <section className="relative py-16 border-t border-slate-900 bg-slate-950/60">
          <div className="container max-w-xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-white mb-1">Stay Updated</h3>
              <p className="text-slate-400 text-sm mb-6">
                Receive technology blueprints, architecture reviews, and engineering insights.
              </p>

              {newsSent ? (
                <motion.p
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-emerald-400 font-semibold text-sm"
                >
                  ✓ Subscribed! Welcome to the KaizenSpark community.
                </motion.p>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); if (newsEmail) { setNewsSent(true); } }}
                  className="flex gap-2 max-w-md mx-auto"
                >
                  <input
                    type="email"
                    required
                    value={newsEmail}
                    onChange={(e) => setNewsEmail(e.target.value)}
                    placeholder="architect@yourcompany.com"
                    className="flex-grow px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-blue-500/60 text-white text-sm outline-none transition-colors placeholder-slate-500"
                  />
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm flex-shrink-0 transition-colors"
                  >
                    <Send size={14} /> Subscribe
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </section>

        {/* 16. Final Scalable Systems CTA */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
