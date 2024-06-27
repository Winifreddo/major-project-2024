"use client";
import { duration } from "@mui/material";
import React, { useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";

const features = [
  { name: "Origin", description: "Designed by Good Goods, Inc." },
  {
    name: "Material",
    description:
      "Solid walnut base with rare earth magnets and powder coated steel card cover",
  },
  { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
  { name: "Finish", description: "Hand sanded and finished with natural oil" },
  { name: "Includes", description: "Wood card tray and 3 refill packs" },
  {
    name: "Considerations",
    description:
      "Made from natural materials. Grain and color vary with each item.",
  },
];

export default function FeaturedMaterials() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // offset: ["0%", "end start"],
  });
  const zoom = useTransform(scrollYProgress, [0, 0.35], ["25%", "100%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "360deg"]);
  return (
    <>
      <AnimatePresence>
        <div className="bg-white ">
          <h2 className="text-3xl font-bold tracking-tight font-poppins text-gray-900 sm:text-4xl">
            What We Stand For
          </h2>

          <p className="mt-4 text-gray-500 font-poppins">
            We only use responsibly sourced materials in our products. All our
            products are made from natural materials and can be easily recycled.
          </p>
          <div className="mx-auto grid  max-w-xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-32 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <motion.div
              initial="hidden"
              animate="show"
              className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8"
            >
              <motion.img
                src="/images/linen.svg"
                alt="linen fabric"
                width={280}
                height={280}
                className="rounded-lg bg-gray-100"
                style={{ zoom }}
              />
              <motion.img
                src="/images/denim.svg"
                alt="denim fabric"
                width={280}
                height={280}
                className="rounded-lg bg-gray-100"
                style={{ zoom }}
              />
              <motion.img
                src="/images/cotton.svg"
                alt="a bud of cotton"
                width={280}
                height={280}
                className="rounded-lg bg-gray-100"
                style={{ zoom }}
              />
              <motion.img
                src="/images/linen2.svg"
                alt="group of linen fabrics"
                width={280}
                height={280}
                className="rounded-lg bg-gray-100"
                style={{ zoom }}
              />
            </motion.div>
            <div>
              <dl className="mt-16 grid grid-cols-1 font-poppins gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className="border-t border-gray-200 pt-4"
                  >
                    <dt className="font-medium text-gray-900">
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </>
  );
}
