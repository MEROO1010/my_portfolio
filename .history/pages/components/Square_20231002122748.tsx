import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";


const Square = () => {
  return (
    <div className="flex justify-center items-center h-screen relative  left-48 bottom-40">
    <div className="grid grid-cols-3 gap-20">
        
        <div className="relative right-40 bottom-60 ">
            <Image src="/assets/images/logodesign.png" alt="Logo Design" width={200} height={200} />
        </div>
        
        <div className="relative  right-40 bottom-60">
            <Image src="/assets/images/programming.png" alt="Programming" width={240} height={200} />
        </div>
        
        <div className="relative right-40 bottom-60">
            <Image src="/assets/images/uiux.png" alt="UI/UX Design" width={200} height={200} />
        </div>
        
        <div className="relative right-4 bottom-60">
            <Image src="/assets/images/webdesign.png" alt="Web Design" width={200} height={200} />
        </div>
        
        <div className="relative left-2 bottom-60">
            <Image src="/assets/images/videoediting.png" alt="Video Editing" width={200} height={200} />
        </div>
    </div>
</div>

  )
}

export default Square

