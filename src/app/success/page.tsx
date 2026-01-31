"use client";
import { motion } from "framer-motion";
import { Check, Download, Share2 } from "lucide-react";
import Link from "next/link";

export default function OrderSuccess() {
  return (
    <main className="bg-[#004b23] min-h-screen pt-24 pb-20 px-4 md:px-12 text-[#121212] font-sans flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full bg-[#f4e285] border border-black/10 p-8 md:p-16 relative shadow-2xl overflow-hidden"
      >
        {/* Viewfinder Corners for that "Specimen" look */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#B38B3F]/20" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#B38B3F]/20" />

        <header className="text-center space-y-6">
          <div className="w-16 h-16 bg-[#B38B3F] rounded-full mx-auto flex items-center justify-center text-white">
            <Check size={32} strokeWidth={3} />
          </div>
          <div className="space-y-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#B38B3F] font-bold">Acquisition Confirmed</p>
            <h1 className="text-4xl md:text-5xl font-serif italic tracking-tighter lowercase">Manifest 008-26</h1>
          </div>
        </header>

        <section className="mt-12 pt-12 border-t border-black/5 space-y-8">
          <div className="grid grid-cols-2 gap-8 font-mono text-[10px] uppercase tracking-widest text-zinc-400">
            <div>
              <p className="text-zinc-500 mb-1 font-bold">Recipient</p>
              <p className="text-[#121212]">Adrian Chen</p>
            </div>
            <div className="text-right">
              <p className="text-zinc-500 mb-1 font-bold">Shipment Node</p>
              <p className="text-[#121212]">Neo-Tokyo / JP</p>
            </div>
          </div>

          <div className="bg-[#F9F9F7] p-6 space-y-4">
            <p className="text-[9px] uppercase tracking-widest text-[#B38B3F] font-bold">Specimen Reserved</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-serif italic text-zinc-800">Wild Lily Composition</span>
              <span className="font-mono text-sm">₹4,200</span>
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <p className="text-[11px] leading-relaxed text-zinc-500 italic text-center px-6">
              "Your botanical specimen has been logged into our archive and is currently being conditioned for transit. A curator will notify you upon dispatch."
            </p>
          </div>
        </section>

        <footer className="mt-12 flex flex-col md:flex-row gap-4">
          <button className="flex-1 border border-black py-4 text-[10px] uppercase tracking-widest font-bold flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-all">
            <Download size={14} /> Download Certificate
          </button>
          <Link href="/" className="flex-1 bg-[#B38B3F] text-white py-4 text-[10px] uppercase tracking-widest font-bold text-center flex items-center justify-center gap-2 hover:bg-[#121212] transition-colors">
            Return to Archive
          </Link>
        </footer>
      </motion.div>
    </main>
  );
}