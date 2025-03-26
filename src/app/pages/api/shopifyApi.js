"use client";

import shopifyClient from "../../../components/shopifyClient";

export const fetchProducts = async () => {
  const query = `
    query {
      products(first: 10) {
        edges {
          node {
            id
            title
            images(first: 1) {
              edges {
                node {
                  src
                  altText
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const { data } = await shopifyClient.request(query);
    return data.products.edges;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error(`Error fetching products: ${error.message}`);
  }
};
