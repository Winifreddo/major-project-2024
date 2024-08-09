import Image from "next/image";
import prisma from "@/lib/prisma";
import Products from "@/app/components/Products";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Shop",
};

export default async function page({
  searchParams,
}: {
  searchParams: { category: string };
}) {
  const category = searchParams.category;
  console.log(category);

  const products = await prisma.product.findMany({
    where: { category: category },
    select: {
      id: true,
      productName: true,
      price: true,
      colour: true,
      category: true,
      subCategory: true,
      productImageOne: true,
      productImageTwo: true,
      productImageThree: true,
      description: true,
      material: true,
      materialSource: true,
      madeIn: true,
    },
  });
  console.log(products);
  return (
    <div className="bg-white">
      <Suspense fallback={<div>Loading...</div>}>
        <Products products={products} />
      </Suspense>
    </div>
  );
}
