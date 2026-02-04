"use client";
import { motion } from "framer-motion";
import { products } from "@/dummy/dummies";
import { useParams } from "next/navigation";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/hooks/useCart";
import toast from "react-hot-toast";

export default function ProductPage() {
  const [qty , setQty] = useState(1);
  const params = useParams();
  const product = products.find((p) => p.id === params.slug);
  const addItem = useCart().addItem

  if (!product) return (
    <div className="p-20 font-mono text-[9px] uppercase tracking-widest text-center text-zinc-500">
      Specimen Not Found.
    </div>
  );

  const handleAddItem = () => {
  addItem(product, qty);
  
  toast.success(`${qty}x ${product.name} added to Bag.`, {
   
    position: "top-center",
    // Custom styling to match your brand
    style: {
      background: "#3d0066", // Your deep purple
      color: "#ffc800",      // Your vibrant yellow
      border: "1px solid #fdc500",
      fontFamily: "var(--font-mono), monospace", // Use your mono font
      textTransform: "uppercase",
      fontSize: "10px",
      letterSpacing: "0.1em",
      borderRadius: "0px", // Sharp edges for architectural look
    },
    icon: <div className="w-2 h-2 bg-[#fdc500] animate-pulse" />, // Technical "blink"
  });
};

  return (
    <main className="bg-[#3d0066] min-h-screen pt-24 md:pt-32 pb-20 px-6 md:px-12 text-[#f4f1ea]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center bg-[#5c0099] p-4 rounded-2xl">
        
        {/* --- IMAGE: Top on Mobile, Left on Desktop --- */}
        <div className="lg:col-span-5 order-1 ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-4/5 lg:aspect-3/4 bg-zinc-900/40 rounded-xl overflow-hidden border-3 border-[#fdc500]"
          >
            <img
              src={product.image}
              className="w-full h-full object-cover rounded-xl"
              alt={product.name}
            />
            {/* Minimal Corner Detail */}
            <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-[#b38b3f]/30" />
          </motion.div>
        </div>

        {/* --- DETAILS: Below on Mobile, Right on Desktop --- */}
        <div className="lg:col-span-7 order-2 space-y-8 md:space-y-6 bg-[#ffc800] p-4 rounded-2xl">
          <header className="space-y-4">
            <nav className="font-mono text-[10px] uppercase tracking-[0.2em] text-black font-bold">
              Series / {product.category}
            </nav>
            <h1 className="text-4xl md:text-7xl text-black font-serif tracking-tighter leading-[0.9] italic">
              {product.name}
            </h1>
            <p className="text-2xl font-mono text-black">
              ₹{product.price.toLocaleString()}
            </p>
          </header>

          <div className="max-w-md space-y-8">
            <p className="text-[10px] uppercase italic tracking-[0.2em] text-black font-bold">
              {product.description}. A composition focused on structural elegance and botanical longevity.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 py-4 border-y border-black/10">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black font-bold">Quantity</span>
                <div className="flex items-center gap-8 bg-black/5 px-4 py-2 rounded-lg border border-black/10">
                  <button 
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="text-black hover:scale-125 transition-transform"
                  >
                    <Minus size={16} strokeWidth={3} />
                  </button>
                  <span className="font-mono text-lg text-black font-bold w-6 text-center">
                    {qty < 10 ? `0${qty}` : qty}
                  </span>
                  <button 
                    onClick={() => setQty(qty + 1)}
                    className="text-black hover:scale-125 transition-transform"
                  >
                    <Plus size={16} strokeWidth={3} />
                  </button>
                </div>
              </div>
              <button onClick={()=>handleAddItem()} className="w-full bg-black text-white py-5 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#3d0066] transition-colors duration-500 hover:cursor-pointer ">
                Add to Bag
              </button>
              
              {/* Technical Footnotes */}
              <div className="grid grid-cols-2 gap-10 pt-2 border-t border-white/5">
                <div className="space-y-2">
                  <span className="block text-sm uppercase tracking-widest text-black font-bold">Origin</span>
                  <span className="block text-black italic font-serif">Studio Archive / Sector 7</span>
                </div>
                <div className="space-y-2">
                  <span className="block text-sm uppercase tracking-widest text-black font-bold">Cycle</span>
                  <span className="block text-black italic font-serif">14–21 Days Vitality</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}