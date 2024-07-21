"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import "/public/fonts/fonts.css";
import AddToCart from "./AddToCart";

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
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  return (
    <div className="mx-auto max-w-7xl px-4 md:py-12 bg-white font-poppins">
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
                <Image
                  src={`/images/${product.productImageOne}`}
                  alt={product.productName}
                  width={400}
                  height={564}
                />
              </Link>
              <div className="flex flex-col items-start py-3 font-thin w-full">
                {" "}
                <div className=" flex items-center justify-between md:text-sm text-xs w-full font-medium py-2">
                  <p className="body">{product.productName}</p>
                  <AddToCart />
                </div>
                <p className="md:text-lg text-md">£{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
