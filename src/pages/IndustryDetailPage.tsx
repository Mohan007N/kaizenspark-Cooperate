import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  HeartPulse, GraduationCap, Truck, ShoppingBag, 
  BarChart2, Building2, Factory, Home, ShoppingCart, 
  ArrowLeft, CheckCircle2, ShieldCheck, Cpu, Database, 
  Activity, Sparkles, Send 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { useToast } from "@/components/ui/use-toast";
import { sendEmail } from "@/utils/sendEmail";

interface IndustryContent {
  title: string;
  subtitle: string;
  icon: any;
  image: string;
  desc: string;
  features: string[];
  caseStudy: string;
  tech: string[];
  color: string;
  iconColor: string;
}

const industryData: Record<string, IndustryContent> = {
  healthcare: {
    title: "Healthcare Technology Cores",
    subtitle: "Secure patient portals, EHR integrations, & HIPAA architectures",
    icon: HeartPulse,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    desc: "We engineer highly secure, fully compliant medical systems. From Electronic Health Record (EHR) bridges to unified patient portals and secure live consult networks, our systems are built in strict compliance with HIPAA, DPDPA, and HL7 FHIR standards.",
    features: [
      "HL7 FHIR compliant patient database cores",
      "Secure digital OPD/IPD prescription generators",
      "End-to-End encrypted WebRTC teleconsultation channels",
      "Multi-party insurance claims & automated billing modules"
    ],
    caseStudy: "Designed and scaled a multi-region telehealth platform supporting 15,000+ daily concurrent virtual consults with sub-second prescription generation latency.",
    tech: ["Next.js", "WebRTC", "PostgreSQL", "AWS KMS", "Docker"],
    color: "from-red-500/20 to-pink-500/20",
    iconColor: "text-red-400 border-red-500/30 bg-red-500/10"
  },
  education: {
    title: "Next-Gen EdTech Platforms",
    subtitle: "High-concurrency collaborative classrooms & LMS architectures",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    desc: "Building high-performance Learning Management Systems (LMS) and collaborative learning classrooms. We design real-time lecture streams, automated grading rubrics, parent-teacher collaboration boards, and detailed student metrics dashboards.",
    features: [
      "Low-latency classroom streaming frameworks",
      "Stateful collaborative interactive digital whiteboards",
      "Automated AI grading matrices & progress builders",
      "Dynamic multi-branch institutional payroll grids"
    ],
    caseStudy: "Engineered a state-wide educational LMS portal supporting 1.2 Million concurrent students with zero downtime during peak examination schedules.",
    tech: ["React", "NestJS", "Socket.io", "AWS CloudFront", "Redis"],
    color: "from-blue-500/20 to-indigo-500/20",
    iconColor: "text-blue-400 border-blue-500/30 bg-blue-500/10"
  },
  logistics: {
    title: "Supply Chain & Telemetry Systems",
    subtitle: "Real-time fleet tracking, warehousing routing, & dispatch ledgers",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    desc: "Supercharge your fleet operations and warehouse execution. We build high-throughput GPS telemetry pipelines, dynamically computed route optimization engines, and cross-docking dispatch grids designed for high accuracy.",
    features: [
      "High-throughput real-time GPS telemetry ingest",
      "Dynamic route optimization & delivery planners",
      "Automated multi-hub inventory tracking ledgers",
      "Real-time driver dispatch mobile application suites"
    ],
    caseStudy: "Optimized operational dispatch routes for a leading national cargo carrier, reducing fuel overhead by 14% and processing 4.2 Million tracking packet updates per minute.",
    tech: ["Node.js", "Kafka", "PostgreSQL", "Google Maps API", "Kubernetes"],
    color: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-400 border-amber-500/30 bg-amber-500/10"
  },
  retail: {
    title: "Omnichannel Retail POS Cores",
    subtitle: "Offline-first Point-of-Sale networks & cross-store sync engines",
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    desc: "Unify your digital catalogs and physical store registers. We develop fast, offline-first Point-of-Sale (POS) systems, centralized real-time multi-branch stock sync, and automated supplier procurement sheets.",
    features: [
      "Offline-first POS checkout syncing on connection recovery",
      "Centralized real-time multi-branch stock synchronizer",
      "Automated stock purchase order & supplier dispatch cards",
      "Unified customer loyalty points & custom CRM networks"
    ],
    caseStudy: "Successfully deployed local-network resilient POS systems across 240 high-volume outlets, guaranteeing continuous checkout operations during retail peak season.",
    tech: ["PWA", "IndexedDB", "Node.js", "MongoDB", "Electron"],
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10"
  },
  saas: {
    title: "Enterprise SaaS Platforms",
    subtitle: "Multi-tenant logic, metered subscription setups, & metrics ledgers",
    icon: BarChart2,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    desc: "Transition your business ideas into highly secure, multitenant cloud products. We construct scalable tenant-isolated database architectures, complex metered Stripe billing webhooks, and granular user authorization metrics.",
    features: [
      "Tenant-isolated schema models for absolute data security",
      "Dynamic usage-metered subscription payment webhooks",
      "Distributed high-volume analytics ingestion pipelines",
      "Granular RBAC user permission access logs"
    ],
    caseStudy: "Architected a multi-tenant human resources SaaS pipeline from MVP to production scale, securing corporate clients and handling 45,000 active monthly corporate managers.",
    tech: ["Next.js", "Django", "PostgreSQL", "Stripe API", "AWS Lambda"],
    color: "from-violet-500/20 to-indigo-500/20",
    iconColor: "text-violet-400 border-violet-500/30 bg-violet-500/10"
  },
  finance: {
    title: "FinTech & Double-Entry Ledgers",
    subtitle: "High-security payouts, PCI compliance, & fraud logs",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=1200&q=80",
    desc: "High-integrity monetary and ledger systems. We program mathematically bulletproof double-entry ledgers, secure payout grids, instant corporate reconciliation engines, and automated fraud-check filters.",
    features: [
      "Double-entry transaction ledgers with strict audit locking",
      "PCI-DSS compliant payment integration connectors",
      "Real-time anomalous pattern & fraud flagging engines",
      "Multi-party payout automation with instant reconciles"
    ],
    caseStudy: "Designed a corporate payout ledger infrastructure processing ₹400Cr+ in monthly disbursements with zero double-billing errors and instant bank reconciliation.",
    tech: ["Go", "NestJS", "PostgreSQL", "Redis Lock", "AWS CloudTrail"],
    color: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10"
  },
  manufacturing: {
    title: "Smart Factory IIoT Networks",
    subtitle: "Telemetry device meshes, assembly tracking, & plant ledgers",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    desc: "Powering Industry 4.0 automation. We connect manufacturing floors directly to cloud networks, using low-latency telemetry ingestion, automated alerts for machine maintenance, and real-time plant utilization statistics.",
    features: [
      "Low-latency MQTT/AMQP hardware telemetry integration",
      "Predictive machine maintenance anomaly alert systems",
      "Real-time assembly floor utilization execution grids",
      "Automated Overall Equipment Effectiveness (OEE) calculators"
    ],
    caseStudy: "Configured IIoT data nodes across 180 industrial milling setups, integrating real-time telemetry panels and lifting raw machine utilization rates by 18%.",
    tech: ["Python", "MQTT", "TimescaleDB", "React", "Grafana"],
    color: "from-slate-500/20 to-slate-400/20",
    iconColor: "text-slate-400 border-slate-500/30 bg-slate-500/10"
  },
  "real-estate": {
    title: "Real Estate Digital Engines",
    subtitle: "Advanced multi-filter catalogs, payment tracking, & lead dashboards",
    icon: Home,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    desc: "Unify your development sales. We assemble interactive digital property showcases, dynamic customer installment logs, automated lease generators, and custom WhatsApp integration dashboards for field sales reps.",
    features: [
      "Advanced multi-attribute visual property inventory cards",
      "Automated client installment schedules & payment logs",
      "Twilio WhatsApp-integrated customer lead routing",
      "Dynamic tenancy agreement generation and tracking templates"
    ],
    caseStudy: "Engineered a corporate real-estate inventory center cataloging 4,500+ high-end residential units, syncing instant leads and buyer installment notices.",
    tech: ["Next.js", "Express", "PostgreSQL", "Twilio API", "AWS S3"],
    color: "from-orange-500/20 to-red-500/20",
    iconColor: "text-orange-400 border-orange-500/30 bg-orange-500/10"
  },
  ecommerce: {
    title: "Serverless E-Commerce Systems",
    subtitle: "Multi-region storefronts, serverless edge checkouts, & dispatch integrations",
    icon: ShoppingCart,
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80",
    desc: "Scale your e-commerce capabilities infinitely. We construct lightning-fast serverless edge storefronts, multi-currency conversion APIs, integrated courier scheduling, and multi-gateway checkout checkout engines.",
    features: [
      "Serverless multi-region storefronts with sub-80ms page load latency",
      "Dynamic multi-currency & localized tax computation gateways",
      "Automated shipping aggregations (FedEx/Shiprocket/DHL APIs)",
      "Multi-gateway checkout arrays resilient under high transaction surges"
    ],
    caseStudy: "Redesigned a high-traffic retail store catalog into a serverless Edge-rendered storefront, accelerating checkout success by 22% during peak seasonal sales.",
    tech: ["Next.js Edge", "Shopify API", "PostgreSQL", "Node.js", "TailwindCSS"],
    color: "from-pink-500/20 to-rose-500/20",
    iconColor: "text-pink-400 border-pink-500/30 bg-pink-500/10"
  }
};

const IndustryDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [formData, setFormData] = useState({ name: "", email: "", details: "" });
  const [submitting, setSubmitting] = useState(false);

  // Normalize id to match industryData keys (e.g. real-estate, ecommerce)
  const normalizedId = id ? id.toLowerCase() : "";
  const data = industryData[normalizedId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!data) {
    return (
      <div className="bg-slate-950 text-white min-h-screen flex items-center justify-center p-6 text-center">
        <div>
          <h1 className="text-3xl font-extrabold mb-4">Industry Sector Not Found</h1>
          <button 
            onClick={() => navigate("/")}
            className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors text-sm font-bold"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  const handleConsultSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast({
        title: "Information Missing",
        description: "Please supply your name and company email address.",
        variant: "destructive"
      });
      return;
    }
    setSubmitting(true);
    try {
      const res = await sendEmail({
        name: formData.name,
        email: formData.email,
        service: `Industry Consultation request: ${data.title}`,
        message: formData.details || `Requesting dedicated architectural review session for the ${data.title} sector.`
      });

      if (res.success) {
        toast({
          title: "Session Scheduled!",
          description: `Thank you, ${formData.name}. Our lead systems architect for ${data.title} will contact you shortly.`
        });
        setFormData({ name: "", email: "", details: "" });
      } else {
        toast({
          title: "Execution Error",
          description: "Something went wrong. Please reach out directly at contact@kaizenspark.co.",
          variant: "destructive"
        });
      }
    } catch(err) {
      toast({
        title: "Transmission Error",
        description: "Unable to schedule session. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };

  const Icon = data.icon;

  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans selection:bg-blue-500/30 selection:text-blue-200">
      <ScrollProgress />
      <Navbar />

      {/* Hero Header Area */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src={data.image} 
            alt={data.title} 
            className="w-full h-full object-cover opacity-20 scale-[1.02] blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/70 to-slate-950" />
          <div className={`absolute inset-0 bg-gradient-to-br ${data.color} opacity-40`} />
        </div>

        <div className="container relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-extrabold uppercase tracking-widest mb-6"
          >
            <div className={`w-6 h-6 rounded-lg flex items-center justify-center border ${data.iconColor}`}>
              <Icon size={12} />
            </div>
            Expertise Vertical
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black tracking-tight leading-tight mb-4"
          >
            {data.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {data.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Structural Overview Section */}
      <section className="py-20 border-t border-slate-900 relative">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Descriptions and Capability Grid */}
            <div className="lg:col-span-7 space-y-10">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-3 flex items-center gap-2">
                  <Activity size={12} />
                  Operational Blueprint
                </h2>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
                  High-Performance Custom Engineering
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {data.desc}
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {data.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-800 transition-colors">
                      <CheckCircle2 size={16} className="text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-slate-300 leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Case Study Section */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950/20 to-cyan-950/10 border border-slate-850 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-2xl pointer-events-none" />
                <h4 className="text-xs font-black uppercase tracking-widest text-cyan-400 mb-3 flex items-center gap-2">
                  <Sparkles size={11} />
                  Realized Impact Case Study
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium italic">
                  “{data.caseStudy}”
                </p>
              </div>
            </div>

            {/* Right Column: High Tech Specifications Spec Sheet */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border border-slate-800 bg-slate-950/50 backdrop-blur-sm rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-900 pb-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-blue-400" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">System Specifications</span>
                  </div>
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Active Stack Node</span>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-semibold">Service Architecture</span>
                    <span className="text-slate-300 font-bold flex items-center gap-1.5">
                      <Cpu size={12} className="text-blue-500" />
                      Distributed microservices
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-semibold">Deployment Engine</span>
                    <span className="text-slate-300 font-bold flex items-center gap-1.5">
                      <Database size={12} className="text-cyan-500" />
                      Encrypted Cloud Instance
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-semibold">Security Protocol</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                      E2E Encrypted Audited
                    </span>
                  </div>
                </div>

                <div className="border-t border-slate-900 pt-6">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-3">Core Technology Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {data.tech.map((t) => (
                      <span key={t} className="text-[10px] font-bold px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 shadow-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Consultation / Demonstration Form */}
              <div className="border border-slate-800 bg-slate-900/20 backdrop-blur-sm rounded-3xl p-6 sm:p-8 space-y-4 shadow-2xl">
                <div>
                  <h4 className="text-sm font-extrabold text-white">Consult an Architect</h4>
                  <p className="text-[10px] text-slate-500 font-semibold leading-relaxed mt-1">
                    Deploy, adapt, or audit this blueprint to match your local multi-branch operational setups.
                  </p>
                </div>

                <form onSubmit={handleConsultSubmit} className="space-y-3">
                  <div>
                    <input 
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500/80 text-white text-xs outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Corporate Email Address"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500/80 text-white text-xs outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <textarea 
                      rows={2}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="E.g., 3 branches, require HL7 integration..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500/80 text-white text-xs outline-none transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 disabled:opacity-50 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10 cursor-pointer"
                  >
                    <Send size={11} />
                    {submitting ? "Booking Architect Session..." : "Schedule Architectural Assessment"}
                  </button>
                </form>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Return Navigation Strip */}
      <section className="py-12 border-t border-slate-900 bg-slate-950 text-center">
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-800 hover:border-slate-700 bg-slate-900/50 hover:bg-slate-900 text-slate-400 hover:text-white text-xs font-bold transition-all"
        >
          <ArrowLeft size={12} />
          Back to Homepage
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default IndustryDetailPage;
