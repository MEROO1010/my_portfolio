import React from 'react'
import Image from 'next/image'

const AboutMe = () => {
  return (
    <div>
      <div className="static py-80 mt-48 top-0">
        <Image src="/assets/images/bg2.png" alt="laptop" className="relative top-40" width={1920} height={5200} />
      </div>

      <div className="text-[#FFFCF6] relative right-20 bottom-0">
        <div className="absolute mx-60 my-80 py-80 bottom-0 left-24">
          <h1 className="font-raleway font-bold text-[50px]">About me</h1>
          <br />
        </div>

        <div className="absolute mx-24 py-80 bottom-4 left-24">
          <p className="font-raleway font-medium text-[50px]">
            My name is Marwah Alsaggaf,<br /> and I'm a software developer <br />
            and graphic designer. I <br />
            graduated from Arab Open <br /> University with a major in
            <br /> Information Technology and Computing
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe