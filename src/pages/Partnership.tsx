import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft, Users, Briefcase, Star, Clock,
  DollarSign, HeadphonesIcon, Globe, Zap,
  Send, CheckCircle2, Loader2, AlertCircle, Handshake,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { sendEmail } from "@/utils/sendEmail";

/* ── helpers ── */
const inputCls = (err = false) =>
  `w-full bg-white/[0.04] border ${err ? "border-rose-500/50" : "border-white/[0.08]"} rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10 transition-all`;

const Field = ({
  id, label, error, children,
}: {
  id: string; label: string; error?: string; children: React.ReactNode;
}) => (
  <div>
    <label htmlFor={id} className="block text-[11px] font-bold uppercase tracking-wider text-white/40 mb-1.5">
      {label}
    </label>
    {children}
    {error && <p className="text-[11px] text-rose-400 mt-1">{error}</p>}
  </div>
);

/* ── stats ── */
const stats = [
  { value: "1000+", label: "Active Partners" },
  { value: "50+",   label: "Services Available" },
  { value: "99%",   label: "Partner Satisfaction" },
  { value: "24/7",  label: "Support Available" },
];

/* ── benefits ── */
const benefits = [
  {
    icon: DollarSign,
    title: "High Commission Rates",
    desc: "Earn competitive commissions for every successful referral and project completion",
    color: "from-emerald-500/20 to-green-500/10 border-emerald-500/20 text-emerald-400",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    desc: "Get dedicated partner manager support and 24/7 assistance for your clients",
    color: "from-blue-500/20 to-cyan-500/10 border-blue-500/20 text-blue-400",
  },
  {
    icon: Globe,
    title: "Expand Your Reach",
    desc: "Access to our comprehensive service portfolio to offer more to your clients",
    color: "from-indigo-500/20 to-purple-500/10 border-indigo-500/20 text-indigo-400",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    desc: "Quick project delivery and responsive client communication for better satisfaction",
    color: "from-amber-500/20 to-orange-500/10 border-amber-500/20 text-amber-400",
  },
];

/* ── form ── */
type Status = "idle" | "submitting" | "success" | "error";

const PartnershipForm = () => {
  const [form, setForm] = useState({
    fullName: "", email: "", phone: "",
    businessName: "", website: "", businessType: "", experience: "",
    goals: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  const set = (k: string, v: string) => {
    setForm(p => ({ ...p, [k]: v }));
    if (errors[k]) setErrors(p => ({ ...p, [k]: "" }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.fullName.trim())    e.fullName    = "Required";
    if (!form.email.trim())       e.email       = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.businessName.trim()) e.businessName = "Required";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus("submitting");
    try {
      const result = await sendEmail({
        name: form.fullName,
        email: form.email,
        company: form.businessName,
        service: "Partnership Program Application",
        message: `Phone: ${form.phone}
Website: ${form.website}
Business Type: ${form.businessType}
Experience: ${form.experience}

Goals & Expectations:
${form.goals}`,
      });
      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center gap-4 py-16 text-center"
    >
      <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center">
        <CheckCircle2 className="w-8 h-8 text-emerald-400" />
      </div>
      <h4 className="text-white font-bold text-xl">Application Submitted!</h4>
      <p className="text-slate-400 text-sm max-w-xs">
        Our partnership team will review your application and get back to you within 2 business days.
      </p>
    </motion.div>
  );

  if (status === "error") return (
    <div className="flex flex-col items-center gap-4 py-16 text-center">
      <div className="w-16 h-16 rounded-full bg-red-500/15 flex items-center justify-center">
        <AlertCircle className="w-8 h-8 text-red-400" />
      </div>
      <h4 className="text-white font-bold text-xl">Something went wrong</h4>
      <p className="text-slate-400 text-sm">Try again or email us at <span className="text-blue-400">officials@kaizensparktech.com</span></p>
      <button onClick={() => setStatus("idle")} className="text-blue-400 text-sm font-semibold hover:text-blue-300">Try Again</button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Personal Information */}
      <div>
        <h4 className="text-[11px] font-bold uppercase tracking-[.16em] text-white/40 mb-4 pb-2 border-b border-white/[0.06]">
          Personal Information
        </h4>
        <div className="space-y-4">
          <Field id="pf-name" label="Full Name *" error={errors.fullName}>
            <input id="pf-name" type="text" placeholder="Enter your full name"
              value={form.fullName} onChange={e => set("fullName", e.target.value)}
              className={inputCls(!!errors.fullName)} />
          </Field>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field id="pf-email" label="Email *" error={errors.email}>
              <input id="pf-email" type="email" placeholder="your@email.com"
                value={form.email} onChange={e => set("email", e.target.value)}
                className={inputCls(!!errors.email)} />
            </Field>
            <Field id="pf-phone" label="Phone">
              <input id="pf-phone" type="tel" placeholder="+91 98765 43210"
                value={form.phone} onChange={e => set("phone", e.target.value)}
                className={inputCls()} />
            </Field>
          </div>
        </div>
      </div>

      {/* Business Information */}
      <div>
        <h4 className="text-[11px] font-bold uppercase tracking-[.16em] text-white/40 mb-4 pb-2 border-b border-white/[0.06]">
          Business Information
        </h4>
        <div className="space-y-4">
          <Field id="pf-bname" label="Business Name *" error={errors.businessName}>
            <input id="pf-bname" type="text" placeholder="Your business name"
              value={form.businessName} onChange={e => set("businessName", e.target.value)}
              className={inputCls(!!errors.businessName)} />
          </Field>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field id="pf-website" label="Website">
              <input id="pf-website" type="url" placeholder="https://yourwebsite.com"
                value={form.website} onChange={e => set("website", e.target.value)}
                className={inputCls()} />
            </Field>
            <Field id="pf-btype" label="Business Type">
              <input id="pf-btype" type="text" placeholder="e.g., Consulting, Agency, Freelancer, etc."
                value={form.businessType} onChange={e => set("businessType", e.target.value)}
                className={inputCls()} />
            </Field>
          </div>
          <Field id="pf-exp" label="Years of Experience">
            <input id="pf-exp" type="text" placeholder="e.g., 5 years"
              value={form.experience} onChange={e => set("experience", e.target.value)}
              className={inputCls()} />
          </Field>
        </div>
      </div>

      {/* Additional Information */}
      <div>
        <h4 className="text-[11px] font-bold uppercase tracking-[.16em] text-white/40 mb-4 pb-2 border-b border-white/[0.06]">
          Additional Information
        </h4>
        <Field id="pf-goals" label="Goals & Expectations">
          <textarea id="pf-goals" rows={5}
            placeholder="Tell us about your goals and how you see this partnership helping your business..."
            value={form.goals} onChange={e => set("goals", e.target.value)}
            className={`${inputCls()} resize-none`} />
        </Field>
      </div>

      <button type="submit" disabled={status === "submitting"}
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-emerald-500/20 disabled:opacity-60 disabled:cursor-not-allowed">
        {status === "submitting"
          ? <><Loader2 size={16} className="animate-spin" /> Submitting…</>
          : <><Send size={15} /> Submit Partnership Application</>}
      </button>
    </form>
  );
};

/* ── page ── */
const Partnership = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="relative bg-slate-950 min-h-screen">
      <ScrollProgress />
      <Navbar />

      <main>
        {/* ── HERO ── */}
        <section className="relative overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#071a10] to-slate-950" />
          <motion.div animate={{ scale: [1,1.3,1], opacity:[0.07,0.18,0.07] }} transition={{ duration:12, repeat:Infinity }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.025]" style={{
            backgroundImage:"linear-gradient(rgba(16,185,129,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(16,185,129,.5) 1px,transparent 1px)",
            backgroundSize:"60px 60px",
          }} />

          <div className="container relative z-10">
            {/* Back link */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium mb-8 transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
              Back to Partnership
            </motion.button>

            <div className="max-w-3xl">
              <motion.div initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} transition={{duration:.6}}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-6">
                <Handshake size={13} className="text-emerald-400" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400">Partnership Application</span>
              </motion.div>

              <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.2,duration:.8}}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
                Become a{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Partner
                </span>
              </motion.h1>

              <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.5,duration:.8}}
                className="text-lg text-slate-400 max-w-xl leading-relaxed">
                Join our network of successful partners and grow your business with KaizenSpark. Fill out the application form below to get started.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.7,duration:.8}}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-2xl">
              {stats.map((s) => (
                <div key={s.label} className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-4 text-center">
                  <p className="text-2xl font-black text-emerald-400">{s.value}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── BENEFITS ── */}
        <section className="relative py-20 overflow-hidden border-t border-white/[0.04]">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
          <div className="container relative z-10">
            <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
              className="text-center mb-12">
              <p className="text-[11px] font-bold uppercase tracking-[.16em] text-emerald-400 mb-3">Why Partner With Us?</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                Discover the benefits of joining our partner network
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <motion.div
                    key={b.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`bg-gradient-to-br ${b.color} border rounded-2xl p-6`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center mb-4">
                      <Icon size={20} className="text-current" />
                    </div>
                    <h3 className="text-white font-bold text-sm mb-2">{b.title}</h3>
                    <p className="text-slate-400 text-[12px] leading-relaxed">{b.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── APPLICATION FORM ── */}
        <section className="relative py-20 overflow-hidden border-t border-white/[0.04]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#071a10] to-slate-950" />
          <motion.div animate={{scale:[1,1.2,1],opacity:[0.06,0.14,0.06]}} transition={{duration:12,repeat:Infinity}}
            className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-14 items-start">

              {/* Left — copy */}
              <motion.div initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.7}}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400">Partnership Application</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                  Tell us about yourself{" "}
                  <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                    and your business
                  </span>
                </h2>
                <p className="text-slate-400 leading-relaxed mb-8">
                  Complete the application below and our partnership team will review it and reach out within 2 business days.
                </p>

                {/* CTA boxes */}
                <div className="space-y-4">
                  <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/25 mb-3">Have Questions?</p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      Our partnership team is here to help you understand the benefits and requirements of joining our network.
                    </p>
                    <button onClick={() => navigate("/contact")}
                      className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm transition-all">
                      Contact Us
                    </button>
                  </div>

                  <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/25 mb-2">Refer a Client Instead</p>
                    <p className="text-slate-400 text-sm mb-3">Already have a client in mind? Refer them directly and earn rewards.</p>
                    <button onClick={() => navigate("/partnership/refer-client")}
                      className="text-emerald-400 hover:text-emerald-300 text-sm font-semibold transition-colors flex items-center gap-1">
                      Refer a Client →
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Right — form */}
              <motion.div initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.7,delay:.1}}>
                <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-7">
                  <h3 className="text-white font-black text-lg mb-1">Partnership Application</h3>
                  <p className="text-white/35 text-[13px] mb-6">Free to join · No obligations</p>
                  <PartnershipForm />
                </div>
              </motion.div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Partnership;
