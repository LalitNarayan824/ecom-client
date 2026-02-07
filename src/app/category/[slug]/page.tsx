"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, X, Plus } from "lucide-react";
import { products, Product } from "@/dummy/dummies";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function CategoryPage() {
  const params = useParams();
  const [displayCount, setDisplayCount] = useState(8);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categoryProducts = products.filter((p) => p.category === params.slug);
  const visibleProducts = categoryProducts.slice(0, displayCount);

  return (
    <main className="bg-[#0c0c0c] min-h-screen pt-32 pb-20 px-4 md:px-12 text-[#f4f1ea] selection:bg-amber-200 selection:text-black">
      {/* --- MINIMALIST HEADER --- */}
      <header className="relative mb-20">
        <div className="flex flex-col md:flex-row justify-between items-baseline border-b border-white/10 pb-8">
          <div className="space-y-2">
            <nav className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 flex items-center gap-3">
              <Link href="/" className="hover:text-amber-200 transition-colors">Index</Link>
              <span className="w-4 h-px bg-zinc-700"></span>
              <span className="text-zinc-300">{params.slug}</span>
            </nav>
            <h1 className="text-6xl md:text-8xl font-light tracking-tight capitalize font-serif">
              {params.slug}<span className="text-amber-200">.</span>
            </h1>
          </div>

          <button
            onClick={() => setIsFilterOpen(true)}
            className="group flex items-center gap-4 mt-8 md:mt-0"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 group-hover:text-white transition-colors">
              Filter
            </span>
            <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
              <Filter size={14} strokeWidth={1.5} />
            </div>
          </button>
        </div>
        
        {/* Result Count Indicator */}
        <div className="absolute -bottom-3 right-0">
          <p className="text-[9px] font-mono text-zinc-500 uppercase">
            Showing {visibleProducts.length} of {categoryProducts.length} artifacts
          </p>
        </div>
      </header>

      {/* --- PRODUCT GRID --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
        {visibleProducts.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>

      {/* --- REFINED PAGINATION --- */}
      {displayCount < categoryProducts.length && (
        <div className="mt-32 flex flex-col items-center">
          <button
            onClick={() => setDisplayCount((prev) => prev + 8)}
            className="group relative px-12 py-4 overflow-hidden border border-white/10 rounded-full transition-all hover:border-amber-200/50"
          >
            <span className="relative z-10 text-[11px] uppercase tracking-[0.6em] group-hover:text-amber-100 transition-colors">
              View More
            </span>
          </button>
        </div>
      )}

      <FilterDrawer isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
    </main>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 4) * 0.1 }}
    >
      <Link href={`/product/${product.id}`} className="group block">
        {/* IMAGE CONTAINER */}
        <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 mb-6">
          <img
            src={product.image}
            className="h-full w-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
            alt={product.name}
          />
          
          {/* Subtle Overlay on Hover */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
             <div className="h-12 w-12 rounded-full bg-white text-black flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <Plus size={20} />
             </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between items-start">
            <h3 className="text-[13px] tracking-wide text-zinc-200 font-medium uppercase group-hover:text-amber-200 transition-colors">
              {product.name}
            </h3>
            <span className="text-[11px] font-mono text-zinc-500">
              ₹{product.price.toLocaleString()}
            </span>
          </div>
          <p className="text-[10px] text-zinc-500 tracking-[0.2em] uppercase">
            {product.category}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

function FilterDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-[#0f0f0f] z-[60] p-10 border-l border-white/5"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-500">Preferences</span>
              <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
                <X size={20} strokeWidth={1} />
              </button>
            </div>
            
            <div className="space-y-16">
               <section>
                 <h4 className="text-[10px] uppercase tracking-[0.3em] text-amber-200/60 mb-8">Sort Order</h4>
                 <div className="flex flex-col gap-6">
                    {["Newest First", "Price: High to Low", "Price: Low to High"].map((label) => (
                      <button key={label} className="text-2xl font-serif text-left hover:italic hover:pl-4 transition-all duration-300 border-b border-white/5 pb-2">
                        {label}
                      </button>
                    ))}
                 </div>
               </section>

               <button className="w-full py-4 bg-white text-black text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-amber-200 transition-colors mt-auto">
                 Apply Filters
               </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}