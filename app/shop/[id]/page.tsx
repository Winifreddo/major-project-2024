import Image from "next/image";
import prisma from "@/lib/prisma";
import Products from "@/app/components/Products";

// type Product = {
//   id: number;
//   productName: string;
//   price: number;
//   colour: string;
//   category: string;
//   subCategory: string;
//   productImageOne: string;
//   productImageTwo: string;
//   productImageThree: string | null;
//   description: string;
//   material: string;
//   materialSource: string;
//   madeIn: string;
// };

export default async function page({
  searchParams,
}: {
  searchParams: { category: string };
}) {
  const category = searchParams.category;
  console.log(category);
  // console.log(category);
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
      <Products products={products} />
    </div>
  );
}
