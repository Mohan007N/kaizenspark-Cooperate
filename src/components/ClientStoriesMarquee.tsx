import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "KaizenSpark engineered our headless e-commerce architecture with absolute precision. Their inventory sync automation eliminated duplicate listings, resulting in a seamless omnichannel experience.",
    initials: "PS", name: "Priya Sharma",    role: "Founder, FashionHive",         color: "bg-gradient-to-br from-rose-500 to-pink-600",
  },
  {
    quote: "The custom fleet tracking API and dashboard KaizenSpark developed has revolutionized our telemetry pipeline. Real-time updates now process in under 100ms with zero message drops.",
    initials: "AM", name: "Arjun Mehta",     role: "CTO, LogisticsPro",             color: "bg-gradient-to-br from-blue-500 to-indigo-600",
  },
  {
    quote: "Our LMS couldn't scale past 5,000 concurrent students until KaizenSpark refactored our database cluster. We just hosted 40,000+ simultaneous exams with zero latency.",
    initials: "KR", name: "Keerthana R.",    role: "Product Lead, EduTech Co.",     color: "bg-gradient-to-br from-violet-500 to-fuchsia-600",
  },
  {
    quote: "They integrated six legacy systems into a unified admin portal. What used to take our operations team hours of manual export and import now runs autonomously in real-time.",
    initials: "SN", name: "Sanjay Nair",     role: "CEO, RetailMax India",           color: "bg-gradient-to-br from-emerald-500 to-teal-600",
  },
  {
    quote: "The progressive web application (PWA) they built has surpassed our expectations. Page load speeds are sub-second even on low-bandwidth rural connections.",
    initials: "MJ", name: "Meenakshi J.",    role: "Operations Head, Spice Garden",  color: "bg-gradient-to-br from-amber-500 to-orange-600",
  },
  {
    quote: "They built our HIPAA-aligned telemetry dashboard and set up a highly compliant, zero-trust GCP environment. Outstanding execution and absolute engineering rigor.",
    initials: "VS", name: "Vikram S.",        role: "Co-Founder, HealthBridge",       color: "bg-gradient-to-br from-teal-500 to-cyan-600",
  },
  {
    quote: "Their optimization work slashed our React bundle size by 60% and optimized Server Side Rendering. Organic search conversions rose by 40% in just two months.",
    initials: "DK", name: "Divya K.",         role: "Marketing Lead, GreenHome",      color: "bg-gradient-to-br from-green-500 to-emerald-600",
  },
  {
    quote: "A highly scalable automated scheduling and invoicing system that seamlessly integrated with our payment processor. Exceptional code quality and documentation.",
    initials: "RV", name: "Rahul Verma",      role: "Director, AutoServe India",      color: "bg-gradient-to-br from-cyan-500 to-blue-600",
  },
  {
    quote: "The pixel-perfect design-to-code execution from KaizenSpark was incredible. They brought our complex Figma animations to life with absolute butter-smooth motion.",
    initials: "AB", name: "Ananya B.",        role: "Brand Head, StyleCo",            color: "bg-gradient-to-br from-pink-500 to-rose-600",
  },
  {
    quote: "We trusted KaizenSpark to develop our financial reporting pipeline. They engineered a high-integrity, audited ledger system that saves our analysts 20 hours a week.",
    initials: "KP", name: "Kartik P.",        role: "Founder, FinEdge Solutions",     color: "bg-gradient-to-br from-indigo-500 to-violet-600",
  },
];

// Split into two rows
const row1 = testimonials.slice(0, 6);
const row2 = testimonials.slice(6);

const TestimonialCard = ({
  quote, initials, name, role, color,
}: typeof testimonials[0]) => (
  <motion.div
    whileHover={{ y: -4, scale: 1.01 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="flex-shrink-0 w-[310px] bg-slate-900/40 backdrop-blur-md border border-slate-800/80 hover:border-blue-500/30 rounded-2xl p-5 flex flex-col gap-4 cursor-default relative overflow-hidden group"
    style={{ boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.03)" }}
  >
    {/* Subtle decorative glow in top-right */}
    <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full blur-lg pointer-events-none group-hover:bg-blue-500/10 transition-colors" />

    {/* Stars & Quote Icon */}
    <div className="flex items-center justify-between">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={11} className="fill-amber-400 text-amber-400" />
        ))}
      </div>
      <Quote size={12} className="text-slate-700/60 stroke-[2]" />
    </div>

    {/* Quote text */}
    <p className="text-slate-300 text-[12.5px] leading-relaxed flex-1 font-medium italic">
      “{quote}”
    </p>

    {/* Author details */}
    <div className="flex items-center gap-3 pt-3 border-t border-slate-800/50">
      <div className={`w-8 h-8 rounded-xl ${color} flex items-center justify-center text-white text-[11px] font-extrabold flex-shrink-0 shadow-md`}>
        {initials}
      </div>
      <div>
        <p className="text-white text-xs font-bold leading-none mb-1">{name}</p>
        <p className="text-slate-500 text-[9.5px] font-semibold">{role}</p>
      </div>
    </div>
  </motion.div>
);

const MarqueeRow = ({
  items, direction, duration,
}: { items: typeof testimonials; direction: "left" | "right"; duration: number }) => {
  const doubled = [...items, ...items];
  const x = direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"];
  return (
    <div className="flex overflow-hidden gap-4 mb-4">
      <motion.div
        className="flex gap-4 flex-shrink-0"
        animate={{ x }}
        transition={{ repeat: Infinity, duration, ease: "linear" }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.initials}-${i}`} {...t} />
        ))}
      </motion.div>
    </div>
  );
};

const trustBadges = [
  "100% Client Ownership",
  "NDA on Every Project",
  "Post-Launch Support",
];

const ClientStoriesMarquee = () => (
  <section className="relative py-24 border-t border-slate-900 overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

    {/* Edge fade masks */}
    <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
      style={{ background: "linear-gradient(to right, #020617, transparent)" }} />
    <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
      style={{ background: "linear-gradient(to left, #020617, transparent)" }} />

    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-14 relative z-10 px-4"
    >
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 mb-3">
        Client Stories
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
        Trusted by businesses{" "}
        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          across India
        </span>
      </h2>
      <p className="text-slate-400 text-sm max-w-md mx-auto">
        Don't just take our word for it. Here's what our clients say after working with KaizenSpark.
      </p>
    </motion.div>

    {/* Marquee rows */}
    <div className="relative z-0 mb-12">
      <MarqueeRow items={row1} direction="left"  duration={38} />
      <MarqueeRow items={row2} direction="right" duration={32} />
    </div>

    {/* Trust badges */}
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex flex-wrap items-center justify-center gap-3 relative z-10 px-4"
    >
      {trustBadges.map((badge, i) => (
        <span
          key={badge}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/8 text-emerald-400 text-xs font-bold tracking-wide"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          {badge}
        </span>
      ))}
    </motion.div>
  </section>
);

export default ClientStoriesMarquee;
