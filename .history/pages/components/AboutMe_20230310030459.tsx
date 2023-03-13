import React from 'react'
import Image from 'next/image'


const AboutMe = () => {
  return (
    <div className="bg-[#697A98] static ">
        
        <div className=" static px-80 py-40 my-80 mx-80 left-80 top-80">
        <Image src="/assets/images/laptop-screen.png" alt="laptop" width={542} height={542}/>
        </div>
        

        <div className=" text-[#FFFCF6]  ">
            <div className=" relative  mx-80 my-4 py-2 bottom-60  left-24  ">
            <h1 className="  font-raleway font-bold  text-[50px]">About me</h1>
            <br/>
            </div>
            <div className="relative mx-24  bottom-40 left-24 ">
            <p className='font-raleway  font-medium   text-[50px]'>
            My name is Marwah Alsaggaf,<br/> and I'm software-developer <br/>
            and graphic designer. I <br/> 
            graduated from Arab open <br/> university with a major in
             <br/> Information Technology and Computing       
            </p>
            </div>
        </div>

    </div>
  )
}

export default AboutMe