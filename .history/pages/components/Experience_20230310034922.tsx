import React from 'react'
import Image from 'next/image'


const Experience = () => {
  return (
    <div>
        <div className="bg-[#19335A]">
           <div>
            <h1 className="text[#FFFCF6]">Experience</h1>
           </div>

           <div className="relative mx-80 px-60 top-80  left-80">
           <Image src="/assets/images/programming-languges.png" alt="laptop" width={542} height={542}/>
           </div>

           <div className="relative mx-10   px-20  bottom-48  left-8">
           <Image src="/assets/images/software.png" alt="laptop" width={542} height={542}/>
           </div>
        </div>
    </div>
  )
}

export default Experience