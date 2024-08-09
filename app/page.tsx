import Image from "next/image";
import prisma from "@/lib/prisma";
import "/public/fonts/fonts.css";
import Hero from "@/components/Hero";
import ShoppingCat from "@/components/ShoppingCat";
import FeaturedMaterials from "@/components/FeaturedMaterials";
import FeaturedPoducts from "@/components/FeaturedProduct";
import ShuffleHero from "@/components/ImageGal";

import BlogHighlight from "@/components/BlogHighlight";

export default async function Home() {
  return (
    <main className="min-h-screen bg-bgColor">
      <ShuffleHero />
      <FeaturedPoducts />
      <ShoppingCat />
      <FeaturedMaterials />
      <BlogHighlight />
    </main>
  );
}
