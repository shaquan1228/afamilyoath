import React from 'react';
import CartItem from './../CartItem/CartItem.js';
import './assets/Bag1.css';

class Bag1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  
  
  render() {
    return (
      <div id="bag-sub-nav">
        <div className="bag-stock-text">Shopping Bag</div>

          <div className="bag-stock-text"> You have {this.props.quantity} items in your cart.</div>
          <div id="bag-cart-list">
            {
              this.props.cart &&
              this.props.cart.map(item => {

                return (
                  <CartItem
                    imgUrl={item.img}
                    id = {item.id}
                    name={item.title}
                    variantId={item.variantId}
                    quantity={item.quantity}
                    increaseQty={this.props.increaseQty} 
                    decreaseQty={this.props.decreaseQty}
                    removeFromCart = {this.props.removeFromCart}
                    size={item.variantName}
                    price={item.price}
                  />
                )
              })
            }
          </div>
          <div id="bag-shipping" className="bag-stock-text">Shipping: $7.00</div>


      </div>
    )
  }
}


export default Bag1;
