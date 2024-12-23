import React from 'react';

const CardSection = () => {
  const cards = [
    {
      title: 'Traditional',
      description: 'Explore our collection of traditional clothing with intricate patterns and vibrant colors.',
      image: 'https://storage.googleapis.com/a1aa/image/Pv6SjGg2tP6VOxQfAu3Val1XCLCnB8DdqfPHj05gFlSBdq9TA.jpg',
    },
    {
      title: 'Western',
      description: 'Discover our range of western-style clothing with a modern twist.',
      image: 'https://storage.googleapis.com/a1aa/image/Rfpoe93xprqmfJKqFQSlVDRkoC2tQSaC2pTT7tSh9tVezp2PB.jpg',
    },
    {
      title: 'Trendy Styles',
      description: 'Stay ahead of the fashion curve with our trendy styles.',
      image: 'https://storage.googleapis.com/a1aa/image/xJEC5ATSHwLiK9xfQBnYyTFj7surg8ZVJTuLIb5JPm1ecq9TA.jpg',
    },
    {
      title: 'Fusion',
      description: 'Experience the best of both worlds with our fusion clothing.',
      image: 'https://storage.googleapis.com/a1aa/image/VVSZt9EktV76ONepkKYlUvTCvvfW5tUosGMipusAeo455U7nA.jpg',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      {cards.map((card, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <h2 className="text-xl font-semibold mt-4">{card.title}</h2>
          <p className="mt-2 text-gray-600">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
