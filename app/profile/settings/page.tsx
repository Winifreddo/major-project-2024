import { Metadata } from "next";
import React from "react";
import SettingsPage from "@/app/components/SettingsPage";
// import { auth } from "@/auth.config";
import { redirect } from "next/navigation";
import getSession from "@/lib/getSession";
import prisma from "@/lib/prisma";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Settings",
};

export default async function page() {
  const session = await getSession();
  const user = session?.user;

  const response = await prisma.profile.findUnique({
    where: {
      userId: user?.id,
    },
  });
  // if no user redirect to the sign in page and then direct back to settings after successful sign in
  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/profile/settings");
  } else {
    console.log("hello");
  }

  return (
    <div className="w-full grid grid-cols-1 place-items-center gap-2 p-16 leading-loose">
      <h1 className="font-poppins text-4xl font-semibold mb-24">My details</h1>
      <SettingsPage user={response} />
    </div>
  );
}
