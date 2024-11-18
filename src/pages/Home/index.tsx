import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { useCartContext } from '@/hooks/useCartContext'

import {
  Background,
  Banner,
  BannerContainer,
  BannerContent,
  Coffees,
  HomeContainer,
  InfoItensList
} from './styles'

import { Product } from '@/components/Product'
import { InfoItem } from '@/components/InfoItem'

import banner from '@/assets/images/banner.png'

export function Home() {
  const { products } = useCartContext()

  return (
    <>
      <Background />
      <HomeContainer>
        <Banner>
          <BannerContainer>
            <BannerContent>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
              <InfoItensList>
                <li>
                  <InfoItem color="yellow-dark" icon={ShoppingCart}>
                    Compra simples e segura
                  </InfoItem>
                </li>
                <li>
                  <InfoItem color="gray" icon={Package}>
                    Embalagem mantém o café intacto
                  </InfoItem>
                </li>
                <li>
                  <InfoItem color="yellow" icon={Timer}>
                    Entrega rápida e rastreada
                  </InfoItem>
                </li>
                <li>
                  <InfoItem color="purple" icon={Coffee}>
                    O café chega fresquinho até você
                  </InfoItem>
                </li>
              </InfoItensList>
            </BannerContent>
            <img
              src={banner}
              alt="Copo térmico descartável de café contendo a logo do Coffee Delivery, no fundo uma forma amarela circular com varias imagens de grãos de café e café em pó"
            />
          </BannerContainer>
        </Banner>
        <section className="coffees">
          <h2>Nossos cafés</h2>
          <Coffees>
            {products.map(product => (
              <Product key={product.id} product={product} />
            ))}
          </Coffees>
        </section>
      </HomeContainer>
    </>
  )
}
