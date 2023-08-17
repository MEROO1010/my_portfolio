import React from 'react'
import Image from 'next/image'


const HomePage = () => {
  return (
    <div className='bg-slate-700'>
        <Image src="/header.png" alt="Header" width={2000} height={0}/>

        <div className='mx-16 py-20 top-4  absolute	  '>
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


       <div className=' absolute   '>
       <Image src="/assets/images/MainPage.png" alt="main image" width={1920} height={912}/>
        {/*add About Me button*/}
       <div className='absolute px-28 my-80 mx-60 left-80 top-32 '>
       <button className='bg-[#19335A] rounded-3xl w-60 h-10  text-[20px] text-[#B8BFD6] font-raleway font-semibold shadow-xl' >About me</button>
       </div>

        {/*add my others accounts list*/}

        <div>
          <ul className=' absolute   float-right flex flex-col top-80 py-60 px-40 mx-80 left-40   space-x-8 md:flex-row '>
            <li><a href='https://github.com/MEROO1010'><Image src="/assets/images/github.png" alt="main image" width={54} height={54}/></a></li>
            <li><a href='https://www.instagram.com/meroo_alsaggaf/'><Image src="/assets/images/instagram.png" alt="main image" width={64} height={53}/></a></li>
            <li><a href='https://www.behance.net/merooalsaggaf'><Image src="/assets/images/behance.png" alt="main image" width={54} height={54}/></a></li>
            <li><a href='https://www.linkedin.com/in/marwah-alsaggaf-ba44011b2/'><Image src="/assets/images/linkedIn.png" alt="main image" width={54} height={54}/></a></li>
          </ul>
        </div>
       </div>

      

       


    </div>
  )
}

export default HomePage