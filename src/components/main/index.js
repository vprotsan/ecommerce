import React, { PropTypes } from 'react'
import { Link } from 'react-router';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Image from 'react-simple-image'
import axios from 'axios';

import Logo from '../../components/Logo'


class MainPage extends React.Component {

  render(){

    // console.log(this.state.products)
    let srcSetPath;
    let productsArr = this.props.products.map((item, index) => {

     if(item.inventory > 0){
        return   <li className="product" key={item.id}>
                    <div className="productWrapper">
                      <div className="thumbWrapper">
                        <Image srcSet={item.thumbnail}
                               alt={item.name}
                               className='thumb'
                               src={item.thumbnail['1x']}
                         />
                      </div>
                      <div className="contWrapper">
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        {item.sale_price !== '' ? <p className="prodPrice">{item.sale_price}</p> : <p className="prodPrice">{item.price}</p>}
                      </div>
                      <div className="tagsWrap">
                       {
                         item.tags.map( i => {
                             return <span>{i}</span>
                         })
                       }
                      </div>
                      <div className="btn addToCart">
                        <a href='#' onClick={this.props.addToCart.bind(this, index)}>Add to cart</a>
                        <a href={`products/${item.id}`} onClick={this.props.clickedItem.bind(this, index)}>Details</a>
                      </div>
                    </div>
                  </li>
     }
   })

   if (this.props.isLoading) {
        return <h1>loading...</h1>
   }

   return(
       <div>
         <section className="productList">
           <div className="filter"></div>
            <div className="products">
              <ul>
                {productsArr}
              </ul>
            </div>
         </section>
       </div>
   )
  }
}

export default MainPage;
