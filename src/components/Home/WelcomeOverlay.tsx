'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WelcomeOverlay = () => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, 1800)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="fixed inset-0 z-999 flex items-center justify-center bg-[#29003a] overflow-hidden"
        >
          {/* Animated Glow Blob */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            transition={{ duration: 1.2 }}
            className="absolute h-96 w-96 rounded-full bg-purple-400 blur-[120px]"
          />

          {/* Text */}
          <div className="relative z-10 text-center">
            <motion.span
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="block text-sm uppercase tracking-[0.3em] text-white/70"
            >
              Welcome to
            </motion.span>

            <motion.h1
              initial={{ scale: 0.8, opacity: 0, filter: 'blur(8px)' }}
              animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
              className="mt-2 text-6xl sm:text-7xl lg:text-8xl font-serif text-white"
            >
              Flora
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default WelcomeOverlay
