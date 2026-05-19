import { useNavigate, useLocation } from "react-router-dom";

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About Us",    href: "/about",    isRoute: true },
      { label: "Our Services",href: "/services", isRoute: true },
      { label: "Our Process", href: "/process",  isRoute: true },
      { label: "Careers",     href: "/careers",  isRoute: true },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Infrastructure & DC",  href: "/services", isRoute: true },
      { label: "Network & Security",   href: "/services", isRoute: true },
      { label: "Cloud & Hybrid IT",    href: "/services", isRoute: true },
      { label: "AI & Automation",      href: "/services", isRoute: true },
      { label: "Managed IT Support",   href: "/services", isRoute: true },
      { label: "IoT & Surveillance",   href: "/services", isRoute: true },
    ],
  },
  {
    title: "Technology",
    links: [
      { label: "React / Next.js",      href: "/services", isRoute: true },
      { label: "Node.js / Python",     href: "/services", isRoute: true },
      { label: "AWS / Azure / GCP",    href: "/services", isRoute: true },
      { label: "PostgreSQL / MongoDB", href: "/services", isRoute: true },
    ],
  },
  {
    title: "Compliance",
    links: [
      { label: "Data Privacy Policy",  href: "/privacy-policy", isRoute: true },
      { label: "ISO 27001 Aligned",    href: "/contact",        isRoute: true },
      { label: "GDPR Compliant",       href: "/contact",        isRoute: true },
      { label: "SOC 2 Practices",      href: "/contact",        isRoute: true },
    ],
  },
];

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (link: { label: string; href: string; isRoute?: boolean }) => {
    if (link.isRoute) {
      if (location.pathname !== link.href) {
        navigate(link.href);
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.open(link.href, "_blank");
    }
  };

  return (
    <footer className="bg-black relative border-t border-white/[0.05] overflow-hidden">
      {/* Links section */}
      <div className="container py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/20">
                <span className="text-white font-black text-sm">K</span>
              </div>
              <span className="text-white font-black text-[14px] tracking-tight">KAIZENSPARK</span>
            </div>
            <p className="text-[12px] text-white/30 leading-relaxed mb-5">
              Enterprise-grade IT and AI engineering services. From strategy through execution.
            </p>
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-bold text-emerald-400/70 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                All Systems Operational
              </span>
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/25 mb-4">
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleLinkClick(link)}
                      className="footer-link text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.05]">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/20 font-medium">
            © 2026 KaizenSpark Tech Pvt Ltd · All rights reserved.
          </p>
          <div className="flex gap-5">
            <button 
              onClick={() => navigate('/privacy-policy')}
              className="footer-link text-[11px]"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => navigate('/terms-of-service')}
              className="footer-link text-[11px]"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => navigate('/cookie-policy')}
              className="footer-link text-[11px]"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
