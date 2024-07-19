"use client";
import React, { use } from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

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
    <div className="mx-auto max-w-7xl px-4 py-12 bg-white font-poppins">
      <div>
        <div className=" flex flex-col text-center items-center">
          <h1 className="font-medium uppercase text-center text-6xl p-8">
            {category}
          </h1>
          <p className="text-center font-thin max-w-3xl text-lg p-4 pb-12">
            Get ready to celebrate your unique style with our range of{" "}
            {category}! There&#39;s something for everyone in our stunning
            collection of {category}.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
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
              <div className="flex justify-around">
                {" "}
                <p className="font-semibold">{product.productName}</p>
                <p className="font-medium">£{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
