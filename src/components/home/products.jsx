"use client";

import { useState, useEffect } from "react";
import { fetchProducts } from "../../app/pages/api/shopifyApi"; // Make sure to adjust the path to the fetch function.

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
        setLoading(false);
      } catch (err) {
        setError("Error fetching products");
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.node.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Product Image */}
            <img
              src={product.node.images.edges[0]?.node.src}
              alt={product.node.images.edges[0]?.node.altText || product.node.title}
              className="w-full h-64 object-cover"
            />
            {/* Product Title */}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{product.node.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
