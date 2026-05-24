import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Clock, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const caseStudies = [
  {
    category: "Web App • CRM",
    title: "LogisticsPro CRM Platform",
    challenge: "Manual tracking workflows were causing operational delays and poor visibility across logistics operations.",
    solution: "Built a centralized logistics CRM with real-time shipment tracking, automated reporting, and operational dashboards.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "WebSockets"],
    results: [
      { icon: TrendingUp, metric: "40%", label: "Reduction in manual workload" },
      { icon: Clock, metric: "28 Days", label: "Time to launch" },
      { icon: Zap, metric: "3x", label: "Improved operational visibility" },
    ],
    color: "from-blue-500 to-cyan-500",
    tag: "Enterprise",
  },
  {
    category: "Mobile App • Healthcare",
    title: "HealthBridge Patient Platform",
    challenge: "Patients needed a seamless digital experience for teleconsultations, prescriptions, and real-time doctor availability.",
    solution: "Engineered a HIPAA-compliant telehealth platform with video consultations, prescription management, and payment integration.",
    technologies: ["React Native", "Node.js", "AWS", "Stripe", "WebRTC"],
    results: [
      { icon: TrendingUp, metric: "10K+", label: "Downloads in 2 months" },
      { icon: Clock, metric: "4.8★", label: "App Store Rating" },
      { icon: Zap, metric: "60%", label: "Faster appointment booking" },
    ],
    color: "from-emerald-500 to-teal-500",
    tag: "Healthcare",
  },
  {
    category: "E-Commerce • Retail",
    title: "FashionHive E-Commerce",
    challenge: "Legacy e-commerce platform couldn't handle peak traffic and lacked advanced search and recommendation systems.",
    solution: "Rebuilt the platform with AI-powered product recommendations, advanced search, inventory management, and analytics.",
    technologies: ["Next.js", "Python", "MongoDB", "Redis", "Elasticsearch"],
    results: [
      { icon: TrendingUp, metric: "3x", label: "Increase in organic traffic" },
      { icon: Clock, metric: "₹2.1Cr+", label: "Revenue in 3 months" },
      { icon: Zap, metric: "98%", label: "Uptime maintained" },
    ],
    color: "from-violet-500 to-pink-500",
    tag: "E-Commerce",
  },
];

const CaseStudiesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-28 overflow-hidden border-t border-slate-900">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/25 bg-blue-500/8 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
              Featured Work
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
            Engineering. Real Results.{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Real Impact.
            </span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mb-8">
            Each project is built to solve a specific business problem. Here's how we've engineered solutions that deliver measurable outcomes.
          </p>
          <button
            onClick={() => navigate("/our-work")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group"
          >
            View All Case Studies <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="group relative bg-slate-900/60 border border-slate-800/70 hover:border-slate-700/80 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/8 flex flex-col"
            >
              {/* Top accent */}
              <div className={`h-1 w-full bg-gradient-to-r ${study.color}`} />

              <div className="p-6 flex-1 flex flex-col">
                {/* Category + Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    {study.category}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r ${study.color} text-white`}>
                    {study.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white mb-4 leading-tight">
                  {study.title}
                </h3>

                {/* Challenge / Solution */}
                <div className="space-y-3 mb-5 flex-1">
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Challenge</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Solution</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {study.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-400 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-800/60">
                  {study.results.map((result) => {
                    const Icon = result.icon;
                    return (
                      <div key={result.label} className="text-center">
                        <p className={`text-sm font-black bg-gradient-to-r ${study.color} bg-clip-text text-transparent`}>
                          {result.metric}
                        </p>
                        <p className="text-[9px] text-slate-500 leading-tight mt-0.5">{result.label}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
