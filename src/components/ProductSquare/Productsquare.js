import React from 'react';
import Button from '../Button/Button.js';

import './assets/ProductSquare.css';


class ProductSquare extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "Product Name",
      img: "https://icons.iconarchive.com/icons/iconsmind/outline/256/T-Shirt-icon.png", 
      productUrl: "oath",
    }

  }
//TODO: @Shaquan: add props to Productsquare
  render(){
    return(
      <div className="product_container">
        <div className="image">
          <img src={this.state.img} alt="shirt"/>
        </div>
        <div className="description">
          <h2><Button innerHTML={this.state.title} url="oath" type="main" styleType="light"/></h2>
          <h3>$$$$$$$</h3>
        </div>
      </div>
    )
  }
}


export default ProductSquare;
