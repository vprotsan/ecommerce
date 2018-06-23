import React, { PropTypes } from 'react';

const ProductItem = ({match, props}) => {
  console.log('p', match);
  const i = props.x.find(x => x.id === match.id);
    return(
          <h1>{i.name}</h1>
    )
}

export default ProductItem
