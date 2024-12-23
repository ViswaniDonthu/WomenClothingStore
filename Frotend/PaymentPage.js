import React, { useState } from 'react';

const PaymentPage = ({ totalPrice, additionalFee }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [upiOption, setUpiOption] = useState('');
  const [cardDetails, setCardDetails] = useState(null);
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);

  const handleApplyCoupon = () => {
    if (coupon === 'DISCOUNT10') {
      setDiscount(totalPrice * 0.1); // 10% discount
    } else {
      alert('Invalid coupon!');
      setDiscount(0);
    }
  };

  const orderTotal = (totalPrice + additionalFee - discount).toFixed(2);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Payment Options</h2>

      {/* Payment Method Selection */}
      <div className="border p-4 rounded-md mb-6">
        <h3 className="font-semibold mb-2">Select Payment Method</h3>
        <div>
          <label className="block">
            <input
              type="radio"
              name="paymentMethod"
              value="UPI"
              onChange={() => setPaymentMethod('UPI')}
            />
            UPI
          </label>
          <label className="block">
            <input
              type="radio"
              name="paymentMethod"
              value="Card"
              onChange={() => setPaymentMethod('Card')}
            />
            Debit/Credit Card
          </label>
          <label className="block">
            <input
              type="radio"
              name="paymentMethod"
              value="Wallet"
              onChange={() => setPaymentMethod('Wallet')}
            />
            Wallet
          </label>
          <label className="block">
            <input
              type="radio"
              name="paymentMethod"
              value="Net Banking"
              onChange={() => setPaymentMethod('Net Banking')}
            />
            Net Banking
          </label>
          <label className="block">
            <input
              type="radio"
              name="paymentMethod"
              value="Cash on Delivery"
              onChange={() => setPaymentMethod('Cash on Delivery')}
            />
            Cash on Delivery
          </label>
        </div>
      </div>

      {/* Payment Method Specific Details */}
      {paymentMethod === 'UPI' && (
        <div className="border p-4 rounded-md mb-6">
          <h3 className="font-semibold">Select UPI</h3>
          <div>
            <label className="block">
              <input
                type="radio"
                name="upiOption"
                value="Paytm"
                onChange={() => setUpiOption('Paytm')}
              />
              Paytm (10% Cashback)
            </label>
            <label className="block">
              <input
                type="radio"
                name="upiOption"
                value="PhonePe"
                onChange={() => setUpiOption('PhonePe')}
              />
              PhonePe
            </label>
            <label className="block">
              <input
                type="radio"
                name="upiOption"
                value="GPay"
                onChange={() => setUpiOption('GPay')}
              />
              Google Pay
            </label>
          </div>
        </div>
      )}

      {paymentMethod === 'Card' && (
        <div className="border p-4 rounded-md mb-6">
          <h3 className="font-semibold">Card Details</h3>
          {cardDetails ? (
            <div>
              <p>Card Number: **** **** **** 1234</p>
              <button
                onClick={() => setCardDetails(null)}
                className="text-blue-500 underline"
              >
                Change Card
              </button>
            </div>
          ) : (
            <form>
              <div className="mb-2">
                <label className="block font-semibold">Card Number</label>
                <input
                  type="text"
                  className="border p-2 w-full rounded-md"
                  placeholder="Enter Card Number"
                />
              </div>
              <div className="mb-2">
                <label className="block font-semibold">Expiry Date</label>
                <input
                  type="text"
                  className="border p-2 w-full rounded-md"
                  placeholder="MM/YY"
                />
              </div>
              <div className="mb-2">
                <label className="block font-semibold">CVV</label>
                <input
                  type="text"
                  className="border p-2 w-full rounded-md"
                  placeholder="Enter CVV"
                />
              </div>
              <button
                type="button"
                onClick={() => setCardDetails(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Save Card
              </button>
            </form>
          )}
        </div>
      )}

      {/* Coupon Section */}
      <div className="border p-4 rounded-md mb-6">
        <h3 className="font-semibold">Apply Coupon</h3>
        <input
          type="text"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          className="border p-2 w-full rounded-md mb-2"
          placeholder="Enter Coupon Code"
        />
        <button
          onClick={handleApplyCoupon}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Apply Coupon
        </button>
      </div>

      {/* Price Details */}
      <div className="border p-4 rounded-md mb-6">
        <h3 className="font-semibold">Price Details</h3>
        <p>Product Price: ${totalPrice}</p>
        <p>Additional Fee: ${additionalFee}</p>
        <p>Discount: -${discount.toFixed(2)}</p>
        <p className="font-semibold">Order Total: ${orderTotal}</p>
      </div>

      {/* Place Order Button */}
      <button
        onClick={() => alert(`Order placed successfully! Total: $${orderTotal}`)}
        className="bg-green-500 text-white px-6 py-2 rounded-md"
      >
        Place Order
      </button>
    </div>
  );
};

export default PaymentPage;
