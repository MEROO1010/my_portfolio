import React from 'react'
import Image from 'next/image'

const Square = () => {
  return (
    <div>
       <div className="absolute py-40 mx-40 my-18 left-8 top-14 ">
       <Image src="/assets/images/logodesign.png" alt="laptop" width={200} height={200}/>
       </div>

       <div className="relative py-40 mx-80 my-18 right-18 bottom-40 ">
       <Image src="/assets/images/programming.png" alt="laptop" width={200} height={200}/>
       </div>
    </div>
  )
}

export default Square