import {
  LOAD_CART_ITEMS,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM
} from './types'

export function loadCartItems () {
  return {
    type: LOAD_CART_ITEMS
  }
}

export function addCartItem () {
  return {
    type: ADD_CART_ITEM
  }
}

export function removeCartItem () {
  return {
    type: REMOVE_CART_ITEM
  }
}
