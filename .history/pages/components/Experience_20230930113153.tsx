import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import 'animate.css';


const Experience = () => {
  return (
    <div className="relative   bottom-80">
      <div className="relative  bottom-80      " >
      <div className="bg-[#19335A] static py-14">
        <div className="absolute px-80 py-20 mx-80 left-20  ">
          <h1 className="text-[#FFFCF6] text-[46px]  font-raleway font-bold ">
            Experience
          </h1>
        </div>
        <motion.div
         className="box"
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{
           duration: 0.8,
           delay: 0.5,
           ease: [0, 0.71, 0.2, 1.01]
         }}
        >
        <div>
          <Image 
            className="animate__animated animate__bounce "
            src="/assets/images/programming-languges.png" alt={""}
            width={542}
            height={542}
            />
        </div>
        </motion.div>
        <div></div>

        <motion.div  className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
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
    </div>
  );
};

export default Experience;
