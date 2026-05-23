import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Server, Network, Cloud, Video, Eye, Cpu, ArrowRight } from "lucide-react";

const capabilities = [
  {
    icon: Server,
    title: "Infrastructure & Data Center",
    description:
      "Server, storage, networking, and facility operations designed for uptime, scalability, and audit readiness.",
    gradient: "from-blue-500 to-cyan-500",
    features: ["Server & Storage", "Networking", "Facility Operations", "Audit Readiness"],
  },
  {
    icon: Network,
    title: "Network & Security",
    description:
      "Perimeter defense, segmentation, monitoring, and compliance-aligned security for enterprise campuses.",
    gradient: "from-indigo-500 to-blue-500",
    features: ["Perimeter Defense", "Segmentation", "Security Monitoring", "Compliance"],
  },
  {
    icon: Cloud,
    title: "Cloud & Hybrid IT",
    description:
      "Migration, hybrid architecture, backup, and workload optimization across on-prem and cloud environments.",
    gradient: "from-cyan-500 to-teal-500",
    features: ["Cloud Migration", "Hybrid Architecture", "Backup & DR", "Workload Optimization"],
  },
  {
    icon: Video,
    title: "Collaboration & AV",
    description:
      "Video conferencing, digital signage, and meeting-room technology with integration and support.",
    gradient: "from-violet-500 to-purple-500",
    features: ["Video Conferencing", "Digital Signage", "Meeting Rooms", "AV Integration"],
  },
  {
    icon: Eye,
    title: "IoT & Surveillance",
    description:
      "Smart surveillance, access systems, and IoT integrations for operational visibility and safety.",
    gradient: "from-emerald-500 to-green-500",
    features: ["Smart Surveillance", "Access Control", "IoT Integration", "Safety Systems"],
  },
  {
    icon: Cpu,
    title: "AI & Intelligent Automation",
    description:
      "Business workflow automation, AI assistants, predictive dashboards, and intelligent reporting systems.",
    gradient: "from-orange-500 to-red-500",
    features: ["Workflow Automation", "AI Assistants", "Predictive Analytics", "Reporting"],
  },
];

const SolutionsCapabilities = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">What KaizenSpark Delivers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Integrated IT Capabilities for{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Enterprise Operations
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            As a corporate IT integrator since 2011, we help organizations design, deploy, and operate technology environments that stay secure, observable, and aligned to business outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: "1000px" }}>
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  </div>

                  <motion.div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cap.gradient} flex items-center justify-center mb-6 shadow-lg relative shrink-0`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cap.gradient} blur-xl opacity-50`} />
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">{cap.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {cap.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs px-3 py-1 rounded-full bg-slate-800/50 text-slate-400 border border-slate-700/50 group-hover:border-blue-500/30 group-hover:text-blue-400 transition-all"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => navigate("/contact")}
                    className="flex items-center gap-2 text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors mt-auto"
                  >
                    Explore Capability
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>

                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cap.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsCapabilities;
