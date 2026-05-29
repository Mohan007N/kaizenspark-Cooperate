import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";

interface Market {
  code: string;
  name: string;
  desc: string;
}

const markets: Market[] = [
  { code: "in", name: "India", desc: "Primary Engineering Hub" },
  { code: "us", name: "United States", desc: "North America Clients" },
  { code: "gb", name: "United Kingdom", desc: "Europe Expansion" },
  { code: "ae", name: "United Arab Emirates", desc: "Middle East Markets" },
  { code: "sg", name: "Singapore", desc: "Southeast Asia" },
  { code: "ca", name: "Canada", desc: "North America" },
  { code: "au", name: "Australia", desc: "APAC Region" },
];

const GlobalPresence = () => {
  return (
    <section className="relative py-28 overflow-hidden border-t border-slate-900 bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/10 to-slate-950" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(rgba(59,130,246,0.6) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container relative z-10 max-w-7xl mx-auto px-4">
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-16">
          {markets.map((market, i) => (
            <motion.div
              key={market.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative bg-slate-900/40 border border-slate-800/80 hover:border-blue-500/30 rounded-2xl p-5 text-center transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 cursor-default flex flex-col justify-center items-center"
            >
              {/* Premium Circular Vector Flag */}
              <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-750 bg-slate-950 flex items-center justify-center mb-4 group-hover:border-blue-500/45 group-hover:scale-110 shadow-lg transition-all duration-300 shrink-0">
                <img 
                  src={`https://flagcdn.com/w80/${market.code}.png`} 
                  alt={`${market.name} Flag`} 
                  className="w-full h-full object-cover scale-[1.05]"
                  loading="lazy"
                />
              </div>

              <p className="text-xs font-bold text-white group-hover:text-blue-200 transition-colors leading-tight">
                {market.name}
              </p>
              <p className="text-[10px] text-slate-500 mt-2 leading-tight hidden sm:block">
                {market.desc}
              </p>

              {/* Glowing Background Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-around gap-6 py-8 border-t border-b border-slate-900 bg-slate-950/20 backdrop-blur-sm"
        >
          {[
            { value: "7+", label: "Countries Served" },
            { value: "70+", label: "Global Clients" },
            { value: "24/7", label: "Support Available" },
            { value: "3+", label: "Years of Delivery" },
          ].map((stat) => (
            <div key={stat.label} className="text-center px-4">
              <p className="text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalPresence;
