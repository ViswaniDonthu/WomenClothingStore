import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaHeart, FaShareAlt } from 'react-icons/fa'; // Wishlist and Share icons
import {useNavigate} from 'react-router-dom'
const ProductDetailPage = () => {
    const navigate=useNavigate();
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const handleBuyNow = () => {
    navigate(`/product/${id}/checkout`); // Navigate to the checkout page
  };
  useEffect(() => {
    // Here, we can simulate fetching data using the product ID (in a real app, you would fetch from an API)
    const productData = {
      1: {
        id: 1,
        name: 'T-shirt',
        desc: 'A comfortable cotton t-shirt.',
        price: '$20.00',
        delivery: 'Free Delivery',
        rating: 4.5,
        bought: 150,
        sizes: ['S', 'M', 'L', 'XL'],
        seller: { name: 'John Doe', details: 'FashionHub, Main Street' },
        highlights: ['Soft fabric', 'Durable', 'Stylish design'],
        photos: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
        deliveryDate: '2024-12-25',
      },
      2: {
        id: 2,
        name: 'Jeans',
        desc: 'Stylish blue jeans for all occasions.',
        price: '$40.00',
        delivery: 'Standard Delivery',
        rating: 3.8,
        bought: 100,
        sizes: ['M', 'L', 'XL'],
        seller: { name: 'Jane Smith', details: 'DenimCo, Fashion Square' },
        highlights: ['Comfortable fit', 'High quality fabric'],
        photos: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
        deliveryDate: '2024-12-27',
      },
      // Add more products here
    };

    setProduct(productData[id]); // Fetch the product based on the ID
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section: Product Photos and Details */}
        <div>
          <img src={product.photos[0]} alt={product.name} className="w-full h-96 object-cover rounded-lg" />
          <div className="flex mt-4 space-x-4">
            {product.photos.map((photo, index) => (
              <img key={index} src={photo} alt={`product-${index}`} className="w-32 h-32 object-cover rounded-lg" />
            ))}
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div>
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-lg text-gray-600 mt-2">{product.desc}</p>
          <p className="text-xl text-gray-700 mt-2">{product.price}</p>

          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <FaHeart className="text-xl cursor-pointer" />
              <FaShareAlt className="text-xl cursor-pointer ml-4" />
            </div>
            <p className="text-sm">{product.delivery}</p>
          </div>

          <div className="flex items-center mt-2">
            <span className="text-yellow-500">{"⭐ ".repeat(Math.round(product.rating))}</span>
            <span className="ml-2">{product.rating}</span>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold">Sizes</h4>
            <ul className="list-disc pl-4">
              {product.sizes.map((size, index) => (
                <li key={index}>{size}</li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold">Seller Details</h4>
            <p>{product.seller.name}</p>
            <p>{product.seller.details}</p>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold">Product Highlights</h4>
            <ul className="list-disc pl-4">
              {product.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold">Delivery Date</h4>
            <p>{product.deliveryDate}</p>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold">Enter Pincode to Check Delivery Date</h4>
            <input type="text" maxLength="6" className="p-2 border rounded-md" placeholder="Enter Pincode" />
          </div>

          <div className="mt-4">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md mr-4">Add to Cart</button>
            <button className="bg-green-500 text-white px-6 py-2 rounded-md" onClick={handleBuyNow}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
