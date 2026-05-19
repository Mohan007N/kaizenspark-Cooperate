import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, Wrench, ScanLine, ArrowRight } from "lucide-react";

const pmsServices = [
  {
    icon: ShieldCheck,
    title: "Patch Management and Vulnerability Remediation",
    description:
      "Automated patching, configuration audits, and compliance validation close exploitable gaps and keep systems aligned with security standards.",
    color: "from-blue-500 to-cyan-500",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
  },
  {
    icon: Wrench,
    title: "Hardware Inspection and Preventive Upkeep",
    description:
      "Scheduled cleaning and inspection reduce environmental wear, extend equipment life, and prevent sudden hardware failures.",
    color: "from-indigo-500 to-blue-500",
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-400",
  },
  {
    icon: ScanLine,
    title: "Security Scans and Antivirus Updates",
    description:
      "Daily signature updates and deep scans keep defenses current against evolving malware and protect data integrity.",
    color: "from-cyan-500 to-teal-500",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
  },
];

const PMSSection = () => {
  const navigate = useNavigate();
  return (
    <section id="pms" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, #000 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, #000 20%, transparent 100%)",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
            <ShieldCheck size={14} className="text-blue-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">PMS</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end gap-6 justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                Preventive Maintenance Services{" "}
                <span className="text-blue-400">— The Proactive Shield</span>
              </h2>
              <p className="text-slate-400 max-w-2xl leading-relaxed">
                Scheduled interventions that keep each IT asset healthy, secure, and compliant before incidents occur. We don't wait for systems to fail — we prevent failures from happening.
              </p>
            </div>
            <button
              onClick={() => navigate("/contact")}
              className="group shrink-0 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20"
            >
              Request Consultation
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Services */}
        <div className="grid md:grid-cols-3 gap-8">
          {pmsServices.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="group relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${service.iconColor}`} />
                </div>
                <h3 className="text-white font-bold text-lg mb-3 group-hover:text-blue-300 transition-colors leading-snug">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>

                {/* Corner glow */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PMSSection;
