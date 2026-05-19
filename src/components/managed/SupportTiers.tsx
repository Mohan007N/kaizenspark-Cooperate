import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Users, ChevronDown, Zap } from "lucide-react";

const tiers = [
  {
    level: "L1",
    title: "Service Desk Engineer (SPOC)",
    desc: "Initial ticketing, first response, and standard troubleshooting.",
    escalates: "Escalates to L2",
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-400",
  },
  {
    level: "L2",
    title: "Technical Specialist",
    desc: "Complex configuration and system-level issue resolution.",
    escalates: "Escalates to L3",
    color: "from-indigo-500 to-blue-500",
    borderColor: "border-indigo-500/30",
    bgColor: "bg-indigo-500/10",
    textColor: "text-indigo-400",
  },
  {
    level: "L3",
    title: "Senior Engineer / OEM Support",
    desc: "Architecture-level remediation and OEM escalation support.",
    escalates: null,
    color: "from-violet-500 to-indigo-500",
    borderColor: "border-violet-500/30",
    bgColor: "bg-violet-500/10",
    textColor: "text-violet-400",
  },
];

const SupportTiers = () => {
  const navigate = useNavigate();
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#0a1628] to-slate-950" />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.07, 0.14, 0.07] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 mb-6">
            <Users size={14} className="text-indigo-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Support Model</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
            Tiered Escalation —{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Right Expertise at the Right Time
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Structured L1 through L3 paths ensure incidents are resolved efficiently without unnecessary delay. Each level has the expertise and tools needed for its scope of responsibility.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {tiers.map((tier, i) => (
            <div key={tier.level}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={`relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 border ${tier.borderColor} rounded-2xl p-7 overflow-hidden group hover:shadow-xl transition-all duration-300`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${tier.color} opacity-0 group-hover:opacity-5 transition-opacity`} />

                <div className="flex items-start gap-5 relative z-10">
                  <div className={`flex flex-col items-center gap-1`}>
                    <div className={`w-14 h-14 rounded-2xl ${tier.bgColor} border ${tier.borderColor} flex items-center justify-center shrink-0`}>
                      <span className={`text-lg font-black ${tier.textColor}`}>{tier.level}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <p className="text-white font-bold text-base">{tier.title}</p>
                        <p className="text-slate-400 text-sm mt-1 leading-relaxed">{tier.desc}</p>
                      </div>
                      {tier.escalates && (
                        <span className={`text-[10px] font-bold uppercase tracking-wider ${tier.textColor} shrink-0 border ${tier.borderColor} px-2.5 py-1 rounded-full ${tier.bgColor}`}>
                          {tier.escalates}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Arrow between tiers */}
              {i < tiers.length - 1 && (
                <div className="flex justify-center my-2">
                  <div className="flex flex-col items-center gap-1 text-slate-600">
                    <div className="w-0.5 h-4 bg-gradient-to-b from-slate-700 to-transparent" />
                    <ChevronDown size={16} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button
            onClick={() => navigate("/contact")}
            className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-500/30 hover:shadow-2xl mx-auto overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <Zap size={18} className="relative group-hover:rotate-12 transition-transform" />
            <span className="relative">Request a Consultation</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportTiers;
