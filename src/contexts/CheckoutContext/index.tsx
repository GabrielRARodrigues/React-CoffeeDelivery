import { createContext, ReactNode, useEffect, useState } from 'react'

import {
  AddressFields,
  CheckoutData,
  PaymentMethods
} from '../../Interfaces/CheckoutData'

interface CheckoutContextType {
  deliveryAddress: AddressFields
  paymentMethod: PaymentMethods
  updateCheckoutData: (newData: CheckoutData) => void
}

export const CheckoutContext = createContext({} as CheckoutContextType)

interface CheckoutContextProviderProps {
  children: ReactNode
}

export function CheckoutContextProvider({
  children
}: CheckoutContextProviderProps) {
  const [checkoutState, setCheckoutState] = useState<CheckoutData>(() => {
    const storageStateAsJSON = localStorage.getItem(
      '@coffee-delivery:checkout-state-1.0.0'
    )

    if (storageStateAsJSON) {
      return JSON.parse(storageStateAsJSON)
    }

    return {} as CheckoutData
  })

  useEffect(() => {
    const checkoutStateAsJSON = JSON.stringify(checkoutState)

    localStorage.setItem(
      '@coffee-delivery:checkout-state-1.0.0',
      checkoutStateAsJSON
    )
  }, [checkoutState])

  const { deliveryAddress, paymentMethod } = checkoutState

  function updateCheckoutData(newData: CheckoutData) {
    setCheckoutState(newData)
  }

  return (
    <CheckoutContext.Provider
      value={{ deliveryAddress, paymentMethod, updateCheckoutData }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
