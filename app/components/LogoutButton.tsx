import React from "react";

import { signOut } from "next-auth/react";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const LogoutButton = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="text-smokeGrey"
    >
      <LogoutOutlinedIcon />
    </button>
  );
};

export default LogoutButton;
