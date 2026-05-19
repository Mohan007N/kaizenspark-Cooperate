import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "What IT solutions does KaizenSpark provide?",
    a: "KaizenSpark provides a comprehensive range of enterprise IT solutions including infrastructure & data center management, network & security, cloud & hybrid IT, collaboration & AV systems, IoT & surveillance, preventive maintenance services, and facility management services. We cover the complete technology lifecycle from design through ongoing operations.",
  },
  {
    q: "How do KaizenSpark solutions differ from basic IT support?",
    a: "Unlike reactive break-fix support, KaizenSpark delivers integrated programs built around business outcomes. We combine preventive maintenance, proactive monitoring, SLA-driven incident response, and strategic advisory — ensuring systems remain secure, compliant, and aligned to your operational goals on an ongoing basis, not just when something breaks.",
  },
  {
    q: "Can KaizenSpark design a custom solution for my organization?",
    a: "Yes. Every engagement begins with a technology assessment to understand your current environment, compliance requirements, and growth targets. We then design a tailored roadmap that integrates the right combination of infrastructure, security, cloud, and managed services — built specifically around your business needs and budget.",
  },
];

const SolutionsFAQ = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />

      <div className="container relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
            <HelpCircle size={14} className="text-blue-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
              Solutions — Common Questions
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
            Clear Answers for Teams Evaluating{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Enterprise IT Partners
            </span>
          </h2>
          <p className="text-slate-400">Everything you need to make a confident decision.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-start gap-4 group ${
                  open === i
                    ? "bg-blue-500/10 border-blue-500/30"
                    : "bg-slate-900/60 border-slate-800/50 hover:border-blue-500/20 hover:bg-slate-900/80"
                }`}
              >
                <ChevronDown
                  size={20}
                  className={`text-blue-400 shrink-0 mt-0.5 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                />
                <div className="flex-1">
                  <p className={`font-semibold text-base transition-colors ${open === i ? "text-white" : "text-slate-300 group-hover:text-white"}`}>
                    {faq.q}
                  </p>
                  <AnimatePresence>
                    {open === i && (
                      <motion.p
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-slate-400 text-sm leading-relaxed overflow-hidden"
                      >
                        {faq.a}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center p-8 bg-blue-500/5 border border-blue-500/20 rounded-2xl"
        >
          <p className="text-slate-400 mb-4 text-sm">Have a specific requirement not covered here?</p>
          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all text-sm"
          >
            Request a Tailored Roadmap
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsFAQ;
