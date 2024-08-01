"use client";
import React, { useRef, useState } from "react";
import Section from "./Section";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import "/public/fonts/fonts.css";
import Link from "next/link";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import { GiCottonFlower } from "react-icons/gi";
import { BiWorld } from "react-icons/bi";
import { RiLeafFill } from "react-icons/ri";

const fabricInfo = [
  {
    id: 1,
    name: "Carmella Jeans",
    price: "£89.00",
    fabric: "Cotton",
    madeIn: "India",
    designedIn: "the UK",
  },
  {
    id: 2,
    name: "Linen Shirt",
    price: "£89.00",
    fabric: "Linen",
    madeIn: "India",
    designedIn: "the UK",
  },
  {
    id: 3,
    name: "Pheobe Dress",
    price: "£59.00",
    fabric: "Linen",
    madeIn: "the UK",
    designedIn: "the UK",
  },
  {
    id: 4,
    name: "Fleur Jeans",
    price: "£79.00",
    fabric: "Cotton",
    madeIn: "UK",
    designedIn: "the UK",
  },
  {
    id: 5,
    name: "Pheobe Dress",
    price: "£59.00",
    fabric: "Linen",
    madeIn: "the UK",
    designedIn: "the UK",
  },
  {
    id: 6,
    name: "Linen Shirt",
    price: "£89.00",
    fabric: "Linen",
    madeIn: "India",
    designedIn: "the UK",
  },
  {
    id: 7,
    name: "Carla Jeans",
    price: "£79.00",
    fabric: "Linen",
    madeIn: "the UK",
    designedIn: "the UK",
  },
];

const ShoppingCat = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="max-w-7xl mx-auto text-center md:p-16 font-poppins p-4">
      <Section
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        initial={{ opacity: 0, y: 50, scale: 0.5 }}
        animate={isInView ? "animate" : "initial"}
        transition={{ type: "spring", damping: 50, stiffness: 200, mass: 3 }}
        className="max-w-6xl mx-auto"
      >
        <div className=" text-2xl pt-2 leading-loose uppercase md:text-4xl">
          <h2 className="headings">Summer Styling</h2>
        </div>
        <p className=" md:text-xl text-lg font-thin uppercase py-4">
          Keep cool with pieces of linen and cotton. Certified organic and fair
          trade.
        </p>
        <div className="flex md:flex-row flex-col gap-2  max-w-7xl">
          <div className="transition ease-in-out delay-300">
            <div
              style={{
                backgroundImage: `url(/images/jeans5-1.webp)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="md:h-[703px] h-[500px] md:w-[468px] w-[350px] transition ease-in-out delay-300"
            >
              {hoveredIndex === 1 ? (
                <div className="h-[703px] transition-all ease-out delay-75 grid place-content-center hover:bg-gradient-to-br from-white/40 to-white/10  p-4 hover:backdrop-blur-lg opacity-0 hover:opacity-100">
                  <h3 className="md:text-4xl text-2xl uppercase underline font-semibold py-2 ">
                    {fabricInfo[0].name}
                  </h3>
                  <div className="md:text-xl text-lg font-thin leading-loose">
                    <p className="p-2">
                      <b>MATERIAL: </b>
                      {fabricInfo[0].fabric}
                    </p>

                    <p className="p-2">
                      <b> MADE IN: </b>
                      {fabricInfo[0].madeIn}
                    </p>
                    <p className="p-2">
                      <b>DESIGNED IN:</b> {fabricInfo[0].designedIn}
                    </p>
                    <p className="p-2">{fabricInfo[0].price}</p>
                  </div>
                  <div className="grid place-content-center">
                    <button className="text-sm bg-smokeGrey py-2 px-4 mt-8 rounded-sm w-28 text-white font-semibold hover:bg-salmonPink hover:text-smokeGrey">
                      {" "}
                      <Link href="/product/15?id=15">Shop Now</Link>
                    </button>
                  </div>
                </div>
              ) : (
                false
              )}
            </div>
          </div>
          <div className=" grid md:grid-cols-3 grid-cols-2 gap-2">
            <div
              style={{
                backgroundImage: `url(/images/shirt5-1.webp)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="md:h-[347px] h-[250px] md:w-[219px] w-[175x]"
            >
              {hoveredIndex === 2 ? (
                <div className="h-[347px] transition-all ease-out delay-75 grid place-content-center hover:bg-gradient-to-br from-white/40 to-white/10  p-4 hover:backdrop-blur-lg opacity-0 hover:opacity-100">
                  <h3 className="text-2xl uppercase underline font-semibold py-2 ">
                    {fabricInfo[1].name}
                  </h3>
                  <div className="text-lg font-thin ">
                    <p className="md:p-2">
                      <b>MADE FROM:</b> {fabricInfo[1].fabric}
                    </p>

                    <p className="md:p-2">
                      <b>MADE IN:</b> {fabricInfo[1].madeIn}
                    </p>
                    <p className="md:p-2">
                      <b>DESIGNED IN:</b> {fabricInfo[1].designedIn}
                    </p>
                    <p className="md:p-2">
                      <b> {fabricInfo[1].price}</b>
                    </p>
                  </div>
                  <div className="grid place-content-center">
                    <button className="text-sm bg-smokeGrey py-2 px-4 mt-2 rounded-sm w-28 text-white font-semibold hover:bg-salmonPink hover:text-smokeGrey">
                      <Link href="/product/24?id=24">Shop Now</Link>
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
              }}
              onMouseEnter={() => setHoveredIndex(3)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="md:h-[347px] h-[250px] md:w-[219px] w-[175px]"
            >
              {hoveredIndex === 3 ? (
                <div className="h-[347px] transition-all ease-out delay-75 grid place-content-center hover:bg-gradient-to-br from-white/40 to-white/10  p-4 hover:backdrop-blur-lg opacity-0 hover:opacity-100">
                  <h3 className="text-2xl underline  uppercase font-semibold py-2 ">
                    {fabricInfo[2].name}
                  </h3>
                  <div className="text-md font-thin rounded-full text-salmonPink p-3 pt-6 pb-4 bg-mossGreen ">
                    <div
                      className="flex justify-center 
                    "
                    >
                      <p className="p-1">
                        <GiCottonFlower />
                      </p>
                    </div>
                    <p>{fabricInfo[2].fabric}</p>
                    <div
                      className="flex justify-center 
                    "
                    >
                      <p className="p-1">
                        <BiWorld />
                      </p>
                    </div>
                    <p className="p-1">{fabricInfo[2].madeIn}</p>
                    <p className="p-1">
                      <b>DESIGNED IN: </b> {fabricInfo[2].designedIn}
                    </p>
                    <p className="p-1">
                      <b>{fabricInfo[2].price}</b>
                    </p>
                  </div>
                  <div className="grid place-content-center">
                    <button className="text-sm bg-smokeGrey py-2 px-4 mt-2 rounded-sm w-28 text-white font-semibold hover:bg-salmonPink hover:text-smokeGrey">
                      {" "}
                      <Link href="/product/10?id=10">Shop Now</Link>
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
              }}
              onMouseEnter={() => setHoveredIndex(4)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="md:h-[347px] h-[250px] md:w-[219px] w-[175px]"
            >
              {hoveredIndex === 4 ? (
                <div className="h-[347px] transition-all ease-out delay-75 grid place-content-center hover:bg-gradient-to-br from-white/40 to-white/10  p-4 hover:backdrop-blur-lg opacity-0 hover:opacity-100">
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
                      <Link href="/product/18?id=18">Shop Now</Link>
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
              }}
              onMouseEnter={() => setHoveredIndex(5)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="md:h-[347px] h-[250px] md:w-[219px] w-[175x]"
            >
              {hoveredIndex === 5 ? (
                <div className="h-[347px]transition-all ease-out delay-75 grid place-content-center hover:bg-gradient-to-br from-white/40 to-white/10  p-4 hover:backdrop-blur-lg opacity-0 hover:opacity-100">
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
                      <Link href="/product/10?id=10">Shop Now</Link>
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
              }}
              onMouseEnter={() => setHoveredIndex(6)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="md:h-[347px] h-[250px] md:w-[219px] w-[175x]"
            >
              {hoveredIndex === 6 ? (
                <div className="h-[347px] transition-all ease-out delay-75 grid place-content-center hover:bg-gradient-to-br from-white/40 to-white/10  p-4 hover:backdrop-blur-lg opacity-0 hover:opacity-100">
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
                      <Link href="/product/24?id=24">Shop Now</Link>
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
              }}
              onMouseEnter={() => setHoveredIndex(7)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="md:h-[347px] h-[250px] md:w-[219px] w-[175x]"
            >
              {hoveredIndex === 7 ? (
                <div className="h-[347px] transition-all ease-out delay-75 grid place-content-center hover:bg-gradient-to-br from-white/40 to-white/10  p-4 hover:backdrop-blur-lg opacity-0 hover:opacity-100">
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
                      <Link href="/product/16?id=16">Shop Now</Link>
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
