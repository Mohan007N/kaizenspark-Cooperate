import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe, Laptop, Smartphone, Layers, Cpu, ShieldCheck, 
  ChevronRight, Sparkles, CheckCircle2, ChevronDown, 
  Send, HelpCircle, ArrowUpRight, Phone, Mail, MapPin, 
  ShieldAlert, Rocket, Check, ArrowRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { useToast } from "@/components/ui/use-toast";
import { sendEmail } from "@/utils/sendEmail";

const UiUxDesign = () => {
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
        service: "UI/UX Design Consultation",
        message: formData.details || "Requesting a design brief consultation.",
      });
      if (result.success) {
        toast({
          title: "Design Brief received!",
          description: `Thank you ${formData.name}. Our design lead will review your scope and contact you within 24 hours.`,
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
    { number: "200+", label: "Screens Designed", desc: "For apps, SaaS, & platforms" },
    { number: "4.9★", label: "Client Satisfaction", desc: "Uncompromised design quality" },
    { number: "40%", label: "Avg. Conversion Lift", desc: "User journeys optimized to perform" },
    { number: "48hr", label: "First Concepts Turnaround", desc: "Speed and agility built-in" }
  ];

  const buildItems = [
    {
      id: "web-design",
      title: "Web UI/UX Design",
      desc: "Beautiful, conversion-optimised website designs — from landing pages to complex web apps. Built in Figma, ready for any developer.",
      tags: ["Figma", "Web Design", "Responsive"],
      icon: Laptop,
      color: "from-blue-500 to-indigo-500",
      glow: "rgba(59,130,246,0.15)"
    },
    {
      id: "app-design",
      title: "Mobile App Design",
      desc: "Intuitive iOS and Android app interfaces that follow platform guidelines while standing out from the competition.",
      tags: ["iOS HIG", "Material Design", "Prototyping"],
      icon: Smartphone,
      color: "from-purple-500 to-indigo-500",
      glow: "rgba(139,92,246,0.15)"
    },
    {
      id: "brand-identity",
      title: "Brand Identity & Logo",
      desc: "Logos, colour systems, typography, and brand guidelines that build a consistent, memorable identity across every touchpoint.",
      tags: ["Logo Design", "Brand Book", "Typography"],
      icon: Layers,
      color: "from-emerald-500 to-teal-500",
      glow: "rgba(16,185,129,0.15)"
    },
    {
      id: "design-systems",
      title: "Design Systems",
      desc: "Scalable component libraries and design tokens that keep your product consistent and your team moving fast.",
      tags: ["Figma Libraries", "Tokens", "Documentation"],
      icon: Cpu,
      color: "from-amber-500 to-orange-500",
      glow: "rgba(245,158,11,0.15)"
    },
    {
      id: "interactive-prototyping",
      title: "Interactive Prototyping",
      desc: "High-fidelity, clickable prototypes that let you test user flows and gather feedback before a line of code is written.",
      tags: ["Figma Proto", "User Testing", "Flows"],
      icon: Layers,
      color: "from-cyan-500 to-blue-500",
      glow: "rgba(6,182,212,0.15)"
    },
    {
      id: "ux-audits-redesigns",
      title: "UX Audits & Redesigns",
      desc: "We analyse your existing product, identify friction points, and deliver a prioritised improvement roadmap with redesign concepts.",
      tags: ["Heuristic Review", "Audit Report", "Redesign"],
      icon: ShieldCheck,
      color: "from-rose-500 to-pink-500",
      glow: "rgba(244,63,94,0.15)"
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Research & Empathy",
      desc: "User interviews, competitor analysis, and market research to understand your users deeply before designing anything."
    },
    {
      num: "02",
      title: "Information Architecture",
      desc: "Sitemaps, user flows, and content hierarchy that make navigation intuitive and logical."
    },
    {
      num: "03",
      title: "Wireframes",
      desc: "Low-fidelity wireframes establish layout and structure without distraction from visual design."
    },
    {
      num: "04",
      title: "Visual Design",
      desc: "High-fidelity designs with your brand's colour, typography, and motion language applied to every screen."
    },
    {
      num: "05",
      title: "Prototype & Test",
      desc: "Interactive prototypes tested with real users to validate flows and spot friction before development."
    },
    {
      num: "06",
      title: "Developer Handoff",
      desc: "Annotated specs, organised Figma files, and exported assets that make development seamless."
    }
  ];

  const projectDeliverables = [
    "Figma source files (fully organised)",
    "Component library & design tokens",
    "Interactive prototype link",
    "Style guide / brand book",
    "Developer handoff notes",
    "User flow diagrams",
    "Responsive screen variants",
    "Icon & asset exports"
  ];

  const whyChooseUs = [
    {
      title: "Research-Led",
      desc: "Every decision is backed by user data, not personal taste.",
      icon: Check,
      color: "text-blue-400"
    },
    {
      title: "Fast Iterations",
      desc: "First concepts within 48 hours. Revisions in 24 hours.",
      icon: Rocket,
      color: "text-emerald-400"
    },
    {
      title: "User-Centric",
      desc: "We design for your users, not for design awards.",
      icon: Globe,
      color: "text-cyan-400"
    },
    {
      title: "Brand Cohesive",
      desc: "Every pixel reflects your brand's voice and personality.",
      icon: Cpu,
      color: "text-amber-400"
    }
  ];

  const faqs = [
    {
      q: "Do you design for both web and mobile?",
      a: "Yes. We design high-performance responsive web pages, custom complex SaaS dashboard layouts, and fully optimized iOS & Android mobile application designs that conform directly to platform human interface rules (iOS HIG and Material Design)."
    },
    {
      q: "What tools do you use?",
      a: "Our industry-standard tool of choice is Figma. We build fully responsive auto-layout frames, comprehensive tokenized design libraries, and interactive high-fidelity clickable prototype streams."
    },
    {
      q: "Can you design for an existing product?",
      a: "Yes. We perform heuristic reviews and comprehensive UX audits on live systems to identify friction points and drop-offs, then deliver a prioritized improvement roadmap alongside high-converting redesign solutions."
    },
    {
      q: "Will I own the design files?",
      a: "Yes, 100%. Once project payments are settled, you gain full, uncompromised intellectual ownership over all Figma files, brand guidelines, typography assets, and design component systems."
    },
    {
      q: "Do you work with our in-house developers?",
      a: "We love collaborating with developers. All our Figma components are built with clean auto-layout structures, structured style tokens, and annotations that make engineering translation as effortless and clear as possible."
    }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans selection:bg-blue-500/30 selection:text-blue-200">
      <ScrollProgress />
      <Navbar />

      {/* ── HERO SECTION ── */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-blue-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="container relative z-10 text-center max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles size={12} className="animate-spin-slow" />
            UI/UX Design
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6"
          >
            Design That Turns
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              Visitors Into Customers
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Pixel-perfect interfaces backed by deep user research. We craft digital experiences that are beautiful, intuitive, and built to convert.
          </motion.p>

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
              Start a Design Project
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#our-design-process"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-slate-800 hover:border-slate-700 bg-slate-900/50 hover:bg-slate-900 text-slate-300 hover:text-white font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2"
            >
              Our Design Process
            </a>
          </motion.div>

          {/* Stats Bar */}
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

      {/* ── DESIGN SERVICES GRID SECTION ── */}
      <section id="design-services" className="py-24 border-t border-slate-900 relative">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 mb-3">
              Design Services
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Everything Your Product Needs
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              End-to-end design services — from brand identity to production-ready UI specs.
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
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${item.glow}, transparent 60%)`
                    }}
                  />

                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6 shadow-md shadow-black/40`}>
                    <Icon size={20} />
                  </div>

                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h4>
                  
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 flex-grow">
                    {item.desc}
                  </p>

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

      {/* ── DESIGN PROCESS SECTION ── */}
      <section id="our-design-process" className="py-24 bg-slate-950 border-t border-slate-900 relative">
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 mb-3">
              Design Process
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              How We Design
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              A research-led process that ensures every design decision is backed by user insight and business goals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {processSteps.map((step, idx) => (
              <div 
                key={step.num}
                className="relative bg-slate-900/20 border border-slate-800/50 hover:border-slate-800 rounded-2xl p-6 group transition-all duration-300"
              >
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

      {/* ── PROJECT INCLUSIONS SECTION ── */}
      <section id="what-you-get" className="py-24 border-t border-slate-900 bg-slate-900/10 relative">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 mb-3">
              What You Get
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Every Project Includes
            </h3>
            <p className="text-slate-400 text-sm sm:text-base">
              No black-box deliveries. You get organised, documented, and developer-ready design assets.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {projectDeliverables.map((deliverable, idx) => (
              <div 
                key={idx}
                className="bg-slate-900/30 border border-slate-800/60 rounded-xl p-4 flex items-center gap-3 hover:border-slate-700 transition-colors cursor-default"
              >
                <div className="w-6 h-6 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs select-none">
                  ✓
                </div>
                <span className="text-slate-300 text-xs sm:text-sm font-semibold">{deliverable}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section id="why-choose-us" className="py-24 border-t border-slate-900 relative bg-slate-950">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 mb-3">
              Our Edge
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Design Rooted in Strategy
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

      {/* ── CTA / BRIEF FORM SECTION ── */}
      <section id="contact-quote" className="py-24 border-t border-slate-900 bg-slate-950 relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container max-w-4xl mx-auto px-4 relative z-10">
          <div className="bg-slate-900/40 border border-slate-800/70 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent leading-tight">
                  Let's Design Something Exceptional
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  Share your project brief and we'll send you first concepts within 48 hours.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0" />
                    First wireframes ready in 48 hours
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0" />
                    Complete organized Figma component libraries
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0" />
                    Full ownership of files and style assets
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
                    Email Address
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
                    Design Scope Details
                  </label>
                  <textarea
                    rows={3}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Describe your design parameters or brand identity needs..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500/80 text-white text-sm outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/40 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10 cursor-pointer"
                >
                  {submitting ? (
                    "Connecting Lead Designer..."
                  ) : (
                    <>
                      Start a Design Project
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

export default UiUxDesign;
