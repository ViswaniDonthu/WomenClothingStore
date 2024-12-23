import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ReviewOrderPage = () => {
  const { id } = useParams(); // Get product ID from URL
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [address, setAddress] = useState('');
  const [additionalFee, setAdditionalFee] = useState(5.0); // Example additional fee
  const [showAddressForm, setShowAddressForm] = useState(false); // Toggle for address form
  const [formFields, setFormFields] = useState({
    country: '',
    state: '',
    addressLine1: '',
    addressLine2: '',
    pincode: '',
  });

  useEffect(() => {
    // Simulating fetching product data based on ID
    const productData = {
      1: {
        id: 1,
        name: 'T-shirt',
        price: 20.0,
        desc: 'A comfortable cotton t-shirt.',
        seller: { name: 'John Doe', details: 'FashionHub, Main Street' },
        highlights: ['Soft fabric', 'Durable', 'Stylish design'],
        deliveryDate: '2024-12-25',
      },
      // Add more product data for different product IDs
    };

    setProduct(productData[id]);
  }, [id]);

  const handleFormChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  const handleSaveAddress = () => {
    const formattedAddress = `${formFields.addressLine1}, ${formFields.addressLine2}, ${formFields.state}, ${formFields.country} - ${formFields.pincode}`;
    setAddress(formattedAddress);
    setShowAddressForm(false);
  };

  const totalPrice = (product?.price || 0) + additionalFee;

  return (
    <div className="container mx-auto py-8">
      {product ? (
        <div>
          <h2 className="text-3xl font-bold mb-6">Review Your Order</h2>

          {/* Product Info */}
          <div className="border p-4 rounded-md mb-6">
            <h3 className="font-semibold">Product Details</h3>
            <p>{product.name}</p>
            <p>{product.desc}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Highlights:</strong> {product.highlights.join(', ')}</p>
          </div>

          {/* Delivery Address Section */}
          <div className="border p-4 rounded-md mb-6">
            <h3 className="font-semibold">Delivery Address</h3>
            <p>{address || 'No address provided'}</p>
            <button
              onClick={() => setShowAddressForm(!showAddressForm)}
              className="mt-2 text-blue-500 underline"
            >
              {showAddressForm ? 'Cancel' : 'Change Address'}
            </button>
          </div>

          {/* Address Form */}
          {showAddressForm && (
            <div className="border p-4 rounded-md mb-6">
              <h3 className="font-semibold mb-2">Change Address</h3>
              <form>
                <div className="mb-2">
                  <label className="block font-semibold">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={formFields.country}
                    onChange={handleFormChange}
                    className="border p-2 w-full rounded-md"
                  />
                </div>
                <div className="mb-2">
                  <label className="block font-semibold">State</label>
                  <input
                    type="text"
                    name="state"
                    value={formFields.state}
                    onChange={handleFormChange}
                    className="border p-2 w-full rounded-md"
                  />
                </div>
                <div className="mb-2">
                  <label className="block font-semibold">Address Line 1</label>
                  <input
                    type="text"
                    name="addressLine1"
                    value={formFields.addressLine1}
                    onChange={handleFormChange}
                    className="border p-2 w-full rounded-md"
                  />
                </div>
                <div className="mb-2">
                  <label className="block font-semibold">Address Line 2</label>
                  <input
                    type="text"
                    name="addressLine2"
                    value={formFields.addressLine2}
                    onChange={handleFormChange}
                    className="border p-2 w-full rounded-md"
                  />
                </div>
                <div className="mb-2">
                  <label className="block font-semibold">Pincode</label>
                  <input
                    type="text"
                    name="pincode"
                    value={formFields.pincode}
                    onChange={handleFormChange}
                    className="border p-2 w-full rounded-md"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleSaveAddress}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Save Address
                </button>
              </form>
            </div>
          )}

          {/* Price Details Section */}
          <div className="border p-4 rounded-md mb-6">
            <h3 className="font-semibold">Price Details</h3>
            <p>Product Price: ${product.price}</p>
            <p>Additional Fee: ${additionalFee}</p>
            <p className="font-semibold">Order Total: ${totalPrice.toFixed(2)}</p>
          </div>

          {/* Seller Info Section */}
          <div className="border p-4 rounded-md mb-6">
            <h3 className="font-semibold">Seller Details</h3>
            <p><strong>Name:</strong> {product.seller.name}</p>
            <p><strong>Details:</strong> {product.seller.details}</p>
          </div>

          {/* Continue Button */}
          <div>
            <button
              onClick={() => navigate('/product/:id/checkout/paymentpage')} // Navigate to confirmation page
              className="bg-green-500 text-white px-6 py-2 rounded-md"
            >
              Continue
            </button>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ReviewOrderPage;
