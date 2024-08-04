import Image from "next/image";
import React from "react";
import "/public/fonts/fonts.css";
type ImageProps = {
  url: string;
}[];

export default function HowItWorks({ imageUrls }: { imageUrls: ImageProps }) {
  //   console.log(imageUrls);
  return (
    <div>
      {" "}
      <h1 className="md:text-3xl text-xl font-poppins font-semibold md:m-16">
        How it works..
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 shadow-sm">
        <Image
          src={`/images/${imageUrls[0].url}`}
          alt="enter your location"
          width={500}
          height={500}
          className="object-cover"
        />

        <Image
          src={`/images/${imageUrls[1].url}`}
          alt="get localised results"
          width={500}
          height={500}
          className="object-cover"
        />

        <Image
          src={`/images/${imageUrls[2].url}`}
          alt="Get your item fixed"
          width={500}
          height={500}
          className="object-cover"
        />
      </div>
    </div>
  );
}
