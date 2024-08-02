"use client";
import React from "react";
import { useRef } from "react";
import Section from "./Section";
import { useInView } from "framer-motion";
import "/public/fonts/fonts.css";
import ProductDetails from "@/app/components/ProductDetails";
import IndividualProdImageGal from "./IndividualProdImageGal";

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

const IndividualProduct = ({ product }: { product: Product }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  // TODO: Add a zoom feature to the images

  return (
    <div className="mx-auto max-w-7xl font-poppins p-8">
      <Section
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        initial={{ opacity: 0, y: 50, scale: 0.5 }}
        animate={isInView ? "animate" : "initial"}
        transition={{ type: "spring", damping: 50, stiffness: 200, mass: 3 }}
        className="grid grid-cols-1 gap-4 lg:grid-cols-2"
      >
        {/* image gallery of product details*/}
        {product && <IndividualProdImageGal product={product} />}

        {/* product description of product details */}
        {product && <ProductDetails product={product} />}
      </Section>
    </div>
  );
};

export default IndividualProduct;
