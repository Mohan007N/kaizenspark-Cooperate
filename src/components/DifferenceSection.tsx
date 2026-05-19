import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";

const failures = [
  "A vendor who disappears after onboarding",
  "Generic email blasts that get you blacklisted",
  "Interns calling themselves 'SDRs'",
  "Dashboards full of vanity metrics",
  "12-week strategy before any action",
  "Agencies who've never sold IT services",
];

const differences = [
  "A team that sits inside your sales process",
  "Precision outreach to the right buyers only",
  "Senior practitioners with 6 years of IT expertise",
  "One metric: qualified meetings booked",
  "Week one: sequences live, calendar moving",
  "Specialists who speak IT fluently",
];

const DifferenceSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-950 border-t border-slate-800/50">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Most lead gen agencies fail.
          </h2>
          <p className="text-xl text-slate-400">
            Stop wasting time with generic approaches.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* What You've Dealt With */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 lg:p-10"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-red-400">What You've Dealt With</span>
            </h3>
            <ul className="space-y-5">
              {failures.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-red-500/70 shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* The vConnect IQ Difference */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-900/20 to-blue-950/20 border border-blue-500/30 rounded-3xl p-8 lg:p-10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue-500/5 backdrop-blur-sm" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  The vConnect IQ Difference
                </span>
              </h3>
              <ul className="space-y-5">
                {differences.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-slate-200 font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;
