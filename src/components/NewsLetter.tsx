"use client";
import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full bg-[#4b1200] border-t border-white/10"
    >
      <div className="mx-auto max-w-6xl px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Text */}
        <div className="flex flex-col gap-2 max-w-md">
          <span className="text-lg font-serif text-white">
            Newsletter
          </span>
          <span className="text-sm text-white/60">
            Exclusive updates and special offers.
          </span>
        </div>

        {/* Input + Button */}
        <div className="flex w-full md:w-auto items-center gap-3">
          <input
            type="email"
            placeholder="Email address"
            className="w-full md:w-64 bg-transparent border-b border-white/30 px-1 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white transition"
          />

          <button className="text-sm text-white/80 hover:text-white transition underline underline-offset-4 whitespace-nowrap">
            Subscribe
          </button>
        </div>

      </div>
    </motion.section>
  );
}
