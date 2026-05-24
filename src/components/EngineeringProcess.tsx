import { motion } from "framer-motion";
import { Search, Layers, Paintbrush2, Code2, TestTube2, Rocket, HeartHandshake, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery",
    desc: "Understanding your business goals, users, technical requirements, and success metrics.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Layers,
    number: "02",
    title: "Architecture Planning",
    desc: "Designing scalable system architecture, tech stack selection, and infrastructure blueprinting.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Paintbrush2,
    number: "03",
    title: "UI/UX Systems",
    desc: "Building product-focused interface designs with design systems and interactive prototypes.",
    color: "from-violet-500 to-indigo-500",
  },
  {
    icon: Code2,
    number: "04",
    title: "Agile Development",
    desc: "Iterative development in sprints with weekly demos, continuous integration, and rapid delivery.",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: TestTube2,
    number: "05",
    title: "QA & Security Testing",
    desc: "Comprehensive testing — unit, integration, load testing, and security vulnerability assessments.",
    color: "from-emerald-500 to-cyan-500",
  },
  {
    icon: Rocket,
    number: "06",
    title: "Deployment",
    desc: "Cloud deployment with zero-downtime pipelines, monitoring setup, and production hardening.",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: HeartHandshake,
    number: "07",
    title: "Long-Term Support",
    desc: "Ongoing maintenance, SLA-based support, performance optimization, and feature iterations.",
    color: "from-pink-500 to-rose-500",
  },
];

const EngineeringProcess = () => {
  return (
    <section className="relative py-28 overflow-hidden border-t border-slate-900">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950" />

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
              Our Engineering Process
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
            Predictable Systems.{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Reliable Delivery.
            </span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Enterprise clients want predictability. Our structured 7-step engineering process ensures every project is delivered on time, within scope, and built to last.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {steps.slice(0, 4).map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group relative bg-slate-900/60 border border-slate-800/70 hover:border-slate-700/70 rounded-2xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon size={15} className="text-white" />
                    </div>
                    <span className="text-[11px] font-black text-slate-600 mt-1.5">STEP {step.number}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {steps.slice(4).map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i + 4) * 0.1, duration: 0.5 }}
                  className="group relative bg-slate-900/60 border border-slate-800/70 hover:border-slate-700/70 rounded-2xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon size={15} className="text-white" />
                    </div>
                    <span className="text-[11px] font-black text-slate-600 mt-1.5">STEP {step.number}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringProcess;
