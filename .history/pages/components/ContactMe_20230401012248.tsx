import React from 'react'
import Form from './Form'


const ContactMe = () => {
  return (
    <div className=" relative py-80  top-40   bg-[#19335A]">
          <div className="h-100 ">
        <div>
          <h1 className= " absolute py-20 px-80 mx-10 top-0 left-80 font-raleway font-bold  text-[50px] text-[#FFFCF6]">Contact Me</h1>
       </div>
        <Form/>
        </div>
    </div>
  )
}

export default ContactMe