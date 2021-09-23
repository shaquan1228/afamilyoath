
import Client from 'shopify-buy';
const client = Client.buildClient({
  domain: 'oath-worldwide.myshopify.com',
  storefrontAccessToken: 'b0a5210040baae5c2cf63ec688ce0235'
});


function getProduct(productId) {
  return client.product.fetch(productId)
}

function getCollections() {
  return client.collection.fetchAll()
}


function getProducts() {
  return client.collection.fetchAllWithProducts()
}

async function createCheckout(contactInfo, shippingAddress, lineItems) {
  let createCheckout = await client.checkout.create();
  let checkoutEmail = await client.checkout.updateEmail(createCheckout.id, contactInfo);
  let checkoutProducts = await client.checkout.addLineItems(checkoutEmail.id, lineItems);
  let checkoutAddress = await client.checkout.updateShippingAddress(checkoutProducts.id, shippingAddress);
  return checkoutAddress.webUrl;
}

function makePaymentSession(contactInfo, shippingAddress) {
  let lineItems = []
  JSON.parse((localStorage.getItem('Cart'))).map(function (item, i) {
    const lineItemsToAdd = {
      variantId: item.variantId,
      quantity: item.quantity,
      customAttributes: [{ key: item.title, value: item.variantId }]
    };
    return lineItems.push(lineItemsToAdd)
  })

  return createCheckout(contactInfo, shippingAddress, lineItems)

}

export { getProduct, getCollections, getProducts, makePaymentSession }
