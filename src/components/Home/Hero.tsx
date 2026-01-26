'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Subtle parallax (very important: keep it small)
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05])

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0"
      >
        <Image
          src="/pexels1.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Overlay content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-white text-5xl  tracking-tight font-serif">
          Calm. Natual. Timeless.
        </h1>
      </div>
    </section>
  )
}
