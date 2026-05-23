import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe, Cpu, Layers, Database, Sparkles, CheckCircle2, 
  ChevronDown, ChevronRight, HelpCircle, ArrowUpRight, 
  Mail, Phone, MapPin, Send, ShieldAlert, Rocket, Check, ArrowRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { useToast } from "@/components/ui/use-toast";
import { sendEmail } from "@/utils/sendEmail";

const AIAutomation = () => {
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
        service: "AI & Automation Consultation",
        message: formData.details || "Requesting a discovery call.",
      });
      if (result.success) {
        toast({
          title: "Discovery session booked!",
          description: `Thank you ${formData.name}. Our AI specialist will review your details and contact you within 24 hours.`,
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
    { number: "70%", label: "Avg. Time Saved", desc: "On automated operations tasks" },
    { number: "10×", label: "Faster Doc Processing", desc: "Automated extraction speed" },
    { number: "40+", label: "AI Solutions Deployed", desc: "SaaS & internal system tools" },
    { number: "4 Weeks", label: "Avg. PoC Delivery", desc: "Rapid prototype validation" }
  ];

  const buildItems = [
    {
      id: "ai-chatbots",
      title: "AI Chatbots & Virtual Agents",
      desc: "Custom conversational AI for customer support, lead qualification, and internal helpdesks — trained on your data, deployed on your channels.",
      tags: ["RAG", "LangChain", "WhatsApp / Web"],
      icon: Cpu,
      color: "from-blue-500 to-indigo-500",
      glow: "rgba(59,130,246,0.15)"
    },
    {
      id: "business-process-automation",
      title: "Business Process Automation",
      desc: "End-to-end workflow automation that eliminates repetitive manual tasks — from data entry and approvals to invoicing and reporting.",
      tags: ["n8n", "Zapier", "Make (Integromat)"],
      icon: Layers,
      color: "from-emerald-500 to-teal-500",
      glow: "rgba(16,185,129,0.15)"
    },
    {
      id: "predictive-analytics",
      title: "Predictive Analytics",
      desc: "Machine learning models that forecast demand, detect churn, score leads, and surface insights from your historical data.",
      tags: ["Python", "scikit-learn", "BigQuery"],
      icon: Globe,
      color: "from-cyan-500 to-blue-500",
      glow: "rgba(6,182,212,0.15)"
    },
    {
      id: "document-intelligence",
      title: "Document Intelligence",
      desc: "AI-powered document extraction, classification, and processing — turn PDFs, invoices, and forms into structured, actionable data.",
      tags: ["OCR", "LLM Extraction", "Automation"],
      icon: Database,
      color: "from-purple-500 to-pink-500",
      glow: "rgba(168,85,247,0.15)"
    },
    {
      id: "llm-applications",
      title: "LLM-Powered Applications",
      desc: "Custom applications powered by GPT-4, Claude, and Gemini — from internal knowledge bases to AI writing assistants and code reviewers.",
      tags: ["OpenAI", "Anthropic", "Gemini"],
      icon: Sparkles,
      color: "from-amber-500 to-orange-500",
      glow: "rgba(245,158,11,0.15)"
    },
    {
      id: "mlops-infrastructure",
      title: "MLOps & AI Infrastructure",
      desc: "Scalable infrastructure for training, serving, and monitoring ML models in production — with drift detection and automated retraining.",
      tags: ["MLflow", "Docker", "GCP Vertex AI"],
      icon: Cpu,
      color: "from-rose-500 to-red-500",
      glow: "rgba(244,63,94,0.15)"
    }
  ];

  const useCases = [
    "AI customer support chatbot (24/7, multi-language)",
    "Invoice & document data extraction",
    "Lead scoring and sales prioritisation",
    "Automated report generation from raw data",
    "Internal knowledge base with semantic search",
    "Inventory demand forecasting",
    "Email triage and automated responses",
    "Product recommendation engine"
  ];

  const processSteps = [
    {
      num: "01",
      title: "Discovery Workshop",
      desc: "We map your current workflows, identify automation opportunities, and calculate the ROI of each potential use case."
    },
    {
      num: "02",
      title: "Use Case Prioritisation",
      desc: "A prioritised roadmap of AI initiatives sorted by impact, feasibility, and implementation speed."
    },
    {
      num: "03",
      title: "Proof of Concept",
      desc: "A working prototype of the highest-impact use case — built fast so you can validate before full investment."
    },
    {
      num: "04",
      title: "Production Build",
      desc: "Full-scale development with security, monitoring, and human-in-the-loop controls baked in from the start."
    },
    {
      num: "05",
      title: "Integration & Testing",
      desc: "Deep integration with your existing tools and systems, tested extensively for accuracy and edge cases."
    },
    {
      num: "06",
      title: "Monitor & Improve",
      desc: "Ongoing performance monitoring, model retraining, and feature additions as your data and needs evolve."
    }
  ];

  const techStack = [
    { name: "OpenAI GPT-4", color: "border-emerald-500/20 text-emerald-400 bg-emerald-500/5" },
    { name: "Anthropic Claude", color: "border-orange-500/20 text-orange-400 bg-orange-500/5" },
    { name: "Google Gemini", color: "border-blue-500/20 text-blue-400 bg-blue-500/5" },
    { name: "LangChain", color: "border-teal-500/20 text-teal-400 bg-teal-500/5" },
    { name: "LlamaIndex", color: "border-cyan-500/20 text-cyan-400 bg-cyan-500/5" },
    { name: "Python", color: "border-yellow-500/20 text-yellow-400 bg-yellow-500/5" },
    { name: "FastAPI", color: "border-emerald-400/20 text-emerald-300 bg-emerald-400/5" },
    { name: "n8n", color: "border-rose-500/20 text-rose-400 bg-rose-500/5" },
    { name: "Make", color: "border-indigo-500/20 text-indigo-400 bg-indigo-500/5" },
    { name: "Pinecone", color: "border-violet-500/20 text-violet-400 bg-violet-500/5" },
    { name: "pgvector", color: "border-sky-500/20 text-sky-400 bg-sky-500/5" },
    { name: "Docker", color: "border-blue-500/20 text-blue-400 bg-blue-500/5" }
  ];

  const whyChooseUs = [
    {
      title: "PoC in 4 Weeks",
      desc: "Validate your idea with a working prototype before full investment.",
      icon: Rocket,
      color: "text-blue-400"
    },
    {
      title: "Privacy Compliant",
      desc: "On-premise and private cloud options for sensitive business data.",
      icon: ShieldAlert,
      color: "text-emerald-400"
    },
    {
      title: "Measurable ROI",
      desc: "Every solution is tied to clear KPIs tracked in your dashboard.",
      icon: Check,
      color: "text-cyan-400"
    },
    {
      title: "Always Improving",
      desc: "Models are monitored and retrained as your data grows and changes.",
      icon: Cpu,
      color: "text-amber-400"
    }
  ];

  const faqs = [
    {
      q: "Do I need a large dataset to use AI?",
      a: "No! Many modern business use cases (like data extraction, customer service chatbots, and document processing) can be successfully implemented using pre-trained foundational Large Language Models (LLMs) with Retrieval-Augmented Generation (RAG) using your existing documents, files, or FAQs."
    },
    {
      q: "How do you handle data privacy?",
      a: "Data privacy is our top priority. We set up isolated, enterprise-grade cloud environments or local hosting solutions depending on your sensitivity requirements. We align with strict GDPR and DPDPA protocols, ensuring your business data is never used to train public LLM models."
    },
    {
      q: "What's the difference between automation and AI?",
      a: "Traditional automation handles structured, predictable tasks based on static 'if-this-then-that' rules (e.g. sending an email invoice). Artificial Intelligence introduces reasoning and decision-making, allowing the system to comprehend unstructured data (e.g. reading a customer's email and drafting a highly personalized reply)."
    },
    {
      q: "Can AI integrate with our existing software?",
      a: "Yes. We specialize in building seamless integrations using APIs, custom middleware, and standard connectors like n8n or Make. We can hook modern conversational interfaces directly into Zoho, Salesforce, Slack, WhatsApp, and custom SQL databases."
    },
    {
      q: "How do we measure ROI from AI?",
      a: "We establish clear KPIs during our discovery workshop. Examples include tracking the percentage of customer tickets solved entirely by the chatbot, reductions in document processing times from days to seconds, or the number of manual hours saved per employee."
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
            Trending · AI & Automation
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6"
          >
            Automate the Mundane.
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              Amplify the Exceptional.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Intelligent chatbots, workflow automation, and predictive analytics that give your business an unfair competitive advantage — deployed in weeks, not months.
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
              Explore AI for My Business
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#use-cases"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-slate-800 hover:border-slate-700 bg-slate-900/50 hover:bg-slate-900 text-slate-300 hover:text-white font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2"
            >
              See Use Cases
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

      {/* ── AI SOLUTIONS SECTION ── */}
      <section id="ai-solutions" className="py-24 border-t border-slate-900 relative">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 mb-3">
              AI Solutions
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Intelligence for Every Function
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              From front-desk chatbots to backend ML pipelines — we build AI that integrates seamlessly with how your business works.
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

      {/* ── USE CASES SECTION ── */}
      <section id="use-cases" className="py-24 border-t border-slate-900 bg-slate-900/10 relative">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 mb-3">
              Use Cases
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              What Businesses Automate With Us
            </h3>
            <p className="text-slate-400 text-sm sm:text-base">
              Real-world applications already delivering ROI for our clients.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {useCases.map((useCase, idx) => (
              <div 
                key={idx}
                className="bg-slate-900/30 border border-slate-800/60 rounded-xl p-4 flex items-center gap-3 hover:border-slate-700 transition-colors cursor-default"
              >
                <div className="w-6 h-6 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs select-none">
                  ✓
                </div>
                <span className="text-slate-300 text-xs sm:text-sm font-semibold">{useCase}</span>
              </div>
            ))}
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
              From Idea to Production AI
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We de-risk AI adoption with a proven PoC-first methodology before any large commitment.
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

      {/* ── AI STACK SECTION ── */}
      <section id="ai-stack" className="py-24 border-t border-slate-900 relative bg-slate-900/10">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 mb-3">
              AI Stack
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Powered by the Best AI Infrastructure
            </h3>
            <p className="text-slate-400 text-sm sm:text-base">
              We stay at the frontier of AI tooling so your solutions are always built on current best practices.
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

      {/* ── WHY KAIZENSPARK TECH SECTION ── */}
      <section id="why-choose-us" className="py-24 border-t border-slate-900 relative bg-slate-950">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 mb-3">
              Why KaizenSpark Tech
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Why AI Projects Succeed With KaizenSpark Tech
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
                  Ready to Unlock AI for Your Business?
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  Book a free discovery call — we'll identify your top 3 automation opportunities and estimate the ROI.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0" />
                    POC delivered in 4 weeks
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0" />
                    Fully compliant private hosting
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0" />
                    Clear ROI dashboard monitoring
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
                    Automation Requirements
                  </label>
                  <textarea
                    rows={3}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="What manual workflows would you like to automate?"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500/80 text-white text-sm outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/40 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10 cursor-pointer"
                >
                  {submitting ? (
                    "Booking Session..."
                  ) : (
                    <>
                      Book a Free Discovery Call
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

export default AIAutomation;
