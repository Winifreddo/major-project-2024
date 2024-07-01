"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

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

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[450vh]">
      <div className=" flex items-center justify-center h-32">
        <span className="font-medium font-poppins uppercase mt-12 text-4xl lg:text-6xl pt-12 lg:pt-0">
          Shop our collections
        </span>
      </div>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
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
      className="group relative h-[450px] w-[450px] overflow-hidden"
    >
      <div
        style={{
          backgroundImage: `url(${card.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-poppins font-semibold uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
        <button>
          <Link
            className="bg-black text-white font-poppins px-4 py-2 rounded-b-lg"
            href={`/shop/${card.category}`}
          >
            Shop now
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ShoppingCat;
