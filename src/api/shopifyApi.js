"use client";

const SHOPIFY_URL = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL}/api/2024-01/graphql.json`;

export const fetchProducts = async () => {
  const query = {
    query: `{ products(first: 10) { edges { node { id title } } } }`,
  };

  const response = await fetch(SHOPIFY_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token":
        process.env.REACT_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    },
    body: JSON.stringify(query),
  });

  const data = await response.json();
  return data.data.products.edges;
};

console.log("Shopify URL:", SHOPIFY_URL);
console.log(
  "Shopify Token:",
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN
);
