'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Smooth, subtle parallax
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-[#1b2b22]">
      {/* Background Image Layer */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/pexels1.jpg"
          alt="Artisanal Floral Arrangement"
          fill
          priority
          className="object-cover brightness-[0.5] contrast-[1.1]"
        />
      </motion.div>

      {/* Subtle Vignette Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-transparent to-[#1b2b22]/80" />

      {/* Main Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ opacity }}
        >
          <span className="mb-6 block text-[10px] uppercase tracking-[0.6em] text-[#e9c46a] font-bold">
            Established 2022
          </span>
          
          <h1 className="max-w-5xl font-serif text-6xl md:text-7xl leading-[0.85] text-white tracking-tighter">
            Beautiful<span className="text-[#d9a5b3]">.</span><br />
            Natural<span className="text-[#e9c46a]">.</span><br />
            <span className="italic font-light opacity-90">Timeless.</span>
          </h1>

          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
            <button className="group flex items-center gap-3 border border-white/20 bg-white/10 px-8 py-4 text-xs uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all hover:bg-white hover:text-black">
              Explore Collection
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            
            <p className="max-w-[240px] text-left text-[11px] leading-relaxed text-white/50 uppercase tracking-widest">
              Hand-picked flora for the <br /> modern sanctuary.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Decorative Element (Scroll Hint) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="h-[60px] w-[1px] bg-gradient-to-b from-[#e9c46a] to-transparent" />
          <span className="text-[9px] uppercase tracking-[0.4em] text-[#e9c46a]/60">Scroll</span>
        </div>
      </motion.div>
    </section>
  )
}