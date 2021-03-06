import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation.js';
import Sidebar from './components/Navigation/Sidebar.js';
import Test from './pages/Test.js';

ReactDOM.render(
  <BrowserRouter>
      <div>
      <Route path="/" component={Navigation}/>

      <Route path="/:a([A-Za-z]+)/" component={Sidebar}/>
      </div>
  </BrowserRouter>, document.getElementById("root"));
