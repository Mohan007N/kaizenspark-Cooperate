import { useEffect, useRef, useState } from "react";
import { ChevronRight, ArrowRight, ArrowDown, Server, GitBranch, Cpu, Shield, Cloud, Code2 } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

// 2×2 Grid monitoring dashboard visual
const EngineeringVisual = () => {
  const layers = [
    {
      label: "Frontend Layer",
      icon: Code2,
      color: "text-blue-400",
      topBorder: "border-t-blue-500",
      glow: "shadow-blue-500/10",
      bg: "bg-blue-500/8",
      ring: "#3b82f6",
      items: ["React / Next.js", "TypeScript", "UI Systems"],
      pct: 94,
      status: "Healthy",
      statusColor: "text-emerald-400",
      statusDot: "bg-emerald-400",
    },
    {
      label: "Backend & APIs",
      icon: Server,
      color: "text-indigo-400",
      topBorder: "border-t-indigo-500",
      glow: "shadow-indigo-500/10",
      bg: "bg-indigo-500/8",
      ring: "#6366f1",
      items: ["Node.js", "REST / GraphQL", "Microservices"],
      pct: 88,
      status: "Healthy",
      statusColor: "text-emerald-400",
      statusDot: "bg-emerald-400",
    },
    {
      label: "AI & Automation",
      icon: Cpu,
      color: "text-violet-400",
      topBorder: "border-t-violet-500",
      glow: "shadow-violet-500/10",
      bg: "bg-violet-500/8",
      ring: "#8b5cf6",
      items: ["LLM Integration", "RPA Workflows", "Data Pipelines"],
      pct: 81,
      status: "Training",
      statusColor: "text-amber-400",
      statusDot: "bg-amber-400",
    },
    {
      label: "Cloud Infrastructure",
      icon: Cloud,
      color: "text-cyan-400",
      topBorder: "border-t-cyan-500",
      glow: "shadow-cyan-500/10",
      bg: "bg-cyan-500/8",
      ring: "#06b6d4",
      items: ["AWS / GCP", "Docker / K8s", "CI/CD DevOps"],
      pct: 99,
      status: "Optimal",
      statusColor: "text-blue-400",
      statusDot: "bg-blue-400",
    },
  ];

  const metrics = [
    { label: "Uptime",   value: "99.9%", color: "text-emerald-400", bg: "bg-emerald-500/8", border: "border-emerald-500/15" },
    { label: "Clients",  value: "70+",   color: "text-blue-400",    bg: "bg-blue-500/8",    border: "border-blue-500/15"    },
    { label: "Projects", value: "150+",  color: "text-violet-400",  bg: "bg-violet-500/8",  border: "border-violet-500/15"  },
  ];

  const circumference = 2 * Math.PI * 18; // r=18

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.4 }}
      className="relative w-full max-w-[460px]"
    >
      {/* Soft ambient glow */}
      <div className="absolute -inset-6 bg-gradient-to-br from-blue-600/8 via-violet-500/5 to-cyan-500/6 rounded-3xl blur-3xl pointer-events-none" />

      <div className="relative bg-slate-900/70 backdrop-blur-2xl border border-slate-700/40 rounded-2xl overflow-hidden shadow-2xl">

        {/* ── Window chrome ── */}
        <div className="flex items-center gap-3 px-4 py-2.5 bg-slate-900/80 border-b border-slate-800/60">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          </div>
          <div className="flex-1 flex justify-center">
            <span className="text-[10px] font-mono text-slate-500">kaizenspark / engineering-stack</span>
          </div>
          <div className="flex items-center gap-1.5">
            <motion.span
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-emerald-400"
            />
            <span className="text-[10px] font-bold text-emerald-400">Live</span>
          </div>
        </div>

        {/* ── Panel header ── */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800/40">
          <div>
            <p className="text-[11px] font-extrabold text-white tracking-wide uppercase">System Architecture</p>
            <p className="text-[10px] text-slate-500 mt-0.5">KaizenSpark Engineering Stack</p>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Active
          </span>
        </div>

        {/* ── 2×2 grid ── */}
        <div className="grid grid-cols-2 gap-2.5 p-3">
          {layers.map((layer, i) => {
            const Icon = layer.icon;
            const offset = circumference - (layer.pct / 100) * circumference;
            return (
              <motion.div
                key={layer.label}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.65 + i * 0.12 }}
                className={`group relative bg-slate-800/30 hover:bg-slate-800/55 border-t-2 ${layer.topBorder} border-x border-b border-slate-800/40 hover:border-slate-700/60 rounded-xl p-3.5 transition-all duration-300 hover:shadow-lg ${layer.glow} flex flex-col gap-2.5 overflow-hidden`}
              >
                {/* Inner shimmer */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-white/[0.02] to-transparent rounded-xl" />

                {/* Top row: icon + SVG ring */}
                <div className="flex items-start justify-between">
                  <div className={`w-8 h-8 rounded-lg ${layer.bg} flex items-center justify-center shrink-0`}>
                    <Icon size={15} className={layer.color} />
                  </div>

                  {/* Radial progress ring */}
                  <div className="relative w-9 h-9 shrink-0">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 40 40">
                      <circle cx="20" cy="20" r="18" fill="none" stroke="rgba(148,163,184,0.1)" strokeWidth="3" />
                      <motion.circle
                        cx="20" cy="20" r="18"
                        fill="none"
                        stroke={layer.ring}
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset: offset }}
                        transition={{ duration: 1.4, delay: 0.9 + i * 0.15, ease: "easeOut" }}
                        opacity={0.85}
                      />
                    </svg>
                    <span className={`absolute inset-0 flex items-center justify-center text-[9px] font-black ${layer.color}`}>
                      {layer.pct}%
                    </span>
                  </div>
                </div>

                {/* Layer name + status */}
                <div>
                  <p className="text-[11px] font-bold text-white leading-tight">{layer.label}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className={`w-1 h-1 rounded-full ${layer.statusDot}`} />
                    <span className={`text-[9px] font-semibold ${layer.statusColor}`}>{layer.status}</span>
                  </div>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="text-[8.5px] px-1.5 py-0.5 rounded font-mono bg-slate-900/60 text-slate-500 border border-slate-700/30 group-hover:text-slate-400 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Bottom metric tiles ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="grid grid-cols-3 gap-2.5 px-3 pb-3"
        >
          {metrics.map((m) => (
            <div
              key={m.label}
              className={`${m.bg} border ${m.border} rounded-xl py-3 flex flex-col items-center gap-0.5 hover:brightness-110 transition-all`}
            >
              <p className={`text-base font-extrabold leading-none ${m.color}`}>{m.value}</p>
              <p className="text-[9px] text-slate-600 font-semibold uppercase tracking-wider">{m.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};



const HeroSection = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  const engineeringTerms = [
    "Scalable Architecture",
    "AI Automation",
    "Cloud Infrastructure",
    "Product Engineering",
    "Enterprise Systems",
    "DevOps & CI/CD",
  ];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setWordIndex((i) => (i + 1) % engineeringTerms.length), 2500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      const y = (e.clientY / window.innerHeight - 0.5) * 15;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden pt-20"
    >
      {/* Subtle animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-3xl"
          style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 80, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/8 rounded-full blur-3xl"
          style={{ transform: `translate(${-mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px)` }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px)`,
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      {/* CONTENT */}
      <motion.div
        className="container relative z-10 grid lg:grid-cols-2 gap-16 items-center py-20"
        style={{ y: y1, opacity }}
      >
        {/* LEFT SIDE */}
        <div className="flex flex-col items-start text-left">
          {/* Badge — Engineering positioning */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/25 bg-blue-500/8 backdrop-blur-sm mb-8 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-[10px] text-slate-300 uppercase tracking-widest font-bold">
              Software Engineering & AI Automation Company
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold mb-6 leading-[1.1] tracking-tight"
          >
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent block">
              We Build Scalable Software,
            </span>
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent block mt-1">
              AI Systems & Digital Infrastructure.
            </span>
          </motion.h1>

          {/* Animated engineering term */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center gap-2 mb-6 h-6"
          >
            <span className="text-sm text-slate-500 font-medium">Specializing in</span>
            <div className="relative overflow-hidden h-5 flex items-center min-w-[220px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -16, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center text-sm font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent whitespace-nowrap"
                >
                  {engineeringTerms[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-base md:text-lg text-slate-400 mb-10 max-w-xl leading-relaxed"
          >
            KaizenSpark helps startups and businesses engineer modern digital systems that automate operations, improve efficiency, and support scalable growth.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10"
          >
            <button
              onClick={() => navigate("/contact")}
              className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              <span className="relative">Book Strategy Call</span>
              <ChevronRight size={18} className="relative group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate("/our-work")}
              className="group px-8 py-4 rounded-xl border border-slate-700/80 hover:border-blue-500/40 hover:bg-slate-800/40 text-slate-300 hover:text-white font-bold transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              View Case Studies
            </button>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500"
          >
            {["NDA Available", "Proposal in 24 Hours", "Dedicated Engineering Team"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-emerald-400" />
                {t}
              </span>
            ))}
          </motion.div>
        </div>

        {/* RIGHT SIDE — Engineering Architecture Visual */}
        <div className="relative flex justify-center lg:justify-end">
          <EngineeringVisual />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 cursor-pointer hover:text-slate-400 transition-colors z-20"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
      >
        <span className="text-[10px] uppercase font-semibold tracking-widest">Scroll</span>
        <ArrowDown size={13} className="animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
