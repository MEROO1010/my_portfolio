import React from 'react';
import Form from './Form'

const ContactMe =() =>{


  return (
    <div className="relative   bottom-80   h-100   bg-[#19335A]">
      <div>
        <h1 className=" absolute py-2 px-60 mx-20 top-20 left-80 font-raleway font-bold  text-[50px] text-[#FFFCF6]">
          Contact Me
        </h1>
      </div>
      <div>
        <Form/>
      </div>
    </div>
  );
  }

export default ContactMe;



