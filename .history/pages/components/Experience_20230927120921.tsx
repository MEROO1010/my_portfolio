import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import 'animate.css';


const Experience = () => {
  return (
    <div className="relative my-20    bottom-0   " >
      <div className="bg-[#19335A] static py-14">
        <div className="absolute px-80 py-20 mx-80 left-20  ">
          <h1 className="text-[#FFFCF6] text-[46px]  font-raleway font-bold ">
            Experience
          </h1>
        </div>
        <div>
          <Image 
            className="animate__animated animate__bounce "
            src="/assets/images/programming-languges.png" alt={""}
            width={542}
            height={542}/>
        </div>
        <div></div>

        <motion.div className="relative mx-10   px-20  bottom-48  left-8"
        whileHover={{ scale: 1.2, rotate: 360 }}
        whileTap={{
          scale: 0.8,
          rotate: -360,
          borderRadius: "100%",
        }}
        >
          <Image
            src="/assets/images/software.png"
            alt="laptop"
            width={542}
            height={542}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
