import React from 'react';
import {Link} from 'react-router-dom';
import Button from './../Button/Button.js';
import Bag from './../Bag/Bag.js';
import './assets/Navigation.css';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bagOpen: false };

    this.openBag = this.openBag.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }


  handleOpen(e) {
    this.setState({ open: true });

    document.getElementById("bag-main-nav").style.animation = "openBag .3s 1";
    document.getElementById("bag-main-nav").style.transition = "display .3s ease-in";
    document.getElementById("bag-main-nav").style.display = "grid";
    setTimeout(() => {
      document.getElementById("bag-main-nav").style.width = "100%";
    }, 280);
  }

  handleClose(e) {
    this.setState({ open: false });
    document.getElementById("bag-main-nav").style.transition = "width .3s ease-out";
    document.getElementById("bag-main-nav").style.width = "0";
    setTimeout(() => { document.getElementById("bag-main-nav").style.display = "none"; }, 280);
  }
  openBag() {
    !this.state.bagOpen
      ? this.handleOpen()
      : this.handleClose()
    this.setState({ bagOpen: !this.state.bagOpen })
  }


  render() {
    return (
      <div id="main-nav">

        <div className="main-nav-big" id="main-nav-name">
          <Button innerHTML="A Family Oath" url="" type="main" styleType="light" />
        </div>
        <div className="main-nav-small" id="main-nav-logo"><Link to="/" style={{height:'100%'}}></Link></div>
        <div className="main-nav-big" id="main-nav-about">
          <Button innerHTML="Oath" url="oath" type="main" styleType="light" />
        </div>
        <div className="main-nav-big" id="main-nav-shop">
          <Button innerHTML="Catalog" url="shop" type="main" styleType="light" />
        </div>
        <div className="main-nav-big" id="main-nav-policies">
          <Button innerHTML="Policies" url="policies" type="main" styleType="light" />
        </div>
        <div onClick={this.openBag} className="main-nav-small" >
          <img id="main-nav-bag" src='/cart.png' />
        </div>
      </div>
    )
  }
}


export default Navigation;
