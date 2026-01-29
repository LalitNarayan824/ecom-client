'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const collections = [
  { id: 'weddings', name: 'Nuptial Union', event: 'Weddings', size: 'md:col-span-3 md:row-span-2', image: '/wedding.webp' },
  { id: 'birthdays', name: 'Solar Return', event: 'Birthdays', size: 'md:col-span-3 md:row-span-1', image: '/birthday.webp' },
  { id: 'anniversary', name: 'Eternal Cycle', event: 'Anniversary', size: 'md:col-span-2 md:row-span-1', image: '/anniversary.webp' },
  { id: 'sympathy', name: 'Quiet Solace', event: 'Sympathy', size: 'md:col-span-1 md:row-span-1', image: '/sympathy.webp' },
  { id: 'events', name: 'Grand Gala', event: 'Corporate', size: 'md:col-span-2 md:row-span-1', image: '/corporate.webp' },
  { id: 'newhome', name: 'Sacred Space', event: 'New Home', size: 'md:col-span-2 md:row-span-1', image: '/new-home.webp' },
  { id: 'grad', name: 'Ascension', event: 'Graduation', size: 'md:col-span-2 md:row-span-1', image: '/graduation.webp' },
]

export default function StaggeredBento() {
  return (
    <section className="bg-[#08100b] py-24 px-6 md:px-20 border-t border-white/5">
      <div className="max-w-400 mx-auto">
        
        {/* Header - Minimal & Quiet */}
        <div className="mb-14 flex flex-col md:flex-row items-baseline justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.6em] text-[#b38b3f] font-bold">Collections</span>
            <div className="h-px w-12 bg-zinc-800" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#f4f1ea] tracking-tighter">
            Milestones <span className="italic opacity-40">& Moments</span>
          </h2>
        </div>

        {/* --- DYNAMIC BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-3 gap-5 md:gap-2 md:h-212.5 auto-rows-[300px]">
          {collections.map((col, i) => (
            <Link 
              href={`/collections/${col.event.toLowerCase()}`} 
              key={col.id}
              className={`${col.size} group block relative overflow-hidden rounded-xs border border-white/5 bg-zinc-900/50`}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.8 }}
                viewport={{ once: true }}
                className="h-full w-full"
              >
                {/* Image with grayscale to color transition */}
                <img 
                  src={col.image} 
                  className="w-full h-full object-cover opacity-40 grayscale group-hover:opacity-60 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.2s] ease-out"
                  alt={col.name}
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    {/* Floating Archive Label - Optional/Hidden as per your snippet */}
                    <span className="text-[8px] uppercase tracking-[0.4em] text-[#b38b3f] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      {col.name}
                    </span>
                    <div className="size-12 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0">
                      <ArrowUpRight size={14} className="text-white" />
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="text-2xl md:text-4xl font-serif text-white tracking-tighter leading-none group-hover:text-[#f4f1ea] transition-colors">
                      {col.event}
                    </h3>
                    {/* Underline logic */}
                    <div className={`h-px bg-[#b38b3f]/60 transition-all duration-700 ${i === 0 ? 'w-16' : 'w-0 group-hover:w-12'}`} />
                  </div>
                </div>

                {/* Gradient Scrim for better text contrast */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Subtle Bottom Link */}
        <div className="mt-12 flex justify-center">
          <Link 
            href="/collections" 
            className="text-[9px] uppercase tracking-[0.4em] text-zinc-600 hover:text-[#b38b3f] transition-colors flex items-center gap-3"
          >
            Enter the Full Archive <div className="h-1 w-1 rounded-full bg-[#b38b3f]" />
          </Link>
        </div>
      </div>
    </section>
  )
}