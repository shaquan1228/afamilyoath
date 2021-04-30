import React from 'react';
import Button from '../Button/Button.js';

import { getProduct } from '../../apis/shopify.js';
import './assets/DynamicProductPage.css';
class DynamicProductPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {itemAddedToBag: false};
    this.addToCart = this.addToCart.bind(this)
  }

  componentDidMount() {
    getProduct(this.props.match.params.id).then(response => {
      this.setState({
        id: response.id,
        title: response.title,
        img: response.images[0].src, 
        description: response.description,
        price: response.variants[0].price,
        variants: response.variants
      })
    })
  }

 componentDidUpdate(previousProps,prevState){
  if(this.props.match.params.id !== previousProps.match.params.id){
    getProduct(this.props.match.params.id).then(response => {
      this.setState({
        id: response.id,
        title: response.title,
        img: response.images[0].src, 
        description: response.description,
        price: response.variants[0].price,
        variants: response.variants
      })
    })
  }
 }

addToCart(e){
  e.preventDefault();
  this.props.addToCart(e,this.state); 
  this.setState({itemAddedToBag: true}); 
  /*

  let addToCartButton = document.getElementById("submit-button");
  let animation_html = `Item Added To Bag <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
  <circle class="path circle" fill="none" stroke="white" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
  <polyline class="path check" fill="none" stroke="white" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
  </svg>
  `;
  addToCartButton.innerHTML = animation_html;
  setTimeout(() => {   this.setState({itemAddedToBag: true});  }, 3500);
*/
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
                          <input name="size-radio" type="radio" value={variant.id} id={variant.title}
                         /> 
                        </label>
                      )
                    })}
                  </div>
{/*TODO:disable add to cart button if no variant is selected*/}
                <div className="add-to-cart">
                 {  !this.state.itemAddedToBag
                
                  ? 
                     ( <Button
                        innerHTML="Add to Bag" 
                        url="" 
                        type="submit" 
                        styleType="dark" /> )
                  :  ( <Button
                        innerHTML="Item Added to Bag" 
                        url="" 
                        type="submit" 
                        styleType="dark" />)
                  }
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
