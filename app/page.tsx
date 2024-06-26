import Image from "next/image";
import prisma from "@/lib/prisma";
import "/public/fonts/fonts.css";
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
    <main className="flex min-h-screen flex-col items-center justify-between text-pink-600 p-24 font-sans">
      <h1 className="Title"> Hello</h1>
      <p className="font-poppins font-thin">test for font</p>
      <Image src="/images/shorts1.webp" alt="logo" width={200} height={200} />
    </main>
  );
}
