import React from "react";
import { Metadata } from "next";
import prisma from "@/lib/prisma";
import getSession from "@/lib/getSession";
import RetrieveOrderItems from "@/app/components/RetrieveOrderItems";
import { Order } from "@prisma/client";

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
  const fullOrder = [productOne, productTwo];

  console.log(fullOrder);
  const orderTotal = (productOne?.price ?? 0) + (productTwo?.price ?? 0);
  const orderQuantity =
    orderItem[0].orderItems[0].quantity + orderItem[0].orderItems[1].quantity;
  return (
    <div className="font-poppins bg-white">
      <h1 className="">Orders</h1>
      <h2>Order no: {orderItem[0].orderItems[0].orderId}</h2>
      <h3>Order Total: £{orderTotal}.00</h3>
      <h3>Items in this order: {orderQuantity} </h3>

      <RetrieveOrderItems order={fullOrder} />
    </div>
  );
}
