"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children } : {children : React.ReactNode}) {
  useEffect(() => {
    // Disable Lenis on mobile
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    if (isMobile) return

    const lenis = new Lenis({
      duration: 1.4,          // smoothness (higher = slower)
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
