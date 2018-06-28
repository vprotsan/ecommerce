import React from 'react'
import Image from 'react-simple-image'
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import * as CartActionType from '../actions/cart';


class CartPage extends React.Component {

    // static propTypes = {
    //     cartItems: PropTypes.array.isRequired
    // }

    render(){

      // const { dispatch, cartItems } = this.props;
      // const removeItem = bindActionCreators(CartActionType.REMOVE_FROM_CART, dispatch);



        // let currItems = localStorage.getItem('session');
        // let parsedItems = JSON.parse(currItems)
        // let cartItems
        //
        // if(parsedItems){
        //     let sum = 0
        //     parsedItems.forEach(item => {
        //         if (item.price){
        //             sum += item.price
        //         }
        //     })
        //     var roundedSub = parseFloat(sum).toFixed(2)
        //
        //     //working version
        //     cartItems = parsedItems.map(i => {
        //         return <tr key={Date.now()}>
        //                     <td className="col-sm-8 col-md-6">
        //                         <div className="media">
        //                             <a className="thumbnail pull-left" href={`products/${i.id}`}>
        //                                 <Image srcSet={i.images[0]}
        //                                        alt={i.name}
        //                                        className='thumb'
        //                                        src={i.images['1x']}
        //                                  />
        //                             </a>
        //                             <div className="media-body">
        //                                 <h4 className="media-heading"><a href={`products/${i.id}`}>{i.name}</a></h4>
        //                             </div>
        //                         </div>
        //                     </td>
        //                     <td className="col-sm-1 col-md-1" >
        //                     <input type="number" className="form-control" id="exampleInputEmail1" value="" />
        //                     </td>
        //                     <td className="col-sm-1 col-md-1 text-center"><strong>{i.name}</strong></td>
        //                     <td className="col-sm-1 col-md-1">
        //                     <button type="button" className="btn btn-danger" onClick={removeItem}>
        //                         <span className="glyphicon glyphicon-remove"></span> Remove
        //                     </button></td>
        //                 </tr>
        //
        //     })
        // }

        return(
            <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-10 col-md-offset-1">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th className="text-center">Price</th>
                                        <th className="text-center">Total</th>
                                        <th> </th>
                                    </tr>
                                </thead>
                                {/* <tbody>
                                    {parsedItems ? cartItems : 'Cart is empty'}
                                    <tr>
                                        <td>   </td>
                                        <td>   </td>
                                        <td>   </td>
                                        <td><h5>Subtotal</h5></td>
                                        <td className="text-right"><h5><strong>{roundedSub}</strong></h5></td>
                                    </tr>
                                    <tr>
                                        <td>   </td>
                                        <td>   </td>
                                        <td>   </td>
                                        <td><h5>Estimated shipping</h5></td>
                                        <td className="text-right"><h5><strong>$6.94</strong></h5></td>
                                    </tr>
                                    <tr>
                                        <td>   </td>
                                        <td>   </td>
                                        <td>   </td>
                                        <td><h3>Total</h3></td>
                                        <td className="text-right"><h3><strong>$31.53</strong></h3></td>
                                    </tr>
                                    <tr>
                                        <td>   </td>
                                        <td>   </td>
                                        <td>   </td>
                                        <td>
                                        <button type="button" className="btn btn-default">
                                            <span className="glyphicon glyphicon-shopping-cart"></span> Continue Shopping
                                        </button></td>
                                        <td>
                                        <button type="button" className="btn btn-success">
                                            Checkout <span className="glyphicon glyphicon-play"></span>
                                        </button></td>
                                    </tr>
                                </tbody> */}
                            </table>
                        </div>
                    </div>
                </div>
        )
    }
}

const mapStateToProps = state => (
  {
    // cartItems: state.cartItems
  }
);

export default connect(mapStateToProps)(CartPage);
