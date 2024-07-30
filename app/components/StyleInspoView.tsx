"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
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

export default function StyleInspoView({ order }: { order: orderItemProps }) {
  //   console.log("styleinspoview", order);

  const [selectedOrder, setSelectedOrder] = useState<styleItemProps | null>(
    null
  );

  const getOrder = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const orderId = event.currentTarget.order.value;
    const selectedOrder = order.find((item) => item.id === parseInt(orderId));
    setSelectedOrder(selectedOrder?.StyleInspo || null);
    // console.log(selectedOrder?.StyleInspo?.imageUrl);
  };
  return (
    <div>
      <form onSubmit={getOrder}>
        <select name="order" id="order">
          {order.map((item) => (
            <option key={item.id} value={item.id}>
              {item.StyleInspo?.orderItemId}
            </option>
          ))}
        </select>
        <button>Go</button>
      </form>
      {selectedOrder && (
        <div>
          <h1>Style Inspiration</h1>
          <div className="flex gap-4">
            <Image
              src={`/images/${selectedOrder.imageUrl}`}
              alt="style-inspo"
              width={500}
              height={500}
            />

            <Image
              src={`/images/${selectedOrder.imageUrl2}`}
              alt="style-inspo"
              width={500}
              height={500}
            />
          </div>
        </div>
      )}
    </div>
  );
}
