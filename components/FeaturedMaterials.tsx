"use client";
import Section from "./Section";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { read } from "fs";

const Materials = [
  {
    id: 1,
    name: "Our Fabrics Are Sustainable",
    imageUrl: "/images/linen.svg",
    description:
      "We use lower impact materials like organic cotton, linen, and Tencel. Additionally, wer ecycle our fabrics by reusing materials from deadstock clothing that is returned to us and not resalable.",
    readMore: " + Learn More",
  },
  {
    id: 2,
    name: "Our Clothes Are For Everyone",
    imageUrl: "/images/inclusive.svg",
    description:
      "We believe fashion should be BOTH good quality and affordable. We opt to deliver quality over quantity, do not follow transient trends, and we make sure our clothes are accessible for every beautiful body.",
    readMore: " + Learn More",
  },

  {
    id: 3,
    name: "We Are Carbon Neutral",
    imageUrl: "/images/carbon.svg",
    description:
      "We are committed to reducing our carbon footprint. We offset our carbon emissions by investing in renewable energy projects and planting trees. We are also a member of 1% for the Planet, donating 1% of our annual sales to environmental causes.",
    readMore: " + Learn More",
  },
  {
    id: 4,
    name: "Our Fabrics Are Ethically Sourced",
    imageUrl: "/images/cotton.svg",
    description:
      "We work with suppliers who share our values and are committed to fair labor practices. We carry out unannounced audits on our suppliers regularly to ensure they meet our standards.",
    readMore: " + Learn More",
  },
];

export default function FeaturedMaterials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [showContent, setShowContent] = useState(false);
  return (
    <>
      <div ref={ref} className="py-14">
        <Section
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          animate={isInView ? "animate" : "initial"}
          transition={{ type: "spring", damping: 50, stiffness: 200, mass: 3 }}
          className="col-span-12 md:col-span-8"
        >
          <div className="font-medium uppercase p-4 text-center text-3xl md:text-5xl">
            <h2 className="headings">Our promise to you</h2>
            <p className="font-thin font-poppins text-xl md:text-2xl">
              Twill You Be Impressed? Our Clothes Say Yes!
            </p>
          </div>
        </Section>
      </div>
      <div className="mx-auto ">
        <Section className="grid grid-cols-4 bg-white gap-0">
          {Materials.map((material, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              initial={{ opacity: 0, y: 50, scale: 0.5 }}
              animate={isInView ? "animate" : "initial"}
              transition={{
                type: "spring",
                damping: 50,
                stiffness: 200,
                mass: 3,
              }}
              // whileHover={{
              //   scale: 1.1,
              // }}
              className="flex flex-col items-center hover:bg-salmonPink "
            >
              <Image
                key={material.id}
                src={material.imageUrl}
                alt={material.name}
                width={450}
                height={450}
                layout="fixed"
              />
              <div className="h-fit p-4 ">
                <h3 className="text-lg font-semibold py-2">{material.name}</h3>
                <p className="text-sm font-thin leading-loose ">
                  {material.description}
                </p>
                <Link href="#" className="text-sm pb-4">
                  {material.readMore}
                </Link>
              </div>
            </motion.div>
          ))}
        </Section>
      </div>
    </>
  );
}
