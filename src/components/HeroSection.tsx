import { useEffect, useRef, useState } from "react";
import { ChevronRight, ArrowRight, ArrowDown, Server, GitBranch, Cpu, Shield, Cloud, Code2 } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Clean engineering visual replacing the fake dashboard
const EngineeringVisual = () => {
  const layers = [
    { label: "Frontend Layer", icon: Code2, color: "from-blue-500 to-cyan-500", items: ["React / Next.js", "TypeScript", "UI Systems"] },
    { label: "Backend & APIs", icon: Server, color: "from-indigo-500 to-blue-500", items: ["Node.js", "REST / GraphQL", "Microservices"] },
    { label: "AI & Automation", icon: Cpu, color: "from-violet-500 to-indigo-500", items: ["LLM Integration", "RPA Workflows", "Data Pipelines"] },
    { label: "Cloud Infrastructure", icon: Cloud, color: "from-cyan-500 to-teal-500", items: ["AWS / GCP", "Docker / K8s", "CI/CD DevOps"] },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="relative w-full max-w-lg"
    >
      {/* Glow backdrop */}
      <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/10 via-indigo-500/5 to-cyan-500/10 rounded-3xl blur-3xl" />

      <div className="relative space-y-3">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
            <GitBranch size={14} className="text-white" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">System Architecture</p>
            <p className="text-[10px] text-slate-600">KaizenSpark Engineering Stack</p>
          </div>
          <div className="ml-auto flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] text-emerald-400 font-medium">Active</span>
          </div>
        </div>

        {layers.map((layer, i) => {
          const Icon = layer.icon;
          return (
            <motion.div
              key={layer.label}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
              className="group relative bg-slate-900/70 backdrop-blur-sm border border-slate-800/80 hover:border-slate-700/80 rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5"
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${layer.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                  <Icon size={14} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-white mb-1.5">{layer.label}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {layer.items.map((item) => (
                      <span
                        key={item}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-400 border border-slate-700/60 group-hover:border-slate-600/60 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/70 flex-shrink-0" />
              </div>
            </motion.div>
          );
        })}

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-4 flex items-center gap-4 px-4 py-3 bg-slate-900/50 border border-slate-800/60 rounded-xl"
        >
          <Shield size={12} className="text-emerald-400 flex-shrink-0" />
          <div className="flex-1">
            <div className="flex gap-4">
              {[
                { label: "Uptime", value: "99.9%" },
                { label: "Clients", value: "50+" },
                { label: "Projects", value: "150+" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-[10px] text-slate-500">{s.label}</p>
                  <p className="text-xs font-bold text-white">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
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
