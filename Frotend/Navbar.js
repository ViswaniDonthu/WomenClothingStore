import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { FaHeart, FaSearch, FaShoppingBag, FaUser } from 'react-icons/fa'; // Import icons
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [searchVisible, setSearchVisible] = useState(false); // State to toggle search bar visibility
    const [searchQuery, setSearchQuery] = useState(''); // State to store search query
   
    const navigate = useNavigate();  // Hook for navigation
    const toggleDropdown = () => setDropdownVisible(!dropdownVisible);
    const toggleSearchBar = () => setSearchVisible(!searchVisible); // Toggle search bar visibility
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value); // Update query as user types
      }
    
      const handleSearchSubmit = (e) => {
        e.preventDefault();  // Prevent page reload on form submit
        if (searchQuery.trim()) {
          // Navigate to the search results page with the query parameter
          navigate(`/search?query=${searchQuery}`);
        }
      }
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <img
          src="https://storage.googleapis.com/a1aa/image/OX5lRfUFzdwYfETUfyyoqfxEMfxez5fVDTWi8FsdF6O7PM1eTA.jpg"
          alt="Company logo"
          className="h-10 w-10 ml-2"
        />
        <span className="ml-2 text-xl font-bold">ClothingStore</span>
      </div>

      <div className="flex items-center space-x-4">
        {/* Search Icon */}
        <FaSearch className="text-xl cursor-pointer" onClick={() => setSearchVisible(!searchVisible)} />

        {/* Show Search Bar if 'searchVisible' is true */}
        {searchVisible && (
          <form onSubmit={handleSearchSubmit} className="flex">
            <input
              type="text"
              className="ml-2 p-2 border rounded-md"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </form>
        )}
        {/* Wishlist Icon with Link */}
        <Link to="/wishlist">
          <FaHeart className="text-xl text-red-500" />
        </Link>
        
        {/* Shopping Bag Icon */}
        <Link to="/cart">
          <FaShoppingBag className="text-xl" />
        </Link>

        
        {/* User Icon with Dropdown */}
        <div className="relative">
          <FaUser
            className="text-xl cursor-pointer"
            onClick={toggleDropdown}
          />
          {/* Dropdown Menu */}
          {dropdownVisible && (
            <div className="absolute right-0 bg-white shadow-md mt-2 w-48 rounded-md">
              <Link
                to="/settings"
                className="w-full px-4 py-2 text-gray-700 hover:bg-gray-100 text-left"
              >
                Settings
              </Link>
              <button className="w-full px-4 py-2 text-gray-700 hover:bg-gray-100 text-left">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
