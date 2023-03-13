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
          transition={{
            delay: 0.5,
            x: { duration: 1 },
            default: { ease: "linear" }
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
