import React from 'react';
import ProductSquare from './../components/ProductSquare/ProductSquare.js';



class Test extends React.Component{
  constructor(props){
    super(props);
    this.state = {products:[]}
    for(let i = 0; i<200; i++){
      this.state.products.push(<ProductSquare/>)
    }
  }
//TODO: @Carlos: add props to test your buttons like on the pdf
  render(){
    return(
      <div className="business-logic-right catalog">
        {this.state.products}
      </div>
    )
  }
}


export default Test;
