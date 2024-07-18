import Image from "next/image";
import prisma from "@/lib/prisma";
import "/public/fonts/fonts.css";
import Hero from "@/components/Hero";
import ShoppingCat from "@/components/ShoppingCat";
import FeaturedMaterials from "@/components/FeaturedMaterials";
import FeaturedPoducts from "@/components/FeaturedProduct";
import ShuffleHero from "@/components/ImageGal";
import Socials from "@/components/Socials";

// async function getUser() {
//   const user = await prisma.user.findMany({
//     where: { email: "100983uk@saeinstitute.edu" },
//   });
//   return user;
// }
// import "tailwindcss/tailwind.css";

export default async function Home() {
  // const users = await getUser();
  // console.log(users);
  return (
    <main className="min-h-screen bg-bgColor">
      {/* <Hero /> */}

      <ShuffleHero />
      <FeaturedPoducts />
      <FeaturedMaterials />
      <Socials />
      <ShoppingCat />

      {/* <SmoothScroll /> */}
    </main>
  );
}
