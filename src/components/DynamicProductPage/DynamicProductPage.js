import React from 'react';
import Button from '../Button/Button.js';

import { getProduct } from '../../apis/shopify.js';

import './assets/DynamicProductPage.css';

class DynamicProductPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {};

    this.addToCart = this.addToCart.bind(this);
    this.getVariantId = this.getVariantId.bind(this);
    this.getVariantTitle = this.getVariantTitle.bind(this);
  }

  componentDidMount() {
    getProduct(this.props.match.params.id).then(response => {
      this.setState({
        title: response.title,
        img: response.images[0].src, 
        description: response.description,
        price: response.variants[0].price,
        variants: response.variants
      })
    })
  }

  addToCart(e) {
    e.preventDefault();
    this.getVariantId(e.target);
    let cartArray = JSON.parse(window.localStorage.getItem("Cart"));
    cartArray.push({
      title: this.state.title,
      price: this.state.price,
      img: this.state.img, // response.images[0].src for default image tile for bag
      variantId: this.getVariantId(e.target),
      variantName: this.getVariantTitle(e.target),
      quantity: 1
    })

    window.localStorage.setItem("Cart", JSON.stringify(cartArray));
  }

  getVariantId(e) {
    let variantId = null;
    [...e].map(size => {
      if (size.checked) {
        variantId = size.value;
        return;
      }
      return;
    })
    return variantId;
  }

  getVariantTitle(e) {
    let variantTitle = null;
    [...e].map(size => {
      if (size.checked) {
        variantTitle = size.name;
        return;
      }
      return;
    })
    return variantTitle;
  }


  render(){
    return (
      this.state.title 
      ?  ( 
            <div className="dynamic-container">
              <img className="product-image" src={this.state.img} />
              <div className="product-ui">
                <div className="product-info">
                  <h3>{this.state.title}</h3>
                  <h4>{this.state.price}</h4>          
                </div>
                <form className="inventory-buttons" onSubmit={this.addToCart}>
                  <div className="size-selection">
                    {this.state.variants.map(variant => {
                      if (!variant.available) {
                        return;
                      }
                      
                      return (
                        <label>
                          {variant.title}
                          <input type="radio" value={variant.id}
                          name={variant.title} /> 
                        </label>
                      )
                    })}
                  </div>
{/*TODO:disable add to cart button if no variant is selected*/}
                  <div className="add-to-cart">
                    <Button
                      innerHTML="Add to Bag" 
                      url="" 
                      type="submit" 
                      styleType="dark" />
                  </div>
                </form>
              </div>

              <div className="product-description">
                    {this.state.description}
              </div>
            </div>
          )
      : (<div className="dynamic-container"> Loading data...</div>)
    )
  }
}


export default DynamicProductPage;
