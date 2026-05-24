import { motion } from "framer-motion";
import { Globe2, Zap } from "lucide-react";

const markets = [
  { flag: "🇮🇳", name: "India", desc: "Primary Engineering Hub" },
  { flag: "🇺🇸", name: "United States", desc: "North America Clients" },
  { flag: "🇬🇧", name: "United Kingdom", desc: "Europe Expansion" },
  { flag: "🇦🇪", name: "United Arab Emirates", desc: "Middle East Markets" },
  { flag: "🇸🇬", name: "Singapore", desc: "Southeast Asia" },
  { flag: "🇨🇦", name: "Canada", desc: "North America" },
  { flag: "🇦🇺", name: "Australia", desc: "APAC Region" },
];

const GlobalPresence = () => {
  return (
    <section className="relative py-28 overflow-hidden border-t border-slate-900">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(rgba(59,130,246,0.6) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
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
            <Globe2 size={11} className="text-blue-400" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
              Global Markets
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
            Businesses We Support Across{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Global Markets
            </span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Delivering technology solutions for businesses across multiple countries — with strong engineering, communication, and support.
          </p>
        </motion.div>

        {/* Country Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 mb-14">
          {markets.map((market, i) => (
            <motion.div
              key={market.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative bg-slate-900/60 border border-slate-800/70 hover:border-blue-500/30 rounded-2xl p-4 text-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/8 cursor-default"
            >
              <div className="text-3xl mb-2">{market.flag}</div>
              <p className="text-xs font-bold text-white group-hover:text-blue-100 transition-colors leading-tight">
                {market.name}
              </p>
              <p className="text-[9px] text-slate-500 mt-1 leading-tight hidden sm:block">
                {market.desc}
              </p>
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Bottom stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-8 py-6 border-t border-b border-slate-900"
        >
          {[
            { value: "7+", label: "Countries Served" },
            { value: "50+", label: "Global Clients" },
            { value: "24/7", label: "Support Available" },
            { value: "3+", label: "Years of Delivery" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-xs text-slate-500 font-medium mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalPresence;
