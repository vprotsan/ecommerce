import * as CartActionType from '../actionTypes/cart';
console.log(CartActionType)

const initialState = {
  // products: props.products,
  cartItems: []
}

function Cart(state=initialState, action){

  switch(action.type){
    case CartActionType.ADD_TO_CART: {
      return Object.assign({}, state, {
        cartItems: [
          ...state.cartItems,
          {

          }
        ]
      })
    }

    // case CartActionType.REMOVE_FROM_CART:
    //   const removeItem = [
    //     ...state.slice(0, action.index),
    //     ...state.slice(action.index + 1)
    //   ];
    //   return {
    //     ...state,
    //     cartItems: removeItem
    //   }

    default:
      return state
  }
}

export default Cart;
