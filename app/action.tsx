"use server";
import prisma from "@/lib/prisma";

export async function getOrder(formData: FormData) {
  const response = formData.get("order") as string;
  const order = parseInt(response);
  //   console.log(order);

  const orderStyle = await prisma.orderItem.findMany({
    where: {
      id: order,
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
  //   console.log(" from action ", orderStyle);
  return orderStyle;
}
