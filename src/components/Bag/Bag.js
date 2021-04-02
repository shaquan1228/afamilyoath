import React from 'react';
import Bag1 from './Bag1.js';
import Bag2 from './Bag2.js';
import Button from './../Button/Button.js';
import './assets/Bag.css';

class Bag extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      readyToPurchase: false,
      buttonInnerHTML: "Proceed to Purchase"
    }
    this.queryUserInfo = this.queryUserInfo.bind(this);
    this.queryPurchase = this.queryPurchase.bind(this);
    this.handleReverse = this.handleReverse.bind(this);
    // this.handleClose = this.handleClose.bind(this);

  }

  componentDidUpdate(){

  }

  queryPurchase(){
  let form = document.getElementById("payment-form");
  let address1 = form.address1.value;
  let address2 = form.address2.value;
  let city = form.city.value;
  // company:
  // country:
  let firstName = form.firstName.value;
  let lastName = form.lastName.value;
  let phone = form.phone.value;
  let province = form.province.value;
  let zip = form.zip.value;

console.log(firstName);
  let email = form.email.value;
  let regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
  if(address1 && city && province && regexp.test(zip)
    && firstName && lastName && phone && email){
      const contactInfo = email
      const shippingAddress = {
       address1: address1,
       address2: address2,
       city: city,
       company: null,
       country: 'United States',
       firstName: firstName,
       lastName: lastName,
       phone: phone,
       province: province,
       zip: zip
     };

/*
     makePaymentSession(contactInfo, shippingAddress).then((checkout)=>{
       //Feedback before changing pages!!
       let confirm = window.confirm("Now entering Shopify")
       if(confirm){
         ReactGA.event({
           category: 'Shop',
           action: 'Proceeded to Shopify'
         });
         window.location.replace(checkout); }
       else{ }
     })
*/

    }
    else if( !regexp.test(zip)){
        alert("Please input a proper zip code");
    }
  }

  queryUserInfo(){
    this.setState({
      buttonInnerHTML: "Checkout on Shopify",
      readyToPurchase: true
    })
  }

  handleReverse(){
    console.log(this.state)
    this.setState({
      readyToPurchase: false,
      buttonInnerHTML: "Proceed to Purchase"
    })
  }
  render(){

    return(
    <div id="bag-main-nav">
    {this.state.readyToPurchase
        ?  <i className="bag-change fa fa-arrow-left" onClick={this.handleReverse}/>
        :  <i className="bag-change fa fa-arrow-up"/>
    }
    {this.state.readyToPurchase
    ? <Bag2/>
    : <Bag1/>
    }
    <div onClick={this.state.readyToPurchase? this.queryPurchase : this.queryUserInfo} className="bag-stock-button">
          <Button  innerHTML={this.state.buttonInnerHTML} url={null} type={null} styleType="dark"/>
    </div>

    </div>
    )
  }
}


export default Bag;
