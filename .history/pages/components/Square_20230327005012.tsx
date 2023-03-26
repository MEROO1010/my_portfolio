import React from 'react'
import Image from 'next/image'

const Square = () => {
  return (
    <div>
       <div className="absolute py-40 mx-40 my-18 left-8 top-0 ">
       <Image src="/assets/images/logodesign.png" alt="laptop" width={200} height={200}/>
       </div>
    </div>
  )
}

export default Square