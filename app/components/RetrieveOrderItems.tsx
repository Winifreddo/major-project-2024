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
      <button onClick={toggleViewOrder}>
        {viewOrder ? "Close Order" : "View Order"}
      </button>
      <div className="flex flex-col gap-4">
        {viewOrder &&
          order.map((orderItem) => {
            return (
              <div key={orderItem?.productName} className="flex flex-row gap-2">
                <div>
                  <Image
                    src={`/images/${orderItem?.productImageOne}`}
                    alt="order item"
                    width={100}
                    height={200}
                  />
                </div>
                <div className="flex flex-col">
                  <div>{orderItem?.productName}</div>
                  <div>{orderItem?.price}</div>
                  <div>{orderItem?.colour}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
