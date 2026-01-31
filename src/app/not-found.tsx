"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="bg-[#EFEEEC] min-h-screen flex flex-col items-center justify-center px-6 text-[#121212] font-sans">
      
      {/* Background Decal */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[25vw] font-serif italic text-black/2 leading-none select-none">
          void
        </span>
      </div>

      <div className="relative z-10 max-w-xl w-full text-center space-y-12">
        
        {/* The "Error" Mark */}
        <header className="space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#B38B3F] font-bold"
          >
            Error Code // 404
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-serif italic tracking-tighter lowercase leading-tight">
            This specimen does <br />
            not exist<span className="text-[#B38B3F]">.</span>
          </h1>
          
          <p className="text-sm text-zinc-500 font-light max-w-xs mx-auto leading-relaxed">
            The record you are looking for has been removed from the archive or relocated to a different series.
          </p>
        </header>

        {/* Action Options */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-4">
          <Link 
            href="/" 
            className="w-full md:w-auto bg-[#121212] text-white px-10 py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#B38B3F] transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft size={14} /> Return to Home
          </Link>
          
          <Link 
            href="/shop" 
            className="w-full md:w-auto border border-black/10 px-10 py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white transition-all flex items-center justify-center gap-2"
          >
            Browse Archive
          </Link>
        </div>

        {/* Search Suggestion Footnote */}
        <footer className="pt-12 border-t border-black/5">
          <p className="font-mono text-[9px] uppercase tracking-widest text-zinc-400">
            Systems Nominal // Search the Index for alternatives
          </p>
        </footer>

      </div>
    </main>
  );
}