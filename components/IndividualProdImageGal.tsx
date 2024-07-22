import React from "react";
import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  productName: string;
  productImageOne: string;
  productImageTwo: string;
  category: string;
  colour: string;
  productImageThree: string | null;
};

const IndividualProdImageGal = ({ product }: { product: Product }) => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-3">
        {/* image gallery */}
        <Image
          src={`/images/${product.productImageOne}`}
          alt={product.productName}
          width={500}
          height={500}
          className="row-span-2 col-span-2 object-cover cursor-zoom-in"
        />
        <Image
          src={`/images/${product.productImageTwo}`}
          alt={product.productName}
          width={250}
          height={250}
          className="object-cover cursor-zoom-in"
        />
        <Image
          src={`/images/${product.productImageThree}`}
          alt={product.productName}
          width={250}
          height={250}
          className="object-cover cursor-zoom-in"
        />
      </div>
    </div>
  );
};

export default IndividualProdImageGal;
