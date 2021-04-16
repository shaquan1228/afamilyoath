import React from 'react';
import {Link} from 'react-router-dom';
import Button from './../Button/Button.js';
import './assets/CartItem.css';

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}


  }



  render() {
    console.log(this.props)
    return (
      this.props.quantity > 0
        ? (
            <div className="cart-item">
              
                <div id="cart-stock-img-placeholder">
                  <img className="cart-stock-img" src={this.props.imgUrl} />
                </div>
                <div className="cart-text">
                  <div className="cart-stock-text">
                    <Button type="main" styleType="light" innerHTML={this.props.name} url={'shop/' + this.props.id}/>
                    </div>
                  <div className="cart-stock-text">Size: {this.props.size}</div>
                  <div className="cart-stock-text cart-quantity-row">
                    <div onClick={()=>this.props.decreaseQty(this.props.variantId)} className="qty-btn">
                      <Button styleType='light' type={null} innerHTML='-' />
                    </div>
                    Quantity: {this.props.quantity}
                    <div onClick={()=>this.props.increaseQty(this.props.variantId)} className="qty-btn">
                      <Button styleType='light' type={null} innerHTML='+' />
                    </div>
                  </div>
                  <div className="cart-stock-text">${this.props.price}</div>
                    <div onClick={()=>this.props.removeFromCart(this.props.variantId)} className="removeButton">Remove From Cart</div>
                </div>
              
            </div>
            
          )
        : (null)
    )
  }
}


export default CartItem;
