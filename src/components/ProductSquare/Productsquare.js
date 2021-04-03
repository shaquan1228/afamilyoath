import React from 'react';
import Button from '../Button/Button.js';

import './assets/ProductSquare.css';


class ProductSquare extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: props.title,
      img: props.img,
      productId: props.id,
      price: props.price
    }

  }

  render(){
    return(
      <div className="product_container">
        <div className="image">
          <img className="image-div" src={this.state.img} alt="shirt"/>
        </div>
        <div className="description">
          <h2><Button innerHTML={this.state.title} url={'shop/'+this.state.productId} type="main" styleType="light"/></h2>
          <h3> ${this.state.price} </h3>
        </div>
      </div>
    )
  }
}


export default ProductSquare;
