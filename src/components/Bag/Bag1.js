import React from 'react';
import Button from './../Button/Button.js';
import CartItem from './../CartItem/CartItem.js';
import './assets/Bag1.css';

class Bag1 extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }

  }

  render(){
    return(
      <div id="bag-sub-nav">
            <div className="bag-stock-text">Shopping Bag</div>
            <div className="bag-stock-text"> You have __ items in your cart.</div>
            <div id="bag-cart-list">

              <CartItem
                  imgUrl="https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image-620x600.jpg"
                  name="testquan"
                  quantity={5}
                  size ="XL"
                  price={200.50}
              />
              <CartItem
                  imgUrl="https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image-620x600.jpg"
                  name="testquan"
                  quantity={5}
                  size ="XL"
                  price={200.50}
              />
              <CartItem
                  imgUrl="https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image-620x600.jpg"
                  name="testquan"
                  quantity={5}
                  size ="XL"
                  price={200.50}
              />
              <CartItem
                  imgUrl="https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image-620x600.jpg"
                  name="testquan"
                  quantity={5}
                  size ="XL"
                  price={200.50}
              />
            </div>
            <div id="bag-shipping" className="bag-stock-text">Shipping: $</div>


      </div>
    )
  }
}


export default Bag1;
