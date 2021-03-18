import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation.js';
import Sidebar from './components/Navigation/Sidebar.js';
import Test from './pages/Test.js';
import './index.css';
import Oath from './components/Oath/Oath.js';

ReactDOM.render(
  <BrowserRouter>
      <div>
      <Route path="/" component={Navigation}/>

      <div id="business-logic">
          <Route path="/:a([A-Za-z]+)/" component={Sidebar}/>
          <Switch>
            <Route path="/oath" component={Oath}/>
          </Switch>
      </div>
      </div>
  </BrowserRouter>, document.getElementById("root"));
