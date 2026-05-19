import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const categories = [
  "Preventive Maintenance Services (PMS)",
  "Facility Management Services (FMS)",
  "Managed IT Infrastructure Support",
  "Network & Security Solutions",
  "Cloud & Data Center Services",
  "Video Conferencing & Collaboration",
  "Digital Signage & AV Integration",
  "IoT & Surveillance Systems",
];

const SolutionCategories = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Solution Categories</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
              A Complete Portfolio of{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Enterprise IT Services
              </span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              From preventive maintenance and facility management to cloud infrastructure and IoT surveillance — every solution is engineered for operational continuity, security compliance, and measurable business outcomes.
            </p>
            <p className="text-slate-400 leading-relaxed mb-10">
              Need operational SLAs and incident response? Our managed services team is ready to design a tailored roadmap for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate("/managed-services")}
                className="group px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20 overflow-hidden relative"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                <span className="relative">See Managed Services</span>
                <ArrowRight size={16} className="relative group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="px-7 py-3.5 rounded-xl border border-slate-700 hover:border-blue-500/50 text-slate-300 hover:text-white font-semibold transition-all"
              >
                Contact Us
              </button>
            </div>
          </motion.div>

          {/* Right — category list */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-slate-900/60 backdrop-blur-md border border-slate-800/50 rounded-3xl p-8"
          >
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <CheckCircle2 size={20} className="text-blue-400" />
              Available Solution Categories
            </h3>
            <div className="space-y-3">
              {categories.map((cat, i) => (
                <motion.div
                  key={cat}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/40 border border-slate-700/30 hover:border-blue-500/30 hover:bg-slate-800/70 transition-all group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <span className="text-xs font-black text-blue-400 font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{cat}</p>
                  <ArrowRight size={14} className="text-slate-600 group-hover:text-blue-400 ml-auto opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionCategories;
