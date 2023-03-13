import React from 'react'
import Image from 'next/image'


const AboutMe = () => {
  return (
    <div className="bg-[#697A98]">
        <div>
        {/*<Image src="/assets/images/laptop-screen.png" alt="laptop" width={2400} height={0}/>*/}
        </div>

        <div>
            <h1>About me</h1>
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