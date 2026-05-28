import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, CheckCircle2, ShieldCheck, HelpCircle, 
  Sparkles, Terminal, ArrowRight, Laptop, Clock, Server, ArrowUpRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { useToast } from "@/components/ui/use-toast";
import { sendEmail } from "@/utils/sendEmail";
import { getProductById } from "@/data/productsData";
import { 
  BillingSoftwareSimulator, CrmSimulator, ErpSimulator, 
  InventorySimulator, PosSimulator, AccountingSimulator,
  LmsSimulator, SchoolManagementSimulator, ExamSimulator, 
  LibrarySimulator, StudentPortalSimulator, HealthcareSimulator, 
  RestaurantSimulator, RealEstateSimulator, HotelSimulator, 
  RetailSimulator, ChatbotSimulator, BpaSimulator, 
  AnalyticsSimulator, OcrSimulator, WorkflowSimulator
} from "@/components/ProductSimulators";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const product = productId ? getProductById(productId) : undefined;

  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsSubmitting, setNewsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-slate-400 mb-4">Product Not Found</h1>
        <Link to="/" className="text-blue-500 hover:underline">Return to Home</Link>
      </div>
    );
  }

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsSubmitting(true);
    try {
      const result = await sendEmail({
        name: "Newsletter Subscriber",
        email: newsletterEmail,
        service: `Newsletter - Product: ${product.title}`,
        message: `New subscriber email on product details for: ${product.title}`,
      });
      if (result.success) {
        toast({
          title: "Successfully Subscribed!",
          description: "Welcome to the KaizenSpark newsletter community.",
        });
        setNewsletterEmail("");
      } else {
        toast({
          title: "Subscription failed",
          description: "Please check your connection and try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setNewsSubmitting(false);
    }
  };

  const faqs = [
    {
      q: `Is the dynamic sandbox simulator environment for ${product.title} fully functional?`,
      a: "Yes! Our product sandbox environments are configured with local state routers that simulate live server databases, offline buffers, and integrated API loops to give you a hands-on feel of the application."
    },
    {
      q: "Can this software be integrated with our existing legacy systems?",
      a: "Absolutely. Every product we build features robust RESTful API endpoints and custom data pipeline formats, making it easy to synchronize directly with your legacy databases and back-office suites."
    },
    {
      q: "What is the typical deployment timeframe for a tailored enterprise installation?",
      a: "Standard installations go live in 2 to 4 weeks. Custom workflows, specific department dashboards, and legacy data migrations are completed in detailed sprints depending on organization requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      <ScrollProgress />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 md:px-8 border-b border-slate-900/60 overflow-hidden">
        {/* Glow Backdrops */}
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[160px] opacity-[0.08] pointer-events-none transition-all duration-1000"
          style={{ backgroundColor: product.glow.includes("rgba") ? "rgba(59,130,246,0.3)" : "rgba(168,85,247,0.3)" }}
        />
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-b from-blue-500/5 to-purple-500/0 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto">
          {/* Back button */}
          <button 
            onClick={() => navigate(`/products/${product.categorySlug}`)}
            className="group inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-wider mb-8 cursor-pointer"
          >
            <ChevronLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
            Back to {product.category}
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Title / Description column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-slate-900 border border-slate-800 text-blue-400 uppercase tracking-widest">
                <Sparkles size={10} />
                {product.category}
              </span>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-outfit">
                {product.title}
              </h1>

              <p className="text-lg sm:text-xl font-medium bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent leading-relaxed">
                {product.subtitle}
              </p>

              <p className="text-slate-400 leading-relaxed max-w-xl text-sm sm:text-base">
                {product.desc}
              </p>

              {/* Features List */}
              <div className="space-y-3.5 pt-4">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">CORE SYSTEM PARAMETERS</span>
                {product.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
                    {feat}
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div className="pt-6 space-y-2">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">ENGINEERING CORE</span>
                <div className="flex flex-wrap gap-2">
                  {product.tech.map((t) => (
                    <span key={t} className="text-[10px] font-bold px-3 py-1 rounded-md bg-slate-950 border border-slate-850 text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Simulator Sandbox column */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-indigo-500/5 rounded-2xl blur-xl" />
              
              {/* Product Visual Playground Router */}
              {product.id === "billing-software" && <BillingSoftwareSimulator />}
              {product.id === "custom-crm-solutions" && <CrmSimulator />}
              {product.id === "erp-systems" && <ErpSimulator />}
              {product.id === "inventory-management-tools" && <InventorySimulator />}
              {product.id === "point-of-sale-systems" && <PosSimulator />}
              {product.id === "accounting-software" && <AccountingSimulator />}
              
              {product.id === "learning-management-systems-lms-" && <LmsSimulator />}
              {product.id === "school-management-software" && <SchoolManagementSimulator />}
              {product.id === "online-examination-systems" && <ExamSimulator />}
              {product.id === "e-library-solutions" && <LibrarySimulator />}
              {product.id === "student-portal-systems" && <StudentPortalSimulator />}
              
              {product.id === "healthcare-management" && <HealthcareSimulator />}
              {product.id === "restaurant-management" && <RestaurantSimulator />}
              {product.id === "real-estate-solutions" && <RealEstateSimulator />}
              {product.id === "hotel-management" && <HotelSimulator />}
              {product.id === "retail-management" && <RetailSimulator />}
              
              {product.id === "ai-chatbot-solutions" && <ChatbotSimulator />}
              {product.id === "business-process-automation" && <BpaSimulator />}
              {product.id === "data-analytics-platforms" && <AnalyticsSimulator />}
              {product.id === "document-management" && <OcrSimulator />}
              {product.id === "workflow-automation-tools" && <WorkflowSimulator />}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscribe Section */}
      <section className="py-16 border-b border-slate-900/60 bg-slate-950/40 relative">
        <div className="container max-w-xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-2 text-white">Stay in the loop</h3>
          <p className="text-slate-400 text-xs sm:text-sm mb-6">
            Get the latest from KaizenSpark — tips, updates, and exclusive offers.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-grow px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500/80 text-white text-sm outline-none transition-colors"
            />
            <button
              type="submit"
              disabled={newsSubmitting}
              className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-white text-slate-950 font-bold text-sm transition-colors flex-shrink-0 cursor-pointer disabled:opacity-50"
            >
              {newsSubmitting ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-8 border-b border-slate-900/60 relative">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-slate-900 border border-slate-850 text-blue-400 uppercase tracking-widest">
              <HelpCircle size={10} /> FAQ desk
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white font-outfit">
              Product Inquiries & Systems
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Answers regarding licensing structure, offline operations, and active software integrations.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-slate-900/30 border border-slate-900 rounded-xl overflow-hidden backdrop-blur-sm"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-white hover:bg-slate-900/20 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className={`text-slate-500 shrink-0 transform transition-transform duration-300 ${activeFaq === index ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 pt-1 text-slate-400 text-xs sm:text-sm leading-relaxed border-t border-slate-900/40">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
