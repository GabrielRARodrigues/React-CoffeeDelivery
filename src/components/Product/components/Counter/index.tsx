import { Minus, Plus } from 'phosphor-react'

import { Product } from '@/Interfaces/Product'

import { useCartContext } from '@/hooks/useCartContext'

import { CounterContainer } from './styles'
import { Variants } from '../..'

interface CounterProps {
  product: Product
  quantity: number
  onAddItem: () => void
  onDecreaseItem: () => void
  variant?: Variants
}

export function Counter({
  product,
  quantity,
  onAddItem,
  onDecreaseItem,
  variant = 'catalog'
}: CounterProps) {
  const {
    addProductToCart,
    decreaseQuantityOfAProductInCart,
    removeProductToCart
  } = useCartContext()

  function handleAddItem() {
    onAddItem()

    if (variant === 'cart') {
      addProductToCart(product)
    }
  }

  function handleDecreaseItem() {
    if (variant === 'cart') {
      if (quantity > 1) {
        decreaseQuantityOfAProductInCart(product)
      } else {
        console.log(quantity)
        removeProductToCart(product.id)
      }
    }
    onDecreaseItem()
  }

  return (
    <CounterContainer $variant={variant}>
      <button aria-label="Remover um item" onClick={handleDecreaseItem}>
        <Minus weight="bold" />
      </button>
      <span>{quantity}</span>
      <button onClick={handleAddItem}>
        <Plus weight="bold" aria-label="Adicionar mais um item" />
      </button>
    </CounterContainer>
  )
}
