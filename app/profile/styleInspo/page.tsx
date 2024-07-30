import React, { useState } from "react";
import prisma from "@/lib/prisma";
import getSession from "@/lib/getSession";
import StyleInspoView from "@/app/components/StyleInspoView";

type StyleInspoProps = {
  id: number;
  imageUrl: string;
  imageUrl2: string;
  orderItemId: number;
};

type orderItemProps = {
  id: number;
  orderId: number;
  StyleInspo: StyleInspoProps | null;
};

export default async function page() {
  const session = await getSession();
  const user = session?.user;

  const profile = await prisma.profile.findUnique({
    where: {
      userId: user?.id,
    },
    select: {
      orders: true,
    },
  });

  const orderNumber = profile?.orders?.id;
  // console.log("orderNumber", orderNumber);
  const orderItem = await prisma.orderItem.findMany({
    where: {
      orderId: orderNumber,
    },
    select: {
      id: true,
      orderId: true,
      StyleInspo: {
        select: {
          id: true,
          imageUrl: true,
          imageUrl2: true,
          orderItemId: true,
        },
      },
    },
  });

  const styleItems = orderItem;

  console.log("orderItem", styleItems);

  // const orderItems: orderItemProps[] = orderItem[0].orderItems;
  // console.log("order", orderItem[0].orderItems);

  return <div>{<StyleInspoView order={styleItems} />} </div>;
}

{
  /* <form
        action={async (formData: FormData) => {
          "use server";
          const response = formData.get("order") as string;
          const order = parseInt(response);
          // console.log(order);

          const orderStyle = await prisma.orderItem.findMany({
            where: {
              orderId: order,
            },
            select: {
              StyleInspo: {
                select: {
                  id: true,
                  orderItemId: true,
                  imageUrl: true,
                  imageUrl2: true,
                },
              },
            },
          });
   
          return orderStyle;
        }}
      >
        <select name="order" id="order">
          <option value=""> </option>
          {orderItems.map((item) => (
            <option key={item.id} value={item.orderId}>
              {item.orderId}
            </option>
          ))}
          {/* <option value="1">{orderItem[0].id}</option> */
}
//   </select>
//   <button>Go</button>
// </form> */}
