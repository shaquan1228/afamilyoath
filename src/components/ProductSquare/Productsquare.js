import React from 'react';
import Button from '../Button/Button.js';

import './assets/ProductSquare.css';


class ProductSquare extends React.Component{
  constructor(props){
    super(props);
    this.state = {}

  }

  render(){
    console.log(this.props.productId)
    return(
      <div className="product_container">
        <div className="image">
          <img className="image-div" src={this.props.img} alt="shirt"/>
        </div>
        <div className="description">
          <h2><Button innerHTML={this.props.title} url={'shop/'+ this.props.id} type="main" styleType="light"/></h2>
          <h3> ${this.props.price} </h3>
        </div>
      </div>
    )
  }
}


export default ProductSquare;
