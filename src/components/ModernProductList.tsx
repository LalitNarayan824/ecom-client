"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

export default function SimpleProductList({ products }: { products: Product[] }) {
  return (
    <div className="bg-[#001043] mt-5 px-4 md:px-10 py-12 md:py-16">
      {/* --- HEADER SECTION --- */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12 border-b border-white/5 pb-8">
        <div className="space-y-2">
          <h2 className="text-3xl md:text-5xl font-serif italic text-zinc-100 tracking-tight">
            Explore<span className="text-zinc-500 not-italic">.</span>
          </h2>
          
        </div>

        <Link 
          href="/shop/explore" 
          className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-zinc-400 hover:text-white transition-all underline-offset-8 hover:underline"
        >
          Explore All <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </header>

      {/* --- PRODUCT GRID --- */}
      {/* Responsive: 2 cols on mobile, 3 on tablet, 4 on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-12">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <Link href={`/product/${product.id}`} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900 mb-4 rounded-sm">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  width={400}
                  height={500}
                  priority={index < 4}
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-baseline gap-2">
                  <h3 className="text-[12px] md:text-[13px] text-zinc-200 font-light tracking-wide truncate">
                    {product.name}
                  </h3>
                  <span className="text-[10px] md:text-[11px] text-zinc-500 font-mono flex-shrink-0">
                    ₹{product.price.toLocaleString()}
                  </span>
                </div>
                <p className="text-[9px] uppercase tracking-widest text-zinc-600">
                  {product.category}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}