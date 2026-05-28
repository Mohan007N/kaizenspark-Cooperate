import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, CheckCircle2, ChevronDown, Laptop, 
  Layers, ChevronRight, Cpu, ShieldCheck, Play, 
  HelpCircle, Sparkles, Terminal, ArrowRight,
  TrendingUp, Award, Clock, Users, ArrowUpRight, BarChart3, Building
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { useToast } from "@/components/ui/use-toast";
import { sendEmail } from "@/utils/sendEmail";
import { 
  HealthcareSimulator, RestaurantSimulator, RealEstateSimulator, 
  HotelSimulator, RetailSimulator 
} from "@/components/ProductSimulators";
import { productsData } from "@/data/productsData";

const IndustrySolutions = () => {
  const navigate = useNavigate();
  const { hash } = useLocation();
  const { toast } = useToast();

  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", product: "Healthcare Management Solutions", details: "" });
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
        title: "Information missing",
        description: "Please supply your name and company email address.",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    try {
      const result = await sendEmail({
        name: formData.name,
        email: formData.email,
        service: `Industry Specific Product Inquiry: ${formData.product}`,
        message: formData.details ? `Fleet / branch details: ${formData.details}` : "Requesting a custom vertical industry solution session.",
      });
      if (result.success) {
        toast({
          title: "Industry Assessment Scheduled!",
          description: `Thank you ${formData.name}. An industry solutions architect will review your parameters and contact you within 24 hours.`,
        });
        setFormData({ name: "", email: "", product: "Healthcare Management Solutions", details: "" });
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
    { num: "450+", label: "Medical Centers", desc: "Secured via patient OPD/IPD medical EHR portals" },
    { num: "1.2M+", label: "Orders Serviced", desc: "Fulfilled via high-speed restaurant kitchen desks" },
    { num: "₹1,200Cr", label: "Capital Booked", desc: "Successfully resolved across installment ledgers" },
    { num: "1,500+", label: "Hotel Rooms Syncing", desc: "Simultaneously coordinated via OTA Channel Managers" }
  ];

  const productsList = productsData.filter(p => p.categorySlug === "industry-solutions");

  const faqs = [
    {
      q: "Can the Hotel Management system sync with external booking channels?",
      a: "Yes. Our hotel suite features optional Channel Manager APIs. It guarantees that rooms booked on platforms like MakeMyTrip, Agoda, or Booking.com instantly block out dates on your central booking grid, preventing double bookings."
    },
    {
      q: "Is the Healthcare suite compliant with local privacy acts?",
      a: "Absolutely. Our healthcare platform is designed in strict alignment with the DPDPA act in India and standard HIPAA criteria globally, enforcing high-encryption patient records and permission-based audit logs."
    },
    {
      q: "Can the Restaurant KDS handle offline operations?",
      a: "Yes. Our restaurant local gateway continues to sync orders between the front desks and the kitchen displays over the local LAN even if external internet fails, syncing final sales data to the cloud once restored."
    }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      <ScrollProgress />
      <Navbar />

      {/* ── HERO SECTION ── */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-indigo-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="container relative z-10 text-center max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Building2 size={12} />
            Industry Specific Solutions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 animate-pulse-subtle"
          >
            Purpose-Built Operations
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
              For Targeted Verticals
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            From secure HIPAA-compliant hospital clinics to high-throughput restaurant kitchen hubs, automated real estate installment matrices, and multi-channel hotel OTA managers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <a
              href="#product-showcase"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-bold text-sm shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              Explore Industry Solutions
              <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#book-demo"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-slate-800 hover:border-slate-700 bg-slate-900/50 hover:bg-slate-900 text-slate-300 hover:text-white font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              Consult an Architect
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
                <span className="text-xs font-bold text-indigo-400 mb-0.5">
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
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-500 mb-3">
              Vertical Focus
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Engineered for Real-World Workflows
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              KaizenSpark Tech designs purpose-built operational interfaces. Examine the individual capabilities of our vertical platform modules.
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
                    <span className="text-xs font-extrabold text-indigo-400 uppercase tracking-widest block mb-2">
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
                          <CheckCircle2 size={16} className="text-indigo-500 flex-shrink-0 mt-0.5" />
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
                        className="group inline-flex items-center gap-2 text-xs font-bold text-indigo-400 hover:text-white transition-colors uppercase tracking-wider cursor-pointer"
                      >
                        Explore Dedicated Feature Page
                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>

                  {/* Graphic Card */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-blue-500/5 rounded-2xl blur-xl" />
                    {product.id === "healthcare-management" && <HealthcareSimulator />}
                    {product.id === "restaurant-management" && <RestaurantSimulator />}
                    {product.id === "real-estate-solutions" && <RealEstateSimulator />}
                    {product.id === "hotel-management" && <HotelSimulator />}
                    {product.id === "retail-management" && <RetailSimulator />}
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
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-500 mb-3">
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
                    <HelpCircle size={16} className="text-indigo-500" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-slate-500 transition-transform duration-300 flex-shrink-0 ml-4 ${
                      activeFaq === idx ? "rotate-180 text-indigo-400" : ""
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

      {/* ── CONSULTATION REQUEST FORM ── */}
      <section id="book-demo" className="py-24 border-t border-slate-900 bg-slate-950 relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container max-w-4xl mx-auto px-4 relative z-10">
          <div className="bg-slate-900/40 border border-slate-800/70 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent leading-tight">
                  Consult an Industry Solutions Architect
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  Design or adapt a modular product suite matching your exact branch flow. Set up custom proctored trial credentials.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-indigo-500 flex-shrink-0" />
                    Bespoke blueprint flow designs
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-indigo-500 flex-shrink-0" />
                    Encrypted secure on-site nodes configuration
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-indigo-500 flex-shrink-0" />
                    24/7 priority SLA support contracts
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
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500/80 text-white text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Corporate Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="director@healthcare.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500/80 text-white text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Industry Sector
                  </label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500/80 text-white text-sm outline-none transition-colors"
                  >
                    <option value="Healthcare Management Solutions">Healthcare Management</option>
                    <option value="Restaurant Management Solutions">Restaurant Management</option>
                    <option value="Real Estate Solutions">Real Estate Solutions</option>
                    <option value="Hotel Management Solutions">Hotel Management</option>
                    <option value="Retail Chain Management">Retail Management</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Describe Your Fleet / Branch Setup
                  </label>
                  <textarea
                    rows={2}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="E.g., 3 hospitals, 150 terminal registers..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500/80 text-white text-sm outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-500 hover:to-blue-400 disabled:opacity-50 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/10 cursor-pointer"
                >
                  {submitting ? "Booking Architect Session..." : "Schedule Industry Assessment"}
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

export default IndustrySolutions;
