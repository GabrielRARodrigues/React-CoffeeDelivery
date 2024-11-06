import { useContext } from 'react'

import { CartContext } from '../contexts/CartContext'

export function useCartContext() {
  const cartContextData = useContext(CartContext)

  return {
    ...cartContextData
  }
}
