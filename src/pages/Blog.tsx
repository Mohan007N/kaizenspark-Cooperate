import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { Search, Calendar, Clock, ArrowRight, BookOpen, Send, Sparkles, Filter, X, Code, Terminal, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface BlogPostContent {
  intro: string;
  problemHeading: string;
  problemText: string;
  solutionHeading: string;
  solutionText: string;
  codeBlock: string;
  codeLanguage: string;
  metrics: { label: string; before: string; after: string; delta: string }[];
  takeaways: string[];
}

interface BlogPost {
  id: string;
  category: string;
  title: string;
  desc: string;
  body: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    initials: string;
    color: string;
  };
  color: string;
  image: string;
  featured?: boolean;
  content: BlogPostContent;
}

const allBlogPosts: BlogPost[] = [
  {
    id: "post-1",
    category: "Cloud & DevOps",
    title: "Scaling Microservices with Kubernetes: Lessons from the Trenches",
    desc: "A hands-on engineering guide to designing Kubernetes clusters for high availability, zero-downtime deployment pipelines, and optimal cost allocation in production.",
    body: "Scaling microservices at scale requires deep orchestration knowledge. In this article, we outline our exact blueprint for configuring multi-zone Kubernetes clusters, fine-tuning horizontal pod autoscalers (HPA), setting up Prometheus & Grafana metrics pipelines, and managing ingress controllers for 99.99% uptime.",
    date: "May 24, 2026",
    readTime: "5 min read",
    author: {
      name: "N. Karthik",
      role: "VP of Engineering",
      initials: "NK",
      color: "from-purple-500 to-indigo-500",
    },
    color: "from-blue-500 to-cyan-500",
    image: "/kubernetes_devops.png",
    featured: true,
    content: {
      intro: "In production, microservices scaling is rarely as simple as incrementing replicas. True high-availability requires deep topology planning, custom horizontal pod autoscaling metric parameters, and strict network isolation rules to avoid cascading system dependencies.",
      problemHeading: "The Core Challenge: Latency Spikes During Sudden Traffic Shifts",
      problemText: "During sudden traffic transitions, horizontal pod autoscalers relying on raw CPU/Memory utilization thresholds react too slowly, triggering cold pod starts and packet drop storms on ingress routing layers.",
      solutionHeading: "The Solution: Custom Metrics Autoscale & Topology Constraints",
      solutionText: "We deployed custom Prometheus Adapter pipelines tracking active connection pool depletion and HTTP response latency metrics to pre-emptively scale out deployment replicas. We also set up node topology spread constraints to distribute replicas safely across separate physical availability zones.",
      codeBlock: `apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: api-gateway-hpa
  namespace: production
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: api-gateway
  minReplicas: 3
  maxReplicas: 30
  metrics:
  - type: Object
    object:
      describedObject:
        apiVersion: networking.k8s.io/v1
        kind: Ingress
        name: main-ingress
      metric:
        name: requests-per-second
      target:
        type: Value
        value: "1200"`,
      codeLanguage: "yaml",
      metrics: [
        { label: "Deployment Autoscaling Lag Time", before: "180s", after: "12s", delta: "-93%" },
        { label: "Ingress Router CPU Thrashing", before: "92%", after: "38%", delta: "-58%" },
        { label: "Availability Zone Load Balancing", before: "Imbalanced", after: "Highly Symmetric", delta: "100%" }
      ],
      takeaways: [
        "Never use raw CPU bounds alone for scaling latency-sensitive HTTP/gRPC backends.",
        "Always provision topology spread constraints with 'scheduleAnyway' fallback options.",
        "Integrate dynamic ingress backpressure rules to reject surplus requests early."
      ]
    }
  },
  {
    id: "post-2",
    category: "AI & Automation",
    title: "Building High-Throughput LLM Agent Clusters for Enterprise Workflows",
    desc: "A technical deep dive into orchestration frameworks, memory persistence layers, and low-latency API design patterns for running production-grade AI agents.",
    body: "Running language models in production requires optimized latency and structured outputs. We cover memory vector stores, state machine agent orchestration using LangGraph, semantic caching, and GPU cluster load balancing techniques tailored for enterprise B2B backends.",
    date: "May 18, 2026",
    readTime: "8 min read",
    author: {
      name: "Gurubalan GT",
      role: "Founder & CEO",
      initials: "GB",
      color: "from-emerald-500 to-teal-500",
    },
    color: "from-emerald-500 to-green-500",
    image: "/ai_coding.png",
    content: {
      intro: "Enterprise multi-agent architectures demand state-machine persistence, rapid contextual lookup times, and semantic request caching. Simply feeding tokens back and forth over REST layers creates massive operational latency and extreme API cost structures.",
      problemHeading: "The Core Challenge: Orchestrating Complex Interdependent LLM Calls",
      problemText: "Standard agent loops are prone to infinite loops and massive resource consumption. Ensuring deterministic state transitions, structured JSON schema extraction, and secure database sandboxing is absolutely vital.",
      solutionHeading: "The Solution: LangGraph State Machines with Semantic Redis Cache",
      solutionText: "We built an async, state-machine driven event orchestrator. By running semantic hashing over prompt structures, we cache pre-computed answers in Redis, intercepting duplicate operations and delivering sub-50ms responses for recurring user queries.",
      codeBlock: `import asyncio
from typing import Dict, TypedDict
from langgraph.graph import StateGraph, END

class AgentState(TypedDict):
    query: str
    context: list
    response: str
    confidence: float

async def fetch_semantic_cache(state: AgentState) -> Dict:
    # Query Redis vector index for prior identical intents
    hit = await redis_vector_index.search(state["query"])
    if hit:
        return {"response": hit.answer, "confidence": 1.0}
    return {"context": await vector_store.retrieve(state["query"])}

# Set up state-machine routing workflow
workflow = StateGraph(AgentState)
workflow.add_node("cache_check", fetch_semantic_cache)
workflow.add_node("llm_reasoning", agent_node)
workflow.set_entry_point("cache_check")`,
      codeLanguage: "python",
      metrics: [
        { label: "Duplicate Prompt Execution Cost", before: "$0.042 / call", after: "$0.0003 / call", delta: "-99.3%" },
        { label: "Response Retrieval Speed (Cache hit)", before: "3.2s", after: "0.04s", delta: "-98.7%" },
        { label: "JSON Ingestion Schema Failures", before: "8.4%", after: "0.0%", delta: "-100%" }
      ],
      takeaways: [
        "Implement semantic caching in your orchestration middlelayer to save costs.",
        "Leverage LangGraph to ensure strict, finite-state transitions on all loops.",
        "Enforce strict schema validation on model outputs using Pydantic parsers."
      ]
    }
  },
  {
    id: "post-3",
    category: "Software Engineering",
    title: "Transitioning from Monolith to Event-Driven Architecture Safely",
    desc: "A structured migration blueprint for decoupling legacy enterprise databases and core logic using Apache Kafka, message queues, and eventual consistency models.",
    body: "Decoupling databases without losing transactional integrity is one of the hardest challenges in software engineering. Learn the transactional outbox pattern, Kafka event streams, and sagas to migrate monolithic systems seamlessly.",
    date: "May 10, 2026",
    readTime: "6 min read",
    author: {
      name: "M. Anjali",
      role: "Managing Director",
      initials: "MA",
      color: "from-blue-500 to-indigo-500",
    },
    color: "from-indigo-500 to-violet-500",
    image: "/software_architecture.png",
    content: {
      intro: "Migrating enterprise systems to event-driven architectures without massive service disruptions is exceptionally challenging. Decoupling legacy transactional databases without data corruption requires strict patterns.",
      problemHeading: "The Core Challenge: Race Conditions & Dual-Write DB Inconsistencies",
      problemText: "Attempting to update an internal application database and broadcast a message to RabbitMQ or Kafka in the same controller block frequently fails, leading to ghost writes, orphaned entries, and extreme data drift.",
      solutionHeading: "The Solution: Change Data Capture (CDC) via Debezium & Postgres Outbox",
      solutionText: "We enforced the Transactional Outbox pattern. All service events are recorded locally in a dedicated DB outbox table within the same ACID transaction block. A lightweight Debezium connector streams these entries directly from the WAL to Kafka.",
      codeBlock: `{
  "name": "postgresql-outbox-connector",
  "config": {
    "connector.class": "io.debezium.connector.postgresql.PostgresConnector",
    "database.hostname": "pg-primary.production",
    "database.port": "5432",
    "database.user": "debezium",
    "database.password": "vault_rotated_secret",
    "database.dbname": "core_db",
    "table.include.list": "public.outbox_events",
    "plugin.name": "pgoutput",
    "tombstones.on.delete": "false"
  }
}`,
      codeLanguage: "json",
      metrics: [
        { label: "Data Drift & Orphaned Transactions", before: "1.8%", after: "0.0%", delta: "-100%" },
        { label: "Database Read Lock Contention", before: "240ms", after: "8ms", delta: "-96%" },
        { label: "Service Sync Dependency Coupling", before: "Tight", after: "Fully decoupled", delta: "100%" }
      ],
      takeaways: [
        "Never perform dual writes (DB + Message Queue) inside normal application controller loops.",
        "Utilize Postgres WAL-based Change Data Capture (CDC) to stream pipeline states natively.",
        "Design all downstream consumer logic to be completely idempotent."
      ]
    }
  },
  {
    id: "post-4",
    category: "Cloud & DevOps",
    title: "Zero-Trust Security Architectures for Multi-Cloud Deployments",
    desc: "How to configure unified access management, network isolation policies, and automated secrets rotators across AWS, GCP, and Azure.",
    body: "Modern compliance demands zero trust. This technical paper highlights unified IAM roles, HashiCorp Vault secrets orchestration, and strict service-mesh traffic isolation rules using Istio and mutual TLS (mTLS).",
    date: "May 02, 2026",
    readTime: "7 min read",
    author: {
      name: "N. Karthik",
      role: "VP of Engineering",
      initials: "NK",
      color: "from-purple-500 to-indigo-500",
    },
    color: "from-rose-500 to-orange-500",
    image: "/kubernetes_devops.png",
    content: {
      intro: "Security boundaries can no longer rely on simple virtual private network (VPN) perimeters. True security requires cryptographically verified identities for every API endpoint, container, and developer.",
      problemHeading: "The Core Challenge: Statically Configured API Secrets & Static Keys",
      problemText: "Leaving static tokens and cloud credentials inside configuration profiles creates a high-risk security profile. If a single subsystem gets compromised, the attacker can hijack adjacent systems immediately.",
      solutionHeading: "The Solution: Istio Mutual TLS & Vault Dynamic Dynamic Leases",
      solutionText: "We deployed dynamic, short-lived secrets rotation using HashiCorp Vault. All database and API credentials expire automatically after 60 minutes. We also enforce zero-trust networking via Istio mutual TLS (mTLS).",
      codeBlock: `# Vault dynamic database role configuration
path "database/creds/read-only-role" {
  capabilities = ["read"]
}

path "sys/leases/renew" {
  capabilities = ["update"]
}

# Istio PeerAuthentication manifest
apiVersion: security.istio.io/v1beta1
kind: PeerAuthentication
metadata:
  name: default
  namespace: production
spec:
  mtls:
    mode: STRICT`,
      codeLanguage: "yaml",
      metrics: [
        { label: "Average Token Validity Windows", before: "Infinity", after: "3600 seconds", delta: "-99.9%" },
        { label: "Unencrypted Service-to-Service Hops", before: "100%", after: "0%", delta: "-100%" },
        { label: "SOC2 Compliance Readiness Audit", before: "Failed", after: "Passed (100% Grade)", delta: "100%" }
      ],
      takeaways: [
        "Enforce STRICT peer authentication across all multi-cloud Kubernetes clusters.",
        "Migrate immediately from static config profiles to short-lived dynamic credentials.",
        "Implement real-time network traffic mapping and audit monitoring tools."
      ]
    }
  },
  {
    id: "post-5",
    category: "Software Engineering",
    title: "Designing Vector Databases for Million-Scale Real-Time Queries",
    desc: "An optimization review comparing Pinecone, Qdrant, and pgvector for low-latency search and high-dimensional retrieval tasks.",
    body: "Optimizing indexing latency and precision is crucial for large search indices. We benchmark HNSW index configurations, quantization techniques, and hybrid keyword-vector search algorithms to achieve sub-20ms retrieval speeds.",
    date: "April 20, 2026",
    readTime: "9 min read",
    author: {
      name: "Gurubalan GT",
      role: "Founder & CEO",
      initials: "GB",
      color: "from-emerald-500 to-teal-500",
    },
    color: "from-cyan-500 to-blue-500",
    image: "/ai_coding.png",
    content: {
      intro: "Running vector search over millions of high-dimensional embeddings requires optimized memory layout. Standard search metrics suffer massive scaling bottlenecks as indexes exceed millions of documents.",
      problemHeading: "The Core Challenge: Memory Exhaustion during High efConstruction Values",
      problemText: "Building highly accurate HNSW indexing trees requires significant memory. Ingress load spikes can crash database processes if retrieval configurations are not optimized.",
      solutionHeading: "The Solution: Custom HNSW Optimization & Scalar Quantization",
      solutionText: "We deployed Qdrant nodes configured with Scalar Quantization (SQ) and customized HNSW graphs. This compressed index footprints by 70% with negligible precision drops, keeping query response times below 15ms.",
      codeBlock: `import qdrant_client
from qdrant_client.http import models

client = qdrant_client.QdrantClient(host="vector-db.production", port=6333)

# Create optimized collections
client.create_collection(
    collection_name="enterprise_kb",
    vectors_config=models.VectorParams(
        size=1536, # OpenAI text-embedding-3-small dimension
        distance=models.Distance.COSINE
    ),
    hnsw_config=models.HnswConfigDiff(
        m=16, # Max links per node
        ef_construct=100, # Construction tradeoff search path
        payload_m=16
    ),
    quantization_config=models.ScalarQuantization(
        scalar=models.ScalarQuantizationConfig(
            type=models.ScalarType.INT8,
            always_ram=True
        )
    )
)`,
      codeLanguage: "python",
      metrics: [
        { label: "Query Ingestion RAM Utilization", before: "18.4 GB", after: "5.2 GB", delta: "-71.7%" },
        { label: "P99 Latency (1.2M Embeddings)", before: "148ms", after: "14ms", delta: "-90.5%" },
        { label: "Index Search Recall Accuracy", before: "99.8%", after: "98.9%", delta: "-0.9%" }
      ],
      takeaways: [
        "Enforce scalar or product quantization on vector databases to save RAM.",
        "Keep the vector search index memory-resident by leveraging INT8 quantization.",
        "Adjust HNSW 'm' and 'ef' search options carefully depending on read/write ratios."
      ]
    }
  },
  {
    id: "post-6",
    category: "AI & Automation",
    title: "Automating ERP Processes with Multi-Agent Retrieval Pipelines",
    desc: "How we leveraged secure agent systems to reduce manual invoice reconciliation and procurement tasks by 85% for enterprise manufacturing clients.",
    body: "ERP automation requires rigorous data safety and validation. This case breakdown details secure OCR pipelines, custom fine-tuned transformer parsing models, and human-in-the-loop approvals for large financial ledgers.",
    date: "April 08, 2026",
    readTime: "5 min read",
    author: {
      name: "M. Anjali",
      role: "Managing Director",
      initials: "MA",
      color: "from-blue-500 to-indigo-500",
    },
    color: "from-amber-500 to-yellow-500",
    image: "/software_architecture.png",
    content: {
      intro: "Connecting AI nodes directly to production financial databases or legacy SAP architectures requires strict input validation and parsing schemas. A single unstructured query execution error can corrupt ledger accounting rows.",
      problemHeading: "The Core Challenge: Inconsistent LLM Output JSON Schemas",
      problemText: "Standard Large Language Models frequently return inconsistent JSON blocks, causing major exceptions when parsing complex line-items from invoice templates.",
      solutionHeading: "The Solution: Structured Ingestion with Pydantic & LayoutLMv3",
      solutionText: "We deployed hybrid LayoutLMv3 OCR engines for spatial positioning checks, integrated with custom Pydantic schemas. Every token output is verified against structured formatting blocks before database ingestion.",
      codeBlock: `from typing import List
from pydantic import BaseModel, Field

class InvoiceLineItem(BaseModel):
    sku: str = Field(description="Unique stock keeping unit identifier")
    quantity: int = Field(description="Quantity of item purchased")
    unit_price: float = Field(description="Unit cost of single item")
    total_amount: float = Field(description="Final computed cost of item")

class InvoiceIngestSchema(BaseModel):
    vendor_name: str = Field(description="Full legal vendor company name")
    tax_id: str = Field(description="GST or VAT registration number")
    items: List[InvoiceLineItem] = Field(description="List of purchased items")
    grand_total: float = Field(description="Grand total sum matches item total")`,
      codeLanguage: "python",
      metrics: [
        { label: "Invoice Processing Speed", before: "24 minutes / doc", after: "3.5 seconds", delta: "-99.7%" },
        { label: "Parsing Schema Exceptions", before: "12.3%", after: "0.0%", delta: "-100%" },
        { label: "Manual Data Entry Operations", before: "100%", after: "15%", delta: "-85%" }
      ],
      takeaways: [
        "Never pass unstructured raw model output to enterprise backend databases.",
        "Incorporate a secure Human-in-the-Loop validation dashboard for outliers.",
        "Deploy hybrid spatial OCR networks alongside standard linguistic LLM queries."
      ]
    }
  }
];

const categories = ["All", "Cloud & DevOps", "AI & Automation", "Software Engineering"];

const Blog = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [newsEmail, setNewsEmail] = useState("");
  const [newsSent, setNewsSent] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Prevent scroll when modal is active
  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedPost]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsEmail) {
      setNewsSent(true);
      toast.success("Subscribed successfully to Engineering Insights!");
    }
  };

  // Filter posts
  const filteredPosts = allBlogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = allBlogPosts.find((p) => p.featured);
  const regularPosts = filteredPosts.filter((p) => !p.featured || selectedCategory !== "All");

  return (
    <div className="relative bg-slate-950 min-h-screen text-slate-100 overflow-x-hidden">
      <ScrollProgress />
      <Navbar />

      {/* ── HERO BANNER ── */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-slate-900 bg-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 mb-6"
          >
            <Sparkles size={11} className="text-blue-400 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Engineering Blog</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight"
          >
            Systems, Architecture & <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Enterprise Engineering
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto"
          >
            Blueprints, deep dives, and system benchmarks published by the KaizenSpark Tech engineering team.
          </motion.p>
        </div>
      </section>

      {/* ── SEARCH & CATEGORY FILTER STRIP ── */}
      <section className="sticky top-[72px] z-30 bg-slate-950/80 backdrop-blur-md border-b border-slate-900/80 py-4">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                    : "bg-slate-900/40 text-slate-400 hover:text-white border border-slate-900 hover:border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search blueprints..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/50 border border-slate-850 hover:border-slate-800 focus:border-blue-500/50 rounded-xl py-2 pl-9 pr-4 text-xs text-white placeholder-slate-500 outline-none transition-colors"
            />
          </div>

        </div>
      </section>

      {/* ── MAIN BLOG ARCHIVE INDEX ── */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* 1. Featured Post */}
          {selectedCategory === "All" && !searchQuery && featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              onClick={() => setSelectedPost(featuredPost)}
              className="mb-16 group relative rounded-3xl overflow-hidden bg-slate-900/20 border border-slate-850 hover:border-blue-500/20 transition-all duration-300 grid lg:grid-cols-12 cursor-pointer"
            >
              {/* Left Column: Visual gradient & tag */}
              <div className="lg:col-span-5 relative min-h-[240px] p-8 flex flex-col justify-between overflow-hidden border-r border-slate-900">
                <img src="/kubernetes_devops.png" alt="Kubernetes DevOps" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-slate-950/80 bg-gradient-to-tr from-slate-950 via-slate-950/50 to-slate-950/85" />
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${featuredPost.color} z-10`} />
                
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 w-max relative z-10">
                  <Sparkles size={11} className="text-blue-400 animate-spin-slow" />
                  Featured Technical Guide
                </span>

                <div className="space-y-2 pt-12 relative z-10">
                  <p className="text-5xl font-black text-slate-800/80 leading-none">01</p>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">Deep Systems Integration</h4>
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="lg:col-span-7 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-slate-500 text-[10px] mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400/90 px-2 py-0.5 rounded-full bg-blue-500/5 border border-blue-500/10">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar size={11} />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={11} />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-blue-300 transition-colors leading-snug">
                    {featuredPost.title}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    {featuredPost.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-900 flex items-center justify-between">
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${featuredPost.author.color} flex items-center justify-center text-white text-[10px] font-bold shadow-sm`}>
                      {featuredPost.author.initials}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white leading-none">{featuredPost.author.name}</p>
                      <p className="text-[10px] text-slate-500 font-semibold mt-0.5 leading-none">{featuredPost.author.role}</p>
                    </div>
                  </div>

                  {/* CTA link */}
                  <button className="group/btn inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 group-hover:border-blue-500/30 rounded-xl text-xs font-bold text-slate-300 hover:text-white transition-all">
                    Read Blueprint
                    <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* 2. Grid of Regular Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {regularPosts.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="col-span-full py-16 text-center bg-slate-900/20 border border-slate-900 rounded-3xl"
                >
                  <BookOpen size={36} className="text-slate-700 mx-auto mb-4" />
                  <h3 className="text-base font-bold text-white mb-1">No articles found</h3>
                  <p className="text-slate-500 text-xs">Try selecting a different category or adjusting your search query.</p>
                </motion.div>
              ) : (
                regularPosts.map((post, i) => (
                  <motion.div
                    key={post.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    onClick={() => setSelectedPost(post)}
                    className="group relative bg-slate-900/40 border border-slate-850 hover:border-blue-500/30 rounded-2xl overflow-hidden flex flex-col justify-between h-full hover:shadow-xl hover:shadow-blue-500/4 transition-all duration-300 cursor-pointer"
                  >
                    {/* Visual post picture banner */}
                    <div className="relative h-44 overflow-hidden shrink-0 w-full bg-slate-950">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-slate-950/20" />
                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${post.color}`} />
                    </div>

                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400/90 px-2 py-0.5 rounded-full bg-blue-500/5 border border-blue-500/10">
                            {post.category}
                          </span>
                          <div className="flex items-center gap-3 text-slate-500 text-[10px]">
                            <div className="flex items-center gap-1">
                              <Calendar size={11} />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock size={11} />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>

                        <h3 className="text-sm font-bold text-white mb-3 group-hover:text-blue-300 transition-colors leading-snug">
                          {post.title}
                        </h3>

                        <p className="text-[11px] text-slate-400 leading-relaxed mb-6">
                          {post.desc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between mt-auto">
                        {/* Author */}
                        <div className="flex items-center gap-2.5">
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${post.author.color} flex items-center justify-center text-white text-[10px] font-bold`}>
                            {post.author.initials}
                          </div>
                          <div>
                            <p className="text-[11px] font-bold text-white leading-none">{post.author.name}</p>
                            <p className="text-[9px] text-slate-500 font-semibold mt-0.5 leading-none">{post.author.role}</p>
                          </div>
                        </div>

                        <div className="w-8 h-8 rounded-full bg-slate-950 border border-slate-850 group-hover:border-blue-500/30 group-hover:bg-slate-900/65 flex items-center justify-center text-slate-400 group-hover:text-blue-400 transition-all">
                          <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* ── TECHNICAL ARTICLE READER MODAL OVERLAY ── */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            {/* Backdrop Dismiss Trigger */}
            <div className="absolute inset-0 cursor-default" onClick={() => setSelectedPost(null)} />

            {/* Modal Container Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl shadow-black/80 flex flex-col z-10"
            >
              {/* Floating Exit Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-slate-950/80 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all shadow-md"
              >
                <X size={15} />
              </button>

              {/* Banner Top Graphic */}
              <div className="relative h-60 w-full overflow-hidden shrink-0">
                <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-950/70" />
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${selectedPost.color}`} />

                {/* Categories inside banner */}
                <div className="absolute bottom-6 left-8 flex flex-col gap-2">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-blue-400 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 w-max">
                    {selectedPost.category}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-white leading-tight drop-shadow-md pr-12">
                    {selectedPost.title}
                  </h2>
                </div>
              </div>

              {/* Core Content Body */}
              <div className="p-8 sm:p-10 space-y-8 flex-grow">
                
                {/* Meta details strip */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800/85">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${selectedPost.author.color} flex items-center justify-center text-white text-xs font-black shadow-inner`}>
                      {selectedPost.author.initials}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white leading-none">{selectedPost.author.name}</p>
                      <p className="text-[10px] text-slate-500 font-semibold mt-1 leading-none">{selectedPost.author.role} · KaizenSpark Engineering</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-slate-400 text-xs">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-slate-500" />
                      <span>Published {selectedPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={13} className="text-slate-500" />
                      <span>{selectedPost.readTime} Deep Dive</span>
                    </div>
                  </div>
                </div>

                {/* Introduction Callout */}
                <div className="text-slate-300 text-sm leading-relaxed border-l-2 border-blue-500 pl-5 py-1.5 italic bg-blue-500/5 rounded-r-2xl">
                  {selectedPost.content.intro}
                </div>

                {/* Section 1: Problem statement */}
                <div className="bg-slate-950/40 border border-slate-850/80 rounded-2xl p-6 space-y-3">
                  <div className="flex items-center gap-2 text-rose-400">
                    <X size={16} className="shrink-0" />
                    <h4 className="text-sm font-bold text-rose-400 uppercase tracking-wider">{selectedPost.content.problemHeading}</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {selectedPost.content.problemText}
                  </p>
                </div>

                {/* Section 2: Solution details */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-blue-400">
                    <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                    <h4 className="text-sm font-bold text-blue-400 uppercase tracking-wider">{selectedPost.content.solutionHeading}</h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedPost.content.solutionText}
                  </p>
                </div>

                {/* Section 3: Interactive Terminal Code Frame */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Terminal size={14} className="text-slate-500 shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Production Blueprint File</span>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-lg">
                    {/* Simulated OS Shell header */}
                    <div className="bg-slate-900 border-b border-slate-800/80 px-4 py-2.5 flex items-center justify-between shrink-0">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block" />
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono select-none">
                        deployment_{selectedPost.id}.{selectedPost.content.codeLanguage}
                      </span>
                      <Code size={12} className="text-slate-600" />
                    </div>

                    {/* Syntax block */}
                    <div className="p-5 overflow-x-auto font-mono text-[11px] text-slate-300 leading-relaxed bg-slate-950">
                      <pre className="whitespace-pre">{selectedPost.content.codeBlock}</pre>
                    </div>
                  </div>
                </div>

                {/* Section 4: Performance Benchmarks Metrics Grid */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">System Benchmarks & Results</h4>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {selectedPost.content.metrics.map((metric, mi) => (
                      <div key={mi} className="bg-slate-950/20 border border-slate-850/80 rounded-2xl p-5 text-center flex flex-col justify-between">
                        <span className="text-[10px] text-slate-500 font-bold uppercase leading-tight mb-2 block">{metric.label}</span>
                        <div className="flex items-baseline justify-center gap-2 my-2">
                          <span className="text-xs line-through text-slate-600 font-medium">{metric.before}</span>
                          <ArrowRight size={10} className="text-slate-500" />
                          <span className="text-lg font-black text-emerald-400">{metric.after}</span>
                        </div>
                        <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full w-max mx-auto block mt-1">
                          {metric.delta}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 5: Key Takeaways list */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Architecture Best Practices</h4>
                  <ul className="space-y-2">
                    {selectedPost.content.takeaways.map((item, ti) => (
                      <li key={ti} className="flex items-start gap-3 text-slate-300 text-xs">
                        <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Sales Consulting Call CTA */}
                <div className="pt-8 border-t border-slate-800/85 text-center space-y-4">
                  <h4 className="text-sm font-extrabold text-white">Need Advanced Architecture Custom Built for Your Org?</h4>
                  <p className="text-slate-400 text-xs max-w-lg mx-auto leading-relaxed">
                    KaizenSpark Tech specializes in product engineering, cloud infrastructure reliability pipelines, and multi-agent AI ecosystems built to scale.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedPost(null);
                      navigate("/contact");
                    }}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-650 text-white font-bold py-3 px-6 rounded-xl text-xs transition-all shadow-lg shadow-blue-500/10"
                  >
                    Request strategy consultation <ArrowRight size={13} />
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── NEWSLETTER SUBSCRIPTION BANNER ── */}
      <section className="relative py-24 border-t border-slate-900 bg-slate-950 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container max-w-xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6">
            <Sparkles size={11} />
            Stay Ahead
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Subscribe to Engineering Insights
          </h2>
          <p className="text-slate-400 text-sm mb-8 leading-relaxed max-w-md mx-auto">
            Get technical blueprints, system design diagrams, and cost optimization case studies delivered directly to your inbox. No spam. Unsubscribe anytime.
          </p>

          {newsSent ? (
            <motion.p
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-emerald-400 font-semibold text-sm"
            >
              ✓ Thank you! You've successfully subscribed to our blueprint newsletter.
            </motion.p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                required
                value={newsEmail}
                onChange={(e) => setNewsEmail(e.target.value)}
                placeholder="architect@yourcompany.com"
                className="flex-grow px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-blue-500/60 text-white text-xs outline-none transition-colors placeholder-slate-500"
              />
              <button
                type="submit"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs flex-shrink-0 transition-colors"
              >
                <Send size={13} /> Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
