import React from 'react'

const Form = () => {
  return (
    <div>
        <input type="text" className=" relative  px-80 mx-80 bottom-10 left-44 h-8 w-0"/><br/>
        <input type="text" className=" relative  px-80 mx-80 top-10 left-44 h-8 w-0"/><br/>
        <textarea name="comment" form="usrform" className=" relative  px-80 mx-80 top-40 left-44 h-8 w-0">Enter text here...</textarea>
        <button type="submit" className="relative px-80 mx-80 top-60 left-44 h-8 w-0 bg-[#B8BFD6]">Send</button>
        
    </div>
  )
}

export default Form