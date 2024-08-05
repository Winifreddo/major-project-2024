import prisma from "@/lib/prisma";
import IndividualProduct from "@/components/IndividualProduct";
export default async function page({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const { id } = searchParams;

  console.log("searchParams:", searchParams);

  if (!id) {
    console.error("Missing product ID:", id);
    return <div className="bg-white">Invalid Product ID</div>;
  }

  const productId = parseInt(id);
  console.log("typeof id:", typeof productId);
  console.log(isNaN(productId));

  if (typeof productId !== "number") {
    console.error("Invalid product ID, not a number:", id);
    return <div className="bg-white">Invalid Product ID</div>;
    console.log("typeof id:", typeof productId);
  }

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
