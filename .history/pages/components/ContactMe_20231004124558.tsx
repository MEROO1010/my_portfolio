import React from 'react';
import Form from './Form'

const ContactMe =() =>{


  return (
    
    <div className="relative  bottom-80">
      <div className="relative py-80 bottom-80 bg-[#19335A]">
        <div className="h-40">
          {" "}
          {/* Change h-40 to h-auto */}
          <div>
            <h1 className="relative  px-80 bottom-40 right-80 mx-10   font-raleway font-bold text-4xl text-[#FFFCF6]">
              Contact Me
            </h1>
          </div>
          <Form />
        </div>
      </div>
    </div>
  
  );
  }

export default ContactMe;



