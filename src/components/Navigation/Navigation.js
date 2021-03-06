import React from 'react';
import './assets/Navigation.css';

class Navigation extends React.Component{
  constructor(props){
    super(props);
    this.state = {};

  }


  render(){
    return (
      <div id="main-nav">

      <div className="main-nav-big" id="main-nav-name"></div>
      <div className="main-nav-small" id="main-nav-logo"></div>
      <div className="main-nav-big" id="main-nav-about"></div>
      <div className="main-nav-big" id="main-nav-shop"></div>
      <div className="main-nav-big" id="main-nav-policies"></div>
      <div className="main-nav-small" id="main-nav-bag"></div>
      </div>
    )
  }
}


export default Navigation;
