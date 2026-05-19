import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const companies = [
  { name: 'Infovision', logo: '' },
  { name: 'NexGen IT', logo: '' },
  { name: 'DataBridge', logo: '' },
  { name: 'TechAxis', logo: '' },
  { name: 'CloudEdge', logo: '' },
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
            Trusted by IT companies across India
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Startup and enterprise teams across the country rely on our{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              technology engineering expertise
            </span>
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
              duration: 30,
            }}
          >
            {[...companies, ...companies, ...companies, ...companies, ...companies, ...companies, ...companies, ...companies].map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex items-center justify-center px-10 py-5 rounded-2xl bg-slate-900/40 border border-slate-800/60 hover:border-blue-500/40 hover:bg-slate-800/80 hover:shadow-lg hover:shadow-blue-500/10 transition-all cursor-pointer shrink-0 group"
              >
                <span className="text-slate-400 font-bold text-xl tracking-tight group-hover:text-white transition-colors">
                  {company.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '150+', label: 'Projects Delivered' },
            { value: '50+', label: 'Enterprise Clients' },
            { value: '12+', label: 'Industries Served' },
            { value: '99.9%', label: 'Uptime SLA' },
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
