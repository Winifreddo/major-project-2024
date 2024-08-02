"use client";
import React, { useRef, useState, useMemo } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import { BiWorld } from "react-icons/bi";
import { RiLeafFill } from "react-icons/ri";
import Section from "./Section";

const fabricInfo = [
  // {
  //   id: 1,
  //   name: "Carmella Jeans",
  //   price: "£89.00",
  //   image: "/images/jeans5-1.webp",
  //   fabric: "Cotton",
  //   madeIn: "India",
  //   designedIn: "the UK",
  // },
  {
    id: 2,
    name: "Linen Shirt",
    price: "£89.00",
    image: "/images/shirt5-1.webp",
    fabric: "Linen",
    madeIn: "India",
    designedIn: "UK",
    productId: 24,
  },
  {
    id: 3,
    name: "Pheobe Dress",
    price: "£59.00",
    image: "/images/dress9-1.webp",
    fabric: "Linen",
    madeIn: " UK",
    designedIn: "UK",
    productId: 10,
  },
  {
    id: 4,
    name: "Fleur Jeans",
    price: "£79.00",
    image: "/images/jeans8-1.webp",
    fabric: "Cotton",
    madeIn: "UK",
    designedIn: " UK",
    productId: 18,
  },
  {
    id: 5,
    name: "Pheobe Dress",
    price: "£59.00",
    image: "/images/dress9-2.webp",
    fabric: "Linen",
    madeIn: "UK",
    designedIn: "UK",
    productId: 10,
  },
  {
    id: 6,
    name: "Linen Shirt",
    price: "£89.00",
    image: "/images/shirt5-2.webp",
    fabric: "Linen",
    madeIn: "India",
    designedIn: "UK",
    productId: 24,
  },
  {
    id: 7,
    name: "Carla Jeans",
    price: "£79.00",
    fabric: "Linen",
    image: "/images/jeans6-1.webp",
    madeIn: "UK",
    designedIn: "UK",
    productId: 16,
  },
];

const ProductCard = ({ product }: { product: any }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="md:h-[347px]   
 h-[250px] md:w-[220px] w-[175x]"
      style={{
        backgroundImage: `url(${product.image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {isHovered && (
        <div className="md:h-[347px] h-[250px] transition-all text-center ease-out delay-75 grid place-content-center hover:bg-gradient-to-br from-white/40 to-white/10  p-4 hover:backdrop-blur-lg opacity-0 hover:opacity-100">
          <h3 className="text-lg  uppercase font-bold py-2 text-stoneLight ">
            {product.name} {product.price}
          </h3>
          <div className=" font-thin  mx-auto text-salmonPink md:p-3 p-1 md:w-[200px] w-[150px]">
            <div className="flex justify-start text-center md:text-sm text-xs bg-mossGreen text-salmonPink md:p-3  p-2 rounded-t-lg opacity-75 m-1 ">
              <p className="pr-1 ">
                <RiLeafFill className="h-5 w-5" />
              </p>
              <p className=" text-center">Materials: {product.fabric}</p>
            </div>
            <div className="flex justify-center md:text-sm text-xs bg-salmonPink text-mossGreen md:p-3 p-2 rounded-t-md opacity-75 m-1 ">
              <p className="pr-1">
                <BiWorld className="h-5 w-5" />
              </p>
              <p className="">Made in: {product.madeIn}</p>
            </div>
            <div className="flex justify-center bg-darkPink text-salmonPink md:text-sm text-xs md:p-3 p-2 rounded-t-md opacity-75 m-1 ">
              <p className="pr-1">
                <LocalFloristIcon className="h-5 w-5" />
              </p>
              <p>Designed in: {product.designedIn}</p>
            </div>

            <div className="grid place-content-center">
              <button className="text-sm bg-smokeGrey py-2 md:px-4 md:mt-2 rounded-sm w-28 text-white font-semibold hover:bg-salmonPink hover:text-smokeGrey">
                {" "}
                <Link href={`/product/10?id=${product.productId}`}>
                  Shop Now
                </Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ShoppingCat = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const memoizedFabricInfo = useMemo(() => {
    return fabricInfo;
  }, [fabricInfo]);

  return (
    <div className="max-w-6xl mx-auto text-center md:p-16 font-poppins p-4">
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
        <div className="flex md:flex-row flex-col gap-2 max-w-7xl">
          <div className="transition md:w-1/3 ease-in-out delay-300">
            {/* <Image
              src="/images/jeans5-1.webp"
              alt="jeans"
              width={600}
              height={600}
              className="object-cover h-full w-full"
            /> */}
            <div
              style={{
                backgroundImage: `url(/images/jeans5-1.webp)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className="h-full w-full"
            >
              <div className="md:h-[702px] h-[400px] transition-all text-center ease-out delay-75 grid place-content-center hover:bg-gradient-to-br from-white/40 to-white/10  p-4 hover:backdrop-blur-lg opacity-0 hover:opacity-100">
                <h3 className="text-lg  uppercase font-bold py-2 text-stoneLight ">
                  Carmella Jeans £79.00
                </h3>
                <div className=" font-thin text-salmonPink p-3 md:w-[200px] w-[150px]">
                  <div className="flex justify-start text-center md:text-sm text-xs bg-mossGreen text-salmonPink p-3 rounded-t-lg opacity-75 m-1 ">
                    <p className="pr-1 ">
                      <RiLeafFill className="h-5 w-5" />
                    </p>
                    <p className=" text-center">Materials: Cotton</p>
                  </div>
                  <div className="flex justify-center md:text-sm text-xs bg-salmonPink text-mossGreen p-3 rounded-t-md opacity-75 m-1 ">
                    <p className="pr-1">
                      <BiWorld className="h-5 w-5" />
                    </p>
                    <p className="">Made in: India</p>
                  </div>
                  <div className="flex justify-center bg-darkPink text-salmonPink md:text-sm text-xs p-3 rounded-t-md opacity-75 m-1 ">
                    <p className="pr-1">
                      <LocalFloristIcon className="h-5 w-5" />
                    </p>
                    <p>Designed in: UK</p>
                  </div>
                </div>
                <div className="grid place-content-center">
                  <button className="text-sm bg-smokeGrey py-2 px-4 mt-2 rounded-sm w-28 text-white font-semibold hover:bg-salmonPink hover:text-smokeGrey">
                    {" "}
                    <Link href="/product/10?id=10">Shop Now</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 grid md:grid-cols-3 grid-cols-2 gap-2">
            {memoizedFabricInfo.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ShoppingCat;
