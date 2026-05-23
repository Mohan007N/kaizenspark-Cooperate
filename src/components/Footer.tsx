import { useNavigate, useLocation } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isCareers = pathname === "/careers";

  const handleLinkClick = (href: string) => {
    navigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black relative border-t border-white/[0.05] pt-16 pb-8 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-2 flex flex-col pr-0 md:pr-8">
            <div className="flex items-center gap-2.5 mb-5 cursor-pointer" onClick={() => handleLinkClick("/")}>
              <div className="w-8 h-8 flex items-center justify-center">
                <img src="/logo-mark.svg" alt="KaizenSpark Tech" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-sm tracking-tight">KaizenSpark</span>
                <span className="text-[9px] text-blue-400 font-bold uppercase tracking-widest leading-none">Tech</span>
              </div>
            </div>
            
            <p className="text-[12px] text-slate-400 leading-relaxed mb-6">
              Chennai's premier digital agency. We help startups and enterprises build, launch, and scale exceptional digital products.
            </p>

            <div className="space-y-2.5 text-xs text-slate-400">
              {isCareers ? (
              <>
                <div className="flex items-center gap-2.5">
                  <Phone size={14} className="text-blue-500 flex-shrink-0" />
                  <a href="tel:+919150684544" className="hover:text-white transition-colors">+91 91506 84544</a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail size={14} className="text-blue-500 flex-shrink-0" />
                  <a href="mailto:hr@kaizensparktech.com" className="hover:text-white transition-colors">hr@kaizensparktech.com</a>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin size={14} className="text-blue-500 flex-shrink-0" />
                  <span>Chennai, Tamil Nadu, India</span>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2.5">
                  <Phone size={14} className="text-blue-500 flex-shrink-0" />
                  <a href="tel:+919150684544" className="hover:text-white transition-colors">+91 91506 84544</a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail size={14} className="text-blue-500 flex-shrink-0" />
                  <a href="mailto:officials@kaizensparktech.com" className="hover:text-white transition-colors">officials@kaizensparktech.com</a>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin size={14} className="text-blue-500 flex-shrink-0" />
                  <span>Chennai, Tamil Nadu, India</span>
                </div>
              </>
            )}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-4">
              Services
            </p>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={() => handleLinkClick("/services/web-app-development")} className="hover:text-white transition-colors text-left">
                  Web & App Development
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("/services/ui-ux-design")} className="hover:text-white transition-colors text-left">
                  UI/UX Design
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("/services")} className="hover:text-white transition-colors text-left">
                  Digital Marketing
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("/services/enterprise-solutions")} className="hover:text-white transition-colors text-left">
                  Enterprise Solutions
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("/services/ai-automation")} className="hover:text-white transition-colors text-left">
                  AI & Automation
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("/services/startup-support")} className="hover:text-white transition-colors text-left">
                  Startup Support
                </button>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-4">
              Company
            </p>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={() => handleLinkClick("/about")} className="hover:text-white transition-colors text-left">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("/careers")} className="hover:text-white transition-colors text-left">
                  Careers
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("/services")} className="hover:text-white transition-colors text-left">
                  SEO
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("/partnership")} className="hover:text-white transition-colors text-left">
                  Become a Partner
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("/partnership/refer-client")} className="hover:text-white transition-colors text-left">
                  Refer a Client
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("/contact")} className="hover:text-white transition-colors text-left">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Get Started Column */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-4">
              Get Started
            </p>
            <p className="text-[12px] text-slate-400 leading-relaxed mb-4">
              Ready to build something great? Let's talk about your project.
            </p>
            <div className="flex flex-col gap-2.5">
              <button
                onClick={() => handleLinkClick("/contact")}
                className="w-full py-2 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-500 hover:to-indigo-400 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-blue-500/10 cursor-pointer"
              >
                Contact Us
                <ArrowRight size={12} />
              </button>
              <button
                onClick={() => handleLinkClick("/careers")}
                className="w-full py-2 px-4 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-900/40 hover:bg-slate-900 text-slate-300 hover:text-white font-bold text-xs transition-all cursor-pointer"
              >
                We're Hiring
              </button>
            </div>
          </div>

        </div>

        {/* Separator / Legal links */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-xs text-slate-500">
            <button onClick={() => handleLinkClick("/privacy-policy")} className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => handleLinkClick("/terms-of-service")} className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </button>
            <button onClick={() => handleLinkClick("/cookie-policy")} className="hover:text-slate-300 transition-colors">
              Refund Policy
            </button>
            <button onClick={() => handleLinkClick("/cookie-policy")} className="hover:text-slate-300 transition-colors">
              Cancellation Policy
            </button>
            <button onClick={() => handleLinkClick("/cookie-policy")} className="hover:text-slate-300 transition-colors">
              Disclaimer
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-slate-900/60 mt-6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-[11px] text-slate-500">
            Copyright © 2026 KaizenSpark Tech Pvt. Ltd. — All Rights Reserved
          </p>
          <p className="text-[11px] text-slate-500 flex items-center justify-center gap-1">
            Made with <span className="text-rose-500 animate-pulse">♥</span> in Chennai, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
