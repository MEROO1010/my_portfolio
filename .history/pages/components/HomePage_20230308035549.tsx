import React from 'react'
import Image from 'next/image'

const HomePage = () => {
  return (
    <div>
        <Image src="/header.png" alt="Header" width={2000} height={0}/>

        <div>
        <Image src="/my_logo_white.png" alt="My Logo" width={2000} height={0}/>
        </div>
    </div>
  )
}

export default HomePage