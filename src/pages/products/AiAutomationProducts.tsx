import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cpu, CheckCircle2, ChevronDown, Laptop, 
  Layers, ChevronRight, ShieldCheck, Play, 
  HelpCircle, Sparkles, Building2, Terminal, ArrowRight,
  TrendingUp, Award, Clock, Users, ArrowUpRight, BarChart3, Bot
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { useToast } from "@/components/ui/use-toast";
import { sendEmail } from "@/utils/sendEmail";

const AiAutomationProducts = () => {
  const navigate = useNavigate();
  const { hash } = useLocation();
  const { toast } = useToast();

  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", product: "AI Chatbot Solutions", note: "" });
  const [submitting, setSubmitting] = useState(false);

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

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast({
        title: "Information missing",
        description: "Please supply your name and company email address.",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    try {
      const result = await sendEmail({
        name: formData.name,
        email: formData.email,
        service: `Product Pilot Inquiry: ${formData.product}`,
        message: formData.note ? `Special training scope or context: ${formData.note}` : "Requesting product details/sandbox access.",
      });
      if (result.success) {
        toast({
          title: "AI Pilot Registered!",
          description: `Thank you ${formData.name}. We have reserved sandbox tokens for ${formData.product}. Check your inbox for details!`,
        });
        setFormData({ name: "", email: "", product: "AI Chatbot Solutions", note: "" });
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

  const stats = [
    { num: "75%", label: "Manual Overhead Reduced", desc: "For typical back-office operations" },
    { num: "80,000+", label: "Daily Chatbot Queries", desc: "Automated at zero latency" },
    { num: "2 Min", label: "Average Setup Speed", desc: "Connect directories and start instantly" },
    { num: "₹12L+", label: "Average Saved Annually", desc: "Per integrated client workflow" }
  ];

  const productsList = [
    {
      id: "ai-chatbot-solutions",
      tabKey: "chatbots",
      title: "AI Chatbot Solutions",
      subtitle: "Conversational Agents, WhatsApp Sync, & CRM Handoffs",
      desc: "Deploy intelligent customer support agents trained on your documentation. Resolves questions, captures leads, and hands off to humans in real-time.",
      features: [
        "Interactive LLM training on custom PDF/Web documentation",
        "Multi-channel deployments (WhatsApp, Web, Slack, Telegram)",
        "Omnichannel custom CRM lead sync pipelines",
        "Intelligent human handoff conditions & indicators",
        "Detailed conversation metrics and visual analysis"
      ],
      tech: ["Next.js", "Python", "LangChain", "Pinecone"],
      color: "from-purple-500 to-indigo-500",
      glow: "rgba(168,85,247,0.15)"
    },
    {
      id: "business-process-automation",
      tabKey: "process",
      title: "Business Process Automation",
      subtitle: "Multi-system Sync, Scheduled Tasks & Flow Planners",
      desc: "Synchronize back-office operations. Connect separate applications, schedule complex recurring runs, and automate manual file moving processes.",
      features: [
        "Visual drag-and-drop workflow planner grids",
        "Omnichannel custom REST and GraphQL webhook triggers",
        "Scheduled execution nodes with robust retry rules",
        "Advanced error reporting with instant Slack alerts",
        "Multi-tenant data isolation and protection keys"
      ],
      tech: ["React", "Express", "Node.js", "Redis"],
      color: "from-indigo-500 to-blue-500",
      glow: "rgba(99,102,241,0.15)"
    },
    {
      id: "data-analytics-platforms",
      tabKey: "analytics",
      title: "Data Analytics Platforms",
      subtitle: "Real-time Metrics, Custom Charts & AI Insights",
      desc: "Convert complex raw rows into stunning business charts. Automatically extract performance trends, score leads, and forecast supply demands.",
      features: [
        "Real-time visual data graphs & drag-and-drop metrics",
        "Algorithmic forecasting models (Prophet, Scikit-learn)",
        "Custom SQL builder engines with visual UI grids",
        "Automated scheduled PDF report generator sheets",
        "Instant multi-role dashboard user permissions"
      ],
      tech: ["Next.js", "Django", "PostgreSQL", "BigQuery"],
      color: "from-blue-500 to-cyan-500",
      glow: "rgba(59,130,246,0.15)"
    },
    {
      id: "document-management",
      tabKey: "documents",
      title: "Document Management",
      subtitle: "AI OCR Parsing, Secure Cataloging, & Auto Tags",
      desc: "Transform scanning files. Automatically read physical invoices, parse purchase sheets, index keywords, and catalog documents securely.",
      features: [
        "High-performance AI OCR document data extraction",
        "Automated smart category tags allocation rules",
        "Encrypted multi-tenant cloud storage structures",
        "Keywords parsing index search algorithms",
        "Complimentary compliance audit checks (GDPR)"
      ],
      tech: ["React", "NestJS", "Python OCR", "AWS Textract"],
      color: "from-cyan-500 to-teal-500",
      glow: "rgba(6,182,212,0.15)"
    },
    {
      id: "workflow-automation-tools",
      tabKey: "workflow",
      title: "Workflow Automation Tools",
      subtitle: "Visual Builders, Webhook Triggers, & Integrations",
      desc: "Link your favorite modern work tools. Automate Slack notices, format spreadsheet rows, trigger database updates, and dispatch files instantly.",
      features: [
        "Integrated popular API tokens (n8n, Zapier, Make)",
        "Instant REST webhook custom listener modules",
        "Vibrant visual drag-and-drop execution planners",
        "Conditional filter nodes with JavaScript formatting",
        "Bulk records multi-threaded queue managers"
      ],
      tech: ["Vue.js", "Express", "PostgreSQL", "Docker"],
      color: "from-pink-500 to-rose-500",
      glow: "rgba(236,72,153,0.15)"
    }
  ];

  const faqs = [
    {
      q: "Can the AI chatbots sync with our proprietary data?",
      a: "Yes. We feed your documentation, policy sheets, and training videos directly into modern vector indexes (Retrieval-Augmented Generation / RAG). This ensures the chatbot only responds using verified, reliable corporate rules."
    },
    {
      q: "How secure is automated document parsing?",
      a: "Highly secure. We operate dedicated data sandboxes that isolate your document payloads. All OCR files are processed over HTTPS, parsed inside memory, and stored with enterprise AES-256 cloud encryption."
    },
    {
      q: "Can we integrate these modules with third-party tools?",
      a: "Absolutely. We supply modular integration components for standard applications like Slack, Salesforce, Zoho CRM, n8n, Google Drive, and major database nodes."
    }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans selection:bg-purple-500/30 selection:text-purple-200">
      <ScrollProgress />
      <Navbar />

      {/* ── HERO SECTION ── */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-purple-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="container relative z-10 text-center max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Cpu size={12} />
            AI & Automation Products
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6"
          >
            Smarter Operations
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              Driven by AI
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Trained conversational chatbot agents, visual scheduled process planners, real-time demand forecasting charts, and high-performance AI OCR parser models.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <a
              href="#product-showcase"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-bold text-sm shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore AI Products
              <ChevronRight size={14} />
            </a>
            <a
              href="#book-demo"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-slate-800 hover:border-slate-700 bg-slate-900/50 hover:bg-slate-900 text-slate-300 hover:text-white font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2"
            >
              Request API Access
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
                <span className="text-2xl sm:text-3xl font-extrabold text-white bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent mb-1">
                  {stat.num}
                </span>
                <span className="text-xs font-bold text-purple-400 mb-0.5">
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

      {/* ── PRODUCT DETAILS/SHOWCASE SECTION ── */}
      <section id="product-showcase" className="py-24 border-t border-slate-900 relative">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-purple-500 mb-3">
              AI Showcase
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Enterprise AI & Process Utilities
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              KaizenSpark Tech shapes performant LLM automation wrappers. Pick an option below to explore exact modules and library architectures.
            </p>
          </div>

          <div className="space-y-16">
            {productsList.map((product, index) => (
              <div
                id={product.id}
                key={product.id}
                className="group relative bg-slate-900/30 border border-slate-800/80 hover:border-slate-700/80 rounded-3xl p-8 sm:p-12 transition-all duration-300"
              >
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-2xl"
                  style={{
                    background: `radial-gradient(circle at 10% 20%, ${product.glow}, transparent 70%)`
                  }}
                />

                <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                  
                  {/* Text Content */}
                  <div>
                    <span className="text-xs font-extrabold text-purple-400 uppercase tracking-widest block mb-2">
                      {product.subtitle}
                    </span>
                    <h4 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                      {product.title}
                    </h4>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                      {product.desc}
                    </p>

                    <div className="space-y-3 mb-8">
                      {product.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 size={16} className="text-purple-500 flex-shrink-0 mt-0.5" />
                          {feat}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 items-center">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mr-2">Built With:</span>
                      {product.tech.map((t) => (
                        <span key={t} className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Graphic Card */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-indigo-500/5 rounded-2xl blur-xl" />
                    <div className="relative border border-slate-800/80 bg-slate-950 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
                      <div className="flex items-center justify-between border-b border-slate-900 pb-4 mb-6">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500/60" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                          <div className="w-3 h-3 rounded-full bg-green-500/60" />
                        </div>
                        <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">AI Node Visualizer</span>
                      </div>
                      
                      <div className="space-y-4 mb-8">
                        <div className="h-6 w-1/3 bg-slate-900 rounded animate-pulse" />
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-10 bg-slate-900 rounded animate-pulse" />
                          <div className="h-10 bg-slate-900 rounded animate-pulse" />
                        </div>
                        <div className="h-20 bg-slate-900/60 rounded border border-slate-800/60 flex items-center justify-center">
                          <Bot size={24} className="text-purple-500/40" />
                        </div>
                      </div>

                      <div className="flex justify-between items-center text-xs text-slate-500 font-semibold">
                        <span>Cognitive Model: Online</span>
                        <span className="text-emerald-400 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                          Trained
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section id="faq" className="py-24 border-t border-slate-900 relative">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-purple-500 mb-3">
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
                    <HelpCircle size={16} className="text-purple-500" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-slate-500 transition-transform duration-300 flex-shrink-0 ml-4 ${
                      activeFaq === idx ? "rotate-180 text-purple-400" : ""
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

      {/* ── PILOT REQUEST FORM ── */}
      <section id="book-demo" className="py-24 border-t border-slate-900 bg-slate-950 relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container max-w-4xl mx-auto px-4 relative z-10">
          <div className="bg-slate-900/40 border border-slate-800/70 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent leading-tight">
                  Initiate a Fully-Funded AI Proof of Concept
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  Ready to witness automation gains in your actual corporate setup? Connect your directories and test our RAG chatbot nodes free for 14 days.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-purple-500 flex-shrink-0" />
                    Zero licensing fees during evaluation pilot
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-purple-500 flex-shrink-0" />
                    Custom model fine-tuning checks
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-purple-500 flex-shrink-0" />
                    Direct consultation with AI core engineers
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-purple-500/80 text-white text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Corporate Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="director@automation.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-purple-500/80 text-white text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Target AI Suite
                  </label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-purple-500/80 text-white text-sm outline-none transition-colors"
                  >
                    <option value="AI Chatbot Solutions">AI Chatbot Solutions</option>
                    <option value="Business Process Automation">Business Process Automation</option>
                    <option value="Data Analytics Platforms">Data Analytics Platforms</option>
                    <option value="Document Management">Document Management</option>
                    <option value="Workflow Automation Tools">Workflow Automation Tools</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Special Training Scope or Context
                  </label>
                  <textarea
                    rows={2}
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    placeholder="E.g., PDF handbooks, live REST APIs, n8n webhook nodes..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-purple-500/80 text-white text-sm outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 disabled:opacity-50 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-500/10 cursor-pointer"
                >
                  {submitting ? "Initiating Pilot Tokens..." : "Deploy AI Proof of Concept"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AiAutomationProducts;
