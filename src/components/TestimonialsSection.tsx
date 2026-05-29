import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Founder",
    company: "FashionHive",
    initials: "PS",
    color: "from-violet-500 to-pink-500",
    outcome: "Omnichannel inventory sync completed",
    text: "KaizenSpark engineered our headless e-commerce architecture with absolute precision. Their inventory sync automation eliminated duplicate listings, resulting in a seamless omnichannel experience and a sub-second checkout pipeline.",
  },
  {
    name: "Vikram S.",
    role: "Co-Founder",
    company: "HealthBridge",
    initials: "VS",
    color: "from-emerald-500 to-teal-500",
    outcome: "HIPAA-compliant GCP environment",
    text: "They built our HIPAA-aligned telemetry dashboard and set up a highly compliant, zero-trust cloud architecture. Absolute engineering rigor, detailed documentation, and a highly secure server deployment.",
  },
  {
    name: "Arjun Mehta",
    role: "CTO",
    company: "LogisticsPro",
    initials: "AM",
    color: "from-blue-500 to-cyan-500",
    outcome: "Telemetry response times <100ms",
    text: "The custom fleet tracking API and dashboard KaizenSpark developed has revolutionized our telemetry pipeline. Real-time updates now process in under 100ms with zero message drops and full observability.",
  },
  {
    name: "Divya K.",
    role: "Marketing Lead",
    company: "GreenHome",
    initials: "DK",
    color: "from-amber-500 to-orange-500",
    outcome: "React bundle reduced by 60%",
    text: "Their optimization work slashed our React bundle size by 60% and optimized Server Side Rendering. Page speeds are now lighting fast, directly lifting our search rankings and boosting conversions by 40%.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-28 overflow-hidden border-t border-slate-900">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

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
              Client Outcomes
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
            What Our Clients{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Say
            </span>
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            Real businesses. Real outcomes. Every testimonial reflects a specific, measurable result we delivered.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -3 }}
              className="group relative bg-slate-900/30 backdrop-blur-md border border-slate-850 hover:border-blue-500/25 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 overflow-hidden"
            >
              {/* Subtle decorative glow in top-right */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl pointer-events-none group-hover:bg-blue-500/10 transition-all duration-500" />

              {/* Quote Watermark */}
              <Quote size={80} className="absolute -right-2 -bottom-2 text-slate-800/5 stroke-[1] select-none pointer-events-none group-hover:text-blue-500/5 group-hover:scale-105 transition-all duration-500" />

              <div className="relative z-10">
                {/* Quote icon & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-sm shrink-0">
                    <Quote size={13} className="stroke-[2.5]" />
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, k) => (
                      <Star key={k} size={11} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Outcome highlight */}
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${t.color} bg-opacity-10 mb-4`}>
                  <span className="text-[10px] font-bold text-white/90">{t.outcome}</span>
                </div>

                {/* Testimonial text */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  “{t.text}”
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-850">
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-extrabold text-xs flex-shrink-0 shadow-md`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold leading-none mb-1">{t.name}</p>
                    <p className="text-[10px] text-slate-500 font-semibold">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
