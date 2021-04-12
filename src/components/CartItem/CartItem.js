import React from 'react';
import Button from './../Button/Button.js';
import './assets/CartItem.css';

class CartItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      itemQuantity: this.props.quantity
    }

    this.decreaseQty = this.decreaseQty.bind(this);
    this.increaseQty = this.increaseQty.bind(this);
  }

  decreaseQty(){
    const cart = JSON.parse(window.localStorage.getItem("Cart"));
    let index = cart.findIndex(element => element.variantId === this.props.variantId)
    if (index > -1) {
      cart[index].quantity -= 1;
      window.localStorage.setItem("Cart", JSON.stringify(cart))
      this.setState({ itemQuantity: cart[index].quantity })
    }

  }

  increaseQty(){
    const cart = JSON.parse(window.localStorage.getItem("Cart"));
    let index = cart.findIndex(element => element.variantId === this.props.variantId)
    if (index > -1) {
      cart[index].quantity += 1;
      window.localStorage.setItem("Cart", JSON.stringify(cart))
      this.setState({ itemQuantity: cart[index].quantity })  
    }
  }

  render(){
    return(
        this.state.itemQuantity>0
          ?(
            <div className="cart-item">
                <div id="cart-stock-img-placeholder">
                  <img className="cart-stock-img" src={this.props.imgUrl}/>
                </div>
                <div className="cart-text">
                    <div className="cart-stock-text">{this.props.name}</div>
                    <div className="cart-stock-text">Size: {this.props.size}</div>
                    <div className="cart-stock-text cart-quantity-row">
                        <div onClick={this.decreaseQty} className="qty-btn">
                          <Button styleType='light' type={null} innerHTML='-'/>
                        </div>
                        Quantity: {this.state.itemQuantity}
                        <div onClick={this.increaseQty} className="qty-btn">
                          <Button styleType='light' type={null} innerHTML='+'/>
                        </div>
                     </div>
                    <div className="cart-stock-text">${this.props.price}</div>

                    <div className="removeButton">Remove From Cart</div>
                </div>

            </div>)
          : null
    )
  }
}


export default CartItem;
