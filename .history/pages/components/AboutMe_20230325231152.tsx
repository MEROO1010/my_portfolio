import React from 'react'
import Image from 'next/image'


const AboutMe = () => {
  return (
    <div >
        
       
        <div className="  relative my-80 pt-80  top-40  ">
        <Image src="/assets/images/bg2.png" alt="laptop" width={1920} height={5106}/>
        </div>
       
        

        <div className=" text-[#FFFCF6] relative  py-40  ">
            <div className=" absolute  mx-60 my-2 py-20 bottom-4  left-24  object-right
 ">
            <h1 className="  font-raleway font-bold  text-[50px]">About me</h1>
            <br/>
            </div>
            <div className="absolute  mx-24  bottom-40 left-24 ">
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