import { useRef } from "react";
import { motion } from "framer-motion";
import { useParallax } from "@/hooks/useParallax";

// ── Tech data split into 4 rows ──────────────────────────────────────────────
const rows = [
  [
    { name: "Node.js",      icon: "⬡", color: "#3c873a", bg: "rgba(60,135,58,0.12)"  },
    { name: "FastAPI",      icon: "⚡", color: "#05998b", bg: "rgba(5,153,139,0.12)" },
    { name: "Flutter",      icon: "◆", color: "#54c5f8", bg: "rgba(84,197,248,0.12)" },
    { name: "React Native", icon: "⚛", color: "#61dafb", bg: "rgba(97,218,251,0.12)" },
    { name: "Docker",       icon: "🐳", color: "#2496ed", bg: "rgba(36,150,237,0.12)" },
    { name: "Next.js",      icon: "▲", color: "#ffffff", bg: "rgba(255,255,255,0.07)" },
    { name: "React",        icon: "⚛", color: "#61dafb", bg: "rgba(97,218,251,0.12)" },
    { name: "TypeScript",   icon: "TS", color: "#3178c6", bg: "rgba(49,120,198,0.12)" },
    { name: "TailwindCSS",  icon: "〰", color: "#38bdf8", bg: "rgba(56,189,248,0.12)" },
    { name: "GraphQL",      icon: "◉", color: "#e535ab", bg: "rgba(229,53,171,0.12)" },
  ],
  [
    { name: "Firebase",     icon: "🔥", color: "#ffca28", bg: "rgba(255,202,40,0.12)" },
    { name: "MongoDB",      icon: "🍃", color: "#4db33d", bg: "rgba(77,179,61,0.12)"  },
    { name: "PostgreSQL",   icon: "🐘", color: "#336791", bg: "rgba(51,103,145,0.12)" },
    { name: "Redis",        icon: "⚡", color: "#d82c20", bg: "rgba(216,44,32,0.12)"  },
    { name: "Kubernetes",   icon: "☸", color: "#326ce5", bg: "rgba(50,108,229,0.12)" },
    { name: "Vercel",       icon: "▲", color: "#ffffff", bg: "rgba(255,255,255,0.07)" },
    { name: "Three.js",     icon: "⬡", color: "#ffffff", bg: "rgba(255,255,255,0.07)" },
    { name: "Figma",        icon: "✦", color: "#f24e1e", bg: "rgba(242,78,30,0.12)"  },
    { name: "GitHub",       icon: "⌥", color: "#ffffff", bg: "rgba(255,255,255,0.07)" },
    { name: "Prisma",       icon: "◈", color: "#5a67d8", bg: "rgba(90,103,216,0.12)" },
  ],
  [
    { name: "AWS",          icon: "☁", color: "#ff9900", bg: "rgba(255,153,0,0.12)"  },
    { name: "WordPress",    icon: "W", color: "#21759b", bg: "rgba(33,117,155,0.12)" },
    { name: "WooCommerce",  icon: "🛒", color: "#96588a", bg: "rgba(150,88,138,0.12)" },
    { name: "Webflow",      icon: "W", color: "#4353ff", bg: "rgba(67,83,255,0.12)"  },
    { name: "Vite.js",      icon: "⚡", color: "#646cff", bg: "rgba(100,108,255,0.12)" },
    { name: "Sass",         icon: "◎", color: "#cd6799", bg: "rgba(205,103,153,0.12)" },
    { name: "Socket.io",    icon: "⟳", color: "#ffffff", bg: "rgba(255,255,255,0.07)" },
    { name: "Redux",        icon: "◈", color: "#764abc", bg: "rgba(118,74,188,0.12)" },
    { name: "Cloudflare",   icon: "☁", color: "#f48120", bg: "rgba(244,129,32,0.12)" },
    { name: "Supabase",     icon: "⚡", color: "#3ecf8e", bg: "rgba(62,207,142,0.12)" },
  ],
  [
    { name: "Android",      icon: "◉", color: "#3ddc84", bg: "rgba(61,220,132,0.12)" },
    { name: "Postman",      icon: "◎", color: "#ff6c37", bg: "rgba(255,108,55,0.12)" },
    { name: "Dart",         icon: "◆", color: "#0175c2", bg: "rgba(1,117,194,0.12)"  },
    { name: "Kotlin",       icon: "K", color: "#7f52ff", bg: "rgba(127,82,255,0.12)" },
    { name: "Swift",        icon: "S", color: "#f05138", bg: "rgba(240,81,56,0.12)"  },
    { name: "Flask",        icon: "◎", color: "#ffffff", bg: "rgba(255,255,255,0.07)" },
    { name: "Express",      icon: "ex", color: "#ffffff", bg: "rgba(255,255,255,0.07)" },
    { name: "Material UI",  icon: "M", color: "#007fff", bg: "rgba(0,127,255,0.12)"  },
    { name: "Git",          icon: "⌥", color: "#f05032", bg: "rgba(240,80,50,0.12)"  },
    { name: "Linux",        icon: "🐧", color: "#fcc624", bg: "rgba(252,198,36,0.12)" },
  ],
];

// ── Pill component ─────────────────────────────────────────────────────────
const TechPill = ({ name, icon, color, bg }: { name: string; icon: string; color: string; bg: string }) => (
  <motion.div
    whileHover={{ y: -3, scale: 1.06 }}
    transition={{ type: "spring", stiffness: 350, damping: 20 }}
    className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/[0.07] flex-shrink-0 cursor-default select-none"
    style={{ background: bg }}
  >
    <span className="text-sm font-bold leading-none" style={{ color, fontFamily: "monospace" }}>
      {icon}
    </span>
    <span className="text-[13px] font-semibold text-white/85 whitespace-nowrap">{name}</span>
  </motion.div>
);

// ── Marquee row ─────────────────────────────────────────────────────────────
const MarqueeRow = ({ items, direction, duration }: {
  items: typeof rows[0];
  direction: "left" | "right";
  duration: number;
}) => {
  const doubled = [...items, ...items];
  const x = direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"];

  return (
    <div className="flex overflow-hidden gap-3 mb-3">
      <motion.div
        className="flex gap-3 flex-shrink-0"
        animate={{ x }}
        transition={{ repeat: Infinity, duration, ease: "linear" }}
      >
        {doubled.map((tech, i) => (
          <TechPill key={`${tech.name}-${i}`} {...tech} />
        ))}
      </motion.div>
    </div>
  );
};

// ── Section ─────────────────────────────────────────────────────────────────
const TechStackMarquee = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  useParallax(sectionRef as React.RefObject<HTMLElement>, [
    { ref: orbRef as React.RefObject<HTMLElement>, speed: -0.4, direction: "y", clamp: true },
  ]);

  return (
  <section ref={sectionRef} className="relative py-24 overflow-hidden border-t border-slate-900">
    {/* bg */}
    <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
    <div
      ref={orbRef}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"
    />

    {/* Edge fade masks */}
    <div className="absolute left-0 top-0 bottom-0 w-40 z-10 pointer-events-none"
      style={{ background: "linear-gradient(to right, #020617 0%, transparent 100%)" }} />
    <div className="absolute right-0 top-0 bottom-0 w-40 z-10 pointer-events-none"
      style={{ background: "linear-gradient(to left, #020617 0%, transparent 100%)" }} />

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-14 relative z-10 px-4"
    >
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-5">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        Tech Stack
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
        We work with the{" "}
        <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
          best tools
        </span>
      </h2>
      <p className="text-slate-400 text-sm max-w-md mx-auto">
        Modern, battle-tested technology that powers scalable products.
      </p>
    </motion.div>

    {/* 4 marquee rows */}
    <div className="relative z-0">
      <MarqueeRow items={rows[0]} direction="left"  duration={30} />
      <MarqueeRow items={rows[1]} direction="right" duration={25} />
      <MarqueeRow items={rows[2]} direction="left"  duration={35} />
      <MarqueeRow items={rows[3]} direction="right" duration={28} />
    </div>
  </section>
  );
};

export default TechStackMarquee;
