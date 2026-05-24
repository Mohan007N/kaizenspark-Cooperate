import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail, Phone, MapPin, Send, Linkedin, Twitter, Youtube, Instagram,
  Facebook, CheckCircle2, Loader2, AlertCircle, MessageSquare,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";
import { sendEmail } from "@/utils/sendEmail";

/* ─────────────────────────────────── types */
type FormStatus = "idle" | "submitting" | "success" | "error";

/* ─────────────────────────────────── offices */
const offices = [
  { city: "Chennai", address: "Tamil Nadu, India", primary: true },
  { city: "Chidambaram", address: "Tamil Nadu, India", primary: false },
];

const socials = [
  { icon: Linkedin,  label: "LinkedIn",  href: "https://www.linkedin.com/company/kaizensparktech/", color: "hover:text-blue-500 hover:border-blue-500/40" },
  { icon: Twitter,   label: "Twitter",   href: "#",  color: "hover:text-sky-400 hover:border-sky-400/40" },
  { icon: Youtube,   label: "YouTube",   href: "#",  color: "hover:text-red-500 hover:border-red-500/40" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/kaizenspark_tech.officials/",  color: "hover:text-pink-500 hover:border-pink-500/40" },
  { icon: Facebook,  label: "Facebook",  href: "#",  color: "hover:text-blue-600 hover:border-blue-600/40" },
];

/* ─────────────────────────────────── quick enquiry form (top section) */
const QuickForm = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", organization: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Required";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus("submitting");
    try {
      const result = await sendEmail({
        name: `${form.firstName} ${form.lastName}`.trim(),
        company: form.organization,
        email: form.email,
        message: form.message,
      });
      if (result.success) {
        setStatus("success");
        setForm({ firstName: "", lastName: "", email: "", organization: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else { setStatus("error"); setTimeout(() => setStatus("idle"), 5000); }
    } catch { setStatus("error"); setTimeout(() => setStatus("idle"), 5000); }
  };

  const set = (f: string, v: string) => {
    setForm(p => ({ ...p, [f]: v }));
    if (errors[f]) setErrors(p => ({ ...p, [f]: "" }));
  };

  if (status === "success") return (
    <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
      <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center">
        <CheckCircle2 className="w-8 h-8 text-emerald-400" />
      </div>
      <h4 className="text-white font-bold text-xl">Message Sent!</h4>
      <p className="text-slate-400 text-sm max-w-xs">Our experts will get back to you within 2 business hours.</p>
    </div>
  );

  if (status === "error") return (
    <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
      <div className="w-16 h-16 rounded-full bg-red-500/15 flex items-center justify-center">
        <AlertCircle className="w-8 h-8 text-red-400" />
      </div>
      <h4 className="text-white font-bold text-xl">Something went wrong</h4>
      <p className="text-slate-400 text-sm max-w-xs">Try again or email us at <span className="text-blue-400">officials@kaizensparktech.com</span></p>
      <button onClick={() => setStatus("idle")} className="text-blue-400 text-sm font-semibold hover:text-blue-300">Try Again</button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Row 1 — first / last */}
      <div className="grid sm:grid-cols-2 gap-4">
        <Field id="qf-fn" label="First Name *" error={errors.firstName}>
          <input id="qf-fn" type="text" placeholder="First Name" value={form.firstName}
            onChange={e => set("firstName", e.target.value)}
            className={inputCls(!!errors.firstName)} />
        </Field>
        <Field id="qf-ln" label="Last Name" error="">
          <input id="qf-ln" type="text" placeholder="Last Name" value={form.lastName}
            onChange={e => set("lastName", e.target.value)} className={inputCls(false)} />
        </Field>
      </div>
      {/* Row 2 — email / org */}
      <div className="grid sm:grid-cols-2 gap-4">
        <Field id="qf-em" label="Email ID *" error={errors.email}>
          <input id="qf-em" type="email" placeholder="Email ID" value={form.email}
            onChange={e => set("email", e.target.value)}
            className={inputCls(!!errors.email)} />
        </Field>
        <Field id="qf-org" label="Organization" error="">
          <input id="qf-org" type="text" placeholder="Organization" value={form.organization}
            onChange={e => set("organization", e.target.value)} className={inputCls(false)} />
        </Field>
      </div>
      {/* Message */}
      <Field id="qf-msg" label="Message *" error={errors.message}>
        <textarea id="qf-msg" rows={5} placeholder="Message" value={form.message}
          onChange={e => set("message", e.target.value)}
          className={`${inputCls(!!errors.message)} resize-none`} />
      </Field>

      <button type="submit" disabled={status === "submitting"}
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-blue-500/20 disabled:opacity-60 disabled:cursor-not-allowed">
        {status === "submitting"
          ? <><Loader2 size={16} className="animate-spin" /> Sending…</>
          : <><Send size={15} /> Submit</>}
      </button>
    </form>
  );
};

/* ─────────────────────────────────── detailed enquiry form (bottom section) */
const EnquiryForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Required";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus("submitting");
    try {
      const result = await sendEmail({ name: form.name, company: form.company, email: form.email, message: `Phone: ${form.phone}\n\n${form.message}` });
      if (result.success) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", company: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else { setStatus("error"); setTimeout(() => setStatus("idle"), 5000); }
    } catch { setStatus("error"); setTimeout(() => setStatus("idle"), 5000); }
  };

  const set = (f: string, v: string) => {
    setForm(p => ({ ...p, [f]: v }));
    if (errors[f]) setErrors(p => ({ ...p, [f]: "" }));
  };

  if (status === "success") return (
    <div className="flex flex-col items-center gap-4 py-12 text-center">
      <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center">
        <CheckCircle2 className="w-8 h-8 text-emerald-400" />
      </div>
      <h4 className="text-white font-bold text-lg">Enquiry Submitted!</h4>
      <p className="text-slate-400 text-sm">Our consultants will reach out within 2 business hours.</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <Field id="ef-name" label="Name *" error={errors.name}>
        <input id="ef-name" type="text" placeholder="Your full name" value={form.name}
          onChange={e => set("name", e.target.value)} className={inputCls(!!errors.name)} />
      </Field>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field id="ef-email" label="Email *" error={errors.email}>
          <input id="ef-email" type="email" placeholder="you@company.com" value={form.email}
            onChange={e => set("email", e.target.value)} className={inputCls(!!errors.email)} />
        </Field>
        <Field id="ef-phone" label="Phone" error="">
          <input id="ef-phone" type="tel" placeholder="+91-00000-00000" value={form.phone}
            onChange={e => set("phone", e.target.value)} className={inputCls(false)} />
        </Field>
      </div>
      <Field id="ef-co" label="Company" error="">
        <input id="ef-co" type="text" placeholder="Your organization name" value={form.company}
          onChange={e => set("company", e.target.value)} className={inputCls(false)} />
      </Field>
      <Field id="ef-msg" label="Message *" error={errors.message}>
        <textarea id="ef-msg" rows={5} placeholder="Share your project details or questions…" value={form.message}
          onChange={e => set("message", e.target.value)} className={`${inputCls(!!errors.message)} resize-none`} />
      </Field>
      <button type="submit" disabled={status === "submitting"}
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-blue-500/20 disabled:opacity-60">
        {status === "submitting"
          ? <><Loader2 size={16} className="animate-spin" /> Sending…</>
          : <><Send size={15} /> Submit Enquiry</>}
      </button>
    </form>
  );
};

/* ─────────────────────────────────── tiny helpers */
const inputCls = (hasError: boolean) =>
  `w-full bg-white/[0.04] border ${hasError ? "border-rose-500/50" : "border-white/[0.08]"} rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10 transition-all`;

const Field = ({ id, label, error, children }: { id: string; label: string; error: string; children: React.ReactNode }) => (
  <div>
    <label htmlFor={id} className="block text-[11px] font-bold uppercase tracking-wider text-white/40 mb-1.5">{label}</label>
    {children}
    {error && <p className="text-[11px] text-rose-400 mt-1">{error}</p>}
  </div>
);

/* ─────────────────────────────────── main page */
const Contact = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="relative bg-slate-950 min-h-screen">
      <ScrollProgress />
      <Navbar />

      <main>
        {/* ── HERO ── */}
        <section className="relative overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#07112a] to-slate-950" />
          <motion.div animate={{ scale: [1,1.3,1], opacity:[0.08,0.18,0.08] }} transition={{ duration:12, repeat:Infinity }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.025]" style={{
            backgroundImage:"linear-gradient(rgba(59,130,246,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,.5) 1px,transparent 1px)",
            backgroundSize:"60px 60px",
          }} />
          <div className="container relative z-10 text-center max-w-3xl mx-auto">
            <motion.div initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} transition={{duration:.6}}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
              <MessageSquare size={13} className="text-blue-400" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-blue-400">Contact Us</span>
            </motion.div>
            <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.2,duration:.8}}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
              Talk to Our{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                IT Experts
              </span>{" "}Today
            </motion.h1>
            <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.5,duration:.8}}
              className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
              Start charting your digital strategy. Write to us and our experts will get back to you within 2 business hours.
            </motion.p>
          </div>
        </section>

        {/* ── QUICK FORM + COMPANY INFO ── */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-14 items-start">

              {/* Left — form */}
              <motion.div initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.7}}>
                <p className="text-[11px] font-bold uppercase tracking-[.16em] text-blue-400 mb-3">Get in touch!</p>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2 leading-tight">
                  Write to us, and our experts will get back to you soon.
                </h2>
                <p className="text-slate-400 text-sm mb-8">All enquiries are handled by senior engineers — no chatbots.</p>
                <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-7">
                  <QuickForm />
                </div>
              </motion.div>

              {/* Right — company info */}
              <motion.div initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.7,delay:.1}}
                className="space-y-8">

                {/* HQ card */}
                <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-7 space-y-5">
                  <p className="text-[10px] font-bold uppercase tracking-[.16em] text-amber-400">Corporate HQ</p>

                  <a href="tel:+919150684544"
                    className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-blue-400/20 transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                      <Phone className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/25 mb-0.5">Phone</p>
                      <p className="text-[13px] text-white/65 font-medium">+91 91506 84544</p>
                    </div>
                  </a>

                  <a href="mailto:hr@kaizensparktech.com"
                    className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-amber-400/20 transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0 group-hover:bg-amber-500/20 transition-colors">
                      <Mail className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/25 mb-0.5">Careers Email</p>
                      <p className="text-[13px] text-white/65 font-medium">hr@kaizensparktech.com</p>
                    </div>
                  </a>

                  <a href="mailto:officials@kaizensparktech.com"
                    className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-blue-400/20 transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                      <Mail className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/25 mb-0.5">Official Email</p>
                      <p className="text-[13px] text-white/65 font-medium">officials@kaizensparktech.com</p>
                    </div>
                  </a>

                  {/* Office locations */}
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/25 mb-3">Office Locations</p>
                    <div className="grid grid-cols-2 gap-3">
                      {offices.map((o) => (
                        <div key={o.city}
                          className={`flex items-start gap-3 p-3 rounded-xl border transition-all ${o.primary ? "border-blue-500/25 bg-blue-500/5" : "border-white/[0.06] bg-white/[0.02]"}`}>
                          <MapPin size={14} className={`mt-0.5 shrink-0 ${o.primary ? "text-blue-400" : "text-white/30"}`} />
                          <div>
                            <p className={`text-[13px] font-semibold ${o.primary ? "text-white" : "text-white/60"}`}>{o.city}</p>
                            <p className="text-[11px] text-white/30">{o.address}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Social links */}
                <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/25 mb-4">Follow Us</p>
                  <div className="flex items-center gap-3 flex-wrap">
                    {socials.map((s) => {
                      const Icon = s.icon;
                      return (
                        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                          className={`w-10 h-10 rounded-xl border border-white/[0.08] flex items-center justify-center text-white/30 transition-all ${s.color} hover:scale-110`}>
                          <Icon size={16} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── DETAILED ENQUIRY FORM ── */}
        <section className="relative py-20 overflow-hidden border-t border-white/[0.05]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#07112a] to-slate-950" />
          <motion.div animate={{scale:[1,1.2,1],opacity:[0.07,0.15,0.07]}} transition={{duration:12,repeat:Infinity}}
            className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-14 items-start">

              {/* Left — copy */}
              <motion.div initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.7}}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-blue-400">IT Roadmap Consultation</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                  Let's Talk About Your{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">IT Roadmap</span>
                </h2>
                <p className="text-slate-400 leading-relaxed mb-8">
                  Share your requirements and our consultants will work with you to design the right mix of solutions and services for your organisation — from infrastructure and cloud to security, AI, and managed support.
                </p>

                {/* Why reach out bullets */}
                <div className="space-y-3">
                  {[
                    "30-minute free strategy consultation",
                    "NDA available on request",
                    "Dedicated point of contact",
                    "Response within 2 business hours",
                  ].map((b) => (
                    <div key={b} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      </div>
                      <span className="text-slate-300 text-sm">{b}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right — enquiry form */}
              <motion.div initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.7,delay:.1}}>
                <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-7">
                  <h3 className="text-white font-black text-lg mb-1">Send an Enquiry</h3>
                  <p className="text-white/35 text-[13px] mb-6">Free consultation · No obligations</p>
                  <EnquiryForm />
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

export default Contact;
