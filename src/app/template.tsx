"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      // We start at 0 opacity, but the background of the BODY is already purple
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 0.4, // Faster duration feels snappier
        ease: "easeInOut" 
      }}
    >
      {children}
    </motion.div>
  );
}