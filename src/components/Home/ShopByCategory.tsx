"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { categories } from "@/dummy/dummies"
import Link from "next/link"

//004b23

const ShopByCategory = () => {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section className="bg-[#000000] py-24 text-zinc-100">
      <div className="mx-auto max-w-7xl px-6 bg-[#006400] p-3 rounded-2xl">
        
        {/* Header */}
        <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-[#ecf39e] pb-12">
          <div>
            <h2 className="text-4xl md:text-5xl text-[#ecf39e] font-light tracking-tight">
              Shop by <span className="font-serif italic ">Category</span>
            </h2>
          </div>
          <p className="mt-4 max-w-75 text-[13px] text-[#ecf39e] leading-relaxed uppercase tracking-widest">
            Artisanal flora curated for the <br /> modern living space.
          </p>
        </header>

        {/* ================= DESKTOP ================= */}
        <div className="relative hidden xl:grid grid-cols-[1fr_450px] gap-20">
          
          {/* List */}
          <ul className="divide-y divide-zinc-900">
            {categories.map((cat, i) => (
              <Link href={`/category/${cat.name.toLowerCase()}`} key={cat.name}>
                <li
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  className={`group relative cursor-pointer px-2 py-8 transition-opacity rounded-2xl duration-300 ${active === i && 'bg-[#4f772d]'} `}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-6">
                      <span className="text-[10px] font-medium text-white uppercase tracking-widest">
                        ({i + 1})
                      </span>
                      <h3 className={`text-3xl font-light transition-all duration-500 ${active === i ? 'text-white' : 'text-[#ecf39e]'}`}>
                        {cat.name}
                      </h3>
                    </div>
                    
                    <div className={`h-1 w-1 rounded-full bg-white transition-opacity duration-500 ${active === i ? 'opacity-100' : 'opacity-0'}`} />
                  </div>
                </li>
              </Link>
            ))}
          </ul>

          {/* Fixed Preview */}
          <div className="relative h-137.5 w-full overflow-hidden bg-[#006400] rounded-sm">
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
                    // Optimization: Fixed width on desktop, smaller source served
                    sizes="450px"
                    priority
                    className="object-cover grayscale-[0.3] contrast-[1.1]"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </motion.div>
              ) : (
                <div className="relative h-full w-full overflow-hidden">
                  <Image 
                    src="/bouqet3.jpg" 
                    alt="categories" 
                    fill 
                    sizes="450px"
                    priority 
                    className="object-cover" 
                  />
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
                  // Optimization: Tell browser this image takes full mobile width
                  sizes="(max-width: 768px) 100vw, 33vw"
                  // Optimization: Only priority for the first item (LCP candidate)
                  priority={i === 0}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
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