import React from 'react';


const CartItem = props => {

    let currItems = localStorage.getItem('session');
    // let currItems = localStorage.getItem('cartItems');
    let parsedItems = JSON.parse(currItems)

    console.log(parsedItems)

    

    return(
        <div className="cart"><a href="/cart"> {parsedItems.length} items</a></div>
    )
}

export default CartItem
