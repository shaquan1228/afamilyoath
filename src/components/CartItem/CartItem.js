import React from 'react';
import Button from './../Button/Button.js';
import './assets/CartItem.css';

class CartItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      imgUrl: props.imgUrl,
      name: props.name,
      size: props.size,
      quantity: props.quantity,
      price: props.price
    }
    this.decreaseQty = this.decreaseQty.bind(this);
    this.increaseQty = this.increaseQty.bind(this);
  }


  decreaseQty(){
    this.setState({quantity:this.state.quantity-1});
  }

  increaseQty(){
    this.setState({quantity:this.state.quantity+1});
  }
  render(){
    return(
        this.state.quantity>0
          ?(
            <div className="cart-item">
                <div id="cart-stock-img-placeholder">
                  <img className="cart-stock-img" src={this.state.imgUrl}/>
                </div>
                <div className="cart-text">
                    <div className="cart-stock-text">{this.state.name}</div>
                    <div className="cart-stock-text">Size: {this.state.size}</div>
                    <div className="cart-stock-text cart-quantity-row">
                        <div onClick={this.decreaseQty} className="qty-btn">
                          <Button styleType='light' type={null} innerHTML='-'/>
                        </div>
                        Quantity: {this.state.quantity}
                        <div onClick={this.increaseQty} className="qty-btn">
                          <Button styleType='light' type={null} innerHTML='+'/>
                        </div>
                     </div>
                    <div className="cart-stock-text">${this.state.price}</div>

                    <div className="removeButton">Remove From Cart</div>
                </div>

            </div>)
          : null
    )
  }
}


export default CartItem;
