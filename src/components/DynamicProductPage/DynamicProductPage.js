import React from 'react';
import Button from '../Button/Button.js';

import { getProduct } from '../../apis/shopify.js';

import './assets/DynamicProductPage.css';

class DynamicProductPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {};

    getProduct(props.match.params.id).then(response => {
      console.log(response);
      this.setState({
        product: response,
        title: response.title,
        img: response.images[0].src,
        price: response.variants[0].price,
        variants: response.variants
      })
    })

  }
//TODO: @Shaquan: add props to Productsquare
  render(){
    return (
      this.state.product ? 
      <div className="dynamic-container">
        <img className="product-image" src={this.state.img} />
        <div className="product-ui">
          <div className="product-info">
            <h3>{this.state.title}</h3>
            <h4>{this.state.price}</h4>          
          </div>
          <div className="inventory-buttons">
            <div className="size-selection">
              {this.state.variants.map(variant => {
                if (!variant.available) {
                  return;
                }
                
                return (
                  <label>
                    {variant.title}
                    <input type="radio" value="email"
                    name="size" /> 
                  </label>
                )
              })}
            </div>

            <div className="add-to-cart">
              <Button
                onClick='' 
                innerHTML="Add to Bag" 
                url="" 
                type="none" 
                styleType="dark" />
            </div>
          </div>
        </div>

        <div className="product-description">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat 
            interdum neque vitae dignissim. Cras at dolor id tellus lobortis lacinia nec 
            eu risus. Cras quis lorem in ex pretium blandit. Nam et tristique lectus, quis 
            varius urna. Ut eros orci, lobortis nec euismod nec, lacinia et dui. Phasellus 
            dictum massa eget felis consequat mattis. In nec molestie ante. Mauris eget 
            commodo sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus 
            scelerisque in magna vel bibendum. Quisque sagittis lacus id sem fringilla, sit 
            amet condimentum elit venenatis. Aliquam eget tellus lectus. Sed sollicitudin, 
            sapien in dignissim gravida, urna magna dignissim leo, sed pretium eros ex id 
            nisl.</p>
        </div>
      </div>
      : <div>404 error no data found</div>
    )
  }
}


export default DynamicProductPage;
