import React from 'react'
import Square from './Square'
const Services = () => {
  return (
    <div className="relative  bottom-80">
      <div className="relative py-80 bottom-80 bg-[#B8BFD6]">
    <div className="h-auto"> {/* Change h-40 to h-auto */}
        <div>
            <h1 className="absolute py-20 px-60 font-raleway font-bold text-4xl text-[#FFFCF6]">Service</h1>
        </div>
        <Square />
    </div>
</div>
    </div>

  )
}

export default Services