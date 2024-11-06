import { produce } from 'immer'

import { Product } from '../../Interfaces/Product'
import { ActionData, ActionTypes } from './actions'

interface CartStateType {
  product: Product
  quantity: number
}

export function cartReducer(state: CartStateType[], action: ActionData) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_TO_CART: {
      const { newProduct, quantity } = action.payload

      return produce(state, draft => {
        draft.push({ product: newProduct, quantity })
      })
    }

    case ActionTypes.UPDATE_PRODUCT_QUANTITY: {
      const { productId, quantity } = action.payload

      const productIndex = state.findIndex(
        cartItem => cartItem.product.id === productId
      )

      if (productIndex < 0) {
        return state
      }

      return produce(state, draft => {
        draft[productIndex].quantity = quantity
      })
    }

    case ActionTypes.REMOVE_PRODUCT_TO_CART: {
      const productId = action.payload

      return state.filter(cartItem => cartItem.product.id !== productId)
    }

    case ActionTypes.CLEAN_CART: {
      return []
    }
    default:
      return state
  }
}
