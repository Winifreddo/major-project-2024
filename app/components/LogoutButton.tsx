import React from "react";
// import { signOut } from "@/auth.config";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="bg-smokeGrey text-stoneDark p-2 rounded-md font-poppins"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
