import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, TrendingUp, Clock, Zap, Laptop, 
  Cpu, ShieldCheck, Palette, Star, CheckCircle2, X,
  Terminal, Database, Cloud, Activity, Lock, Layers,
  Server, GitBranch, ShieldAlert, Cpu as ProcessorIcon
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

interface ResultMetric {
  icon: any;
  metric: string;
  label: string;
}

interface TechSpec {
  architectureType: string;
  concurrencyRate: string;
  latencyTarget: string;
  databaseStrategy: string;
  securityCompliance: string;
  infrastructure: string;
}

interface CaseStudy {
  id: string;
  category: string;
  title: string;
  challenge: string;
  solution: string;
  fullOverview: string;
  technologies: string[];
  results: ResultMetric[];
  techSpec: TechSpec;
  architectureFlow: {
    client: string;
    gateway: string;
    services: string[];
    datastore: string;
  };
  color: string;
  tag: string;
  filter: "web-app" | "ai-automation" | "enterprise" | "all";
}

const caseStudies: CaseStudy[] = [
  {
    id: "logistics-crm",
    category: "Logistics • Event-Driven Platform",
    title: "Global Supply Chain Orchestration System",
    challenge: "Manual dispatch workflows and disjointed telemetry logs led to severe route bottlenecks, high vehicle idle times, and zero real-time client visibility.",
    solution: "Engineered an event-driven logistics orchestration backbone with real-time transit state tracking, automated dispatch queues, and WebSocket telemetry pipelines.",
    fullOverview: "We designed a decoupled system processing high-frequency spatial coordinate data. Utilizing Apache Kafka as the central event broker, incoming GPS metrics are validated, indexed, and pushed to active client dashboards via a WebSocket gateway. This offloads 85% of telemetry read requests from the transaction database into a clustered Redis cache.",
    technologies: ["Go", "React", "Apache Kafka", "PostgreSQL", "Redis Clustered", "Kubernetes", "Terraform"],
    results: [
      { icon: TrendingUp, metric: "40%", label: "Manual dispatch reduction" },
      { icon: Clock, metric: "28 Days", label: "Production launch time" },
      { icon: Zap, metric: "3x", label: "Operational visibility increase" },
    ],
    techSpec: {
      architectureType: "Decoupled Event-Driven Microservices",
      concurrencyRate: "4.8 Million telemetric updates processed daily",
      latencyTarget: "< 45ms end-to-end telemetry propagation",
      databaseStrategy: "PostgreSQL with timescaledb spatial partitioning + Redis cluster cache",
      securityCompliance: "TLS 1.3 encryption-in-transit, AES-256 for historical tracking data",
      infrastructure: "GCP Cloud Run, managed Kafka core, automated via Terraform pipelines"
    },
    architectureFlow: {
      client: "Mobile App & Web Dashboard (React + WebSockets)",
      gateway: "API Gateway (Traefik) + JWT Authentication Core",
      services: ["Telemetry Ingestion Service", "Route Optimizer Engine", "Billing & Invoice Dispatch"],
      datastore: "PostgreSQL (Historical Logs) + Redis Clustered (Active Telemetry Cache)"
    },
    color: "from-blue-500 to-cyan-500",
    tag: "Logistics & Core IT",
    filter: "enterprise",
  },
  {
    id: "healthbridge-telehealth",
    category: "Healthcare • HIPAA Telehealth Core",
    title: "HIPAA-Compliant Real-Time Medical Hub",
    challenge: "Existing teleconsultation platforms suffered from high-latency video feeds, complex regulatory non-compliance, and poor medical record integration.",
    solution: "Built a fully encrypted, peer-to-peer WebRTC video core backed by a zero-trust credential system and automated EHR synchronization.",
    fullOverview: "A secure, HIPAA-compliant patient core featuring sub-150ms video/audio latency using direct WebRTC channels with automatic TURN fallback. The system isolates client and provider traffic and implements advanced field-level encryption on AWS DynamoDB utilizing customer-managed KMS keys.",
    technologies: ["React Native", "Node.js", "WebRTC", "Socket.io", "AWS KMS", "DynamoDB", "Docker"],
    results: [
      { icon: TrendingUp, metric: "250K+", label: "Consultations facilitated" },
      { icon: Clock, metric: "< 150ms", label: "WebRTC peer connection latency" },
      { icon: Zap, metric: "100%", label: "HIPAA & GDPR compliance audit score" },
    ],
    techSpec: {
      architectureType: "Zero-Trust Peer-to-Peer & Serverless EHR Core",
      concurrencyRate: "5,000 concurrent video consultative rooms",
      latencyTarget: "Sub-150ms video/audio latency via P2P mesh",
      databaseStrategy: "DynamoDB with attribute-level KMS encryption + S3 secure attachments",
      securityCompliance: "HIPAA, GDPR, SOC2 Type II, AES-256-GCM data encryption",
      infrastructure: "AWS ECS Fargate, AWS KMS, CloudFront distribution, WebRTC media relays"
    },
    architectureFlow: {
      client: "HIPAA Patient iOS/Android App (React Native)",
      gateway: "API Gateway (AWS API Gateway) + Mutual TLS (mTLS) Auth",
      services: ["Video Session Signaling Node", "EHR Sync Service", "Secure Chat Service"],
      datastore: "AWS DynamoDB (Field encrypted health logs) + S3 Glacier (Audit logs)"
    },
    color: "from-emerald-500 to-teal-500",
    tag: "Digital Health Core",
    filter: "web-app",
  },
  {
    id: "fashionhive-ecommerce",
    category: "E-Commerce • High-Scale Storefront",
    title: "Multi-Region Retail Engine & AI Search",
    challenge: "Monolithic storefront crashed during peak traffic events and lacked real-time catalog search and user personalization.",
    solution: "Rebuilt the platform on a multi-region serverless checkout backend backed by an Elasticsearch query engine and AI recommendations.",
    fullOverview: "We designed a multi-region retail microservice architecture optimized for Core Web Vitals. The front-end utilizes Edge Middleware via Next.js for sub-50ms static rendering, coupled with an Elasticsearch cluster optimized for tokenization and compound searching.",
    technologies: ["Next.js", "Python", "Elasticsearch", "Redis Enterprise", "PostgreSQL", "AWS SQS", "Lambda"],
    results: [
      { icon: TrendingUp, metric: "45,000/s", label: "Concurrent request capability" },
      { icon: Clock, metric: "65ms", label: "Average search query response time" },
      { icon: Zap, metric: "+28%", label: "Conversion rate improvement" },
    ],
    techSpec: {
      architectureType: "Serverless Eventual Consistency Microservices",
      concurrencyRate: "45,000 concurrent product lookups/checkout actions",
      latencyTarget: "50ms Page Generation (Edge SSR), 65ms query execution",
      databaseStrategy: "PostgreSQL (Master-replica replication) + Redis Enterprise cache layer",
      securityCompliance: "PCI-DSS Level 1 compliant checkout, automated anti-DDoS via Cloudflare",
      infrastructure: "Vercel Edge, AWS Lambda serverless functions, SQS queues, Elastic Cloud"
    },
    architectureFlow: {
      client: "Personalized Storefront Page (Next.js SSR Edge)",
      gateway: "Cloudflare Workers Edge Routing + JWT validation",
      services: ["Serverless Inventory Engine", "Elastic Search Indexer", "Asynchronous Order SQS Worker"],
      datastore: "PostgreSQL (Transactional database) + Elasticsearch (Product catalog)"
    },
    color: "from-violet-500 to-pink-500",
    tag: "High-Scale E-Commerce",
    filter: "web-app",
  },
  {
    id: "edupulse-lms",
    category: "EdTech • Real-Time Collaborative Suite",
    title: "Multi-Tenant Collaborative LMS",
    challenge: "Educational providers faced high-latency syncing inside collaborative interactive classrooms and complex multi-tenant separation problems.",
    solution: "Engineered a low-latency collaborative platform using Conflict-Free Replicated Data Types (CRDTs) over WebSockets with isolated DB multi-tenancy.",
    fullOverview: "Designed an interactive learning environment handling deep collaborative elements. By utilizing CRDT concepts over secure WebSockets, the interactive whiteboard state syncs instantly across 50,000 concurrent students with lock-free conflict resolution.",
    technologies: ["Vue.js", "Express", "MongoDB Cluster", "Socket.io", "Redis Stream", "AWS S3 Glacier"],
    results: [
      { icon: TrendingUp, metric: "50K+", label: "Concurrent active learners" },
      { icon: Clock, metric: "< 50ms", label: "Whiteboard syncing latency" },
      { icon: Zap, metric: "300+", label: "Academic institutions integrated" },
    ],
    techSpec: {
      architectureType: "Multi-Tenant Real-Time Stateful Architecture",
      concurrencyRate: "50,000 concurrent state streams and audio-video streams",
      latencyTarget: "<50ms collaborative canvas event propagation",
      databaseStrategy: "MongoDB Replica Set with multi-tenant logical schemas",
      securityCompliance: "FERPA compliant, COPPA compliant, end-to-end websocket authorization",
      infrastructure: "AWS ECS cluster, S3 storage with automatic compression pipelines"
    },
    architectureFlow: {
      client: "Vue.js Web client + Socket.io event loop",
      gateway: "NGINX reverse proxy + Redis adapter session storage",
      services: ["WebSocket Sync Server Cluster", "Class Recording Service", "Account Engine"],
      datastore: "MongoDB (Multi-tenant document store) + S3 (Lecture video streams)"
    },
    color: "from-purple-500 to-indigo-500",
    tag: "EdTech Infrastructure",
    filter: "web-app",
  },
  {
    id: "finstream-payroll",
    category: "FinTech • High-Assurance Treasury",
    title: "Institutional Ledger & Automated Settlement",
    challenge: "Corporate accounting groups faced extensive manual reconciliation times, tax compliance issues, and ledger inconsistencies due to database race conditions.",
    solution: "Developed a strict double-entry ledger database applying serializable isolation levels and automated NEFT/UPI payout webhooks.",
    fullOverview: "A high-assurance transactional ledger designed to prevent multi-transaction race conditions. Utilizing row-level blocking and strictly audited database locks, FinStream guarantees zero ledger discrepancy, auto-processing payouts via secure open API webhooks.",
    technologies: ["Go", "React", "PostgreSQL (Strict ACID)", "Docker", "Kubernetes", "Prometheus", "Grafana"],
    results: [
      { icon: TrendingUp, metric: "99.999%", label: "Audit reconciliation accuracy" },
      { icon: Clock, metric: "10 Min", label: "Payroll batch cycle time" },
      { icon: Zap, metric: "60%", label: "Treasury overhead cost reduction" },
    ],
    techSpec: {
      architectureType: "High-Assurance Transactional Ledger Architecture",
      concurrencyRate: "10,000 sub-second strict ACID double-entry payouts",
      latencyTarget: "Immediate real-time ACID locks, webhook retries < 1.2s",
      databaseStrategy: "PostgreSQL configured for SERIALIZABLE transaction isolations",
      securityCompliance: "PCI-DSS compliance, full immutable cryptographically hashed ledger audits",
      infrastructure: "Self-healing Kubernetes nodes, Prometheus telemetry, Grafana alert manager"
    },
    architectureFlow: {
      client: "Corporate ERP Dashboard (React + TLS 1.3)",
      gateway: "Kong API Gateway + Mutual TLS (mTLS)",
      services: ["Accounting Ledger core", "Webhook Settlement Engine", "Compliance Auto-Compiler"],
      datastore: "PostgreSQL (Double-entry ledger with row locks) + Redis (Idempotency storage)"
    },
    color: "from-amber-500 to-orange-500",
    tag: "FinTech & Transactional",
    filter: "enterprise",
  },
  {
    id: "smartharvest-iot",
    category: "Industrial IoT • Ingestion Mesh",
    title: "Industrial IoT Ingestion & Soil Predictive Core",
    challenge: "Farms operated on predictive guesswork. High-frequency IoT soil sensors overloaded traditional databases and lacked predictive crop modeling.",
    solution: "Built a high-frequency MQTT broker ingestion pipeline backed by InfluxDB time-series indexing and embedded TensorFlow models.",
    fullOverview: "We designed a heavy-load IoT telemetry pipeline. Incorporating a clustering MQTT broker mesh, the system ingests 20,000 environmental metrics per second. Time-series indexing via InfluxDB optimizes database writing, allowing an AI model to query trends and output pest alerts.",
    technologies: ["Python", "FastAPI", "InfluxDB Cluster", "TensorFlow", "MQTT Broker", "React", "Nginx"],
    results: [
      { icon: TrendingUp, metric: "100K+", label: "Active field sensor nodes" },
      { icon: Clock, metric: "92%", label: "Disease forecast accuracy" },
      { icon: Zap, metric: "35%", label: "Irrigation water volume saved" },
    ],
    techSpec: {
      architectureType: "Stateful IoT Stream Ingestion & Machine Learning Core",
      concurrencyRate: "Ingestion pipeline writing up to 20,000 metrics per second",
      latencyTarget: "<80ms analysis turnaround, sub-second alert dispatch",
      databaseStrategy: "InfluxDB (Clustered Time-Series) + PostgreSQL (Metadata storage)",
      securityCompliance: "TLS-encrypted MQTT payloads, zero-trust device certificates",
      infrastructure: "Managed Docker swarm, MQTT broker cluster, GPU clusters for ML retraining"
    },
    architectureFlow: {
      client: "IoT Sensors (MQTT over SSL) + Farmer Web Interface",
      gateway: "EMQX MQTT Broker Cluster + FastAPI gateway for Web clients",
      services: ["Telemetry Pipeline Ingestor", "TensorFlow Prediction Engine", "Pest Alert Dispatcher"],
      datastore: "InfluxDB (High-write time-series metrics) + PostgreSQL (Sensor profiles)"
    },
    color: "from-pink-500 to-rose-500",
    tag: "Industrial IoT & ML",
    filter: "ai-automation",
  }
];

const OurWork = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<"all" | "web-app" | "ai-automation" | "enterprise">("all");
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  
  // Custom interactive mode: "business" (ROI, metrics, design) vs "architecture" (throughput, schemas, protocols)
  const [viewMode, setViewMode] = useState<"business" | "architecture">("business");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredStudies = caseStudies.filter(
    (study) => filter === "all" || study.filter === filter
  );

  return (
    <div className="relative bg-slate-950 text-white min-h-screen selection:bg-blue-500/30 font-sans">
      <ScrollProgress />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 overflow-hidden border-b border-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)] opacity-30" />
        
        <div className="container max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/25 bg-blue-500/8 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
                Engineering Log & Portfolio
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
              Production Architecture. <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Proven Scale.
              </span>
            </h1>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
              Explore the system blueprints, operational throughputs, and real-world impact of the enterprise digital infrastructure and automation cores we've engineered.
            </p>
          </motion.div>

          {/* Interactive Mode Toggle Dashboard */}
          <div className="max-w-md mx-auto mb-12 bg-slate-900/60 p-1.5 rounded-full border border-slate-800 flex items-center justify-between shadow-2xl relative z-20">
            <button
              onClick={() => setViewMode("business")}
              className={`flex-1 py-2 px-4 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                viewMode === "business"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <TrendingUp size={13} />
              Business Value View
            </button>
            <button
              onClick={() => setViewMode("architecture")}
              className={`flex-1 py-2 px-4 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                viewMode === "architecture"
                  ? "bg-slate-800 text-blue-400 border border-blue-500/20 shadow-md shadow-blue-500/10"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Terminal size={13} />
              Developer & Architect View
            </button>
          </div>

          {/* Quick Metrics Terminal */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border border-slate-800/80 bg-slate-900/40 rounded-2xl p-6 backdrop-blur-md relative"
          >
            {/* Terminal styling details */}
            <div className="absolute top-3 left-4 flex gap-1.5 opacity-60">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
            </div>
            
            {[
              { val: "50+", label: "Coop Cores Deployed" },
              { val: "99.99%", label: "Avg Service Uptime" },
              { val: "4.8M", label: "Daily Spatial Coordinate Ingest" },
              { val: "< 60ms", label: "Database Read Target Latency" }
            ].map((m) => (
              <div key={m.label} className="text-center pt-2">
                <p className="text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{m.val}</p>
                <p className="text-[10px] text-slate-500 uppercase font-semibold tracking-wider mt-1">{m.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Filter & Case Studies Grid */}
      <section className="py-20 bg-slate-950 relative">
        <div className="container max-w-7xl mx-auto px-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {[
              { id: "all", label: "All Work", icon: Laptop },
              { id: "web-app", label: "Web & Mobile Core", icon: Laptop },
              { id: "ai-automation", label: "AI & Automation", icon: Cpu },
              { id: "enterprise", label: "Enterprise Solutions", icon: ShieldCheck }
            ].map((t) => {
              const Icon = t.icon;
              return (
                <button
                  key={t.id}
                  onClick={() => setFilter(t.id as any)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all relative ${
                    filter === t.id 
                      ? "text-blue-400 bg-blue-500/10 border border-blue-500/20" 
                      : "text-slate-400 hover:text-white bg-slate-900/40 border border-slate-800/60"
                  }`}
                >
                  <Icon size={13} />
                  {t.label}
                  {filter === t.id && (
                    <motion.span
                      layoutId="activeFilterTab"
                      className="absolute inset-0 rounded-full border border-blue-500/30 bg-blue-500/5 -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Grid Layout */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredStudies.map((study) => (
                <motion.div
                  layout
                  key={study.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative bg-slate-900/30 border border-slate-900/80 hover:border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5 flex flex-col backdrop-blur-md"
                >
                  {/* Top Glowing Gradient Bar */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${study.color}`} />

                  <div className="p-6 flex-1 flex flex-col">
                    {/* Tag + Category */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        {study.category}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r ${study.color} text-white`}>
                        {study.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {study.title}
                    </h3>

                    {/* DYNAMIC CARD CONTENT BASED ON VIEW MODE */}
                    <div className="flex-1 flex flex-col justify-between">
                      {viewMode === "business" ? (
                        /* Business Mode Card Content */
                        <div className="space-y-4 mb-6">
                          <div>
                            <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">Business Pain Points</p>
                            <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">{study.challenge}</p>
                          </div>
                          <div>
                            <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">Delivered Solution</p>
                            <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">{study.solution}</p>
                          </div>
                        </div>
                      ) : (
                        /* Architecture Mode Card Content */
                        <div className="space-y-3 mb-6 p-4 rounded-xl bg-black/40 border border-slate-900/80 font-mono text-[11px]">
                          <div className="flex items-start gap-1.5">
                            <Layers size={11} className="text-blue-500 mt-0.5 shrink-0" />
                            <p className="text-slate-400"><span className="text-slate-500 font-bold">ARCH:</span> {study.techSpec.architectureType}</p>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <Activity size={11} className="text-cyan-500 mt-0.5 shrink-0" />
                            <p className="text-slate-400"><span className="text-slate-500 font-bold">THROUGHPUT:</span> {study.techSpec.concurrencyRate}</p>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <Database size={11} className="text-purple-500 mt-0.5 shrink-0" />
                            <p className="text-slate-400"><span className="text-slate-500 font-bold">DATA STORE:</span> {study.techSpec.databaseStrategy}</p>
                          </div>
                        </div>
                      )}

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {study.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-slate-900 text-slate-400 border border-slate-800/60"
                          >
                            {tech}
                          </span>
                        ))}
                        {study.technologies.length > 4 && (
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-md bg-slate-900 text-slate-500 border border-slate-800/60">
                            +{study.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Metric Highlights */}
                    <div className="grid grid-cols-3 gap-2 pt-5 border-t border-slate-900/60 mb-6">
                      {study.results.map((r, idx) => {
                        return (
                          <div key={idx} className="text-center">
                            <p className={`text-xs md:text-sm font-black bg-gradient-to-r ${study.color} bg-clip-text text-transparent`}>
                              {r.metric}
                            </p>
                            <p className="text-[9px] text-slate-500 mt-0.5 leading-tight">{r.label}</p>
                          </div>
                        );
                      })}
                    </div>

                    {/* View Details Button */}
                    <button
                      onClick={() => setSelectedStudy(study)}
                      className="w-full py-2.5 rounded-xl bg-slate-900 border border-slate-850 text-xs font-bold text-slate-300 hover:text-white hover:bg-slate-800 transition-all flex items-center justify-center gap-1.5 group/btn cursor-pointer"
                    >
                      Explore Architectural Blueprint
                      <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Case Study Detailed Modal */}
      <AnimatePresence>
        {selectedStudy && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStudy(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-slate-950 border border-slate-800/80 rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
            >
              {/* Header Colored Glow */}
              <div className={`h-2 w-full bg-gradient-to-r ${selectedStudy.color}`} />

              {/* Close Button */}
              <button
                onClick={() => setSelectedStudy(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-full bg-slate-900 border border-slate-800 hover:scale-110 transition-all"
                aria-label="Close modal"
              >
                <X size={15} />
              </button>

              <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1">
                {/* Category Info */}
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                    {selectedStudy.category}
                  </span>
                  <h2 className="text-xl md:text-3xl font-black text-white mt-4 tracking-tight leading-tight">
                    {selectedStudy.title}
                  </h2>
                </div>

                {/* Core Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 bg-slate-900/40 border border-slate-900 rounded-2xl">
                  {selectedStudy.results.map((r, idx) => {
                    const Icon = r.icon;
                    return (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${selectedStudy.color} flex items-center justify-center text-white shrink-0`}>
                          <Icon size={14} />
                        </div>
                        <div>
                          <p className="text-sm font-extrabold text-white leading-none">{r.metric}</p>
                          <p className="text-[10px] text-slate-400 mt-1 leading-tight">{r.label}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* VISUAL SYSTEM FLOWCHART DESIGN (Visual Spec) */}
                <div>
                  <h4 className="text-[10px] font-bold uppercase text-slate-500 tracking-wider mb-3">System Architecture Blueprint</h4>
                  <div className="p-5 rounded-2xl bg-black border border-slate-900 flex flex-col gap-4 font-mono text-[11px] leading-relaxed text-slate-400">
                    
                    {/* Step 1: Client Gateway */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-slate-900/20 border border-slate-900 rounded-lg">
                      <div className="flex items-center gap-2 text-blue-400">
                        <Laptop size={13} />
                        <span className="font-bold">Entry Point</span>
                      </div>
                      <span className="text-xs text-slate-300">{selectedStudy.architectureFlow.client}</span>
                    </div>

                    {/* SVG Connector */}
                    <div className="flex justify-center py-0.5 text-slate-700">↓ [gRPC / WebSockets / TLS 1.3]</div>

                    {/* Step 2: API Gateway */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-slate-900/20 border border-slate-900 rounded-lg">
                      <div className="flex items-center gap-2 text-cyan-400">
                        <Server size={13} />
                        <span className="font-bold">Edge Routing & Auth</span>
                      </div>
                      <span className="text-xs text-slate-300">{selectedStudy.architectureFlow.gateway}</span>
                    </div>

                    {/* SVG Connector */}
                    <div className="flex justify-center py-0.5 text-slate-700">↓ [Internal Routing / Event Bus]</div>

                    {/* Step 3: Microservices */}
                    <div className="p-3 bg-slate-900/20 border border-slate-900 rounded-lg">
                      <div className="flex items-center gap-2 text-purple-400 mb-2">
                        <Layers size={13} />
                        <span className="font-bold">Core Microservice Domain Clusters</span>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {selectedStudy.architectureFlow.services.map((srv, index) => (
                          <span key={index} className="text-[10px] bg-slate-950 border border-slate-800 px-2 py-1 rounded text-slate-300 flex items-center gap-1">
                            <GitBranch size={10} className="text-purple-500" />
                            {srv}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* SVG Connector */}
                    <div className="flex justify-center py-0.5 text-slate-700">↓ [Read-Write Split]</div>

                    {/* Step 4: Storage */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-slate-900/20 border border-slate-900 rounded-lg">
                      <div className="flex items-center gap-2 text-emerald-400">
                        <Database size={13} />
                        <span className="font-bold">Distributed Datastore Core</span>
                      </div>
                      <span className="text-xs text-slate-300">{selectedStudy.architectureFlow.datastore}</span>
                    </div>

                  </div>
                </div>

                {/* Detailed Architectural Technical Specs Table */}
                <div>
                  <h4 className="text-[10px] font-bold uppercase text-slate-500 tracking-wider mb-3">Architectural & Development Specs</h4>
                  <div className="border border-slate-900 rounded-2xl overflow-hidden text-xs">
                    {[
                      { key: "System Core Pattern", val: selectedStudy.techSpec.architectureType },
                      { key: "Throughput / Concurrency", val: selectedStudy.techSpec.concurrencyRate },
                      { key: "Target System Latency", val: selectedStudy.techSpec.latencyTarget },
                      { key: "Database Topology Strategy", val: selectedStudy.techSpec.databaseStrategy },
                      { key: "Compliance & Protocols", val: selectedStudy.techSpec.securityCompliance },
                      { key: "Infrastructure Orchestration", val: selectedStudy.techSpec.infrastructure }
                    ].map((spec, i) => (
                      <div key={i} className="grid grid-cols-1 sm:grid-cols-3 p-4 border-b border-slate-900/80 bg-slate-900/10 hover:bg-slate-900/20 transition-all">
                        <span className="font-mono text-slate-500 font-bold text-[10px] uppercase sm:col-span-1">{spec.key}</span>
                        <span className="text-slate-300 sm:col-span-2 pt-1 sm:pt-0 leading-relaxed font-sans">{spec.val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Narrative Details */}
                <div className="space-y-4 pt-2">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase text-slate-500 tracking-wider mb-2">Detailed Operational Overview</h4>
                    <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/20 p-4 border border-slate-900/60 rounded-xl">
                      {selectedStudy.fullOverview}
                    </p>
                  </div>
                </div>

                {/* Full Technologies Used */}
                <div>
                  <h4 className="text-[10px] font-bold uppercase text-slate-500 tracking-wider mb-3">Deployable Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedStudy.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-900 text-slate-300 border border-slate-800/80 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="p-6 bg-slate-900/30 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-400 text-center sm:text-left">
                  Ready to deploy a similar high-performance core for your enterprise?
                </p>
                <button
                  onClick={() => {
                    setSelectedStudy(null);
                    navigate("/contact");
                  }}
                  className="px-6 py-2.5 rounded-full bg-blue-600 text-white font-bold text-xs hover:bg-blue-500 hover:-translate-y-0.5 transition-all flex items-center gap-1.5 shadow-lg shadow-blue-500/20"
                >
                  Initiate Technical Consultation <ArrowRight size={13} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Project CTA block */}
      <section className="py-24 border-t border-slate-900 bg-slate-950 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-50" />
        
        <div className="container max-w-5xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Let's Architect Your <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Digital Enterprise.
              </span>
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
              We partner with global firms and emerging startups to design, build, and deploy low-latency, resilient IT infrastructures and automation platforms.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full text-xs font-bold hover:from-blue-500 hover:to-blue-600 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/20 hover:-translate-y-0.5 cursor-pointer"
              >
                Schedule Architecture Consultation <ArrowRight size={14} />
              </button>
              <button
                onClick={() => navigate("/about")}
                className="bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 px-8 py-3 rounded-full text-xs font-bold transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                Our Core Team & Method
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurWork;
