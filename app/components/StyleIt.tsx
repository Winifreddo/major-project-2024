"use client";
import React from "react";
import Image from "next/image";
import { styleTips } from "../styleRoutes";

type Product = {
  category: string;
  subCategory: string;
  productImageOne: string;
};

const StyleIt = ({ product }: { product: Product }) => {
  const defaultStyleTip = {
    subCategory: product.subCategory,
    styleTipOne: "Pair with a denim jacket for a casual look.",
    defaultUrl: "",
    imageUrlOne: "",
    imageUrlTwo: "",
    imageUrlThree: "",
  };
  //   const styleTips = [
  //     {
  //       subCategory: "Shirts",
  //       defaultUrl: "/images/shirtTrans.svg",
  //       styleTipOne: "Pair with high waisted jeans for a chic look.",
  //       imageUrlOne: "/images/jeansTrans.svg",
  //       styleTipTwo: "Incorporate cute accessories to add depth and intrigue.",
  //       imageUrlTwo: "/images/hairclipTrans.svg",
  //     },
  //     {
  //       subCategory: "T-shirts",
  //       defaultUrl: "/images/shirtTrans.svg",
  //       styleTipOne: "Pair with a high waisted skirt for a casual look.",
  //       imageUrlOne: "/images/skirtTrans.svg",
  //       styleTipTwo: "Add a statement necklace for a pop of color.",
  //       imageUrlTwo: "/images/necklaceTrans.svg",
  //     },
  //   ];

  const styleTip =
    styleTips.find((tip) => tip.subCategory === product.subCategory) ||
    defaultStyleTip;
  //   console.log();
  return (
    <div>
      <div className="flex flex-col">
        <p className="font-thin text-sm">
          <b>Style Tip:</b> {styleTip.styleTipOne}
        </p>

        <div className="flex">
          <Image
            src={styleTip.imageUrlOne}
            alt={styleTip.styleTipOne}
            width={200}
            height={200}
          />
          <Image src={styleTip.imageUrlTwo} alt="" width={200} height={200} />
          <Image src={styleTip.imageUrlThree} alt="" width={200} height={200} />
        </div>
      </div>
    </div>
  );
};

export default StyleIt;
