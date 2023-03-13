import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div>
      <div className="bg-[#19335A]">
        <div className="absolute px-80 py-20 mx-80 left-20  ">
          <h1 className="text-[#FFFCF6] text-[46px]  font-raleway font-bold ">
            Experience
          </h1>
        </div>
        <motion.div
          className="relative mx-80 px-60 top-80  left-80"
          initial={{ scale: 0 }}
          animate={{ rotate: 180, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <Image
            src="/assets/images/programming-languges.png"
            alt="laptop"
            width={542}
            height={542}
          />
        </motion.div>
        <div></div>

        <div className="relative mx-10   px-20  bottom-48  left-8">
          <Image
            src="/assets/images/software.png"
            alt="laptop"
            width={542}
            height={542}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
