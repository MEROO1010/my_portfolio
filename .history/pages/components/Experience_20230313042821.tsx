import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div >
     <div className="static py-40 my-80">
     <div className="bg-[#19335A] ">
        <div className="absolute px-80 py-20 mx-80 left-20  ">
          <h1 className="text-[#FFFCF6] text-[46px]  font-raleway font-bold ">
            Experience
          </h1>
        </div>
        <motion.div
          className="relative mx-80 px-60 top-80  left-80"
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{
            scale: 0.8,
            rotate: -360,
            borderRadius: "100%",
          }}
        >
          <Image
            src="/assets/images/programming-languges.png"
            alt="laptop"
            width={542}
            height={542}
          />
        </motion.div>
        

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
    </div>
  );
};

export default Experience;
