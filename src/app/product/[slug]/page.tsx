"use client";
import { motion } from "framer-motion";
import { products } from "@/dummy/dummies";
import { useParams } from "next/navigation";
import { Minus, Plus, ArrowLeft, ShieldCheck, Truck } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/hooks/useCart";
import toast from "react-hot-toast";
import Link from "next/link";

export default function ProductPage() {
  const [qty, setQty] = useState(1);
  const params = useParams();
  const product = products.find((p) => p.id.toString() === params.slug);
  const addItem = useCart().addItem;

  if (!product) return <div className="h-screen bg-[#0c0c0c]" />;

  const handleAddItem = () => {
    addItem(product, qty);
    toast.success(`${product.name} added.`, {
      position: "top-center",
      style: {
        background:"transparent",
        color: "#f4f1ea",
        border: "1px solid rgba(255,255,255,0.1)",
        fontSize: "10px",
        textTransform: "uppercase",
        borderRadius: "0px",
      },
    });
  };

  return (
    <main className="bg-[#001043] h-screen overflow-hidden text-[#f4f1ea] flex items-center px-6 md:px-16">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* --- COMPACT TOP NAV --- */}
        <Link href="/product" className="inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-zinc-600 hover:text-white transition-colors mb-6">
          <ArrowLeft size={12} /> Collection
        </Link>

        <div className="bg-[#00155a] grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-center ">
          
          {/* --- LEFT: COMPACT IMAGE --- */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative aspect-[4/5] lg:aspect-square bg-zinc-900 rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src={product.image}
                className="w-full h-full object-cover"
                alt={product.name}
              />
            </motion.div>
          </div>

          {/* --- RIGHT: STREAMLINED DETAILS --- */}
          <div className="lg:col-span-6 space-y-8">
            <header className="space-y-3">
              <nav className="text-[9px] uppercase tracking-[0.4em] text-amber-200/50">
                {product.category}
              </nav>
              <h1 className="text-4xl md:text-5xl font-serif italic tracking-tighter leading-none">
                {product.name}
              </h1>
              <p className="text-xl font-light text-zinc-400">
                ₹{product.price.toLocaleString()}
              </p>
            </header>

            <div className="max-w-sm space-y-8">
              <p className="text-[12px] leading-relaxed text-zinc-500 italic">
                {product.description || "A curated botanical study focused on form and longevity."}
              </p>

              <div className="space-y-6">
                {/* Compact Qty Selector */}
                <div className="flex items-center justify-between py-4 border-y border-white/5">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-600">Quantity</span>
                  <div className="flex items-center gap-6 px-3 py-1.5 border border-white/10 rounded-full">
                    <button onClick={() => setQty(Math.max(1, qty - 1))} className="text-zinc-500 hover:text-white"><Minus size={12} /></button>
                    <span className="font-mono text-xs w-4 text-center">{qty}</span>
                    <button onClick={() => setQty(qty + 1)} className="text-zinc-500 hover:text-white"><Plus size={12} /></button>
                  </div>
                </div>

                <button 
                  onClick={handleAddItem} 
                  className="w-full bg-[#f4f1ea] text-black py-4 text-[9px] uppercase tracking-[0.4em] font-bold hover:bg-amber-100 transition-all shadow-lg"
                >
                  Add to Bag
                </button>
              </div>

              {/* Minimal Trust Badge */}
              <div className="flex gap-8 text-zinc-600">
                <div className="flex items-center gap-2">
                  <Truck size={14} />
                  <span className="text-[9px] uppercase tracking-widest">Global Shipping</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} />
                  <span className="text-[9px] uppercase tracking-widest">Quality Inspected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}