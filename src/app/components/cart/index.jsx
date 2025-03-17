"use client";
import { useState } from "react";

const Cart = () => {
  const [file, setFile] = useState(null);
  const [format, setFormat] = useState("16:9");
  const [rushDelivery, setRushDelivery] = useState(false);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Ratings */}
      <div className="flex items-center space-x-1 text-blue-500">
        <span className="text-lg">⭐⭐⭐⭐⭐</span>
        <span className="text-gray-600">(2)</span>
      </div>

      {/* Upload Logo */}
      <div className="mt-4">
        <label className="font-bold text-lg text-blue-700">
          1. UPLOAD LOGO <span className="text-red-500">*</span>
        </label>
        <input
          type="file"
          accept=".png, .jpg"
          className="w-full mt-2 border border-gray-300 p-3 rounded-md"
          onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
        />
        <p className="text-gray-500 text-sm mt-1">
          Only PNG or JPG files are accepted.
        </p>
      </div>

      {/* Select Format */}
      <div className="mt-4">
        <label className="font-bold text-lg text-blue-700">
          2. SELECT FORMAT <span className="text-red-500">*</span>
        </label>
        <div className="flex gap-3 mt-2">
          {["16:9 Horizontal", "9:16 Vertical"].map((item) => (
            <button
              key={item}
              onClick={() => setFormat(item)}
              className={`px-4 py-2 border rounded-md ${
                format === item
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Rush Delivery Option */}
      <div className="mt-4">
        <label className="font-bold text-lg text-blue-700">
          3. OPTIONAL - RUSH DELIVERY <span className="text-red-500">*</span>
        </label>
        <p className="text-gray-700 text-sm">
          (+$15 USD per video) Rush delivery includes a completion time of 24
          hrs or less.
        </p>
        <label className="flex items-center mt-2 cursor-pointer">
          <input
            type="checkbox"
            checked={rushDelivery}
            onChange={() => setRushDelivery(!rushDelivery)}
            className="w-5 h-5"
          />
          <span className="ml-2 text-gray-700">Enable Rush Delivery</span>
        </label>
      </div>

      {/* Add to Cart Button */}
      <button className="w-full mt-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition">
        Add to Cart
      </button>
    </div>
  );
};

export default Cart;
