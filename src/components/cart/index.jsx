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
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Sample 2007</h2>
      <p className="text-gray-600">$23 USD</p>

      <div className="mt-4">
        <p className="font-semibold">
          Duration: <span className="text-gray-700">0:10</span>
        </p>
        <p className="font-semibold">
          Resolution: <span className="text-gray-700">1080p / HD</span>
        </p>
        <p className="font-semibold">
          Video File Format: <span className="text-gray-700">.mp4</span>
        </p>
        <p className="font-semibold">
          Turnaround Time:{" "}
          <span className="text-gray-700">96 hours or less</span>
        </p>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700">
          Upload Logo *
        </label>
        <input
          type="file"
          className="mt-2 block w-full border border-gray-300 p-2 rounded-md"
        />
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700">
          Select Format *
        </label>
        <div className="mt-2 flex space-x-2">
          <button className="border border-gray-300 px-4 py-2 rounded-md">
            16:9 Horizontal
          </button>
          <button className="border border-gray-300 px-4 py-2 rounded-md">
            9:16 Vertical
          </button>
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700">
          Optional - Rush Delivery *
        </label>
        <div className="mt-2 flex space-x-2">
          <button className="border border-gray-300 px-4 py-2 rounded-md">
            No
          </button>
          <button className="border border-gray-300 px-4 py-2 rounded-md">
            Yes - I Want Rush Delivery!
          </button>
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700">
          Optional - Upgrade to 4K Quality *
        </label>
        <div className="mt-2 flex space-x-2">
          <button className="border border-gray-300 px-4 py-2 rounded-md">
            No
          </button>
          <button className="border border-gray-300 px-4 py-2 rounded-md">
            Yes - I Want 4K Quality!
          </button>
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700">
          Optional - Add Text to Logo *
        </label>
        <div className="mt-2 flex space-x-2">
          <button className="border border-gray-300 px-4 py-2 rounded-md">
            No
          </button>
          <button className="border border-gray-300 px-4 py-2 rounded-md">
            Yes - I Want Text Added
          </button>
        </div>
        <input
          type="text"
          className="mt-2 block w-full border border-gray-300 p-2 rounded-md"
          placeholder="Enter text (max 50 chars)"
        />
      </div>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      <button
        onClick={addToCartHandler}
        disabled={loading}
        className="mt-6 w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
      >
        {loading ? "Adding..." : "ADD TO CART"}
      </button>
    </div>
  );
};

export default AddToCart;
