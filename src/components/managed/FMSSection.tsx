import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Building2, Activity, HardDrive, Network, ArrowRight } from "lucide-react";

const fmsServices = [
  {
    icon: Building2,
    label: "Data Centre",
    title: "Data Centre Management",
    description:
      "Oversight of physical security, rack space, power, cooling, and environmental control.",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    tag: "Infrastructure",
  },
  {
    icon: Activity,
    label: "Monitoring",
    title: "24/7/365 Monitoring",
    description:
      "IoT-based monitoring of heat, humidity, and pulse metrics for proactive anomaly detection.",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
    tag: "Operations",
  },
  {
    icon: HardDrive,
    label: "Resilience",
    title: "Backup and Disaster Recovery",
    description:
      "Continuous backup-cycle monitoring to ensure readiness and continuity during major incidents.",
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-400",
    tag: "Resilience",
  },
  {
    icon: Network,
    label: "Network",
    title: "Network Infrastructure",
    description:
      "Integrity management of switches, routers, and cabling to sustain reliable connectivity.",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
    tag: "Connectivity",
  },
];

const FMSSection = () => {
  const navigate = useNavigate();
  return (
    <section id="fms" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#08111f] via-slate-900 to-[#08111f]" />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
      />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6">
            <Building2 size={14} className="text-cyan-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">FMS</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end gap-6 justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                Facility Management Services{" "}
                <span className="text-cyan-400">— The Operational Foundation</span>
              </h2>
              <p className="text-slate-400 max-w-2xl leading-relaxed">
                Oversight of power, cooling, network, backups, and environmental controls across your complete IT facility. FMS sustains the full infrastructure environment so your operations never miss a beat.
              </p>
            </div>
            <button
              onClick={() => navigate("/contact")}
              className="group shrink-0 px-7 py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/20"
            >
              Request Consultation
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* 2x2 grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {fmsServices.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group flex gap-5 bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-7 transition-all duration-300 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/5"
              >
                <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${service.iconColor}`} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-white font-bold text-base group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500 border border-slate-700 px-2 py-0.5 rounded-full">
                      {service.tag}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FMSSection;
