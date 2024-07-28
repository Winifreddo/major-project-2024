"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";

type CardType = {
  id: number;
  category: string;
  imageUrl: string;
  title: string;
};

const cards: CardType[] = [
  {
    id: 1,
    category: "jewellry",
    imageUrl: "images/jewlry.jpg",
    title: "Jewellry",
  },
  {
    id: 2,
    category: "bottoms",
    imageUrl: "images/bottoms.jpg",
    title: "Bottoms",
  },
  {
    id: 3,
    category: "tops",
    imageUrl: "/images/tops.png",
    title: "Tops",
  },
  {
    id: 4,
    category: "dresses",
    imageUrl: "/images/dresses.jpg",
    title: "Dresses",
  },
  {
    id: 5,
    category: "swimwear",
    imageUrl: "/images/swimwear.jpg",
    title: "Swimwear",
  },
];

const ShoppingCat = () => {
  return (
    <div className="bg-white">
      <HorizontalScroll />
    </div>
  );
};

const HorizontalScroll = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"]);

  return (
    <section ref={targetRef} className="relative md:h-[450vh] h-[250vh] ">
      <div className=" flex flex-col items-center justify-center lg:h-32">
        <span className="font-medium font-poppins uppercase mt-14 text-center text-4xl md:text-6xl pt-12 lg:pt-0">
          Shop our collections
        </span>
      </div>
      <div className="sticky top-0 flex lg:h-screen md:h-[65vh] h-[40vh] items-center overflow-hidden">
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
      className="group relative md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px] h-[200px] w-[200px] overflow-hidden"
    >
      <img src={card.imageUrl} alt={card.title} className="object-cover" />

      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 md:text-6xl text-2xl font-poppins font-semibold uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
        <button>
          <Link
            className="bg-black text-white font-poppins px-4 py-2 rounded-b-lg"
            href={{
              pathname: `/shop/${card.category}`,
              query: { category: card.category },
            }}
          >
            Shop now
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ShoppingCat;
