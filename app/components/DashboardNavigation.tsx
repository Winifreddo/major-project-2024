import React from "react";
import Link from "next/link";
import { auth } from "@/auth.config";
import { redirect } from "next/navigation";
import getSession from "@/lib/getSession";

export default async function DashboardNavigation() {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/profile/settings");
  }
  return (
    <section>
      <nav className="py-16 px-8 font-poppins text-xl">
        <ul className="flex flex-col ">
          <li>
            <Link href="/profile">Dashboard</Link>
          </li>
          <li>
            <Link href="/profile/settings">Settings</Link>
          </li>
          <li>
            <Link href={`/profile/account/${user?.id}`}>Account </Link>
          </li>
          <li>
            <Link href="/profile/orders">Orders</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
