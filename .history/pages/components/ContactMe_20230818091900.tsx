import React, { useState } from 'react';

import Form from './Form'; // Import your Form component here



  

const ContactMe = () => {
  return (
    <div className="relative py-80 bg-[#19335A]">
      <div className="h-100">
        <div>
          <h1 className="absolute py-20 px-16 top-20 left-80 font-raleway font-bold text-4xl text-[#FFFCF6]">Contact Me</h1>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default ContactMe;
