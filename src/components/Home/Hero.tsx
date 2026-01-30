'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function SurpriseHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Smooth scaling for the container
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  
  // Parallax for the internal image to give it depth
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section ref={ref} className="relative h-[100vh] w-full bg-[#08100b] overflow-hidden flex items-center justify-center">
      
      {/* 1. THE FLOATING GALLERY FRAME */}
      <motion.div 
        style={{ scale, opacity }}
        className="relative w-[92%] h-[65vh] md:w-[75%] md:h-[80vh] overflow-hidden rounded-[1px] z-0 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
      >
        <motion.div style={{ y: imgY }} className="relative w-full h-[120%] -top-[10%]">
          <Image
            src="/pexels1.jpg" 
            alt="Botanical Art"
            fill
            priority
            className="object-cover contrast-[1.1] brightness-[0.7] md:brightness-[0.8]"
          />
        </motion.div>
        
        {/* Responsive Gradient: Stronger on mobile for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08100b] via-[#08100b]/20 to-transparent md:bg-gradient-to-tr" />
      </motion.div>

      {/* 2. THE WHISPERED TEXT - Responsive Positioning */}
      <div className="absolute inset-0 z-10 flex items-end justify-start p-6 pb-24 md:p-24 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-4xl"
        >
          {/* Utility Label: Smaller on mobile */}
          <span className="text-[7px] md:text-[9px] uppercase tracking-[0.6em] md:tracking-[0.8em] text-[#b38b3f] mb-4 md:mb-8 block font-mono">
            REF: 00-143C // STUDIO ARCHIVE
          </span>
          
          {/* Headline: Fluid scaling with clamp to prevent extreme sizes */}
          <h1 className="font-sans text-[14vw] md:text-[8vw] leading-[0.85] text-[#f4f1ea] tracking-tighter">
            Beautiful<span className="text-[#b38b3f] opacity-60">.</span> <br />
            <motion.span 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.5, duration: 1.5 }}
               className="italic font-light block ml-[10%] md:ml-24"
            >
              Timeless.
            </motion.span>
          </h1>
        </motion.div>
      </div>

      {/* 3. VERTICAL PROGRESS - Hidden on very small screens for cleanliness */}
      <div className="hidden xs:flex absolute right-6 md:right-16 h-24 md:h-32 w-px bg-white/5 items-start justify-center">
        <motion.div 
          style={{ height: '100%', scaleY: scrollYProgress, originY: 0 }}
          className="w-px bg-[#b38b3f]"
        />
        <span className="absolute -bottom-12 text-[7px] md:text-[8px] uppercase tracking-widest text-zinc-500 -rotate-90 whitespace-nowrap">
          Keep Scrolling
        </span>
      </div>

      {/* Decorative Viewfinder (Digital Atelier DNA) */}
      <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-[#b38b3f]/30 hidden md:block" />
      <div className="absolute top-8 right-8 w-4 h-4 border-t border-r border-[#b38b3f]/30 hidden md:block" />
    </section>
  )
}