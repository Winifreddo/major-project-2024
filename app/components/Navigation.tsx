import React from "react";
import NavigationLinks from "./NavigationLinks";

import { auth } from "../auth";
import UserButton from "./UserButton";
import { signIn } from "../auth";
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import Search from "./Search";
import getSession from "@/lib/getSession";

export default async function Navigation() {
  const session = await getSession();
  const user = session?.user;
  return (
    <div className="flex items-center">
      <NavigationLinks />
      <Search />
      {user ? <UserButton user={user} /> : <SignInButton />}
    </div>
  );
}

function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button type="submit">
        <AccountCircleOutlined />
      </button>
    </form>
  );
}
