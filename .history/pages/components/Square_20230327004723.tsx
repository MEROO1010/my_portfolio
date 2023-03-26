import React from 'react'
import Image from 'next/image'

const Square = () => {
  return (
    <div>
       <div className="relative py-20 px-10">
       <Image src="/assets/images/logodesign.png" alt="laptop" width={200} height={200}/>
       </div>
    </div>
  )
}

export default Square