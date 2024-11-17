import { useState } from 'react'

import { ShoppingCart, Trash } from 'phosphor-react'

import { Product as IProduct } from '@/Interfaces/Product'

import { useCartContext } from '@/hooks/useCartContext'
import { formatPrice } from '@/utils/formatPrice'

import {
  Actions,
  CartButton,
  CartPrice,
  CatalogPrice,
  PriceAndActions,
  ProductCartContainer,
  ProductCatalogContainer,
  RemoveButton,
  Tag,
  Tags
} from './styles'

import { Counter } from './components/Counter'

export type Variants = 'catalog' | 'cart'

interface ProductProps {
  product: IProduct
  variant?: Variants
  quantity?: number
}

export function Product({
  product,
  quantity = 1,
  variant = 'catalog'
}: ProductProps) {
  const [itemQuantity, setItemQuantity] = useState(quantity)

  function addOneItem() {
    setItemQuantity(prevState => prevState + 1)
  }

  function decreaseOneItem() {
    if (itemQuantity > 1) {
      setItemQuantity(prevState => prevState - 1)
    }
  }

  const price = formatPrice(product.price)

  function ProductCatalog() {
    const { addProductToCart } = useCartContext()

    function handleAddProductToCart() {
      addProductToCart(product, itemQuantity)
    }

    return (
      <ProductCatalogContainer>
        <img src={product.imageURL} alt={product.description} />
        <Tags>
          {product.tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
        <h3>{product.name}</h3>
        <p>{product.description}</p>

        <PriceAndActions>
          <CatalogPrice>
            R$ <strong>{price}</strong>
          </CatalogPrice>
          <Actions>
            <Counter
              product={product}
              quantity={itemQuantity}
              onAddItem={addOneItem}
              onDecreaseItem={decreaseOneItem}
            />
            <CartButton
              aria-label="Adicionar itens ao carrinho"
              onClick={() => {
                handleAddProductToCart()
              }}
            >
              <ShoppingCart size={22} weight="fill" />
            </CartButton>
          </Actions>
        </PriceAndActions>
      </ProductCatalogContainer>
    )
  }

  function ProductCart() {
    const { removeProductToCart } = useCartContext()

    function handleRemoveItem() {
      removeProductToCart(product.id)
    }

    return (
      <ProductCartContainer>
        <img src={product.imageURL} alt={product.description} />
        <div>
          <h3>{product.name}</h3>
          <Actions>
            <Counter
              product={product}
              quantity={itemQuantity}
              onAddItem={addOneItem}
              onDecreaseItem={decreaseOneItem}
              variant="cart"
            />
            <RemoveButton onClick={handleRemoveItem}>
              <Trash size={16} /> Remover
            </RemoveButton>
          </Actions>
        </div>
        <CartPrice>R$ {price}</CartPrice>
      </ProductCartContainer>
    )
  }

  return (
    <>
      {variant === 'catalog' && <ProductCatalog />}
      {variant === 'cart' && <ProductCart />}
    </>
  )
}
