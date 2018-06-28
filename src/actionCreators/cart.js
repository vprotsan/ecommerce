import * as CartActionType from '../actionTypes/cart';
// import axios from 'axios'

export const addToCart = index => {
  return {
    type: CartActionType.ADD_TO_CART,
    index
  }
}

// export const removeFromCart = index => {
//   return {
//     type: CartActionType.REMOVE_FROM_CART,
//     index
//   }
// }
//
// export const recieveProducts = () => {
//   return {
//     products: CartActionType.RECEIVE_PRODUCTS
//   }
// }
