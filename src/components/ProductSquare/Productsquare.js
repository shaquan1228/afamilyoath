import React from 'react';
import Button from '../Button/Button.js';

import './assets/ProductSquare.css';


class ProductSquare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

  }

  //TODO: Make entire container link to product
  render() {
    return (
      <div className="product_container">
        <div className="image">
          <img className="image-div" src={this.props.img} alt="shirt" />
        </div>
        <div className="description">
          <div className="product-title"><Button innerHTML={this.props.title} url={'shop/' + this.props.id} type="main" styleType="light" /></div>
          <div className="product-price"> ${this.props.price} </div>
        </div>
      </div>
    )
  }
}


export default ProductSquare;
