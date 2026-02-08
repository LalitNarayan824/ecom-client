"use client";
import AddAddressModal from "@/components/AddAddressModal";
import EditAddressModal from "@/components/EditAddressModal";
import EditUserModal from "@/components/EditUserModal";
import { motion } from "framer-motion";
import {
  MapPin,
  Package,
  Plus,
  ExternalLink,
  Mail,
  Phone,
  LogOut,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function UserDashboard() {
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
  const [isAddNodeModalOpen, setIsAddNodeModalOpen] = useState(false);
  const [isEditNodeModalOpen, setIsEditNodeModalOpen] = useState(false);

  return (
    <main className="bg-[#8ed000cb] min-h-screen pt-24 md:pt-32 pb-20 px-4 md:px-12 text-[#1A1A1A] font-sans selection:bg-[#B38B3F]/10">
      <div className="max-w-6xl mx-auto space-y-16 bg-[#ecec25] p-7 rounded-2xl">
        {/* --- TOP NAV / LOGOUT --- */}
        <div className="flex justify-end items-center border-b border-black/5 pb-6">
          <button className="flex items-center h-7.5 p-3 gap-2 text-[10px] hover:bg-amber-300 uppercase tracking-widest text-black hover:text-red-700 hover:cursor-pointer transition-colors font-bold group">
            <LogOut
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Terminate Session
          </button>
        </div>

        {/* --- IDENTITY SECTION --- */}
        <header className="space-y-10">
          <div className="flex space-y-2">
            <h1 className="text-6xl md:text-9xl font-serif italic tracking-tighter lowercase leading-none">
              Lalit Narayan
            </h1>
            <button
              onClick={() => setIsEditUserModalOpen(true)}
              className="ml-2 mb-5 text-[#000000] opacity-20 hover:opacity-60 transition-opacity hover:cursor-pointer"
            >
              <Settings size={22} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <EditableContactNode
              label="Email"
              value="adrian.chen@studio.com"
              icon={<Mail size={12} />}
            />
            <EditableContactNode
              label="Phone"
              value="+91 98765 43210"
              icon={<Phone size={12} />}
            />
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          {/* --- SHIPPING NODES --- */}
          <section className="lg:col-span-5 space-y-8">
            <div className="flex items-center justify-between border-b border-black/5 pb-4">
              <h2 className="text-sm uppercase tracking-[0.4em] text-zinc-600 font-bold flex items-center gap-3">
                <MapPin size={14} className="text-[#B38B3F]" /> Saved Addresses
              </h2>
            </div>

            {/* container for addresses */}
            <div className="space-y-4">
              {/* one delivery address START */}
              <div className="p-8 bg-white border border-black/5 relative group shadow-sm hover:shadow-md transition-shadow">
                {/* the default address tag */}
                <span className="absolute top-6 right-6 text-[8px] font-mono bg-[#1A1A1A] text-white px-2 py-0.5 uppercase tracking-widest">
                  Primary
                </span>

                {/* address name */}
                <span className="my-2 mb-2 text-sm font-mono bg-[#1A1A1A] text-white px-2 py-0.5 uppercase tracking-widest">
                  Home
                </span>
                <p className="text-base font-normal leading-relaxed text-zinc-800">
                  122 Digital Way, Suite 4<br />
                  Neo-Tokyo, JP 150-0001
                </p>
                <div className="mt-8 pt-6 border-t border-black/5 flex justify-between items-center">
                  {/* message */}
                  <p className="text-sm text-zinc-500 italic">
                    "Leave in shaded foyer."
                  </p>
                  {/* edit option */}
                  <button
                    onClick={() => setIsEditNodeModalOpen(true)}
                    className="text-[10px] hover:cursor-pointer font-bold text-[#B38B3F] uppercase tracking-widest hover:text-black transition-colors"
                  >
                    Edit Address
                  </button>
                </div>
              </div>
              {/* one delivery address END */}

              {/* add new address button */}
              <button
                onClick={() => setIsAddNodeModalOpen(true)}
                className="w-full hover:cursor-pointer bg-yellow-50 py-6 border-2 border-dashed border-zinc-600 flex items-center justify-center gap-3 group hover:border-[#B38B3F] transition-all "
              >
                <Plus size={16} className="text-[#B38B3F]" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 group-hover:text-black font-bold">
                  Add New Address
                </span>
              </button>
            </div>
            {/* you just need to make it a component */}
          </section>

          {/* --- ACQUISITIONS --- */}
          <section className="lg:col-span-7 space-y-8">
            <div className="flex items-center justify-between border-b border-black/5 pb-4">
              <h2 className="text-sm uppercase tracking-[0.4em] text-zinc-600 font-bold flex items-center gap-3">
                <Package size={14} className="text-[#B38B3F]" /> Recent Orders
              </h2>
            </div>

            <div className="space-y-3">
              {[1, 2].map((order) => (
                <div
                  key={order}
                  className="bg-white border border-black/5 p-6 flex flex-col md:flex-row justify-between items-center gap-6 group hover:border-[#B38B3F]/20 transition-all shadow-sm"
                >
                  <div className="flex gap-6 items-center w-full">
                    <div className="w-16 h-16 bg-[#F9F9F7] overflow-hidden border border-black/5 grayscale hover:grayscale-0 transition-all duration-700">
                      <img
                        src="/skeleton.webp"
                        className="w-full h-full object-cover opacity-80"
                        alt="Product"
                      />
                    </div>
                    <div className="space-y-1 w-full">
                      <h3 className="text-xl font-serif">
                        Wild Lily Composition
                      </h3>
                      <p className="text-sm font-mono text-zinc-400 italic">
                        some order details will be here
                      </p>
                    </div>
                  </div>

                  <div className="flex md:flex-col items-center md:items-end justify-between w-full md:w-auto gap-4 border-t md:border-t-0 border-black/5 pt-4 md:pt-0">
                    <p className="text-xl font-mono text-[#1A1A1A]">₹4,200</p>
                    <Link
                      href={`/order/${order}`}
                      className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-[#B38B3F] hover:text-black transition-colors"
                    >
                      Details <ExternalLink size={12} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <EditUserModal
        isOpen={isEditUserModalOpen}
        onClose={() => setIsEditUserModalOpen(false)}
        currentUser={{ name: "lalit", phone: "90909090", email: "something" }}
      />
      <AddAddressModal
        isOpen={isAddNodeModalOpen}
        onClose={() => setIsAddNodeModalOpen(false)}
      />
      <EditAddressModal
        isOpen={isEditNodeModalOpen}
        onClose={() => setIsEditNodeModalOpen(false)}
        addressNode={{id:"1", title:"home", address:"some", message:"something"}}
      />
    </main>
  );
}

function EditableContactNode({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="group relative p-5 bg-white border border-black/5 flex flex-col gap-1 hover:border-[#B38B3F]/30 transition-all cursor-pointer shadow-sm">
      <span className="text-[8px] uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-2 font-bold">
        {icon} {label}
      </span>
      <span className="text-sm font-medium tracking-tight text-[#1A1A1A]">
        {value}
      </span>
    </div>
  );
}
