import Image from "next/image";
import prisma from "@/lib/prisma";

// async function getUser() {
//   const user = await prisma.user.findMany({
//     where: { email: "100983uk@saeinstitute.edu" },
//   });
//   return user;
// }
import "tailwindcss/tailwind.css";

export default async function Home() {
  // const users = await getUser();
  // console.log(users);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hello
    </main>
  );
}
