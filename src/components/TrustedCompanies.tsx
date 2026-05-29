import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const companies = [
  {
    name: 'Amazon Web Services',
    subtitle: 'Authorized Partner',
    logo: () => (
      <svg className="w-6 h-6 text-slate-400 group-hover:text-[#FF9900] transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.76 13.06c-1.42.84-3.1 1.27-4.78 1.27-2.15 0-4.14-.71-5.74-2.02-.32-.26-.14-.77.27-.77.16 0 .31.06.44.16 1.34 1.05 3.03 1.63 4.8 1.63 1.48 0 2.94-.4 4.18-1.15.35-.21.78.13.56.5-.07.13-.15.26-.23.38zM12 13.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zm0-4.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
      </svg>
    )
  },
  {
    name: 'Google Cloud',
    subtitle: 'Authorized Partner',
    logo: () => (
      <svg className="w-6 h-6 text-slate-400 group-hover:text-[#4285F4] transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"/>
      </svg>
    )
  },
  {
    name: 'Microsoft Azure',
    subtitle: 'Solutions Partner',
    logo: () => (
      <svg className="w-6 h-6 text-slate-400 group-hover:text-[#0089D6] transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.5h-2v-6h2v6zm0-8h-2V7h2v2.5z"/>
      </svg>
    )
  },
  {
    name: 'Docker',
    subtitle: 'Technology Partner',
    logo: () => (
      <svg className="w-6 h-6 text-slate-400 group-hover:text-[#2496ED] transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.98 8.1c-.24 0-.44.2-.44.44v.88c0 .24.2.44.44.44h.88c.24 0 .44-.2.44-.44v-.88c0-.24-.2-.44-.44-.44h-.88zm-2.2 0c-.24 0-.44.2-.44.44v.88c0 .24.2.44.44.44h.88c.24 0 .44-.2.44-.44v-.88c0-.24-.2-.44-.44-.44h-.88zm-2.2 0c-.24 0-.44.2-.44.44v.88c0 .24.2.44.44.44h.88c.24 0 .44-.2.44-.44v-.88c0-.24-.2-.44-.44-.44h-.88zm-2.2 0c-.24 0-.44.2-.44.44v.88c0 .24.2.44.44.44h.88c.24 0 .44-.2.44-.44v-.88c0-.24-.2-.44-.44-.44h-.88zm8.8-2.2c-.24 0-.44.2-.44.44v.88c0 .24.2.44.44.44h.88c.24 0 .44-.2.44-.44v-.88c0-.24-.2-.44-.44-.44h-.88zm-2.2 0c-.24 0-.44.2-.44.44v.88c0 .24.2.44.44.44h.88c.24 0 .44-.2.44-.44v-.88c0-.24-.2-.44-.44-.44h-.88zm-2.2 0c-.24 0-.44.2-.44.44v.88c0 .24.2.44.44.44h.88c.24 0 .44-.2.44-.44v-.88c0-.24-.2-.44-.44-.44h-.88zm6.6-2.2c-.24 0-.44.2-.44.44v.88c0 .24.2.44.44.44h.88c.24 0 .44-.2.44-.44v-.88c0-.24-.2-.44-.44-.44h-.88zM2 12.3c0 4.1 3 7.5 7.1 8 1 .1 1.9-.3 2.1-1.3.1-.3.1-.6 0-.9-.3-1.6-1.7-2.7-3.3-2.7h-.9V12c0-2.2 1.8-4 4-4h.9c.3 0 .6-.1.8-.3.4-.4.4-1.1 0-1.5s-1.1-.4-1.5 0l-.8.8C7.1 7.2 2 9 2 12.3z"/>
      </svg>
    )
  },
  {
    name: 'Kubernetes',
    subtitle: 'Partner Member',
    logo: () => (
      <svg className="w-6 h-6 text-slate-400 group-hover:text-[#326CE5] transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.01 2.02L2.83 5.37c-.36.13-.6.47-.6.85v7.56c0 3.72 2.05 7.13 5.37 8.91l4.01 2.15c.25.13.55.13.8 0l4.01-2.15c3.32-1.78 5.37-5.19 5.37-8.91V6.22c0-.38-.24-.72-.6-.85l-9.18-3.35c-.25-.09-.55-.09-.8 0zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
      </svg>
    )
  },
  {
    name: 'Vercel',
    subtitle: 'Deployment Partner',
    logo: () => (
      <svg className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors duration-300" viewBox="0 0 512 512" fill="currentColor">
        <path d="M256 48L496 464H16Z"/>
      </svg>
    )
  },
  {
    name: 'GitHub',
    subtitle: 'Integration Partner',
    logo: () => (
      <svg className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.193 22 16.436 22 12.017 22 6.484 17.522 2 12 2z"/>
      </svg>
    )
  }
];

const TrustedCompanies = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('trusted-companies');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="trusted-companies" className="relative py-20 overflow-hidden border-y border-slate-800/50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      
      {/* Animated grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '40px 40px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-slate-500 uppercase tracking-[0.2em] font-bold mb-3">
            Authorised Solutions Partners & Cloud Integrations
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            We partner with leading{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              technology platforms & cloud providers
            </span>{' '}
            to engineer scalable systems
          </h3>
        </motion.div>

        {/* Animated Marquee */}
        <div className="relative flex overflow-hidden w-full mt-12 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <motion.div
            className="flex items-center gap-6 md:gap-8 min-w-max pr-6 md:pr-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 35,
            }}
          >
            {[...companies, ...companies, ...companies, ...companies].map((company, index) => {
              const Logo = company.logo;
              return (
                <div
                  key={`${company.name}-${index}`}
                  className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 hover:border-blue-500/40 hover:bg-slate-800/80 hover:shadow-lg hover:shadow-blue-500/10 transition-all cursor-pointer shrink-0 group"
                >
                  <Logo />
                  <div className="flex flex-col text-left">
                    <span className="text-slate-200 font-bold text-sm tracking-tight group-hover:text-white transition-colors">
                      {company.name}
                    </span>
                    <span className="text-[9px] text-slate-500 font-medium uppercase tracking-wider">
                      {company.subtitle}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-8"
        >
          {[
            { value: '150+', label: 'Projects Delivered' },
            { value: '70+', label: 'Business Clients' },
            { value: '12+', label: 'Industries Served' },
            { value: '99.9%', label: 'Infrastructure Uptime' },
            { value: '24/7', label: 'Technical Support' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 + index * 0.1 }}
              className="text-center group"
            >
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
