import React from 'react';
import Button from '../Button/Button.js';

import './assets/DynamicProductPage.css';


class DynamicProductPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "Product Name",
      img: "https://icons.iconarchive.com/icons/iconsmind/outline/256/T-Shirt-icon.png",
      price: "$99.00",
      productId: "00567",
    }

  }
//TODO: @Shaquan: add props to Productsquare
  render(){
    return(
      <div className="dynamic-container">
        <img src={this.state.img} />
        <div className="product-info">
          <div className="product-title">
            {this.state.title}
          </div>
          <h4>{this.state.price}</h4>
        </div>
        <div className="inventory-button">
          {/* <radioButton ---> add radio small medium large*/}
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
    )
  }
}


export default DynamicProductPage;