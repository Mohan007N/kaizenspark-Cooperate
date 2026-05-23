import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft, DollarSign, Network, Gift, Send,
  CheckCircle2, Loader2, AlertCircle, Handshake,
  User, Phone, Mail, Building2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { sendEmail } from "@/utils/sendEmail";

/* ── helpers ── */
const inputCls = (err = false) =>
  `w-full bg-[#0d1526] border ${err ? "border-rose-500/50" : "border-white/[0.08]"} rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10 transition-all`;

const selectCls = (err = false) =>
  `w-full bg-[#0d1526] border ${err ? "border-rose-500/50" : "border-white/[0.08]"} rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10 transition-all appearance-none cursor-pointer`;

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

/* ── benefit cards ── */
const rewards = [
  {
    icon: DollarSign,
    title: "Earn Commission",
    desc: "Get competitive commission for every successful referral",
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: Network,
    title: "Build Network",
    desc: "Expand your professional network through partnerships",
    color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: Gift,
    title: "Bonus Rewards",
    desc: "Unlock special bonuses for multiple successful referrals",
    color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
];

const platforms = ["LinkedIn", "WhatsApp", "Direct Referral", "Email", "Social Media", "Other"];
const services = [
  "Web & App Development",
  "UI/UX Design",
  "Digital Marketing",
  "Enterprise Solutions",
  "AI & Automation",
  "Startup Support",
  "Business Software",
  "Not Sure",
];

type Status = "idle" | "submitting" | "success" | "error";

const ReferralForm = () => {
  const [form, setForm] = useState({
    clientName: "", clientPhone: "", clientEmail: "", clientCompany: "",
    platform: "", referrerName: "", service: "", notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  const set = (k: string, v: string) => {
    setForm(p => ({ ...p, [k]: v }));
    if (errors[k]) setErrors(p => ({ ...p, [k]: "" }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.clientName.trim())  e.clientName  = "Required";
    if (!form.clientEmail.trim()) e.clientEmail = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.clientEmail)) e.clientEmail = "Invalid email";
    if (!form.referrerName.trim()) e.referrerName = "Required";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus("submitting");
    try {
      const result = await sendEmail({
        name: form.referrerName,
        email: form.clientEmail,
        company: form.clientCompany,
        service: "Client Referral Program",
        message: `Referrer Name: ${form.referrerName}
Client Name: ${form.clientName}
Client Phone: ${form.clientPhone}
Client Email: ${form.clientEmail}
Referral Platform: ${form.platform}
Service of Interest: ${form.service}

Additional Notes:
${form.notes}`,
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
      <h4 className="text-white font-bold text-xl">Referral Submitted!</h4>
      <p className="text-slate-400 text-sm max-w-xs">
        Our team will reach out to your client within 24 hours. Thank you for the referral!
      </p>
    </motion.div>
  );

  if (status === "error") return (
    <div className="flex flex-col items-center gap-4 py-16 text-center">
      <div className="w-16 h-16 rounded-full bg-red-500/15 flex items-center justify-center">
        <AlertCircle className="w-8 h-8 text-red-400" />
      </div>
      <h4 className="text-white font-bold text-xl">Something went wrong</h4>
      <p className="text-slate-400 text-sm">Contact us at <span className="text-blue-400">officials@kaizensparktech.com</span></p>
      <button onClick={() => setStatus("idle")} className="text-blue-400 text-sm font-semibold hover:text-blue-300">Try Again</button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Client Information */}
      <div>
        <h4 className="text-[11px] font-bold uppercase tracking-[.16em] text-white/40 mb-4 pb-2 border-b border-white/[0.06]">
          Client Information
        </h4>
        <div className="space-y-4">
          <Field id="rf-cname" label="Client Full Name *" error={errors.clientName}>
            <div className="relative">
              <User size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" />
              <input id="rf-cname" type="text" placeholder="Enter client's full name"
                value={form.clientName} onChange={e => set("clientName", e.target.value)}
                className={`${inputCls(!!errors.clientName)} pl-10`} />
            </div>
          </Field>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field id="rf-cphone" label="Client Phone">
              <div className="relative">
                <Phone size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" />
                <input id="rf-cphone" type="tel" placeholder="+91 98765 43210"
                  value={form.clientPhone} onChange={e => set("clientPhone", e.target.value)}
                  className={`${inputCls()} pl-10`} />
              </div>
            </Field>
            <Field id="rf-cemail" label="Client Email *" error={errors.clientEmail}>
              <div className="relative">
                <Mail size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" />
                <input id="rf-cemail" type="email" placeholder="client@example.com"
                  value={form.clientEmail} onChange={e => set("clientEmail", e.target.value)}
                  className={`${inputCls(!!errors.clientEmail)} pl-10`} />
              </div>
            </Field>
          </div>
          <Field id="rf-cco" label="Company / Business Name">
            <div className="relative">
              <Building2 size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" />
              <input id="rf-cco" type="text" placeholder="Company/Business Name"
                value={form.clientCompany} onChange={e => set("clientCompany", e.target.value)}
                className={`${inputCls()} pl-10`} />
            </div>
          </Field>
        </div>
      </div>

      {/* Referral Information */}
      <div>
        <h4 className="text-[11px] font-bold uppercase tracking-[.16em] text-white/40 mb-4 pb-2 border-b border-white/[0.06]">
          Referral Information
        </h4>
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field id="rf-platform" label="Referral Platform">
              <div className="relative">
                <select id="rf-platform" value={form.platform} onChange={e => set("platform", e.target.value)}
                  className={selectCls()}>
                  <option value="" disabled style={{ background: "#0d1526", color: "#94a3b8" }}>Select platform</option>
                  {platforms.map(p => <option key={p} value={p} style={{ background: "#0d1526", color: "#e2e8f0" }}>{p}</option>)}
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/30" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
              </div>
            </Field>
            <Field id="rf-rname" label="Your Name *" error={errors.referrerName}>
              <input id="rf-rname" type="text" placeholder="Your name"
                value={form.referrerName} onChange={e => set("referrerName", e.target.value)}
                className={inputCls(!!errors.referrerName)} />
            </Field>
          </div>
          <Field id="rf-service" label="Service Interested In">
              <div className="relative">
                <select id="rf-service" value={form.service} onChange={e => set("service", e.target.value)}
                  className={selectCls()}>
                  <option value="" disabled style={{ background: "#0d1526", color: "#94a3b8" }}>Select service</option>
                  {services.map(s => <option key={s} value={s} style={{ background: "#0d1526", color: "#e2e8f0" }}>{s}</option>)}
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/30" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
              </div>
            </Field>
        </div>
      </div>

      {/* Additional Info */}
      <div>
        <h4 className="text-[11px] font-bold uppercase tracking-[.16em] text-white/40 mb-4 pb-2 border-b border-white/[0.06]">
          Additional Information
        </h4>
        <Field id="rf-notes" label="Additional Notes">
          <textarea id="rf-notes" rows={4}
            placeholder="Any additional details about the client's requirements..."
            value={form.notes} onChange={e => set("notes", e.target.value)}
            className={`${inputCls()} resize-none`} />
        </Field>
      </div>

      <button type="submit" disabled={status === "submitting"}
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-blue-500/20 disabled:opacity-60 disabled:cursor-not-allowed">
        {status === "submitting"
          ? <><Loader2 size={16} className="animate-spin" /> Submitting…</>
          : <><Send size={15} /> Submit Referral</>}
      </button>
    </form>
  );
};

/* ── page ── */
const ReferClient = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="relative bg-slate-950 min-h-screen">
      <ScrollProgress />
      <Navbar />

      <main>
        {/* ── HERO ── */}
        <section className="relative overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#07112a] to-slate-950" />
          <motion.div animate={{ scale: [1,1.3,1], opacity:[0.07,0.18,0.07] }} transition={{ duration:12, repeat:Infinity }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.025]" style={{
            backgroundImage:"linear-gradient(rgba(59,130,246,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,.5) 1px,transparent 1px)",
            backgroundSize:"60px 60px",
          }} />

          <div className="container relative z-10">
            {/* Back link */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => navigate("/partnership")}
              className="flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium mb-8 transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
              Back to Partnership
            </motion.button>

            <div className="max-w-3xl">
              <motion.div initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} transition={{duration:.6}}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
                <Handshake size={13} className="text-blue-400" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-blue-400">Partner Referral</span>
              </motion.div>

              <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.2,duration:.8}}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
                Refer a{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Client
                </span>
              </motion.h1>

              <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.5,duration:.8}}
                className="text-lg text-slate-400 max-w-xl leading-relaxed">
                Help your clients grow their business while earning rewards. Fill out the form below to refer a client to KaizenSpark.
              </motion.p>
            </div>

            {/* Reward cards */}
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.7,duration:.8}}
              className="grid sm:grid-cols-3 gap-4 mt-12 max-w-2xl">
              {rewards.map((r) => {
                const Icon = r.icon;
                return (
                  <div key={r.title} className={`border rounded-2xl p-5 ${r.color}`}>
                    <Icon size={20} className="mb-3" />
                    <p className="text-white font-bold text-sm mb-1">{r.title}</p>
                    <p className="text-slate-400 text-[11px] leading-relaxed">{r.desc}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ── FORM SECTION ── */}
        <section className="relative py-20 overflow-hidden border-t border-white/[0.04]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#07112a] to-slate-950" />
          <motion.div animate={{scale:[1,1.2,1],opacity:[0.06,0.14,0.06]}} transition={{duration:12,repeat:Infinity}}
            className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-14 items-start">

              {/* Left — copy */}
              <motion.div initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.7}}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-blue-400">Client Referral Form</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                  Provide your client's details and{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    we'll take care of the rest
                  </span>
                </h2>
                <p className="text-slate-400 leading-relaxed mb-8">
                  We'll contact your referred client within 24 hours and keep you updated throughout the process.
                </p>

                {/* Help box */}
                <div className="space-y-4">
                  <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/25 mb-3">Need Help?</p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      Have questions about the referral process? Our team is here to help you every step of the way.
                    </p>
                    <button onClick={() => navigate("/contact")}
                      className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-sm transition-all">
                      Contact Support
                    </button>
                  </div>

                  <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/25 mb-2">Partnership Details</p>
                    <p className="text-slate-400 text-sm mb-3">Want to become an official partner? View our full partnership program.</p>
                    <button onClick={() => navigate("/partnership")}
                      className="text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors flex items-center gap-1">
                      Become a Partner →
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Right — form */}
              <motion.div initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.7,delay:.1}}>
                <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-7">
                  <h3 className="text-white font-black text-lg mb-1">Client Referral Form</h3>
                  <p className="text-white/35 text-[13px] mb-6">Quick & easy · Earn rewards</p>
                  <ReferralForm />
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

export default ReferClient;
