import React from "react";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import { GiCottonFlower } from "react-icons/gi";
import { BiWorld } from "react-icons/bi";
import { RiLeafFill } from "react-icons/ri";
import Link from "next/link";
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import StyleIt from "./StyleIt";

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

const ProductDetails = ({ product }: { product: Product }) => {
  console.log(product.subCategory);
  return (
    <div className="flex flex-col p-2">
      <div className="flex text-xs">
        <p className="font-thin italic py-2">
          <Link href="/">Home</Link>/
          <Link href={`shop/${product.category}`}>{product.category}</Link>
        </p>{" "}
      </div>
      <hr className="opacity-20" />
      <h1 className="py-2 md:py-6 text-2xl md:text-4xl">
        {product.productName}- {product.colour}
      </h1>
      <h2 className="text-lg md:text-2xl pb-2">£{product.price}.00</h2>
      <p className="py-2 font-thin text-sm">
        <b>Description: </b>
        {product.description}
      </p>
      <p className="font-thin pb-6 text-sm">
        <b>Colour:</b> {product.colour}
      </p>
      <hr className="opacity-20 mb-4" />

      {/* TODO: Add size chart */}
      {/* TODO: Add cart functionality */}
      {/*   id     
  cartId    Int   
  cart      Cart   
  productId Int
  size       */}

      <form className="flex flex-col">
        <label htmlFor="quantity" className="p-2">
          Select a size:
        </label>
        <select name="quantity" id="quantity" className="bg-white p-2 my-3">
          <option value="0" className="opacity-2"></option>
          <option value="1">UK 6-8</option>
          <option value="2">UK 10-12</option>
          <option value="3">UK 12-14</option>
          <option value="4">UK 14-16</option>
          <option value="5">UK 16-18</option>
          <option value="6">UK 18-20</option>
        </select>
        <button
          type="submit"
          className="bg-smokeGrey py-2 text-white rounded-md mb-3"
        >
          Add to cart
        </button>
      </form>

      <hr className="opacity-20 mb-6" />
      <h4 className="headings">More About Me</h4>
      <div className="grid md:grid-cols-4 grid-cols-2 text-center place-items-center gap-1 my-4 mb-6 font-thin">
        <div className="w-full bg-mossGreen p-6 rounded-t-full ">
          <div className="w-full flex justify-center">
            <GiCottonFlower className="w-6 h-6 text-stoneLight " />
          </div>
          <h4 className="text-stoneLight font-semibold">Materials:</h4>
          <p className="text-stoneLight">{product.material}</p>
        </div>
        <div className="w-full bg-stoneDark p-6 rounded-t-full">
          <div className="w-full flex justify-center">
            <BiWorld className="w-6 h-6 text-mossGreen" />
          </div>
          <h4 className="text-mossGreen font-semibold">Sourced in:</h4>
          <p className="text-mossGreen">{product.materialSource}</p>
        </div>
        <div className="w-full bg-darkPink p-6 rounded-t-full">
          <LocalFloristIcon className="w-6 h-6 text-stoneLight" />
          <h4 className="text-stoneLight font-semibold">Made in:</h4>
          <p className="text-stoneLight">{product.madeIn}</p>
        </div>
        <div className="w-full bg-stoneMedium p-6 rounded-t-full">
          {" "}
          <div className="w-full flex justify-center">
            <RiLeafFill className="w-6 h-6 text-mossGreen" />
          </div>
          <p className="text-mossGreen">Carbon Neutral</p>
        </div>
      </div>
      <hr className="opacity-20 mb-6" />
      <h4 className="headings">Style Tips</h4>
      <StyleIt product={product} />
    </div>
  );
};

export default ProductDetails;
