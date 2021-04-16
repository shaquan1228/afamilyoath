import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation.js';
import Sidebar from './components/Navigation/Sidebar.js';
import DynamicProductPage from './components/DynamicProductPage/DynamicProductPage.js';
import Bag from './components/Bag/Bag.js';
import Test from './pages/Test.js';

import Home from './pages/Home.js';
import Oath from './pages/Oath.js';
import Policies from './pages/Policies.js';

import Catalog from './pages/Catalog.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

    this.getQuantity = this.getQuantity.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.getVariantId = this.getVariantId.bind(this);
    this.getVariantTitle = this.getVariantTitle.bind(this);
    this.decreaseQty = this.decreaseQty.bind(this);
    this.increaseQty = this.increaseQty.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  getQuantity(cart) {
    if (!cart.length) {
      return 0;
    }
    return cart.reduce((acc,item) => {
      return acc + item.quantity
    }, 0)
  }

  addToCart(e,item) {
    e.preventDefault();
    console.log(item)
    const variantID = this.getVariantId(e.target);
    let cart = this.state.cart;
    let index = cart.findIndex(element => element.variantId === variantID)
    if (index > -1) {
      cart[index].quantity += 1;
    } else {
      cart.push({
        id: item.id,
        title: item.title,
        price: item.price,
        img: item.img, // response.images[0].src for default image tile for bag
        variantId: variantID,
        variantName: this.getVariantTitle(e.target),
        quantity: 1
      })
    }
    window.localStorage.setItem("Cart", JSON.stringify(cart));
    this.setState({ cart: cart, quantity: this.getQuantity(cart) })
  }

  getVariantId(e) {
    let variantId = null;
    [...e].map(size => {
      if (size.checked) {
        variantId = size.value;
        return;
      }
      return;
    })
    return variantId;
  }

  getVariantTitle(e) {
    let variantTitle = null;
    [...e].map(size => {
      if (size.checked) {
        variantTitle = size.name;
        return;
      }
      return;
    })
    return variantTitle;
  }


  componentDidMount() {
    if (!window.localStorage.getItem("Cart")) {
      try {
        window.localStorage.setItem("Cart", JSON.stringify([]));
      } catch(err) {
      }
    }
    this.setState({ 
      cart: JSON.parse(window.localStorage.getItem("Cart")), 
      quantity: this.getQuantity(JSON.parse(window.localStorage.getItem("Cart")))
    });
  }

  removeFromCart(variantId){
    const cart = this.state.cart;
    let index = cart.findIndex(element => element.variantId === variantId)
    if (index > -1) {
      cart.splice(index,1);
      window.localStorage.setItem("Cart", JSON.stringify(cart))
      this.setState({ cart: cart, quantity: this.getQuantity(cart) })
    }

  }

  decreaseQty(variantId) {
    const cart = this.state.cart;
    let index = cart.findIndex(element => element.variantId === variantId)
    if (index > -1) {
      cart[index].quantity -= 1;
      window.localStorage.setItem("Cart", JSON.stringify(cart))
      this.setState({ cart: cart, quantity: this.getQuantity(cart) })
    }

  }

  increaseQty(variantId) {
    const cart = this.state.cart;
    let index = cart.findIndex(element => element.variantId === variantId)
    if (index > -1) {
      cart[index].quantity += 1;
      window.localStorage.setItem("Cart", JSON.stringify(cart))
      this.setState({ cart: cart, quantity: this.getQuantity(cart) })
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Navigation} />

          <div id="business-logic">
            <Route path="/:a([A-Za-z]+)" component={Sidebar} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/oath" component={Oath} />
              <Route exact path="/policies" component={Policies} />
              <Route exact path="/shop" component={Catalog} />
              <Route exact path="/shop/:id" 
                render={(props) => (
                  <DynamicProductPage {...props} addToCart={this.addToCart} cart={this.state.cart} />
                )}  />
            </Switch>
            <Route path="/">
              <Bag cart={this.state.cart} quantity={this.state.quantity} 
                increaseQty={this.increaseQty} 
                decreaseQty={this.decreaseQty} 
                removeFromCart = {this.removeFromCart} />
            </Route>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}


export default App;
