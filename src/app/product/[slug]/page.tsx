"use client";
import { motion } from "framer-motion";
import { products } from "@/dummy/dummies";
import { useParams } from "next/navigation";

export default function ProductPage() {
  const params = useParams();
  const product = products.find((p) => p.id === params.slug);

  if (!product) return (
    <div className="p-20 font-mono text-[9px] uppercase tracking-widest text-center text-zinc-500">
      Specimen Not Found.
    </div>
  );

  return (
    <main className="bg-[#08100b] min-h-screen pt-24 md:pt-32 pb-20 px-6 md:px-12 text-[#f4f1ea]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* --- IMAGE: Top on Mobile, Left on Desktop --- */}
        <div className="lg:col-span-5 order-1">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] lg:aspect-[3/4] bg-zinc-900/40 overflow-hidden border border-white/5"
          >
            <img
              src={product.image}
              className="w-full h-full object-cover"
              alt={product.name}
            />
            {/* Minimal Corner Detail */}
            <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-[#b38b3f]/30" />
          </motion.div>
        </div>

        {/* --- DETAILS: Below on Mobile, Right on Desktop --- */}
        <div className="lg:col-span-7 order-2 space-y-10 md:space-y-14">
          <header className="space-y-4">
            <nav className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-[#b38b3f]/80">
              Series / {product.category}
            </nav>
            <h1 className="text-4xl md:text-7xl font-serif tracking-tighter leading-[0.9] italic">
              {product.name}<span className="text-[#b38b3f] opacity-50">.</span>
            </h1>
            <p className="text-xl font-mono text-zinc-300">
              ₹{product.price.toLocaleString()}
            </p>
          </header>

          <div className="max-w-md space-y-12">
            <p className="text-zinc-400 text-sm leading-relaxed font-light">
              {product.description}. A composition focused on structural elegance and botanical longevity.
            </p>

            <div className="space-y-10">
              <button className="w-full bg-[#f4f1ea] text-[#08100b] py-5 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#b38b3f] transition-colors duration-500">
                Purchase Specimen
              </button>
              
              {/* Technical Footnotes */}
              <div className="grid grid-cols-2 gap-10 pt-10 border-t border-white/5">
                <div className="space-y-2">
                  <span className="block text-sm uppercase tracking-widest text-zinc-600 font-bold">Origin</span>
                  <span className="block text-zinc-400 italic font-serif">Studio Archive / Sector 7</span>
                </div>
                <div className="space-y-2">
                  <span className="block text-sm uppercase tracking-widest text-zinc-600 font-bold">Cycle</span>
                  <span className="block text-zinc-400 italic font-serif">14–21 Days Vitality</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}