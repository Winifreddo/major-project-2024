import React from "react";
import Link from "next/link";
import prisma from "@/lib/prisma";
import getSession from "@/lib/getSession";
import Image from "next/image";

export default async function page() {
  const session = await getSession();
  const user = session?.user;

  const profile = await prisma.profile.findUnique({
    where: {
      userId: user?.id,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
    },
  });

  return (
    <div className="font-poppins p-16 text-center max-w-6xl mx-auto leading-loose">
      <h1 className="font-poppins text-4xl font-semibold">
        Welcome {profile?.firstName}
      </h1>
      <p className="p-2">What would you like to do today?</p>

      <div className="grid md:grid-cols-3 grid-cols-1 place-items-center p-8 gap-6 text-center shadow-md rounded-md overflow-y-scroll">
        <div className="flex flex-col shadow-md w-full justify-center p-8 text-sm rounded-md h-56 bg-salmonPink ">
          <h2 className="font-semibold text-xl underline">Orders</h2>
          <Link href="/profile/orders" className="py-2">
            View My Orders
          </Link>
          <Link href="/profile/settings" className="py-2">
            Track My Order
          </Link>
          <Link href="#" className="py-2">
            Return an Order
          </Link>
        </div>
        <div className="flex flex-col shadow-md w-full p-8 text-sm rounded-md h-56 bg-lightBlue justify-center">
          <h2 className="font-semibold text-xl underline">Account</h2>
          <Link href={`/profile/account/${profile?.id}`} className="py-2">
            View My Account
          </Link>
          <Link href="/profile/settings" className="py-2">
            Update My Account
          </Link>
          <Link href="/profile/settings" className="py-2">
            Delete My Account{" "}
          </Link>
        </div>

        <div className="flex flex-col justify-center shadow-md w-full p-8 text-sm rounded-md h-56 bg-stoneDark">
          <h2 className="font-semibold text-xl underline">
            Re-imagine My Wardrobe
          </h2>
          <Link href="/profile/repairs" className="py-2">
            Find Local Repairs & Alterations
          </Link>
          <Link href="/profile/donate">Donate My Clothes</Link>
          <Link href="/profile/styleInspo" className="py-2">
            Style Inspiration
          </Link>
        </div>
        <div className="flex flex-col justify-center shadow-md w-full p-8 text-sm rounded-md h-56 bg-mint">
          <h2 className="font-semibold text-xl underline">Get Help</h2>
          <Link href="/profile/repairs" className="py-2">
            Brand Transparency
          </Link>
          <Link href="/profile/donate">Returns Policy</Link>
          <Link href="/profile/styleInspo" className="py-2">
            Contact Us
          </Link>
        </div>
        <div className="flex flex-col  justify-center shadow-md w-full p-8 text-sm rounded-md h-56 bg-lightYellow">
          <h2 className="font-semibold text-xl underline">Get Social</h2>
          <Link href="/profile/repairs" className="py-2">
            Instagram
          </Link>
          <Link href="/profile/donate">Facebook</Link>
        </div>
        <div className="flex flex-col justify-center shadow-md w-full p-8 text-sm rounded-md h-56 bg-white">
          <Image
            src="/images/ReformLogo2.svg"
            alt="Logo"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
