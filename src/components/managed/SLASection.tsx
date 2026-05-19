import { motion } from "framer-motion";
import { Activity, AlertTriangle, AlertCircle, Info, Clock } from "lucide-react";

const slaLevels = [
  {
    priority: "P1",
    label: "Critical",
    desc: "System down; major business impact.",
    response: "15 Minutes",
    resolution: "2–4 Hours",
    color: "from-red-500 to-rose-600",
    borderColor: "border-red-500/30",
    bgColor: "bg-red-500/10",
    textColor: "text-red-400",
    icon: AlertTriangle,
    rca: true,
  },
  {
    priority: "P2",
    label: "High",
    desc: "Major functionality impacted.",
    response: "30 Minutes",
    resolution: "4–8 Hours",
    color: "from-orange-500 to-amber-600",
    borderColor: "border-orange-500/30",
    bgColor: "bg-orange-500/10",
    textColor: "text-orange-400",
    icon: AlertCircle,
    rca: false,
  },
  {
    priority: "P3",
    label: "Medium",
    desc: "Partial impact; workarounds possible.",
    response: "2 Hours",
    resolution: "1 Business Day",
    color: "from-yellow-500 to-amber-500",
    borderColor: "border-yellow-500/30",
    bgColor: "bg-yellow-500/10",
    textColor: "text-yellow-400",
    icon: Info,
    rca: false,
  },
  {
    priority: "P4",
    label: "Low",
    desc: "Minor requests or low-impact issues.",
    response: "4 Hours",
    resolution: "2–3 Business Days",
    color: "from-blue-500 to-indigo-500",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-400",
    icon: Clock,
    rca: false,
  },
];

const flowSteps = [
  { label: "Incident Detected", desc: "Monitoring alerts and service desk intake validate impact." },
  { label: "Response Initiated", desc: "Priority-based escalation assigns the right engineer." },
  { label: "Resolution In Progress", desc: "Technical teams restore service within SLA targets." },
  { label: "Root Cause Analysis", desc: "P1 events include RCA to prevent recurrence." },
];

const SLASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900" />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
            <Activity size={14} className="text-blue-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
              Service Levels & Incident Response
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
            Structured Escalation &{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Rapid Response
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Operational continuity for mission-critical environments. SLA commitment of 99.5%–99.9% uptime with enterprise targets aligned to business impact and severity.
          </p>
        </motion.div>

        {/* Response flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            {flowSteps.map((step, i) => (
              <div key={step.label} className="flex items-start md:items-center gap-4 flex-1">
                <div className="flex flex-col md:flex-row items-center gap-4 flex-1">
                  <div className="flex flex-col items-center gap-2 flex-1">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 border-2 border-blue-500/40 flex items-center justify-center text-blue-400 font-black text-sm shrink-0">
                      {i + 1}
                    </div>
                    <div className="text-center">
                      <p className="text-white font-bold text-sm">{step.label}</p>
                      <p className="text-slate-500 text-xs mt-1 max-w-[160px]">{step.desc}</p>
                    </div>
                  </div>
                  {i < flowSteps.length - 1 && (
                    <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500/40 to-cyan-500/20 hidden md:block shrink-0" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* SLA table */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {slaLevels.map((level, i) => {
            const Icon = level.icon;
            return (
              <motion.div
                key={level.priority}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className={`relative bg-slate-900/80 border ${level.borderColor} rounded-2xl p-6 overflow-hidden group transition-all duration-300 hover:shadow-xl`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${level.color} opacity-0 group-hover:opacity-5 transition-opacity`} />

                {/* Priority badge */}
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${level.bgColor} border ${level.borderColor} mb-4`}>
                  <Icon size={13} className={level.textColor} />
                  <span className={`text-xs font-black uppercase tracking-widest ${level.textColor}`}>
                    {level.priority}
                  </span>
                  <span className={`text-xs font-semibold ${level.textColor} opacity-70`}>{level.label}</span>
                </div>

                <p className="text-slate-400 text-xs mb-5 leading-relaxed">{level.desc}</p>

                <div className="space-y-3">
                  <div>
                    <p className="text-[10px] text-slate-600 uppercase tracking-widest font-semibold mb-1">Response</p>
                    <p className={`text-base font-black ${level.textColor}`}>{level.response}</p>
                  </div>
                  <div className="h-px bg-slate-800" />
                  <div>
                    <p className="text-[10px] text-slate-600 uppercase tracking-widest font-semibold mb-1">Resolution</p>
                    <p className="text-base font-black text-white">{level.resolution}</p>
                  </div>
                </div>

                {level.rca && (
                  <div className="mt-4 pt-4 border-t border-red-500/20">
                    <p className="text-[10px] text-red-400 font-bold uppercase tracking-wider">
                      ✓ Includes Root Cause Analysis
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-500 text-sm mt-8"
        >
          Every P1 incident includes Root Cause Analysis (RCA) to identify root issues and prevent recurrence.
        </motion.p>
      </div>
    </section>
  );
};

export default SLASection;
