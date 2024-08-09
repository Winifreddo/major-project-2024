import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import React from "react";
import Image from "next/image";
import { Session } from "next-auth";
import Link from "next/link";
import { signOut } from "next-auth/react";

interface UserButtonProps {
  user: Session["user"];
}

const UserButton = ({ user }: UserButtonProps) => {
  return (
    <div className="flex flex-row md:items-center items-start gap-2 z-50">
      <Disclosure as="div" className="-mx-3 lg:hidden z-10 text-sm">
        {({ open }) => (
          <>
            <DisclosureButton className="">
              <span className="px-4 md:ml-0 ml-3 font-semibold text-lg">
                Account Menu
              </span>
            </DisclosureButton>
            <DisclosurePanel className="text-start ml-4">
              <Link
                href="/profile"
                className="block p-2 hover:bg-salmonPink hover:rounded-md transition hover:opacity-85"
              >
                My Dashboard
              </Link>
              <Link
                href="/profile/orders"
                className="block p-2 hover:bg-salmonPink hover:rounded-md transition hover:opacity-85"
              >
                Orders
              </Link>
              <button
                className="block p-2 hover:bg-salmonPink hover:rounded-md transition hover:opacity-85"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Logout
              </button>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
      <Menu>
        <MenuButton>
          <div className="lg:flex hidden">
            <Image
              src={user?.image || "/images/avatar.svg"}
              alt="user image"
              width={35}
              height={35}
              className="rounded-full "
            />
          </div>
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
    </div>
  );
};

export default UserButton;
