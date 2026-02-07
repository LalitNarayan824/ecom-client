"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Package, 
  Truck, 
  CheckCircle2, 
  MapPin, 
  Calendar, 
  ArrowLeft,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

// Mock Data for the specific order
const orderDetails = {
  id: "ORD-88291-X",
  date: "Feb 07, 2026",
  status: "In Transit",
  total: 5400,
  shippingAddress: "221B Baker Street, London, NW1 6XE",
  items: [
    {
      id: 1,
      name: "Midnight Velour",
      price: 3200,
      image: "/flowers1.png",
      quantity: 1,
    },
    {
      id: 2,
      name: "Wild Primrose",
      price: 1200,
      image: "/flowers1.png",
      quantity: 1,
    }
  ]
};

export default function OrderPage() {
  return (
    <main className="bg-[#300000] min-h-screen text-[#f4f1ea] pt-32 pb-20 px-4 md:px-12">
      <div className="max-w-4xl mx-auto bg-[#510000] p-5">
        
        {/* --- BACK NAVIGATION --- */}
        <Link 
          href="/user/orders" 
          className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft size={14} /> Back to Orders
        </Link>

        {/* --- HEADER --- */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 border-b border-white/5 pb-10">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-serif italic tracking-tighter">
              Order <span className="text-zinc-500 not-italic">#{orderDetails.id.split('-')[1]}</span>
            </h1>
            <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-zinc-400">
              <span className="flex items-center gap-1.5"><Calendar size={12}/> {orderDetails.date}</span>
              <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
              <span className="flex items-center gap-1.5 text-amber-200"><Package size={12}/> {orderDetails.status}</span>
            </div>
          </div>
          
          <button className="px-6 py-3 border border-white/10 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Download Invoice
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* --- LEFT COLUMN: ITEMS --- */}
          <section className="lg:col-span-2 space-y-8">
            <h2 className="text-[11px] uppercase tracking-[0.4em] text-zinc-500 mb-6">Items Ordered</h2>
            {orderDetails.items.map((item) => (
              <div key={item.id} className="flex gap-6 items-center group">
                <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-zinc-900">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="flex-grow flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-serif italic">{item.name}</h3>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Qty: {item.quantity}</p>
                  </div>
                  <p className="text-sm font-mono text-zinc-300">₹{item.price.toLocaleString()}</p>
                </div>
              </div>
            ))}

            {/* TOTALS TABLE */}
            <div className="mt-12 pt-8 border-t border-white/5 space-y-4">
              <div className="flex justify-between text-sm text-zinc-400">
                <span>Subtotal</span>
                <span>₹4,400</span>
              </div>
              <div className="flex justify-between text-sm text-zinc-400">
                <span>Shipping</span>
                <span>₹1,000</span>
              </div>
              <div className="flex justify-between text-xl font-serif italic text-white pt-4">
                <span>Total</span>
                <span>₹{orderDetails.total.toLocaleString()}</span>
              </div>
            </div>
          </section>

          {/* --- RIGHT COLUMN: DETAILS --- */}
          <aside className="space-y-12">
            {/* TRACKING STATUS */}
            <div className="p-6 bg-zinc-900/50 border border-white/5 rounded-2xl">
              <h3 className="text-[10px] uppercase tracking-[0.4em] text-amber-200 mb-6 font-bold">Live Tracking</h3>
              <div className="space-y-6 relative">
                <div className="flex gap-4 items-start">
                  <CheckCircle2 size={18} className="text-amber-200 mt-0.5" />
                  <div>
                    <p className="text-xs text-white">Confirmed</p>
                    <p className="text-[10px] text-zinc-500">Feb 07, 10:00 AM</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Truck size={18} className="text-amber-200 mt-0.5" />
                  <div>
                    <p className="text-xs text-white">In Transit</p>
                    <p className="text-[10px] text-zinc-500">Expected by Feb 09</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SHIPPING INFO */}
            <div className="space-y-4">
              <h3 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500">Shipping Address</h3>
              <div className="flex gap-3 items-start text-sm text-zinc-300">
                <MapPin size={16} className="mt-1 text-zinc-600" />
                <p className="leading-relaxed">{orderDetails.shippingAddress}</p>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}