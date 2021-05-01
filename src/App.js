import React from 'react';
import ReactGA from 'react-ga';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation.js';
import Sidebar from './components/Navigation/Sidebar.js';
import DynamicProductPage from './components/DynamicProductPage/DynamicProductPage.js';
import Bag from './components/Bag/Bag.js';

import Home from './pages/Home.js';
import Oath from './pages/Oath.js';
import Policies from './pages/Policies.js';

import Catalog from './pages/Catalog.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

    ReactGA.initialize('UA-196060597-1');
    

    this.getQuantity = this.getQuantity.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.decreaseQty = this.decreaseQty.bind(this);
    this.increaseQty = this.increaseQty.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);

    console.log("This was made by Shaquan Nelson and Carlos Ramirez. The greatest coders that ever lived.")
  }

  getQuantity(cart) {
    if (!this.state.cart) {
      return 0;
    }
    return cart.reduce((acc,item) => {
      return acc + item.quantity
    }, 0)
  }

  getTotalPrice() {
    if (!this.state.cart) {
      return 0;
    }
    return this.state.cart.reduce((acc,item) => {
      return acc + parseInt(item.price) * item.quantity;
    }, 0).toFixed(2);
  }

  addToCart(e,item) {
    e.preventDefault();
    let variantID;
    let variantTitle;
    let inputIndex = [...e.target].findIndex(input => input.checked===true);
    if(inputIndex > -1){
        let jsonValueofIndex = JSON.parse(e.target[inputIndex].value);
        variantID = jsonValueofIndex.id;
        variantTitle = jsonValueofIndex.title;
    }
    let cart = this.state.cart;
    console.log(variantID)
    let index = cart.findIndex(element => element.variantId === variantID)
    if (index > -1) {
      cart[index].quantity += 1;
    } else if(inputIndex>-1) {
      console.log(variantTitle);
      cart.push({
        id: item.id,
        title: item.title,
        price: item.price,
        img: item.img, 
        variantId: variantID,
        variantName: variantTitle,
        quantity: 1
      })
    }
    window.localStorage.setItem("Cart", JSON.stringify(cart));
    this.setState({ cart: cart, quantity: this.getQuantity(cart) })
  }

  componentDidMount() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
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
    const totalPrice = this.getTotalPrice();
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Navigation} />

          <div id="business-logic">
            <Route exact path="/:a([A-Za-z]+)" component={Sidebar} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/oath" component={Oath} />
              <Route exact path="/policies" component={Policies} />
              <Route exact path="/shop" component={Catalog} />
              <Route exact path="/shop/:id" 
                render={(props) => (
                  <DynamicProductPage {...props} addToCart={this.addToCart} cart={this.state.cart} />
                )}  />
              <Redirect to="/"/>
            </Switch>
            <Route path="/">
              <Bag cart={this.state.cart} quantity={this.state.quantity} 
                increaseQty={this.increaseQty} 
                decreaseQty={this.decreaseQty}
                totalPrice={totalPrice} 
                removeFromCart = {this.removeFromCart} />
            </Route>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}


export default App;
