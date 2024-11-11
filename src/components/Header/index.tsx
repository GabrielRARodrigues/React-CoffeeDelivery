import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { Cart, HeaderContainer, LocationCard } from './styles'

import { useCartContext } from '@/hooks/useCartContext'
import { useCheckoutContext } from '@/hooks/useCheckoutContext'

import logo from '@/assets/images/logo.svg'

export function Header() {
  const { cartItemsAmount } = useCartContext()
  const { deliveryAddress } = useCheckoutContext()

  return (
    <HeaderContainer>
      <Link to="/">
        <img
          src={logo}
          alt="Logo da Coffee Delivery: Uma copo de café coma a ilustração de um foguete degolando seguido do nome Coffee Delivery"
        />
      </Link>

      <div>
        {deliveryAddress && (
          <LocationCard>
            <MapPin size={22} weight="fill" />{' '}
            <span> {`${deliveryAddress.city}, ${deliveryAddress.state}`}</span>
          </LocationCard>
        )}

        <Cart to="/checkout">
          <ShoppingCart weight="fill" size={22} />
          <span>{cartItemsAmount}</span>
        </Cart>
      </div>
    </HeaderContainer>
  )
}
