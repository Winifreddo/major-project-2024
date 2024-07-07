import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import React from "react";
import Image from "next/image";
import { Session } from "next-auth";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

interface UserButtonProps {
  user: Session["user"];
}

const UserButton = ({ user }: UserButtonProps) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <Menu>
        <MenuButton>
          <Image
            src={user?.image || "/images/avatar.svg"}
            alt="user image"
            width={40}
            height={40}
            className="rounded-full"
          />
        </MenuButton>
        <MenuItems
          anchor="bottom"
          className=" bg-darkPink font-poppins p-4 rounded-md"
        >
          <MenuItem>
            <Link
              className="block data-[focus]:bg-blue-100"
              href={`/profile/account/${user?.id}`}
            >
              {user?.name || "User"}
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              className="block data-[focus]:bg-blue-100"
              href={`/profile/account/${user?.id}`}
            >
              Account
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              className="block data-[focus]:bg-blue-100"
              href="/profile/orders"
            >
              Orders
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              className="block data-[focus]:bg-blue-100"
              href="/profile/settings"
            >
              Settings
            </Link>
          </MenuItem>
        </MenuItems>
      </Menu>
      <LogoutButton />
    </div>
  );
};

export default UserButton;
