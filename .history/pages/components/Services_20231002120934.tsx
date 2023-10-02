import React from 'react'
import Square from './Square'
const Services = () => {
  return (
    <div className="relative  bottom-80">
      <div className="relative py-80 bottom-80 bg-[#B8BFD6]">
    <div className=""> {/* Change h-40 to h-auto */}
        <div>
            <h1 className="relative  px-80 bottom-80 left-60 mx-40 my-20  font-raleway font-bold text-4xl text-[#FFFCF6]">Service</h1>
        </div>
        <Square />
    </div>
</div>
    </div>

  )
}

export default Services