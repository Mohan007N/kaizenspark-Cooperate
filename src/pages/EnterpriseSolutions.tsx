import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe, ShieldCheck, Cpu, Layers, Mail, Clock, 
  ChevronRight, Sparkles, CheckCircle2, ChevronDown, 
  Send, HelpCircle, ArrowUpRight, Phone, MapPin, 
  ShieldAlert, Rocket, Check, ArrowRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { useToast } from "@/components/ui/use-toast";
import { sendEmail } from "@/utils/sendEmail";

const EnterpriseSolutions = () => {
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
        service: "Enterprise Solutions Consultation",
        message: formData.details || "Requesting an enterprise solutions consultation.",
      });
      if (result.success) {
        toast({
          title: "Requirement scope received!",
          description: `Thank you ${formData.name}. Our enterprise architects will review your scope and contact you within 24 hours.`,
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
    { number: "99.99%", label: "Uptime SLA", desc: "Enterprise-grade reliability" },
    { number: "50+", label: "Enterprise Clients", desc: "Scale solutions served globally" },
    { number: "4hr", label: "Critical Issue Response", desc: "Dedicated emergency support" },
    { number: "30%", label: "Avg. Cloud Cost Reduction", desc: "Right-sizing optimization" }
  ];

  const buildItems = [
    {
      id: "cloud-infrastructure",
      title: "Cloud Infrastructure",
      desc: "Google Cloud, AWS, and Azure deployments — VPCs, auto-scaling, managed databases, and CDN configuration for enterprise-grade reliability.",
      tags: ["AWS", "Google Cloud", "Azure"],
      icon: Globe,
      color: "from-blue-600 to-indigo-600",
      glow: "rgba(79,70,229,0.15)"
    },
    {
      id: "crm-erp-systems",
      title: "CRM & ERP Systems",
      desc: "Custom CRM and ERP platforms, or configuration of Zoho, Salesforce, and SAP — tailored to your exact business processes.",
      tags: ["Zoho CRM", "Salesforce", "Custom ERP"],
      icon: Layers,
      color: "from-cyan-500 to-blue-500",
      glow: "rgba(6,182,212,0.15)"
    },
    {
      id: "security-compliance",
      title: "Security Audits & Compliance",
      desc: "Vulnerability assessments, penetration testing, Cloudflare WAF setup, and compliance reviews for ISO, SOC2, and DPDPA requirements.",
      tags: ["VAPT", "Cloudflare", "ISO 27001"],
      icon: ShieldCheck,
      color: "from-emerald-500 to-teal-500",
      glow: "rgba(16,185,129,0.15)"
    },
    {
      id: "maintenance-support",
      title: "Website & App Maintenance",
      desc: "SLA-backed maintenance contracts covering bug fixes, dependency updates, performance monitoring, and 24/7 uptime alerting.",
      tags: ["SLA Support", "Monitoring", "Updates"],
      icon: Clock,
      color: "from-amber-500 to-orange-500",
      glow: "rgba(245,158,11,0.15)"
    },
    {
      id: "google-zoho-email",
      title: "Google Workspace & Zoho Mail",
      desc: "Full setup and migration for Google Workspace and Zoho Mail — email, calendar, Drive, and collaboration tools configured for your team.",
      tags: ["Google Workspace", "Zoho Mail", "Migration"],
      icon: Mail,
      color: "from-purple-500 to-fuchsia-500",
      glow: "rgba(168,85,247,0.15)"
    },
    {
      id: "performance-optimisation",
      title: "Performance Optimisation",
      desc: "Database query tuning, CDN configuration, caching strategies, and infrastructure right-sizing to cut load times and reduce cloud costs.",
      tags: ["Redis", "CDN", "DB Tuning"],
      icon: Cpu,
      color: "from-rose-500 to-pink-500",
      glow: "rgba(244,63,94,0.15)"
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Needs Assessment",
      desc: "We audit your current infrastructure, tools, and pain points to build a clear picture of what's working and what needs to change."
    },
    {
      num: "02",
      title: "Architecture Design",
      desc: "A tailored solution architecture reviewed and approved before any implementation begins. No surprises."
    },
    {
      num: "03",
      title: "Phased Implementation",
      desc: "Controlled rollout with minimal disruption to your business operations — always with a rollback plan."
    },
    {
      num: "04",
      title: "Testing & Validation",
      desc: "Rigorous testing against SLAs, security requirements, and performance benchmarks before going live."
    },
    {
      num: "05",
      title: "Training & Handover",
      desc: "Your team gets full documentation and hands-on training so they can operate and maintain the new systems confidently."
    },
    {
      num: "06",
      title: "Ongoing Support",
      desc: "SLA-backed support contracts with defined response times — keeping your business running without interruption."
    }
  ];

  const techStack = [
    { name: "AWS", color: "border-orange-500/20 text-orange-400 bg-orange-500/5" },
    { name: "Google Cloud", color: "border-blue-500/20 text-blue-400 bg-blue-500/5" },
    { name: "Cloudflare", color: "border-amber-500/20 text-amber-400 bg-amber-500/5" },
    { name: "Docker", color: "border-sky-500/20 text-sky-400 bg-sky-500/5" },
    { name: "Kubernetes", color: "border-indigo-500/20 text-indigo-400 bg-indigo-500/5" },
    { name: "Terraform", color: "border-violet-500/20 text-violet-400 bg-violet-500/5" },
    { name: "Zoho", color: "border-rose-500/20 text-rose-400 bg-rose-500/5" },
    { name: "Salesforce", color: "border-blue-400/20 text-blue-300 bg-blue-400/5" },
    { name: "PostgreSQL", color: "border-cyan-500/20 text-cyan-400 bg-cyan-500/5" },
    { name: "Redis", color: "border-red-500/20 text-red-400 bg-red-500/5" },
    { name: "Nginx", color: "border-emerald-500/20 text-emerald-400 bg-emerald-500/5" },
    { name: "Prometheus", color: "border-pink-500/20 text-pink-400 bg-pink-500/5" }
  ];

  const whyChooseUs = [
    {
      title: "Security First",
      desc: "Every deployment follows security hardening checklists and compliance requirements.",
      icon: ShieldCheck,
      color: "text-blue-400"
    },
    {
      title: "High Availability",
      desc: "99.99% uptime SLA backed by multi-region deployments and automated failover.",
      icon: Globe,
      color: "text-cyan-400"
    },
    {
      title: "Dedicated Support",
      desc: "Named engineers, not ticket queues. You know who to call.",
      icon: Clock,
      color: "text-emerald-400"
    },
    {
      title: "Cost Optimised",
      desc: "We reduce cloud spend by an average of 30% through right-sizing and reserved pricing.",
      icon: Cpu,
      color: "text-amber-400"
    }
  ];

  const faqs = [
    {
      q: "Do you sign NDAs and SLAs?",
      a: "Yes, absolutely. NDAs are signed on day one before any technical details are shared. All our enterprise implementations are backed by strict Service Level Agreements (SLAs) specifying availability, response times, and compliance metrics."
    },
    {
      q: "Can you migrate our existing infrastructure?",
      a: "Yes. We specialize in zero-downtime migrations. Whether you are transitioning from on-premise servers to public cloud environments (AWS, GCP, Azure), or shifting email and data platforms to Google Workspace/Zoho, we handle the transition securely with rollback plans."
    },
    {
      q: "What security standards do you follow?",
      a: "We follow industry-standard frameworks including ISO 27001, SOC 2, and CIS benchmarks. Every deployment goes through a rigorous hardening process including VPC isolation, strict IAM permissions, data encryption at rest and in transit, and active threat detection."
    },
    {
      q: "Do you provide 24/7 support?",
      a: "Yes. We offer continuous 24/7 SLA support plans backed by automated uptime monitors. For critical support packages, you are assigned a dedicated site-reliability engineer (SRE) who understands your configuration and can respond in minutes."
    },
    {
      q: "Can you work with our existing IT team?",
      a: "Definitely. We frequently act as an extension of internal IT departments. We handle high-level architectural designs, cloud migration, security compliance, and platform setups while co-authoring documentation and handing over day-to-day operations to your core team."
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
            Enterprise Solutions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6"
          >
            Infrastructure Built
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              to Scale Securely
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Cloud infrastructure, CRM/ERP deployments, security audits, and managed support — enterprise-grade solutions without the enterprise complexity.
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
              Discuss Your Requirements
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#our-methodology"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-slate-800 hover:border-slate-700 bg-slate-900/50 hover:bg-slate-900 text-slate-300 hover:text-white font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2"
            >
              Our Methodology
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

      {/* ── SOLUTIONS GRID SECTION ── */}
      <section id="solutions" className="py-24 border-t border-slate-900 relative">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 mb-3">
              Solutions
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Everything Enterprises Need
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              From cloud setup to security compliance — we handle the critical infrastructure that keeps your business running.
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

      {/* ── METHODOLOGY SECTION ── */}
      <section id="our-methodology" className="py-24 bg-slate-950 border-t border-slate-900 relative">
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 mb-3">
              Our Methodology
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              How We Deliver
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              A structured, low-risk approach that minimises disruption while maximising the value of every implementation.
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

      {/* ── TECHNOLOGIES SECTION ── */}
      <section id="technologies" className="py-24 border-t border-slate-900 relative bg-slate-900/10">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 mb-3">
              Technologies
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Enterprise-Proven Stack
            </h3>
            <p className="text-slate-400 text-sm sm:text-base">
              We work with tools that are battle-tested at scale, not experimental ones.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className={`py-4 px-6 border rounded-xl font-bold text-sm tracking-wide transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 cursor-default ${tech.color}`}
              >
                {tech.name}
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
              Why KaizenSpark Tech
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Trusted by Growing Businesses
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
                  Let's Build Your Enterprise Foundation
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  Reach out and let's discuss your infrastructure needs. NDAs signed on day one.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0" />
                    NDAs on day one of interaction
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0" />
                    ISO & SOC 2 alignment standards
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0" />
                    Guaranteed 99.99% uptime configurations
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
                    Infrastructure / Compliance Details
                  </label>
                  <textarea
                    rows={3}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Describe your server, compliance, or email setup scope..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500/80 text-white text-sm outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/40 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10 cursor-pointer"
                >
                  {submitting ? (
                    "Connecting Architects..."
                  ) : (
                    <>
                      Start the Conversation
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

export default EnterpriseSolutions;
