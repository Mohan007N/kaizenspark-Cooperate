import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Founder",
    company: "FashionHive",
    initials: "PS",
    color: "from-violet-500 to-pink-500",
    outcome: "3x revenue growth in 3 months",
    text: "KaizenSpark delivered our entire e-commerce platform in 4 weeks. The quality was exceptional. They automated our entire inventory and order workflow — things we thought would take months.",
  },
  {
    name: "Vikram S.",
    role: "Co-Founder",
    company: "HealthBridge",
    initials: "VS",
    color: "from-emerald-500 to-teal-500",
    outcome: "10,000+ app downloads in 2 months",
    text: "This engineering team is highly professional, communicative, and delivers on time. They helped us set up our infrastructure and build our first product — all in one month.",
  },
  {
    name: "Arjun Mehta",
    role: "CTO",
    company: "LogisticsPro",
    initials: "AM",
    color: "from-blue-500 to-cyan-500",
    outcome: "40% operational workload reduction",
    text: "Excellent technical expertise and project management. KaizenSpark automated 60% of our operational workflow within 45 days — faster than expected and exactly what we needed.",
  },
  {
    name: "Divya K.",
    role: "Marketing Lead",
    company: "GreenHome",
    initials: "DK",
    color: "from-amber-500 to-orange-500",
    outcome: "Tripled organic search traffic",
    text: "Our organic traffic tripled after their SEO and technical infrastructure work. Data-driven and results-focused — they show you the numbers, not just promises.",
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
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative bg-slate-900/60 border border-slate-800/70 hover:border-slate-700/80 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5"
            >
              {/* Quote icon */}
              <Quote size={20} className="text-slate-700 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, k) => (
                  <Star key={k} size={12} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Outcome highlight */}
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${t.color} bg-opacity-10 mb-4`}>
                <span className="text-[10px] font-bold text-white/90">{t.outcome}</span>
              </div>

              {/* Testimonial text */}
              <p className="text-sm text-slate-300 leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800/60">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-xs flex-shrink-0 shadow-md`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-xs text-slate-500">
                    {t.role} · {t.company}
                  </p>
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
