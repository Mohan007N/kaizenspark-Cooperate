import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Search, Layers, Megaphone, CheckCircle2, Handshake, RefreshCw, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Diagnosis",
    desc: "We start by auditing your current IT environment. We identify gaps in infrastructure, security posture, and operational readiness — giving you an honest picture before any work begins.",
    deliverables: ["Infrastructure Audit", "Security Gap Analysis", "Readiness Report", "Priority Roadmap"],
    color: "from-blue-500 to-cyan-500",
    glow: "bg-blue-500/10",
    border: "border-blue-500/20",
    textColor: "text-blue-400",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "02",
    icon: Layers,
    title: "Architecture & Planning",
    desc: "We design a tailored technology architecture with clean system structures, secure models, and infrastructure planning aligned to your compliance requirements and growth targets.",
    deliverables: ["System Architecture", "Compliance Mapping", "Tech Stack Selection", "Project Timeline"],
    color: "from-indigo-500 to-blue-500",
    glow: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    textColor: "text-indigo-400",
    image: "https://images.unsplash.com/photo-1503945438517-f65904a52ce6?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "03",
    icon: Megaphone,
    title: "Deployment & Integration",
    desc: "Our engineering team deploys hardware, software, and cloud environments with precision. Every integration is tested end-to-end before going live in your production environment.",
    deliverables: ["Hardware Deployment", "Software Integration", "Cloud Configuration", "End-to-End Testing"],
    color: "from-cyan-500 to-teal-500",
    glow: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    textColor: "text-cyan-400",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Quality Assurance",
    desc: "Rigorous validation of every deployed component — performance benchmarks, security scans, and failover testing to ensure systems meet enterprise reliability standards.",
    deliverables: ["Performance Testing", "Security Scanning", "Failover Drills", "Compliance Validation"],
    color: "from-violet-500 to-indigo-500",
    glow: "bg-violet-500/10",
    border: "border-violet-500/20",
    textColor: "text-violet-400",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "05",
    icon: Handshake,
    title: "Handoff & Onboarding",
    desc: "We hand off fully documented systems to your team with context briefs, SLA agreements, and tailored onboarding sessions so your staff can operate confidently from day one.",
    deliverables: ["Full Documentation", "SLA Agreements", "Staff Onboarding", "Runbook Handoff"],
    color: "from-emerald-500 to-teal-500",
    glow: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    textColor: "text-emerald-400",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "06",
    icon: RefreshCw,
    title: "Ongoing Managed Support",
    desc: "We don't walk away after deployment. Continuous PMS, FMS, 24/7 monitoring, and structured L1–L3 incident response keep your infrastructure healthy and your business running.",
    deliverables: ["24/7 Monitoring", "PMS & FMS", "Incident Response", "Monthly Reviews"],
    color: "from-rose-500 to-pink-500",
    glow: "bg-rose-500/10",
    border: "border-rose-500/20",
    textColor: "text-rose-400",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
  },
];

const ProcessSection = () => {
  const navigate = useNavigate();
  return (
    <section id="process" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.4) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.06, 0.14, 0.06] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 15, repeat: Infinity, delay: 4 }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl"
      />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-blue-400">Our Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            How We Deliver{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Enterprise IT
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A systematic, outcome-driven approach to IT deployment and managed operations — from first audit to continuous support.
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical connector line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent z-0" />

          <div className="space-y-16 lg:space-y-24 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className={`relative flex flex-col ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-24 items-center`}
                >
                  {/* Card side */}
                  <div className="w-full lg:w-1/2 relative z-10">
                    <div
                      className={`group relative bg-gradient-to-br from-slate-900/95 to-slate-950/95 backdrop-blur-xl border ${step.border} rounded-3xl p-8 lg:p-10 overflow-hidden transition-all duration-400 hover:shadow-2xl hover:border-opacity-60`}
                    >
                      {/* Number badge */}
                      <div className="flex items-center gap-5 mb-6">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <span className={`text-5xl font-black ${step.textColor} opacity-10 leading-none select-none tracking-tighter`}>
                          {step.number}
                        </span>
                      </div>

                      <h3 className={`text-2xl font-bold text-white mb-4 group-hover:${step.textColor} transition-colors`}>
                        {step.title}
                      </h3>
                      <p className="text-slate-400 text-[15px] leading-relaxed mb-8">{step.desc}</p>

                      {/* Deliverables */}
                      <div className="grid sm:grid-cols-2 gap-3">
                        {step.deliverables.map((d) => (
                          <div key={d} className="flex items-center gap-2.5">
                            <div className={`w-2 h-2 rounded-full ${step.glow} border ${step.border} shrink-0`}
                              style={{ background: `var(--tw-gradient-from, currentColor)` }}
                            >
                              <div className={`w-full h-full rounded-full ${step.textColor} opacity-80`} style={{ background: "currentColor" }} />
                            </div>
                            <span className="text-[13px] text-slate-300 font-medium">{d}</span>
                          </div>
                        ))}
                      </div>

                      {/* Hover glow */}
                      <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-15 blur-3xl transition-opacity duration-500 rounded-full pointer-events-none`} />
                    </div>
                  </div>

                  {/* Image side */}
                  <div className="w-full lg:w-1/2 relative z-10">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl group h-[280px] lg:h-[380px] border border-slate-800/60">
                      <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/10 transition-colors duration-500 z-10" />
                      <div className={`absolute inset-0 bg-gradient-to-tr ${step.color} opacity-20 group-hover:opacity-10 mix-blend-overlay transition-opacity duration-500 z-10`} />
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700" 
                      />
                    </div>
                  </div>

                  {/* Center Node / Timeline dot */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center z-20">
                    <div className={`w-14 h-14 rounded-full bg-slate-950 flex items-center justify-center shadow-xl border-4 border-slate-900`}>
                       <div className={`w-full h-full rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.3)]`}>
                          <span className="text-white font-black text-sm">{i + 1}</span>
                       </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <button
            onClick={() => navigate("/contact")}
            className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 mx-auto overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <span className="relative">Start the Process</span>
            <ArrowRight size={17} className="relative group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
