import { useNavigate } from "react-router-dom";
import { ChevronRight, MessageCircle, Shield, Clock, Users, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const trustBadges = [
  { icon: Shield, label: "NDA Available" },
  { icon: Clock, label: "Proposal Within 24 Hours" },
  { icon: Users, label: "Dedicated Engineering Team" },
  { icon: CheckCircle2, label: "Long-Term Technical Support" },
];

const FinalCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-28 overflow-hidden border-t border-slate-900">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top center, hsl(215 100% 50% / 0.06) 0%, transparent 65%)",
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight tracking-tight">
              Let's Build Systems{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                That Scale.
              </span>
            </h2>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Discuss your software architecture, automation requirements, and infrastructure goals with our engineering team.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => navigate("/contact")}
                className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                <span className="relative">Book Strategy Call</span>
                <ChevronRight size={18} className="relative group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="https://wa.me/919150684544?text=Hi%20KaizenSpark%2C%20I%20would%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 rounded-xl border border-emerald-700/50 hover:border-emerald-500/60 hover:bg-emerald-900/20 text-emerald-400 hover:text-emerald-300 font-bold transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
                WhatsApp Us
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {trustBadges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={badge.label}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/60 border border-slate-800/80 text-slate-400 text-xs font-medium"
                  >
                    <Icon size={13} className="text-emerald-400" />
                    {badge.label}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
