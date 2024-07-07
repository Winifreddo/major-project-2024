"use client";

// imports for server side rendering
// import { auth, signIn } from "@/auth.config";
// import getSession from "@/lib/getSession";
import React, { use } from "react";
import NavigationLinks from "./NavigationLinks";
import UserButton from "./UserButton";
import Search from "./Search";
// imports for client side rendering
import { signIn, useSession } from "next-auth/react";

export default function Navigation() {
  // get session from session provider on layout
  const session = useSession();
  const user = session?.data?.user;

  return (
    <div className="flex items-center justify-stretch w-screen">
      <NavigationLinks />
      <div className="flex items-center justify-items-end gap-2">
        <Search />
        {/* if user logged in show user button, if not show sign in button */}
        {user && <UserButton user={user} />}
        {!user && session.status !== "loading" && <SignInButton />}
      </div>
    </div>
  );
}

function SignInButton() {
  return <button onClick={() => signIn()}>Login</button>;
}
