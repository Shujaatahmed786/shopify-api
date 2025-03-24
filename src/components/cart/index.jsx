"use client";
import { useState } from "react";

const AddToCart = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addToCartHandler = async () => {
    setLoading(true);
    setError(null);

    const requestBody = {
      variantId: "gid://shopify/ProductVariant/123456789",
      quantity: 1,
    };

    try {
      const response = await fetch("http://localhost:5000/add-to-cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to add to cart");
      }

      console.log("Added to cart:", data);
    } catch (err) {
      console.error("Error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={addToCartHandler} disabled={loading}>
        {loading ? "Adding..." : "Add to Cart"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default AddToCart;
