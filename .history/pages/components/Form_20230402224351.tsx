import React from 'react'

const Form = () => {
  return (
    <div>
        <input type="text" className=" relative  px-80 mx-80 bottom-24 left-44 h-14 w-0 rounded-full"/><br/>
        <input type="text" className=" relative  px-80 mx-80 bottom-8 left-44 h-14 w-0 rounded-full"/><br/>
        <textarea name="comment" rows={4} cols={50}  minLength={10} form="usrform" className=" relative  px-80 mx-80 top-8 left-44 block p-2.5 w-5 h-5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-3xl">Message</textarea>
        <button type="submit" className="relative px-80 mx-80 top-20 left-44 h-14 w-10 font-raleway text-[24px] font-semibold text-[#FFFCF6]  bg-[#B8BFD6] rounded-full">Send</button>
        
    </div>
  )
}

export default Form