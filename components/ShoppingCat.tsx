"use client";
import React, { useRef } from "react";
import Section from "./Section";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import "/public/fonts/fonts.css";

const ShoppingCat = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <div className="bg-white p-16">
      <Section
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        initial={{ opacity: 0, y: 50, scale: 0.5 }}
        animate={isInView ? "animate" : "initial"}
        transition={{ type: "spring", damping: 50, stiffness: 200, mass: 3 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center text-2xl uppercase md:text-4xl">
          <h2 className="headings">Collections</h2>
        </div>
        <p className="text-center text-xl font-thin uppercase py-4">
          Shop our collections
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div
            style={{
              backgroundImage: `url("/images/newCollections.svg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "600px",
            }}
            className="col-span-3"
          ></div>
          <div
            style={{
              backgroundImage: `url("/images/tops.png")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "500px",
            }}
          ></div>
          <div
            style={{
              backgroundImage: `url("/images/dresses.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "500px",
            }}
          ></div>
          <div
            style={{
              backgroundImage: `url("/images/bottoms.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "500px",
            }}
          ></div>
        </div>
      </Section>
    </div>
  );
};

export default ShoppingCat;
