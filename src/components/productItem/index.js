import React, { PropTypes } from 'react';

const ProductItem = (props) => {
  console.log('params ' + props.match.params.id);

  console.log('products ' + props.x);
  let allItems = props.x
  let currItem

  allItems.find(item => {
    if (item.id === props.match.params.id){
      console.log(item)
      currItem = <div>{item.name}{item.brand}</div>
    }
  })

  return(
        <div>{currItem}</div>
  )
}

export default ProductItem
