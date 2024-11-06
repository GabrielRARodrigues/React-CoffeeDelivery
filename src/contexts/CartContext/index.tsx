import { createContext, ReactNode, useEffect, useReducer } from 'react'

import { Product } from '../../Interfaces/Product'
import { cartReducer } from '../../reducers/cart/reducer'
import {
  addProductToCartAction,
  cleanCartAction,
  removeProductToCartAction,
  updateProductQuantityAction
} from '../../reducers/cart/actions'

import coffees from '../../data/coffees.json'

interface CartStateType {
  product: Product
  quantity: number
}

interface CartContextType {
  cartState: CartStateType[]
  products: Product[]
  cartItemsAmount: number
  totalPrice: number
  addProductToCart: (newProduct: Product, quantity?: number) => void
  decreaseQuantityOfAProductInCart: (productToDecrease: Product) => void
  removeProductToCart: (productId: string) => void
  cleanCart: () => void
}

export const CartContext = createContext<CartContextType>({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, [], initialState => {
    const storageStateAsJSON = localStorage.getItem(
      '@coffee-delivery:cart-state-1.0.0'
    )

    if (storageStateAsJSON) {
      return JSON.parse(storageStateAsJSON)
    }

    return initialState
  })

  useEffect(() => {
    const cartStateAsJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', cartStateAsJSON)
  }, [cartState])

  const products = [...coffees] as Product[]

  const { cartItemsAmount, totalPrice } = cartState.reduce(
    (accumulateData, cartItem) => {
      return {
        cartItemsAmount: accumulateData.cartItemsAmount + cartItem.quantity,
        totalPrice:
          accumulateData.totalPrice + cartItem.product.price * cartItem.quantity
      }
    },
    { cartItemsAmount: 0, totalPrice: 0 }
  )

  function checkIfAProductIsAlreadyInCart(productToCheck: Product) {
    const cartProduct = cartState.find(
      cartItem => cartItem.product.id === productToCheck.id
    )

    return cartProduct
  }

  function addProductToCart(newProduct: Product, quantity: number = 1) {
    const cartProduct = checkIfAProductIsAlreadyInCart(newProduct)

    if (cartProduct) {
      dispatch(
        updateProductQuantityAction(
          cartProduct.product.id,
          quantity > 0
            ? cartProduct.quantity + quantity
            : cartProduct.quantity + 1
        )
      )
    } else {
      dispatch(addProductToCartAction(newProduct, quantity))
    }
  }

  function decreaseQuantityOfAProductInCart(productToDecrease: Product) {
    const cartProduct = checkIfAProductIsAlreadyInCart(productToDecrease)

    if (cartProduct && cartProduct.quantity > 1) {
      dispatch(
        updateProductQuantityAction(
          cartProduct.product.id,
          cartProduct.quantity - 1
        )
      )
    } else {
      dispatch(removeProductToCartAction(productToDecrease.id))
    }
  }

  function removeProductToCart(productId: string) {
    dispatch(removeProductToCartAction(productId))
  }

  function cleanCart() {
    dispatch(cleanCartAction())
  }

  return (
    <CartContext.Provider
      value={{
        cartState,
        products,
        cartItemsAmount,
        totalPrice,
        addProductToCart,
        decreaseQuantityOfAProductInCart,
        removeProductToCart,
        cleanCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
