import prisma from "@/lib/prisma";
import IndividualProduct from "@/components/IndividualProduct";
export default async function page({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const { id } = searchParams;
  const product = await prisma.product.findUnique({
    where: { id: parseInt(id) },
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
    <div className="bg-white">
      {product && <IndividualProduct product={product} />}
    </div>
  );
}
