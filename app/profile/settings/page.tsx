import { Metadata } from "next";
import React from "react";
import SettingsPage from "@/app/components/SettingsPage";
// import { auth } from "@/auth.config";
import { redirect } from "next/navigation";
import getSession from "@/lib/getSession";
import prisma from "@/lib/prisma";

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
    <div>
      {" "}
      {/* pass the response object from the db request */}
      <SettingsPage user={response} />
    </div>
  );
}
