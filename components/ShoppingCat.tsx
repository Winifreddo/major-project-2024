"use client";
import React, { useRef, useState } from "react";
import Section from "./Section";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import "/public/fonts/fonts.css";

const fabricInfo = [
  {
    id: 1,
    name: "Carmella Jeans",
    price: "£89.00",
    fabric: "Cotton",
    madeIn: "Made in India",
    designedIn: "Designed in the UK",
  },
  {
    id: 2,
    name: "Linen Shirt",
    price: "£89.00",
    fabric: "Linen",
    madeIn: "Made in India",
    designedIn: "Designed in the UK",
  },
  {
    id: 3,
    name: "Peobe Dress",
    price: "£59.00",
    fabric: "Linen",
    madeIn: "Made in UK",
    designedIn: "Designed in the UK",
  },
  {
    id: 4,
    name: "Fleur Jeans",
    price: "£79.00",
    fabric: "Cotton",
    madeIn: "Made in the UK",
    designedIn: "Designed in the UK",
  },
  {
    id: 5,
    name: "Peobe Dress",
    price: "£59.00",
    fabric: "Linen",
    madeIn: "Made in UK",
    designedIn: "Designed in the UK",
  },
  {
    id: 6,
    name: "Linen Shirt",
    price: "£89.00",
    fabric: "Linen",
    madeIn: "Made in India",
    designedIn: "Designed in the UK",
  },
  {
    id: 7,
    name: "Carla Jeans",
    price: "789.00",
    fabric: "Linen",
    madeIn: "Made in the UK",
    designedIn: "Designed in the UK",
  },
];

const ShoppingCat = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="max-w-7xl mx-auto p-16">
      <Section
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        initial={{ opacity: 0, y: 50, scale: 0.5 }}
        animate={isInView ? "animate" : "initial"}
        transition={{ type: "spring", damping: 50, stiffness: 200, mass: 3 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center text-2xl uppercase md:text-4xl">
          <h2 className="headings">Summer Styling</h2>
        </div>
        <p className="text-center text-xl font-thin uppercase py-4">
          Keep cool with pieces of linen and cotton. Certified organic and fair
          trade.
        </p>
        <div className="flex gap-2 max-2-7xl">
          <div className="">
            <div
              style={{
                backgroundImage: `url(/images/jeans5-1.webp)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "703px",
                width: "468px",
              }}
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === 1 ? (
                <div className="h-[703px] grid place-content-center bg-gradient-to-br from-white/40 to-white/10  p-4 backdrop-blur-lg">
                  <h3 className="text-4xl uppercase text-white font-semibold py-2 ">
                    {fabricInfo[0].name}
                  </h3>
                  <p className="text-xl font-thin text-white leading-loose ">
                    {fabricInfo[0].fabric}
                  </p>
                  <p className="text-xl font-thin text-white leading-loose ">
                    {fabricInfo[0].price}
                  </p>
                  <p className="text-xl font-thin text-white leading-loose ">
                    {fabricInfo[0].madeIn}
                  </p>
                  <p className="text-xl font-thin text-white leading-loose ">
                    {fabricInfo[0].designedIn}
                  </p>
                  <div className="grid place-content-center">
                    <button className="text-sm bg-smokeGrey py-2 px-4 mt-8 rounded-sm w-28 text-white font-semibold hover:bg-salmonPink hover:text-smokeGrey">
                      {" "}
                      <a href="#">Read More</a>
                    </button>
                  </div>
                </div>
              ) : (
                false
              )}
            </div>
          </div>
          <div className=" grid grid-cols-3 gap-2">
            <div
              style={{
                backgroundImage: `url(/images/shirt5-1.webp)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "347px",
                width: "219px",
              }}
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === 2 ? (
                <div className="h-[703px] grid place-content-center bg-gradient-to-br from-white/40 to-white/10  p-4 backdrop-blur-lg">
                  <h3 className="text-4xl uppercase text-white font-semibold py-2 ">
                    {fabricInfo[1].name}
                  </h3>
                  <p className="text-xl font-thin text-white leading-loose ">
                    {fabricInfo[1].fabric}
                  </p>
                  <p className="text-xl font-thin text-white leading-loose ">
                    {fabricInfo[1].price}
                  </p>
                  <p className="text-xl font-thin text-white leading-loose ">
                    {fabricInfo[1].madeIn}
                  </p>
                  <p className="text-xl font-thin text-white leading-loose ">
                    {fabricInfo[1].designedIn}
                  </p>
                  <div className="grid place-content-center">
                    <button className="text-sm bg-smokeGrey py-2 px-4 mt-8 rounded-sm w-28 text-white font-semibold hover:bg-salmonPink hover:text-smokeGrey">
                      {" "}
                      <a href="#">Read More</a>
                    </button>
                  </div>
                </div>
              ) : (
                false
              )}
            </div>

            <div
              style={{
                backgroundImage: `url(/images/dress9-2.webp)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "347px",
                width: "219px",
              }}
              onMouseEnter={() => setHoveredIndex(3)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === 3 ? (
                <div className="h-[703px] grid place-content-center bg-gradient-to-br from-white/40 to-white/10  p-4 backdrop-blur-lg">
                  <h3 className="text-4xl uppercase text-white font-semibold py-2 ">
                    {fabricInfo[2].name}
                  </h3>
                  <p className="text-xl font-thin text-white leading-loose ">
                    {fabricInfo[2].fabric}
                  </p>
                  <p className="text-xl font-thin text-white leading-loose ">
                    {fabricInfo[2].price}
                  </p>
                  <p className="text-xl font-thin text-white leading-loose ">
                    {fabricInfo[2].madeIn}
                  </p>
                  <p className="text-xl font-thin text-white leading-loose ">
                    {fabricInfo[2].designedIn}
                  </p>
                  <div className="grid place-content-center">
                    <button className="text-sm bg-smokeGrey py-2 px-4 mt-8 rounded-sm w-28 text-white font-semibold hover:bg-salmonPink hover:text-smokeGrey">
                      {" "}
                      <a href="#">Read More</a>
                    </button>
                  </div>
                </div>
              ) : (
                false
              )}
            </div>

            <div
              style={{
                backgroundImage: `url(/images/jeans8-1.webp)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "347px",
                width: "219px",
              }}
              onMouseEnter={() => setHoveredIndex(4)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === 4 ? (
                <div className="h-[703px] grid place-content-center bg-gradient-to-br from-white/40 to-white/10  p-4 backdrop-blur-lg">
                  <h3 className="text-4xl uppercase text-white font-semibold py-2 ">
                    {fabricInfo[3].name}
                  </h3>
                  <p className="text-xl font-thin text-white leading-loose ">
                    {fabricInfo[3].fabric}
                  </p>
                  <p className="text-xl font-thin text-white leading-loose ">
                    {fabricInfo[3].price}
                  </p>
                  <p className="text-xl font-thin text-white leading-loose ">
                    {fabricInfo[3].madeIn}
                  </p>
                  <p className="text-xl font-thin text-white leading-loose ">
                    {fabricInfo[3].designedIn}
                  </p>
                  <div className="grid place-content-center">
                    <button className="text-sm bg-smokeGrey py-2 px-4 mt-8 rounded-sm w-28 text-white font-semibold hover:bg-salmonPink hover:text-smokeGrey">
                      {" "}
                      <a href="#">Read More</a>
                    </button>
                  </div>
                </div>
              ) : (
                false
              )}
            </div>

            <div
              style={{
                backgroundImage: `url(/images/dress9-1.webp)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "347px",
                width: "219px",
              }}
              onMouseEnter={() => setHoveredIndex(5)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === 5 ? (
                <div className="h-[703px] grid place-content-center bg-gradient-to-br from-white/40 to-white/10  p-4 backdrop-blur-lg">
                  <h3 className="text-4xl uppercase text-white font-semibold py-2 ">
                    {fabricInfo[4].name}
                  </h3>
                  <p className="text-xl font-thin text-white leading-loose ">
                    {fabricInfo[4].fabric}
                  </p>
                  <p className="text-xl font-thin text-white leading-loose ">
                    {fabricInfo[4].price}
                  </p>
                  <p className="text-xl font-thin text-white leading-loose ">
                    {fabricInfo[4].madeIn}
                  </p>
                  <p className="text-xl font-thin text-white leading-loose ">
                    {fabricInfo[4].designedIn}
                  </p>
                  <div className="grid place-content-center">
                    <button className="text-sm bg-smokeGrey py-2 px-4 mt-8 rounded-sm w-28 text-white font-semibold hover:bg-salmonPink hover:text-smokeGrey">
                      {" "}
                      <a href="#">Read More</a>
                    </button>
                  </div>
                </div>
              ) : (
                false
              )}
            </div>

            <div
              style={{
                backgroundImage: `url(/images/smartshorts2-1.webp)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "347px",
                width: "219px",
              }}
              onMouseEnter={() => setHoveredIndex(6)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === 6 ? (
                <div className="h-[703px] grid place-content-center bg-gradient-to-br from-white/40 to-white/10  p-4 backdrop-blur-lg">
                  <h3 className="text-4xl uppercase text-white font-semibold py-2 ">
                    {fabricInfo[5].name}
                  </h3>
                  <p className="text-xl font-thin text-white leading-loose ">
                    {fabricInfo[5].fabric}
                  </p>
                  <p className="text-xl font-thin text-white leading-loose ">
                    {fabricInfo[5].price}
                  </p>
                  <p className="text-xl font-thin text-white leading-loose ">
                    {fabricInfo[5].madeIn}
                  </p>
                  <p className="text-xl font-thin text-white leading-loose ">
                    {fabricInfo[5].designedIn}
                  </p>
                  <div className="grid place-content-center">
                    <button className="text-sm bg-smokeGrey py-2 px-4 mt-8 rounded-sm w-28 text-white font-semibold hover:bg-salmonPink hover:text-smokeGrey">
                      {" "}
                      <a href="#">Read More</a>
                    </button>
                  </div>
                </div>
              ) : (
                false
              )}
            </div>

            <div
              style={{
                backgroundImage: `url(/images/jeans6-1.webp)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "347px",
                width: "219px",
              }}
              onMouseEnter={() => setHoveredIndex(7)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === 7 ? (
                <div className="h-[703px] grid place-content-center bg-gradient-to-br from-white/40 to-white/10  p-4 backdrop-blur-lg">
                  <h3 className="text-4xl uppercase text-white font-semibold py-2 ">
                    {fabricInfo[6].name}
                  </h3>
                  <p className="text-xl font-thin text-white leading-loose ">
                    {fabricInfo[6].fabric}
                  </p>
                  <p className="text-xl font-thin text-white leading-loose ">
                    {fabricInfo[6].price}
                  </p>
                  <p className="text-xl font-thin text-white leading-loose ">
                    {fabricInfo[6].madeIn}
                  </p>
                  <p className="text-xl font-thin text-white leading-loose ">
                    {fabricInfo[6].designedIn}
                  </p>
                  <div className="grid place-content-center">
                    <button className="text-sm bg-smokeGrey py-2 px-4 mt-8 rounded-sm w-28 text-white font-semibold hover:bg-salmonPink hover:text-smokeGrey">
                      {" "}
                      <a href="#">Read More</a>
                    </button>
                  </div>
                </div>
              ) : (
                false
              )}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ShoppingCat;
