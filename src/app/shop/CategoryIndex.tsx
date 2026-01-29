'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { categories } from '@/dummy/dummies'
import Link from 'next/link'




export default function BotanicalIndex() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e:React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="bg-black py-20 md:py-40 min-h-screen px-6 md:px-20 relative lg:cursor-none"
    >
      <div className="flex flex-col border-t border-zinc-800">
        {categories.slice(0, 15).map((category, i) => (
          <Link key={category.name} href={`/category/${category.name.toLowerCase()}`}>
          <div
          
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
            className="group py-8 md:py-10 border-b border-zinc-900 flex flex-col md:flex-row justify-between items-start md:items-center relative z-10 gap-6"
          >
            {/* Mobile Image: Visible only on small screens */}
            <div className="md:hidden w-full aspect-video overflow-hidden rounded-lg border border-white/10">
              <img 
                src={category.image} 
                className="w-full h-full object-cover grayscale-[0.2]" 
                alt={category.name} 
              />
            </div>

            <div className="flex items-baseline gap-4">
              <span className="text-[10px] font-mono text-zinc-600">0{i + 1}</span>
              <h2 className="text-3xl md:text-8xl font-serif text-zinc-400 group-hover:text-white transition-colors duration-500 uppercase tracking-tighter">
                {category.name}
              </h2>
            </div>

            <span className="hidden md:block text-[#e9c46a] font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity tracking-widest uppercase">
              View {category.name} —&gt;
            </span>
          </div>
          </Link>
        ))}
      </div>

      {/* Floating Image Portal: Visible only on Desktop (md and up) */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: mousePos.x - 150,
              y: mousePos.y - 200 
            }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: 'spring', damping: 20, stiffness: 150, mass: 0.5 }}
            className="fixed top-0 left-0 pointer-events-none z-50 w-75 h-100 rounded-2xl overflow-hidden border-4 border-[#e9c46a]/20 hidden md:block"
          >
            <img 
              src={categories[hoveredIndex].image} 
              className="w-full h-full object-cover"
              alt="Preview"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}