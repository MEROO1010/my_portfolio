import React from 'react'

const Form = () => {
  return (
    <div className="text-center">
    <input type="text" placeholder="Your Name" className="px-4 py-2 mx-4 my-2 rounded-full h-14 w-80"/><br/><br/>
    <input type="text" placeholder="Your Email" className="px-4 py-2 mx-4 my-2 rounded-full h-14 w-80"/><br/>
    <textarea placeholder="Message" className="px-4 py-2 mx-4 my-6 left-14 rounded-lg h-40 w-80"></textarea>
    <button type="submit" className="px-4 py-2 mx-4 my-2 font-raleway text-2xl font-semibold text-white bg-gray-500 rounded-full">Send</button>
</div>

  )
}

export default Form