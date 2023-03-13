import React from 'react'
import Image from 'next/image'


const AboutMe = () => {
  return (
   <div>
    <div>
    <Image src="/assets/images/Bg-image.png" alt="main image" width={1920} height={991.81}/>
    </div>

    <div>
        <div>
            <h1>About me</h1>
        </div>

        <div>
            <p>
            My name is Marwah Alsaggaf,<br/>
             and I'm software-developer <br/> and graphic designer. I <br/>
              graduated from Arab open <br/> university with a major in <br/>
               Information Technology and Computing       
            </p>
        </div>
    </div>
   </div>

    
  )
}

export default AboutMe