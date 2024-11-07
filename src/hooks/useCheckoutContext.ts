import { useContext } from 'react'

import { CheckoutContext } from '../contexts/CheckoutContext'

export function useCheckoutContext() {
  const checkoutContextData = useContext(CheckoutContext)

  return {
    ...checkoutContextData
  }
}
