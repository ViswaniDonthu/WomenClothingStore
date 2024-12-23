import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const searchQuery = new URLSearchParams(location.search).get('query') || '';
    setQuery(searchQuery);

    const products = [
      { id: 1, imgSrc: 'https://via.placeholder.com/150', name: 'T-shirt', price: '$20.00', type: 'Free Delivery', rating: 4.5 },
      { id: 2, imgSrc: 'https://via.placeholder.com/150', name: 'Jeans', price: '$40.00', type: 'Standard Delivery', rating: 3.8 },
      { id: 3, imgSrc: 'https://via.placeholder.com/150', name: 'Jacket', price: '$60.00', type: 'Free Delivery', rating: 4.2 }
    ];

    const filtered = products.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()));
    setFilteredProducts(filtered);
  }, [location.search]);

  const handleCardClick = (id) => {
    navigate(`/product/${id}`); // Navigate to product detail page with product ID
  }

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">Search Results for "{query}"</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div key={item.id} className="card border rounded-md p-4" onClick={() => handleCardClick(item.id)}>
              <img src={item.imgSrc} alt={item.name} className="w-full h-48 object-cover rounded-md" />
              <div className="flex justify-between mt-2">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <span className="text-lg text-gray-700">{item.price}</span>
              </div>
              <p className="text-sm text-gray-600">{item.type}</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500">{"⭐ ".repeat(Math.round(item.rating))}</span>
                <span className="ml-2">{item.rating}</span>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
