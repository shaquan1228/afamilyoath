import React from 'react';
import Button from './../Button/Button.js';
import './assets/Navigation.css';

class Navigation extends React.Component{
  constructor(props){
    super(props);
    this.state = {};

  }


  render(){
    return (
      <div id="main-nav">

          <div className="main-nav-big" id="main-nav-name">
              <Button innerHTML="A Family Oath" url="/" type="main" styleType="light"/>
          </div>
          <div className="main-nav-small" id="main-nav-logo"></div>
          <div className="main-nav-big" id="main-nav-about">
              <Button innerHTML="Oath" url="oath" type="main" styleType="light"/>
          </div>
          <div className="main-nav-big" id="main-nav-shop">
                <Button innerHTML="Catalog" url="shop" type="main" styleType="light"/>
          </div>
          <div className="main-nav-big" id="main-nav-policies">
                <Button innerHTML="Policies" url="policies" type="main" styleType="light"/>
          </div>
          <div className="main-nav-small" id="main-nav-bag">
              <i className="fa fa-shopping-cart"/>
          </div>
      </div>
    )
  }
}


export default Navigation;
