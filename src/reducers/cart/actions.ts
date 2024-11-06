import { Product } from '../../Interfaces/Product'

export enum ActionTypes {
  ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
  UPDATE_PRODUCT_QUANTITY = 'UPDATE_PRODUCT_QUANTITY',
  REMOVE_PRODUCT_TO_CART = 'REMOVE_PRODUCT_TO_CART',
  CLEAN_CART = 'CLEAN_CART'
}

interface AddProductToCartActionData {
  type: ActionTypes.ADD_PRODUCT_TO_CART
  payload: { newProduct: Product; quantity: number }
}

interface UpdateProductQuantityActionData {
  type: ActionTypes.UPDATE_PRODUCT_QUANTITY
  payload: { productId: string; quantity: number }
}

interface RemoveProductToCartActionData {
  type: ActionTypes.REMOVE_PRODUCT_TO_CART
  payload: string
}

interface CleanCartActionData {
  type: ActionTypes.CLEAN_CART
}

export type ActionData =
  | AddProductToCartActionData
  | UpdateProductQuantityActionData
  | RemoveProductToCartActionData
  | CleanCartActionData

export function addProductToCartAction(
  newProduct: Product,
  quantity: number
): AddProductToCartActionData {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART,
    payload: {
      newProduct,
      quantity
    }
  }
}

export function updateProductQuantityAction(
  productId: string,
  quantity: number
): UpdateProductQuantityActionData {
  return {
    type: ActionTypes.UPDATE_PRODUCT_QUANTITY,
    payload: {
      productId,
      quantity
    }
  }
}

export function removeProductToCartAction(
  productId: string
): RemoveProductToCartActionData {
  return {
    type: ActionTypes.REMOVE_PRODUCT_TO_CART,
    payload: productId
  }
}

export function cleanCartAction(): CleanCartActionData {
  return {
    type: ActionTypes.CLEAN_CART
  }
}
