
import Client from 'shopify-buy';
const client = Client.buildClient({
  domain: 'oath-worldwide.myshopify.com',
  storefrontAccessToken: 'b0a5210040baae5c2cf63ec688ce0235'
});


function getProduct(productId){
  return client.product.fetch(productId)
}
function getCollections(){
    return client.collection.fetchAll()
}


function getProducts() {
  return client.collection.fetchAllWithProducts()
}

function makePaymentSession(contactInfo, shippingAddress ){
  let lineItems = []
  JSON.parse((localStorage.getItem('Cart'))).map(function(item,i){
    const lineItemsToAdd ={
                             variantId: item.variantId,
                             quantity: item.quantity,
                             customAttributes: [{key: item.title, value:item.variantId}]
                          };
     return lineItems.push(lineItemsToAdd)
  })

  return client.checkout.create().then((checkout) => {
    return client.checkout.updateEmail(checkout.id, contactInfo ).then(checkout=>{
        return client.checkout.addLineItems(checkout.id,lineItems).then(checkout=>{
            return client.checkout.updateShippingAddress(checkout.id, shippingAddress).then(checkout=>{
                  return checkout.webUrl;
            })
        })
    })
  });
}

export {getProduct, getCollections, getProducts,makePaymentSession}

//Old API call example
// function apiCall(url, query) {
//   return fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'X-Shopify-Storefront-Access-Token': "a224766064d3bb09a9ecdacaf5dd663d"
//     },
//     body: query
//   }).then(response => {return response.json();});
// }
