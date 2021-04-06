import React from 'react';
import {getProducts} from './../apis/shopify.js';
import ProductSquare from './../components/ProductSquare/ProductSquare.js';



class Catalog extends React.Component{
  constructor(props){
    super(props);
    this.state = {products:null}
    getProducts().then(response=>{
      this.setState({
        products: response.reverse()})
    });
  }

  render(){

    return(
      <div className="business-logic-right catalog">

          { this.state.products
                  ? this.state.products.map(function(collection){
                      return(
                                <div id={collection.title} className="sub-nav-finder catalog">
                                {collection.products.map(function(node){
                                   return <ProductSquare id={node.id} title={node.title} img={node.images[0].src} price={node.variants[0].price} description={node.descriptionHtml}/>
                                })}

                                </div>

                      )

                    })

                  : null
            }

      </div>
    )
  }
}


export default Catalog;
