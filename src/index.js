import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect, withRouter} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation.js';
import Sidebar from './components/Navigation/Sidebar.js';
import DynamicProductPage from './components/DynamicProductPage/DynamicProductPage.js';
import Bag from './components/Bag/Bag.js';
import Test from './pages/Test.js';

import Home from './pages/Home.js';
import Oath from './pages/Oath.js';
import Policies from './pages/Policies.js';

import Catalog from './pages/Catalog.js';

import './index.css';

if (!window.localStorage.getItem("Cart")) {
  try {
    window.localStorage.setItem("Cart", JSON.stringify([]));
  } catch(err) {

  }
}

ReactDOM.render(
  <BrowserRouter>
      <div>
      <Route path="/" component={Navigation}/>


      <div id="business-logic">

          <Route path="/:a([A-Za-z]+)" component={Sidebar}/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/oath" component={Oath}/>
            <Route exact path="/policies" component={Policies}/>
            <Route exact path="/shop" component={Catalog}/>
            <Route exact path="/shop/:id" component={DynamicProductPage}/>
          </Switch>
            <Route path="/" component={Bag}/>
      </div>
      </div>
  </BrowserRouter>, document.getElementById("root"));
