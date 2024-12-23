import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa"; // Like icon

const WishlistPage = () => {
  const [likedProducts, setLikedProducts] = useState([
    {
      id: 1,
      imgSrc: "https://example.com/product1.jpg",
      name: "Product 1",
      price: "$20",
      type: "Free Delivery",
      rating: "4.5",
    },
    {
      id: 2,
      imgSrc: "https://example.com/product2.jpg",
      name: "Product 2",
      price: "$35",
      type: "Standard Delivery",
      rating: "4.0",
    },
    // Add more products as needed
  ]);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Wishlist</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {likedProducts.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-md shadow-md">
            <div className="relative">
              <img
                src={product.imgSrc}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <button className="absolute top-2 right-2 text-red-500">
                <FaHeart size={20} />
              </button>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-gray-700">{product.price}</p>
              <p className="text-sm text-gray-500">{product.type}</p>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-yellow-500">★</span>
                <span>{product.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
