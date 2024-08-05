"use client";
import { useState } from "react";
import Image from "next/image";

type OrderItemProps = {
  productName: string;
  price: number;
  colour: string;
  productImageOne: string;
} | null;

export default function RetrieveOrderItems({
  order,
}: {
  order: OrderItemProps[];
}) {
  const [viewOrder, setViewOrder] = useState(false);

  const toggleViewOrder = () => {
    setViewOrder(!viewOrder);
  };

  return (
    <div>
      <button
        onClick={toggleViewOrder}
        className="bg-smokeGrey p-2 text-white w-full hover:bg-salmonPink hover:text-smokeGrey rounded-md m-3"
      >
        {viewOrder ? "Close Order" : "View Order"}
      </button>
      <div className="flex flex-col gap-4">
        {viewOrder &&
          order.map((orderItem) => {
            return (
              <div
                key={orderItem?.productName}
                className="flex flex-row pt-2 mb-4 gap-4"
              >
                <div>
                  <Image
                    src={`/images/${orderItem?.productImageOne}`}
                    alt="order item"
                    width={100}
                    height={200}
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="flex flex-col text-start gap-2 justify-center">
                  <div className="">
                    <b>Item:</b> {orderItem?.productName}
                  </div>
                  <div>
                    <b>Price:</b> £{orderItem?.price}.00
                  </div>
                  <div>
                    {" "}
                    <b>Colour:</b> {orderItem?.colour}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
