"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, X, ArrowUpRight } from "lucide-react";
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
    <main className="bg-[#08100b] min-h-screen pt-32 pb-20 px-6 md:px-12 text-[#f4f1ea]">
      {/* --- PAGE HEADER --- */}
      <header className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/5 pb-12">
        <div className="space-y-4">
          <nav className="text-[9px] uppercase tracking-[0.4em] text-zinc-600 flex gap-2">
            <Link href="/" className="hover:text-white transition-colors">Archive</Link>
            <span>/</span>
            <span className="text-[#b38b3f]">{params.slug}</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-serif tracking-tighter lowercase italic">
            {params.slug}<span className="text-[#b38b3f] opacity-60">.</span>
          </h1>
        </div>

        <button
          onClick={() => setIsFilterOpen(true)}
          className="flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] border border-white/10 px-6 py-3 hover:bg-[#f4f1ea] hover:text-[#08100b] transition-all"
        >
          <Filter size={12} /> Refine Selection
        </button>
      </header>

      {/* --- PRODUCT GRID --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-20">
        <AnimatePresence>
          {visibleProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </AnimatePresence>
      </div>

      {/* --- PAGINATION --- */}
      {displayCount < categoryProducts.length && (
        <div className="mt-32 flex flex-col items-center gap-8">
          <div className="w-px h-24 bg-gradient-to-b from-[#b38b3f] to-transparent" />
          <button
            onClick={() => setDisplayCount((prev) => prev + 8)}
            className="text-[10px] uppercase tracking-[0.5em] text-[#b38b3f] hover:text-[#f4f1ea] transition-colors"
          >
            Load More 
          </button>
        </div>
      )}

      <FilterDrawer isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
    </main>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <Link href={`/product/${product.id}`} className="block group">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: (index % 4) * 0.05 }}
      >
        {/* 1. THE IMAGE: No border, just clean edges */}
        <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900 mb-4">
          <img
            src={product.image}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            alt={product.name}
          />
        </div>

        {/* 2. THE INFO: Simple stacked typography */}
        <div className="space-y-1">
          <div className="flex justify-between items-baseline">
            <h3 className="text-sm md:text-base font-medium text-zinc-100 group-hover:text-[#b38b3f] transition-colors">
              {product.name}
            </h3>
            <span className="text-[11px] font-mono text-zinc-500">
              ₹{product.price.toLocaleString()}
            </span>
          </div>
          
          <p className="text-[10px] uppercase tracking-widest text-zinc-600">
            {product.category}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}

// FilterDrawer kept simple with your previous logic, but typography updated to match
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
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100]"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="fixed top-0 right-0 h-full w-full md:w-[400px] bg-[#08100b] z-[101] p-12 border-l border-white/5"
          >
            <div className="flex justify-between items-center mb-20">
              <h2 className="text-3xl font-serif italic lowercase">Refine selection.</h2>
              <X onClick={onClose} className="cursor-pointer opacity-40 hover:opacity-100" size={18} />
            </div>
            
            <div className="space-y-12">
              <div className="space-y-6">
                <p className="text-[9px] uppercase tracking-[0.4em] text-[#b38b3f]">Sort By</p>
                {["Chronological", "Price Ascending", "Price Descending"].map((opt) => (
                  <p key={opt} className="text-sm text-zinc-500 hover:text-white cursor-pointer transition-colors font-serif italic">
                    {opt}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}