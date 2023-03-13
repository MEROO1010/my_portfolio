import React from 'react'
import Image from 'next/image'

const HomePage = () => {
  return (
    <div className='bg-slate-700'>
        <Image src="/header.png" alt="Header" width={2000} height={0}/>

        <div className=''>
        <Image src="/my_logo_white.png" alt="My Logo" width={200} height={0}/>
        </div>

        <div>
          <ul>
            <li>Home</li>
            <li>About Me</li>
            <li>Skills</li>
            <li>My Work</li>
            <li>Contact Me</li>
          </ul>
        </div>
    </div>
  )
}

export default HomePage