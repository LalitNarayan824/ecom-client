"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Minus,
  Heart,
  ShieldCheck,
  Truck,
  RefreshCw,
} from "lucide-react";
import { products, Product } from "@/dummy/dummies";
import { useParams } from "next/navigation";

// * we will be fetching the info of the product from the slug as product id


export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  
  const params = useParams();

  const product = products.find(product=>product.id === params.slug);
  if(!product) return (
    <div>
      product not found
    </div>
  )

 

  return (
    <main className="bg-[#08100b] min-h-screen pt-32 pb-20 px-6 md:px-20 text-[#f4f1ea]">
      <div className="max-w-350 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* --- LEFT: STICKY GALLERY --- */}
        <div className="space-y-6">
          <div className="sticky top-32 space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-4/5 overflow-hidden bg-zinc-900 rounded-sm"
            >
              <img
                src={product.image}
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
                alt={product.name}
              />
            </motion.div>

            {/* Thumbnails */}
            {/* <div className="flex gap-4">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-20 aspect-square rounded-sm overflow-hidden border-2 transition-all ${
                    activeImage === i
                      ? "border-[#b38b3f]"
                      : "border-transparent opacity-40"
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </button>
              ))}
            </div> */}
          </div>
        </div>

        {/* --- RIGHT: PRODUCT INFO --- */}
        <div className="space-y-12 py-4">
          <section className="space-y-6">
            <div className="space-y-2">
              <nav className="text-[10px] uppercase tracking-[0.4em] text-zinc-600">
                Shop / {product.category}
              </nav>
              <h1 className="text-5xl md:text-7xl font-serif tracking-tighter">
                {product.name}
              </h1>
              <p className="text-2xl font-mono text-[#b38b3f]">
                ₹{product.price.toLocaleString()}
              </p>
            </div>

            <p className="text-zinc-400 leading-relaxed max-w-lg">
              {product.description}. Each arrangement is hand-tilled and
              conditioned for 24 hours in our Forest Studio to ensure lasting
              vitality and fragrance.
            </p>
          </section>

          {/* --- SELECTIONS & ACTIONS --- */}
          <div className="space-y-8">
            <div className="flex items-center gap-10">
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-widest text-zinc-500">
                  Quantity
                </span>
                <div className="flex items-center border border-white/10 px-4 py-2 gap-6">
                  <Minus
                    size={14}
                    className="cursor-pointer hover:text-[#b38b3f]"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  />
                  <span className="w-4 text-center text-sm font-mono">
                    {quantity}
                  </span>
                  <Plus
                    size={14}
                    className="cursor-pointer hover:text-[#b38b3f]"
                    onClick={() => setQuantity(quantity + 1)}
                  />
                </div>
              </div>

              <button className="flex-1 mt-6 bg-[#b38b3f] text-[#08100b] py-5 text-xs uppercase tracking-[0.3em] font-bold hover:bg-[#f4f1ea] transition-all duration-500">
                Add to Bag
              </button>

              <button className="mt-6 p-5 border border-white/10 hover:border-red-900 transition-colors">
                <Heart size={20} />
              </button>
            </div>
          </div>

          {/* --- ACCORDION DETAILS --- */}
          <div className="border-t border-white/5 pt-8 space-y-8">
            <DetailItem
              icon={<Truck size={18} />}
              title="Shipping"
              desc="Free priority shipping on all botanical series over ₹2,000. Delivered in temperature-controlled packaging."
            />
            <DetailItem
              icon={<RefreshCw size={18} />}
              title="Returns"
              desc="Due to the perishable nature of our products, returns are handled case-by-case within 24 hours of delivery."
            />
            <DetailItem
              icon={<ShieldCheck size={18} />}
              title="Care Guide"
              desc="Includes a 5ml vial of botanical nutrients and a custom care instruction card."
            />
          </div>
        </div>
      </div>
    </main>
  );
}

function DetailItem({ icon, title, desc }:{icon:any , title:string , desc:string}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="space-y-4 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center text-zinc-400 hover:text-white transition-colors">
        <div className="flex items-center gap-4">
          {icon}
          <span className="text-xs uppercase tracking-widest font-bold">
            {title}
          </span>
        </div>
        <Plus
          size={14}
          className={`transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}
        />
      </div>
      {isOpen && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="text-sm text-zinc-500 leading-relaxed pl-9"
        >
          {desc}
        </motion.p>
      )}
    </div>
  );
}
