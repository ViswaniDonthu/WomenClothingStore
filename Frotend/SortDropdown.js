import React from "react";

const SortDropdown = ({ visible, toggle }) => {
  return (
    <div className="relative">
      <button
        className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onClick={toggle}
      >
        Sort
        <i className="fas fa-chevron-down ml-2"></i>
      </button>
      {visible && (
        <div className="absolute mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
          <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">
            Relevance
          </a>
          <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">
            New Arrivals
          </a>
          <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">
            Price (Low to High)
          </a>
          <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">
            Price (High to Low)
          </a>
          <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">
            Ratings
          </a>
          <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">
            Discount
          </a>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
