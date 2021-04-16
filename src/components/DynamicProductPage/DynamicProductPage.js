import React from 'react';
import Button from '../Button/Button.js';

import { getProduct } from '../../apis/shopify.js';

import './assets/DynamicProductPage.css';

class DynamicProductPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
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

 componentDidUpdate(previousProps){
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
                <form className="inventory-buttons" onSubmit={(e)=>{this.props.addToCart(e,this.state)}}>
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
