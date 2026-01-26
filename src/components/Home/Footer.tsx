"use client"
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-[#080808] text-zinc-500 border-t border-zinc-900"
    >
      {/* Top Grid */}
      <div className="mx-auto max-w-7xl px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-14 border-b border-zinc-900">

        {/* Explore */}
        <div className="flex flex-col gap-5">
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-100">Explore</h4>
          {["Home", "About Us", "Shop", "Shop Details"].map(link => (
            <span
              key={link}
              className="text-sm hover:text-white transition-colors cursor-pointer"
            >
              {link}
            </span>
          ))}
        </div>

        {/* Support */}
        <div className="flex flex-col gap-5">
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-100">Support</h4>
          {["FAQ", "Contact", "404"].map(link => (
            <span
              key={link}
              className="text-sm hover:text-white transition-colors cursor-pointer"
            >
              {link}
            </span>
          ))}
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-2 gap-3 w-fit">
          {["F", "X", "▶", "in"].map(icon => (
            <div
              key={icon}
              className="h-12 w-12 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-zinc-100 hover:text-black transition-all duration-300 cursor-pointer"
            >
              <span className="text-sm font-medium">{icon}</span>
            </div>
          ))}
        </div>

        <div className="hidden md:block" />
      </div>

      {/* Bottom Info Grid */}
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-zinc-900">

        {/* Visit Us */}
        <div className="flex flex-col gap-6">
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-100">Visit Us</h4>
          <p className="text-sm leading-7 text-zinc-500">
            Aurora Valley, Westford Heights,<br />
            Greenlake County, 48219
          </p>
          <button className="w-fit border border-zinc-700 px-7 py-2.5 text-[10px] uppercase tracking-[0.3em] text-zinc-100 hover:bg-zinc-100 hover:text-black transition-all">
            Get Directions →
          </button>
        </div>

        {/* Opening Hours */}
        <div className="flex flex-col gap-6">
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-100">Opening Hours</h4>
          <div className="space-y-3">
            <p className="text-sm flex justify-between max-w-55">
              <span className="text-zinc-600">Mon – Fri</span> 
              <span className="text-zinc-300">10am – 7pm</span>
            </p>
            <p className="text-sm flex justify-between max-w-55">
              <span className="text-zinc-600">Saturday</span> 
              <span className="text-zinc-300">10am – 2pm</span>
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-6">
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-100">Get In Touch</h4>
          <div className="space-y-5">
            <div>
              <p className="text-sm text-zinc-200 tracking-wide">+(123) 456 789 00</p>
              <span className="text-[10px] uppercase text-zinc-700 font-bold">Phone</span>
            </div>
            <div>
              <p className="text-sm text-zinc-200 tracking-wide">flora@gmail.com</p>
              <span className="text-[10px] uppercase text-zinc-700 font-bold">Email</span>
            </div>
          </div>
        </div>
      </div>

      {/* Credit */}
      <div className="py-12 flex items-center justify-center">
        <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-800">
          © 2026 Flora — Designed by Lalit
        </span>
      </div>
    </motion.footer>
  );
}