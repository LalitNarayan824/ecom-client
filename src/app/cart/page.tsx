"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Minus,
  Plus,
  Trash2,
  MapPin,
  ChevronRight,
  ShieldCheck,
  Heart,
} from "lucide-react";
import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import { CartItem } from "@/store/useCartStore";
import AddressSelectionModal, {
  AddressNode,
} from "@/components/SelectAddressModal";

export default function CartPage() {
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<AddressNode | null>(
    {id:4 , title:"Default", address:"temp address XOXOX", message : "some message is not needed"}
  );

  const { cart, addItem, removeItem, clearCart } = useCart();

  const updateQty = (item: CartItem, qty: number) => {
    const { quantity, ...productOnly } = item;

    addItem(item, qty);
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <main className="bg-[#780000] min-h-screen pt-24 md:pt-32 pb-20 px-4 md:px-12 text-[#121212] font-sans">
      <div className="max-w-7xl mx-auto bg-[#c1121f] p-6 rounded-2xl">
        <header className="mb-12 border-b border-black/5 pb-8">
          <h1 className="text-4xl md:text-6xl text-white font-serif italic tracking-tighter lowercase">
            Your Selection
          </h1>
          <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-zinc-100 mt-2">
            Items are reserved for 30 minutes
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* --- LEFT: PRODUCT LIST (7 Columns) --- */}
          <section className="lg:col-span-7 space-y-6">
            {cart.length === 0 && (
              <span className="text-3xl  text-white font-serif italic tracking-tighter lowercase">
                No items in the Bag , please visit our Shop <Heart />{" "}
              </span>
            )}
            <AnimatePresence>
              {cart.map((item) => (
                // ONE CART ITEM START

                <motion.div
                  key={item.id}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-[#fdf0d5] p-6 md:p-8 flex gap-6 border border-black/3 shadow-sm rounded-md"
                >
                  <div className="w-24 h-32 bg-[#EFEEEC] shrink-0">
                    <img
                      src="/skeleton.webp"
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>

                  <div className="grow flex flex-col justify-between py-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-serif italic">
                          {item.name}
                        </h3>
                        <p className="text-sm font-mono text-zinc-900 uppercase mt-1">
                          ₹{item.price.toLocaleString()}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-zinc-900 hover:text-red-500 transition-colors hover:cursor-pointer"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div className="flex justify-between items-end">
                      <div className="flex items-center border border-black/10 px-3 py-1 gap-6">
                        <button
                          onClick={() => updateQty(item, -1)}
                          className="hover:text-[#B38B3F]"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm font-mono w-4 text-center">
                          {item.quantity < 10
                            ? `0${item.quantity}`
                            : item.quantity}
                        </span>
                        <button
                          onClick={() => updateQty(item, 1)}
                          className="hover:text-[#B38B3F]"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <p className="text-lg font-mono">
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </motion.div>
                // ONE CART ITEM END
              ))}
            </AnimatePresence>
          </section>

          {/* --- RIGHT: CHECKOUT LOGIC (5 Columns) --- */}
          <section className="lg:col-span-5 space-y-8">
            {/* 1. Address Section */}
            <div className="bg-[#fdf0d5] p-8 border border-black/5 space-y-6 rounded-xl ">
              <h2 className="text-sm uppercase tracking-[0.4em] text-zinc-900 font-bold flex items-center gap-3">
                <MapPin size={14} className="text-[#ff2f00]" /> Delivery Node
              </h2>

              <div className="p-4 bg-[#003049] text-white /50 border border-black/5 rounded-sm">
                <p className="text-sm leading-relaxed">
                  {selectedAddress?.title}
                  <br />
                  {selectedAddress?.address}<br />
                  {selectedAddress?.message}
                </p>
              </div>

              <button onClick={()=>setIsAddressModalOpen(true)} className="w-full py-3 border border-black text-[10px] uppercase tracking-widest font-bold hover:bg-black hover:text-white transition-all hover:cursor-pointer ">
                Change Address
              </button>
            </div>

            {/* 2. Order Summary */}
            <div className="bg-[#003049] p-8 border border-black/5 space-y-4 rounded-md">
              <h2 className="text-sm uppercase tracking-[0.4em] text-zinc-100 font-bold mb-6">
                Summary
              </h2>
              <div className="flex justify-between text-sm font-semibold">
                <span className="text-zinc-100">Total items</span>
                <span className="text-zinc-100 font-semibold">
                  {cart.length < 10 ? `0${cart.length}` : cart.length}
                </span>
              </div>
              <div className="flex justify-between text-sm font-semibold">
                <span className="text-zinc-100">Subtotal</span>
                <span className="text-zinc-100 font-semibold">
                  ₹{subtotal.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-sm font-semibold ">
                <span className="text-zinc-100">Shipping (Priority)</span>
                <span className="text-zinc-100 font-semibold">₹500</span>
              </div>
              <div className="pt-4 border-t border-black/5 flex justify-between items-end">
                <span className="text-sm uppercase tracking-widest text-zinc-100  font-bold">
                  Total Acquisition
                </span>
                <span className="text-2xl text-zinc-100 font-mono">
                  ₹{(subtotal + 500).toLocaleString()}
                </span>
              </div>

              <Link href={"/checkout"}>
                <button className="w-full bg-[#121212] text-white py-5 mt-6 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#669bbc] transition-colors hover:cursor-pointer flex items-center justify-center gap-3">
                  Proceed to Checkout <ChevronRight size={14} />
                </button>
              </Link>

              <div className="flex items-center gap-2 justify-center text-[9px] text-zinc-400 uppercase tracking-tighter pt-4">
                <ShieldCheck size={12} /> Secure Botanical Transaction
              </div>
            </div>
          </section>
        </div>
      </div>

      <AddressSelectionModal
        isOpen={isAddressModalOpen}
        onClose={() => setIsAddressModalOpen(false)}
        onSelect={(address) => setSelectedAddress(address)}
      />
    </main>
  );
}
