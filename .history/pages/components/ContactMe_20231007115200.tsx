import React from 'react';
import Form from './Form'

const ContactMe =() =>{


  return (
    <div className="relative h-full mt-4 top-10 ">
      <div className="static -mt-80 pt-60  bottom-80 bg-[#19335A] ">
      <div>
        <h1 className="absolute py-2 px-60 mx-20 top-20 left-80 font-raleway font-bold text-5xl text-white">
          Contact Me
        </h1>
      </div>
      <Form />
    </div>
    </div>
  );
  }

export default ContactMe;



