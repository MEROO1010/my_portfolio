import React from 'react'
import Image from 'next/image'


const Experience = () => {
  return (
    <div>
        <div className="bg-[#19335A]">
           <div>
            <h1>Experience</h1>
           </div>

           <div className="relative mx-80   left-80">
           <Image src="/assets/images/programming-languges.png" alt="laptop" width={542} height={542}/>
           </div>

           <div>
           <Image src="/assets/images/software.png" alt="laptop" width={542} height={542}/>
           </div>
        </div>
    </div>
  )
}

export default Experience