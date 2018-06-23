import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios'

import MainPage from './components/main';
import Cart from './components/cart';
import ProductItem from './components/productItem';
import Logo from './components/Logo';
import CartItem from './components/cartItem'

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      products: [],
      currItem: null,
      currItemObject: null,
      isLoading: true,
      cart: null
    }
  }

  componentDidMount(){
    var self = this;
    axios({
      method:'get',
      url:'https://hackathon-api.now.sh/products',
    })
    .then(data => {
      console.log(data.data)
      this.setState({
        products: data.data,
        isLoading: false
      }, function(){
        // console.log(this.state.products)
      })
    })
    .catch(error => {
      console.log(error);
    });

  }

  clickedItem = index => {
    let currItem = this.state.products[index];
    let currObj = this.state.products[index];
    // console.log('curr item' + this.state.currItem);

		this.setState({
			currItem: currItem.id,
      currItemObject: currItem
		}, function(){
      // console.log('curr item' + this.state.currItem);
    });
	}

  addToCart = (index, event) => {
    event.preventDefault();
    let addedItem = this.state.products[index];

    var a;
    //is anything in localstorage?
    if (localStorage.getItem('session') === null) {
        a = [];
    } else {
         // Parse the serialized data back into an array of objects
         a = JSON.parse(localStorage.getItem('session'));
     }
     a.push(addedItem);
     // Re-serialize the array back into a string and store it in localStorage
     localStorage.setItem('session', JSON.stringify(a));
     let currItems = localStorage.getItem('session');
       // let currItems = localStorage.getItem('cartItems');
      let parsedItems = JSON.parse(currItems)

      this.setState({
        cart: parsedItems.length
      })
  }

  render(){
    return(
      <BrowserRouter>
        <div className="container">
          <CartItem cart={this.state.cart}/>
          <Switch>
            <Route exact path="/" render={() => <MainPage products={this.state.products}
                                                          addToCart={this.addToCart}
                                                          clickedItem={this.clickedItem}
                                                          isLoading={this.state.isLoading}
                                                  />}/>
            <Route path="/cart" render={() => <Cart cart={this.state.cart}/>}/>
            <Route exact path="/products/:id" render={props  => <ProductItem {...props} x={this.state.products}/>}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
