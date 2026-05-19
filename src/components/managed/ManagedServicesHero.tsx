import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Shield, Building2, Layers, Activity, ChevronRight } from "lucide-react";

const stats = [
  { value: "PMS", label: "Proactive Shield", icon: Shield, color: "text-blue-400" },
  { value: "FMS", label: "Facility Foundation", icon: Building2, color: "text-cyan-400" },
  { value: "L1–L3", label: "Support Tiers", icon: Layers, color: "text-indigo-400" },
  { value: "99.9%", label: "Uptime Target", icon: Activity, color: "text-emerald-400" },
];

const ManagedServicesHero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-[75vh] flex flex-col justify-center items-center overflow-hidden pt-24 pb-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0a1628] to-slate-950" />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.07, 0.16, 0.07] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 16, repeat: Infinity, delay: 3 }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl"
      />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm mb-8"
        >
          <Shield size={14} className="text-blue-400" />
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
            Managed IT Services
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight"
        >
          <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
            Managed IT Infrastructure
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Delivery Models & SLAs
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Infographic-style delivery models that make preventive maintenance, facility operations, and SLA-driven support easy to evaluate and adopt — with structured escalation, rapid response, and operational continuity for mission-critical environments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => navigate("/services#managed")}
            className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-500/30 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <span className="relative">Explore PMS</span>
            <ChevronRight size={18} className="relative group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => navigate("/services#managed")}
            className="group px-8 py-4 rounded-xl border-2 border-slate-700 hover:border-blue-500/50 hover:bg-slate-800/50 text-slate-300 hover:text-white font-bold transition-all flex items-center justify-center gap-2"
          >
            Explore FMS
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-slate-800/50"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-slate-900/50 border border-slate-800/50"
              >
                <Icon size={20} className={stat.color} />
                <p className={`text-2xl font-black ${stat.color}`}>{stat.value}</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold text-center">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ManagedServicesHero;
