import { useState, useEffect, useRef } from "react";
import {
  Menu, X, ChevronRight, ChevronDown,
  Mail, Phone, Linkedin,
  Server, Network, Cloud, Video, Eye, Bot, Shield, Settings,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

/* ── service dropdown items ── */
const serviceItems = [
  { icon: Server,   label: "Infrastructure & Data Center", desc: "Server, storage, networking & facility ops", path: "/services#infrastructure" },
  { icon: Network,  label: "Network & Security",           desc: "Perimeter defense, segmentation & compliance", path: "/services#network" },
  { icon: Cloud,    label: "Cloud & Hybrid IT",            desc: "Migration, hybrid architecture & backup", path: "/services#cloud" },
  { icon: Video,    label: "Collaboration & AV",           desc: "Video conferencing & digital signage", path: "/services#collaboration" },
  { icon: Eye,      label: "IoT & Surveillance",           desc: "Smart surveillance & access systems", path: "/services#iot" },
  { icon: Bot,      label: "AI & Automation",              desc: "Intelligent workflows & predictive analytics", path: "/services#ai" },
  { icon: Shield,   label: "Managed IT Support",           desc: "PMS, FMS & SLA-driven incident response", path: "/services#managed" },
  { icon: Settings, label: "Custom ERP / CRM",             desc: "Enterprise-grade operational platforms", path: "/services#erp" },
];

/* ── main nav links ── */
const navLinks = [
  { label: "Home",    href: "/",         exact: true  },
  { label: "About",   href: "/about",    exact: false },
  { label: "Process", href: "/process",  exact: false },
  { label: "Careers", href: "/careers",  exact: false },
  { label: "Contact", href: "/contact",  exact: false },
];

const Navbar = () => {
  const navigate  = useNavigate();
  const location  = useLocation();

  const [mobileOpen,         setMobileOpen]         = useState(false);
  const [servicesOpen,       setServicesOpen]       = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled,           setScrolled]           = useState(false);
  const [scrollProgress,     setScrollProgress]     = useState(0);

  const dropdownRef = useRef<HTMLDivElement>(null);

  /* scroll listener */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (y / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close dropdown on outside click */
  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
        setServicesOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  /* close menus on route change */
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const go = (path: string) => {
    setMobileOpen(false);
    setServicesOpen(false);
    navigate(path);
  };

  const isServicesActive = location.pathname === "/services" || location.pathname.startsWith("/services");

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-background/98 backdrop-blur-2xl shadow-xl shadow-black/5 border-b border-blue-500/10"
          : "bg-background/70 backdrop-blur-lg"
      }`}
    >
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 shadow-lg shadow-blue-500/50 transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Top utility bar */}
      <div className="hidden lg:block border-b border-border/50">
        <div className="container flex items-center justify-end h-8 gap-6">
          <a href="mailto:hr@kaizensparktech.com"
            className="flex items-center gap-1.5 text-[11px] text-muted-foreground hover:text-foreground transition-colors">
            <Mail size={11} /> hr@kaizensparktech.com
          </a>
          <a href="tel:+919150684544"
            className="flex items-center gap-1.5 text-[11px] text-muted-foreground hover:text-foreground transition-colors">
            <Phone size={11} /> +91 91506 84544
          </a>
          <span className="text-[11px] text-border">|</span>
          <a href="https://www.linkedin.com/company/kaizensparktech/"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[11px] text-muted-foreground hover:text-blue-500 transition-colors">
            <Linkedin size={11} /> Follow us
          </a>
          <span className="text-[11px] text-muted-foreground">Chennai, India</span>
        </div>
      </div>

      {/* Main bar */}
      <div className="container flex items-center justify-between h-16">

        {/* Logo */}
        <button onClick={() => go("/")} className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-10 h-10 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
            <img src="/logo.svg" alt="KaizenSpark Tech"
              className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(37,99,235,0.6)] group-hover:drop-shadow-[0_0_25px_rgba(37,99,235,0.8)] transition-all" />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-slate-300 font-bold text-[17px] tracking-tight group-hover:text-white transition-colors">
              KaizenSpark
            </span>
            <span className="text-blue-500 font-bold text-[17px] tracking-tight group-hover:text-blue-400 transition-colors">
              Tech
            </span>
          </div>
        </button>

        {/* ── Desktop nav ── */}
        <nav className="hidden lg:flex items-center gap-0.5">

          {/* Home */}
          <NavBtn label="Home"
            active={location.pathname === "/"}
            onClick={() => go("/")} />

          {/* About */}
          <NavBtn label="About"
            active={location.pathname === "/about"}
            onClick={() => go("/about")} />

          {/* Services — mega dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`flex items-center gap-1 text-[13px] px-3.5 py-2 rounded-lg font-semibold transition-all duration-300 relative group ${
                isServicesActive || servicesOpen
                  ? "text-blue-500 bg-blue-500/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-slate-800/50"
              }`}
            >
              Services
              <ChevronDown size={13}
                className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
              {(isServicesActive || servicesOpen) && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
              )}
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.16 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[700px] bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
                >
                  {/* Header */}
                  <div className="px-5 pt-4 pb-3 border-b border-slate-800/80">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-400">
                      IT Solutions & Services
                    </p>
                    <p className="text-[12px] text-slate-500 mt-0.5">
                      Enterprise IT integrator since 2011 — design, deploy, operate
                    </p>
                  </div>

                  {/* Grid */}
                  <div className="grid grid-cols-2 gap-px p-2">
                    {serviceItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.label}
                          onClick={() => go(item.path)}
                          className="flex items-start gap-3 p-3.5 rounded-xl hover:bg-blue-500/8 border border-transparent hover:border-blue-500/15 transition-all duration-200 text-left group/item"
                        >
                          <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover/item:bg-blue-500/20 group-hover/item:border-blue-500/40 transition-all">
                            <Icon size={16} className="text-blue-400 group-hover/item:text-blue-300 transition-colors" />
                          </div>
                          <div>
                            <p className="text-[13px] font-semibold text-slate-200 group-hover/item:text-white transition-colors leading-snug">
                              {item.label}
                            </p>
                            <p className="text-[11px] text-slate-500 group-hover/item:text-slate-400 transition-colors mt-0.5 leading-snug">
                              {item.desc}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Footer */}
                  <div className="px-4 py-3 border-t border-slate-800/80 flex items-center justify-between">
                    <p className="text-[11px] text-slate-500">
                      Need SLA-driven managed services?
                    </p>
                    <button
                      onClick={() => go("/contact")}
                      className="text-[11px] font-bold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                    >
                      Request Consultation <ChevronRight size={12} />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Process */}
          <NavBtn label="Process"
            active={location.pathname === "/process"}
            onClick={() => go("/process")} />

          {/* Careers */}
          <NavBtn label="Careers"
            active={location.pathname === "/careers"}
            onClick={() => go("/careers")} />

          {/* Contact */}
          <NavBtn label="Contact"
            active={location.pathname === "/contact"}
            onClick={() => go("/contact")} />

          {/* CTA */}
          <button
            onClick={() => go("/contact")}
            className="ml-3 relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-lg text-[13px] font-bold hover:from-blue-500 hover:to-blue-600 transition-all duration-300 flex items-center gap-1.5 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 group overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <span className="relative">Get a Quote</span>
            <ChevronRight size={14} className="relative group-hover:translate-x-0.5 transition-transform" />
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground p-2 rounded-lg hover:bg-slate-800 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className={`transition-transform duration-300 ${mobileOpen ? "rotate-90" : "rotate-0"}`}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </div>
        </button>
      </div>

      {/* ── Mobile nav ── */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        mobileOpen ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0"
      }`}>
        <nav className="bg-background shadow-lg border-t border-border pb-4">

          {/* Home, About */}
          {[
            { label: "Home",  path: "/" },
            { label: "About", path: "/about" },
          ].map((l) => (
            <button key={l.path} onClick={() => go(l.path)}
              className={`block w-full text-left px-6 py-3.5 text-sm font-medium transition-all border-b border-border/50 ${
                location.pathname === l.path
                  ? "text-blue-500 bg-blue-500/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-slate-800/40"
              }`}>
              {l.label}
            </button>
          ))}

          {/* Services accordion */}
          <div className="border-b border-border/50">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`flex items-center justify-between w-full px-6 py-3.5 text-sm font-medium transition-all ${
                isServicesActive ? "text-blue-500 bg-blue-500/10" : "text-muted-foreground hover:text-foreground hover:bg-slate-800/40"
              }`}
            >
              Services
              <ChevronDown size={15} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {mobileServicesOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  className="overflow-hidden bg-slate-900/40"
                >
                  {serviceItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button key={item.label} onClick={() => go(item.path)}
                        className="flex items-center gap-3 w-full text-left px-8 py-3 text-sm text-slate-400 hover:text-white hover:bg-slate-800/40 transition-all">
                        <Icon size={14} className="text-blue-400 shrink-0" />
                        {item.label}
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Process, Careers, Contact */}
          {[
            { label: "Process", path: "/process" },
            { label: "Careers", path: "/careers" },
            { label: "Contact", path: "/contact" },
          ].map((l) => (
            <button key={l.path} onClick={() => go(l.path)}
              className={`block w-full text-left px-6 py-3.5 text-sm font-medium transition-all border-b border-border/50 last:border-0 ${
                location.pathname === l.path
                  ? "text-blue-500 bg-blue-500/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-slate-800/40"
              }`}>
              {l.label}
            </button>
          ))}

          {/* Mobile CTA */}
          <div className="px-6 pt-4">
            <button onClick={() => go("/contact")}
              className="w-full bg-blue-600 text-white px-5 py-3.5 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20 flex justify-center items-center gap-2">
              Get a Quote <ChevronRight size={16} />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

/* tiny reusable button */
const NavBtn = ({
  label, active, onClick,
}: {
  label: string; active: boolean; onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`text-[13px] px-3.5 py-2 rounded-lg font-semibold transition-all duration-300 relative group ${
      active
        ? "text-blue-500 bg-blue-500/10"
        : "text-muted-foreground hover:text-foreground hover:bg-slate-800/50"
    }`}
  >
    {label}
    {active && (
      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
    )}
    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
  </button>
);

export default Navbar;
