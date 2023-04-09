import React from 'react'

const Form = () => {
  return (
    <div>
        <input type="text" placeholder='Your Name' className=" relative  px-80 mx-80 bottom-24 left-44 h-14 w-0 rounded-full"/><br/>
        <input type="text" className=" relative  px-80 mx-80 bottom-8 left-44 h-14 w-0 rounded-full"/><br/>
        <textarea  className=" relative  left-80 my-20">Message</textarea>
        <button type="submit" className="relative px-80 mx-80 top-20 left-44 h-14 w-10 font-raleway text-[24px] font-semibold text-[#FFFCF6]  bg-[#B8BFD6] rounded-full">Send</button>
        
    </div>
  )
}

export default Form