import React from 'react';
import Button from './../Button/Button.js';
import CartItem from './../CartItem/CartItem.js';
import './assets/Bag1.css';

class Bag1 extends React.Component{
  constructor(props){
    super(props);
    this.state = {}

  }

  render(){
    const cart = JSON.parse(window.localStorage.getItem("Cart"));
    return(
      <div id="bag-sub-nav">
            <div className="bag-stock-text">Shopping Bag</div>
            <div className="bag-stock-text"> You have {cart.length} items in your cart.</div>
            <div id="bag-cart-list">
              {cart.map(item => {
                return (
                  <CartItem
                    imgUrl={item.img}
                    name={item.title}
                    variantId={item.variantId}
                    quantity={item.quantity}
                    size ={item.variantName}
                    price={item.price}
                  />
                )
              })}
            </div>
            <div id="bag-shipping" className="bag-stock-text">Shipping: $</div>


      </div>
    )
  }
}


export default Bag1;
