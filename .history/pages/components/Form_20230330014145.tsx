import React from 'react'

const Form = () => {
  return (
    <div>
        <input type="text" className=" relative  px-80 mx-80 bottom-24 left-44 h-8 w-0"/><br/>
        <input type="text" className=" relative  px-80 mx-80 bottom-8 left-44 h-8 w-0"/><br/>
        <textarea name="comment" rows={4} cols={50}  minLength={10} form="usrform" className=" relative  px-80 mx-80 top-50 left-44 w-0 h-12">Message</textarea>
        <button type="submit" className="relative px-80 mx-80 top-40 left-44 h-8 w-0 bg-[#B8BFD6]">Send</button>
        
    </div>
  )
}

export default Form