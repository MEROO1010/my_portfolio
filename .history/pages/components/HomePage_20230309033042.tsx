import React from 'react'
import Image from 'next/image'


const HomePage = () => {
  return (
    <div className='bg-slate-700'>
        <Image src="/header.png" alt="Header" width={2000} height={0}/>

        <div className='mx-16 my-0 top-4  absolute	  '>
        <Image src="/my_logo_white.png" alt="My Logo" width={54} height={0}/>
        </div>

        <div>
          <ul className=' relative   float-right flex flex-col  px-8 mx-40 right-28   bottom-16   space-x-16 md:flex-row text-[#FFFCF6] text-[28px] font-raleway'>
            <li>Home</li>
            <li>About Me</li>
            <li>Skills</li>
            <li>My Work</li>
            <li>Contact Me</li>
          </ul>
        </div>


       <div className=' absolute   py-0'>
       <Image src="/assets/images/MainPage.png" alt="main image" width={1920} height={912}/>
       <div>
       <button color="primary" >Round</button>
       </div>
       </div>

       {/*add About Me button*/}

       


    </div>
  )
}

export default HomePage