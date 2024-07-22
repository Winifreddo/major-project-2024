"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Section from "./Section";

// type SectionProps = {
//   className?: string;
// } & MotionProps;

const Vests = [
  {
    id: 1,
    name: "Lola Gilet",
    imageUrl: "/images/gilet1.svg",
    price: "£99",
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
    price: "£79",
  },
  {
    id: 5,
    name: "Abigail Gilet",
    imageUrl: "/images/gilet5.svg",
    price: "£99",
  },

  {
    id: 6,
    name: "Grace Gilet",
    imageUrl: "/images/gilet7.svg",
    price: "£79",
  },
  {
    id: 7,
    name: "Paloma Gilet",
    imageUrl: "/images/gilet8.svg",
    price: "£79",
  },
  {
    id: 8,
    name: "Naomi Gilet",
    imageUrl: "/images/gilet6.svg",
    price: "£79",
  },
];
export default function FeaturedPoducts() {
  return (
    <div className=" bg-white px-4 py-12 font-poppins">
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

const Intro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div ref={ref} className="md:py-14 py-8">
      <Section
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        initial={{ opacity: 0, y: 50, scale: 0.5 }}
        animate={isInView ? "animate" : "initial"}
        transition={{ type: "spring", damping: 50, stiffness: 200, mass: 3 }}
        className="col-span-12 md:col-span-8"
      >
        <div className="font-medium uppercase text-center text-3xl md:text-4xl">
          <h2 className="headings">gilets</h2>
          <p className="font-thin font-poppins pt-2 text-lg md:text-2xl">
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
      <div className="mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {Vests.map((vest) => (
          <div key={vest.id} className="relative flex flex-col items-center">
            <motion.div
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              initial={{ opacity: 0, y: 50, scale: 0.5 }}
              animate={isInView ? "animate" : "initial"}
              transition={{
                type: "spring",
                damping: 50,
                stiffness: 200,
                mass: 3,
              }}
              whileHover={{
                rotate: vest.id % 2 === 0 ? "2.5deg" : "-2.5deg",

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

            <div className="flex flex-col items-center md:mt-4">
              <h3 className=" text-md md:text-lg mt-1 font-semibold">
                {vest.name}
              </h3>
              <Link href="#" className="text-sm font-thin">
                {vest.price}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
