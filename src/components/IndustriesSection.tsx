import { motion } from "framer-motion";
import { 
  HeartPulse, GraduationCap, Truck, ShoppingBag, 
  BarChart2, Building2, Factory, Home, ShoppingCart, ArrowRight 
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Industry {
  icon: any;
  name: string;
  capability: string;
  image: string;
  color: string;
  iconBg: string;
  href: string;
}

const industries: Industry[] = [
  { 
    icon: HeartPulse, 
    name: "Healthcare", 
    capability: "HIPAA & EHR Patient Cores",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
    color: "from-red-500/20 to-pink-500/20", 
    iconBg: "bg-red-500/10 border-red-500/30 text-red-400", 
    href: "/industries/healthcare" 
  },
  { 
    icon: GraduationCap, 
    name: "Education", 
    capability: "Stateful Collaborative LMS Platforms",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    color: "from-blue-500/20 to-indigo-500/20", 
    iconBg: "bg-blue-500/10 border-blue-500/30 text-blue-400", 
    href: "/industries/education" 
  },
  { 
    icon: Truck, 
    name: "Logistics", 
    capability: "Event-Driven Spatial Ingestion Meshes",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
    color: "from-amber-500/20 to-orange-500/20", 
    iconBg: "bg-amber-500/10 border-amber-500/30 text-amber-400", 
    href: "/industries/logistics" 
  },
  { 
    icon: ShoppingBag, 
    name: "Retail", 
    capability: "Connected POS & Digital Catalogs",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80",
    color: "from-emerald-500/20 to-teal-500/20", 
    iconBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400", 
    href: "/industries/retail" 
  },
  { 
    icon: BarChart2, 
    name: "SaaS", 
    capability: "Multi-Tenant Metrics Pipelines",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    color: "from-violet-500/20 to-indigo-500/20", 
    iconBg: "bg-violet-500/10 border-violet-500/30 text-violet-400", 
    href: "/industries/saas" 
  },
  { 
    icon: Building2, 
    name: "Finance", 
    capability: "Double-Entry Audited Ledger Cores",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=600&q=80",
    color: "from-cyan-500/20 to-blue-500/20", 
    iconBg: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400", 
    href: "/industries/finance" 
  },
  { 
    icon: Factory, 
    name: "Manufacturing", 
    capability: "Industrial IoT Device Operations Mesh",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    color: "from-slate-500/20 to-slate-400/20", 
    iconBg: "bg-slate-500/10 border-slate-500/30 text-slate-400", 
    href: "/industries/manufacturing" 
  },
  { 
    icon: Home, 
    name: "Real Estate", 
    capability: "Automated Global Listing Engines",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80",
    color: "from-orange-500/20 to-red-500/20", 
    iconBg: "bg-orange-500/10 border-orange-500/30 text-orange-400", 
    href: "/industries/real-estate" 
  },
  { 
    icon: ShoppingCart, 
    name: "E-Commerce", 
    capability: "Multi-Region Serverless Checkouts",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=600&q=80",
    color: "from-pink-500/20 to-rose-500/20", 
    iconBg: "bg-pink-500/10 border-pink-500/30 text-pink-400", 
    href: "/industries/ecommerce" 
  },
];

const IndustriesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-28 overflow-hidden border-t border-slate-900 bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/10 to-slate-950" />

      <div className="container relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/25 bg-blue-500/8 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
              Industries We Serve
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight">
            Domain Expertise Across <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Key Industries
            </span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            We understand business-specific requirements and regulatory contexts, allowing us to build targeted solutions that create measurable impact.
          </p>
        </motion.div>

        {/* Dashboard Grid (3 Columns on Desktop, extremely clean and spacious) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                onClick={() => navigate(industry.href)}
                className="group relative h-60 rounded-3xl overflow-hidden border border-slate-900 bg-slate-950 hover:border-slate-800 transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-blue-500/5 flex flex-col justify-end p-6"
              >
                {/* Visual Unsplash Image with Dark overlay */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.name} 
                    className="w-full h-full object-cover scale-[1.03] group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 opacity-40 group-hover:opacity-50"
                  />
                  {/* Premium Linear Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-30 group-hover:opacity-40 transition-opacity`} />
                </div>

                {/* Content Block (Spaced on top of the image) */}
                <div className="relative z-10 space-y-3">
                  {/* Floating Action Badge */}
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${industry.iconBg} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                      <Icon size={16} />
                    </div>
                    <span className="w-8 h-8 rounded-full bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all">
                      <ArrowRight size={13} />
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium leading-relaxed mt-1">
                      {industry.capability}
                    </p>
                  </div>
                </div>

                {/* Pulsing Border Glow on Hover */}
                <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
