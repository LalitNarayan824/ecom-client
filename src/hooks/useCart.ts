// hooks/useCart.ts
import { useState, useEffect } from 'react'
import { useCartStore } from '@/store/useCartStore'

export const useCart = () => {
  const result = useCartStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted ? result : { cart: [], addItem: () => {}, removeItem: () => {}, clearCart: () => {} }
}
// just to avoid hydration issues