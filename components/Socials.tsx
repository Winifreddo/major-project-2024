"use client";
import React, { useRef } from "react";
import { motion, MotionProps, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Section from "./Section";

export default function Socials() {
  return (
    <div>
      <Intro />
    </div>
  );
}

const Intro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <div ref={ref} className="py-14">
      <Section
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        initial={{ opacity: 0, y: 50, scale: 0.5 }}
        animate={isInView ? "animate" : "initial"}
        transition={{ type: "spring", damping: 50, stiffness: 200, mass: 3 }}
        className="col-span-12 md:col-span-8"
      >
        <div className="font-medium uppercase text-center text-4xl md:text-6xl">
          <h2 className="headings">We&#39;re social</h2>
          <p className="font-thin font-poppins text-xl md:text-2xl">
            Check out our Re-formers!
          </p>
        </div>
      </Section>
    </div>
  );
};

const ImageGal = () => {};
