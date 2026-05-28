import React, { useState, useEffect, useRef } from "react";
import { 
  Plus, Trash2, Check, Sparkles, Send, Bot, Shield, AlertTriangle, AlertCircle, Play, 
  RefreshCw, FileText, CheckCircle, Database, Server, Smartphone, Search, BookOpen,
  MapPin, Clock, Video, User, Star, PlusCircle, CreditCard, ChevronRight, Activity,
  ShoppingBag, Clipboard, ShoppingCart, Key, ChevronDown, CheckCircle2
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// ==========================================
// 1. BUSINESS SOFTWARE SIMULATORS
// ==========================================

export const BillingSoftwareSimulator = () => {
  const { toast } = useToast();
  const [items, setItems] = useState<{ id: number; name: string; rate: number; gst: number }[]>([
    { id: 1, name: "Consulting Service", rate: 5000, gst: 18 },
    { id: 2, name: "SaaS Enterprise License", rate: 12000, gst: 12 }
  ]);
  const [newItem, setNewItem] = useState({ name: "", rate: "", gst: 18 });

  const addItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItem.name || !newItem.rate) return;
    setItems([
      ...items,
      {
        id: Date.now(),
        name: newItem.name,
        rate: parseFloat(newItem.rate),
        gst: newItem.gst
      }
    ]);
    setNewItem({ name: "", rate: "", gst: 18 });
    toast({
      title: "Item Added",
      description: "Successfully added to the invoice list."
    });
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((acc, item) => acc + item.rate, 0);
  const totalGst = items.reduce((acc, item) => acc + (item.rate * item.gst) / 100, 0);
  const grandTotal = subtotal + totalGst;

  const handleGenerate = () => {
    toast({
      title: "GST Invoice Dispatched!",
      description: `Invoice for ₹${grandTotal.toLocaleString("en-IN")} has been sent over WhatsApp & Email.`,
      duration: 4000
    });
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 flex flex-col justify-between h-[360px] text-xs text-slate-300">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
        <span className="font-bold text-[10px] text-blue-400 tracking-widest uppercase">GST Billing Sandbox</span>
        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Active Node</span>
      </div>

      <div className="flex-grow overflow-y-auto max-h-[170px] space-y-2 pr-1 custom-scrollbar">
        <table className="w-full text-left">
          <thead>
            <tr className="text-slate-500 text-[10px] uppercase border-b border-slate-800/60 pb-1">
              <th className="pb-1 font-semibold">Item</th>
              <th className="pb-1 text-right font-semibold">Rate (₹)</th>
              <th className="pb-1 text-center font-semibold">GST</th>
              <th className="pb-1 text-right font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/40">
            {items.map(item => (
              <tr key={item.id} className="hover:bg-slate-800/25 transition-colors">
                <td className="py-1.5 font-medium truncate max-w-[110px]">{item.name}</td>
                <td className="py-1.5 text-right">₹{item.rate.toLocaleString("en-IN")}</td>
                <td className="py-1.5 text-center text-slate-400">{item.gst}%</td>
                <td className="py-1.5 text-right">
                  <button onClick={() => removeItem(item.id)} className="text-rose-400 hover:text-rose-300 transition-colors">
                    <Trash2 size={12} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <form onSubmit={addItem} className="grid grid-cols-12 gap-1.5 my-3">
        <input
          type="text"
          placeholder="New Item Name"
          value={newItem.name}
          onChange={e => setNewItem({ ...newItem, name: e.target.value })}
          className="col-span-6 bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs outline-none text-white focus:border-blue-500"
          required
        />
        <input
          type="number"
          placeholder="Rate"
          value={newItem.rate}
          onChange={e => setNewItem({ ...newItem, rate: e.target.value })}
          className="col-span-3 bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs outline-none text-white focus:border-blue-500"
          required
        />
        <button type="submit" className="col-span-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded flex items-center justify-center transition-colors">
          <Plus size={14} />
        </button>
      </form>

      <div className="border-t border-slate-800 pt-3 mt-auto space-y-1">
        <div className="flex justify-between text-slate-400">
          <span>Subtotal:</span>
          <span>₹{subtotal.toLocaleString("en-IN")}</span>
        </div>
        <div className="flex justify-between text-slate-400">
          <span>Calculated GST:</span>
          <span>₹{totalGst.toLocaleString("en-IN")}</span>
        </div>
        <div className="flex justify-between text-white font-bold text-sm border-t border-slate-800/50 pt-1.5">
          <span>Grand Total:</span>
          <span className="text-blue-400">₹{grandTotal.toLocaleString("en-IN")}</span>
        </div>
        <button onClick={handleGenerate} className="w-full mt-2 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded shadow-lg shadow-blue-500/10 transition-all flex items-center justify-center gap-1">
          <Sparkles size={12} />
          Generate & WhatsApp Invoice
        </button>
      </div>
    </div>
  );
};

export const CrmSimulator = () => {
  const { toast } = useToast();
  const [leads, setLeads] = useState([
    { id: 1, name: "Aarav Sharma", company: "Sharma Exports", value: 450000, stage: "Lead In" },
    { id: 2, name: "Priya Nair", company: "Nair & Associates", value: 1200000, stage: "Contacted" },
    { id: 3, name: "Vikram Malhotra", company: "VM Steels", value: 850000, stage: "Proposal Sent" }
  ]);

  const stages = ["Lead In", "Contacted", "Proposal Sent", "Closed Won"];

  const moveLead = (id: number, direction: "next" | "prev") => {
    setLeads(
      leads.map(lead => {
        if (lead.id !== id) return lead;
        const currentIndex = stages.indexOf(lead.stage);
        let nextIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
        if (nextIndex < 0) nextIndex = 0;
        if (nextIndex >= stages.length) nextIndex = stages.length - 1;
        
        if (stages[nextIndex] === "Closed Won" && lead.stage !== "Closed Won") {
          toast({
            title: "Lead Closed Won! 🎉",
            description: `Congratulations! Deal with ${lead.company} worth ₹${lead.value.toLocaleString("en-IN")} won!`,
            variant: "default"
          });
        }
        return { ...lead, stage: stages[nextIndex] };
      })
    );
  };

  const addMockLead = () => {
    const names = ["Ananya Roy", "Rahul Verma", "Sneha Patel", "Karan Johar"];
    const companies = ["Roy Logistics", "Verma Tech", "Patel Textiles", "Karan Ent."];
    const values = [300000, 1500000, 600000, 2200000];
    const randomIndex = Math.floor(Math.random() * names.length);

    setLeads([
      ...leads,
      {
        id: Date.now(),
        name: names[randomIndex],
        company: companies[randomIndex],
        value: values[randomIndex],
        stage: "Lead In"
      }
    ]);
    toast({
      title: "New Lead Inbound",
      description: `Captured lead from ${companies[randomIndex]}.`
    });
  };

  const pipelineValue = leads.reduce((acc, lead) => acc + lead.value, 0);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 flex flex-col justify-between h-[360px] text-xs text-slate-300">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
        <span className="font-bold text-[10px] text-indigo-400 tracking-widest uppercase">CRM Kanban Pipeline</span>
        <button onClick={addMockLead} className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 border border-indigo-500/20 transition-all flex items-center gap-1">
          <Plus size={10} /> Add Lead
        </button>
      </div>

      <div className="grid grid-cols-4 gap-2 mb-2">
        {stages.map(stage => (
          <div key={stage} className="bg-slate-950 border border-slate-800/80 rounded-lg p-1.5 flex flex-col min-h-[200px] max-h-[200px] overflow-y-auto">
            <span className="font-bold text-[9px] text-slate-500 uppercase tracking-wider text-center border-b border-slate-900 pb-1 mb-1 truncate">
              {stage} ({leads.filter(l => l.stage === stage).length})
            </span>
            <div className="space-y-1.5">
              {leads.filter(l => l.stage === stage).map(lead => (
                <div key={lead.id} className="bg-slate-900 border border-slate-800 rounded p-1.5 flex flex-col gap-1 relative group hover:border-indigo-500/40 transition-colors">
                  <span className="font-bold text-[10px] text-white truncate">{lead.company}</span>
                  <span className="text-[9px] text-slate-400 truncate">{lead.name}</span>
                  <span className="font-semibold text-[9px] text-indigo-400">₹{(lead.value / 100000).toFixed(1)}L</span>
                  <div className="flex justify-between items-center mt-1 border-t border-slate-800 pt-1">
                    <button
                      onClick={() => moveLead(lead.id, "prev")}
                      disabled={lead.stage === "Lead In"}
                      className="text-[9px] text-slate-500 hover:text-white disabled:opacity-30 disabled:hover:text-slate-500"
                    >
                      ◀
                    </button>
                    <button
                      onClick={() => moveLead(lead.id, "next")}
                      disabled={lead.stage === "Closed Won"}
                      className="text-[9px] text-slate-500 hover:text-white disabled:opacity-30 disabled:hover:text-slate-500"
                    >
                      ▶
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-800 pt-2.5 flex items-center justify-between text-[11px] text-slate-400">
        <div>
          <span>Total Leads: </span>
          <span className="text-white font-bold">{leads.length}</span>
        </div>
        <div>
          <span>Pipeline Value: </span>
          <span className="text-indigo-400 font-bold">₹{(pipelineValue / 100000).toFixed(1)}L</span>
        </div>
        <div className="flex items-center gap-1 text-[9px] px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          <Sparkles size={9} /> Conversion: 87%
        </div>
      </div>
    </div>
  );
};

export const ErpSimulator = () => {
  const { toast } = useToast();
  const [logs, setLogs] = useState<string[]>([
    "MRP: Initialized supply chain forecasting node",
    "Asset Depot: Scheduled depreciation log generated"
  ]);
  const [tasks, setTasks] = useState([
    { id: 1, doc: "PR-3021", dept: "Procurement", details: "Steel coils worth ₹3,50,000", approved: false },
    { id: 2, doc: "HR-992", dept: "Operations", details: "Onboard 4 React consultants", approved: false }
  ]);

  const addLog = (msg: string) => {
    const time = new Date().toLocaleTimeString();
    setLogs(prev => [`[${time}] ${msg}`, ...prev.slice(0, 4)]);
  };

  const handleAction = (id: number, approved: boolean) => {
    const task = tasks.find(t => t.id === id);
    if (!task) return;
    
    addLog(`${task.dept}: Request ${task.doc} ${approved ? "APPROVED" : "REJECTED"}`);
    setTasks(tasks.filter(t => t.id !== id));
    
    toast({
      title: approved ? "Request Approved!" : "Request Rejected",
      description: `Logged decision for ${task.doc} in ERP financial ledger.`,
      variant: approved ? "default" : "destructive"
    });
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 flex flex-col justify-between h-[360px] text-xs text-slate-300">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
        <span className="font-bold text-[10px] text-purple-400 tracking-widest uppercase">ERP Control Orchestration</span>
        <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">MRP Active</span>
      </div>

      <div className="space-y-2 flex-grow overflow-y-auto pr-1">
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Pending Approvals</span>
        {tasks.length === 0 ? (
          <div className="bg-slate-950 border border-slate-800/80 rounded-lg p-4 text-center text-slate-500">
            No pending operations requiring signatures.
          </div>
        ) : (
          tasks.map(task => (
            <div key={task.id} className="bg-slate-950 border border-slate-850 rounded-lg p-2.5 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-white text-[10px] bg-slate-900 border border-slate-800 px-1 py-0.2 rounded">{task.doc}</span>
                  <span className="text-[9px] text-purple-400 font-semibold">{task.dept}</span>
                </div>
                <p className="text-[10px] text-slate-400 mt-1">{task.details}</p>
              </div>
              <div className="flex gap-1">
                <button onClick={() => handleAction(task.id, false)} className="px-2 py-1 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 text-rose-400 font-bold rounded text-[10px] transition-all">
                  Reject
                </button>
                <button onClick={() => handleAction(task.id, true)} className="px-2 py-1 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-400 font-bold rounded text-[10px] transition-all">
                  Approve
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-3 border-t border-slate-800/60 pt-2.5">
        <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">ERP Audit Feed</span>
        <div className="bg-slate-950 border border-slate-850 rounded-lg p-2 space-y-1.5 h-[80px] overflow-y-auto font-mono text-[9px] text-slate-400">
          {logs.map((log, index) => (
            <div key={index} className="truncate border-l-2 border-purple-500/40 pl-1.5">{log}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const InventorySimulator = () => {
  const { toast } = useToast();
  const [stock, setStock] = useState([
    { id: 1, name: "Premium Raw Steel", qty: 250, lowStock: false },
    { id: 2, name: "Copper Wire Bundles", qty: 8, lowStock: true },
    { id: 3, name: "Fiber Optic Tubes", qty: 45, lowStock: false }
  ]);
  const [scanning, setScanning] = useState(false);

  const handleRestock = (id: number) => {
    setStock(stock.map(item => {
      if (item.id !== id) return item;
      toast({
        title: "Restock Processed",
        description: `Added 50 units to ${item.name}`
      });
      return { ...item, qty: item.qty + 50, lowStock: false };
    }));
  };

  const handleBarcodeScan = () => {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      setStock(stock.map(item => {
        if (item.id !== 2) return item;
        toast({
          title: "Barcode Scanned! 🔍",
          description: "Scanned Item: Copper Wire. Dispatched auto-purchase order."
        });
        return { ...item, qty: item.qty + 100, lowStock: false };
      }));
    }, 1500);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 flex flex-col justify-between h-[360px] text-xs text-slate-300">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
        <span className="font-bold text-[10px] text-teal-400 tracking-widest uppercase">Inventory Ledger Controls</span>
        <button
          onClick={handleBarcodeScan}
          disabled={scanning}
          className="text-[10px] px-2 py-0.5 rounded bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 border border-teal-500/20 transition-all flex items-center gap-1 disabled:opacity-50"
        >
          {scanning ? <RefreshCw size={10} className="animate-spin" /> : <Search size={10} />}
          {scanning ? "Scanning..." : "Scan Barcode"}
        </button>
      </div>

      <div className="flex-grow space-y-2.5 overflow-y-auto pr-1">
        {stock.map(item => (
          <div key={item.id} className="bg-slate-950 border border-slate-850 rounded-lg p-2.5 flex items-center justify-between">
            <div>
              <span className="font-semibold text-white text-[11px] block">{item.name}</span>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] text-slate-400">Stock: <b className="text-white">{item.qty} units</b></span>
                {item.lowStock && (
                  <span className="inline-flex h-2 w-2 rounded-full bg-amber-500 animate-ping" />
                )}
                {item.lowStock && (
                  <span className="text-[9px] font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-1 py-0.2 rounded">LOW STOCK</span>
                )}
              </div>
            </div>
            <button onClick={() => handleRestock(item.id)} className="px-2.5 py-1 bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/20 text-teal-400 font-bold rounded text-[10px] transition-all">
              + Restock
            </button>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-800 pt-3 mt-3 flex items-center justify-between text-[10px] text-slate-500 font-mono">
        <span>Warehouse Node ID: WH-CHN-02</span>
        <span className="text-emerald-400 flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Linked to POS
        </span>
      </div>
    </div>
  );
};

export const PosSimulator = () => {
  const { toast } = useToast();
  const [offline, setOffline] = useState(false);
  const [cart, setCart] = useState<{ id: number; name: string; price: number; qty: number }[]>([]);
  const [pendingSync, setPendingSync] = useState(0);

  const menu = [
    { id: 1, name: "Cappuccino", price: 150 },
    { id: 2, name: "Club Sandwich", price: 220 },
    { id: 3, name: "Choco Cookie", price: 80 }
  ];

  const addToCart = (item: { id: number; name: string; price: number }) => {
    const existing = cart.find(c => c.id === item.id);
    if (existing) {
      setCart(cart.map(c => c.id === item.id ? { ...c, qty: c.qty + 1 } : c));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    const total = cart.reduce((acc, c) => acc + c.price * c.qty, 0);

    if (offline) {
      setPendingSync(prev => prev + 1);
      toast({
        title: "Checkout Success (Offline)",
        description: `Order of ₹${total} logged locally. Will sync when online.`
      });
    } else {
      toast({
        title: "Transaction Successful! 💳",
        description: `Charged ₹${total} via integrated POS Cloud.`
      });
    }
    setCart([]);
  };

  const toggleOffline = () => {
    setOffline(!offline);
    if (offline && pendingSync > 0) {
      toast({
        title: "Synchronizing Database... 🔄",
        description: `Successfully pushed ${pendingSync} offline transaction(s) to central cloud.`
      });
      setPendingSync(0);
    } else {
      toast({
        title: !offline ? "Offline Mode Enabled" : "Connected to Server",
        description: !offline ? "Transactions will buffer locally." : "Online database active."
      });
    }
  };

  const total = cart.reduce((acc, c) => acc + c.price * c.qty, 0);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 flex flex-col justify-between h-[360px] text-xs text-slate-300">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
        <span className="font-bold text-[10px] text-amber-400 tracking-widest uppercase">POS Lane Terminal</span>
        <button
          onClick={toggleOffline}
          className={`text-[9px] font-bold px-2 py-0.5 rounded border transition-all ${
            offline 
              ? "bg-red-500/10 text-red-400 border-red-500/20" 
              : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
          }`}
        >
          {offline ? "OFFLINE MODE" : "ONLINE"}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 flex-grow">
        {/* Menu Grid */}
        <div className="space-y-1.5 max-h-[170px] overflow-y-auto pr-1">
          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">Menu Items</span>
          {menu.map(item => (
            <button
              key={item.id}
              onClick={() => addToCart(item)}
              className="w-full text-left bg-slate-950 border border-slate-850 rounded p-1.5 hover:border-amber-500/40 transition-colors"
            >
              <span className="font-semibold text-[10px] text-white block">{item.name}</span>
              <span className="text-[9px] text-amber-400 font-bold">₹{item.price}</span>
            </button>
          ))}
        </div>

        {/* Cart */}
        <div className="bg-slate-950 border border-slate-850 rounded-lg p-2 flex flex-col justify-between max-h-[170px] overflow-y-auto">
          <div>
            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block border-b border-slate-900 pb-1 mb-1">Cart</span>
            {cart.length === 0 ? (
              <span className="text-[9px] text-slate-600 block text-center mt-6">Cart Empty</span>
            ) : (
              <div className="space-y-1">
                {cart.map(c => (
                  <div key={c.id} className="flex justify-between text-[9px]">
                    <span className="truncate max-w-[55px] font-medium">{c.name} x{c.qty}</span>
                    <span className="font-semibold text-white">₹{c.price * c.qty}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-slate-900 pt-1.5 mt-2">
            <div className="flex justify-between text-[10px] font-bold text-white mb-1">
              <span>Total:</span>
              <span>₹{total}</span>
            </div>
            <button
              onClick={handleCheckout}
              disabled={cart.length === 0}
              className="w-full py-1 bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-white font-bold rounded text-[9px] transition-colors"
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>

      {pendingSync > 0 && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg p-1.5 text-center text-[9px] font-mono animate-pulse mt-2">
          {pendingSync} Transactions Cached locally for sync
        </div>
      )}

      <div className="border-t border-slate-800 pt-2 flex items-center justify-between text-[9px] text-slate-500 font-mono">
        <span>Offline buffer: SQLite node</span>
        <span>Version: POS v3.11</span>
      </div>
    </div>
  );
};

export const AccountingSimulator = () => {
  const { toast } = useToast();
  const [records, setRecords] = useState([
    { id: 1, desc: "Inbound Payment Recd", amount: 12500, status: "Pending" },
    { id: 2, desc: "Office Rent Settled", amount: -45000, status: "Pending" },
    { id: 3, desc: "Supplier PO Remitted", amount: -15000, status: "Pending" }
  ]);

  const handleReconcile = (id: number) => {
    setRecords(records.map(rec => {
      if (rec.id !== id) return rec;
      toast({
        title: "Reconciled Successful! ✅",
        description: `Matched Ledger record for ₹${Math.abs(rec.amount)} via Open-Banking APIs.`,
      });
      return { ...rec, status: "Reconciled" };
    }));
  };

  const reconciledCount = records.filter(r => r.status === "Reconciled").length;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 flex flex-col justify-between h-[360px] text-xs text-slate-300">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
        <span className="font-bold text-[10px] text-rose-400 tracking-widest uppercase">Open Banking Ledger desk</span>
        <span className="text-[10px] px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">Audit Trail: ON</span>
      </div>

      <div className="flex-grow space-y-2 overflow-y-auto pr-1">
        {records.map(rec => (
          <div key={rec.id} className="bg-slate-950 border border-slate-850 rounded-lg p-2.5 flex items-center justify-between">
            <div>
              <span className="font-semibold text-white text-[10px] block">{rec.desc}</span>
              <span className={`text-[10px] font-bold block ${rec.amount > 0 ? "text-emerald-400" : "text-rose-400"}`}>
                {rec.amount > 0 ? "+" : ""}₹{rec.amount.toLocaleString("en-IN")}
              </span>
            </div>
            {rec.status === "Reconciled" ? (
              <span className="text-emerald-400 flex items-center gap-0.5 text-[9px] font-bold bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                <Check size={10} /> RECONCILED
              </span>
            ) : (
              <button
                onClick={() => handleReconcile(rec.id)}
                className="px-2.5 py-1 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 text-rose-400 font-bold rounded text-[9px] transition-all"
              >
                Reconcile
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="border-t border-slate-800 pt-3 mt-3">
        <div className="flex justify-between items-center text-[10px] text-slate-500">
          <span>Reconciliation Completion:</span>
          <span className="font-bold text-white">{reconciledCount} of {records.length} items</span>
        </div>
        <div className="w-full bg-slate-950 rounded-full h-1.5 mt-1 border border-slate-850">
          <div 
            className="bg-rose-500 h-1 rounded-full transition-all duration-500" 
            style={{ width: `${(reconciledCount / records.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 2. ACADEMIC & EDUCATION SIMULATORS
// ==========================================

export const LmsSimulator = () => {
  const { toast } = useToast();
  const [checking, setChecking] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const handlePlagiarismCheck = () => {
    setChecking(true);
    setScore(null);
    setTimeout(() => {
      setChecking(false);
      const generatedScore = Math.floor(Math.random() * 8) + 2; // 2% to 9%
      setScore(generatedScore);
      toast({
        title: "Assignment Scanned Successfully! 🛡️",
        description: `similarity check result: ${generatedScore}% matched text segments.`
      });
    }, 1800);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 flex flex-col justify-between h-[360px] text-xs text-slate-300">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
        <span className="font-bold text-[10px] text-cyan-400 tracking-widest uppercase">LMS Assignment Validator</span>
        <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Turnitin Sync</span>
      </div>

      <div className="bg-slate-950 border border-slate-850 rounded-lg p-3 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <span className="font-bold text-white text-[11px] bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">PDF</span>
            <span className="text-[10px] text-slate-400 font-medium">NeuralNetworkAssignment_v2.pdf</span>
          </div>
          <div className="space-y-1.5 font-mono text-[9px] text-slate-500 bg-slate-900/60 p-2 rounded border border-slate-850 h-[85px] overflow-y-auto">
            <p className="text-slate-400">// Submitted Homework paper by: Rohan Patil</p>
            <p>1. Objective: Formulate a backpropagation algorithm from scratch.</p>
            <p>2. Model architecture: input layers (x3), hidden (x6), output layers (x2).</p>
            <p>3. Learning rates set explicitly to 0.01.</p>
          </div>
        </div>

        <div className="mt-3 flex flex-col gap-2">
          {score !== null && (
            <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg p-2 flex items-center justify-between text-[10px]">
              <span>Plagiarism Check Score:</span>
              <span className="font-bold text-xs">{score}% Similarity Index (Clean)</span>
            </div>
          )}
          <button
            onClick={handlePlagiarismCheck}
            disabled={checking}
            className="w-full py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 disabled:opacity-50 text-white font-bold rounded text-[10px] transition-all flex items-center justify-center gap-1 cursor-pointer"
          >
            {checking ? <RefreshCw size={12} className="animate-spin" /> : <Shield size={12} />}
            {checking ? "Analyzing for AI Plagiarism..." : "Verify Assignment Integrity"}
          </button>
        </div>
      </div>

      <div className="border-t border-slate-800 pt-2.5 mt-2 flex items-center justify-between text-[9px] text-slate-500">
        <span>Integrated: AWS Medialive streaming support</span>
        <span className="text-emerald-400 flex items-center gap-0.5"><span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-ping" /> Gradebook Connected</span>
      </div>
    </div>
  );
};

export const SchoolManagementSimulator = () => {
  const { toast } = useToast();
  const [eta, setEta] = useState(12);
  const [students, setStudents] = useState([
    { id: 1, name: "Samit Roy", parent: "Amit Roy", status: "Unpaid", phone: "+919876543210" },
    { id: 2, name: "Sneha Das", parent: "R. Das", status: "Paid", phone: "+919876543211" }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setEta(prev => (prev <= 1 ? 15 : prev - 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const sendReminder = (parent: string, phone: string) => {
    toast({
      title: "Fee Reminder Sent",
      description: `Dispatched WhatsApp automatic reminder to parent ${parent} (${phone}).`
    });
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 flex flex-col justify-between h-[360px] text-xs text-slate-300">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
        <span className="font-bold text-[10px] text-blue-400 tracking-widest uppercase">GPS Tracker & Reminders</span>
        <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">Route 4: Active</span>
      </div>

      {/* GPS Route Tracker visual */}
      <div className="bg-slate-950 border border-slate-850 rounded-lg p-2.5 mb-3 flex flex-col gap-2">
        <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">Live GPS Bus Tracker (Bus 04)</span>
        <div className="flex items-center gap-2">
          <div className="flex-grow bg-slate-900 h-2 rounded-full border border-slate-800 relative overflow-hidden">
            <div 
              className="bg-blue-500 h-full rounded-full transition-all duration-1000" 
              style={{ width: `${((15 - eta) / 15) * 100}%` }}
            />
            <div 
              className="absolute top-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full bg-white shadow flex items-center justify-center transition-all duration-1000"
              style={{ left: `calc(${((15 - eta) / 15) * 100}% - 7px)` }}
            >
              🚌
            </div>
          </div>
          <span className="text-[10px] font-bold text-white shrink-0">{eta} min left</span>
        </div>
        <div className="flex justify-between text-[9px] text-slate-500 font-mono">
          <span>Departs: Central Campus</span>
          <span>Next Stop: Lakeview Plaza</span>
        </div>
      </div>

      {/* Fee records */}
      <div className="space-y-1.5 flex-grow overflow-y-auto pr-1">
        <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">Tuition Ledger Reminders</span>
        {students.map(std => (
          <div key={std.id} className="bg-slate-950 border border-slate-850 rounded-lg p-2 flex items-center justify-between">
            <div>
              <span className="font-semibold text-white text-[10px] block">{std.name}</span>
              <span className="text-[9px] text-slate-400">Parent: {std.parent}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded ${
                std.status === "Paid" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
              }`}>
                {std.status}
              </span>
              {std.status === "Unpaid" && (
                <button
                  onClick={() => sendReminder(std.parent, std.phone)}
                  className="px-2 py-0.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded text-[9px] transition-colors"
                >
                  Remind
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ExamSimulator = () => {
  const { toast } = useToast();
  const [violations, setViolations] = useState(0);
  const [proctoring, setProctoring] = useState(false);
  const [examStarted, setExamStarted] = useState(false);

  const triggerViolation = () => {
    if (!examStarted) return;
    setViolations(prev => {
      const next = prev + 1;
      if (next >= 3) {
        toast({
          title: "Exam auto-locked! 🚫",
          description: "Malpractice proctor threshold exceeded. Exam locked out.",
          variant: "destructive"
        });
        setExamStarted(false);
        setProctoring(false);
      } else {
        toast({
          title: "Proctor Alert Triggered! ⚠️",
          description: `Gaze deflection flagged (Violation ${next}/3).`,
          variant: "destructive"
        });
      }
      return next;
    });
  };

  const handleStart = () => {
    setExamStarted(true);
    setProctoring(true);
    setViolations(0);
    toast({
      title: "Secure Proctoring Sandbox Loaded",
      description: "Fullscreen locker engaged. Camera proctoring is live."
    });
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 flex flex-col justify-between h-[360px] text-xs text-slate-300">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
        <span className="font-bold text-[10px] text-indigo-400 tracking-widest uppercase">AI Proctor Examination Sandbox</span>
        <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">Locker Active</span>
      </div>

      <div className="flex-grow flex flex-col justify-between">
        {!examStarted ? (
          <div className="bg-slate-950 border border-slate-850 rounded-lg p-6 text-center flex-grow flex flex-col justify-center items-center gap-3">
            <span className="text-3xl">💻</span>
            <div className="space-y-1">
              <span className="font-bold text-white text-[11px] block">Advanced Chemistry Finals</span>
              <p className="text-[10px] text-slate-400">Locked testing interface with biometric tracking.</p>
            </div>
            <button onClick={handleStart} className="px-4 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded text-[10px] transition-all">
              Initialize Secure Exam
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-12 gap-3 flex-grow">
            {/* Question */}
            <div className="col-span-8 bg-slate-950 border border-slate-850 rounded-lg p-3 flex flex-col justify-between">
              <div>
                <span className="font-bold text-slate-500 text-[9px] uppercase tracking-wider">Question 2 of 10</span>
                <p className="font-semibold text-white text-[10px] mt-1">What is the electron configuration of Nitrogen?</p>
                <div className="space-y-1.5 mt-3">
                  {["1s² 2s² 2p³", "1s² 2s² 2p⁴", "1s² 2s¹ 2p⁵"].map((opt, i) => (
                    <label key={i} className="flex items-center gap-2 p-1.5 rounded bg-slate-900 border border-slate-800 text-[9px] cursor-pointer hover:border-indigo-500/40">
                      <input type="radio" name="options" className="text-indigo-500 focus:ring-0" />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
              <button onClick={() => { setExamStarted(false); setProctoring(false); toast({ title: "Exam Submitted", description: "Calculating grade..." }) }} className="w-full mt-2 py-1 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded text-[9px] transition-colors">
                Submit Exam Paper
              </button>
            </div>

            {/* Proctor Camera Simulation */}
            <div className="col-span-4 flex flex-col justify-between gap-2">
              <div className={`border rounded-lg p-2 text-center relative flex-grow flex flex-col justify-center items-center ${
                violations > 0 ? "border-rose-500/50 bg-rose-500/5" : "border-slate-800 bg-slate-950"
              }`}>
                {proctoring ? (
                  <div className="relative">
                    <span className="text-2xl animate-pulse block">🧑‍🎓</span>
                    <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 border border-slate-900" />
                  </div>
                ) : (
                  <span className="text-2xl">💤</span>
                )}
                <span className="text-[8px] font-bold uppercase block mt-1 tracking-wider text-slate-500">Camera Feed</span>
                <span className="text-[7px] text-slate-400 mt-0.5 truncate">Violations: {violations}/3</span>
              </div>
              <button
                onClick={triggerViolation}
                className="w-full py-1.5 bg-rose-600/10 hover:bg-rose-600/20 border border-rose-500/20 text-rose-400 font-bold rounded text-[8px] transition-all uppercase tracking-wider"
              >
                Look Away (Test AI)
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const LibrarySimulator = () => {
  const { toast } = useToast();
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([
    { id: 1, title: "An Introduction to Algorithms", author: "Cormen", available: true },
    { id: 2, title: "Fundamentals of Physics", author: "Halliday", available: false, due: "June 05" },
    { id: 3, title: "A Midsummer Night's Dream", author: "Shakespeare", available: true }
  ]);

  const handleBorrow = (id: number) => {
    setBooks(books.map(b => {
      if (b.id !== id) return b;
      toast({
        title: "DRM e-Book Issued! 📖",
        description: `Secure checkout complete. Authorizing DRM reader tokens for ${b.title}.`
      });
      return { ...b, available: false, due: "14 days left" };
    }));
  };

  const filtered = books.filter(b => b.title.toLowerCase().includes(search.toLowerCase()) || b.author.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 flex flex-col justify-between h-[360px] text-xs text-slate-300">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
        <span className="font-bold text-[10px] text-purple-400 tracking-widest uppercase">DRM Library Catalog Console</span>
        <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">DRM Active</span>
      </div>

      <div className="bg-slate-950 border border-slate-850 rounded-lg px-2.5 py-1 mb-2.5 flex items-center gap-1.5 shrink-0">
        <Search size={12} className="text-slate-500" />
        <input
          type="text"
          placeholder="Search by Title or Author..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="bg-transparent border-none text-[10px] outline-none text-white w-full placeholder-slate-600"
        />
      </div>

      <div className="flex-grow space-y-2 overflow-y-auto pr-1">
        {filtered.map(b => (
          <div key={b.id} className="bg-slate-950 border border-slate-850 rounded-lg p-2.5 flex items-center justify-between">
            <div className="max-w-[130px] sm:max-w-[160px]">
              <span className="font-semibold text-white text-[10px] block truncate">{b.title}</span>
              <span className="text-[9px] text-slate-500">Author: {b.author}</span>
            </div>
            {b.available ? (
              <button
                onClick={() => handleBorrow(b.id)}
                className="px-2.5 py-1 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 text-purple-400 font-bold rounded text-[9px] transition-all"
              >
                Read Now
              </button>
            ) : (
              <span className="text-[9px] font-bold text-slate-500 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">
                Due: {b.due}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export const StudentPortalSimulator = () => {
  const { toast } = useToast();
  const [ticketSubject, setTicketSubject] = useState("");
  const [tickets, setTickets] = useState([
    { id: 1, sub: "Verify Tuition Remittance status", status: "Under Review" }
  ]);

  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketSubject) return;
    setTickets([
      ...tickets,
      {
        id: Date.now(),
        sub: ticketSubject,
        status: "Submitted"
      }
    ]);
    setTicketSubject("");
    toast({
      title: "Helpdesk Ticket Dispatched",
      description: "Student support queue will review details shortly."
    });
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 flex flex-col justify-between h-[360px] text-xs text-slate-300">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
        <span className="font-bold text-[10px] text-pink-400 tracking-widest uppercase">Personal Student Workspace</span>
        <span className="text-[10px] px-2 py-0.5 rounded bg-pink-500/10 text-pink-400 border border-pink-500/20">GPA: 9.4</span>
      </div>

      <div className="grid grid-cols-2 gap-3 flex-grow">
        {/* Ticket Submission form */}
        <form onSubmit={handleSubmitTicket} className="bg-slate-950 border border-slate-850 rounded-lg p-2.5 flex flex-col justify-between">
          <div>
            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block border-b border-slate-900 pb-1 mb-2">Helpdesk Ticket</span>
            <textarea
              placeholder="Describe issue (e.g. Schedule clashes...)"
              value={ticketSubject}
              onChange={e => setTicketSubject(e.target.value)}
              rows={3}
              className="w-full bg-slate-900 border border-slate-800 rounded p-1.5 text-[9px] outline-none text-white focus:border-pink-500 resize-none placeholder-slate-600"
              required
            />
          </div>
          <button type="submit" className="w-full py-1 bg-pink-600 hover:bg-pink-500 text-white font-bold rounded text-[9px] transition-colors mt-2">
            Submit Ticket
          </button>
        </form>

        {/* Calendar and ticket history */}
        <div className="space-y-2 max-h-[170px] overflow-y-auto pr-1">
          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">Ticket Queue Status</span>
          <div className="space-y-1.5">
            {tickets.map(tk => (
              <div key={tk.id} className="bg-slate-950 border border-slate-850 rounded p-2">
                <span className="font-semibold text-white text-[9px] block truncate">{tk.sub}</span>
                <span className="text-[8px] font-bold text-pink-400 mt-1 block uppercase">{tk.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 3. INDUSTRY SOLUTIONS SIMULATORS
// ==========================================

export const HealthcareSimulator = () => {
  const { toast } = useToast();
  const [queue, setQueue] = useState([
    { id: 1, name: "Karan Johar", symptom: "Fever & Cough" },
    { id: 2, name: "Sneha Patel", symptom: "Joint Sprain" }
  ]);
  const [selectedPatient, setSelectedPatient] = useState<{ id: number; name: string; symptom: string } | null>(null);
  const [prescription, setPrescription] = useState("");

  const handleDiagnose = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPatient || !prescription) return;
    
    toast({
      title: "Prescription Dispatched! 🩺",
      description: `EHR saved for ${selectedPatient.name}. Report sent to Pharmacy & Patient WhatsApp.`
    });

    setQueue(queue.filter(p => p.id !== selectedPatient.id));
    setSelectedPatient(null);
    setPrescription("");
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 flex flex-col justify-between h-[360px] text-xs text-slate-300">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
        <span className="font-bold text-[10px] text-indigo-400 tracking-widest uppercase">EHR OPD Clinical Queue</span>
        <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">HIPAA Sandbox</span>
      </div>

      <div className="grid grid-cols-2 gap-3 flex-grow">
        {/* Patient Queue */}
        <div className="space-y-1.5 max-h-[170px] overflow-y-auto pr-1">
          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">OPD Waiting Queue</span>
          {queue.length === 0 ? (
            <div className="bg-slate-950 border border-slate-850 rounded p-4 text-center text-slate-600 text-[9px]">
              No patients waiting.
            </div>
          ) : (
            queue.map(p => (
              <button
                key={p.id}
                onClick={() => setSelectedPatient(p)}
                className={`w-full text-left bg-slate-950 border rounded p-2 transition-all ${
                  selectedPatient?.id === p.id ? "border-indigo-500 bg-slate-950" : "border-slate-850 hover:border-indigo-500/30"
                }`}
              >
                <span className="font-bold text-white text-[10px] block">{p.name}</span>
                <span className="text-[9px] text-slate-400 truncate block">Symptom: {p.symptom}</span>
              </button>
            ))
          )}
        </div>

        {/* Diagnosis Console */}
        <div className="bg-slate-950 border border-slate-850 rounded-lg p-2.5 flex flex-col justify-between max-h-[170px] overflow-y-auto">
          {selectedPatient ? (
            <form onSubmit={handleDiagnose} className="flex flex-col justify-between h-full">
              <div>
                <span className="text-[8px] font-bold text-slate-500 uppercase tracking-wider block border-b border-slate-900 pb-1 mb-1.5">Diagnosing: {selectedPatient.name}</span>
                <input
                  type="text"
                  placeholder="Rx Prescriptions (e.g. Paracetamol...)"
                  value={prescription}
                  onChange={e => setPrescription(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded p-1.5 text-[9px] outline-none text-white focus:border-indigo-500"
                  required
                />
              </div>
              <button type="submit" className="w-full py-1 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded text-[9px] transition-colors mt-2">
                Generate RX & Dispatch
              </button>
            </form>
          ) : (
            <div className="text-center text-slate-600 text-[9px] mt-10">
              Select patient from queue to prescribe.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const RestaurantSimulator = () => {
  const { toast } = useToast();
  const [orders, setOrders] = useState([
    { id: 1, table: "Table 3", items: "2x Pepperoni Pizza, 1x Coca-Cola", status: "Queued" },
    { id: 2, table: "Table 7", items: "1x Arrabiata Pasta, 1x Mocktail", status: "Cooking" }
  ]);

  const handleStatusChange = (id: number, current: string) => {
    if (current === "Queued") {
      setOrders(orders.map(o => o.id === id ? { ...o, status: "Cooking" } : o));
    } else if (current === "Cooking") {
      setOrders(orders.filter(o => o.id !== id));
      toast({
        title: "Order Ready to Serve! 🍕",
        description: "Sent Kitchen KDS completion notify to waiter tablet."
      });
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 flex flex-col justify-between h-[360px] text-xs text-slate-300">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
        <span className="font-bold text-[10px] text-blue-400 tracking-widest uppercase">Kitchen Display System (KDS) Desk</span>
        <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">LAN Node online</span>
      </div>

      <div className="flex-grow space-y-2.5 overflow-y-auto pr-1">
        {orders.length === 0 ? (
          <div className="bg-slate-950 border border-slate-850 rounded p-6 text-center text-slate-500">
            Kitchen orders complete. Enjoy the break!
          </div>
        ) : (
          orders.map(o => (
            <div key={o.id} className="bg-slate-950 border border-slate-850 rounded-lg p-2.5 flex items-center justify-between">
              <div>
                <span className="font-bold text-white text-[11px] block">{o.table}</span>
                <p className="text-[10px] text-slate-400 mt-0.5">{o.items}</p>
                <span className={`inline-block text-[8px] font-bold px-1.5 py-0.2 rounded mt-1.5 ${
                  o.status === "Cooking" ? "bg-amber-500/10 text-amber-400 border border-amber-500/20 animate-pulse" : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                }`}>
                  {o.status.toUpperCase()}
                </span>
              </div>
              <button
                onClick={() => handleStatusChange(o.id, o.status)}
                className={`px-3 py-1 text-[10px] font-bold rounded border transition-all ${
                  o.status === "Queued"
                    ? "bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20"
                    : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20"
                }`}
              >
                {o.status === "Queued" ? "Start Cooking" : "Mark Ready"}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export const RealEstateSimulator = () => {
  const { toast } = useToast();
  const [tenancyYears, setTenancyYears] = useState(2);
  const [selectedProp, setSelectedProp] = useState("Orchid Premium Suite (Unit 402)");

  const basePrice = selectedProp.includes("Orchid") ? 4500000 : 7500000;
  const emi = Math.round((basePrice * 0.9) / (tenancyYears * 12));

  const handleGenerateAgreement = () => {
    toast({
      title: "Agreement Drafted! 📄",
      description: `Structured installment plan generated for ₹${emi.toLocaleString("en-IN")}/mo. Sent via DocuSign.`
    });
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 flex flex-col justify-between h-[360px] text-xs text-slate-300">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
        <span className="font-bold text-[10px] text-teal-400 tracking-widest uppercase">Tenancy & Installment Structurer</span>
        <span className="text-[10px] px-2 py-0.5 rounded bg-teal-500/10 text-teal-400 border border-teal-500/20">CRM Linked</span>
      </div>

      <div className="bg-slate-950 border border-slate-850 rounded-lg p-3.5 flex-grow flex flex-col justify-between gap-3">
        <div className="space-y-3">
          <div>
            <label className="block text-[8px] font-bold text-slate-500 uppercase tracking-wider mb-1">Select Property</label>
            <select
              value={selectedProp}
              onChange={e => setSelectedProp(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded p-1.5 text-[10px] outline-none text-white focus:border-teal-500"
            >
              <option value="Orchid Premium Suite (Unit 402)">Orchid Premium Suite (Unit 402) - ₹45L</option>
              <option value="Greenwood Luxury Villa (Sector 4)">Greenwood Luxury Villa (Sector 4) - ₹75L</option>
            </select>
          </div>

          <div>
            <div className="flex justify-between text-[8px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              <span>Installment Schedule Length</span>
              <span className="text-white">{tenancyYears} Years ({tenancyYears * 12} Mos)</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={tenancyYears}
              onChange={e => setTenancyYears(parseInt(e.target.value))}
              className="w-full accent-teal-500"
            />
          </div>
        </div>

        <div className="border-t border-slate-900 pt-3 mt-auto space-y-1.5">
          <div className="flex justify-between text-[10px] text-slate-400">
            <span>EMI (10% Down Payment):</span>
            <span className="font-bold text-white">₹{emi.toLocaleString("en-IN")}/mo</span>
          </div>
          <button
            onClick={handleGenerateAgreement}
            className="w-full py-2 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-bold rounded text-[10px] transition-all flex items-center justify-center gap-1"
          >
            <FileText size={12} />
            Generate agreement
          </button>
        </div>
      </div>
    </div>
  );
};

export const HotelSimulator = () => {
  const { toast } = useToast();
  const [rooms, setRooms] = useState([
    { number: 101, type: "Executive Suite", status: "Vacant" },
    { number: 102, type: "Deluxe Twin", status: "Occupied", guest: "Aman Verma" },
    { number: 201, type: "Honeymoon Suite", status: "Needs Cleaning" },
    { number: 202, type: "Classic Room", status: "Vacant" }
  ]);

  const handleRoomAction = (number: number, currentStatus: string) => {
    if (currentStatus === "Vacant") {
      setRooms(rooms.map(r => r.number === number ? { ...r, status: "Occupied", guest: "Inbound Guest" } : r));
      toast({
        title: "Guest Checked In! 🏨",
        description: `Assigned Room ${number} and printed magnetic key cards.`
      });
    } else if (currentStatus === "Occupied") {
      setRooms(rooms.map(r => r.number === number ? { ...r, status: "Needs Cleaning", guest: undefined } : r));
      toast({
        title: "Guest Checked Out!",
        description: `Room ${number} has been flagged for housekeeping.`
      });
    } else if (currentStatus === "Needs Cleaning") {
      setRooms(rooms.map(r => r.number === number ? { ...r, status: "Vacant" } : r));
      toast({
        title: "Housekeeping Done! 🧹",
        description: `Room ${number} verified and released to vacant inventory.`
      });
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 flex flex-col justify-between h-[360px] text-xs text-slate-300">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
        <span className="font-bold text-[10px] text-teal-400 tracking-widest uppercase">Grid Reservation Calendar Desk</span>
        <span className="text-[10px] px-2 py-0.5 rounded bg-teal-500/10 text-teal-400 border border-teal-500/20">OTA Synced</span>
      </div>

      <div className="grid grid-cols-2 gap-2 flex-grow overflow-y-auto pr-1">
        {rooms.map(room => (
          <div
            key={room.number}
            onClick={() => handleRoomAction(room.number, room.status)}
            className="bg-slate-950 border border-slate-850 rounded-lg p-2.5 hover:border-teal-500/40 transition-all cursor-pointer flex flex-col justify-between gap-2"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-[11px] bg-slate-900 border border-slate-800 px-1 py-0.2 rounded">RM {room.number}</span>
                <span className={`h-2 w-2 rounded-full ${
                  room.status === "Vacant" ? "bg-emerald-500" : room.status === "Occupied" ? "bg-rose-500" : "bg-amber-500 animate-pulse"
                }`} />
              </div>
              <span className="text-[9px] text-slate-500 mt-1 block">{room.type}</span>
              {room.guest && (
                <span className="text-[9px] text-slate-400 mt-0.5 truncate block">Guest: <b>{room.guest}</b></span>
              )}
            </div>

            <span className="text-[8px] font-bold text-teal-400 uppercase tracking-wide border-t border-slate-900 pt-1">
              {room.status === "Vacant" ? "▶ Click to Checkin" : room.status === "Occupied" ? "◀ Checkout" : "🧹 Clean Room"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const RetailSimulator = () => {
  const { toast } = useToast();
  const [chennaiStock, setChennaiStock] = useState(150);
  const [bangaloreStock, setBangaloreStock] = useState(25);
  const [transferQty, setTransferQty] = useState(10);
  const [inTransit, setInTransit] = useState(false);

  const handleTransfer = () => {
    if (chennaiStock < transferQty) return;
    setChennaiStock(prev => prev - transferQty);
    setInTransit(true);

    toast({
      title: "Inventory Transfer Initiated 🚚",
      description: `Dispatched transfer order for ${transferQty} items from Chennai Hub.`
    });

    setTimeout(() => {
      setBangaloreStock(prev => prev + transferQty);
      setInTransit(false);
      toast({
        title: "Transfer Arrived & Reconciled! ✅",
        description: `Bangalore Hub stock updated.`
      });
    }, 3000);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 flex flex-col justify-between h-[360px] text-xs text-slate-300">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
        <span className="font-bold text-[10px] text-amber-400 tracking-widest uppercase">Multi-Hub Stock Transfers</span>
        <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">WMS Online</span>
      </div>

      <div className="bg-slate-950 border border-slate-850 rounded-lg p-3.5 flex-grow flex flex-col justify-between gap-3">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="bg-slate-900 border border-slate-800 rounded p-2">
            <span className="text-[8px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Chennai Hub</span>
            <span className="font-bold text-base text-white">{chennaiStock}</span>
            <span className="text-[8px] text-slate-400 block mt-1">units</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded p-2">
            <span className="text-[8px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Bangalore Hub</span>
            <span className="font-bold text-base text-white">{bangaloreStock}</span>
            <span className="text-[8px] text-slate-400 block mt-1">units</span>
          </div>
        </div>

        {inTransit && (
          <div className="bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded p-1 text-center font-mono text-[9px] animate-pulse">
            🚚 Transfer In-Transit to Bangalore...
          </div>
        )}

        <div className="border-t border-slate-900 pt-3 flex gap-2 shrink-0">
          <input
            type="number"
            value={transferQty}
            onChange={e => setTransferQty(Math.max(1, parseInt(e.target.value) || 0))}
            className="w-16 bg-slate-900 border border-slate-850 rounded px-2 text-[10px] text-center text-white font-bold outline-none"
            disabled={inTransit}
          />
          <button
            onClick={handleTransfer}
            disabled={inTransit || chennaiStock < transferQty}
            className="flex-grow py-1.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 disabled:opacity-50 text-white font-bold rounded text-[9px] transition-colors"
          >
            Dispatch Stock Transfer
          </button>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 4. AI & AUTOMATION SIMULATORS
// ==========================================

export const ChatbotSimulator = () => {
  const { toast } = useToast();
  const [messages, setMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([
    { sender: "bot", text: "Hello! I am trained on your knowledge base. Ask me anything!" }
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { sender: "user", text: input }]);
    const userText = input;
    setInput("");
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      let reply = "I matched that with your document library. RAG systems confirm our refund policies allow returns within 14 business days.";
      if (userText.toLowerCase().includes("pricing")) {
        reply = "Looking up local files... SaaS enterprise pricing begins at ₹12,000 per multi-branch node configuration.";
      } else if (userText.toLowerCase().includes("hours")) {
        reply = "Database catalogs list operating timings as Monday through Saturday, 9:00 AM to 6:00 PM.";
      }

      setMessages(prev => [...prev, { sender: "bot", text: reply }]);
      toast({
        title: "AI Response Synced 🤖",
        description: "Vector search (RAG) match score: 98% accuracy."
      });
    }, 1200);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 flex flex-col justify-between h-[360px] text-xs text-slate-300 font-sans">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
        <span className="font-bold text-[10px] text-purple-400 tracking-widest uppercase">LLM RAG Vector Sandbox</span>
        <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">Accuracy: 98%</span>
      </div>

      <div className="flex-grow bg-slate-950 border border-slate-850 rounded-lg p-2.5 flex flex-col justify-between mb-3 h-[200px]">
        <div className="flex-grow space-y-2 overflow-y-auto pr-1 max-h-[150px] custom-scrollbar">
          {messages.map((m, idx) => (
            <div key={idx} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[80%] rounded-xl px-2.5 py-1.5 text-[9.5px] leading-relaxed ${
                m.sender === "user" ? "bg-purple-600 text-white rounded-br-none" : "bg-slate-900 text-slate-300 rounded-bl-none border border-slate-800"
              }`}>
                {m.text}
              </div>
            </div>
          ))}
          {typing && (
            <div className="flex justify-start">
              <div className="bg-slate-900 text-slate-500 border border-slate-800 rounded-xl rounded-bl-none px-2.5 py-1.5 text-[9.5px] animate-pulse">
                Agent is searching indexes...
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSend} className="flex gap-1.5 border-t border-slate-900 pt-2 shrink-0">
          <input
            type="text"
            placeholder="Type 'pricing' or 'return'..."
            value={input}
            onChange={e => setInput(e.target.value)}
            className="flex-grow bg-slate-900 border border-slate-800 rounded-xl px-3 py-1 text-[9.5px] outline-none text-white focus:border-purple-500"
            disabled={typing}
          />
          <button type="submit" className="bg-purple-600 hover:bg-purple-500 text-white p-1 rounded-xl w-7 h-7 flex items-center justify-center transition-colors">
            <Send size={12} />
          </button>
        </form>
      </div>
    </div>
  );
};

export const BpaSimulator = () => {
  const { toast } = useToast();
  const [running, setRunning] = useState(false);
  const [nodes, setNodes] = useState([
    { name: "Trigger Hook", state: "Waiting" },
    { name: "Transform JSON", state: "Waiting" },
    { name: "Slack Dispatch", state: "Waiting" }
  ]);

  const handleExecute = () => {
    setRunning(true);
    setNodes(nodes.map(n => ({ ...n, state: "Pending" })));
    
    // Step 1
    setTimeout(() => {
      setNodes(prev => [
        { name: "Trigger Hook", state: "Success" },
        { name: "Transform JSON", state: "Pending" },
        { name: "Slack Dispatch", state: "Waiting" }
      ]);
    }, 800);

    // Step 2
    setTimeout(() => {
      setNodes(prev => [
        { name: "Trigger Hook", state: "Success" },
        { name: "Transform JSON", state: "Success" },
        { name: "Slack Dispatch", state: "Pending" }
      ]);
    }, 1600);

    // Step 3
    setTimeout(() => {
      setNodes(prev => [
        { name: "Trigger Hook", state: "Success" },
        { name: "Transform JSON", state: "Success" },
        { name: "Slack Dispatch", state: "Success" }
      ]);
      setRunning(false);
      toast({
        title: "Workflow Complete! 🎉",
        description: "Payload synced. Slack alert dispatched successfully."
      });
    }, 2400);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 flex flex-col justify-between h-[360px] text-xs text-slate-300">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
        <span className="font-bold text-[10px] text-indigo-400 tracking-widest uppercase">Workflow Node execution Desk</span>
        <button
          onClick={handleExecute}
          disabled={running}
          className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 border border-indigo-500/20 transition-all flex items-center gap-1 disabled:opacity-50"
        >
          <Play size={10} /> {running ? "Running..." : "Test Flow"}
        </button>
      </div>

      <div className="flex-grow flex flex-col justify-center items-center gap-2 mb-3">
        {nodes.map((node, i) => (
          <React.Fragment key={node.name}>
            <div className={`w-full max-w-[180px] bg-slate-950 border rounded-lg p-2 flex items-center justify-between transition-all ${
              node.state === "Success" 
                ? "border-emerald-500/40 bg-emerald-500/5 text-white" 
                : node.state === "Pending"
                ? "border-indigo-500/40 bg-indigo-500/5 text-white animate-pulse"
                : "border-slate-850 text-slate-500"
            }`}>
              <span className="font-semibold text-[10px]">{node.name}</span>
              <span className="text-[8px] font-bold uppercase">
                {node.state === "Success" ? "✅ Done" : node.state === "Pending" ? "⚙️ RUN" : "💤 WAIT"}
              </span>
            </div>
            {i < nodes.length - 1 && (
              <div className={`h-3 w-0.5 transition-colors ${
                nodes[i].state === "Success" ? "bg-emerald-500" : "bg-slate-800"
              }`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export const AnalyticsSimulator = () => {
  const { toast } = useToast();
  const [forecast, setForecast] = useState(false);

  const handleToggleForecast = () => {
    setForecast(!forecast);
    toast({
      title: !forecast ? "Forecast Model Loaded" : "Standard view active",
      description: !forecast ? "Algorithmic forecasting (Scikit) plotted." : "Historical aggregates shown."
    });
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 flex flex-col justify-between h-[360px] text-xs text-slate-300">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
        <span className="font-bold text-[10px] text-blue-400 tracking-widest uppercase">Prophet Predictive Analytics Desk</span>
        <button
          onClick={handleToggleForecast}
          className={`text-[9px] font-bold px-2 py-0.5 rounded border transition-all ${
            forecast ? "bg-blue-500/10 text-blue-400 border-blue-500/20" : "bg-slate-950 text-slate-500 border-slate-850"
          }`}
        >
          {forecast ? "DISABLE FORECAST" : "PREDICT DEMAND"}
        </button>
      </div>

      <div className="flex-grow flex flex-col justify-between">
        {/* Simple SVG Chart */}
        <div className="bg-slate-950 border border-slate-850 rounded-lg p-2 flex items-center justify-center h-[170px] relative">
          <svg className="w-full h-full text-blue-500" viewBox="0 0 100 50">
            {/* Grid lines */}
            <line x1="0" y1="10" x2="100" y2="10" stroke="#1f2937" strokeWidth="0.3" />
            <line x1="0" y1="25" x2="100" y2="25" stroke="#1f2937" strokeWidth="0.3" />
            <line x1="0" y1="40" x2="100" y2="40" stroke="#1f2937" strokeWidth="0.3" />
            
            {/* Historical curve */}
            <path
              d="M 5,45 Q 25,20 45,30 T 75,15"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="1.5"
            />
            {/* Forecasting dotted curve */}
            {forecast && (
              <path
                d="M 75,15 Q 85,5 95,8"
                fill="none"
                stroke="#60a5fa"
                strokeWidth="1.5"
                strokeDasharray="2,2"
              />
            )}
            {/* Dots */}
            <circle cx="75" cy="15" r="1.5" fill="#3b82f6" />
            {forecast && <circle cx="95" cy="8" r="1.5" fill="#60a5fa" />}
          </svg>
          <span className="absolute bottom-2 left-2 text-[8px] text-slate-500 font-mono">Q1-Q4 Actuals</span>
          {forecast && <span className="absolute top-2 right-2 text-[8px] text-blue-400 font-mono animate-pulse">Predicted Forecast</span>}
        </div>

        <div className="border-t border-slate-800 pt-3 mt-3 flex items-center justify-between text-[10px] text-slate-400">
          <div>
            <span>Model: </span>
            <span className="font-bold text-white">Scikit-learn Prophet</span>
          </div>
          <div>
            <span>Confidence: </span>
            <span className="text-emerald-400 font-bold">95.4%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const OcrSimulator = () => {
  const { toast } = useToast();
  const [parsing, setParsing] = useState(false);
  const [data, setData] = useState<{ invoiceNum?: string; date?: string; total?: string } | null>(null);

  const handleParse = () => {
    setParsing(true);
    setData(null);
    setTimeout(() => {
      setParsing(false);
      setData({
        invoiceNum: "INV-2026-9041",
        date: "28 May 2026",
        total: "₹1,85,000"
      });
      toast({
        title: "OCR Parse Complete! 📑",
        description: "Extracted structure parameters from raw invoice PNG file."
      });
    }, 1600);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 flex flex-col justify-between h-[360px] text-xs text-slate-300">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
        <span className="font-bold text-[10px] text-cyan-400 tracking-widest uppercase">AI OCR Invoice Reader</span>
        <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">AWS Textract Sync</span>
      </div>

      <div className="grid grid-cols-2 gap-3 flex-grow">
        {/* Invoice block */}
        <div className="bg-slate-950 border border-slate-850 rounded-lg p-2 flex flex-col justify-between relative overflow-hidden">
          <div className="space-y-1">
            <span className="text-[8px] font-bold text-slate-500 uppercase tracking-wider block">Raw Image Payload</span>
            <div className="bg-slate-900 border border-slate-800/80 rounded p-1.5 font-mono text-[7px] text-slate-500 leading-tight space-y-1 h-[100px] overflow-y-auto">
              <p className="text-white border-b border-slate-800 pb-0.5">--- TAX INVOICE ---</p>
              <p>Invoice No: INV-2026-9041</p>
              <p>Date: 28 May 2026</p>
              <p className="text-white pt-1">Client: KaizenSpark</p>
              <p className="text-white border-t border-slate-800 pt-1 mt-1 font-bold">TOTAL AMOUNT: INR 1,85,000</p>
            </div>
          </div>
          <button
            onClick={handleParse}
            disabled={parsing}
            className="w-full py-1 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white font-bold rounded text-[9px] transition-colors"
          >
            {parsing ? "Parsing OCR Fields..." : "Analyze Image"}
          </button>
        </div>

        {/* OCR Parsed JSON Data output */}
        <div className="bg-slate-950 border border-slate-850 rounded-lg p-2.5 flex flex-col justify-between h-[135px]">
          <div>
            <span className="text-[8px] font-bold text-slate-500 uppercase tracking-wider block border-b border-slate-900 pb-1 mb-1">Parsed JSON data</span>
            {parsing ? (
              <div className="space-y-1.5 mt-3 animate-pulse">
                <div className="h-2.5 w-full bg-slate-900 rounded" />
                <div className="h-2.5 w-2/3 bg-slate-900 rounded" />
                <div className="h-2.5 w-3/4 bg-slate-900 rounded" />
              </div>
            ) : data ? (
              <div className="space-y-1.5 font-mono text-[8px] text-cyan-400 mt-2">
                <p>{"{"}</p>
                <p className="pl-3">"invoiceNum": <b className="text-white">"{data.invoiceNum}"</b>,</p>
                <p className="pl-3">"date": <b className="text-white">"{data.date}"</b>,</p>
                <p className="pl-3">"total": <b className="text-white">"{data.total}"</b></p>
                <p>{"}"}</p>
              </div>
            ) : (
              <div className="text-center text-slate-600 text-[9px] mt-6">
                Click Analyze Image to start.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const WorkflowSimulator = () => {
  const { toast } = useToast();
  const [triggering, setTriggering] = useState(false);

  const handleTrigger = () => {
    setTriggering(true);
    setTimeout(() => {
      setTriggering(false);
      toast({
        title: "Webhook Fired! 🚀",
        description: "Payload sent to server. Webhook callback completed with Status Code 200 OK."
      });
    }, 1500);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 flex flex-col justify-between h-[360px] text-xs text-slate-300">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
        <span className="font-bold text-[10px] text-pink-400 tracking-widest uppercase">REST Webhook listener sandbox</span>
        <span className="text-[10px] px-2 py-0.5 rounded bg-pink-500/10 text-pink-400 border border-pink-500/20">Trigger Queue</span>
      </div>

      <div className="bg-slate-950 border border-slate-850 rounded-lg p-3.5 flex-grow flex flex-col justify-between gap-3">
        <div>
          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Webhook Endpoint</span>
          <div className="bg-slate-900 border border-slate-800 rounded p-2 font-mono text-[9px] text-white truncate select-all">
            https://api.kaizenspark.tech/v1/webhooks/listener
          </div>
        </div>

        <div className="space-y-1 mt-2">
          <span className="text-[8px] font-bold text-slate-500 uppercase tracking-wider block">POST Payload Body</span>
          <pre className="bg-slate-900/60 border border-slate-850 rounded p-2 font-mono text-[8px] text-slate-400 h-[60px] overflow-y-auto">
            {`{\n  "event": "client.onboarded",\n  "timestamp": 1774020114,\n  "nodeId": "CHN-02"\n}`}
          </pre>
        </div>

        <button
          onClick={handleTrigger}
          disabled={triggering}
          className="w-full py-2 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 disabled:opacity-50 text-white font-bold rounded text-[10px] transition-all flex items-center justify-center gap-1 cursor-pointer"
        >
          {triggering ? <RefreshCw size={12} className="animate-spin" /> : <Play size={12} />}
          {triggering ? "Dispatching Payload..." : "Simulate Webhook Trigger"}
        </button>
      </div>
    </div>
  );
};
