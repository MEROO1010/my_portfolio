import React from 'react'
import Image from 'next/image'

const HomePage = () => {
  return (
    <div className='bg-slate-700'>
        <Image src="/header.png" alt="Header" width={2000} height={0}/>

        <div className='mx-16 my-0 top-4 position: absolute	  '>
        <Image src="/my_logo_white.png" alt="My Logo" width={54} height={0}/>
        </div>

        <div>
          <ul className=' relative   float-right flex flex-col px-4 mb-4 top-20      space-x-16 md:flex-row text-[#000] text-[28px]'>
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