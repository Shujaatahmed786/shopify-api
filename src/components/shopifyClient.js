import { createStorefrontApiClient } from '@shopify/storefront-api-client';
import { SHOPIFY_ACCESS_TOKEN, SHOPIFY_STORE_URL } from '../../API.Config';




console.log("Creating Shopify Client...");

const client = createStorefrontApiClient({
    storeDomain:"http://jn72vg-y9.myshopify.com",
  publicAccessToken:"dbc9928fb621aefce48c3f6f2483f5fc",
  apiVersion: '2024-10',
  
});

console.log("Shopify Client created successfully.");

export default client;
