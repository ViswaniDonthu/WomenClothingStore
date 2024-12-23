import React from "react";

const CategoryDropdown = ({ visible, toggle }) => {
  return (
    <div className="relative">
      <button
        className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onClick={toggle}
      >
        Category
        <i className="fas fa-chevron-down ml-2"></i>
      </button>
      {visible && (
        <div className="absolute mt-2 w-64 bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className="px-4 py-2">
            <label className="inline-flex items-center">
              <input className="form-checkbox" type="checkbox" />
              <span className="ml-2 text-gray-700">Women Dresses</span>
            </label>
          </div>
          <div className="px-4 py-2">
            <label className="inline-flex items-center">
              <input className="form-checkbox" type="checkbox" />
              <span className="ml-2 text-gray-700">Women Inners</span>
            </label>
          </div>
          <div className="px-4 py-2">
            <label className="inline-flex items-center">
              <input className="form-checkbox" type="checkbox" />
              <span className="ml-2 text-gray-700">Women T-Shirts</span>
            </label>
          </div>
          <div className="px-4 py-2">
            <label className="inline-flex items-center">
              <input className="form-checkbox" type="checkbox" />
              <span className="ml-2 text-gray-700">Women Tops and Tunics</span>
            </label>
          </div>
          <div className="px-4 py-2">
            <label className="inline-flex items-center">
              <input className="form-checkbox" type="checkbox" />
              <span className="ml-2 text-gray-700">Women Kurtas</span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
