import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap, CheckCircle2, ChevronDown, Laptop, 
  Layers, ChevronRight, Cpu, ShieldCheck, Play, 
  HelpCircle, Sparkles, Building2, Terminal, ArrowRight,
  TrendingUp, Award, Clock, Users, ArrowUpRight, BarChart3, BookOpen
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { useToast } from "@/components/ui/use-toast";
import { sendEmail } from "@/utils/sendEmail";
import { 
  LmsSimulator, SchoolManagementSimulator, ExamSimulator, 
  LibrarySimulator, StudentPortalSimulator 
} from "@/components/ProductSimulators";
import { productsData } from "@/data/productsData";

const Education = () => {
  const navigate = useNavigate();
  const { hash } = useLocation();
  const { toast } = useToast();

  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", product: "Learning Management System (LMS)", institute: "" });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    if (hash) {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    }
  }, [hash]);

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast({
        title: "Required parameters",
        description: "Please supply your name and school email address.",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    try {
      const result = await sendEmail({
        name: formData.name,
        email: formData.email,
        service: `Academic Product Trial: ${formData.product}`,
        message: `Institution: ${formData.institute || "Not Specified"}\nRequesting academic demo/sandbox environments.`,
      });
      if (result.success) {
        toast({
          title: "Academic Trial Active!",
          description: `Thank you ${formData.name}. We have registered an academic sandbox for ${formData.product} for ${formData.institute || "your institution"}.`,
        });
        setFormData({ name: "", email: "", product: "Learning Management System (LMS)", institute: "" });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again or contact us directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const stats = [
    { num: "1.2M+", label: "Active Scholars", desc: "Enrolled across global digital portals" },
    { num: "99.9%", label: "Platform Stability", desc: "Redundant multi-region streaming nodes" },
    { num: "4.8/5", label: "Satisfaction Rating", desc: "Voted by institutional faculty committees" },
    { num: "24 Hours", label: "Deployment Time", desc: "Instant digital campus tenant creations" }
  ];

  const productsList = productsData.filter(p => p.categorySlug === "education");

  const faqs = [
    {
      q: "Can parents log into the School Management systems?",
      a: "Yes. Our school platforms feature secure, customized parental gateways. Parents can view attendance histories, inspect real-time bus locations, download report cards, and settle fees using a single click."
    },
    {
      q: "Does the Online Exam system require active high-speed internet?",
      a: "No. Our testing client buffers tests locally. In case of internet drop-offs, the exam continues running inside the encrypted sandbox, and uploads responses to the server as soon as connection is restored."
    },
    {
      q: "Can the LMS support video streaming classes?",
      a: "Yes. We feature integrated low-latency media players (WebRTC and AWS MediaLive streaming) optimized to provide smooth lecture video streams even in lower bandwidth areas."
    }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <ScrollProgress />
      <Navbar />

      {/* ── HERO SECTION ── */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-cyan-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="container relative z-10 text-center max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <GraduationCap size={12} />
            Education & E-Learning Solutions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 animate-pulse-subtle"
          >
            Architect Academic Systems
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent">
              That Shape the Future
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            From interactive SCORM-compliant courses to secure eye-tracking proctor exams and HLS media hubs — we engineer modern institutional architectures that unlock digital classrooms at scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <a
              href="#product-showcase"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-600 to-blue-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              Explore Academic Systems
              <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#book-demo"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-slate-800 hover:border-slate-700 bg-slate-900/50 hover:bg-slate-900 text-slate-300 hover:text-white font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              Request Trial Workspace
            </a>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm text-left"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-white bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent mb-1">
                  {stat.num}
                </span>
                <span className="text-xs font-bold text-cyan-400 mb-0.5">
                  {stat.label}
                </span>
                <span className="text-[10px] sm:text-xs text-slate-500">
                  {stat.desc}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PRODUCT DETAILS/SHOWCASE SECTION ── */}
      <section id="product-showcase" className="py-24 border-t border-slate-900 relative">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-500 mb-3">
              Academic Platform
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Unified Academic Solutions
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Experience modern, secure educational design suites. Select any item below to inspect features and tech highlights.
            </p>
          </div>

          <div className="space-y-16">
            {productsList.map((product, index) => (
              <div
                id={product.id}
                key={product.id}
                className="group relative bg-slate-900/30 border border-slate-800/80 hover:border-slate-700/80 rounded-3xl p-8 sm:p-12 transition-all duration-300"
              >
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-2xl"
                  style={{
                    background: `radial-gradient(circle at 10% 20%, ${product.glow}, transparent 70%)`
                  }}
                />

                <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                  
                  {/* Text Content */}
                  <div>
                    <span className="text-xs font-extrabold text-cyan-400 uppercase tracking-widest block mb-2">
                      {product.subtitle}
                    </span>
                    <h4 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                      {product.title}
                    </h4>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                      {product.desc}
                    </p>

                    <div className="space-y-3 mb-8">
                      {product.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 size={16} className="text-cyan-500 flex-shrink-0 mt-0.5" />
                          {feat}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 items-center">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mr-2">Built With:</span>
                      {product.tech.map((t) => (
                        <span key={t} className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-400">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-800/40">
                      <button 
                        onClick={() => navigate(`/products/${product.id}`)}
                        className="group inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-white transition-colors uppercase tracking-wider cursor-pointer"
                      >
                        Explore Dedicated Feature Page
                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>

                  {/* Graphic Card */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-blue-500/5 rounded-2xl blur-xl" />
                    {product.id === "learning-management-systems-lms-" && <LmsSimulator />}
                    {product.id === "school-management-software" && <SchoolManagementSimulator />}
                    {product.id === "online-examination-systems" && <ExamSimulator />}
                    {product.id === "e-library-solutions" && <LibrarySimulator />}
                    {product.id === "student-portal-systems" && <StudentPortalSimulator />}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section id="faq" className="py-24 border-t border-slate-900 relative">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-500 mb-3">
              FAQ
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Common Questions
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-900/30 border border-slate-800/50 rounded-2xl overflow-hidden transition-colors hover:border-slate-800"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-sm sm:text-base text-slate-100 hover:text-white"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle size={16} className="text-cyan-500" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-slate-500 transition-transform duration-300 flex-shrink-0 ml-4 ${
                      activeFaq === idx ? "rotate-180 text-cyan-400" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-5 pt-1 text-slate-400 text-xs sm:text-sm leading-relaxed border-t border-slate-900">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACADEMIC sandbox REQUEST FORM ── */}
      <section id="book-demo" className="py-24 border-t border-slate-900 bg-slate-950 relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container max-w-4xl mx-auto px-4 relative z-10">
          <div className="bg-slate-900/40 border border-slate-800/70 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent leading-tight">
                  Schedule an Institutional Walkthrough
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  Set up a secure sandbox for your university, academy, or school district. Evaluate LMS, automatic exam grading grids, and fee systems.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-cyan-500 flex-shrink-0" />
                    Complimentary pilot testing layout
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-cyan-500 flex-shrink-0" />
                    Integrated compliance checks (FERPA, GDPR)
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-cyan-500 flex-shrink-0" />
                    On-site implementation consultation
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500/80 text-white text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    School Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="headmaster@school.edu"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500/80 text-white text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Target Suite
                  </label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500/80 text-white text-sm outline-none transition-colors"
                  >
                    <option value="Learning Management System (LMS)">Learning Management System (LMS)</option>
                    <option value="School Management Software">School Management Software</option>
                    <option value="Online Examination Systems">Online Examination Systems</option>
                    <option value="E-Library Solutions">E-Library Solutions</option>
                    <option value="Student Portal Systems">Student Portal Systems</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Institution / University Name
                  </label>
                  <input
                    type="text"
                    value={formData.institute}
                    onChange={(e) => setFormData({ ...formData, institute: e.target.value })}
                    placeholder="E.g., Chennai Technical Academy"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500/80 text-white text-sm outline-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-500 hover:from-cyan-500 hover:to-blue-400 disabled:opacity-50 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/10 cursor-pointer"
                >
                  {submitting ? "Deploying Academic Pilot..." : "Book Walkthrough & Trial"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Education;
