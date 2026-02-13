"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// w-[92%] h-[65vh] md:w-[75%] md:h-[80vh]

export default function SurpriseHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Smooth scaling for the container
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Parallax for the internal image to give it depth
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full bg-[#000000] overflow-hidden flex items-center justify-center"
    >
      {/* 1. THE FLOATING GALLERY FRAME */}
      <motion.div
        style={{ scale, opacity }}
        className="relative w-full h-screen overflow-hidden rounded-[1px] z-0 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
      >
        <motion.div
          style={{ y: imgY }}
          className="relative w-full h-[120%] -top-[11%]"
        >
          {/* <div className="absolute inset-0 bg-emerald-900/20 mix-blend-multiply" /> */}
          
          <Image
            src="/pexels1.jpg"
            alt="Botanical Art"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Responsive Gradient: Stronger on mobile for text legibility */}
        <div className="absolute inset-0 bg-linear-to-t from-[#08100b] via-[#08100b]/20 to-transparent md:bg-linear-to-tr" />
      </motion.div>

      {/* 2. THE WHISPERED TEXT - Responsive Positioning */}
      <div className="absolute inset-0 z-10 flex items-end justify-start p-6 pb-24 md:p-24 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-4xl"
        >
          <p className=" ml-25 font-serif text-2xl">Florea makes it</p>
          {/* Headline: Fluid scaling with clamp to prevent extreme sizes */}
          <Image
            src={"/hero-text5.png"}
            alt="hero-text"
            width={1200}
            height={400}
            style={{ width: "clamp(45vw, 1000px)", height: "auto" }}
            className="z-11 pointer-events-auto block"
            priority
          />
        </motion.div>
      </div>

      {/* 3. VERTICAL PROGRESS - Hidden on very small screens for cleanliness */}
      <div className="hidden xs:flex absolute right-6 md:right-16 h-24 md:h-32 w-px bg-white/5 items-start justify-center">
        <motion.div
          style={{ height: "100%", scaleY: scrollYProgress, originY: 0 }}
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
  );
}
