"use client";
import { ShieldCheck, Lock, CreditCard } from "lucide-react";
import Link from "next/link";

// * TODO :  form validation and cart sync via context

export default function PaymentPage() {
  return (
    <main className="bg-[#22223b] min-h-screen pt-32 pb-20 px-4 text-[#121212] font-sans">
      <div className="max-w-xl mx-auto space-y-10">
        
        <header className="text-center space-y-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#B38B3F] font-bold">Secure Gateway</span>
          <h1 className="text-4xl text-zinc-100 font-serif italic lowercase">Finalize Acquisition</h1>
        </header>

        <div className="bg-[#f2e9e4] p-8 md:p-10 border border-black/5 shadow-sm space-y-8 rounded-2xl">
          {/* Order Brief */}
          <div className="flex justify-between items-end border-b border-black/5 pb-6">
            <span className="text-[10px] uppercase tracking-widest text-zinc-800 font-bold">Total Amount</span>
            <span className="text-2xl font-mono">₹13,200</span>
          </div>

          {/* Payment Fields (Mockup for Stripe/Razorpay) */}
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-widest font-bold text-zinc-900">Card Information</label>
              <div className="p-4 border border-black/10 flex items-center gap-3 bg-[#F9F9F7]">
                <CreditCard size={16} className="text-zinc-400" />
                <input type="text" placeholder="0000 0000 0000 0000" className="bg-transparent w-full outline-none text-sm font-mono" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-widest font-bold text-zinc-900">Expiry</label>
                <input type="text" placeholder="MM/YY" className="p-4 border border-black/10 bg-[#F9F9F7] w-full outline-none text-sm font-mono" />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-widest font-bold text-zinc-900">CVC</label>
                <input type="text" placeholder="***" className="p-4 border border-black/10 bg-[#F9F9F7] w-full outline-none text-sm font-mono" />
              </div>
            </div>
          </div>

          <Link href={'/success'}>
          <button className="w-full bg-[#121212] text-white py-5 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#B38B3F] transition-all flex items-center justify-center gap-3">
            <Lock size={12} /> Authorize Transaction
          </button>
          </Link>

          <div className="pt-4 flex items-center justify-center gap-6 opacity-40">
            <ShieldCheck size={20} />
            <span className="text-[8px] uppercase tracking-widest max-w-37.5 leading-tight text-center">
              Encrypted by Atelier Security Protocols
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}