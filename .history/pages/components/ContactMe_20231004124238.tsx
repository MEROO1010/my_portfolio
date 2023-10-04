import React from 'react';
import Form from './Form'

const ContactMe =() =>{


  return (
    
    <div className="relative   bottom-80 h-screen">
    <div className="relative my-80 py-80 h-screen bg-[#19335A]">
      <div>
        <h1 className="absolute py-2 px-60 mx-20 top-20 left-80 font-raleway font-bold text-5xl text-white">
          Contact Me
        </h1>

        <Form />
      </div>
    </div>
    </div>
  
  );
  }

export default ContactMe;


