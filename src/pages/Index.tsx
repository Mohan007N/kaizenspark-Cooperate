import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedCompanies from "@/components/TrustedCompanies";
import BusinessEmailSection from "@/components/BusinessEmailSection";
import ServicesShowcase from "@/components/ServicesShowcase";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BookOpen, Zap, Settings, ArrowRight, ChevronDown, Send } from "lucide-react";
import TechStackMarquee from "@/components/TechStackMarquee";
import ClientStoriesMarquee from "@/components/ClientStoriesMarquee";
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

const faqs = [
  {
    q: "What services does KaizenSpark offer?",
    a: "We offer end-to-end digital services including Web & App Development, UI/UX Design, Digital Marketing, Enterprise Solutions (ERP/CRM), AI & Automation, and Startup Support — all under one roof."
  },
  {
    q: "How long does a typical project take?",
    a: "It depends on scope. A landing page or marketing site typically takes 1–2 weeks. A full web application or enterprise platform ranges from 4–12 weeks. We work in agile sprints and share progress weekly."
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes. Every project includes a post-launch warranty period, and we offer dedicated SLA-based maintenance plans covering uptime monitoring, security patches, and iterative feature updates."
  },
  {
    q: "What technologies do you use?",
    a: "Our stack includes React, Next.js, TypeScript, Node.js, PostgreSQL, MongoDB, AWS, Docker, and more. We choose the right technology for each project — not the trendiest one."
  },
  {
    q: "How much does it cost to work with KaizenSpark?",
    a: "Our pricing depends on project complexity, timeline, and requirements. We offer transparent, milestone-based pricing. Contact us for a free consultation and rough estimate within 24 hours."
  },
  {
    q: "Do you work with startups and student projects?",
    a: "Absolutely. We love working with early-stage startups and passionate founders. We have special packages for MVPs and student-led ventures to get you launched affordably and professionally."
  },
  {
    q: "Can you help with SEO and digital marketing?",
    a: "Yes — our dedicated marketing team handles SEO, SEM, social media, content marketing, and performance advertising to grow your online presence and deliver measurable results."
  },
  {
    q: "How do I get started?",
    a: "Simply reach out via our Contact page or call us directly. We'll schedule a free discovery call, understand your requirements, and send you a tailored proposal within 24 hours."
  },
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
    <div className="relative">
      <ScrollProgress />
      <Navbar />
      <main className="relative">
        {/* Hero */}
        <HeroSection />

        {/* Trusted companies ticker */}
        <TrustedCompanies />

        {/* What We Do – Services */}
        <ServicesShowcase />

        {/* Business Email Package */}
        <BusinessEmailSection />

        {/* Tech Stack Marquee */}
        <TechStackMarquee />
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

        {/* Client Stories */}
        <ClientStoriesMarquee />

        {/* ── FAQ SECTION ── */}
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
                Frequently asked{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">questions</span>
              </h2>
              <p className="text-slate-400 text-sm">Everything you need to know about working with KaizenSpark.</p>
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

        {/* ── NEWSLETTER SECTION ── */}
        <section className="relative py-16 border-t border-slate-900 bg-slate-950/60">
          <div className="container max-w-xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-white mb-1">Stay in the loop</h3>
              <p className="text-slate-400 text-sm mb-6">
                Get the latest from KaizenSpark — tips, updates, and exclusive offers.
              </p>

              {newsSent ? (
                <motion.p
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-emerald-400 font-semibold text-sm"
                >
                  ✓ You're subscribed! Welcome to the community.
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
                    placeholder="you@example.com"
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
      </main>
      <Footer />
    </div>
  );
};

export default Index;
