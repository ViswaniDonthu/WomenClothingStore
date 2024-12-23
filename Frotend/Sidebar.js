import React from 'react';

const Sidebar = () => {
  return (
    <aside className="hidden lg:block w-64 bg-white shadow-md h-screen p-6 lg:flex lg:flex-col lg:space-y-4">
      <ul className="space-y-4">
        <li className="text-lg font-semibold">New Arrivals</li>
        <li className="text-lg font-semibold">Sale</li>
        <li className="text-lg font-semibold">Kids Store</li>
        <li className="text-lg font-semibold">Women Store</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
