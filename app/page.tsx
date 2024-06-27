import Image from "next/image";
import prisma from "@/lib/prisma";
import "/public/fonts/fonts.css";
import Hero from "@/components/Hero";
// import SmoothScroll from "@/components/SmoothScroll";
import FeaturedMaterials from "@/components/FeaturedMaterials";

import ShuffleHero from "@/components/ImageGal";

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
    </main>
  );
}
