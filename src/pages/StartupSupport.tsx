import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe, Cpu, Layers, Database, ShieldCheck, Laptop, 
  ChevronRight, Sparkles, CheckCircle2, ChevronDown, 
  Send, HelpCircle, ArrowUpRight, Phone, Mail, MapPin, 
  ShieldAlert, Rocket, Check, ArrowRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { useToast } from "@/components/ui/use-toast";
import { sendEmail } from "@/utils/sendEmail";

const StartupSupport = () => {
  const navigate = useNavigate();
  const { hash } = useLocation();
  const { toast } = useToast();

  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", details: "" });
  const [submitting, setSubmitting] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsSubmitting, setNewsSubmitting] = useState(false);

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

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast({
        title: "Missing fields",
        description: "Please fill out your name and email address so we can reach you.",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    try {
      const result = await sendEmail({
        name: formData.name,
        email: formData.email,
        service: "Startup Support Consultation",
        message: formData.details || "Requesting a startup support consultation.",
      });
      if (result.success) {
        toast({
          title: "Advisor call requested!",
          description: `Thank you ${formData.name}. Our startup expert will review your concept and contact you within 24 hours.`,
        });
        setFormData({ name: "", email: "", details: "" });
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

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsSubmitting(true);
    try {
      const result = await sendEmail({
        name: "Newsletter Subscriber",
        email: newsletterEmail,
        service: "Newsletter Subscription",
        message: `New subscriber email: ${newsletterEmail}`,
      });
      if (result.success) {
        toast({
          title: "Successfully Subscribed!",
          description: "Welcome to the KaizenSpark Tech newsletter community.",
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

  const stats = [
    { number: "80+", label: "Startups Launched", desc: "Founders supported end-to-end" },
    { number: "4 Weeks", label: "Fastest MVP Delivery", desc: "Time to first functional demo" },
    { number: "₹0", label: "Hidden Fees or Lock-ins", desc: "Transparent upfront pricing" },
    { number: "3 Cities", label: "Active Startup Clients", desc: "Core regional hubs active" }
  ];

  const buildItems = [
    {
      id: "mvp-development",
      title: "MVP Development",
      desc: "Launch your product idea fast — we build lean, focused MVPs in 4–8 weeks so you can start gathering real user feedback before spending big.",
      tags: ["4–8 Weeks", "Next.js / Flutter", "Scalable"],
      icon: Cpu,
      color: "from-blue-500 to-cyan-500",
      glow: "rgba(59,130,246,0.15)"
    },
    {
      id: "brand-identity",
      title: "Brand Identity",
      desc: "Logo, colour palette, typography, and brand guidelines that make your startup look established from day one — not like a side project.",
      tags: ["Logo", "Brand Book", "Style Guide"],
      icon: Layers,
      color: "from-purple-500 to-indigo-500",
      glow: "rgba(139,92,246,0.15)"
    },
    {
      id: "product-strategy",
      title: "Product Strategy",
      desc: "Product roadmap workshops, feature prioritisation frameworks, and go-to-market strategy reviews with experienced product thinkers.",
      tags: ["Roadmap", "GTM Strategy", "User Research"],
      icon: Globe,
      color: "from-emerald-500 to-teal-500",
      glow: "rgba(16,185,129,0.15)"
    },
    {
      id: "company-registration",
      title: "Company Registration",
      desc: "Pvt Ltd and LLP registration in India handled end-to-end — MCA filings, director DIN/DSC, PAN/TAN, and GST registration.",
      tags: ["Pvt Ltd", "LLP", "GST"],
      icon: Database,
      color: "from-amber-500 to-orange-500",
      glow: "rgba(245,158,11,0.15)"
    },
    {
      id: "trademark-registration",
      title: "Trademark Registration",
      desc: "Trademark search, class identification, and application filing to protect your brand name and logo from day one of operations.",
      tags: ["IP Protection", "TM Search", "Filing"],
      icon: ShieldCheck,
      color: "from-rose-500 to-pink-500",
      glow: "rgba(244,63,94,0.15)"
    },
    {
      id: "nocode-prototypes",
      title: "No-Code Prototypes",
      desc: "Rapid no-code prototypes using Webflow, Framer, or Bubble — ideal for fundraising demos, user testing, and landing pages.",
      tags: ["Webflow", "Framer", "Bubble"],
      icon: Laptop,
      color: "from-cyan-500 to-blue-500",
      glow: "rgba(6,182,212,0.15)"
    }
  ];

  const packages = [
    {
      name: "Launch Starter",
      desc: "Everything you need to go from idea to first customers.",
      popular: false,
      features: [
        "Logo & basic brand identity",
        "1 landing page / marketing site",
        "Contact form with email integration",
        "Basic SEO setup",
        "Company registration guidance"
      ],
      btnText: "Get Started"
    },
    {
      name: "MVP Builder",
      desc: "A complete digital product ready for real users.",
      popular: true,
      features: [
        "Full brand identity & design system",
        "MVP web or mobile app (4–8 weeks)",
        "Backend + database + auth",
        "Analytics & error monitoring",
        "1 month post-launch support"
      ],
      btnText: "Build My MVP"
    },
    {
      name: "Scale Ready",
      desc: "For startups ready to grow fast after product-market fit.",
      popular: false,
      features: [
        "Everything in MVP Builder",
        "Digital marketing setup",
        "SEO & content strategy",
        "Trademark registration",
        "Dedicated growth advisor"
      ],
      btnText: "Let's Scale"
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Idea Validation",
      desc: "We help you pressure-test your idea — market size, target users, and the core value proposition before building anything."
    },
    {
      num: "02",
      title: "Brand & Identity",
      desc: "Your logo, colours, and brand voice are defined first. Consistency from day one builds trust with early customers."
    },
    {
      num: "03",
      title: "MVP Specification",
      desc: "A tight, one-page spec for your MVP — only the features essential to validate your core hypothesis."
    },
    {
      num: "04",
      title: "Build & Launch",
      desc: "Sprint-based development with weekly demos. Your MVP ships in 4–8 weeks, ready for real users."
    }
  ];

  const whyChooseUs = [
    {
      title: "Speed First",
      desc: "First working product in 4 weeks. Time is your most valuable startup resource.",
      icon: Rocket,
      color: "text-blue-400"
    },
    {
      title: "Partner Mindset",
      desc: "We're invested in your success — not just completing a contract.",
      icon: Check,
      color: "text-emerald-400"
    },
    {
      title: "No Lock-ins",
      desc: "You own everything. Full code ownership from day one.",
      icon: Laptop,
      color: "text-cyan-400"
    },
    {
      title: "Built to Scale",
      desc: "Architecture that grows with you — no expensive rewrites at series A.",
      icon: Cpu,
      color: "text-amber-400"
    }
  ];

  const faqs = [
    {
      q: "We have an idea but no technical co-founder. Can you help?",
      a: "Yes! That is exactly what we specialize in. We act as your fractional CTO and technical engineering arm, guiding your product strategy, designing the user journey, building your MVP, and helping you scale without having to immediately hire an expensive internal tech team."
    },
    {
      q: "How much does an MVP cost?",
      a: "Because we keep MVPs extremely focused on the essential value-proposition, cost is highly optimized. Basic no-code or low-code validation prototypes start low, while full-stack React Native or Next.js custom MVPs are quoted transparently based on the scope spec. Reach out and we will draft a detailed scope breakdown within 24 hours."
    },
    {
      q: "Do you take equity instead of payment?",
      a: "Generally, we work on standard contract payments to preserve our operational velocity, but we do occasionally review selective co-founding or advisory roles with high-equity stakes for exceptional startup founders. Talk to one of our advisors to see if your concept is a match."
    },
    {
      q: "Can you help us pitch to investors?",
      a: "Absolutely. Having a high-performance working prototype or MVP built by KaizenSpark Tech dramatically boosts investor confidence. We also help co-author technical architecture slides, explain scaling roadmaps, and assist in designing sleek product demo materials."
    },
    {
      q: "What happens after the MVP is launched?",
      a: "Once your MVP is live, we actively support you for the first month to handle early user feedback and metrics. After that, you can transition to our low-cost monthly maintenance package, or we can assist you in hiring and training your own in-house engineering team, handing over the fully documented clean codebase."
    }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans selection:bg-blue-500/30 selection:text-blue-200">
      <ScrollProgress />
      <Navbar />

      {/* ── HERO SECTION ── */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-blue-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="container relative z-10 text-center max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles size={12} className="animate-spin-slow" />
            Startup Support
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6"
          >
            From Zero to Launch —
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              We've Got Your Back
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            MVP development, brand identity, product strategy, company registration, and trademark protection — everything a founder needs to go from idea to market without wasting time or money.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <a
              href="#contact-quote"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Talk to a Startup Advisor
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#packages"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-slate-800 hover:border-slate-700 bg-slate-900/50 hover:bg-slate-900 text-slate-300 hover:text-white font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2"
            >
              View Packages
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
                <span className="text-3xl sm:text-4xl font-extrabold text-white bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent mb-1">
                  {stat.number}
                </span>
                <span className="text-xs sm:text-sm font-bold text-blue-400 mb-0.5">
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

      {/* ── WHAT WE OFFER SECTION ── */}
      <section id="what-we-offer" className="py-24 border-t border-slate-900 relative">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 mb-3">
              What We Offer
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Everything a Founder Needs
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              No need to juggle five different agencies. We handle product, brand, and legal foundations under one roof.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buildItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  id={item.id}
                  key={item.id}
                  className="group relative bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full"
                  style={{
                    boxShadow: `inset 0 1px 0 0 rgba(255,255,255,0.02)`
                  }}
                >
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${item.glow}, transparent 60%)`
                    }}
                  />

                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6 shadow-md shadow-black/40`}>
                    <Icon size={20} />
                  </div>

                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h4>
                  
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 flex-grow">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-900 mt-auto">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PACKAGES SECTION ── */}
      <section id="packages" className="py-24 border-t border-slate-900 bg-slate-900/10 relative">
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 mb-3">
              Packages
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Pick Your Starting Point
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              All packages are customisable — contact us for a tailored quote based on your exact needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div 
                key={pkg.name}
                className={`relative bg-slate-900/30 border rounded-3xl p-8 flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1 ${
                  pkg.popular ? "border-blue-500/80 shadow-xl shadow-blue-500/5 ring-1 ring-blue-500/20" : "border-slate-800/80"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-[10px] font-black uppercase tracking-wider text-white shadow-lg shadow-blue-500/25 select-none">
                    Most Popular
                  </div>
                )}
                
                <div>
                  <h4 className="text-xl font-extrabold text-white mb-2">{pkg.name}</h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">{pkg.desc}</p>
                  
                  <div className="border-t border-slate-800/80 my-4" />
                  
                  <ul className="space-y-3.5 mb-8">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-snug">
                        <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href="#contact-quote"
                  className={`w-full py-3 rounded-xl font-bold text-xs tracking-wider uppercase text-center transition-all duration-200 block ${
                    pkg.popular 
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/10 hover:shadow-blue-500/20" 
                      : "bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white"
                  }`}
                >
                  {pkg.btnText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS SECTION ── */}
      <section id="our-process" className="py-24 bg-slate-950 border-t border-slate-900 relative">
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 mb-3">
              Our Process
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Idea to Market in 4 Steps
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              A lean, founder-friendly process that respects your runway and moves fast.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {processSteps.map((step, idx) => (
              <div 
                key={step.num}
                className="relative bg-slate-900/20 border border-slate-800/50 hover:border-slate-800 rounded-2xl p-6 group transition-all duration-300"
              >
                <div className="text-4xl font-black text-slate-800 group-hover:text-blue-500/20 transition-colors duration-300 mb-4 select-none">
                  {step.num}
                </div>
                
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h4>
                
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADVANTAGE SECTION ── */}
      <section id="why-choose-us" className="py-24 border-t border-slate-900 relative bg-slate-950">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 mb-3">
              Our Advantage
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Why Founders Choose KaizenSpark Tech
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-slate-900/35 border border-slate-800/80 rounded-2xl p-6 flex gap-4 hover:border-slate-800 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center flex-shrink-0 ${item.color}`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1.5">{item.title}</h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section id="faq" className="py-24 border-t border-slate-900 relative">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 mb-3">
              FAQ
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Founder Questions
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
                    <HelpCircle size={16} className="text-blue-500" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-slate-500 transition-transform duration-300 flex-shrink-0 ml-4 ${
                      activeFaq === idx ? "rotate-180 text-blue-400" : ""
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

      {/* ── CTA / QUOTE FORM SECTION ── */}
      <section id="contact-quote" className="py-24 border-t border-slate-900 bg-slate-950 relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container max-w-4xl mx-auto px-4 relative z-10">
          <div className="bg-slate-900/40 border border-slate-800/70 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent leading-tight">
                  Ready to Launch Your Startup?
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  Book a free 30-minute founder call — no pitch, just honest advice on your next move.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0" />
                    Clean spec sheet designed in 48 hours
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0" />
                    No complex long-term locked contracts
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0" />
                    Full operational control & code ownership
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500/80 text-white text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500/80 text-white text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Startup Concept details
                  </label>
                  <textarea
                    rows={3}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Tell us about your product concept or registration requirements..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500/80 text-white text-sm outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/40 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10 cursor-pointer"
                >
                  {submitting ? (
                    "Booking Slot..."
                  ) : (
                    <>
                      Book a Founder Call
                      <ChevronRight size={14} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER SUBSCRIBE SECTION ── */}
      <section className="py-16 border-t border-slate-900 bg-slate-950/40 relative">
        <div className="container max-w-xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-2 text-white">Stay in the loop</h3>
          <p className="text-slate-400 text-xs sm:text-sm mb-6">
            Get the latest from KaizenSpark Tech — tips, updates, and exclusive offers.
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

      <Footer />
    </div>
  );
};

export default StartupSupport;
