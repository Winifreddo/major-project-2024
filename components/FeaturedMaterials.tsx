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

const Materials = [
  {
    id: 1,
    name: "Linen",
    imageUrl: "/images/linen.svg",
    title: "Linen lovers unite",
    description:
      "Linen is one of the most biodegradable and stylish fabrics in fashion history! It’s strong, quick-drying, naturally moth resistant, and made from flax plant fibres. Our linen is certified organic, is farmed using water retting, and, is fully biodegradable. We love linen as a material as with wear and care it becomes softer and more pliable. It basically ages like a fine wine!",
  },
  {
    id: 2,
    name: "Ecovero",
    imageUrl: "/images/ecovero.svg",
    title: "It's Ecovero baby",
    description:
      "Ecovero or Viscose is a semi-synthetic fibre made from renewable wood pulp. It is a sustainable alternative to traditional viscose as it is produced using less water and energy. It is also biodegradable and compostable. We love Ecovero as it is soft, breathable, and drapes beautifully. ",
  },
  {
    id: 3,
    name: "Denim",
    imageUrl: "/images/denim.svg",
    title: "Denim for days",
    description:
      "Denim is notorious for its resource-intensive production process. We are proud to say that our denim is made from organic cotton and is dyed using natural indigo. Our denim is also made using a closed-loop system which recycles water and chemicals. We love denim as it is durable, versatile, and gets better with age! We suggest refraining from washing your denim too often to reduce water usage and increase the lifespan of your jeans. ",
  },
];

export default function FeaturedMaterials() {
  return (
    <div className="min-h-screen bg-bgColor px-4 py-12 font-poppins">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.05 }}
        // whileInView="animate"
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
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <Section
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        initial={{ opacity: 0, y: 50, scale: 0.5 }}
        animate={isInView ? "animate" : "initial"}
        transition={{ type: "spring", damping: 50, stiffness: 500, mass: 3 }}
        className="col-span-12 md:col-span-8"
      >
        <h2 className="font-medium font-poppins uppercase mt-14 text-center text-4xl md:text-6xl">
          Our Fabrics.
        </h2>
        <p className="mt-4 text-center font-poppins">
          We are committed to keeping you stylish and the world sustainable & we
          pride ourselfs in sourcing materials that are good for you and the
          earth. All of our materials are traceable from source to warehouse.
        </p>
      </Section>
    </div>
  );
};

const ImageGal = () => (
  <div className="">
    <div className=" mx-auto flex flex-row gap-6">
      <Section
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
      >
        <Image
          src={Materials[0].imageUrl}
          alt="Featured Material"
          width={400}
          height={400}
          className="rounded-md"
        />
      </Section>

      <Section
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
      >
        <Image
          src="/images/ecovero.svg"
          alt="Featured Material"
          width={400}
          height={400}
          className="rounded-md"
        />
      </Section>
      <Section
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
      >
        <Image
          src="/images/denim.svg"
          alt="Featured Material"
          width={400}
          height={400}
          className="rounded-md"
        />
      </Section>
    </div>
  </div>
);
