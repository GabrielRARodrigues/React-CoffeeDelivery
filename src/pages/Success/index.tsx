import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  DeliveryInfo,
  DeliveryInfoList,
  SuccessContainer,
  Title
} from './styles'

import { InfoItem } from '@/components/InfoItem'

import deliveryImage from '@/assets/images/delivery.png'
import { useCheckoutContext } from '@/hooks/useCheckoutContext'

export function Success() {
  const { deliveryAddress, paymentMethod } = useCheckoutContext()

  const paymentMethodFormatted =
    paymentMethod === 'credit-card'
      ? 'Cartão de Crédito'
      : paymentMethod === 'debit-card'
        ? 'Cartão de Débito'
        : 'Dinheiro'

  return (
    <SuccessContainer>
      <section>
        <Title>Uhu! Pedido confirmado</Title>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <DeliveryInfo>
          <DeliveryInfoList>
            <li>
              <InfoItem icon={MapPin} color="purple">
                <div>
                  <p>
                    Entrega em{' '}
                    <strong>
                      {deliveryAddress.street}, {deliveryAddress.number}
                    </strong>
                  </p>
                  <p>
                    {deliveryAddress.neighborhood} - {deliveryAddress.city},{' '}
                    {deliveryAddress.state}
                  </p>
                </div>
              </InfoItem>
            </li>
            <li>
              <InfoItem icon={Timer} color="yellow">
                <div>
                  <p>Previsão de entrega</p>
                  <strong>20 min - 30 min</strong>
                </div>
              </InfoItem>
            </li>
            <li>
              <InfoItem icon={CurrencyDollar} color="yellow-dark">
                <div>
                  <p>Pagamento na entrega</p>
                  <strong>{paymentMethodFormatted}</strong>
                </div>
              </InfoItem>
            </li>
          </DeliveryInfoList>
        </DeliveryInfo>
      </section>
      <section>
        <img
          src={deliveryImage}
          alt="Figura de um rapaz de cabelo preto, camisa amarela e calça verde pilotando uma moto roxa, levando uma caixa com a logo do Coffee Delivery para entrega"
        />
      </section>
    </SuccessContainer>
  )
}
