'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const menuItems: { name: string; src: string }[] = [
  { name: "Home", src: "/" },
  { name: "Shop", src: "/shop" },
  { name: "Cart", src: "/cart" },
  { name: "About Us", src: "/about" },
  { name: "Contact", src: "/contact" },
];


const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#080808]/30 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="flex items-center cursor-pointer">
            <span className="text-2xl font-medium tracking-tighter text-white">
              Flora<span className="text-zinc-500">.</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.src}>
              <span
                
                className="relative text-sm  text-white cursor-pointer transition-colors hover:text-white group"
                >
                {item.name}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </span>
                </Link>
            ))}
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
              animate={open ? { rotate: -45, y: -4, width: "24px" } : { rotate: 0, y: 0, width: "16px" }}
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header