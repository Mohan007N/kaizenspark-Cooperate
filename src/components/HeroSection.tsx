import { useEffect, useRef, useState } from "react";
import { ChevronRight, Sparkles, Zap, TrendingUp, ArrowDown } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LiveDashboard from "./LiveDashboard";

const HeroSection = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 250]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.95]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  const specialisms = [
    "Digital Marketing", "Web Development", "Mobile Apps",
    "UI/UX Design", "AI & Automation", "E-commerce",
    "Enterprise Solutions", "SEO & SEM", "Startup Support",
    "Cloud & DevOps", "Brand Identity", "CRM & ERP",
  ];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setWordIndex(i => (i + 1) % specialisms.length), 2200);
    return () => clearInterval(t);
  }, []);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden pt-20"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          }}
        />
      </div>

      {/* CONTENT */}
      <motion.div 
        className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20" 
        style={{ y: y1, opacity, scale }}
      >
        {/* LEFT SIDE - Text Content */}
        <div className="flex flex-col items-start text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm mb-8 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all group cursor-pointer"
          >
            <Sparkles size={14} className="text-blue-400 group-hover:rotate-12 transition-transform" />
            <span className="text-[11px] text-slate-200 uppercase tracking-widest font-bold">
              Chennai's Premier Digital Agency
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-slate-200 bg-clip-text text-transparent block">
              We Build Digital Products
            </span>
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent block">
              That Drive Real Growth
            </span>
          </motion.h1>

          {/* Specializing in — animated word cycler */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="flex items-center gap-2 mb-5 h-6"
          >
            <span className="text-sm text-slate-500 font-medium leading-none">Specializing in</span>
            <div className="relative overflow-hidden h-5 flex items-center min-w-[200px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0,  opacity: 1 }}
                  exit={{  y: -16, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center text-sm font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent whitespace-nowrap"
                >
                  {specialisms[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-base md:text-lg text-slate-400 mb-10 max-w-xl leading-relaxed"
          >
            From startups to enterprises — we design, develop, and scale digital experiences that convert visitors into customers and ideas into reality.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => navigate("/contact")}
              className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/50 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              <Zap size={18} className="relative group-hover:rotate-12 transition-transform" />
              <span className="relative">Start a Project</span>
              <ChevronRight size={18} className="relative group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate("/services")}
              className="group px-8 py-4 rounded-xl border-2 border-slate-700 hover:border-blue-500/50 hover:bg-slate-800/50 text-slate-300 hover:text-white font-bold transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <TrendingUp size={18} className="group-hover:scale-110 transition-transform" />
              View Our Work
            </button>
          </motion.div>
        </div>

        {/* RIGHT SIDE - Live Dashboard */}
        <div className="relative flex justify-center lg:justify-end">
          <LiveDashboard />
        </div>
      </motion.div>

      {/* Scroll instruction */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 cursor-pointer hover:text-slate-300 transition-colors z-20"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase font-semibold tracking-widest">Scroll Down</span>
        <ArrowDown size={14} className="animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
