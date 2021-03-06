import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Test from './pages/Test.js';

ReactDOM.render(
  <BrowserRouter>
      <div>
      <Route path="/" component={Test}/>
      </div>
  </BrowserRouter>, document.getElementById("root"));
