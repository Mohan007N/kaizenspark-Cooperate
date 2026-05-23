import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe, Laptop, Smartphone, Cpu, Layers, Database, 
  ChevronRight, Sparkles, CheckCircle2, ChevronDown, 
  Mail, Phone, MapPin, Send, HelpCircle, ArrowUpRight, 
  Clock, ShieldAlert, Rocket, Check, ArrowRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { useToast } from "@/components/ui/use-toast";
import { sendEmail } from "@/utils/sendEmail";

// ── TechPill sub-component ──────────────────────────────────────────────────
const TechPill = ({ tech }: { tech: { name: string; icon: string; color: string; glow: string } }) => (
  <motion.div
    whileHover={{ y: -4, scale: 1.04 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className={`relative flex items-center gap-3 py-3 px-5 border rounded-2xl font-semibold text-sm tracking-wide cursor-default flex-shrink-0 select-none ${tech.color}`}
    style={{ boxShadow: `0 0 0 0 ${tech.glow}` }}
  >
    {/* Hover glow */}
    <motion.div
      className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
      whileHover={{ opacity: 1 }}
      style={{ background: `radial-gradient(circle at 50% 50%, ${tech.glow}, transparent 70%)` }}
    />
    <span className="text-base leading-none">{tech.icon}</span>
    <span className="relative z-10">{tech.name}</span>
  </motion.div>
);
// ─────────────────────────────────────────────────────────────────────────────

const WebAppDevelopment = () => {
  const navigate = useNavigate();
  const { hash } = useLocation();
  const { toast } = useToast();

  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", details: "" });
  const [submitting, setSubmitting] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsSubmitting, setNewsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    if (hash) {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    }
  }, [hash]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast({
        title: "Missing fields",
        description: "Please fill out your name and email address so we can reach you.",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    try {
      const result = await sendEmail({
        name: formData.name,
        email: formData.email,
        service: "Web & App Development Quote Inquiry",
        message: formData.details || "Requesting a discovery call / consultation.",
      });
      if (result.success) {
        toast({
          title: "Quote request sent!",
          description: `Thank you ${formData.name}. Our tech team will review your scope and contact you within 24 hours.`,
        });
        setFormData({ name: "", email: "", details: "" });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again or contact us directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsSubmitting(true);
    try {
      const result = await sendEmail({
        name: "Newsletter Subscriber",
        email: newsletterEmail,
        service: "Newsletter Subscription",
        message: `New subscriber email: ${newsletterEmail}`,
      });
      if (result.success) {
        toast({
          title: "Successfully Subscribed!",
          description: "Welcome to the KaizenSpark Tech newsletter community.",
        });
        setNewsletterEmail("");
      } else {
        toast({
          title: "Subscription failed",
          description: "Please check your connection and try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setNewsSubmitting(false);
    }
  };

  const stats = [
    { number: "150+", label: "Websites Delivered", desc: "Crafted to pixel-perfection" },
    { number: "99.9%", label: "Uptime SLA", desc: "Reliable cloud infrastructure" },
    { number: "3×", label: "Avg. Performance Gain", desc: "Lightning fast page speeds" },
    { number: "2 Weeks", label: "Avg. Time to First Deploy", desc: "Rapid prototype velocity" }
  ];

  const buildItems = [
    {
      id: "static-dynamic-websites",
      title: "Static & Dynamic Websites",
      desc: "Lightning-fast static sites and dynamic web applications built with Next.js, React, and modern frameworks that scale effortlessly.",
      tags: ["Next.js", "React", "TypeScript"],
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      glow: "rgba(59,130,246,0.15)"
    },
    {
      id: "e-commerce-platforms",
      title: "E-Commerce Platforms",
      desc: "Full-featured online stores with payment gateways, inventory management, and mobile-first shopping experiences.",
      tags: ["WooCommerce", "Shopify", "Custom"],
      icon: Layers,
      color: "from-indigo-500 to-purple-500",
      glow: "rgba(99,102,241,0.15)"
    },
    {
      id: "mobile-applications",
      title: "Mobile Applications",
      desc: "Native and cross-platform iOS & Android apps that deliver smooth, performant experiences users love.",
      tags: ["React Native", "Flutter", "Swift / Kotlin"],
      icon: Smartphone,
      color: "from-fuchsia-500 to-pink-500",
      glow: "rgba(217,70,239,0.15)"
    },
    {
      id: "progressive-web-apps",
      title: "Progressive Web Apps",
      desc: "App-like experiences on the web — offline support, push notifications, and near-native performance.",
      tags: ["PWA", "Service Workers", "Web Push"],
      icon: Cpu,
      color: "from-emerald-500 to-teal-500",
      glow: "rgba(16,185,129,0.15)"
    },
    {
      id: "custom-web-platforms",
      title: "Custom Web Platforms",
      desc: "Bespoke SaaS products, portals, dashboards and enterprise platforms built end-to-end to your spec.",
      tags: ["SaaS", "Portals", "Dashboards"],
      icon: Database,
      color: "from-amber-500 to-orange-500",
      glow: "rgba(245,158,11,0.15)"
    },
    {
      id: "no-code-low-code",
      title: "No-Code & Low-Code",
      desc: "Rapid delivery using Webflow, Framer, Bubble and similar platforms — perfect for MVPs and marketing sites.",
      tags: ["Webflow", "Framer", "Bubble"],
      icon: Laptop,
      color: "from-rose-500 to-red-500",
      glow: "rgba(244,63,94,0.15)"
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Discovery & Scope",
      desc: "We deep-dive into your business, goals, and users to define a clear project scope and technical roadmap."
    },
    {
      num: "02",
      title: "Design & Prototype",
      desc: "Wireframes and high-fidelity Figma prototypes are reviewed and approved before a single line of code is written."
    },
    {
      num: "03",
      title: "Development",
      desc: "Agile sprints with weekly demos. You're always in the loop as features are built and iterated."
    },
    {
      num: "04",
      title: "QA & Testing",
      desc: "Cross-device, cross-browser, and performance testing ensures everything works perfectly before launch."
    },
    {
      num: "05",
      title: "Launch & Deploy",
      desc: "Smooth deployment to your preferred cloud provider with CI/CD pipelines and zero-downtime rollouts."
    },
    {
      num: "06",
      title: "Support & Growth",
      desc: "Post-launch monitoring, maintenance, and feature additions to keep your product competitive."
    }
  ];

  const techStack = [
    { name: "Next.js",      icon: "▲", color: "border-white/10 text-white bg-white/5",           glow: "rgba(255,255,255,0.08)" },
    { name: "React",        icon: "⚛", color: "border-blue-500/20 text-blue-400 bg-blue-500/5",   glow: "rgba(59,130,246,0.12)" },
    { name: "TypeScript",   icon: "TS", color: "border-cyan-500/20 text-cyan-400 bg-cyan-500/5",   glow: "rgba(6,182,212,0.12)" },
    { name: "Node.js",      icon: "⬡", color: "border-green-500/20 text-green-400 bg-green-500/5", glow: "rgba(34,197,94,0.12)" },
    { name: "PostgreSQL",   icon: "🐘", color: "border-indigo-500/20 text-indigo-400 bg-indigo-500/5", glow: "rgba(99,102,241,0.12)" },
    { name: "MongoDB",      icon: "🍃", color: "border-emerald-500/20 text-emerald-400 bg-emerald-500/5", glow: "rgba(16,185,129,0.12)" },
    { name: "Tailwind CSS", icon: "🌊", color: "border-sky-500/20 text-sky-400 bg-sky-500/5",       glow: "rgba(14,165,233,0.12)" },
    { name: "Prisma",       icon: "◈", color: "border-violet-500/20 text-violet-400 bg-violet-500/5", glow: "rgba(139,92,246,0.12)" },
    { name: "AWS",          icon: "☁", color: "border-orange-500/20 text-orange-400 bg-orange-500/5", glow: "rgba(249,115,22,0.12)" },
    { name: "Vercel",       icon: "▲", color: "border-slate-400/20 text-slate-300 bg-slate-400/5",  glow: "rgba(148,163,184,0.08)" },
    { name: "Docker",       icon: "🐳", color: "border-blue-400/20 text-blue-300 bg-blue-400/5",    glow: "rgba(96,165,250,0.12)" },
    { name: "Redis",        icon: "⚡", color: "border-rose-500/20 text-rose-400 bg-rose-500/5",    glow: "rgba(244,63,94,0.12)" }
  ];

  const whyChooseUs = [
    {
      title: "Fast Delivery",
      desc: "Agile sprints with weekly demos. No month-long silences.",
      icon: Clock,
      color: "text-blue-400"
    },
    {
      title: "Secure by Default",
      desc: "HTTPS, auth best practices, input validation — baked in from day one.",
      icon: ShieldAlert,
      color: "text-emerald-400"
    },
    {
      title: "Performance First",
      desc: "Every project targets 90+ Lighthouse scores and Core Web Vitals.",
      icon: Rocket,
      color: "text-fuchsia-400"
    },
    {
      title: "On-Time, Every Time",
      desc: "Clear timelines, no scope creep, and on-budget delivery.",
      icon: CheckCircle2,
      color: "text-amber-400"
    }
  ];

  const faqs = [
    {
      q: "How long does it take to build a website?",
      a: "Typically, a standard landing page or marketing site takes 1-2 weeks. A more complex dynamic web application or E-Commerce platform spans 4-8 weeks. We operate in highly structured Agile sprints and ship live test links weekly so you see continuous progress."
    },
    {
      q: "Do you build mobile apps too?",
      a: "Yes! We specialize in native iOS & Android applications using Swift and Kotlin, as well as cross-platform mobile apps using React Native and Flutter. We can also package your web app as a high-performance Progressive Web App (PWA)."
    },
    {
      q: "Will my website be SEO-friendly?",
      a: "Absolutely. SEO and Core Web Vitals are integrated into our core build methodology. We write semantic HTML, structure schema metadata, implement server-side rendering (SSR) via Next.js, and guarantee lightning-fast load times for organic rank superiority."
    },
    {
      q: "Can I update the content myself after launch?",
      a: "Yes. We regularly connect modern headless CMS options (like Sanity, Strapi, or Contentful) or standard platforms (Shopify/WordPress) to give your non-technical marketing or sales teams full, easy editing powers over all visual contents and blogs."
    },
    {
      q: "What happens after the website goes live?",
      a: "We never just 'hand off' and disappear. Every contract comes with an initial post-launch warranty support period. We also offer dedicated ongoing SLAs covering uptime hosting maintenance, active security audits, code updates, and iterative feature launches."
    }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans selection:bg-blue-500/30 selection:text-blue-200">
      <ScrollProgress />
      <Navbar />

      {/* ── HERO SECTION ── */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        {/* Animated backdrop grid & orbs */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-blue-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="container relative z-10 text-center max-w-5xl mx-auto px-4">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles size={12} className="animate-spin-slow" />
            Web & App Development
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6"
          >
            Build Digital Products
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              That Actually Ship
            </span>
          </motion.h1>

          {/* Intro paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            From fast marketing sites to complex SaaS platforms and mobile apps — we design, build, and launch digital products that perform.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <a
              href="#contact-quote"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Start a Project
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#our-process"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-slate-800 hover:border-slate-700 bg-slate-900/50 hover:bg-slate-900 text-slate-300 hover:text-white font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2"
            >
              See How We Work
            </a>
          </motion.div>

          {/* Metrics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm text-left"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-extrabold text-white bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent mb-1">
                  {stat.number}
                </span>
                <span className="text-xs sm:text-sm font-bold text-blue-400 mb-0.5">
                  {stat.label}
                </span>
                <span className="text-[10px] sm:text-xs text-slate-500">
                  {stat.desc}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHAT WE BUILD SECTION ── */}
      <section id="what-we-build" className="py-24 border-t border-slate-900 relative">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 mb-3">
              What We Build
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Every Type of Digital Product
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Whether you need a landing page or an enterprise platform, our full-stack team has you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buildItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  id={item.id}
                  key={item.id}
                  className="group relative bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full"
                  style={{
                    boxShadow: `inset 0 1px 0 0 rgba(255,255,255,0.02)`
                  }}
                >
                  {/* Subtle hover glow circle */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${item.glow}, transparent 60%)`
                    }}
                  />

                  {/* Icon Bubble */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6 shadow-md shadow-black/40`}>
                    <Icon size={20} />
                  </div>

                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h4>
                  
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 flex-grow">
                    {item.desc}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-900 mt-auto">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── OUR PROCESS SECTION ── */}
      <section id="our-process" className="py-24 bg-slate-950 border-t border-slate-900 relative">
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 mb-3">
              Our Process
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              How We Deliver
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              A battle-tested process built for clarity, speed, and quality at every step.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {processSteps.map((step, idx) => (
              <div 
                key={step.num}
                className="relative bg-slate-900/20 border border-slate-800/50 hover:border-slate-800 rounded-2xl p-6 group transition-all duration-300"
              >
                {/* Numeric Indicator */}
                <div className="text-4xl font-black text-slate-800 group-hover:text-blue-500/20 transition-colors duration-300 mb-4 select-none">
                  {step.num}
                </div>
                
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h4>
                
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK SECTION ── */}
      <section id="tech-stack" className="py-24 border-t border-slate-900 relative bg-slate-900/10 overflow-hidden">
        {/* ambient orbs */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container max-w-5xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 mb-3">
              Tech Stack
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Built With Industry-Best Tools
            </h3>
            <p className="text-slate-400 text-sm sm:text-base">
              We choose the right technology for each project — not the trendiest one.
            </p>
          </motion.div>
        </div>

        {/* ── Marquee rows ── */}
        {/* Edge fade masks */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #020617 0%, transparent 100%)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #020617 0%, transparent 100%)" }} />

          {/* Row 1 — scrolls left */}
          <div className="flex gap-4 mb-4 overflow-hidden">
            <motion.div
              className="flex gap-4 flex-shrink-0"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
            >
              {[...techStack, ...techStack].map((tech, i) => (
                <TechPill key={`r1-${i}`} tech={tech} />
              ))}
            </motion.div>
          </div>

          {/* Row 2 — scrolls right */}
          <div className="flex gap-4 overflow-hidden">
            <motion.div
              className="flex gap-4 flex-shrink-0"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
            >
              {[...techStack.slice(6), ...techStack.slice(0, 6), ...techStack.slice(6), ...techStack.slice(0, 6)].map((tech, i) => (
                <TechPill key={`r2-${i}`} tech={tech} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY KAIZENSPARK SECTION ── */}
      <section id="why-kaizenspark" className="py-24 border-t border-slate-900 relative bg-slate-950">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 mb-3">
              Why KaizenSpark Tech
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Why Businesses Choose Us
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-slate-900/35 border border-slate-800/80 rounded-2xl p-6 flex gap-4 hover:border-slate-800 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center flex-shrink-0 ${item.color}`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1.5">{item.title}</h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section id="faq" className="py-24 border-t border-slate-900 relative">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 mb-3">
              FAQ
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Common Questions
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-900/30 border border-slate-800/50 rounded-2xl overflow-hidden transition-colors hover:border-slate-800"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-sm sm:text-base text-slate-100 hover:text-white"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle size={16} className="text-blue-500" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-slate-500 transition-transform duration-300 flex-shrink-0 ml-4 ${
                      activeFaq === idx ? "rotate-180 text-blue-400" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-5 pt-1 text-slate-400 text-xs sm:text-sm leading-relaxed border-t border-slate-900">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / QUOTE FORM SECTION ── */}
      <section id="contact-quote" className="py-24 border-t border-slate-900 bg-slate-950 relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container max-w-4xl mx-auto px-4 relative z-10">
          <div className="bg-slate-900/40 border border-slate-800/70 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent leading-tight">
                  Ready to Build Something Great?
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  Tell us about your project and get a free consultation and rough estimate within 24 hours.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0" />
                    Dedicated engineering experts
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0" />
                    No monthly hidden fees
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0" />
                    Targeting 90+ lighthouse scores
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500/80 text-white text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Work Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500/80 text-white text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Project Details
                  </label>
                  <textarea
                    rows={3}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="What are you looking to build?"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500/80 text-white text-sm outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/40 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10 cursor-pointer"
                >
                  {submitting ? (
                    "Sending Scope..."
                  ) : (
                    <>
                      Get a Free Quote
                      <ChevronRight size={14} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER SUBSCRIBE SECTION ── */}
      <section className="py-16 border-t border-slate-900 bg-slate-950/40 relative">
        <div className="container max-w-xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-2 text-white">Stay in the loop</h3>
          <p className="text-slate-400 text-xs sm:text-sm mb-6">
            Get the latest from KaizenSpark Tech — tips, updates, and exclusive offers.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-grow px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500/80 text-white text-sm outline-none transition-colors"
            />
            <button
              type="submit"
              disabled={newsSubmitting}
              className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-white text-slate-950 font-bold text-sm transition-colors flex-shrink-0 cursor-pointer disabled:opacity-50"
            >
              {newsSubmitting ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebAppDevelopment;
