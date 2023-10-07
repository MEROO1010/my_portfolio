import React from 'react';
import Square from './Square';

const Services = () => {
  return (
    <div className="relative bottom-40">
      <div className="relative py-40 bg-[#B8BFD6]">
        <div className="h-20 my-24">
          <div>
            <h1 className="relative py-24 px-80 bottom-60 left-40  mx-60  font-raleway font-bold text-4xl text-[#FFFCF6]">
              Service
            </h1>
          </div>
          <Square />
        </div>
      </div>
    </div>
  );
};

export default Services;