import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, Globe, Lock, Monitor, CheckCircle, Phone, Star, 
  Paperclip, Search, Plus, Inbox, Archive, Send, X, ArrowLeft, 
  CornerUpLeft, Trash2, Eye, ShieldAlert, Sparkles 
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface Email {
  id: string;
  initials: string;
  color: string;
  name: string;
  role: string;
  subject: string;
  preview: string;
  body: string;
  time: string;
  starred: boolean;
  attachment: string | null;
  folder: "Inbox" | "Starred" | "Sent" | "Archive";
}

const initialEmails: Email[] = [
  {
    id: "1",
    initials: "RS",
    color: "bg-emerald-600",
    name: "Rudhresh S",
    role: "Founder & CEO · rudhresh@kaizensparktech.com",
    subject: "Q3 Product Roadmap & Strategy",
    preview: "Team, I've finalised our Q3 product roadmap with a strong focus...",
    body: "Hi Team,\n\nI've finalised our Q3 product roadmap with a strong focus on AI integrations and scaling our managed infrastructure services. We have some exciting corporate contracts starting next week.\n\nPlease review the attached PDF roadmap and send your inputs by end of day tomorrow.\n\nBest regards,\nRudhresh S\nFounder & CEO",
    time: "12:01",
    starred: true,
    attachment: "KaizenSpark_Q3_Roadmap.pdf",
    folder: "Inbox"
  },
  {
    id: "2",
    initials: "MA",
    color: "bg-blue-600",
    name: "Maha A",
    role: "Co-founder & MD · maha@kaizensparktech.com",
    subject: "Client Presentation – TechCorp",
    preview: "The TechCorp deck is ready for review. I've highlighted our security...",
    body: "Hey everyone,\n\nThe TechCorp pitch presentation is fully completed and uploaded to the shared folder. I've highlighted our zero-trust network implementation and our custom ERP delivery timelines, which are our key selling points.\n\nLet me know if you want any copy changes before the 3 PM meeting.\n\nThanks,\nMaha A\nCo-founder & Managing Director",
    time: "11:45",
    starred: true,
    attachment: "TechCorp_Proposal_V2.pptx",
    folder: "Inbox"
  },
  {
    id: "3",
    initials: "NK",
    color: "bg-purple-600",
    name: "Nithya K",
    role: "Co-founder & Director · nithya@kaizensparktech.com",
    subject: "Dev Team Weekly Update",
    preview: "Sprint velocity is up 12% and we've cleared 27 open tickets...",
    body: "Hi team,\n\nQuick dev update: Sprint 14 was a huge success. Velocity is up 12%, and the engineering team has cleared 27 open backend tickets. The auto-backup pipelines are now fully green and running every midnight.\n\nCheers,\nNithya K\nCo-founder & Engineering Director",
    time: "09:32",
    starred: false,
    attachment: null,
    folder: "Inbox"
  },
  {
    id: "4",
    initials: "KS",
    color: "bg-emerald-500",
    name: "KaizenSpark Support",
    role: "hello@kaizenspark.com",
    subject: "Welcome to KaizenSpark Professional Mail!",
    preview: "Your business email setup is complete. Enjoy enterprise security...",
    body: "Dear Business Partner,\n\nWelcome to your new enterprise-grade corporate workspace! Your domain verification has succeeded, SSL certificates have been fully deployed, and your professional mailbox is 100% functional.\n\nYou now have premium reliability and can access unlimited custom signatures, storage options, and spam filters.\n\nWarm regards,\nThe KaizenSpark Onboarding Team",
    time: "Yesterday",
    starred: true,
    attachment: null,
    folder: "Archive"
  }
];

const features = [
  { icon: Mail,    label: "Business Email",       desc: "yourname@yourcompany.com" },
  { icon: Globe,   label: "Domain Name",           desc: "Own your brand online" },
  { icon: Lock,    label: "SSL Certificate",       desc: "Secured & installed" },
  { icon: Monitor, label: "Free Startup Website",  desc: "Up in minutes" },
];

const benefits = [
  "Domain name with full email ownership",
  "Your site appears on Google searches",
  "Professional credibility from day one",
  "Setup & onboarding fully handled",
  "Renewal reminders & management",
];

const BusinessEmailSection = () => {
  const navigate = useNavigate();
  const [emails, setEmails] = useState<Email[]>(initialEmails);
  const [activeTab, setActiveTab] = useState<"Inbox" | "Starred" | "Sent" | "Archive">("Inbox");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);
  const [isComposing, setIsComposing] = useState(false);

  // Compose state variables
  const [composeTo, setComposeTo] = useState("");
  const [composeSubject, setComposeSubject] = useState("");
  const [composeBody, setComposeBody] = useState("");

  const toggleStar = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setEmails(prev => prev.map(email => {
      if (email.id === id) {
        const nextStarred = !email.starred;
        // Toast warning if starred status changes
        toast.success(nextStarred ? "Thread Starred" : "Thread Unstarred");
        return { ...email, starred: nextStarred };
      }
      return email;
    }));
  };

  const deleteEmail = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setEmails(prev => prev.filter(email => email.id !== id));
    if (selectedEmail?.id === id) {
      setSelectedEmail(null);
    }
    toast.error("Email deleted permanently");
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!composeTo || !composeSubject || !composeBody) {
      toast.error("Please fill in all email fields");
      return;
    }

    const newEmail: Email = {
      id: String(Date.now()),
      initials: composeTo.slice(0, 2).toUpperCase(),
      color: "bg-gradient-to-br from-indigo-500 to-purple-500",
      name: `To: ${composeTo}`,
      role: `Recipient · ${composeTo}`,
      subject: composeSubject,
      preview: composeBody.slice(0, 60) + "...",
      body: composeBody,
      time: "Just Now",
      starred: false,
      attachment: null,
      folder: "Sent"
    };

    setEmails(prev => [newEmail, ...prev]);
    setIsComposing(false);
    setComposeTo("");
    setComposeSubject("");
    setComposeBody("");
    toast.success("Email sent successfully!");
  };

  // Filter emails based on folder and search query
  const filteredEmails = emails.filter(email => {
    // Tab filtering
    if (activeTab === "Starred") {
      if (!email.starred) return false;
    } else if (activeTab === "Inbox") {
      if (email.folder !== "Inbox") return false;
    } else if (activeTab === "Sent") {
      if (email.folder !== "Sent") return false;
    } else if (activeTab === "Archive") {
      if (email.folder !== "Archive") return false;
    }

    // Search query filtering
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      return (
        email.name.toLowerCase().includes(q) ||
        email.subject.toLowerCase().includes(q) ||
        email.preview.toLowerCase().includes(q)
      );
    }

    return true;
  });

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,197,94,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(34,197,94,0.5) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.06, 0.14, 0.06] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl"
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ── LEFT: Pricing Card & Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Look pro from{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                day one
              </span>
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-lg">
              Not ready for a full website yet? Get a professional business email
              with your own domain, SSL, hosting, and a free starter site — all
              in one package.
            </p>

            {/* Pricing Box */}
            <div className="bg-slate-900/70 border border-slate-700/60 rounded-2xl p-7 mb-7">
              {/* Price */}
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-5xl font-black text-white">₹3,300</span>
                <span className="text-slate-400 text-sm">per year</span>
              </div>
              <p className="text-emerald-400 text-sm font-semibold mb-6">≈ ₹275/month</p>

              {/* Feature grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                {features.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div
                      key={f.label}
                      className="flex items-start gap-3 bg-slate-800/50 border border-slate-700/40 rounded-xl p-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-white text-[12px] font-semibold leading-snug">{f.label}</p>
                        <p className="text-slate-500 text-[11px] leading-snug">{f.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Popular badge */}
              <div className="flex items-center gap-2 text-emerald-400 text-[12px] font-semibold">
                <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
                Most popular choice for new businesses in Chennai
              </div>
            </div>

            {/* Benefits Checklist */}
            <ul className="space-y-2.5 mb-8">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-slate-300 text-[13px]">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/contact")}
                className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-emerald-500/25"
              >
                Get This Package →
              </motion.button>
              <a
                href="tel:+919150684544"
                className="flex items-center gap-2 px-6 py-3.5 border border-slate-700 hover:border-emerald-500/50 hover:bg-slate-800/50 text-slate-300 hover:text-white font-semibold rounded-xl text-sm transition-all"
              >
                <Phone className="w-4 h-4" /> Call Us
              </a>
            </div>

            {/* ── Authorised Partners ── */}
            <div className="mt-10 pt-8 border-t border-slate-800/60">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">
                Authorised Partners
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Google",     color: "text-blue-400",   bg: "bg-blue-500/8  border-blue-500/15"  },
                  { name: "GoDaddy",    color: "text-green-400",  bg: "bg-green-500/8 border-green-500/15" },
                  { name: "Zoho",       color: "text-rose-400",   bg: "bg-rose-500/8  border-rose-500/15"  },
                  { name: "Microsoft",  color: "text-sky-400",    bg: "bg-sky-500/8   border-sky-500/15"   },
                  { name: "Namecheap",  color: "text-orange-400", bg: "bg-orange-500/8 border-orange-500/15"},
                  { name: "Hostinger",  color: "text-violet-400", bg: "bg-violet-500/8 border-violet-500/15"},
                ].map((p, i) => (
                  <motion.span
                    key={p.name}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.07, duration: 0.4 }}
                    whileHover={{ y: -2, scale: 1.05 }}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border text-[11px] font-bold tracking-wide cursor-default select-none ${p.color} ${p.bg}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
                    {p.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Interactive Email Client Mockup inside Phone Frame ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative flex justify-center w-full"
          >
            {/* Free Startup Site Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -top-4 right-4 z-20 flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-500 rounded-full text-[11px] font-bold text-white shadow-lg shadow-emerald-500/40"
            >
              <Sparkles className="w-3 h-3 fill-white text-white animate-spin-slow" />
              Free startup site included
            </motion.div>

            {/* ── Phone Shell ── */}
            <div className="relative mx-auto" style={{ width: 300 }}>

              {/* Side buttons left */}
              <div className="absolute left-[-3px] top-[90px] w-[3px] h-7 bg-slate-600 rounded-l-sm" />
              <div className="absolute left-[-3px] top-[128px] w-[3px] h-10 bg-slate-600 rounded-l-sm" />
              <div className="absolute left-[-3px] top-[176px] w-[3px] h-10 bg-slate-600 rounded-l-sm" />
              {/* Side button right (power) */}
              <div className="absolute right-[-3px] top-[130px] w-[3px] h-14 bg-slate-600 rounded-r-sm" />

              {/* Phone outer shell */}
              <div
                className="relative rounded-[42px] overflow-hidden shadow-2xl shadow-black/70"
                style={{
                  background: "linear-gradient(145deg, #1e293b, #0f172a)",
                  padding: "10px",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* Inner screen area */}
                <div className="relative rounded-[34px] overflow-hidden bg-[#0b0f0d]" style={{ minHeight: 580 }}>

                  {/* Notch bar */}
                  <div className="relative flex items-center justify-between px-5 pt-3 pb-1 bg-[#0b0f0d]">
                    {/* Time */}
                    <span className="text-white text-[11px] font-bold">12:01</span>
                    {/* Notch pill */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-2 w-20 h-5 bg-black rounded-full flex items-center justify-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                      <div className="w-2 h-2 rounded-full bg-slate-800 border border-slate-700" />
                    </div>
                    {/* Status icons */}
                    <div className="flex items-center gap-1">
                      <div className="flex gap-px items-end h-3">
                        {[2,3,4,5].map(h => <div key={h} className="w-[2px] bg-white rounded-sm" style={{height: h * 2.5}} />)}
                      </div>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M1 1l22 22M16.72 11.06A10.94 10.94 0 0 1 19 12.55M5 12.55a10.94 10.94 0 0 1 5.17-2.39M10.71 5.05A16 16 0 0 1 22.56 9M1.42 9a15.91 15.91 0 0 1 4.7-2.88M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" stroke="white" strokeWidth="2" fill="none"/></svg>
                      <div className="flex items-center border border-white/40 rounded-sm px-0.5 gap-0.5 h-3">
                        <div className="h-full bg-white rounded-sm" style={{width: '70%'}} />
                        <div className="w-0.5 h-1.5 bg-white/40 rounded-sm ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Email client frame — same as before, now inside phone */}
                  <div className="flex flex-col" style={{ minHeight: 500 }}>
              
              {/* Client Top Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800/80 bg-slate-900/30">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                    M
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="text-white text-xs font-bold leading-none">KaizenSpark Mail</p>
                      <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded font-semibold border border-emerald-500/10">Active</span>
                    </div>
                    <p className="text-slate-500 text-[10px]">you@yourcompany.com</p>
                  </div>
                </div>
                
                {/* Search & Compose Buttons */}
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setIsComposing(true)}
                    className="w-8 h-8 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center transition-all shadow-md hover:scale-105"
                    title="Compose Email"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Gmail-style Search Bar */}
              <div className="px-4 py-2 border-b border-slate-900">
                <div className="relative flex items-center bg-slate-900/60 border border-slate-800/80 rounded-xl px-3 py-1.5">
                  <Search className="w-4 h-4 text-slate-500 shrink-0 mr-2" />
                  <input
                    type="text"
                    placeholder="Search mail..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent border-none text-white placeholder-slate-500 text-xs w-full focus:outline-none focus:ring-0"
                  />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery("")} className="text-slate-500 hover:text-white transition-colors">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Dynamic Viewport Container */}
              <div className="flex-1 overflow-y-auto max-h-[300px] min-h-[300px] relative bg-slate-950/20">
                <AnimatePresence mode="wait">
                  
                  {/* COMPOSE SCREEN OVERLAY */}
                  {isComposing && (
                    <motion.form
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      onSubmit={handleSendEmail}
                      className="absolute inset-0 bg-[#0b0f0d] z-10 p-5 flex flex-col"
                    >
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-4">
                        <div className="flex items-center gap-2">
                          <button 
                            type="button" 
                            onClick={() => setIsComposing(false)}
                            className="text-slate-400 hover:text-white transition-colors p-1"
                          >
                            <ArrowLeft size={16} />
                          </button>
                          <span className="text-xs font-bold text-white uppercase tracking-wider">New Message</span>
                        </div>
                        <button 
                          type="button" 
                          onClick={() => setIsComposing(false)}
                          className="text-slate-500 hover:text-white"
                        >
                          <X size={16} />
                        </button>
                      </div>

                      <div className="space-y-3 flex-1 flex flex-col justify-start">
                        <div>
                          <input 
                            type="email" 
                            placeholder="To (e.g. partner@company.com)" 
                            required
                            value={composeTo}
                            onChange={(e) => setComposeTo(e.target.value)}
                            className="w-full bg-slate-900/60 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50"
                          />
                        </div>
                        <div>
                          <input 
                            type="text" 
                            placeholder="Subject" 
                            required
                            value={composeSubject}
                            onChange={(e) => setComposeSubject(e.target.value)}
                            className="w-full bg-slate-900/60 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50"
                          />
                        </div>
                        <div className="flex-1 min-h-[120px]">
                          <textarea 
                            placeholder="Write your professional email details..." 
                            required
                            value={composeBody}
                            onChange={(e) => setComposeBody(e.target.value)}
                            className="w-full h-full min-h-[110px] bg-slate-900/60 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 resize-none"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 mt-4 transition-colors"
                      >
                        <Send size={14} /> Send Professional Mail
                      </button>
                    </motion.form>
                  )}

                  {/* EMAIL THREAD DETAIL VIEW */}
                  {selectedEmail ? (
                    <motion.div
                      key="details"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="absolute inset-0 bg-[#0b0f0d] z-10 p-5 flex flex-col overflow-y-auto"
                    >
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-4">
                        <button 
                          onClick={() => setSelectedEmail(null)}
                          className="flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors"
                        >
                          <ArrowLeft size={14} /> Back to {activeTab}
                        </button>
                        <div className="flex items-center gap-3">
                          <button 
                            onClick={(e) => toggleStar(selectedEmail.id, e)}
                            className="text-slate-400 hover:text-amber-400 transition-colors"
                          >
                            <Star size={16} className={selectedEmail.starred ? "fill-amber-400 text-amber-400" : ""} />
                          </button>
                          <button 
                            onClick={(e) => deleteEmail(selectedEmail.id, e)}
                            className="text-slate-400 hover:text-red-400 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-sm font-bold text-white mb-3">{selectedEmail.subject}</h3>
                        
                        <div className="flex items-center gap-2.5 mb-4">
                          <div className={`w-8 h-8 rounded-full ${selectedEmail.color} flex items-center justify-center text-white text-xs font-bold`}>
                            {selectedEmail.initials}
                          </div>
                          <div>
                            <p className="text-white text-xs font-semibold">{selectedEmail.name}</p>
                            <p className="text-[10px] text-slate-500">{selectedEmail.role}</p>
                          </div>
                        </div>

                        <p className="text-slate-300 text-xs leading-relaxed whitespace-pre-line bg-slate-900/30 p-3.5 border border-slate-800/40 rounded-xl mb-4">
                          {selectedEmail.body}
                        </p>

                        {selectedEmail.attachment && (
                          <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900/60 border border-slate-800 p-2.5 rounded-lg">
                            <Paperclip size={14} className="text-emerald-400" />
                            <span className="flex-1 text-slate-300 truncate text-[11px]">{selectedEmail.attachment}</span>
                            <span className="text-[9px] text-emerald-400 font-bold uppercase shrink-0">Download</span>
                          </div>
                        )}
                      </div>

                      <div className="flex gap-2 mt-6 border-t border-slate-900 pt-4">
                        <button 
                          onClick={() => {
                            setComposeTo(selectedEmail.role.split("· ")[1] || "");
                            setComposeSubject(`Re: ${selectedEmail.subject}`);
                            setComposeBody(`\n\nOn ${selectedEmail.time}, ${selectedEmail.name} wrote:\n> `);
                            setSelectedEmail(null);
                            setIsComposing(true);
                          }}
                          className="flex-1 bg-slate-800 hover:bg-slate-700 border border-slate-700/50 text-slate-300 hover:text-white text-xs font-semibold py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <CornerUpLeft size={12} /> Reply
                        </button>
                        <button 
                          onClick={() => toast.info("Email forwarding feature coming soon")}
                          className="flex-1 bg-slate-800 hover:bg-slate-700 border border-slate-700/50 text-slate-300 hover:text-white text-xs font-semibold py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                        >
                          Forward
                        </button>
                      </div>
                    </motion.div>
                  ) : null}

                  {/* LIST THREADS SCREEN */}
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="divide-y divide-slate-900/60"
                  >
                    {filteredEmails.length === 0 ? (
                      <div className="flex flex-col items-center justify-center p-12 text-center h-[300px]">
                        <Inbox className="w-10 h-10 text-slate-700 mb-3" />
                        <p className="text-slate-400 text-xs font-semibold">No emails found</p>
                        <p className="text-slate-600 text-[10px] mt-1">There are no messages in this folder.</p>
                      </div>
                    ) : (
                      filteredEmails.map((thread, i) => (
                        <div
                          key={thread.id}
                          onClick={() => setSelectedEmail(thread)}
                          className="flex items-start gap-3 px-5 py-3.5 hover:bg-slate-900/40 transition-colors cursor-pointer group relative border-l-2 border-l-transparent hover:border-l-emerald-500"
                        >
                          {/* Left Avatar */}
                          <div className={`w-8 h-8 rounded-full ${thread.color} flex items-center justify-center text-white text-[11px] font-bold shrink-0 shadow-sm group-hover:scale-105 transition-transform`}>
                            {thread.initials}
                          </div>
                          
                          {/* Middle content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-0.5">
                              <div className="flex items-center gap-1.5">
                                <span className="text-white text-xs font-semibold truncate max-w-[120px]">{thread.name}</span>
                              </div>
                              <span className="text-slate-500 text-[9px]">{thread.time}</span>
                            </div>
                            <p className="text-slate-300 text-[11px] font-medium truncate mb-0.5">{thread.subject}</p>
                            <p className="text-slate-500 text-[10px] truncate leading-normal">{thread.preview}</p>
                            
                            {thread.attachment && (
                              <div className="flex items-center gap-1 mt-1 text-[9px] text-slate-500 bg-slate-900/80 border border-slate-800/80 px-1.5 py-0.5 rounded w-max">
                                <Paperclip className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                                <span className="truncate max-w-[120px]">{thread.attachment}</span>
                              </div>
                            )}
                          </div>

                          {/* Right star & delete actions */}
                          <div className="flex flex-col items-center gap-2 ml-2 self-center shrink-0">
                            <button
                              onClick={(e) => toggleStar(thread.id, e)}
                              className="text-slate-500 hover:text-amber-400 transition-colors p-0.5"
                            >
                              <Star className={`w-3.5 h-3.5 ${thread.starred ? "fill-amber-400 text-amber-400" : "text-slate-600"}`} />
                            </button>
                            <button
                              onClick={(e) => deleteEmail(thread.id, e)}
                              className="opacity-0 group-hover:opacity-100 text-slate-600 hover:text-red-400 transition-all p-0.5"
                              title="Delete Thread"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* no domain badge here — moved outside phone shell */}

              {/* Bottom Nav Bar - Dynamically updates tab state */}
              <div className="flex items-center justify-around px-5 py-3.5 border-t border-slate-900 bg-slate-950/40 relative z-[2]">
                {[
                  { Icon: Inbox, label: "Inbox", tab: "Inbox" },
                  { Icon: Star, label: "Starred", tab: "Starred" },
                  { Icon: Send, label: "Sent", tab: "Sent" },
                  { Icon: Archive, label: "Archive", tab: "Archive" },
                ].map(({ Icon, label, tab }) => {
                  const isActive = activeTab === tab;
                  return (
                    <button 
                      key={label} 
                      onClick={() => {
                        setSelectedEmail(null);
                        setIsComposing(false);
                        setActiveTab(tab as any);
                        toast.info(`Switched to ${label}`);
                      }}
                      className={`flex flex-col items-center gap-0.5 transition-colors duration-200 focus:outline-none relative group`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? "text-emerald-400" : "text-slate-500 group-hover:text-slate-300"}`} />
                      <span className={`text-[9px] font-semibold ${isActive ? "text-emerald-400" : "text-slate-600 group-hover:text-slate-400"}`}>{label}</span>
                      
                      {/* Active indicator dot */}
                      {isActive && (
                        <motion.div 
                          layoutId="activeTabIndicator"
                          className="absolute -bottom-1.5 w-1 h-1 rounded-full bg-emerald-400" 
                        />
                      )}
                    </button>
                  );
                })}
              </div>{/* bottom nav */}

                  {/* Home indicator */}
                  <div className="flex justify-center pb-2 pt-1 bg-[#0b0f0d]">
                    <div className="w-20 h-1 bg-white/20 rounded-full" />
                  </div>

                </div>{/* email flex wrapper */}
              </div>{/* inner screen */}
            </div>{/* outer shell */}

            {/* Domain Badge — floats outside bottom-right of phone */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -right-4 bg-slate-950/95 border border-emerald-500/20 rounded-2xl px-4 py-3 shadow-2xl backdrop-blur-md z-30"
            >
              <p className="text-[8px] text-slate-500 uppercase font-bold tracking-widest mb-0.5">Your Domain</p>
              <p className="text-emerald-400 font-black text-[15px] leading-tight">you@yourcompany.in</p>
              <div className="flex items-center gap-1 mt-1.5">
                <Lock className="w-3 h-3 text-emerald-400" />
                <span className="text-[9px] text-emerald-400 font-semibold">SSL secured</span>
              </div>
            </motion.div>

          </div>{/* phone width wrapper */}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BusinessEmailSection;
