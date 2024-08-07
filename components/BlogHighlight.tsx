"use client";
import React, { useRef } from "react";
import Section from "./Section";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import "/public/fonts/fonts.css";

type CardType = {
  id: number;
  imageUrl: string;
  title: string;
  url: string;
};

const cards: CardType[] = [
  {
    id: 1,
    imageUrl: "/images/blogCotton.svg",
    title: "Blog 1",
    url: "1",
  },
  {
    id: 2,
    imageUrl: "/images/blogRecycle.svg",
    title: "Blog 2",
    url: "2",
  },
  {
    id: 3,
    imageUrl: "/images/blogSustMat.svg",
    title: "Blog 3",
    url: "3",
  },
  {
    id: 4,
    imageUrl: "/images/blogResponsible.svg",
    title: "Blog 4",
    url: "4",
  },
];

const BlogHighlight = () => {
  return (
    <div className=" font-poppins p-16">
      <div className="flex flex-col items-center justify-center">
        <div className="headings">
          <h1 className="text-2xl  md:text-5xl text-center uppercase">
            Featured Blogs
          </h1>
        </div>
        <p className="text-center text-xl md:text-2xl font-thin text-gray-600 uppercase py-4">
          Checkout our latest blog posts
        </p>
      </div>
      <HorizontalScroll />
    </div>
  );
};

const HorizontalScroll = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-40%"]);

  return (
    <section ref={targetRef} className="relative md:h-[450vh] h-[250vh] ">
      <div className="sticky top-0 flex lg:h-screen h-[65vh]  items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px] h-[300px] w-[300px] overflow-hidden"
    >
      <img src={card.imageUrl} alt={card.title} className="object-cover" />

      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 md:text-6xl text-2xl font-poppins font-semibold uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
        <button>
          <Link
            className="bg-black text-white font-poppins px-4 py-2 rounded-b-lg"
            // href={{
            //   pathname: `/blog/${card.url}`,
            //   query: { id: card.url },
            // }}
            href={`/blog/${card.url}`}
          >
            Read More
          </Link>
        </button>
      </div>
    </div>
  );
};
export default BlogHighlight;
