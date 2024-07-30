import React from "react";
import Link from "next/link";
import { auth } from "@/auth.config";
import { redirect } from "next/navigation";
import getSession from "@/lib/getSession";

export default async function DashboardNavigation() {
  const session = await getSession();
  const user = session?.user;

  const userImg = user?.image ?? "";

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/profile/settings");
  }
  return (
    <section>
      <nav className="py-16 pl-8 font-poppins text-lg ">
        <div className=" flex flex-col">
          <div className="text-xl underline pb-6 font-semibold">
            Dashboard Menu
          </div>
          <div className="hover:bg-lightYellow rounded-md p-2 w-full">
            <Link className="pb-4 " href="/profile">
              Dashboard
            </Link>
          </div>
          <div className="hover:bg-salmonPink rounded-md p-2 w-full">
            <Link className="pb-4" href="/profile/settings">
              Settings
            </Link>
          </div>
          <div className="hover:bg-lightBlue rounded-md p-2 w-full">
            <Link className="pb-4" href={`/profile/account/${user?.id}`}>
              Account
            </Link>
          </div>
          <div className="hover:bg-mint rounded-md p-2 w-full">
            <Link className="pb-4" href="/profile/orders">
              Orders
            </Link>
          </div>
          <div className="hover:bg-mint rounded-md p-2 w-full">
            <Link className="pb-4" href="/profile/orders">
              Inspiration
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
}
