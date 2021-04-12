import React from 'react';
import InfoSquare from '../components/InfoSquare/InfoSquare.js';


const dummyText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
const numbers = [1, 2, 3, 4, 5];

class Policies extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      info:{
        "How do Preorder Releases Work?": { imgUrl:null,
                  text:[
                    "All preorder releases include shipping estimates in the product details. Products may  ship sooner or later than what is in the details. In this case, you will be notified via email  of any changes to the shipping of the purchased item(s).",
                    "Credit cards are charged at the time of the purchase of preorder and are subject to our  fraud checks. OATH is not liable for delays, cancellations or changes to preordered  item(s)."
                  ]
                } ,
        "When Will My Order Arrive?": { imgUrl:null,
                  text:[
                    "Once your payment is received, you will be emailed with shipping and delivery  information regarding your order. This will include tracking information."
                  ]
                } ,
        "What if I live outside of the US?": { imgUrl:null,
                  text:[
                      "All international orders are shipped Delivered Duties Unpaid. This means that you, the  customer, are responsible for paying your local country’s import duties at time of  delivery. Placing an order to an international destination serves as confirmation that you  understand your responsibility to pay these fees at time of delivery."
                  ]
        } ,
        "Can I return my item?": { imgUrl:null,
                  text:[
                    "ALL SALES ARE FINAL. The only way to return an item is by emailing:  AFAMILYOATH@GMAIL.COM and informing us that we have made an error. This  means the product you received is either the WRONG SIZE or WRONG PRODUCT.  Please allow 2-3 business days for us to respond to your email. HEY, I GOT THE WRONG ITEM/ SIZE.",
                    "Please contact AFAMILYOATH@GMAIL.COM directly so that we can work through this  with you. Please allow 2-3 business days for us to respond to your email."
                  ]
        } ,
        "I made an order but I haven't received an email confirmation": { imgUrl:null,
                  text:[
                    "Please contact AFAMILYOATH@GMAIL.COM directly so that we can work through this  with you. Please allow 2-3 business days for us to respond to your email."
                  ]
        } ,
        "When are new products added to the website?": { imgUrl:null,
                  text:[
                    "Join the OATH Newsletter on the homepage of our website to get all updates of  releases."
                  ]
        },
        "Do you restock products?": { imgUrl:null,
                  text:[
                    "Join the OATH Newsletter on the homepage of our website to get all updates of  releases. We do not guarantee that any item will be restocked."
                  ]
        },
        "I still have a question. How can I contact you directly?": { imgUrl:null,
                text:[
                  "Our email is AFAMILYOATH@GMAIL.COM. Please allow 2-3 business days for us  to respond to your email. "
                ]
        }
      }
    }

  }

  render(){
    return(
      <div className="business-logic-right">
      {
        numbers.map(function(number){
          return <InfoSquare title={"Question "+number} innerHTML={dummyText} style={null} />
        })
      }

      </div>
    )
  }
}


export default Policies;
