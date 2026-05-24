import { motion } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const comparisons = [
  {
    area: "Approach",
    traditional: "Generic templates",
    kaizen: "Engineered systems",
  },
  {
    area: "Development Speed",
    traditional: "Slow, waterfall delivery",
    kaizen: "Agile execution & sprints",
  },
  {
    area: "Team",
    traditional: "Outsourced freelancers",
    kaizen: "Dedicated engineering team",
  },
  {
    area: "Communication",
    traditional: "Limited, delayed updates",
    kaizen: "Clear, real-time reporting",
  },
  {
    area: "Support",
    traditional: "Short-term project fixes",
    kaizen: "Long-term technical partnership",
  },
  {
    area: "Architecture",
    traditional: "Short-term workarounds",
    kaizen: "Scalable, future-proof design",
  },
];

const WhyPartnerSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-28 overflow-hidden border-t border-slate-900">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/20 to-slate-950" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/25 bg-blue-500/8 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
              Why Partner With Us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
            Why Businesses Choose{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              KaizenSpark
            </span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            We go beyond development. We become your technology partner for long-term success.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 mb-4 px-4">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Area</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Traditional Vendors</div>
            <div className="text-xs font-bold text-blue-400 uppercase tracking-wider text-center">KaizenSpark Approach</div>
          </div>

          {/* Table Rows */}
          <div className="space-y-2">
            {comparisons.map((row, i) => (
              <motion.div
                key={row.area}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="grid grid-cols-3 gap-4 items-center px-4 py-4 rounded-xl bg-slate-900/50 border border-slate-800/60 hover:border-slate-700/70 transition-colors"
              >
                {/* Area */}
                <div className="text-sm font-semibold text-slate-300">{row.area}</div>

                {/* Traditional */}
                <div className="flex items-center gap-2 justify-center">
                  <XCircle size={14} className="text-red-500/70 flex-shrink-0" />
                  <span className="text-xs text-slate-500 text-center">{row.traditional}</span>
                </div>

                {/* KaizenSpark */}
                <div className="flex items-center gap-2 justify-center">
                  <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" />
                  <span className="text-xs text-emerald-300 font-medium text-center">{row.kaizen}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => navigate("/contact")}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold transition-all shadow-xl shadow-blue-500/20 hover:shadow-blue-500/35"
          >
            Start a Partnership
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyPartnerSection;
