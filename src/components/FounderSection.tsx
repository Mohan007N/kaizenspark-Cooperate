import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Code2, Users, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const pillars = [
  {
    icon: Code2,
    title: "Product Thinking",
    desc: "We don't just build features; we build products that solve real business problems and create long-term value.",
    details: ["Systems-first architecture", "User-centric design", "Scalable codebases"]
  },
  {
    icon: Users,
    title: "Transparent Process",
    desc: "We keep you fully aligned with real-time dashboards, weekly sprint demos, and direct engineering access.",
    details: ["Dedicated Slack channels", "Weekly video updates", "Complete asset ownership"]
  },
  {
    icon: Zap,
    title: "Agile & Fast",
    desc: "We operate in rapid, high-velocity sprints to deliver robust working software in weeks, not months.",
    details: ["Bi-weekly releases", "Continuous integration", "Rapid iteration cycles"]
  },
  {
    icon: ShieldCheck,
    title: "Long-Term Support",
    desc: "We don't disappear after launch. We act as your long-term technical partner, helping you scale and secure your infrastructure.",
    details: ["24/7 uptime monitoring", "Ongoing security updates", "On-demand engineering scaling"]
  }
];

const FounderSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-32 overflow-hidden border-t border-slate-900 bg-slate-950">
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/10 to-slate-950" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Profile Card & Headline (Spans 5 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Our Philosophy</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4 tracking-tight">
                Built by Founders, <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Not Freelancers.
                </span>
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                I founded KaizenSpark with a simple mission: to build technology systems that scale. We do not hire freelancers or outsource your work. We are a team of dedicated, full-time engineers committed to your success.
              </p>
            </div>

            {/* Elegant Founder Card */}
            <div className="relative bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 shadow-xl backdrop-blur-sm overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                {/* Founder Avatar with premium ring */}
                <div className="relative w-36 h-36 rounded-full border-2 border-slate-750 bg-slate-950 flex items-center justify-center overflow-hidden shrink-0 shadow-lg shadow-blue-500/10">
                  <img src="/sanjay_founder.png" alt="Gurubalan GT" className="w-full h-full object-cover" />
                  <span className="absolute bottom-2.5 right-2.5 w-4 h-4 bg-emerald-500 border border-slate-900 rounded-full" />
                </div>

                <div className="space-y-2 flex-1">
                  <p className="text-xs text-slate-400 italic leading-relaxed">
                    "We treat every client's project as our own product, delivering robust infrastructure and automation built for long-term B2B success."
                  </p>
                  <div className="pt-2.5 flex items-center justify-between border-t border-slate-800/80 mt-2">
                    <div className="text-left">
                      <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                        <p className="text-xs font-bold text-white">Gurubalan GT</p>
                        <a href="https://www.linkedin.com/in/gurubalan-gt/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">
                          <Linkedin size={10} />
                        </a>
                      </div>
                      <p className="text-[9px] text-slate-500 font-semibold">Founder & CEO</p>
                    </div>
                    {/* Modern digital signature typography */}
                    <span className="font-serif italic text-[11px] text-slate-500 tracking-wider">
                      gurubalan gt
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate("/about")}
              className="group inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
            >
              Know Our Story <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Right Column: 4 Pillar Capabilities (Spans 7 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-4"
          >
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="group bg-slate-900/30 border border-slate-850 hover:border-blue-500/30 rounded-2xl p-6 transition-all duration-305 hover:bg-slate-900/50 hover:shadow-lg hover:shadow-blue-500/4 flex flex-col justify-between"
                >
                  <div>
                    {/* Icon container with border */}
                    <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:border-blue-500/20 group-hover:text-blue-300 transition-all mb-4">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-2 tracking-tight">{p.title}</h3>
                    <p className="text-[11px] text-slate-400 leading-relaxed mb-4">{p.desc}</p>
                  </div>

                  {/* Micro checklist details */}
                  <ul className="space-y-1.5 border-t border-slate-800/80 pt-3 mt-auto">
                    {p.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-[10px] text-slate-500 group-hover:text-slate-400 transition-colors">
                        <CheckCircle2 size={10} className="text-emerald-500/80 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FounderSection;
