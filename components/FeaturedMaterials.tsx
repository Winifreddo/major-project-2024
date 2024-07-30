"use client";
import Section from "./Section";
import React from "react";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Materials = [
  {
    id: 1,
    name: "Our Fabrics Are Sustainable",
    imageUrl: "/images/textile.svg",
    description:
      "We use lower impact materials like organic cotton, linen, and Tencel. Additionally, we recycle our fabrics by reusing materials from deadstock clothing that is returned to us and not in a resalable condition.",
    readMore: "Learn More",
  },
  {
    id: 2,
    name: "Our Clothes Are For Everyone",
    imageUrl: "/images/inclusive.svg",
    description:
      "We believe fashion should be BOTH good quality and affordable. We opt to deliver quality over quantity, do not follow transient trends, and we make sure our clothes are accessible for every beautiful body.",
    readMore: "Learn More",
  },

  {
    id: 3,
    name: "We Are Carbon Neutral",
    imageUrl: "/images/carbonFoot.jpg",
    description:
      "We are committed to reducing our carbon footprint. We offset our carbon emissions by investing in renewable energy projects and planting trees. We are also a member of 1% for the Planet, donating 1% of our annual sales to environmental causes.",
    readMore: "Learn More",
  },
  {
    id: 4,
    name: "Our Fabrics Are Ethically Sourced",
    imageUrl: "/images/cotton.svg",
    description:
      "We work with suppliers who share our values and are committed to fair labor practices. We carry out unannounced audits on our suppliers regularly to ensure they meet our standards.",
    readMore: "Learn More",
  },
];

export default function FeaturedMaterials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  // const [hideContent, setHideContent] = useState(true);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  return (
    <>
      <div ref={ref} className="py-14">
        <Section
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          animate={isInView ? "animate" : "initial"}
          transition={{ type: "spring", damping: 50, stiffness: 200, mass: 3 }}
          className="col-span-12 md:col-span-8 mx-auto"
        >
          <div className="font-medium uppercase p-4 pb-0 lg:pb-4 text-center text-2xl md:text-4xl leading-relaxed">
            <h2 className="headings">Our promise to you</h2>
            <p className="font-thin font-poppins py-4 text-lg md:text-2xl">
              Twill You Be Impressed? Our Clothes Say Yes!
            </p>
          </div>
        </Section>
      </div>
      <div className="mx-auto max-w-8xl ">
        <Section className="grid md:grid-cols-2 gap-0 max-w-6xl mx-auto ">
          {Materials.map((material, index) => (
            <div
              key={material.id}
              className="flex flex-col items-center mx-4 mb-4 md:m-0 "
            >
              <div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  backgroundImage: `url(${material.imageUrl})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className="w-full h-[500px] md:h-[550px] bg-cover bg-center ease-in duration-300"
              >
                <div className="h-full text-center">
                  {hoveredIndex === index ? (
                    <div className="h-[500px] md:h-[550px] grid place-content-center bg-gradient-to-br from-white/40 to-white/10  p-4 backdrop-blur-lg">
                      <h3 className="text-4xl uppercase text-white font-semibold py-2 ">
                        {material.name}
                      </h3>
                      <p className="text-xl font-thin text-white leading-loose ">
                        {material.description}
                      </p>
                      <div className="grid place-content-center">
                        <button className="text-sm bg-smokeGrey py-2 px-4 mt-8 rounded-sm w-28 text-white font-semibold hover:bg-salmonPink hover:text-smokeGrey">
                          {" "}
                          <Link href="#">{material.readMore}</Link>
                        </button>
                      </div>
                    </div>
                  ) : (
                    false
                  )}
                </div>
              </div>
            </div>
          ))}
        </Section>
      </div>
    </>
  );
}
