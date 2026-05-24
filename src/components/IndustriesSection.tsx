import { motion } from "framer-motion";
import { HeartPulse, GraduationCap, Truck, ShoppingBag, BarChart2, Building2, Factory, Home, ShoppingCart, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const industries = [
  { icon: HeartPulse, name: "Healthcare", color: "from-red-500 to-pink-500", iconBg: "bg-red-500/10 border-red-500/20 text-red-400", href: "/industries/healthcare" },
  { icon: GraduationCap, name: "Education", color: "from-blue-500 to-indigo-500", iconBg: "bg-blue-500/10 border-blue-500/20 text-blue-400", href: "/industries/education" },
  { icon: Truck, name: "Logistics", color: "from-amber-500 to-orange-500", iconBg: "bg-amber-500/10 border-amber-500/20 text-amber-400", href: "/industries/logistics" },
  { icon: ShoppingBag, name: "Retail", color: "from-emerald-500 to-teal-500", iconBg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400", href: "/industries/retail" },
  { icon: BarChart2, name: "SaaS", color: "from-violet-500 to-indigo-500", iconBg: "bg-violet-500/10 border-violet-500/20 text-violet-400", href: "/industries/saas" },
  { icon: Building2, name: "Finance", color: "from-cyan-500 to-blue-500", iconBg: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400", href: "/industries/finance" },
  { icon: Factory, name: "Manufacturing", color: "from-slate-400 to-slate-500", iconBg: "bg-slate-500/10 border-slate-500/20 text-slate-400", href: "/industries/manufacturing" },
  { icon: Home, name: "Real Estate", color: "from-orange-500 to-red-500", iconBg: "bg-orange-500/10 border-orange-500/20 text-orange-400", href: "/industries/real-estate" },
  { icon: ShoppingCart, name: "E-Commerce", color: "from-pink-500 to-rose-500", iconBg: "bg-pink-500/10 border-pink-500/20 text-pink-400", href: "/industries/ecommerce" },
];

const IndustriesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 overflow-hidden border-t border-slate-900">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/20 to-slate-950" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/25 bg-blue-500/8 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
              Industries We Serve
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
            Domain Expertise Across{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Key Industries
            </span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            We understand business-specific requirements and regulatory contexts, allowing us to build targeted solutions that create measurable impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-3">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col items-center gap-2.5 p-4 rounded-2xl bg-slate-900/50 border border-slate-800/60 hover:border-slate-700/70 transition-all duration-300 cursor-pointer hover:shadow-md hover:shadow-blue-500/5"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${industry.iconBg} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  <Icon size={16} />
                </div>
                <span className="text-[10px] font-semibold text-slate-400 group-hover:text-white transition-colors text-center leading-tight">
                  {industry.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
