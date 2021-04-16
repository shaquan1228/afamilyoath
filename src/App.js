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
  }

  getQuantity(cart) {
    if (!cart.length) {
      return 0;
    }
    return cart.reduce((acc,item) => {
      return acc + item.quantity
    }, 0)
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

  componentDidUpdate(_prevProps, prevState) {
    console.log(prevState)
    if (prevState.quantity !== this.state.quantity) {
      this.setState({ cart: JSON.parse(window.localStorage.getItem("Cart")) })
    }
  }

  //TODO: @Carlos: add props to test your buttons like on the pdf
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
                  <DynamicProductPage {...props} cart={this.state.cart} />
                )}  />
            </Switch>
            <Route path="/">
              <Bag cart={this.state.cart} quantity={this.state.quantity} />
            </Route>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}


export default App;
