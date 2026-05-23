import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "KaizenSpark Tech delivered our entire e-commerce platform in just 4 weeks. The quality was exceptional and the team communicated proactively throughout.",
    initials: "PS", name: "Priya Sharma",    role: "Founder, FashionHive",         color: "bg-rose-600",
  },
  {
    quote: "We came to KaizenSpark Tech with just an idea. They took it from wireframes to a fully deployed mobile app. Could not be happier with the outcome.",
    initials: "AM", name: "Arjun Mehta",     role: "CTO, LogisticsPro",             color: "bg-blue-600",
  },
  {
    quote: "Best digital agency we've worked with in Chennai. Their UI/UX work transformed our product's user retention completely.",
    initials: "KR", name: "Keerthana R.",    role: "Product Manager, EduTech Startup", color: "bg-violet-600",
  },
  {
    quote: "The KaizenSpark Tech team felt like a true extension of our own team. They understood our business goals and coded accordingly.",
    initials: "SN", name: "Sanjay Nair",     role: "CEO, RetailMax India",           color: "bg-emerald-600",
  },
  {
    quote: "Fast, professional, and genuinely passionate. Our restaurant app went live ahead of schedule and our customers love it.",
    initials: "MJ", name: "Meenakshi J.",    role: "Operations Head, Spice Garden",  color: "bg-amber-600",
  },
  {
    quote: "KaizenSpark Tech helped us register our company, set up our digital infrastructure, and build our first product — all in one month.",
    initials: "VS", name: "Vikram S.",        role: "Co-Founder, HealthBridge",       color: "bg-teal-600",
  },
  {
    quote: "Their SEO work tripled our organic traffic in 3 months. The content strategy was data-driven and actually worked.",
    initials: "DK", name: "Divya K.",         role: "Marketing Lead, GreenHome",      color: "bg-green-600",
  },
  {
    quote: "We needed a complete CRM system built from scratch. KaizenSpark Tech delivered a solid, scalable solution under budget.",
    initials: "RV", name: "Rahul Verma",      role: "Director, AutoServe India",      color: "bg-cyan-600",
  },
  {
    quote: "The attention to detail in the UI design was outstanding. Our brand guidelines were respected throughout the entire project.",
    initials: "AB", name: "Ananya B.",        role: "Brand Head, StyleCo",            color: "bg-pink-600",
  },
  {
    quote: "KaizenSpark Tech is not just a vendor — they're a strategic partner. Always thinking ahead about what's best for our growth.",
    initials: "KP", name: "Kartik P.",        role: "Founder, FinEdge Solutions",     color: "bg-indigo-600",
  },
];

// Split into two rows
const row1 = testimonials.slice(0, 6);
const row2 = testimonials.slice(6);

const TestimonialCard = ({
  quote, initials, name, role, color,
}: typeof testimonials[0]) => (
  <motion.div
    whileHover={{ y: -4, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="flex-shrink-0 w-[300px] bg-slate-900/60 border border-slate-800/70 hover:border-slate-700 rounded-2xl p-5 flex flex-col gap-4 cursor-default"
    style={{ boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.03)" }}
  >
    {/* Stars */}
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
    {/* Quote */}
    <p className="text-slate-300 text-[13px] leading-relaxed flex-1">
      "{quote}"
    </p>
    {/* Author */}
    <div className="flex items-center gap-3 pt-2 border-t border-slate-800/60">
      <div className={`w-8 h-8 rounded-full ${color} flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0`}>
        {initials}
      </div>
      <div>
        <p className="text-white text-xs font-bold leading-none mb-0.5">{name}</p>
        <p className="text-slate-500 text-[10px]">{role}</p>
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
