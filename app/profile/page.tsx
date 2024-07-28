import React from "react";
import Link from "next/link";
import prisma from "@/lib/prisma";
import getSession from "@/lib/getSession";

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
      <div className="grid md:grid-cols-3 grid-rows-2 p-8 text-start">
        <div className="flex flex-col">
          <h2 className="font-semibold text-xl">Orders</h2>
          <Link href="/profile/orders" className="p-4">
            View My Orders
          </Link>
          <Link href="/profile/settingsp-4">Track My Order</Link>
          <Link href="#" className="p-4">
            {" "}
            Return an Order{" "}
          </Link>
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold text-xl">Account</h2>
          <Link href={`/profile/account/${profile?.id}`} className="p-4">
            View My Account
          </Link>
          <Link href="/profile/settings" className="p-4">
            Update My Account
          </Link>
        </div>

        <div className="flex flex-col">
          <h2 className="font-semibold text-xl">Re-imagine My Wardrobe</h2>
          <Link href="/profile/repairs" className="p-4">
            Find Local Repairs & Alterations
          </Link>
          <Link href="/profile/donate">Donate My Clothes</Link>
          <Link href="/profile/styleInspo" className="p-4">
            Style Inspiration
          </Link>
        </div>
      </div>
    </div>
  );
}
