import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "What is Preventive Maintenance Services (PMS)?",
    a: "PMS is KaizenSpark's proactive maintenance program that keeps IT assets healthy, secure, and compliant before incidents occur. It covers automated patch management, hardware inspections, vulnerability remediation, security scans, and antivirus updates — scheduled at regular intervals to prevent failures rather than react to them.",
  },
  {
    q: "What is Facility Management Services (FMS) for IT?",
    a: "FMS is KaizenSpark's facility-level oversight program that manages power, cooling, network infrastructure, backups, and environmental controls across your complete IT facility. It includes 24/7/365 IoT-based monitoring, data centre management, and disaster recovery readiness — ensuring the entire facility environment operates continuously.",
  },
  {
    q: "What SLA response times does KaizenSpark offer?",
    a: "KaizenSpark offers tiered SLA commitments aligned to business impact. P1 Critical incidents receive a 15-minute response and 2–4 hour resolution. P2 High receives a 30-minute response. P3 Medium receives 2 hours, and P4 Low receives 4 hours. All P1 incidents include a Root Cause Analysis to prevent recurrence. Overall uptime commitments range from 99.5% to 99.9%.",
  },
  {
    q: "Does KaizenSpark provide cloud and security solutions?",
    a: "Yes. Beyond PMS and FMS, KaizenSpark delivers cloud & data center services, network & security solutions, hybrid IT architecture, and AI-assisted monitoring. Our security practice covers perimeter defense, segmentation, compliance-aligned auditing, and ongoing vulnerability management — all integrated with the managed services delivery model.",
  },
];

const ManagedFAQ = () => {
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
              Managed Services — Common Questions
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
            SLA, PMS, FMS & Support{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Explained
            </span>
          </h2>
          <p className="text-slate-400">For decision-makers evaluating enterprise IT managed services.</p>
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
      </div>
    </section>
  );
};

export default ManagedFAQ;
