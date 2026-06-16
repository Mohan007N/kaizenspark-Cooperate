import { useNavigate, useLocation } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube, Twitter, ExternalLink } from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isCareers = pathname === "/careers";

  const handleLinkClick = (href: string) => {
    navigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const solutions = [
    { label: "Software Engineering", href: "/services/web-app-development" },
    { label: "AI Automation", href: "/services/ai-automation" },
    { label: "Cloud & DevOps", href: "/services/enterprise-solutions" },
    { label: "Enterprise Systems", href: "/services/enterprise-solutions" },
    { label: "Product Engineering", href: "/services/startup-support" },
    { label: "UI/UX Systems", href: "/services/ui-ux-design" },
  ];

  const company = [
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/our-work" },
    { label: "Careers", href: "/careers" },
    { label: "Become a Partner", href: "/partnership" },
    { label: "Refer a Client", href: "/partnership/refer-client" },
    { label: "Contact Us", href: "/contact" },
  ];

  const resources = [
    { label: "Case Studies", href: "/our-work" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-of-service" },
    { label: "Refund Policy", href: "/cookie-policy" },
    { label: "Disclaimer", href: "/cookie-policy" },
  ];

  const countries = ["🇮🇳 India", "🇺🇸 USA", "🇬🇧 UK", "🇦🇪 UAE", "🇸🇬 Singapore", "🇨🇦 Canada", "🇦🇺 Australia"];

  const socials = [
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/kaizensparktech" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/kaizenspark_tech.officials/" },
    { icon: Youtube, label: "YouTube", href: "https://youtube.com/@kaizensparktech" },
    { icon: Twitter, label: "X", href: "https://x.com/kaizensparktech" },
  ];

  return (
    <footer className="bg-black relative border-t border-white/[0.06] pt-16 pb-8 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-14">

          {/* Brand Column — spans 2 cols on lg */}
          <div className="lg:col-span-2 flex flex-col pr-0 lg:pr-6">
            <div
              className="flex items-center gap-2.5 mb-5 cursor-pointer w-fit"
              onClick={() => handleLinkClick("/")}
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <img
                  src="/logo.svg"
                  alt="KaizenSpark Tech"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-sm tracking-tight">KaizenSpark</span>
                <span className="text-[9px] text-blue-400 font-bold uppercase tracking-widest leading-none">
                  Tech Pvt. Ltd.
                </span>
              </div>
            </div>

            <p className="text-[12px] text-slate-400 leading-relaxed mb-5">
              KaizenSpark Tech Pvt. Ltd. is a software engineering & AI automation company building scalable digital infrastructure for businesses across India and international markets.
            </p>

            {/* Contact info */}
            <div className="space-y-2.5 text-xs text-slate-400 mb-5">
              <div className="flex items-center gap-2.5">
                <Phone size={13} className="text-blue-500 flex-shrink-0" />
                <a href="tel:+919150684544" className="hover:text-white transition-colors">
                  +91 91506 84544
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={13} className="text-blue-500 flex-shrink-0" />
                <a
                  href={`mailto:${isCareers ? "hr@kaizensparktech.com" : "officials@kaizensparktech.com"}`}
                  className="hover:text-white transition-colors"
                >
                  {isCareers ? "hr@kaizensparktech.com" : "officials@kaizensparktech.com"}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin size={13} className="text-blue-500 flex-shrink-0 mt-0.5" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800 flex items-center justify-center transition-all group"
                  >
                    <Icon size={13} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-4">
              Solutions
            </p>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {solutions.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleLinkClick(item.href)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-4">
              Company
            </p>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {company.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleLinkClick(item.href)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-4">
              Resources
            </p>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {resources.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleLinkClick(item.href)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Countries We Serve */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-4">
              Countries We Serve
            </p>
            <div className="flex flex-col gap-2">
              {countries.map((c) => (
                <span key={c} className="text-xs text-slate-400">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Legal / Registration Info */}
        <div className="border-t border-slate-900 pt-8 mb-6">
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-[11px] text-slate-600">
            <span><span className="text-slate-500">CIN:</span> U72900TN2020PTC135068</span>
            <span><span className="text-slate-500">GST:</span> 33AADCK8234N1ZP</span>
            <span><span className="text-slate-500">Registered:</span> Chennai, Tamil Nadu, India</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500">
            <button onClick={() => handleLinkClick("/privacy-policy")} className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => handleLinkClick("/terms-of-service")} className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </button>
            <button onClick={() => handleLinkClick("/cookie-policy")} className="hover:text-slate-300 transition-colors">
              Refund Policy
            </button>
            <a
              href="https://linkedin.com/company/kaizensparktech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors flex items-center gap-1"
            >
              LinkedIn <ExternalLink size={10} />
            </a>
          </div>
          <p className="text-[11px] text-slate-600">
            © 2026 KaizenSpark Tech Pvt. Ltd. — All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
