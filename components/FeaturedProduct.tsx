"use client";
import { duration } from "@mui/material";
import React, { useRef } from "react";
import { animate, motion, MotionProps, useInView } from "framer-motion";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { title } from "process";

type SectionProps = {
  className?: string;
} & MotionProps;

const Vests = [
  {
    id: 1,
    name: "Jackie Gilet",
    imageUrl: "/images/gilet1.svg",
    price: "£89",
  },
  {
    id: 2,
    name: "Mia Gilet",
    imageUrl: "/images/gilet2.svg",
    price: "£89",
  },
  {
    id: 3,
    name: "Lola Gilet",
    imageUrl: "/images/gilet3.svg",
    price: "£99",
  },
  {
    id: 4,
    name: "Grace Gilet",
    imageUrl: "/images/gilet4.svg",
    price: "£89",
  },
  {
    id: 5,
    name: "Abigail Gilet",
    imageUrl: "/images/gilet5.svg",
    price: "£99",
  },
  //   {
  //     id: 6,
  //     name: "Luna Gilet",
  //     imageUrl: "/images/gilet6.svg",
  //     price: "£89",
  //   },
  {
    id: 6,
    name: "Clara Gilet",
    imageUrl: "/images/gilet7.svg",
  },
];
export default function FeaturedPoducts() {
  return (
    <div className="min-h-screen bg-white px-4 py-12 font-poppins">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.05 }}
        className="flex flex-col gap-4 mx-auto max-w-6xl"
      >
        <Intro />
        <ImageGal />
      </motion.div>
    </div>
  );
}

const Section = ({ className, ...rest }: SectionProps) => {
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 50, scale: 0.5 },
        animate: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{
        type: "spring",
        damping: 50,
        stiffness: 500,
        mass: 3,
      }}
      className={twMerge("col-span-6", className)}
      {...rest}
    />
  );
};

const Intro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div ref={ref} className="py-14">
      <Section
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        initial={{ opacity: 0, y: 50, scale: 0.5 }}
        animate={isInView ? "animate" : "initial"}
        transition={{ type: "spring", damping: 50, stiffness: 500, mass: 3 }}
        className="col-span-12 md:col-span-8"
      >
        <div className="font-medium uppercase text-center text-4xl md:text-6xl">
          <h2 className="Gilet">gilets</h2>
          <p className="font-thin font-poppins text-xl md:text-2xl">
            the vest kept secret?
          </p>
        </div>
      </Section>
    </div>
  );
};

const ImageGal = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <Section>
      <div className="mx-auto grid grid-rows-3 grid-cols-3 gap-6">
        {Vests.map((vest) => (
          <div key={vest.id} className="relative flex flex-col items-center">
            <motion.div
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              initial={{ opacity: 0, y: 50, scale: 0.5 }}
              animate={isInView ? "animate" : "initial"}
              transition={{
                type: "spring",
                damping: 50,
                stiffness: 500,
                mass: 3,
              }}
              whileHover={{
                rotate: "2.5deg",
                scale: 1.1,
              }}
            >
              <Image
                src={vest.imageUrl}
                alt={vest.name}
                width={300}
                height={300}
                layout="fixed"
              />
            </motion.div>

            <div className="flex flex-col items-center mt-4">
              <h3 className="text-lg font-semibold">{vest.name}</h3>
              <p className="text-sm font-thin">{vest.price}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
