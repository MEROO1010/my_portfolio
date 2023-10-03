import React from 'react';
import Form from './Form'

const ContactMe =() =>{


  return (
    <div className="relative py-40 bottom-80 ">
  <div className="relative bottom-80 h-screen ">
    <div className=" bg-[#19335A] static py-12 h-screen">
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



