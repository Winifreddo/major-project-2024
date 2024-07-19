import Image from "next/image";
import prisma from "@/lib/prisma";
import Products from "@/app/components/Products";

type Product = {
  id: number;
  productName: string;
  price: number;
  colour: string;
  category: string;
  subCategory: string;
  productImageOne: string;
  productImageTwo: string;
  productImageThree: string | null;
  description: string;
  material: string;
  materialSource: string;
  madeIn: string;
};

export default async function page({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams: { category: string };
}) {
  const { category } = searchParams;
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
  return (
    <div>
      <Products products={products} />
      {/* <h1>{category}</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.productName}</h2>
            <p>{product.price}</p>
            <Image
              src={`/images/${product.productImageOne}`}
              alt={product.productName}
              width={200}
              height={200}
            />
          </li>
        ))}
      </ul> */}
    </div>
  );
}
