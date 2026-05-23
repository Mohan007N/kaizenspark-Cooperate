import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Laptop, Palette, Megaphone, ShieldCheck, Cpu, Rocket, ArrowRight, Zap } from "lucide-react";
import { useRef } from "react";

const services = [
  {
    icon: Laptop,
    title: "Web & App Development",
    description: "From static websites to full-stack web apps and native mobile experiences. We ship fast, scalable, beautiful digital products.",
    gradient: "from-blue-500 to-cyan-500",
    badge: "Most Popular",
    features: ["Next.js / React / React Native", "iOS & Android", "PWA & E-commerce"],
    colorTheme: "blue",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Pixel-perfect interfaces backed by user research. We design experiences people love to use.",
    gradient: "from-pink-500 to-rose-500",
    badge: null,
    features: ["Figma & Prototyping", "Design Systems", "Brand Identity"],
    colorTheme: "pink",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Data-driven campaigns that grow your brand. SEO, paid ads, social media, and conversion optimization.",
    gradient: "from-amber-500 to-orange-500",
    badge: null,
    features: ["SEO & SEM", "Social Media", "Performance Ads"],
    colorTheme: "amber",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Solutions",
    description: "Secure, scalable infrastructure. CRM, ERP, cloud deployments, security audits, and everything businesses need at scale.",
    gradient: "from-emerald-500 to-teal-500",
    badge: null,
    features: ["CRM & ERP", "Cloud & DevOps", "Security Audits"],
    colorTheme: "emerald",
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    description: "Intelligent chatbots, predictive analytics, and workflow automation that give your business an unfair advantage.",
    gradient: "from-purple-500 to-indigo-500",
    badge: "Trending",
    features: ["AI Chatbots", "Process Automation", "Data Analytics"],
    colorTheme: "purple",
  },
  {
    icon: Rocket,
    title: "Startup Support",
    description: "End-to-end support for founders — MVP development, company registration, trademark, and full legal setup.",
    gradient: "from-orange-500 to-red-500",
    badge: null,
    features: ["MVP Development", "Company Registration", "Trademark"],
    colorTheme: "orange",
  },
];

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = service.icon;

  // Determine accent color classes based on theme
  const getThemeClasses = (theme: string) => {
    switch (theme) {
      case "blue":
        return {
          iconBg: "bg-blue-500/10 border-blue-500/20 text-blue-400",
          glow: "from-blue-500/5 via-transparent to-cyan-500/5",
          border: "hover:border-blue-500/50 hover:shadow-blue-500/10",
        };
      case "pink":
        return {
          iconBg: "bg-pink-500/10 border-pink-500/20 text-pink-400",
          glow: "from-pink-500/5 via-transparent to-rose-500/5",
          border: "hover:border-pink-500/50 hover:shadow-pink-500/10",
        };
      case "amber":
        return {
          iconBg: "bg-amber-500/10 border-amber-500/20 text-amber-400",
          glow: "from-amber-500/5 via-transparent to-orange-500/5",
          border: "hover:border-amber-500/50 hover:shadow-amber-500/10",
        };
      case "emerald":
        return {
          iconBg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
          glow: "from-emerald-500/5 via-transparent to-teal-500/5",
          border: "hover:border-emerald-500/50 hover:shadow-emerald-500/10",
        };
      case "purple":
        return {
          iconBg: "bg-purple-500/10 border-purple-500/20 text-purple-400",
          glow: "from-purple-500/5 via-transparent to-indigo-500/5",
          border: "hover:border-purple-500/50 hover:shadow-purple-500/10",
        };
      case "orange":
      default:
        return {
          iconBg: "bg-orange-500/10 border-orange-500/20 text-orange-400",
          glow: "from-orange-500/5 via-transparent to-red-500/5",
          border: "hover:border-orange-500/50 hover:shadow-orange-500/10",
        };
    }
  };

  const theme = getThemeClasses(service.colorTheme);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative h-full"
    >
      <div className={`relative bg-gradient-to-br from-slate-900/80 to-slate-950/90 backdrop-blur-xl border border-slate-800/70 rounded-2xl p-7 overflow-hidden transition-all duration-500 h-full flex flex-col justify-between ${theme.border}`}>
        {/* Glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${theme.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
        </div>

        {/* Top Header Card */}
        <div className="relative z-10 flex items-start justify-between mb-5">
          {/* Circular Icon */}
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${theme.iconBg} shadow-md`}>
            <Icon className="w-5 h-5" />
          </div>

        {/* Badge */}
        {service.badge && (
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 uppercase tracking-wider">
            {service.badge}
          </span>
        )}
        </div>

        {/* Content Body */}
        <div className="relative z-10 flex-1 flex flex-col justify-between" style={{ transformStyle: "preserve-3d", translateZ: "30px" }}>
          <div>
            <h3 className="text-lg font-bold text-white mb-2.5 transition-colors group-hover:text-white/90">
              {service.title}
            </h3>
            <p className="text-slate-400 text-xs mb-6 leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Subtags / Features */}
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              {service.features.map((feature) => (
                <span
                  key={feature}
                  className="text-[10px] px-2.5 py-1 rounded-full bg-slate-900/60 text-slate-400 border border-slate-800/80 transition-all duration-300 hover:text-white hover:border-slate-700"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Premium Arrow Action */}
            <motion.div
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 group-hover:text-white transition-colors cursor-pointer"
            >
              Explore Services <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </div>
        </div>

        {/* Corner accent glow */}
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] blur-3xl transition-opacity duration-500`} />
      </div>
    </motion.div>
  );
};

const ServicesShowcase = () => {
  return (
    <section className="relative py-32 overflow-hidden border-t border-slate-900">
      {/* Dark blue base */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950" />
      {/* Subtle Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)`,
          backgroundSize: "48px 48px"
        }}
      />
      
      {/* Background orbs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"
      />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6"
          >
            <Zap size={12} className="text-blue-400 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
              What We Do
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Everything your business{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              needs to succeed online
            </span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            From idea to launch and beyond — world-class execution across every aspect of your digital presence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: "1000px" }}>
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
