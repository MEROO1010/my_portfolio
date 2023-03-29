import React from 'react'

const Form = () => {
  return (
    <div>
        <input type="text" className=" relative  px-80 mx-80 bottom-24 left-44 h-14 w-0 rounded-2xl"/><br/>
        <input type="text" className=" relative  px-80 mx-80 bottom-8 left-44 h-14 w-0 rounded-2l"/><br/>
        <textarea name="comment" rows={4} cols={50}  minLength={10} form="usrform" className=" relative  px-80 mx-80 top-8 left-44 w-0 h-12 rounded-xl">Message</textarea>
        <button type="submit" className="relative px-80 mx-80 top-20 left-44 h-14 w-10 font-raleway text-[24px] font-semibold text-[#FFFCF6]  bg-[#B8BFD6] rounded-2xl">Send</button>
        
    </div>
  )
}

export default Form