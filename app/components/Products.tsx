"use client";
import React, { use } from "react";
import { fetchProducts } from "../actions/actions";
import { useEffect, useState } from "react";
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
export default function Products() {
  const searchParamaters = useSearchParams();
  const category = searchParamaters.get("category");
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      if (category) {
        const products = await fetchProducts(category);
        setProducts(products);
        console.log(products);
      }
    };
    getProducts();
  }, [category]);

  return (
    <div>
      {products.map((product) => (
        <div key={product.productName}>
          <h1>{product.productName}</h1>
          <h2>{product.price}</h2>
          <h2>{product.colour}</h2>
        </div>
      ))}
    </div>
  );
}
// console.log(searchParamaters.get("category"));
// const [productData, setProductData] = useState<Product[]>([]);
// useEffect(() => {
//   if (products) {
//     const fetchData = async () => {
//       try {
//         const results = await prisma.product.findMany({
//           where: {
//             category: products,
//           },
//           select: {
//             id: true,
//             productName: true,
//             price: true,
//             colour: true,
//             category: true,
//             subCategory: true,
//             productImageOne: true,
//             productImageTwo: true,
//             productImageThree: true,
//             description: true,
//             material: true,
//             materialSource: true,
//             madeIn: true,
//           },
//         });
//         setProductData(results);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//     // console.log("Category: ", searchParamaters.get("category"));
//   }
// }, [products]);

{
  /* {productData.map((product) => (
        <div key={product.productName}>
          <h1>{product.productName}</h1>
        </div>
      ))} */
}
{
  /* {productData.map((product) => (
      <div key={product.productName}>
        <h1>{product.productName}</h1>
        <h2>{product.price}</h2>
        <h2>{product.colour}</h2>
        <h2>{product.category}</h2>
        <h2>{product.subCategory}</h2>
        <h2>{product.description}</h2>
        <h2>{product.material}</h2>
        <h2>{product.materialSource}</h2>
        <h2>{product.madeIn}</h2>
        <img
          src={`/images/${product.productImageOne}`}
          alt={product.productName}
          width={500}
          height={500}
        />
    ))} */
}
