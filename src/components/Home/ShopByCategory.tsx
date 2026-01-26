"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { categories } from "@/dummy/dummies"

const ShopByCategory = () => {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section className="bg-[#080808] py-24 text-zinc-100">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Simplified Header */}
        <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-900 pb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">
              Shop by <span className="font-serif italic opacity-60">Category</span>
            </h2>
          </div>
          <p className="mt-4 max-w-75 text-[13px] leading-relaxed text-zinc-500 uppercase tracking-widest">
            Artisanal flora curated for the <br /> modern living space.
          </p>
        </header>

        {/* ================= DESKTOP ================= */}
        <div className="relative hidden xl:grid grid-cols-[1fr_450px] gap-20">
          
          {/* List - No sliding text, just soft opacity */}
          <ul className="divide-y divide-zinc-900">
            {categories.map((cat, i) => (
              <li
                key={cat.name}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="group relative cursor-pointer py-8 transition-opacity duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-6">
                    <span className="text-[10px] font-medium text-zinc-700 uppercase tracking-widest">
                      ({i + 1})
                    </span>
                    <h3 className={`text-3xl font-light transition-all duration-500 ${active === i ? 'text-white' : 'text-zinc-600'}`}>
                      {cat.name}
                    </h3>
                  </div>
                  
                  {/* Subtle Indicator */}
                  <div className={`h-1 w-1 rounded-full bg-white transition-opacity duration-500 ${active === i ? 'opacity-100' : 'opacity-0'}`} />
                </div>
              </li>
            ))}
          </ul>

          {/* Fixed Preview - Less "flashy" transition */}
          <div className="relative h-[550px] w-full overflow-hidden bg-zinc-900 rounded-sm">
            <AnimatePresence mode="wait">
              {active !== null ? (
                <motion.div
                  key={active}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={categories[active].image}
                    alt={categories[active].name}
                    fill
                    className="object-cover grayscale-[0.3] contrast-[1.1]"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </motion.div>
              ) : (
                <div className="flex h-full items-center justify-center text-zinc-800 uppercase text-[10px] tracking-[0.3em]">
                  Select Category
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="grid grid-cols-1 gap-10 xl:hidden">
          {categories.map((cat, i) => (
            <div key={cat.name} className="group space-y-3">
              <div className="relative aspect-4/3 overflow-hidden grayscale-[0.2]">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-zinc-900">
                <span className="text-[10px] text-zinc-600">0{i + 1}</span>
                <h3 className="text-lg font-light tracking-wide">{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ShopByCategory