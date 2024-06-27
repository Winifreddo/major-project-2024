"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-7xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm font-poppins font-medium">
          Better every day
        </span>
        <h1 className="text-5xl md:text-7xl font-semibold leading-relaxed">
          RE- <br /> FORM
        </h1>
        <p className="text-base md:text-lg my-4 md:my-6 font-light">
          We're Reform! A sustainable fashion brand designing for the future and
          creating for the here and now. We love all things fashion and we're
          here to help you stay fashionable and sustainable!
        </p>
        {/* <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Find a class
        </button> */}
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array: any[]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "images/allClothing.jpg",
  },
  {
    id: 2,
    src: "images/jewlry.jpg",
  },
  {
    id: 3,
    src: "images/hero1.jpg",
  },
  {
    id: 4,
    src: "images/denim.svg",
  },
  {
    id: 5,
    src: "images/hero4.jpg",
  },
  {
    id: 6,
    src: "images/linen2.svg",
  },
  {
    id: 7,
    src: "images/hero2.jpg",
  },
  {
    id: 8,
    src: "images/hero5.svg",
  },
  {
    id: 9,
    src: "images/dresses.jpg",
  },
  {
    id: 10,
    src: "images/tops.png",
  },
  {
    id: 11,
    src: "images/bottoms.jpg",
  },
  {
    id: 12,
    src: "images/hero3.jpg",
  },
  //   {
  //     id: 13,
  //     src: "images/jewlry.jpg",
  //   },
  //   {
  //     id: 14,
  //     src: "images/linen.svg",
  //   },
  //   {
  //     id: 15,
  //     src: "images/linen2.svg",
  //   },
  //   {
  //     id: 16,
  //     src: "images/denim.svg",
  //   },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-3 grid-rows-3 h-[600px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
