"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, X, ChevronDown } from "lucide-react";
import { products } from "@/dummy/dummies";
import { useParams } from "next/navigation";
import { Product } from "@/dummy/dummies";

export default function CategoryPage() {
  const params = useParams();
  const [displayCount, setDisplayCount] = useState(8);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  // console.log(params)

  // Filter products by category slug
  const categoryProducts = products.filter((p) => p.category === params.slug);
  const visibleProducts = categoryProducts.slice(0, displayCount);

  return (
    <main className="bg-[#08100b] min-h-screen pt-32 pb-20 px-6 md:px-20 text-[#f4f1ea]">
      {/* --- PAGE HEADER --- */}
      <header className="max-w-400 mx-auto mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="space-y-4">
          <nav className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 flex gap-2">
            <span className="hover:text-white cursor-pointer">Shop</span>
            <span>/</span>
            <span className="text-[#b38b3f]">{params.slug}</span>
          </nav>
          <h1 className="text-5xl md:text-8xl font-serif tracking-tighter capitalize">
            {params.slug} <span className="italic opacity-30">Series</span>
          </h1>
        </div>

        <button
          onClick={() => setIsFilterOpen(true)}
          className="flex items-center gap-3 text-[10px] uppercase tracking-widest border border-white/10 px-6 py-3 hover:bg-white hover:text-black transition-all"
        >
          <Filter size={14} /> Filter & Sort
        </button>
      </header>

      {/* --- PRODUCT GRID --- */}
      <div className="max-w-400 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
        <AnimatePresence>
          {visibleProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </AnimatePresence>
      </div>

      {/* --- SEAMLESS LOAD MORE --- */}
      {displayCount < categoryProducts.length && (
        <div className="mt-24 flex flex-col items-center gap-6">
          <div className="w-40 h-px bg-zinc-800 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-[#b38b3f]"
              initial={{ x: "-100%" }}
              animate={{
                x: `${(displayCount / categoryProducts.length) * 100 - 100}%`,
              }}
            />
          </div>
          <p className="text-[10px] uppercase tracking-widest text-zinc-500">
            Showing {displayCount} of {categoryProducts.length}
          </p>
          <button
            onClick={() => setDisplayCount((prev) => prev + 8)}
            className="text-xs uppercase tracking-[0.4em] text-[#b38b3f] hover:text-white transition-colors pb-2 border-b border-[#b38b3f]/20 hover:border-white"
          >
            Load More
          </button>
        </div>
      )}

      {/* --- FILTER DRAWER --- */}
      <FilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
    </main>
  );
}

import { Plus, ArrowUpRight } from "lucide-react";
import Link from "next/link";

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <Link href={`/product/${product.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.8,
          delay: (index % 3) * 0.1,
          ease: [0.21, 0.45, 0.32, 0.9],
        }}
        className="group relative"
      >
        {/* --- IMAGE CONTAINER --- */}
        <div className="relative aspect-3/4 overflow-hidden bg-[#0d1410] rounded-xs mb-6">
          <img
            src={product.image}
            className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s] cubic-bezier(0.2, 1, 0.2, 1)"
            alt={product.name}
          />

          {/* Subtle Inner Shadow/Border for Depth */}
          <div className="absolute inset-0 border border-white/5 group-hover:border-white/10 transition-colors pointer-events-none" />

          {/* Hover Action: Quick Add */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#b38b3f] text-[#08100b] p-4 rounded-full shadow-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
            >
              <Plus size={20} strokeWidth={3} />
            </motion.button>
          </div>

          {/* Corner Detail: Category Tag */}
          <div className="absolute top-4 left-4 overflow-hidden">
            <span className="block text-[8px] uppercase tracking-[0.4em] text-white/50 group-hover:text-[#b38b3f] transition-colors translate-y-0 group-hover:-translate-y-full duration-500">
              {product.category}
            </span>
            <span className="absolute top-0 left-0 text-[8px] uppercase tracking-[0.4em] text-[#b38b3f] translate-y-full group-hover:translate-y-0 duration-500">
              In Stock
            </span>
          </div>
        </div>

        {/* --- PRODUCT INFO --- */}
        <div className="px-1">
          <div className="flex justify-between items-start mb-2">
            <div className="space-y-1">
              <h3 className="text-lg md:text-xl font-serif text-zinc-200 group-hover:text-[#b38b3f] transition-colors tracking-tight">
                {product.name}
              </h3>
              {/* TODO */}
              {/* collection name  */}
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-medium">
                Hand-tilled Collection
              </p>
            </div>

            <div className="flex flex-col items-end gap-1">
              <span className="text-sm font-mono text-[#f4f1ea]">
                ₹{product.price.toLocaleString()}
              </span>
              <ArrowUpRight
                size={14}
                className="text-zinc-800 group-hover:text-[#b38b3f] transition-all"
              />
            </div>
          </div>

          {/* Hover Line Detail */}
          <div className="relative h-px w-full bg-zinc-900 overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-[#b38b3f]/40"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

function FilterDrawer({ isOpen, onClose }:{isOpen:boolean , onClose:any}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-100"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-100 bg-[#08100b] z-101 p-10 border-l border-white/5"
          >
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-2xl font-serif">Filters</h2>
              <X
                onClick={onClose}
                className="cursor-pointer hover:text-[#b38b3f]"
                size={20}
              />
            </div>
            {/* Filter sections like 'Sort By', 'Price Range', etc. go here */}
            <div className="space-y-10">
              <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-widest text-zinc-500">
                  Sort By
                </p>
                {["Newest", "Price: High-Low", "Price: Low-High"].map((opt) => (
                  <p
                    key={opt}
                    className="text-sm hover:text-[#b38b3f] cursor-pointer transition-colors"
                  >
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
