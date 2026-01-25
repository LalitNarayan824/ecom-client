"use client"
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <>
    

    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-[#0f1f1c] text-white/70"
    >
      {/* Top Grid */}
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-14 border-b border-white/10 border-y-2">

        {/* Explore */}
        <div className="flex flex-col gap-4 ">
          <h4 className="text-lg font-serif text-white">Explore</h4>
          {["Home", "About Us", "Shop", "Shop Details"].map(link => (
            <span
              key={link}
              className="text-sm hover:text-white transition cursor-pointer"
            >
              {link}
            </span>
          ))}
        </div>

        {/* Support */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-serif text-white">Support</h4>
          {["FAQ", "Contact", "404"].map(link => (
            <span
              key={link}
              className="text-sm hover:text-white transition cursor-pointer"
            >
              {link}
            </span>
          ))}
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-2 gap-6 ">
          {["F", "X", "▶", "in"].map(icon => (
            <div
              key={icon}
              className="h-14 w-14 rounded-full border border-white/15 flex items-center justify-center hover:border-white transition cursor-pointer"
            >
              <span className="text-sm">{icon}</span>
            </div>
          ))}
        </div>

        {/* Spacer column (matches reference balance) */}
        <div className="hidden md:block" />
      </div>

      {/* Bottom Info Grid */}
      <div className="mx-auto max-w-7xl px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10">

        {/* Visit Us */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-serif text-white">Visit Us</h4>
          <p className="text-sm leading-relaxed max-w-xs">
            Aurora Valley, Westford Heights,<br />
            Greenlake County, 48219
          </p>
          <button className="w-fit bg-[#8b4b35] px-5 py-2 text-sm text-white hover:opacity-90 transition">
            Get Directions →
          </button>
        </div>

        {/* Opening Hours */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-serif text-white">Opening Hours</h4>
          <p className="text-sm">
            <span className="text-white">Mon – Fri:</span> 10am – 7pm
          </p>
          <p className="text-sm">
            <span className="text-white">Saturday:</span> 10am – 2pm
          </p>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-serif text-white">Get In Touch</h4>
          <p className="text-sm">
            <span className="text-white">+(123) 456 789 00</span><br />
            <span className="text-white/50">Phone number</span>
          </p>
          <p className="text-sm">
            <span className="text-white">flora@gmail.com</span><br />
            <span className="text-white/50">Email address</span>
          </p>
        </div>
      </div>

      {/* Credit */}
      <div className="py-6 flex items-center justify-center">
        <span className="text-xs text-white/40">
          © 2025 Flora — Designed by Lalit
        </span>
      </div>
    </motion.footer>
    </>
  );
}
