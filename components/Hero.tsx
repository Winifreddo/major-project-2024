"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center "
    >
      <motion.h1
        style={{ y: textY }}
        className="text-7xl leading-relaxed md:text-9xl relative z-20"
      >
        RE-
        <br />
        FORM
      </motion.h1>
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(images/3.svg)`,
          backgroundPosition: "bottom",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          y: backgroundY,
        }}
      />
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `url(images/5.svg)`,
          backgroundPosition: "bottom",
          backgroundSize: "object-none",
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );
};

export default Hero;
