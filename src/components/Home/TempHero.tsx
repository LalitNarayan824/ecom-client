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

  // The image container slightly shrinks as you scroll, creating a "tunnel" effect
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="relative h-[110vh] w-full bg-[#08100b] overflow-hidden flex items-center justify-center">
      
      {/* 1. THE FLOATING GALLERY FRAME */}
      <motion.div 
        style={{ scale, opacity }}
        className="relative w-[90%] h-[70vh] md:w-[75%] md:h-[80vh] overflow-hidden rounded-[2px] z-0 shadow-2xl"
      >
        <Image
          src="/pexels1.jpg" // High saturation, rich greens/reds
          alt="Botanical Art"
          fill
          priority
          className="object-cover contrast-[1.1] brightness-[0.8] scale-110"
        />
        {/* Deepening the bottom left of the image for text clarity */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#08100b]/80 via-transparent to-transparent" />
      </motion.div>

      {/* 2. THE WHISPERED TEXT - Bottom Left */}
      <div className="absolute inset-0 z-10 flex items-end justify-start p-8 md:p-24 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          {/* Montserrat for utility */}
          <span className="text-[9px] uppercase tracking-[0.8em] text-[#b38b3f] mb-8 block">
            The Studio Archive
          </span>
          
          {/* Cormorant Garamond for the soul of the site */}
          <h1 className="font-serif text-[10vw] md:text-[7vw] leading-[0.9] text-[#f4f1ea] tracking-tight">
            Beautiful<span className="text-[#b38b3f] opacity-60">.</span> <br />
            <span className="italic font-light ml-12 md:ml-24">Timeless.</span>
          </h1>
        </motion.div>
      </div>

      {/* 3. SURPRISE DETAIL: THE VERTICAL PROGRESS */}
      <div className="absolute right-8 md:right-16 h-32 w-px bg-white/5 flex items-start justify-center">
        <motion.div 
          style={{ height: '100%', scaleY: scrollYProgress, originY: 0 }}
          className="w-px bg-[#b38b3f]"
        />
        <span className="absolute -bottom-10 text-[8px] uppercase tracking-widest text-zinc-700 -rotate-90">
          Scroll
        </span>
      </div>
    </section>
  )
}