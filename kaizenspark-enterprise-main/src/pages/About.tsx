import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { motion } from "framer-motion";
import { 
  Download, Phone, Scale, Globe, CheckCircle2, 
  ArrowRight, Handshake, Target, Shield, Server,
  Building2, Zap
} from "lucide-react";

const stats = [
  { value: "15+", label: "Years experience" },
  { value: "166+", label: "Trusted clients" },
  { value: "1", label: "National HQ" },
  { value: "99.9%", label: "Uptime focus" },
];

const whyChooseUs = [
  {
    icon: Scale,
    title: "Bidding and Compliance Expertise",
    desc: "Strong legal, compliance and documentation support for public and private sector engagements.",
  },
  {
    icon: Handshake,
    title: "Aligned Multi-Brand Partnerships",
    desc: "Carefully selected OEM partnerships for dependable, scalable and cost-effective outcomes.",
  },
  {
    icon: Globe,
    title: "Large Multi-Location Delivery",
    desc: "Execution capabilities for high-value projects across distributed enterprise environments.",
  },
];

const valueDelivered = [
  {
    tag: "Strategy",
    title: "Consulting and Advisory",
    desc: "Strategy consulting aligned to business priorities and measurable outcomes.",
  },
  {
    tag: "Partners",
    title: "Strong Delivery Ecosystem",
    desc: "Best-in-class partner network combined with in-house technical specialists.",
  },
  {
    tag: "Infrastructure",
    title: "Optimized Infrastructure Planning",
    desc: "Compliant, scalable and TCO-focused hosting and infrastructure design.",
  },
  {
    tag: "Delivery",
    title: "Implementation and Migration",
    desc: "Structured rollout and migration support for enterprise-grade platforms.",
  },
  {
    tag: "Operations",
    title: "Intelligent Operations",
    desc: "Automation-driven operations that improve reliability and service continuity.",
  },
];

const competencies = [
  "IT Infrastructure and Network Security",
  "AV Integration and Smart Collaboration",
  "Data Centre, Backup and Storage",
  "Cybersecurity and Surveillance",
  "Cloud and Software-as-a-Service",
  "Enterprise Communication Platforms",
];

const About = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const navigate = useNavigate();

  const scrollToContact = () => navigate("/contact");

  return (
    <div className="relative bg-slate-950">
      <ScrollProgress />
      <Navbar />
      
      <main className="relative pt-20">
        
        {/* ── HERO SECTION ── */}
        <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl mix-blend-screen"
          />
          
          <div className="container relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
                <Building2 size={14} className="text-blue-400" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-blue-400">About Us</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                Trusted IT{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  System Integrator
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-xl">
                Helping enterprises and SMBs modernize infrastructure, strengthen security, and accelerate digital transformation across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToContact}
                  className="group px-7 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
                >
                  <Phone size={18} />
                  <span>Speak with our team</span>
                </button>
                <button
                  className="group px-7 py-4 rounded-xl border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800/50 text-slate-300 hover:text-white font-bold transition-all flex items-center justify-center gap-2"
                >
                  <Download size={18} className="text-slate-400 group-hover:text-blue-400 transition-colors" />
                  <span>Download profile</span>
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-slate-800/60 shadow-2xl h-[400px] lg:h-[500px]">
                <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" 
                  alt="Modern IT Infrastructure" 
                  className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-8 -left-8 right-8 lg:-right-12 bg-slate-900/90 backdrop-blur-xl border border-slate-800 p-6 rounded-2xl shadow-xl z-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-slate-800">
                  {stats.map((s, i) => (
                    <div key={i} className="px-2">
                      <p className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                        {s.value}
                      </p>
                      <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── VISION & IDENTITY ── */}
        <section className="relative py-24 bg-slate-950">
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              
              {/* Vision side */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="order-2 lg:order-1"
              >
                <div className="relative rounded-3xl overflow-hidden border border-slate-800/60 shadow-2xl h-[350px]">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" 
                    alt="Our Vision Team" 
                    className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-sm font-bold text-blue-400 mb-2 uppercase tracking-widest">Our Vision</p>
                    <h3 className="text-2xl font-bold text-white leading-tight">
                      Partner in Progress for Enterprise Transformation
                    </h3>
                  </div>
                </div>
                <div className="mt-8 p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
                  <p className="text-slate-400 text-lg leading-relaxed italic">
                    "To be a trusted technology partner enabling organizations to realize end-to-end transformation through innovation, operational excellence, and integrated IT solutions."
                  </p>
                </div>
              </motion.div>

              {/* Who We Are side */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="order-1 lg:order-2"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
                  <Target size={14} className="text-blue-400" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-blue-400">Who We Are</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
                  Corporate IT integrator with{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    national delivery reach
                  </span>
                </h2>
                <p className="text-lg text-slate-400 leading-relaxed mb-6">
                  KaizenSpark Tech Solutions and Services combines consulting depth, OEM partnerships, and field execution to deliver infrastructure, security, collaboration, and managed services for regulated and growth-focused organizations.
                </p>
                
                <div className="space-y-6 mt-10">
                  <h3 className="text-xl font-bold text-white mb-4">Why Organizations Choose KaizenSpark</h3>
                  <p className="text-slate-400 mb-6">Proven delivery, strong partnerships, and multi-location execution for enterprise-scale programs.</p>
                  
                  {whyChooseUs.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                          <Icon size={20} className="text-blue-400" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold mb-1">{item.title}</h4>
                          <p className="text-sm text-slate-400">{item.desc}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── VALUE DELIVERED ── */}
        <section className="relative py-24 bg-slate-900 border-y border-slate-800/50 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(rgba(59,130,246,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.5) 1px,transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">
                Value We Deliver
              </h2>
              <p className="text-lg text-slate-400">
                A business-first engagement model from advisory through long-term operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {valueDelivered.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-slate-950/50 border border-slate-800 rounded-2xl p-7 hover:border-blue-500/30 transition-colors group"
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4">
                    {v.tag}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Quote Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/20 rounded-3xl p-8 lg:p-12 text-center max-w-4xl mx-auto relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-blue-500/5 backdrop-blur-sm" />
              <div className="relative z-10">
                <Shield className="w-12 h-12 text-blue-400 mx-auto mb-6 opacity-50" />
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Business-first IT delivery with long-term reliability
                </h3>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                  Every engagement is built around measurable outcomes, structured implementation, and post-deployment support — so your teams gain sustained value, not one-time execution.
                </p>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ── COMPETENCIES ── */}
        <section className="relative py-24 bg-slate-950">
          <div className="container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
                <Server size={14} className="text-blue-400" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-blue-400">Our Portfolio</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
                Competencies and{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Solution Offerings
                </span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                A balanced portfolio spanning infrastructure, cloud, communication, and security to support your digital ecosystem from end to end.
              </p>
              
              <ul className="space-y-4">
                {competencies.map((comp, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 bg-slate-900/50 border border-slate-800 rounded-xl p-4 hover:border-blue-500/30 transition-colors"
                  >
                    <CheckCircle2 size={20} className="text-blue-500 shrink-0" />
                    <span className="text-slate-200 font-medium">{comp}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" 
                alt="Technology Offerings" 
                className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-2xl p-6">
                  <h4 className="text-white font-bold text-lg mb-2">Next step</h4>
                  <p className="text-slate-300 text-sm mb-4">
                    See how preventive maintenance, facility management, and SLA-driven support protect your operations.
                  </p>
                  <a href="/managed-services" className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors group">
                    Explore our managed services <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default About;
