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
    <main className="bg-[#710000] min-h-screen pt-32 pb-20 px-3 md:px-6 text-[#f4f1ea]">
      {/* --- PAGE HEADER --- */}
      <header className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/5 pb-12">
        <div className="space-y-4">
          <nav className="text-[9px] uppercase tracking-[0.4em] text-zinc-100 flex gap-2">
            <Link href="/" className="hover:text-white transition-colors">Archive</Link>
            <span>/</span>
            <span className="text-[#e7b14d]">{params.slug}</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-serif tracking-tighter lowercase italic">
            {params.slug}
          </h1>
        </div>

        <button
          onClick={() => setIsFilterOpen(true)}
          className="flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] border border-white/50 px-6 py-3 hover:bg-[#f4f1ea] hover:text-[#08100b] transition-all"
        >
          <Filter size={12} /> Refine Selection
        </button>
      </header>

      {/* --- PRODUCT GRID --- */}
      {/* a63c06 */}
      <div className="bg-[#a63c06] rounded-2xl p-3 lg:p-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-20">
        
          {visibleProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} />
          ))}
        
      </div>

      {/* --- PAGINATION --- */}
      {displayCount < categoryProducts.length && (
        <div className="mt-32 flex flex-col items-center gap-8">
          <div className="w-px h-24 bg-linear-to-b from-[#b38b3f] to-transparent" />
          <button
            onClick={() => setDisplayCount((prev) => prev + 8)}
            className="text-[10px] uppercase tracking-[0.5em] text-[#b38b3f] hover:text-[#f4f1ea] transition-colors"
          >
            Load More 
          </button>
        </div>
      )}

      {/* <FilterDrawer isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} /> */}
    </main>
  );
}

//c36f09






function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`} className="group block">
      <div className="relative overflow-hidden rounded-2xl bg-[#c36f09] p-3 backdrop-blur-lg ">
        
        {/* IMAGE: Fixed aspect ratio, simple zoom on hover */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-zinc-900">
          <img
            src={product.image}
            className="h-full w-full object-cover transition-transform duration-500 "
            alt={product.name}
          />
        </div>

        {/* CONTENT: High-contrast minimalist stack */}
        <div className="mt-4 px-1">
          <div className="flex items-start justify-between gap-2">
            <div className="space-y-0.5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-100">
                {product.category}
              </p>
              <h3 className="text-base font-medium text-zinc-100">
                {product.name}
              </h3>
            </div>
            
            <p className="text-sm font-semibold text-zinc-100">
              ₹{product.price.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
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
            className="fixed inset-0 bg-[#710000] backdrop-blur-md z-100"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="fixed top-0 right-0 h-full w-full md:w-100 bg-[#a63c06] z-101 p-12 border-l border-white/5"
          >
            <div className="flex justify-between items-center mb-20">
              <h2 className="text-3xl font-serif italic lowercase">Refine selection.</h2>
              <X onClick={onClose} className="text-amber-50 cursor-pointer opacity-40 hover:opacity-100" size={18} />
            </div>
            
            <div className="space-y-12">
              <div className="space-y-6">
                <p className="text-[9px] uppercase tracking-[0.4em] text-[#eeb448]">Sort By</p>
                {["Chronological", "Price Ascending", "Price Descending"].map((opt) => (
                  <p key={opt} className="text-sm text-zinc-100 hover:text-white cursor-pointer transition-colors font-serif italic">
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