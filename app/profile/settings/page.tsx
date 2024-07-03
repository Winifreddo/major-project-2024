import { Metadata } from "next";
import React from "react";
import SettingsPage from "@/app/components/SettingsPage";
// import { auth } from "@/app/auth";
import { redirect } from "next/navigation";
import getSession from "@/lib/getSession";

export const metadata: Metadata = {
  title: "Settings",
};

export default async function page() {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/profile/settings");
  }
  return (
    <div>
      <SettingsPage user={user} />
    </div>
  );
}
