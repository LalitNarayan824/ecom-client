'use client'

import { motion } from 'framer-motion'
import { MapPin, Send, Mail, Phone, ArrowDown } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="bg-[#1b2b22] text-[#f4f1ea]">
      
      {/* --- SECTION 1: FULL SCREEN HERO --- */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/flowers4.jpg" 
            alt="Floral Studio" 
            className="h-full w-full object-cover brightness-[0.4]"
          />
        </div>
        
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#e9c46a] uppercase tracking-[0.5em] text-xs md:text-sm mb-4 font-bold"
          >
            Get In Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-9xl font-serif tracking-tighter"
          >
            Contact <span className="italic text-[#d9a5b3]">Flora</span>
          </motion.h1>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10"
          >
            <ArrowDown className="text-[#e9c46a] h-8 w-8 opacity-50" />
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 2: CONTACT DETAILS --- */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left: Reach Us */}
          <div className="space-y-16">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-serif">Reach Our <br /> <span className="italic opacity-60">Studio</span></h2>
              <p className="text-zinc-400 max-w-md text-lg leading-relaxed">
                Whether you’re looking for a bespoke bouquet or planning a grand event, we’re here to bring your floral vision to life.
              </p>
            </div>

            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#e9c46a] group-hover:text-black transition-all">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-[#e9c46a] uppercase tracking-widest text-xs font-bold mb-2">Location</h4>
                  <p className="text-xl">Botanical Lane, Willow, Greenlake 73001</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#d9a5b3] group-hover:text-black transition-all">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-[#d9a5b3] uppercase tracking-widest text-xs font-bold mb-2">Email</h4>
                  <p className="text-xl">hello@flora.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white opacity-40 uppercase tracking-widest text-xs font-bold mb-2">Phone</h4>
                  <p className="text-xl">+(123) 456 789 00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Clean Minimal Form */}
          <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-sm">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-[#e9c46a] font-bold">First Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-[#e9c46a] transition-all" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-[#e9c46a] font-bold">Last Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-[#e9c46a] transition-all" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#e9c46a] font-bold">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-[#e9c46a] transition-all" placeholder="jane@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#e9c46a] font-bold">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-[#e9c46a] transition-all resize-none" placeholder="Tell us about your floral inspiration..." />
              </div>

              <button className="w-full bg-[#e9c46a] py-6 rounded-2xl text-[#1b2b22] font-bold uppercase tracking-[0.2em] text-sm hover:bg-[#d9a5b3] transition-all duration-500 flex items-center justify-center gap-3">
                Send Message <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

        </div>
      </section>
    </main>
  )
}