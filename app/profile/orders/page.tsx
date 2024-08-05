import React from "react";
import { Metadata } from "next";
import prisma from "@/lib/prisma";
import getSession from "@/lib/getSession";
import RetrieveOrderItems from "@/app/components/RetrieveOrderItems";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Orders",
};

export default async function page() {
  const session = await getSession();
  const user = session?.user;

  // get profile id from session
  const profile = await prisma.profile.findUnique({
    where: {
      userId: user?.id,
    },
    select: {
      orders: true,
    },
  });

  // get order from profile
  const orderNumber = profile?.orders?.id;
  const orderItem = await prisma.order.findMany({
    where: {
      id: orderNumber,
    },
    select: {
      orderItems: {
        select: {
          id: true,
          orderId: true,
          productId: true,
          quantity: true,
        },
      },
    },
  });

  // get individual order items
  const orderItemOne = orderItem[0].orderItems[0].productId;
  const orderItemTwo = orderItem[0].orderItems[1].productId;
  const orderItemThree = orderItem[0].orderItems[2].productId;

  const productOne = await prisma.product.findUnique({
    where: {
      id: orderItemOne,
    },
    select: {
      productName: true,
      price: true,
      colour: true,
      productImageOne: true,
    },
  });
  const productTwo = await prisma.product.findUnique({
    where: {
      id: orderItemTwo,
    },
    select: {
      productName: true,
      price: true,
      colour: true,
      productImageOne: true,
    },
  });

  const productThree = await prisma.product.findUnique({
    where: {
      id: orderItemThree,
    },
    select: {
      productName: true,
      price: true,
      colour: true,
      productImageOne: true,
    },
  });
  const fullOrder = [productOne, productTwo, productThree];

  console.log(fullOrder);
  const orderTotal =
    (productOne?.price ?? 0) +
    (productTwo?.price ?? 0) +
    (productThree?.price ?? 0);
  const orderQuantity =
    orderItem[0].orderItems[0].quantity +
    orderItem[0].orderItems[1].quantity +
    orderItem[0].orderItems[2].quantity;
  return (
    <div className="font-poppins p-16 max-w-6xl mx-auto leading-loose">
      <h1 className="font-poppins text-center font-semibold text-4xl">
        My Orders
      </h1>
      <div
        className="p-8 text-start grid grid-cols-1 lg:w-1/2 place-items-center mx-auto shadow-md rounded-md mt-8"
        style={{
          backgroundImage: "url('/images/accountbg2.svg')",
          backgroundSize: "fill",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex gap-1">
          <h2 className="text-lg font-semibold">Order no:</h2>
          <p> {orderItem[0].orderItems[0].orderId}</p>
        </div>
        <div className="flex gap-1">
          <h3 className="text-lg font-semibold">Order Total:</h3>
          <p>£{orderTotal}.00</p>
        </div>
        <div className="flex gap-1">
          <h3 className="text-lg font-semibold">Items in this order:</h3>
          <p> {orderQuantity}</p>
        </div>
        <RetrieveOrderItems order={fullOrder} />
        {/* <hr className="text-smokeGrey " /> */}
        <p className=" border-t-2 border-smokeGrey text-center w-full mt-2">
          <b>Order Status:</b> Delivered{" "}
        </p>
      </div>
    </div>
  );
}
