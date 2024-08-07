import React, { useState } from "react";
import prisma from "@/lib/prisma";
import getSession from "@/lib/getSession";
import StyleInspoView from "@/app/components/StyleInspoView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Style Inspiration",
};

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
  if (profile === null) {
    return (
      <>
        <div className="text-center">
          <h1 className="md:text-4xl text-2xl p-4 font-poppins font-semibold">
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
              <span className="C">H</span>ave you ever looked at your clothes
              and thought I have nothing to wear? Even though you have enough
              clothes to rival any clothes shop? Us too! That&#39;s why
              we&#39;ve created a personalised Style Inspiration column. Our old
              pieces can be just as wonderful as our new ones and all it takes
              is a bit of re-imagining!
            </p>
            <p className="p-4 mb-4">
              Simply select any item you have previously purchased with us
              (there is no time limit, they could be items purchased 2 years
              ago!) and we will give you ideas how to style it using items you
              most probably already own. As we say here at Reform, It&#39;s not
              about the clothes, it&#39;s about how you wear them! <br />
              <b> Peace and love, The Reform Team x </b>
            </p>
          </div>
          <p className="p-4">You currently have no past orders.</p>
        </div>
      </>
    );
  }
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

  return (
    <div>
      <h1 className="md:text-4xl text-2xl p-4 font-poppins font-semibold">
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
      {<StyleInspoView order={styleItems} />}{" "}
    </div>
  );
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
