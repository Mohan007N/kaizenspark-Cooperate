import { useState, useEffect, useRef } from "react";
import {
  Menu, X, ChevronRight, ChevronDown,
  Mail, Phone, Linkedin, Laptop, ShieldCheck, Palette, Zap,
  Briefcase, GraduationCap, Building2, Cpu, Handshake, Users
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

/* ── services mega menu structure ── */
const servicesMegaMenu = {
  webDev: {
    title: "WEB & APP DEVELOPMENT",
    icon: Laptop,
    color: "text-blue-400 border-blue-500/20 bg-blue-500/10",
    items: [
      "Static Websites",
      "Dynamic Websites",
      "Custom Websites",
      "No-code Websites",
      "Progressive Web Apps (PWA)",
      "No-Code Platform Development",
      "Android App Development",
      "iOS App Development",
      "Cross-platform App Development",
      "E-commerce Website",
      "E-commerce Website + App Combo",
      "E-commerce App Only"
    ]
  },
  enterprise: {
    title: "ENTERPRISE SOLUTIONS",
    icon: ShieldCheck,
    color: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10",
    items: [
      "Google Workspace",
      "Zoho Mail",
      "Vulnerability Assessments",
      "Security Audits",
      "Cloudflare Integration",
      "Website/App Maintenance",
      "Performance Optimization",
      "Bug Fixes & Updates",
      "Hosting & Deployment",
      "AI Chatbots",
      "Predictive Analytics",
      "MVP Development",
      "Product/Platform Development"
    ]
  },
  design: {
    title: "DESIGN & MORE",
    icon: Palette,
    color: "text-indigo-400 border-indigo-500/20 bg-indigo-500/10",
    items: [
      "Logo Design",
      "UI/UX Design (Web & App)",
      "Web Design",
      "App Design",
      "Visiting Cards",
      "Banners & Posters",
      "Brochures",
      "Student Discounted Services",
      "Final Year Projects",
      "Portfolio Websites",
      "Company Registration",
      "Trademark Registration"
    ]
  }
};

/* ── products mega menu structure ── */
const productsMegaMenu = {
  business: {
    title: "BUSINESS SOFTWARE",
    icon: Briefcase,
    color: "text-blue-400",
    items: [
      "Billing Software",
      "Custom CRM Solutions",
      "ERP Systems",
      "Inventory Management Tools",
      "Point of Sale Systems",
      "Accounting Software"
    ]
  },
  education: {
    title: "EDUCATION",
    icon: GraduationCap,
    color: "text-cyan-400",
    items: [
      "Learning Management Systems (LMS)",
      "School Management Software",
      "Online Examination Systems",
      "E-Library Solutions",
      "Student Portal Systems"
    ]
  },
  industry: {
    title: "INDUSTRY SOLUTIONS",
    icon: Building2,
    color: "text-indigo-400",
    items: [
      "Healthcare Management",
      "Restaurant Management",
      "Real Estate Solutions",
      "Hotel Management",
      "Retail Management"
    ]
  },
  automation: {
    title: "AI & AUTOMATION",
    icon: Cpu,
    color: "text-purple-400",
    items: [
      "AI Chatbot Solutions",
      "Business Process Automation",
      "Data Analytics Platforms",
      "Document Management",
      "Workflow Automation Tools"
    ]
  }
};

const Navbar = () => {
  const navigate  = useNavigate();
  const location  = useLocation();

  const [mobileOpen,           setMobileOpen]           = useState(false);
  const [servicesOpen,         setServicesOpen]         = useState(false);
  const [productsOpen,         setProductsOpen]         = useState(false);
  const [partnershipOpen,      setPartnershipOpen]      = useState(false);
  const [mobileServicesOpen,   setMobileServicesOpen]   = useState(false);
  const [mobileProductsOpen,   setMobileProductsOpen]   = useState(false);
  const [mobilePartnershipOpen, setMobilePartnershipOpen] = useState(false);
  const [scrolled,             setScrolled]             = useState(false);

  const servicesDropdownRef   = useRef<HTMLDivElement>(null);
  const productsDropdownRef   = useRef<HTMLDivElement>(null);
  const partnershipDropdownRef = useRef<HTMLDivElement>(null);

  /* scroll listener */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close dropdowns on outside click */
  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (productsDropdownRef.current && !productsDropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
      if (partnershipDropdownRef.current && !partnershipDropdownRef.current.contains(e.target as Node)) {
        setPartnershipOpen(false);
      }
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  /* close menus on route change */
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setProductsOpen(false);
    setPartnershipOpen(false);
  }, [location.pathname]);

  const go = (path: string) => {
    setMobileOpen(false);
    setServicesOpen(false);
    setProductsOpen(false);
    setPartnershipOpen(false);
    navigate(path);
  };

  const handleServiceItemClick = (item: string) => {
    setMobileOpen(false);
    setServicesOpen(false);
    
    const isWebAppDev = servicesMegaMenu.webDev.items.includes(item);
    const isEnterprise = servicesMegaMenu.enterprise.items.includes(item);
    const isDesign = servicesMegaMenu.design.items.includes(item);
    const itemLower = item.toLowerCase();

    if (isWebAppDev) {
      navigate("/services/web-app-development");
    } 
    else if (isEnterprise) {
      if (itemLower.includes("chatbot")) {
        navigate("/services/ai-automation");
      } else if (itemLower.includes("analytics")) {
        navigate("/services/ai-automation");
      } else if (itemLower.includes("mvp")) {
        navigate("/services/startup-support");
      } else if (itemLower.includes("product/platform")) {
        navigate("/services/web-app-development");
      } else {
        navigate("/services/enterprise-solutions");
      }
    } 
    else if (isDesign) {
      if (itemLower.includes("registration") || itemLower.includes("trademark")) {
        // Legal startup registrations go to Startup Support
        navigate("/services/startup-support");
      } 
      else if (itemLower.includes("portfolio")) {
        // Portfolio sites go to Web & App Development
        navigate("/services/web-app-development");
      } 
      else if (itemLower.includes("student") || itemLower.includes("final year")) {
        // Student projects and discounts go to the Contact page
        navigate("/contact");
      } 
      else {
        // Creative design services go to UI/UX Design Page
        navigate("/services/ui-ux-design");
      }
    } 
    else {
      navigate("/services");
    }
  };

  const handleProductItemClick = (item: string) => {
    setMobileOpen(false);
    setProductsOpen(false);
    
    const isBusiness = productsMegaMenu.business.items.includes(item);
    const isEducation = productsMegaMenu.education.items.includes(item);
    const isIndustry = productsMegaMenu.industry.items.includes(item);
    const isAutomation = productsMegaMenu.automation.items.includes(item);

    if (isBusiness) {
      navigate("/products/business-software");
    } else if (isEducation) {
      navigate("/products/education");
    } else if (isIndustry) {
      navigate("/products/industry-solutions");
    } else if (isAutomation) {
      navigate("/products/ai-automation");
    } else {
      navigate("/products/business-software");
    }
  };

  const isServicesActive   = location.pathname === "/services" || location.pathname.startsWith("/services");
  const isProductsActive   = location.pathname === "/products" || location.pathname.startsWith("/products");
  const isPartnershipActive = location.pathname === "/partnership" || location.pathname.startsWith("/partnership");

  return (
    <header className="fixed top-4 left-0 w-full z-[99999] px-4 md:px-8 transition-all duration-300">
      <div
        className={`mx-auto max-w-6xl relative transition-all duration-500 border ${
          mobileOpen ? "rounded-2xl bg-slate-950" : "rounded-full"
        } ${
          scrolled
            ? "bg-slate-950 border-blue-500/20 shadow-xl shadow-black/50"
            : "bg-slate-950 border-slate-800/80 shadow-lg shadow-black/30"
        }`}
      >
        {/* Main Bar inside pill */}
        <div className="flex items-center justify-between h-14 px-6">

          {/* Logo */}
          <button onClick={() => go("/")} className="flex items-center gap-2.5 group cursor-pointer">
            <div className="relative w-9 h-9 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
              <img src="/ChatGPT Image May 23, 2026, 07_58_53 PM.png" alt="KaizenSpark Tech"
                className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(26,45,140,0.5)]" />
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-slate-300 font-bold text-[15px] tracking-tight group-hover:text-white transition-colors">
                KaizenSpark
              </span>
              <span className="text-blue-500 font-bold text-[15px] tracking-tight group-hover:text-blue-400 transition-colors">
                Tech
              </span>
            </div>
          </button>

          {/* ── Desktop Nav Links ── */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Home */}
            <NavBtn label="Home"
              active={location.pathname === "/"}
              onClick={() => go("/")} />

            {/* About */}
            <NavBtn label="About"
              active={location.pathname === "/about"}
              onClick={() => go("/about")} />

            {/* Services — mega dropdown */}
            <div ref={servicesDropdownRef}>
              <button
                onClick={() => {
                  setProductsOpen(false);
                  setServicesOpen(!servicesOpen);
                }}
                className={`flex items-center gap-1 text-[13px] px-3.5 py-1.5 rounded-full font-semibold transition-all duration-300 relative group ${
                  isServicesActive || servicesOpen
                    ? "text-blue-400 bg-blue-500/10"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/40"
                }`}
              >
                Services
                <ChevronDown size={13}
                  className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
                {(isServicesActive || servicesOpen) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
                )}
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3.5 z-[999999]">
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.18 }}
                      className="w-[850px] bg-slate-950 border border-slate-800/80 rounded-2xl shadow-2xl shadow-black/90 overflow-hidden"
                    >
                    {/* Header */}
                    <div className="px-6 py-4 border-b border-slate-900 bg-slate-900/10 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-400">
                          IT Solutions & Engineering Services
                        </p>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Enterprise IT solutions, development, design, and strategic marketing
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                        <Zap size={10} className="animate-pulse" /> Custom Integrations
                      </div>
                    </div>

                    {/* Mega Columns Grid */}
                    <div className="grid grid-cols-3 gap-6 p-6">
                      {/* Column 1: Web & App Dev */}
                      <div>
                        <div className="flex items-center gap-2 mb-3.5 pb-2 border-b border-slate-900">
                          <div className="w-6 h-6 rounded bg-blue-500/10 flex items-center justify-center text-blue-400">
                            <Laptop size={12} />
                          </div>
                          <h4 className="text-[11px] font-bold text-blue-400 tracking-wider">
                            {servicesMegaMenu.webDev.title}
                          </h4>
                        </div>
                        <ul className="space-y-1.5">
                          {servicesMegaMenu.webDev.items.map((item) => (
                            <li key={item}>
                              <button
                                onClick={() => handleServiceItemClick(item)}
                                className="text-[11.5px] text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 text-left w-full flex items-center gap-2"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500/40" />
                                {item}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 2: Enterprise Solutions */}
                      <div>
                        <div className="flex items-center gap-2 mb-3.5 pb-2 border-b border-slate-900">
                          <div className="w-6 h-6 rounded bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                            <ShieldCheck size={12} />
                          </div>
                          <h4 className="text-[11px] font-bold text-cyan-400 tracking-wider">
                            {servicesMegaMenu.enterprise.title}
                          </h4>
                        </div>
                        <ul className="space-y-1.5">
                          {servicesMegaMenu.enterprise.items.map((item) => (
                            <li key={item}>
                              <button
                                onClick={() => handleServiceItemClick(item)}
                                className="text-[11.5px] text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 text-left w-full flex items-center gap-2"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/40" />
                                {item}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 3: Design & More */}
                      <div>
                        <div className="flex items-center gap-2 mb-3.5 pb-2 border-b border-slate-900">
                          <div className="w-6 h-6 rounded bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                            <Palette size={12} />
                          </div>
                          <h4 className="text-[11px] font-bold text-indigo-400 tracking-wider">
                            {servicesMegaMenu.design.title}
                          </h4>
                        </div>
                        <ul className="space-y-1.5">
                          {servicesMegaMenu.design.items.map((item) => (
                            <li key={item}>
                              <button
                                onClick={() => handleServiceItemClick(item)}
                                className="text-[11.5px] text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 text-left w-full flex items-center gap-2"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/40" />
                                {item}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Mega Menu Footer */}
                    <div className="px-6 py-3.5 bg-slate-900/30 border-t border-slate-900 flex items-center justify-between">
                      <p className="text-[10px] text-slate-500">
                        Need custom scale implementations or consultation?
                      </p>
                      <button
                        onClick={() => go("/contact")}
                        className="text-[11px] font-bold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                      >
                        Request Consultation <ChevronRight size={12} />
                      </button>
                    </div>
                  </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Products — mega dropdown */}
            <div ref={productsDropdownRef}>
              <button
                onClick={() => {
                  setServicesOpen(false);
                  setProductsOpen(!productsOpen);
                }}
                className={`flex items-center gap-1 text-[13px] px-3.5 py-1.5 rounded-full font-semibold transition-all duration-300 relative group ${
                  isProductsActive || productsOpen
                    ? "text-blue-400 bg-blue-500/10"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/40"
                }`}
              >
                Products
                <ChevronDown size={13}
                  className={`transition-transform duration-300 ${productsOpen ? "rotate-180" : ""}`} />
                {(isProductsActive || productsOpen) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
                )}
              </button>

              <AnimatePresence>
                {productsOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3.5 z-[999999]">
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.18 }}
                      className="w-[920px] bg-slate-950 border border-slate-800/80 rounded-2xl shadow-2xl shadow-black/90 overflow-hidden"
                    >
                    {/* Header */}
                    <div className="px-6 py-4 border-b border-slate-900 bg-slate-900/10 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-400">
                          KaizenSpark Software Products
                        </p>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Ready-to-deploy platforms, industry systems, and workflow automation
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                        <Zap size={10} className="animate-pulse" /> Off-The-Shelf & Custom
                      </div>
                    </div>

                    {/* Mega Columns Grid (4 columns) */}
                    <div className="grid grid-cols-4 gap-5 p-6">
                      {/* Column 1: Business Software */}
                      <div>
                        <div className="flex items-center gap-2 mb-3.5 pb-2 border-b border-slate-900">
                          <div className="w-6 h-6 rounded bg-blue-500/10 flex items-center justify-center text-blue-400">
                            <Briefcase size={12} />
                          </div>
                          <h4 className="text-[10.5px] font-bold text-blue-400 tracking-wider">
                            {productsMegaMenu.business.title}
                          </h4>
                        </div>
                        <ul className="space-y-1.5">
                          {productsMegaMenu.business.items.map((item) => (
                            <li key={item}>
                              <button
                                onClick={() => handleProductItemClick(item)}
                                className="text-[11px] text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 text-left w-full flex items-center gap-2"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500/40" />
                                {item}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 2: Education */}
                      <div>
                        <div className="flex items-center gap-2 mb-3.5 pb-2 border-b border-slate-900">
                          <div className="w-6 h-6 rounded bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                            <GraduationCap size={12} />
                          </div>
                          <h4 className="text-[10.5px] font-bold text-cyan-400 tracking-wider">
                            {productsMegaMenu.education.title}
                          </h4>
                        </div>
                        <ul className="space-y-1.5">
                          {productsMegaMenu.education.items.map((item) => (
                            <li key={item}>
                              <button
                                onClick={() => handleProductItemClick(item)}
                                className="text-[11px] text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 text-left w-full flex items-center gap-2"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/40" />
                                {item}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 3: Industry Solutions */}
                      <div>
                        <div className="flex items-center gap-2 mb-3.5 pb-2 border-b border-slate-900">
                          <div className="w-6 h-6 rounded bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                            <Building2 size={12} />
                          </div>
                          <h4 className="text-[10.5px] font-bold text-indigo-400 tracking-wider">
                            {productsMegaMenu.industry.title}
                          </h4>
                        </div>
                        <ul className="space-y-1.5">
                          {productsMegaMenu.industry.items.map((item) => (
                            <li key={item}>
                              <button
                                onClick={() => handleProductItemClick(item)}
                                className="text-[11px] text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 text-left w-full flex items-center gap-2"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/40" />
                                {item}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 4: AI & Automation */}
                      <div>
                        <div className="flex items-center gap-2 mb-3.5 pb-2 border-b border-slate-900">
                          <div className="w-6 h-6 rounded bg-purple-500/10 flex items-center justify-center text-purple-400">
                            <Cpu size={12} />
                          </div>
                          <h4 className="text-[10.5px] font-bold text-purple-400 tracking-wider">
                            {productsMegaMenu.automation.title}
                          </h4>
                        </div>
                        <ul className="space-y-1.5">
                          {productsMegaMenu.automation.items.map((item) => (
                            <li key={item}>
                              <button
                                onClick={() => handleProductItemClick(item)}
                                className="text-[11px] text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 text-left w-full flex items-center gap-2"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-500/40" />
                                {item}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Mega Menu Footer */}
                    <div className="px-6 py-3.5 bg-slate-900/30 border-t border-slate-900 flex items-center justify-between">
                      <p className="text-[10px] text-slate-500">
                        Need a demo or request customization on any product?
                      </p>
                      <button
                        onClick={() => go("/contact")}
                        className="text-[11px] font-bold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                      >
                        Book a Free Demo <ChevronRight size={12} />
                      </button>
                    </div>
                  </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Partnership — dropdown */}
            <div ref={partnershipDropdownRef}>
              <button
                onClick={() => {
                  setServicesOpen(false);
                  setProductsOpen(false);
                  setPartnershipOpen(!partnershipOpen);
                }}
                className={`flex items-center gap-1 text-[13px] px-3.5 py-1.5 rounded-full font-semibold transition-all duration-300 relative group ${
                  isPartnershipActive || partnershipOpen
                    ? "text-emerald-400 bg-emerald-500/10"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/40"
                }`}
              >
                Partnership
                <ChevronDown size={13}
                  className={`transition-transform duration-300 ${partnershipOpen ? "rotate-180" : ""}`} />
                {(isPartnershipActive || partnershipOpen) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50" />
                )}
              </button>

              <AnimatePresence>
                {partnershipOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3.5 z-[999999]">
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.18 }}
                      className="w-64 bg-slate-950 border border-slate-800/80 rounded-2xl shadow-2xl shadow-black/90 overflow-hidden"
                    >
                      <div className="px-5 py-3.5 border-b border-slate-900 bg-slate-900/10">
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-400">Partner With Us</p>
                        <p className="text-[11px] text-slate-500 mt-0.5">Grow together with KaizenSpark</p>
                      </div>
                      <div className="p-3 space-y-1">
                        <button
                          onClick={() => go("/partnership")}
                          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-emerald-500/10 transition-all group text-left"
                        >
                          <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20">
                            <Handshake size={13} className="text-emerald-400" />
                          </div>
                          <div>
                            <p className="text-[12px] font-semibold text-slate-200 group-hover:text-white">Become a Partner</p>
                            <p className="text-[10px] text-slate-500">Join our partner network</p>
                          </div>
                        </button>
                        <button
                          onClick={() => go("/partnership/refer-client")}
                          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-blue-500/10 transition-all group text-left"
                        >
                          <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20">
                            <Users size={13} className="text-blue-400" />
                          </div>
                          <div>
                            <p className="text-[12px] font-semibold text-slate-200 group-hover:text-white">Refer a Client</p>
                            <p className="text-[10px] text-slate-500">Earn rewards for referrals</p>
                          </div>
                        </button>
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Careers */}
            <NavBtn label="Careers"
              active={location.pathname === "/careers"}
              onClick={() => go("/careers")} />

            {/* Blog */}
            <NavBtn label="Blog"
              active={location.pathname === "/blog"}
              onClick={() => go("/blog")} />

            {/* Contact */}
            <NavBtn label="Contact"
              active={location.pathname === "/contact"}
              onClick={() => go("/contact")} />
          </nav>

          {/* ── Contact Pill CTA (Right) ── */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => go("/contact")}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-1.5 rounded-full text-[13px] font-semibold hover:from-blue-500 hover:to-blue-600 transition-all duration-300 flex items-center gap-1.5 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 cursor-pointer"
            >
              <Mail size={13} />
              Contact Us
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="lg:hidden text-slate-300 p-2 rounded-full hover:bg-slate-900 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className={`transition-transform duration-300 ${mobileOpen ? "rotate-90" : "rotate-0"}`}>
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </div>
          </button>
        </div>

        {/* ── Mobile Nav dropdown body ── */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[600px] opacity-100 px-4 pb-4" : "max-h-0 opacity-0"
        }`}>
          <nav className="bg-slate-950/40 border-t border-slate-900/60 pt-2 space-y-1 overflow-y-auto max-h-[450px]">
            {/* Home, About */}
            {[
              { label: "Home",  path: "/" },
              { label: "About", path: "/about" },
            ].map((l) => (
              <button key={l.path} onClick={() => go(l.path)}
                className={`block w-full text-left px-4 py-2.5 text-xs font-medium rounded-lg transition-all ${
                  location.pathname === l.path
                    ? "text-blue-400 bg-blue-500/10"
                    : "text-slate-400 hover:text-white hover:bg-slate-900/40"
                }`}>
                {l.label}
              </button>
            ))}

            {/* Services Collapsible Mobile Menu */}
            <div className="rounded-lg overflow-hidden">
              <button
                onClick={() => {
                  setMobileProductsOpen(false);
                  setMobileServicesOpen(!mobileServicesOpen);
                }}
                className={`flex items-center justify-between w-full px-4 py-2.5 text-xs font-medium transition-all ${
                  isServicesActive ? "text-blue-400 bg-blue-500/10" : "text-slate-400 hover:text-white hover:bg-slate-900/40"
                }`}
              >
                Services
                <ChevronDown size={14} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="overflow-hidden bg-slate-900/10 px-3 py-2 space-y-3"
                  >
                    <div>
                      <p className="text-[9px] font-bold text-blue-400 px-2 mb-1 tracking-wider">
                        {servicesMegaMenu.webDev.title}
                      </p>
                      <div className="grid grid-cols-2 gap-0.5">
                        {servicesMegaMenu.webDev.items.map((item) => (
                          <button 
                            key={item} 
                            onClick={() => handleServiceItemClick(item)}
                            className="text-[10px] text-slate-400 hover:text-white text-left px-2 py-0.5 truncate"
                          >
                            • {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-[9px] font-bold text-cyan-400 px-2 mb-1 tracking-wider">
                        {servicesMegaMenu.enterprise.title}
                      </p>
                      <div className="grid grid-cols-2 gap-0.5">
                        {servicesMegaMenu.enterprise.items.map((item) => (
                          <button 
                            key={item} 
                            onClick={() => handleServiceItemClick(item)}
                            className="text-[10px] text-slate-400 hover:text-white text-left px-2 py-0.5 truncate"
                          >
                            • {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-[9px] font-bold text-indigo-400 px-2 mb-1 tracking-wider">
                        {servicesMegaMenu.design.title}
                      </p>
                      <div className="grid grid-cols-2 gap-0.5">
                        {servicesMegaMenu.design.items.map((item) => (
                          <button 
                            key={item} 
                            onClick={() => handleServiceItemClick(item)}
                            className="text-[10px] text-slate-400 hover:text-white text-left px-2 py-0.5 truncate"
                          >
                            • {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Products Collapsible Mobile Menu */}
            <div className="rounded-lg overflow-hidden">
              <button
                onClick={() => {
                  setMobileServicesOpen(false);
                  setMobileProductsOpen(!mobileProductsOpen);
                }}
                className={`flex items-center justify-between w-full px-4 py-2.5 text-xs font-medium transition-all ${
                  isProductsActive ? "text-blue-400 bg-blue-500/10" : "text-slate-400 hover:text-white hover:bg-slate-900/40"
                }`}
              >
                Products
                <ChevronDown size={14} className={`transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {mobileProductsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="overflow-hidden bg-slate-900/10 px-3 py-2 space-y-3"
                  >
                    <div>
                      <p className="text-[9px] font-bold text-blue-400 px-2 mb-1 tracking-wider">
                        {productsMegaMenu.business.title}
                      </p>
                      <div className="grid grid-cols-2 gap-0.5">
                        {productsMegaMenu.business.items.map((item) => (
                          <button 
                            key={item} 
                            onClick={() => handleProductItemClick(item)}
                            className="text-[10px] text-slate-400 hover:text-white text-left px-2 py-0.5 truncate"
                          >
                            • {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-[9px] font-bold text-cyan-400 px-2 mb-1 tracking-wider">
                        {productsMegaMenu.education.title}
                      </p>
                      <div className="grid grid-cols-2 gap-0.5">
                        {productsMegaMenu.education.items.map((item) => (
                          <button 
                            key={item} 
                            onClick={() => handleProductItemClick(item)}
                            className="text-[10px] text-slate-400 hover:text-white text-left px-2 py-0.5 truncate"
                          >
                            • {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-[9px] font-bold text-indigo-400 px-2 mb-1 tracking-wider">
                        {productsMegaMenu.industry.title}
                      </p>
                      <div className="grid grid-cols-2 gap-0.5">
                        {productsMegaMenu.industry.items.map((item) => (
                          <button 
                            key={item} 
                            onClick={() => handleProductItemClick(item)}
                            className="text-[10px] text-slate-400 hover:text-white text-left px-2 py-0.5 truncate"
                          >
                            • {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-[9px] font-bold text-purple-400 px-2 mb-1 tracking-wider">
                        {productsMegaMenu.automation.title}
                      </p>
                      <div className="grid grid-cols-2 gap-0.5">
                        {productsMegaMenu.automation.items.map((item) => (
                          <button 
                            key={item} 
                            onClick={() => handleProductItemClick(item)}
                            className="text-[10px] text-slate-400 hover:text-white text-left px-2 py-0.5 truncate"
                          >
                            • {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Partnership, Careers, Contact, Blog */}
            {[
              { label: "Become a Partner", path: "/partnership" },
              { label: "Refer a Client",   path: "/partnership/refer-client" },
              { label: "Careers",          path: "/careers" },
              { label: "Blog",             path: "/blog" },
              { label: "Contact",          path: "/contact" },
            ].map((l) => (
              <button key={l.path} onClick={() => go(l.path)}
                className={`block w-full text-left px-4 py-2.5 text-xs font-medium rounded-lg transition-all ${
                  location.pathname === l.path
                    ? "text-blue-400 bg-blue-500/10"
                    : "text-slate-400 hover:text-white hover:bg-slate-900/40"
                }`}>
                {l.label}
              </button>
            ))}

            {/* Mobile Contact CTA */}
            <div className="pt-2">
              <button onClick={() => go("/contact")}
                className="w-full bg-blue-600 text-white py-2 rounded-full text-xs font-bold hover:bg-blue-700 transition-all flex justify-center items-center gap-1.5">
                <Mail size={13} /> Contact Us
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

/* tiny reusable button with rounded-full style */
const NavBtn = ({
  label, active, onClick,
}: {
  label: string; active: boolean; onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`text-[13px] px-3.5 py-1.5 rounded-full font-semibold transition-all duration-300 relative group ${
      active
        ? "text-blue-400 bg-blue-500/10"
        : "text-slate-400 hover:text-white hover:bg-slate-800/50"
    }`}
  >
    {label}
    {active && (
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
    )}
    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
  </button>
);

export default Navbar;
