import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import ReactGA from 'react-ga';
import './index.css';



ReactDOM.render(
  <BrowserRouter>
      <div id="root_router">

      <Route path="/"/>
      <Switch style={{transform:"3s", opacity:1}}>

      </Switch>


  </BrowserRouter>,
  document.getElementById('root')
);
