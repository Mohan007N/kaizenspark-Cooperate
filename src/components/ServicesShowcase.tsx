import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Laptop, Server, Cpu, ShieldCheck, Rocket, Palette, Cloud, BarChart2, ArrowRight, Zap } from "lucide-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Laptop,
    title: "Software Engineering",
    description: "Custom SaaS platforms, dashboards, ERP systems, and enterprise-grade web applications engineered for performance and scale.",
    gradient: "from-blue-500 to-cyan-500",
    badge: null,
    features: ["React / Next.js", "Node.js / Python", "SaaS & ERP"],
    colorTheme: "blue",
    href: "/services/web-app-development",
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    description: "AI agents, intelligent workflow automation, LLM integrations, and data pipelines that reduce manual operations and drive efficiency.",
    gradient: "from-violet-500 to-indigo-500",
    badge: "In Demand",
    features: ["LLM / AI Agents", "RPA Workflows", "Data Pipelines"],
    colorTheme: "purple",
    href: "/services/ai-automation",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "AWS, GCP, and Azure infrastructure setup, containerization, CI/CD pipelines, monitoring, and production-grade deployments.",
    gradient: "from-cyan-500 to-teal-500",
    badge: null,
    features: ["AWS / GCP / Azure", "Docker & Kubernetes", "CI/CD Pipelines"],
    colorTheme: "cyan",
    href: "/services/enterprise-solutions",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Systems",
    description: "Centralized CRM, ERP, internal tools, and operational systems built for enterprise security, compliance, and reliability.",
    gradient: "from-emerald-500 to-teal-500",
    badge: null,
    features: ["CRM & ERP", "Internal Portals", "Security & Compliance"],
    colorTheme: "emerald",
    href: "/services/enterprise-solutions",
  },
  {
    icon: Rocket,
    title: "Product Engineering",
    description: "End-to-end product engineering for startups — from concept and architecture to MVP launch and scalable growth iterations.",
    gradient: "from-orange-500 to-red-500",
    badge: null,
    features: ["MVP Development", "Product Architecture", "Agile Delivery"],
    colorTheme: "orange",
    href: "/services/startup-support",
  },
  {
    icon: Palette,
    title: "UI/UX Systems",
    description: "Product-focused interface design with design systems, user research, prototyping, and accessibility-first principles.",
    gradient: "from-pink-500 to-rose-500",
    badge: null,
    features: ["Design Systems", "Figma Prototyping", "User Research"],
    colorTheme: "pink",
    href: "/services/ui-ux-design",
  },
];

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  const Icon = service.icon;

  const themeMap: Record<string, { iconBg: string; border: string; glow: string }> = {
    blue:    { iconBg: "bg-blue-500/10 border-blue-500/20 text-blue-400",    border: "hover:border-blue-500/40 hover:shadow-blue-500/8",    glow: "from-blue-500/5 via-transparent to-cyan-500/5" },
    purple:  { iconBg: "bg-violet-500/10 border-violet-500/20 text-violet-400", border: "hover:border-violet-500/40 hover:shadow-violet-500/8", glow: "from-violet-500/5 via-transparent to-indigo-500/5" },
    cyan:    { iconBg: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",    border: "hover:border-cyan-500/40 hover:shadow-cyan-500/8",    glow: "from-cyan-500/5 via-transparent to-teal-500/5" },
    emerald: { iconBg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400", border: "hover:border-emerald-500/40 hover:shadow-emerald-500/8", glow: "from-emerald-500/5 via-transparent to-teal-500/5" },
    orange:  { iconBg: "bg-orange-500/10 border-orange-500/20 text-orange-400", border: "hover:border-orange-500/40 hover:shadow-orange-500/8", glow: "from-orange-500/5 via-transparent to-red-500/5" },
    pink:    { iconBg: "bg-pink-500/10 border-pink-500/20 text-pink-400",    border: "hover:border-pink-500/40 hover:shadow-pink-500/8",    glow: "from-pink-500/5 via-transparent to-rose-500/5" },
  };
  const theme = themeMap[service.colorTheme] || themeMap.blue;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.09 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative h-full cursor-pointer"
      onClick={() => navigate(service.href)}
    >
      <div className={`relative bg-gradient-to-br from-slate-900/80 to-slate-950/90 backdrop-blur-xl border border-slate-800/60 rounded-2xl p-6 overflow-hidden transition-all duration-400 h-full flex flex-col shadow-lg hover:shadow-xl ${theme.border}`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${theme.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        <div className="relative z-10 flex items-start justify-between mb-4">
          <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${theme.iconBg} shadow-md group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-5 h-5" />
          </div>
          {service.badge && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 uppercase tracking-wider">
              {service.badge}
            </span>
          )}
        </div>

        <div className="relative z-10 flex-1 flex flex-col">
          <h3 className="text-base font-bold text-white mb-2 group-hover:text-white/95 transition-colors">
            {service.title}
          </h3>
          <p className="text-slate-400 text-xs mb-5 leading-relaxed flex-1">
            {service.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {service.features.map((f) => (
              <span
                key={f}
                className="text-[10px] px-2 py-1 rounded-lg bg-slate-900/70 text-slate-400 border border-slate-800/80 hover:text-slate-300 hover:border-slate-700 transition-colors"
              >
                {f}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 group-hover:text-blue-400 transition-colors">
            Explore <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        <div className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.04] blur-3xl transition-opacity duration-500`} />
      </div>
    </motion.div>
  );
};

const ServicesShowcase = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-28 overflow-hidden border-t border-slate-900">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/25 bg-blue-500/8 mb-6">
            <Zap size={11} className="text-blue-400" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
              Engineering Solutions
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            End-to-End Engineering{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            We engineer scalable systems, automate business operations, and build digital infrastructure that grows with your business.
          </p>

          <button
            onClick={() => navigate("/services")}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group"
          >
            Explore All Services <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ perspective: "1200px" }}>
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
