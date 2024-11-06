export interface AddressFields {
  cep: string
  street: string
  number: number
  fullAddress?: string
  neighborhood: string
  city: string
  state: string
}

export type PaymentMethods = 'credit-card' | 'debit-card' | 'cash'

export interface CheckoutData {
  deliveryAddress: AddressFields
  paymentMethod: PaymentMethods
}
