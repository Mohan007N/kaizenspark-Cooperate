import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import {
  ChevronDown, Send, Users, Trophy, Lightbulb, ShieldCheck,
  Zap, Star, HeartHandshake, ArrowRight, Sparkles, Clock, Globe,
  Database, Cpu, Users2, Code2
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const values = [
  {
    num: "01", icon: Users, title: "Collaboration",
    body: "We believe in the power of teamwork, partnering with our clients to achieve outstanding results through open communication and shared goals.",
  },
  {
    num: "02", icon: Trophy, title: "Excellence",
    body: "We strive for excellence in everything we do, maintaining the highest standards in our industry and constantly pushing boundaries.",
  },
  {
    num: "03", icon: Lightbulb, title: "Innovation",
    body: "We continuously innovate and adapt to stay ahead in our rapidly evolving marketplace, embracing new technologies and methodologies.",
  },
  {
    num: "04", icon: ShieldCheck, title: "Integrity",
    body: "We conduct our business with transparency and ethical practices, building trust with all stakeholders through honesty and reliability.",
  },
];

const advantages = [
  {
    icon: Star, title: "Premium Quality",
    body: "We deliver exceptional results with meticulous attention to detail, ensuring that every project meets our high standards of excellence.",
    tag: "No compromise on quality",
    color: "from-yellow-500 to-amber-500",
    border: "border-yellow-500/20 hover:border-yellow-500/50",
    iconBg: "bg-yellow-500/10 text-yellow-400",
  },
  {
    icon: Zap, title: "Rapid Delivery",
    body: "Our streamlined processes and expert team ensure quick turnaround times without sacrificing quality or attention to detail.",
    tag: "Time-efficient solutions",
    color: "from-blue-500 to-cyan-500",
    border: "border-blue-500/20 hover:border-blue-500/50",
    iconBg: "bg-blue-500/10 text-blue-400",
  },
  {
    icon: HeartHandshake, title: "Dedicated Support",
    body: "We provide exceptional customer service and ongoing support to ensure your long-term success long after project completion.",
    tag: "Always by your side",
    color: "from-emerald-500 to-teal-500",
    border: "border-emerald-500/20 hover:border-emerald-500/50",
    iconBg: "bg-emerald-500/10 text-emerald-400",
  },
];

const highlights = [
  { icon: Lightbulb, label: "Innovation Process", value: "4-Step" },
  { icon: Users,     label: "Industry Experts",   value: "10+"    },
  { icon: Star,      label: "Client Satisfaction", value: "100%"  },
  { icon: Globe,     label: "Global Approach",     value: "24/7"  },
];

const faqs = [
  {
    q: "What makes your company different?",
    a: "KaizenSpark combines deep technical expertise with genuine care for client outcomes. We don't just build software — we become a strategic partner invested in your growth.",
  },
  {
    q: "How do you ensure quality in your work?",
    a: "Every project goes through rigorous design reviews, code reviews, automated testing, and QA cycles before delivery. We also offer a post-launch warranty on all projects.",
  },
  {
    q: "What industries do you serve?",
    a: "We serve startups, SMEs, and enterprises across e-commerce, healthcare, fintech, education, logistics, food & beverage, real estate, and more.",
  },
  {
    q: "How do you approach new projects?",
    a: "We start with a free discovery call to understand your goals, then move into strategy, design, development, testing, and launch — with weekly progress updates throughout.",
  },
  {
    q: "How can I get in touch with your team?",
    a: "You can reach us via our Contact page, email us at officials@kaizensparktech.com, or call +91 91506 84544. We respond within a few hours on business days.",
  },
];

// ─── Fade-in wrapper ──────────────────────────────────────────────────────────
const FadeUp = ({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

// ─── Component ───────────────────────────────────────────────────────────────
const About = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"values" | "mission">("values");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [newsEmail, setNewsEmail] = useState("");
  const [newsSent, setNewsSent] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="relative bg-slate-950 min-h-screen">
      <ScrollProgress />
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/8 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -60, 0], y: [0, 80, 0], scale: [1, 1.25, 1] }}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-3xl"
          />
        </div>

        <div className="container relative z-10 grid lg:grid-cols-2 gap-16 items-center py-24 px-4">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-[11px] text-blue-300 uppercase tracking-widest font-bold">Welcome to Our Story</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-slate-200 bg-clip-text text-transparent block">
                We Create Digital
              </span>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent block">
                Experiences
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-lg"
            >
              KaizenSpark Tech is a dynamic and innovative technology company dedicated to driving digital transformation and empowering businesses to thrive in the digital age — specializing in software development, web development, data analytics, cloud computing, cybersecurity, IoT, and more.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => navigate("/services")}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-sm shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
              >
                Our Services <ArrowRight size={16} />
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800/50 text-slate-300 hover:text-white font-bold text-sm transition-all"
              >
                Contact Us
              </button>
            </motion.div>
          </div>

          {/* Right — visual card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main dark card */}
            <div className="relative bg-slate-900/70 border border-slate-700/50 rounded-3xl p-8 backdrop-blur-xl overflow-hidden">

              {/* Internal grid texture */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none rounded-3xl" />
              <div className="absolute -top-12 -right-12 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

              {/* Floating — Founded In badge (nested for independent float) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute top-6 left-6 z-10"
              >
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                  className="bg-slate-800/95 border border-slate-700/60 rounded-2xl px-4 py-3 shadow-xl shadow-black/40 backdrop-blur-sm"
                >
                  <p className="text-slate-400 text-[10px] font-semibold uppercase tracking-widest">Founded In</p>
                  <p className="text-white text-2xl font-black leading-tight">2024</p>
                </motion.div>
              </motion.div>

              {/* Live indicator */}
              <div className="absolute top-6 right-6 z-10 flex items-center gap-1.5">
                <motion.span
                  animate={{ scale: [1, 1.6, 1], opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-emerald-400 block"
                />
                <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-wider">Live</span>
              </div>

              {/* Center icon with pulsing rings */}
              <div className="flex flex-col items-center text-center pt-14 pb-6">
                <div className="relative flex items-center justify-center w-24 h-24 mb-7">
                  <motion.span
                    animate={{ scale: [1, 1.9], opacity: [0.5, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
                    className="absolute inset-0 rounded-full border border-blue-500/50"
                  />
                  <motion.span
                    animate={{ scale: [1, 1.9], opacity: [0.3, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 0.75 }}
                    className="absolute inset-0 rounded-full border border-cyan-400/30"
                  />
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-600/25 to-cyan-500/20 border border-blue-500/40 flex items-center justify-center shadow-2xl shadow-blue-500/25 cursor-pointer"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-blue-400/10 to-transparent"
                    />
                    <Code2 size={30} className="text-blue-400 relative z-10" />
                  </motion.div>
                </div>

                <h3 className="text-white text-2xl font-extrabold mb-2 tracking-tight">Digital Transformation</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-[220px]">
                  Reimagining the future of digital experiences
                </p>
              </div>

              {/* Three feature cards with individual color accents */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { icon: Database, label: "Data-Driven",  iconColor: "text-blue-400",   iconBg: "bg-blue-500/10",   glow: "rgba(59,130,246,0.18)"  },
                  { icon: Cpu,      label: "AI-Powered",   iconColor: "text-violet-400", iconBg: "bg-violet-500/10", glow: "rgba(139,92,246,0.18)"  },
                  { icon: Users2,   label: "User-Centric", iconColor: "text-cyan-400",   iconBg: "bg-cyan-500/10",   glow: "rgba(6,182,212,0.18)"   },
                ].map(({ icon: Icon, label, iconColor, iconBg, glow }) => (
                  <motion.div
                    key={label}
                    whileHover={{ y: -5, scale: 1.04 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group relative bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 rounded-xl p-3 flex flex-col items-center gap-2 cursor-default overflow-hidden"
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
                      style={{ background: `radial-gradient(circle at 50% 50%, ${glow}, transparent 70%)` }}
                    />
                    <div className={`w-9 h-9 rounded-xl ${iconBg} flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-200`}>
                      <Icon size={17} className={iconColor} />
                    </div>
                    <span className="text-slate-300 text-[11px] font-semibold text-center leading-tight relative z-10 group-hover:text-white transition-colors duration-200">{label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Floating — Client Satisfaction badge (nested for independent float) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute bottom-6 right-6 z-10"
              >
                <motion.div
                  animate={{ y: [0, 7, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="relative bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl px-5 py-3 shadow-2xl shadow-blue-500/40 overflow-hidden"
                >
                  <motion.div
                    animate={{ x: [-50, 130] }}
                    transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
                    className="absolute top-0 bottom-0 w-8 bg-white/25 blur-sm skew-x-[-20deg] pointer-events-none"
                  />
                  <p className="text-blue-100 text-[10px] font-bold uppercase tracking-widest relative z-10">Client Satisfaction</p>
                  <p className="text-white text-3xl font-black leading-tight relative z-10">100%</p>
                </motion.div>
              </motion.div>

              <div className="h-16" />
            </div>

            <div className="absolute -bottom-8 -right-8 w-52 h-52 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -top-8 -left-8 w-44 h-44 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* ── CAREERS CTA — below hero ─────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden border-t border-slate-900 bg-slate-950">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />
        <FadeUp className="relative z-10 text-center max-w-xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles size={12} />
            Join Our Team
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Passionate about innovation?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mb-8 leading-relaxed">
            Join our team and help shape the future of digital solutions.
          </p>
          <motion.button
            onClick={() => navigate("/careers")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-sm shadow-xl shadow-blue-500/25 transition-all"
          >
            View Careers <ArrowRight size={15} />
          </motion.button>
        </FadeUp>
      </section>

      {/* ── VALUES & MISSION ──────────────────────────────────────────────── */}
      <section className="relative py-24 border-t border-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950" />
        <div className="container relative z-10 px-4 max-w-5xl mx-auto">
          <FadeUp className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 mb-3">Who We Are</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Values & Mission
              </span>
            </h2>
            {/* Tab switcher */}
            <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-slate-900/80 border border-slate-800 mt-4">
              {(["values", "mission"] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-lg text-sm font-bold transition-all capitalize ${
                    activeTab === tab
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Our {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </FadeUp>

          <AnimatePresence mode="wait">
            {activeTab === "values" ? (
              <motion.div
                key="values"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="grid sm:grid-cols-2 gap-5"
              >
                {values.map((v, i) => {
                  const Icon = v.icon;
                  return (
                    <motion.div
                      key={v.num}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="bg-slate-900/60 border border-slate-800/70 hover:border-slate-700 rounded-2xl p-6 transition-colors group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <span className="text-[11px] font-black text-slate-600 tracking-widest">{v.num}</span>
                          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mt-1 group-hover:bg-blue-500/20 transition-colors">
                            <Icon size={18} className="text-blue-400" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-base mb-2">{v.title}</h3>
                          <p className="text-slate-400 text-sm leading-relaxed">{v.body}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key="mission"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="bg-slate-900/60 border border-slate-800/70 rounded-3xl p-10 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-500/15 flex items-center justify-center mx-auto mb-6">
                  <Sparkles size={28} className="text-blue-400" />
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-4">Our Mission</h3>
                <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto text-base">
                  At KaizenSpark Tech, our mission is to harness the power of technology to solve complex challenges and unlock new opportunities for our clients. We believe in pushing the boundaries of innovation and leveraging the latest advancements in technology to create value-driven solutions that drive growth, efficiency, and success.
                </p>

                <div className="mt-8 border-t border-slate-800/60 pt-8">
                  <h4 className="text-lg font-bold text-white mb-3">Our Approach</h4>
                  <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto text-base">
                    We adopt a collaborative and customer-centric approach to every project, working closely with our clients to understand their unique needs and challenges. Our team of skilled professionals combines technical expertise with creative thinking to deliver tailored solutions that exceed expectations and deliver tangible results.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── ADVANTAGES ───────────────────────────────────────────────────── */}
      <section className="relative py-24 border-t border-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950" />
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"
        />

        <div className="container relative z-10 px-4">
          <FadeUp className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 mb-3">Our Advantages</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                KaizenSpark?
              </span>
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6">
            {advantages.map((adv, i) => {
              const Icon = adv.icon;
              return (
                <FadeUp key={adv.title} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`h-full bg-slate-900/60 border ${adv.border} rounded-2xl p-7 overflow-hidden group transition-all relative`}
                  >
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${adv.color} opacity-0 group-hover:opacity-[0.04] blur-3xl transition-opacity`} />
                    <div className={`w-12 h-12 rounded-xl ${adv.iconBg} flex items-center justify-center mb-5`}>
                      <Icon size={22} />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{adv.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-5">{adv.body}</p>
                    <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 rounded-full bg-gradient-to-r ${adv.color} bg-opacity-10 text-white/80`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                      {adv.tag}
                    </span>
                  </motion.div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── COMPANY HIGHLIGHTS ───────────────────────────────────────────── */}
      <section className="relative py-20 border-t border-slate-900">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-950" />
        <div className="container relative z-10 px-4">
          <FadeUp className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 mb-3">Company Highlights</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              What Sets Us{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Apart</span>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <FadeUp key={h.label} delay={i * 0.08}>
                  <div className="bg-slate-900/50 border border-slate-800/60 rounded-2xl p-6 text-center group hover:border-blue-500/30 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
                      <Icon size={18} className="text-blue-400" />
                    </div>
                    <p className="text-2xl md:text-3xl font-extrabold text-white mb-1">{h.value}</p>
                    <p className="text-slate-500 text-xs font-semibold">{h.label}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="relative py-24 border-t border-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950" />
        <div className="container relative z-10 px-4 max-w-3xl mx-auto">
          <FadeUp className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 mb-3">Frequently Asked Questions</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
              Get Answers to{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Common Questions
              </span>
            </h2>
          </FadeUp>

          <div className="space-y-3 mb-10">
            {faqs.map((faq, idx) => (
              <FadeUp key={idx} delay={idx * 0.06}>
                <div className="bg-slate-900/40 border border-slate-800/60 hover:border-slate-700/80 rounded-2xl overflow-hidden transition-colors">
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left group"
                  >
                    <span className="font-semibold text-sm sm:text-base text-slate-100 group-hover:text-white transition-colors pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-slate-500 flex-shrink-0 transition-transform duration-300 ${activeFaq === idx ? "rotate-180 text-blue-400" : ""}`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={activeFaq === idx ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-slate-400 text-sm leading-relaxed border-t border-slate-800/60 pt-4">
                      {faq.a}
                    </p>
                  </motion.div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Have more questions */}
          <FadeUp>
            <div className="text-center bg-slate-900/40 border border-slate-800/60 rounded-2xl p-8">
              <p className="text-white font-bold mb-1">Have more questions?</p>
              <p className="text-slate-400 text-sm mb-5">We're here to help with any other questions you might have</p>
              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all"
              >
                Contact Our Team <ArrowRight size={15} />
              </button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CAREERS CTA BANNER ───────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden border-t border-slate-900 bg-slate-950">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-cyan-500/6 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />
        <FadeUp className="relative z-10 text-center max-w-xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles size={12} />
            Join Our Team
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Passionate about innovation?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mb-8 leading-relaxed">
            Join our team and help shape the future of digital solutions.
          </p>
          <motion.button
            onClick={() => navigate("/careers")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-sm shadow-xl shadow-blue-500/25 transition-all"
          >
            View Careers <ArrowRight size={15} />
          </motion.button>
        </FadeUp>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────────────────────────── */}
      <section className="relative py-16 border-t border-slate-900 bg-slate-950/80">
        <div className="container max-w-xl mx-auto px-4 text-center">
          <FadeUp>
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
                onSubmit={(e) => { e.preventDefault(); if (newsEmail) setNewsSent(true); }}
                className="flex gap-2 max-w-md mx-auto"
              >
                <input
                  type="email" required value={newsEmail}
                  onChange={e => setNewsEmail(e.target.value)}
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
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
