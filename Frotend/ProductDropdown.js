import React from "react";

const ProductCard = ({ imgSrc, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img alt={title} className="w-full h-32 object-cover" src={imgSrc} />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a className="text-indigo-500 hover:text-indigo-700 font-semibold" href="#">
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
