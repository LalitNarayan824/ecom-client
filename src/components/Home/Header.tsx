"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  BarChartBig,
  CircleUserRound,
  House,
  ShoppingBag,
  Store,
  User,
} from "lucide-react";
import Image from "next/image";

const menuItems: { name: string; src: string }[] = [
  { name: "Home", src: "/" },
  { name: "Shop", src: "/shop" },
  // { name: "Cart", src: "/cart" },
  // { name: "About Us", src: "/about" },
  // { name: "Contact", src: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  // *todo
  // *real cart count from context manager
  const [cartCount, setcartCount] = useState(4);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="flex items-center cursor-pointer">
            <Image
                        src={"/logo-text2.png"}
                        alt="logo-text"
                        width={100}
                        height={30}
                        style={{ width: "clamp(45vw, 1000px)"}}
                        className="z-11 pointer-events-auto block"
                        priority
                      />
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {/* users logo */}
            <div className="flex items-center gap-6 md:gap-8 bg-black/20 px-3 rounded-2xl">
              {/* HOME */}
              <Link
                href="/"
                className="relative group p-2 transition-all duration-500"
              >
                {/* Soft Halo Background */}
                <div className="absolute inset-0 rounded-full bg-white/0 scale-50 transition-all duration-700 group-hover:scale-100 group-hover:bg-white/5" />

                {/* Icon */}
                <House
                  strokeWidth={1.2}
                  className="relative z-10 h-5 w-5 md:h-6 md:w-6"
                />

                {/* Tooltip */}
                <span className="pointer-events-none absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#000000] px-3 py-1.5 text-[9px] uppercase tracking-widest text-[#F6F7F4] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:blur-0 group-hover:translate-y-0.5 hidden md:block">
                  Home
                </span>
              </Link>

              {/* SHOP  */}
              <Link
                href="/shop"
                className="relative group p-2 transition-all duration-500"
              >
                {/* Soft Halo Background */}
                <div className="absolute inset-0 bg-white/0 rounded-full group-hover:bg-white/5 transition-all duration-700 scale-50 group-hover:scale-100" />

                <Store
                  strokeWidth={1.2}
                  className="relative z-10 w-5 h-5 md:w-6 md:h-6  transition-colors duration-500"
                />

                {/* Tooltip */}
                <span className="pointer-events-none absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#000000] px-3 py-1.5 text-[9px] uppercase tracking-widest text-[#F6F7F4] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:blur-0 group-hover:translate-y-0.5 hidden md:block">
                  Shop
                </span>
              </Link>
              {/* USER PROFILE */}
              <Link
                href="/user"
                className="relative group p-2 transition-all duration-500"
              >
                {/* Soft Halo Background */}
                <div className="absolute inset-0 bg-white/0 rounded-full group-hover:bg-white/5 transition-all duration-700 scale-50 group-hover:scale-100" />

                <CircleUserRound
                  strokeWidth={1.2}
                  className="relative z-10 w-5 h-5 md:w-6 md:h-6  transition-colors duration-500"
                />
                {/* Tooltip */}
                <span className="pointer-events-none absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#010101] px-3 py-1.5 text-[9px] uppercase tracking-widest text-[#F6F7F4] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:blur-0 group-hover:translate-y-0.5 hidden md:block">
                  User
                </span>
              </Link>

              {/* SHOPPING BAG */}
              <Link
                href="/cart"
                className="relative group p-2 transition-all duration-500"
              >
                {/* Soft Halo Background */}
                <div className="absolute inset-0 bg-white/0 rounded-full group-hover:bg-white/5 transition-all duration-700 scale-50 group-hover:scale-100" />

                <ShoppingBag
                  strokeWidth={1.2}
                  className="relative z-10 w-5 h-5 md:w-6 md:h-6 transition-colors duration-500"
                />
                {/* Tooltip */}
                <span className="pointer-events-none absolute left-2/3 top-full mt-3 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#000000] px-3 py-1.5 text-[9px] uppercase tracking-widest text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:blur-0 group-hover:translate-y-0.5 hidden md:block">
                  Bag
                </span>

                {/* Premium Notification Dot */}
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-[#b38b3f] rounded-full shadow-[0_0_10px_rgba(179,139,63,0.6)]" />
                )}
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="relative z-50 flex h-6 w-6 flex-col items-end justify-center gap-1.5 lg:hidden"
            aria-label="Toggle Menu"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              className="h-px w-6 bg-white"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="h-px w-4 bg-white"
            />
            <motion.span
              animate={
                open
                  ? { rotate: -45, y: -4, width: "24px" }
                  : { rotate: 0, y: 0, width: "16px" }
              }
              className="h-px bg-white"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#080808] lg:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-8 px-6">
              {menuItems.map((item, i) => (
                <Link href={item.src} key={item.name}>
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setOpen(false)}
                    className="text-3xl font-light tracking-widest text-zinc-200 hover:text-white transition"
                  >
                    {item.name}
                  </motion.button>
                </Link>
              ))}
              <Link href={"/cart"}>
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  // transition={{ delay: i * 0.1 }}
                  onClick={() => setOpen(false)}
                  className="text-3xl font-light tracking-widest text-zinc-200 hover:text-white transition"
                >
                  Bag
                </motion.button>
              </Link>
              <Link href={"/user"}>
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  // transition={{ delay: i * 0.1 }}
                  onClick={() => setOpen(false)}
                  className="text-3xl font-light tracking-widest text-zinc-200 hover:text-white transition"
                >
                  User
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
