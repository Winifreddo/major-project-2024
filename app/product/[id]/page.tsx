import prisma from "@/lib/prisma";
import IndividualProduct from "@/components/IndividualProduct";
export default async function page({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const { id } = searchParams;
  console.log(id);
  // Validate id
  if (!id || isNaN(parseInt(id))) {
    return <div className="bg-white">Invalid Product ID</div>;
  }

  const productId = parseInt(id);

  const product = await prisma.product.findUnique({
    where: { id: productId },
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
