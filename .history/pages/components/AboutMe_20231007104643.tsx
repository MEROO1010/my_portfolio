import React from 'react'
import Image from 'next/image'


const AboutMe = () => {
  return (
    <div >
        
       
        <div className="  static my-80 py-40  top-20    ">
        <Image src="/assets/images/bg2.png" alt="laptop" width={1920} height={5200}/>
        </div>
       
        

        <div className=" text-[#FFFCF6] relative right-20 bottom-60     ">
            <div className=" absolute  mx-60 my-80 py-80 bottom-80  left-24  
 ">
            <h1 className="  font-raleway font-bold  text-[50px]">About me</h1>
            <br/>
            </div>
            
            <div className="absolute  mx-24 py-80 bottom-32 left-24 ">
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