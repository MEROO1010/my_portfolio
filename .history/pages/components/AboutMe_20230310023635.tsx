import React from 'react'
import Image from 'next/image'


const AboutMe = () => {
  return (
    <div className="bg-[#697A98] absolute ">
        
        <div className=" relative px-80 py-80 my-80 mx-80 left-80 top-80">
        {/*<Image src="/assets/images/laptop-screen.png" alt="laptop" width={542} height={542}/>*/}
        </div>
        

        <div className=" text-[#FFFCF6]  ">
            <h1 className=" relative mx-80 my-20  py-40 px-40 top-10 font-raleway font-bold  text-[50px]">About me</h1>
            <br/>
            <p className='font-raleway font-italic'>
            My name is Marwah Alsaggaf,<br/> and I'm software-developer <br/>
            and graphic designer. I <br/> 
            graduated from Arab open <br/> university with a major in
             <br/> Information Technology and Computing       
            </p>
        </div>

    </div>
  )
}

export default AboutMe