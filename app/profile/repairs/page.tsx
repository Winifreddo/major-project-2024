import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import Maps from "@/app/components/maps";
import "/public/fonts/fonts.css";
import HowItWorks from "@/components/HowItWorks";

type ImageProps = {
  url: string;
};

const imageUrls: ImageProps[] = [
  { url: "repair1.svg" },
  { url: "repair2.svg" },
  { url: "repair3.svg" },
];

export const metadata: Metadata = {
  title: "Repairs",
};

const page = () => {
  return (
    <div className="font-poppins p-16 mb-16 text-center max-w-7xl mx-auto leading-loose">
      <h1 className="md:text-4xl text-2xl p-4  font-poppins font-semibold">
        Repairs
      </h1>
      <div
        className="p-2 shadow-md font-thin my-4 rounded-md"
        style={{
          backgroundImage: "url('/images/accountbg2.svg')",
          backgroundSize: "fill",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <p className="p-4">
          <span className="C">W</span>e believe in the power of repair and
          rescue and we want to help you keep your clothes in good condition for
          as long as possible! Use our handy map below to find local repairs and
          alterations in your nearest area!
          <br />
          <b> Peace and love, The Reform Team x </b>
        </p>
      </div>
      <div>
        <HowItWorks imageUrls={imageUrls} />
      </div>
      <div className="grid place-items-center">
        <Maps />
      </div>
    </div>
  );
};

export default page;
