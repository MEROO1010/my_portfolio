import React from 'react'
import Image from 'next/image'


const AboutMe = () => {
  return (
    <div className="bg-[#697A98] static ">
        
        <div className=" relative px-80 py-80 my-80 mx-80 left-80 top-80">
        {/*<Image src="/assets/images/laptop-screen.png" alt="laptop" width={542} height={542}/>*/}
        </div>
        

        <div className=" text-[#FFFCF6]  ">
            <div className=" static mt-4  ">
            <h1 className=" absolute mx-80  bottom-1 left-24 font-raleway font-bold  text-[50px]">About me</h1>
            <br/>
            </div>
            <p className='font-raleway  font-medium relative mx-24  top-50 left-4   text-[50px]'>
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