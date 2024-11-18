import { Navigate } from 'react-router-dom'

import { useCartContext } from '@/hooks/useCartContext'
import { formatPrice } from '@/utils/formatPrice'

import {
  CartItensCard,
  CartItensList,
  CheckoutContainer,
  ConfirmationButton,
  PriceContainer,
  Subtitle
} from './styles'

import { NewOrderForm } from './components/NewOrderForm'
import { Product } from '@/components/Product'

export function Checkout() {
  const { cartState, totalPrice } = useCartContext()

  if (cartState.length < 1) {
    return <Navigate to="/" />
  }

  const deliveryFee = 3.5
  const total = totalPrice + deliveryFee

  const formattedDeliveryFee = formatPrice(deliveryFee)
  const formattedTotalPrice = formatPrice(totalPrice)
  const formattedTotal = formatPrice(total)

  return (
    <CheckoutContainer>
      <section>
        <Subtitle>Complete seu pedido</Subtitle>
        <NewOrderForm id="newOrderForm" />
      </section>
      <section>
        <Subtitle>Cafés selecionados</Subtitle>
        <CartItensCard>
          <CartItensList>
            {cartState.map(({ product, quantity }) => (
              <li key={product.id}>
                <Product product={product} variant="cart" quantity={quantity} />
              </li>
            ))}
          </CartItensList>

          <PriceContainer>
            <div>
              <span>Total de itens</span>
              <span>R$ {formattedTotalPrice}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ {formattedDeliveryFee}</span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>R$ {formattedTotal}</strong>
            </div>
          </PriceContainer>

          <ConfirmationButton form="newOrderForm">
            confirmar pedido
          </ConfirmationButton>
        </CartItensCard>
      </section>
    </CheckoutContainer>
  )
}
