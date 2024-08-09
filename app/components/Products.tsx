"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import "/public/fonts/fonts.css";
import AddToCart from "./AddToCart";
import { BiWorld } from "react-icons/bi";
import { RiLeafFill } from "react-icons/ri";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import { Suspense } from "react";

type Product = {
  id: number;
  productName: string;
  price: number;
  colour: string;
  category: string;
  subCategory: string;
  productImageOne: string;
  productImageTwo: string;
  productImageThree: string | null;
  description: string;
  material: string;
  materialSource: string;
  madeIn: string;
};

export default function Products({ products }: { products: Product[] }) {
  const [isHovered, setIsHovered] = useState(false);
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  return (
    <div className="mx-auto max-w-6xl px-4 md:py-12 bg-white font-poppins">
      <div>
        <div className=" flex flex-col text-center items-center">
          <h1 className="font-medium uppercase text-center md:text-6xl text-2xl p-8">
            {category}
          </h1>
          <p className="text-center font-thin max-w-3xl md:text-lg text-md p-4 pb-12">
            Get ready to celebrate your unique style with our range of{" "}
            {category}! There&#39;s something for everyone in our stunning
            collections.
          </p>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
          {products.map((product) => (
            <div key={product.id}>
              <Link
                href={{
                  pathname: `/product/${product.id}`,
                  query: { id: product.id },
                }}
              >
                <div
                  style={{
                    backgroundImage: `url(/images/${product.productImageOne})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="md:h-[400px]   
             h-[285px] md:w-[265px] w-[175x]"
                >
                  {isHovered && (
                    <div className="md:h-[400px] h-[275px] transition-all text-center ease-out delay-75 grid place-content-center hover:bg-gradient-to-br from-white/40 to-white/10  p-4 hover:backdrop-blur-lg opacity-0 hover:opacity-100">
                      <div className=" font-thin  mx-auto text-salmonPink md:p-3 p-1 md:w-[200px] w-[150px]">
                        <div className="flex justify-start items-center text-center md:text-sm text-xs bg-mossGreen text-salmonPink md:p-3 h-16  p-2 rounded-t-lg opacity-75 m-1 ">
                          <p className="pr-1 ">
                            <RiLeafFill className="h-5 w-5" />
                          </p>
                          <p className=" text-center">
                            Materials: {product.material}
                          </p>
                        </div>
                        <div className="flex justify-center items-center md:text-sm text-xs bg-salmonPink text-mossGreen md:p-3 p-2 h-16  rounded-t-md opacity-75 m-1 ">
                          <p className="pr-1">
                            <BiWorld className="h-5 w-5" />
                          </p>
                          <p>Made in: {product.madeIn}</p>
                        </div>
                        <div className="flex justify-center items-center bg-darkPink text-salmonPink md:text-sm text-xs md:p-3 p-2 h-16  rounded-t-md opacity-75 m-1 ">
                          <p className="pr-1">
                            <LocalFloristIcon className="h-5 w-5" />
                          </p>
                          <p>Designed in: {product.materialSource}</p>
                        </div>
                        <div className="grid place-content-center">
                          <button className="text-sm bg-smokeGrey py-2 md:px-4 md:mt-2 rounded-sm w-28 text-white font-semibold hover:bg-salmonPink hover:text-smokeGrey">
                            {" "}
                            <Suspense fallback={<div>Loading...</div>}>
                              <Link
                                href={{
                                  pathname: `/product/${product.id}`,
                                  query: { id: product.id },
                                }}
                              >
                                Shop Now
                              </Link>
                            </Suspense>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Link>

              <div className="flex flex-col items-start py-3 font-thin w-full">
                {" "}
                <div className=" flex items-center justify-between md:text-sm text-xs w-full font-medium py-2">
                  <Suspense fallback={<div>Loading...</div>}>
                    <Link
                      href={{
                        pathname: `/product/${product.id}`,
                        query: { id: product.id },
                      }}
                      className="body"
                    >
                      {product.productName}
                    </Link>
                  </Suspense>
                  <AddToCart />
                </div>
                <p className="md:text-lg text-md">£{product.price}.00</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
