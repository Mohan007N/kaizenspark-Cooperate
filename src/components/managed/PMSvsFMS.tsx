import { motion } from "framer-motion";
import { ShieldCheck, Building2, CheckCircle2 } from "lucide-react";

const PMSvsFMS = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Comparative Insight</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
            PMS <span className="text-slate-500">vs</span> FMS
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Complementary models — component-level prevention plus facility-level continuity. Together they deliver enterprise-grade resilience.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* PMS */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-950/40 to-slate-950/60 border border-blue-500/20 rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2 block">PMS</span>
              <h3 className="text-white font-black text-xl mb-2">Preventive Maintenance</h3>
              <p className="text-slate-400 text-sm mb-6">Focus on proactive device and software maintenance.</p>
              <div className="space-y-3">
                {[
                  "Patching, hardening, and compliance audits",
                  "Scheduled upkeep before failures occur",
                  "Device-level security and integrity",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={15} className="text-blue-400 mt-0.5 shrink-0" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* VS divider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center justify-center gap-4"
          >
            <div className="w-px h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent hidden lg:block" />
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
              <span className="text-white font-black text-sm">VS</span>
            </div>
            <div className="w-px h-full bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent hidden lg:block" />
            
            {/* Integration note */}
            <div className="lg:absolute lg:bottom-8 lg:left-1/2 lg:-translate-x-1/2 lg:w-72 mt-6 lg:mt-0 p-4 bg-blue-500/5 border border-blue-500/20 rounded-2xl text-center">
              <p className="text-xs text-blue-300 font-semibold leading-relaxed">
                PMS protects each asset at the component level; FMS sustains the full facility environment — together they deliver enterprise-grade resilience.
              </p>
            </div>
          </motion.div>

          {/* FMS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-cyan-950/40 to-slate-950/60 border border-cyan-500/20 rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/15 flex items-center justify-center mb-5">
                <Building2 className="w-6 h-6 text-cyan-400" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2 block">FMS</span>
              <h3 className="text-white font-black text-xl mb-2">Facility Management</h3>
              <p className="text-slate-400 text-sm mb-6">Focus on operational continuity and infrastructure stability.</p>
              <div className="space-y-3">
                {[
                  "Power, cooling, and environmental control",
                  "24/7 monitoring, backups, and network oversight",
                  "Facility-wide service continuity",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={15} className="text-cyan-400 mt-0.5 shrink-0" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom integration statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Stability through integration", desc: "PMS protects component health while FMS protects environmental continuity." },
              { label: "Success is measurable", desc: "99.5%–99.9% uptime depends on strict response and resolution SLAs." },
              { label: "Continuous improvement", desc: "RCA and AI-assisted monitoring move operations from reactive to predictive." },
              { label: "Expert escalation", desc: "A tiered support model ensures each issue reaches the right skill level quickly." },
            ].map((point) => (
              <div key={point.label} className="p-4 bg-slate-900/50 border border-slate-800/50 rounded-xl">
                <p className="text-blue-400 font-bold text-sm mb-2">{point.label}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PMSvsFMS;
