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
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    />
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

        <motion.div
      className="box"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
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