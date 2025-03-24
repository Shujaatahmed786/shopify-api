"use client";
import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../app/pages/api/shopifyApi";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div className="flex justify-center gap-4">
      <h2>Shopify Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.node.id}>{product.node.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
