import React from 'react';
import ReactGA from 'react-ga';
import {getProducts} from './../apis/shopify.js';
import ProductSquare from '../components/ProductSquare/ProductSquare.js';



class Catalog extends React.Component {
  constructor(props) {
    super(props);
    ReactGA.pageview(props.location.pathname);
    
    this.state = {
      products: null
    }
    getProducts().then(response => {
      this.setState({
        products: response.reverse()
      })
    });
  }

  render() {
    return(
      <div className="business-logic-right">
        <div className="catalog-logic">

          { this.state.products
                  ? this.state.products.map(function(collection,i){
                      return(
                                <div key={collection+i} id={collection.title} className="sub-nav-finder catalog">
                                {collection.products.map(function(node,x){
                                   return <ProductSquare key={node+x} id={node.id} title={node.title} img={node.images[0].src} price={node.variants[0].price} description={node.descriptionHtml}/>
                                })}

                                </div>

                      )

                    })

                  : null
            }
        </div>
      </div>
    )
  }
}


export default Catalog;
