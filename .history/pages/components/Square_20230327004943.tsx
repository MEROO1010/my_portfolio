import React from 'react'
import Image from 'next/image'

const Square = () => {
  return (
    <div>
       <div className="absolute py-10 mx-20 my-114 left-4 top-20 ">
       <Image src="/assets/images/logodesign.png" alt="laptop" width={200} height={200}/>
       </div>
    </div>
  )
}

export default Square