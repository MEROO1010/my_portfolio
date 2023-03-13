import React from 'react'
import Image from 'next/image'


const Experience = () => {
  return (
    <div>
        <div className="bg-[#19335A]">
           <div>
            <h1>Experience</h1>
           </div>

           <div className="relative mx-80 px-60 top-60  left-80">
           <Image src="/assets/images/programming-languges.png" alt="laptop" width={542} height={542}/>
           </div>

           <div className="static mx-20 my-20 py-20 px-20  bottom-40  left-80">
           <Image src="/assets/images/software.png" alt="laptop" width={542} height={542}/>
           </div>
        </div>
    </div>
  )
}

export default Experience