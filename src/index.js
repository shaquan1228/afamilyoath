import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect, withRouter} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation.js';
import Sidebar from './components/Navigation/Sidebar.js';
import Bag from './components/Bag/Bag.js';
import Test from './pages/Test.js';

import Oath from './pages/Oath.js';
import Policies from './pages/Policies.js';
import Catalog from './pages/Catalog.js';

import './index.css';


ReactDOM.render(
  <BrowserRouter>
      <div>
      <Route path="/" component={Navigation}/>


      <div id="business-logic">

          <Route path="/:a([A-Za-z]+)/" component={Sidebar}/>
          <Switch>
            <Route path="/oath" component={Oath}/>
            <Route path="/policies" component={Policies}/>
            <Route path="/shop" component={Catalog}/>
          </Switch>
            <Route path="/" component={Bag}/>
      </div>
      </div>
  </BrowserRouter>, document.getElementById("root"));
