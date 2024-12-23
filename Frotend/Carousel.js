import React from 'react';

const Carousel = () => {
  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
      <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out">
        <img
          src="https://storage.googleapis.com/a1aa/image/rT2YBF90yNJCN16sar4vzsCneeeRTIGtijdO2GioXD86wU7nA.jpg"
          alt="Model wearing summer dress"
          className="w-full h-full object-cover"
        />
        <img
          src="https://storage.googleapis.com/a1aa/image/geCfiZEeMWPLfSWKdenAte5e4uQYEhaaeNAD0PbJl3jdZYq9TA.jpg"
          alt="Stylish handbag"
          className="w-full h-full object-cover"
        />
        <img
          src="https://storage.googleapis.com/a1aa/image/APqsXCrg4T7iFtoDxL618UBNVv7CfAaRojreOvLUfmY3wU7nA.jpg"
          alt="Casual outfit with scenic background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Carousel;
