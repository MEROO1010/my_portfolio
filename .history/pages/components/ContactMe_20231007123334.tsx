import React from 'react';
import Form from './Form';

const ContactMe = () => {
  return (
    <div className="static h-full">
      <div className="static py-0  top-40 bg-[#19335A]">
        <div>
          <h1 className="absolute py-2 px-60 mx-20 top-20 left-0 right-0 font-raleway font-bold text-5xl text-white">
            Contact Me
          </h1>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default ContactMe;


