import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "animate.css";

const Experience = () => {
  return (
    <div className="relative bottom-40">
      <div className="relative bottom-0">
        <div className="bg-[#19335A] static py-12">
          <div className="absolute px-60 py-20 mx-80 left-24">
            <h1 className="text-[#FFFCF6] text-[46px] font-raleway font-bold">
              Experience
            </h1>
          </div>
          <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div>
              <Image
                className="relative mx-4 left-24 top-60"
                src="/assets/images/programming-languges.png"
                alt={""}
                width={542}
                height={542}
              />
            </div>
          </motion.div>
          <div className="relative mx-60 left-80">
            <motion.div
              className="box"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Image
                className="relative mx-60 left-4 top-0"
                src="/assets/images/software.png"
                alt="laptop"
                width={542}
                height={542}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;