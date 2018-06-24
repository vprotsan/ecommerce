import React from 'react';


const CartItem = props => {

    let currItems = localStorage.getItem('session');
    let parsedItems = JSON.parse(currItems)

    return(
        <div className="cart"><a href="/cart"> {parsedItems ? parsedItems.length : '0'} items</a></div>
    )
}

export default CartItem
