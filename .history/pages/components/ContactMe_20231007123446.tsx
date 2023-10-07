import React from 'react';
import Form from './Form';

const ContactMe = () => {
  return (
    <div className="static h-full">
      <div className="static py-80  top-40 bg-[#19335A]">
        <div>
          <h1 className="relative py-2 px-20 mx-20 bottom-20 left-40  font-raleway font-bold text-5xl text-white">
            Contact Me
          </h1>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default ContactMe;


