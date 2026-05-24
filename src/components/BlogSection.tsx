import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const blogPosts = [
  {
    id: "post-1",
    category: "Cloud & DevOps",
    title: "Scaling Microservices with Kubernetes: Lessons from the Trenches",
    desc: "A hands-on engineering guide to designing Kubernetes clusters for high availability, zero-downtime deployment pipelines, and optimal cost allocation in production.",
    date: "May 24, 2026",
    readTime: "5 min read",
    author: {
      name: "N. Karthik",
      role: "VP of Engineering",
      initials: "NK",
      color: "from-purple-500 to-indigo-500",
    },
    color: "from-blue-500 to-cyan-500",
    image: "/kubernetes_devops.png",
  },
  {
    id: "post-2",
    category: "AI & Automation",
    title: "Building High-Throughput LLM Agent Clusters for Enterprise Workflows",
    desc: "A technical deep dive into orchestration frameworks, memory persistence layers, and low-latency API design patterns for running production-grade AI agents.",
    date: "May 18, 2026",
    readTime: "8 min read",
    author: {
      name: "Gurubalan GT",
      role: "Founder & CEO",
      initials: "GB",
      color: "from-emerald-500 to-teal-500",
    },
    color: "from-emerald-500 to-green-500",
    image: "/ai_coding.png",
  },
  {
    id: "post-3",
    category: "Software Engineering",
    title: "Transitioning from Monolith to Event-Driven Architecture Safely",
    desc: "A structured migration blueprint for decoupling legacy enterprise databases and core logic using Apache Kafka, message queues, and eventual consistency models.",
    date: "May 10, 2026",
    readTime: "6 min read",
    author: {
      name: "M. Anjali",
      role: "Managing Director",
      initials: "MA",
      color: "from-blue-500 to-indigo-500",
    },
    color: "from-indigo-500 to-violet-500",
    image: "/software_architecture.png",
  },
];

const BlogSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-28 overflow-hidden border-t border-slate-900 bg-slate-950">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/10 to-slate-950" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/25 bg-blue-500/8 mb-6">
              <BookOpen size={11} className="text-blue-400" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
                Engineering Insights
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              Deep Dives into{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Systems & Architecture
              </span>
            </h2>
            <p className="text-slate-400 text-sm max-w-xl">
              Written by our core engineering team. Technical blueprints, system designs, and operational guides based on real production environments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="shrink-0"
          >
            <button
              onClick={() => navigate("/blog")}
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-800 hover:border-blue-500/40 hover:bg-slate-900/40 text-slate-300 hover:text-white font-bold text-xs transition-all"
            >
              View All Technical Articles
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative bg-slate-900/40 border border-slate-850 hover:border-blue-500/30 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between"
            >
              {/* Visual post picture banner */}
              <div className="relative h-44 overflow-hidden shrink-0 w-full bg-slate-950">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-slate-950/20" />
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${post.color}`} />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                {/* Meta details */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400/90 px-2 py-0.5 rounded-full bg-blue-500/5 border border-blue-500/10">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-3 text-slate-500 text-[10px]">
                      <div className="flex items-center gap-1">
                        <Calendar size={11} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={11} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-bold text-white mb-3 group-hover:text-blue-300 transition-colors leading-snug">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[11px] text-slate-400 leading-relaxed mb-6">
                    {post.desc}
                  </p>
                </div>

                {/* Author & Read More */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between mt-auto">
                  {/* Author detail */}
                  <div className="flex items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${post.author.color} flex items-center justify-center text-white text-[10px] font-bold shrink-0 shadow-sm`}>
                      {post.author.initials}
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-white leading-none">{post.author.name}</p>
                      <p className="text-[9px] text-slate-500 font-semibold mt-0.5 leading-none">{post.author.role}</p>
                    </div>
                  </div>

                  {/* Hover icon action */}
                  <div className="w-8 h-8 rounded-full bg-slate-950 border border-slate-850 group-hover:border-blue-500/30 group-hover:bg-slate-900/60 flex items-center justify-center text-slate-400 group-hover:text-blue-400 transition-all">
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
