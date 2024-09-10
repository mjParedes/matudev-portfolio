"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="relative"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="relative z-10 w-[240px] h-[240px] xl:w-[450px] xl:h-[450px] overflow-hidden rounded-full" // Tamaño ajustado de la imagen para dar más espacio
        >
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt="photo"
            className="object-cover"
          />
        </motion.div>

        {/* Circle */}
        <motion.div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.svg
            className="w-[340px] xl:w-[540px] h-[340px] xl:h-[540px]" // Aumento del tamaño del círculo para asegurarnos de que se vea por completo
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle
              cx="253"
              cy="253"
              r="248"
              stroke="#00ff99"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </motion.svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
