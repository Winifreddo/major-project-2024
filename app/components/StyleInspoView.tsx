"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import "/public/fonts/fonts.css";
import { IoIosHeartHalf } from "react-icons/io";

type styleItemProps = {
  id: number;
  imageUrl: string;
  imageUrl2: string;
  orderItemId: number;
};

type orderItemProps = {
  id: number;
  orderId: number;
  StyleInspo: styleItemProps | null;
}[];

type Props = {
  id: number;
  advice?: string;
  //   keyFormula?: string;
  title?: string;
  item1?: string;
  item2?: string;
  item3?: string;
  item4?: string;
};
export default function StyleInspoView({ order }: { order: orderItemProps }) {
  //   console.log("styleinspoview", order);
  const [selectedOrder, setSelectedOrder] = useState<styleItemProps | null>(
    null
  );

  const [casualStyleAdvice, setCasualStyleAdvice] = useState<Props[] | null>(
    null
  );
  const [dressedUpStyleAdvice, setDressedUpStyleAdvice] = useState<
    Props[] | null
  >(null);

  const getOrder = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const orderId = event.currentTarget.order.value;
    const selectedOrder = order.find((item) => item.id === parseInt(orderId));
    setSelectedOrder(selectedOrder?.StyleInspo || null);
    // console.log(selectedOrder?.StyleInspo?.imageUrl);
    // console.log(order[0].StyleInspo?.orderItemId);

    if (selectedOrder?.StyleInspo?.orderItemId === 9) {
      const casualStyleAdvice: Props[] = [
        {
          id: 1,
          title: "Poppy Dress",
          advice:
            "The poppy dress is forever a classic. We hope you'll be wearing it for years to come! For extra style points hrow over a jumper, cardigan or gilet. Add a colourful pair of shoes (anything that you have!) and then add your favourite accessories.",
          item1: "Sunglasses",
          item2: "Jumper, cardigan or gilet",
          item3: "Any flat shoes or trainers",
          item4: "Jewellery",
        },
      ];
      setCasualStyleAdvice(casualStyleAdvice);
      const dressedUpAdvice: Props[] = [
        {
          id: 1,
          title: "Poppy Dress",
          advice:
            "Snazz up your dress with an oversized blazer (if you don't have one consider thrifting from a charity shop!) Add a pair of heels and your favourite accessories.",
          item1: "Oversized blazer",
          item2: "Heels",
          item3: "Accessories",
          item4: "Handbag",
        },
      ];
      setDressedUpStyleAdvice(dressedUpAdvice);
    }
    if (selectedOrder?.StyleInspo?.orderItemId === 10) {
      const casualStyleAdvice: Props[] = [
        {
          id: 2,
          title: "Thea T-shirt",
          advice:
            "Style up your basic t-shirt with a cool pair of jeans and a pair of sandals. Incorporate any accessories you have to add chicness.",
          item1: "Jeans",
          item2: "Sandals",
          item3: "Earrings, rings, necklaces",
          item4: "Handbag",
        },
      ];
      setCasualStyleAdvice(casualStyleAdvice);
      const dressedUpAdvice: Props[] = [
        {
          id: 2,
          title: "Thea T-shirt",
          advice:
            "Add heeled sandals for an elevated look, or if you don’t have sandals try a pair of heeled boots! Incorporate any gold jewellery that you have. Gold will elevate the basic top.",
          item1: "Any kind of heel",
          item2: "Gold jewellery",
          item3: "Handbag",
        },
      ];
      setDressedUpStyleAdvice(dressedUpAdvice);
    }

    if (selectedOrder?.StyleInspo?.orderItemId === 11) {
      const casualStyleAdvice: Props[] = [
        {
          id: 3,
          title: "Carmela Jeans",
          advice:
            "Oh Jeans, we love you! The ultimate versatile item. If you are looking to step up your jean game the number one rule is.. there are no rules! However, chuck on any layer, a waistcoat, gilet or tie a jumper around your shoulders, pair with cool accessories and you are good to go.",
          item1: "Waistcoat, gilet or jumper",
          item2: "Cap",
          item3: "Sunglasses",
          item4: "Basic T-shirt",
        },
      ];
      setCasualStyleAdvice(casualStyleAdvice);
      const dressedUpAdvice: Props[] = [
        {
          id: 3,
          title: "Carmela Jeans",
          advice:
            "Jeans go from comfy to chic in a second when you add any heel. Add your favourite earrings and a bangle for good measure",
          item1: "Heels",
          item2: "Earrings",
          item3: "Bangles",
          item4: "Handbag",
        },
      ];
      setDressedUpStyleAdvice(dressedUpAdvice);
    }
  };
  return (
    <div className="font-poppins p-16 mb-8 text-center max-w-7xl mx-auto leading-loose">
      <h1 className="text-4xl font-poppins p-4 font-semibold">
        Style Inspiration
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
          {" "}
          <span className="C">H</span>ave you ever looked at your clothes and
          thought I have nothing to wear? Even though you have enough clothes to
          rival any clothes shop? Us too! That&#39;s why we&#39;ve created a
          personalised Style Inspiration column. Our old pieces can be just as
          wonderful as our new ones and all it takes is a bit of re-imagining!
        </p>
        <p className="p-4 mb-4">
          Simply select any item you have previously purchased with us (there is
          no time limit, they could be items purchased 2 years ago!) and we will
          give you ideas how to style it using items you most probably already
          own. As we say here at Reform, It&#39;s not about the clothes,
          it&#39;s about how you wear them! <br />
          <b> Peace and love, The Reform Team x </b>
        </p>
        {/* </div> */}
        {/* <div className="p-2 my-4 shadow-md font-thin rounded-md"> */}
      </div>
      <div className="p-2 shadow-md my-4 rounded-md font-thin">
        <h3 className="p-4 italic text-md">
          {" "}
          Select an item from your previous orders to see some serious style!
        </h3>
        <form
          onSubmit={getOrder}
          className="grid grid-cols-2 py-2 px-4 w-1/2 mx-auto"
        >
          <select name="order" id="order">
            <option value="">Select an item</option>
            {/* 9 */}
            <option value={order[0].StyleInspo?.orderItemId}>
              Poppy Dress
            </option>
            {/* 10 */}
            <option value={order[1].StyleInspo?.orderItemId}>
              Thea T-shirt
            </option>
            {/* 11 */}
            <option value={order[2].StyleInspo?.orderItemId}>
              Carmela Jeans
            </option>
          </select>
          <button className="bg-smokeGrey  text-white w-1/2 mx-auto my-4 rounded-md mb-3">
            Go
          </button>
        </form>
        {selectedOrder && (
          <div className="p-2 my-16 ">
            <div className="grid grid-cols-1 place-items-center">
              <div className="grid grid-cols-2 mb-6 shadow-md  place-items-center rounded-md ">
                <Image
                  src={`/images/${selectedOrder.imageUrl}`}
                  alt="style-inspo"
                  width={500}
                  height={500}
                />
                {casualStyleAdvice &&
                  casualStyleAdvice.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 text-start bg-stoneLight h-full"
                    >
                      <h2>{item.title}</h2>
                      <p className="my-4">{item.advice}</p>
                      <p className="font-medium italic">
                        Ultimate style formula:
                      </p>
                      <ul className="p-2">
                        <li className="flex justify-start">
                          {" "}
                          <IoIosHeartHalf className="m-2" /> {item.item1}
                        </li>
                        <li className="flex justify-start">
                          {" "}
                          <IoIosHeartHalf className="m-2" /> {item.item2}
                        </li>
                        <li className="flex justify-start">
                          {" "}
                          <IoIosHeartHalf className="m-2" /> {item.item3}
                        </li>
                        <li className="flex justify-start">
                          {" "}
                          <IoIosHeartHalf className="m-2" /> {item.item4}
                        </li>
                      </ul>
                    </div>
                  ))}
              </div>
              <div className="grid grid-cols-2 mb-6 shadow-md  place-items-center rounded-md ">
                <Image
                  src={`/images/${selectedOrder.imageUrl2}`}
                  alt="style-inspo"
                  width={500}
                  height={500}
                />
                {dressedUpStyleAdvice &&
                  dressedUpStyleAdvice.map((item) => (
                    <div key={item.id} className="p-4 text-start">
                      <p className="my-4">{item.advice}</p>
                      <p className="font-medium italic">
                        Ultimate style formula:
                      </p>
                      <ul className="p-2">
                        <li className="flex justify-start">
                          {" "}
                          <IoIosHeartHalf className="m-2" /> {item.item1}
                        </li>
                        <li className="flex justify-start">
                          {" "}
                          <IoIosHeartHalf className="m-2" /> {item.item2}
                        </li>
                        <li className="flex justify-start">
                          {" "}
                          <IoIosHeartHalf className="m-2" /> {item.item3}
                        </li>
                        <li className="flex justify-start">
                          {" "}
                          <IoIosHeartHalf className="m-2" /> {item.item4}
                        </li>
                      </ul>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
