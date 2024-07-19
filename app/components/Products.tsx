"use client";
import React, { use } from "react";
import { useEffect, useState } from "react";

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
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.productName}</h2>
            <p>{product.price}</p>
            <img
              src={`/images/${product.productImageOne}`}
              alt={product.productName}
              width={200}
              height={200}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
