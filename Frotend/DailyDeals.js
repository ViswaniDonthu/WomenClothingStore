import React from 'react';

const DailyDeals = () => {
  return (
    <div className="mt-12">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Daily Deals</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">
          View All
        </button>
      </div>
      <p className="text-gray-600 mt-2">
        Hurry up! These deals last for only 24 hours.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="https://storage.googleapis.com/a1aa/image/rT2YBF90yNJCN16sar4vzsCneeeRTIGtijdO2GioXD86wU7nA.jpg"
            alt="Daily deal"
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <h2 className="text-xl font-semibold mt-4">Deal Item 1</h2>
          <p className="mt-2 text-gray-600">Special discount on this item today!</p>
        </div>
      </div>
    </div>
  );
};

export default DailyDeals;
