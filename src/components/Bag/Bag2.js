import React from 'react';
import Button from './../Button/Button.js';
import CartItem from './../CartItem/CartItem.js';
import './assets/Bag2.css';

class Bag2 extends React.Component{
  constructor(props){
    super(props);
    this.state = {}

  }

  render(){
    return(


        <form id ="payment-form">
        <div className = "payment-row" id="payment-contactInfo">
          <input className = "payment-col"  id="firstName" type="text" placeholder="First Name"/>
          <input className = "payment-col"  id="lastName" type="text" placeholder="Last Name"/>
        </div>

        <div className = "payment-row">
          <input className="full" id="email" type="text" placeholder="Email"/>
        </div>

        <div className = "payment-row">
          <input className="full" id="phone" type="text" placeholder="Phone"/>
        </div>

        <div className = "payment-row" id="payment-shippingInfo">
          <input className="full" id="address1" type="text" placeholder="Address"/>
        </div>
        <div className = "payment-row">
          <input className="full" id="address2" type="text" placeholder="Apartment, Suite, Etc. (optional)"/>
        </div>
        <div className = "payment-row">
          <input className="full" id="province" type="text" placeholder="State"/>
        </div>
        <div className = "payment-row">
          <input className="full" id="city" type="text" placeholder="City"/>
        </div>
        <div className = "payment-row">
          <input className="full" id="zip" type="text" placeholder="Zip Code"/>
        </div>



        </form>
      
    )
  }

}

export default Bag2;
