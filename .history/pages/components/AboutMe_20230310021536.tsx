import React from 'react'
import Image from 'next/image'


const AboutMe = () => {
  return (
    <div className="bg-[#697A98]  ">
        
        <div className=" relative px-80 py-80 my-80 mx-80 left-40 top-40">
        <Image src="/assets/images/laptop-screen.png" alt="laptop" width={542} height={542}/>
        </div>
        

        <div>
            <h1>About me</h1>
            <br/><br/>
            <p>
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