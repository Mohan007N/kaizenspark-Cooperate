import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Code2, Linkedin, Building2, GraduationCap, Cpu, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const pillars = [
  {
    icon: Code2,
    title: "Tech & Product Development",
    desc: "Full-stack MVPs, admin dashboards, and custom web & mobile apps built for startups, institutions, and enterprises.",
    details: ["Systems-first architecture", "User-centric design", "Scalable codebases"],
    gradient: "from-blue-500/10 to-blue-600/5",
    iconColor: "text-blue-400",
    borderHover: "hover:border-blue-500/30",
  },
  {
    icon: Cpu,
    title: "Business Automation",
    desc: "End-to-end automation of workflows, CRM systems, e-invoicing, certificate generation, and internal tools.",
    details: ["Workflow automation", "CRM integration", "Custom tooling"],
    gradient: "from-violet-500/10 to-violet-600/5",
    iconColor: "text-violet-400",
    borderHover: "hover:border-violet-500/30",
  },
  {
    icon: Building2,
    title: "SaaS Tools & Platforms",
    desc: "Launch-ready platforms — Certifizor, Propozix, Invoicez, RetailZen, FinzBuddy, and TapZX.",
    details: ["SaaS deployments", "Digital platforms", "30+ integrations"],
    gradient: "from-cyan-500/10 to-cyan-600/5",
    iconColor: "text-cyan-400",
    borderHover: "hover:border-cyan-500/30",
  },
  {
    icon: GraduationCap,
    title: "Internship & Upskilling",
    desc: "Hands-on, real-world experience via verified internships, practical skill-building, and purpose-driven programs.",
    details: ["Verified internships", "Practical skill-building", "Industry-ready programs"],
    gradient: "from-emerald-500/10 to-emerald-600/5",
    iconColor: "text-emerald-400",
    borderHover: "hover:border-emerald-500/30",
  }
];

const stats = [
  { val: "30+", label: "Clients Served" },
  { val: "3",   label: "Core Verticals" },
  { val: "100%",label: "Satisfaction"   },
];

const FounderSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 overflow-hidden border-t border-slate-900 bg-slate-950">
      {/* Ambient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/5 to-slate-950 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">

        {/* ── TOP: Centred headline ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/8 mb-5">
            <Sparkles size={10} className="text-blue-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-400">Our Philosophy</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.15] tracking-tight">
            Founded on Vision.{" "}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
              Built for Scale.
            </span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed mt-4 max-w-lg mx-auto">
            A future-ready technology company from Chennai, India — delivering real solutions built for impact and long-term growth.
          </p>
        </motion.div>

        {/* ── BOTTOM: Founder left | Cards right ── */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* Founder column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 flex flex-col gap-5"
          >
            {/* Portrait */}
            <div className="relative group">
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-1.5 rounded-2xl bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-violet-500/10 blur-2xl pointer-events-none"
              />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-white/6 group-hover:border-blue-500/25 transition-colors duration-500">
                <div className="w-full aspect-[4/5] bg-slate-900 overflow-hidden">
                  <img
                    src="/sanjay_founder.png"
                    alt="Gurubalan G.T — Founder & CEO, KaizenSpark"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </div>
                {/* Glass name strip */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent px-5 pt-8 pb-4">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-white font-extrabold text-sm leading-tight tracking-tight">Gurubalan G.T</p>
                      <p className="text-slate-400 text-[11px] mt-0.5 font-medium">Founder & CEO</p>
                      <p className="text-slate-600 text-[10px]">KaizenSpark Tech Pvt. Ltd.</p>
                    </div>
                    <a
                      href="https://www.linkedin.com/in/gurubalan-gt/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="w-8 h-8 rounded-full bg-[#0A66C2]/20 border border-[#0A66C2]/30 flex items-center justify-center text-[#0A66C2]/80 hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white transition-all duration-300"
                    >
                      <Linkedin size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="border-l-2 border-blue-500/50 pl-4">
              <p className="text-slate-400 text-[12px] leading-relaxed italic">
                "Execution beats ideas. We don't just serve clients — we solve, simplify, and scale."
              </p>
              <footer className="mt-2 text-[10px] text-slate-600 font-semibold">— Gurubalan G.T</footer>
            </blockquote>

            {/* Stats */}
            <div className="flex gap-6 pt-1 border-t border-slate-800/50">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-white text-xl font-extrabold leading-none">{s.val}</p>
                  <p className="text-slate-600 text-[10px] font-semibold mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => navigate("/about")}
              className="group self-start inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-800 hover:border-blue-500/40 bg-slate-900/50 hover:bg-slate-900 text-[11px] font-bold text-slate-300 hover:text-blue-300 transition-all duration-300"
            >
              Know Our Story
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Pillar cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 grid sm:grid-cols-2 gap-4"
          >
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.18 + i * 0.09, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className={`group relative bg-gradient-to-br ${p.gradient} border border-slate-800/50 ${p.borderHover} rounded-2xl p-5 transition-all duration-300 hover:shadow-xl flex flex-col overflow-hidden`}
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-9 h-9 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-center ${p.iconColor} group-hover:scale-110 transition-all`}>
                      <Icon size={16} />
                    </div>
                    <span className="text-[11px] font-black text-slate-800">0{i + 1}</span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-[13px] font-bold text-white mb-1.5 tracking-tight leading-snug">{p.title}</h3>
                    <p className="text-[11px] text-slate-500 leading-relaxed">{p.desc}</p>
                  </div>

                  <ul className="mt-4 pt-3 border-t border-slate-800/40 space-y-1.5">
                    {p.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-[10px] text-slate-600 group-hover:text-slate-400 transition-colors duration-300">
                        <CheckCircle2 size={9} className="text-emerald-500/60 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FounderSection;
