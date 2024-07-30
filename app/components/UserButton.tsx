import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import React from "react";
import Image from "next/image";
import { Session } from "next-auth";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { signOut } from "next-auth/react";

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
            width={35}
            height={35}
            className="rounded-full"
          />
        </MenuButton>
        <MenuItems
          anchor="bottom"
          className=" bg-white mt-2 w-52 font-poppins p-3  leading-loose rounded-md drop-shadow-md"
        >
          <MenuItem>
            <Link
              className="block p-2 font-semibold text-md"
              href={`/profile/account/${user?.id}`}
            >
              Hello {user?.name || "User"}
              <hr className="bg-smokeGrey mt-1" />
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              className="block data-[focus]:bg-salmonPink data-[focus]:rounded-md p-2 text-sm"
              href={`/profile`}
            >
              My Dashboard
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              className="block data-[focus]:bg-salmonPink data-[focus]:rounded-md p-2 text-sm"
              href="/profile/orders"
            >
              Orders
            </Link>
          </MenuItem>

          <MenuItem>
            <button
              className="block data-[focus]:bg-salmonPink data-[focus]:rounded-md p-2 text-sm w-full text-start"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Logout
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
      {/* <LogoutButton /> */}
    </div>
  );
};

export default UserButton;
