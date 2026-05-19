import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Server, Network, Cloud, Video, Eye, Bot, Shield, Settings, ArrowRight, Zap, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "infrastructure",
    icon: Server,
    title: "Infrastructure & Data Center",
    description: "Server, storage, networking, and facility operations designed for uptime, scalability, and audit readiness.",
    details: [
      "High-availability server and storage clusters",
      "Core, distribution, and access network design",
      "Power, cooling, and facility operations",
      "ISO/IEC 27001 audit-ready deployments"
    ],
    tags: ["Server & Storage", "Networking", "Facility Ops", "Audit Ready"],
    gradient: "from-blue-500 to-cyan-400",
    glow: "group-hover:shadow-blue-500/20",
    border: "group-hover:border-blue-500/40",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "network",
    icon: Network,
    title: "Network & Security",
    description: "Perimeter defense, segmentation, monitoring, and compliance-aligned security for enterprise campuses.",
    details: [
      "Next-generation firewall (NGFW) deployment",
      "Zero-trust network access & segmentation",
      "24/7 Security Operations Center (SOC) monitoring",
      "Regulatory compliance & data privacy alignment"
    ],
    tags: ["Firewall", "Segmentation", "Monitoring", "Compliance"],
    gradient: "from-indigo-500 to-blue-500",
    glow: "group-hover:shadow-indigo-500/20",
    border: "group-hover:border-indigo-500/40",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud & Hybrid IT",
    description: "Migration, hybrid architecture, backup, and workload optimisation across on-prem and cloud environments.",
    details: [
      "Seamless AWS, Azure, and GCP migrations",
      "Hybrid infrastructure orchestration",
      "Automated disaster recovery & backups",
      "FinOps and cloud cost optimisation"
    ],
    tags: ["Cloud Migration", "Hybrid Arch", "Backup & DR", "Optimisation"],
    gradient: "from-cyan-500 to-teal-400",
    glow: "group-hover:shadow-cyan-500/20",
    border: "group-hover:border-cyan-500/40",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "collaboration",
    icon: Video,
    title: "Collaboration & AV",
    description: "Video conferencing, digital signage, and meeting-room technology with integration and ongoing support.",
    details: [
      "Boardroom and conference hall AV design",
      "Interactive displays and digital signage",
      "Unified communications integration (Teams/Zoom)",
      "Ongoing maintenance and hardware support"
    ],
    tags: ["Video Conf", "Digital Signage", "Meeting Rooms", "AV Install"],
    gradient: "from-emerald-500 to-teal-500",
    glow: "group-hover:shadow-emerald-500/20",
    border: "group-hover:border-emerald-500/40",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "iot",
    icon: Eye,
    title: "IoT & Surveillance",
    description: "Smart surveillance, access control systems, and IoT integrations for operational visibility and safety.",
    details: [
      "IP CCTV and AI-powered video analytics",
      "Biometric and RFID access control systems",
      "IoT sensor networks for facility tracking",
      "Centralized physical security management"
    ],
    tags: ["CCTV", "Access Control", "IoT", "Safety Systems"],
    gradient: "from-rose-500 to-pink-500",
    glow: "group-hover:shadow-rose-500/20",
    border: "group-hover:border-rose-500/40",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ai",
    icon: Bot,
    title: "AI & Automation",
    description: "Intelligent workflows, AI assistants, predictive dashboards, and business process automation systems.",
    details: [
      "Custom LLM and generative AI deployments",
      "Robotic Process Automation (RPA)",
      "Predictive analytics and BI dashboards",
      "Automated customer support pipelines"
    ],
    tags: ["Workflow AI", "Chatbots", "Predictive", "RPA"],
    gradient: "from-orange-500 to-rose-500",
    glow: "group-hover:shadow-orange-500/20",
    border: "group-hover:border-orange-500/40",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "managed",
    icon: Shield,
    title: "Managed IT Support",
    description: "PMS, FMS, and SLA-driven incident response with tiered L1–L3 escalation and 99.9% uptime targets.",
    details: [
      "Preventive and Facility Management Services",
      "24/7 helpdesk with SLA-backed response",
      "L1, L2, and L3 engineering escalation",
      "IT asset lifecycle management"
    ],
    tags: ["PMS", "FMS", "SLA 99.9%", "L1–L3 Support"],
    gradient: "from-violet-500 to-indigo-500",
    glow: "group-hover:shadow-violet-500/20",
    border: "group-hover:border-violet-500/40",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "erp",
    icon: Settings,
    title: "Custom ERP / CRM",
    description: "Enterprise-grade ERP, CRM, HRMS, and POS systems built around your specific business workflows.",
    details: [
      "Bespoke ERP architecture and development",
      "CRM implementations and data migration",
      "HRMS and payroll system integration",
      "Custom POS and inventory management"
    ],
    tags: ["ERP", "CRM", "HRMS", "POS"],
    gradient: "from-amber-500 to-orange-400",
    glow: "group-hover:shadow-amber-500/20",
    border: "group-hover:border-amber-500/40",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();
  const scrollToContact = () => navigate("/contact");

  return (
    <section id="services-main" className="relative py-20 overflow-hidden bg-slate-950">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#1e293b 1px,transparent 1px),linear-gradient(to bottom,#1e293b 1px,transparent 1px)",
          backgroundSize: "4rem 4rem",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%,#000 30%,transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%,#000 30%,transparent 100%)",
        }}
      />
      
      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6"
          >
            <Zap size={13} className="text-blue-400" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-blue-400">Our Services</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            Enterprise IT Solutions for{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Every Business Need
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            From infrastructure and security to AI automation and managed support — integrated programs designed for enterprises that demand reliability and scale.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="space-y-32">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            const isEven = i % 2 === 0;

            return (
              <div key={svc.id} id={svc.id} className="scroll-mt-32">
                <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-20 items-center`}>
                  
                  {/* Image side */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="w-full lg:w-1/2"
                  >
                    <div className="relative rounded-3xl overflow-hidden group">
                      <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <div className={`absolute inset-0 bg-gradient-to-tr ${svc.gradient} opacity-20 mix-blend-overlay z-10`} />
                      <img 
                        src={svc.image} 
                        alt={svc.title} 
                        className="w-full h-[400px] object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute bottom-6 right-6 z-20">
                        <div className={`w-14 h-14 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-xl`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Text side */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="w-full lg:w-1/2"
                  >
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      {svc.title}
                    </h3>
                    <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                      {svc.description}
                    </p>
                    
                    <ul className="space-y-4 mb-8">
                      {svc.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className={`w-6 h-6 shrink-0 mt-0.5 text-blue-400`} />
                          <span className="text-slate-300 text-lg">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-10">
                      {svc.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-3 py-1.5 rounded-full bg-slate-800/60 text-slate-400 border border-slate-700/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={scrollToContact}
                      className="group flex items-center gap-2 text-sm font-bold text-white bg-slate-800/80 hover:bg-slate-700/80 px-6 py-3 rounded-xl transition-all border border-slate-700 hover:border-slate-600"
                    >
                      Discuss this solution <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-32 border-t border-slate-800/50 pt-20"
        >
          <button
            onClick={scrollToContact}
            className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 mx-auto overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <span className="relative">Request a Tailored Roadmap</span>
            <ArrowRight size={17} className="relative group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
