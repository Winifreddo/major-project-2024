"use client";

import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const IMG_PADDING = 24;

export const Services = () => {
  return (
    <div className="bg-bgColor">
      <TextParallaxContent
        imgUrl="images/theseam.webp"
        subheading="Give your garments new life."
        heading=" Alteration and Repair Services."
      >
        <Content
          href=" https://www.theseam.uk/"
          label="/images/TheSeam.jpeg"
          text="The seam are making waves in the industry promoting longevity and sustainability in fashion. 
           They offer a range of services from alterations to repairs. Expert makers know just how to give your garments a new lease of life.
           The brand have partnered with some big household names to promote extending a garments life cycle and reducing waste. 
           This is brand that is truly making a difference in the industry."
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="images/sojo.webp"
        subheading="Never compromise on style."
        heading=" Tailoring services."
      >
        <Content
          href="https://www.sojo.uk/"
          label="/images/sojo2.svg"
          text="Sojo are challenging textile waste in the fashion industry! This brand is certainly packing a punch in the war on fast fashion with 
          their mission of fixing the industry one garment at a time. Aside from repairs the Sojo team also offer alterations and
           tailoring services to make sure your clothes fit you to prefection!
          If you want to join their mission check out their website for more details on their services."
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="images/vestiaire.jpg"
        subheading="Vestiaire Collective"
        heading="Gift your style. Resale Platform"
      >
        <Content
          href="https://vestiairecollective.com/"
          label="/images/vestiaireLogo.png"
          text="Vestiare collective are at this point a household name. 
          Their platform reaches millions of like minded fashionistas who are looking for a more sustainable way to stay fabulous.
           Vestiaire are hailed for their 0 fast fashion policy and their commitment to good second hand quality. 
           So if you have a garment that still has plenty of life but is no longer your vibe why not try out Vestiaire and give it a loving new home."
        />
      </TextParallaxContent>
    </div>
  );
};

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
}) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 opacity-75"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const Content = ({
  href,
  label,
  text,
}: {
  href: string;
  label: string;
  text: string;
}) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      <Link href={href}>
        <Image src={label} alt="brand" width={250} height={250} />
      </Link>
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-lg font-poppins font-thin md:text-xl">{text}</p>

      <button className="w-full rounded bg-black px-6 py-2 text-l text-white font-poppins transition-colors hover:bg-neutral-700 md:w-fit">
        <Link href={href} target="_blank">
          Learn more
        </Link>
      </button>
    </div>
  </div>
);
