"use client";

// imports for server side rendering
// import { auth, signIn } from "@/auth.config";
// import getSession from "@/lib/getSession";
import React, { useState } from "react";
// import NavigationLinks from "./NavigationLinks";
import UserButton from "./UserButton";

// imports for client side rendering
import { signIn, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Search from "./Search";
import { categories } from "../navigationRoutes";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { motion } from "framer-motion";

import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

export default function Navigation() {
  const path = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const links = [
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Learn" },
    { href: "/FAQs", label: "About Us" },
  ];

  const session = useSession();
  const user = session?.data?.user;

  return (
    <header className="font-poppins p-2">
      <nav className="flex max-w-9xl items-center justify-between py-2 lg:p-4 bg-bgColor  ">
        <div className="flex  justify-start">
          <Link href="/">
            <span className="sr-only">Reform</span>{" "}
            <Image
              src="/images/Reform.png"
              alt="Reform Logo"
              height={100}
              width={100}
            />{" "}
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            {({ open }) => (
              <>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <PopoverButton className="flex items-center gap-x-2 justify-start pl-4">
                    Shop{" "}
                    <ExpandMoreIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } h-5 w-5 flex-none`}
                      aria-hidden="true"
                    />
                  </PopoverButton>
                </motion.div>
                <PopoverPanel
                  transition
                  className="absolute -left-32 top-full z-40 mt-12 w-screen max-w-screen-2xl overflow-hidden p-4 bg-bgColor shadow-lg  transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="grid grid-rows-1 grid-flow-col gap-1 z-10 justify-items-center">
                    {categories.map((category, index) => (
                      <div
                        key={index}
                        className={`group relative flex flex-col p-3 m-1 text-sm leading-6  ${
                          index % 2 == 0
                            ? "hover:bg-salmonPink"
                            : "hover:bg-mossGreen"
                        } hover:rounded-md transition hover:opacity-85`}
                      >
                        <Link
                          href={`/shop/${category.category}`}
                          onClick={() => setIsPopoverOpen(false)}
                        >
                          <Image
                            key={index}
                            src={category.image}
                            alt={category.category}
                            width={175}
                            height={175}
                          />
                        </Link>
                        <Link
                          href={`/shop/${category.category}`}
                          key={index}
                          onClick={() => setIsPopoverOpen(false)}
                        >
                          <h4 className="font-medium text-center p-2">
                            {category.category}
                          </h4>
                        </Link>
                      </div>
                    ))}
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>
          {links.map((link, index) => (
            <motion.div key={index} whileHover={{ scale: 1.1 }}>
              <Link
                href={link.href}
                key={link.href}
                className={`${
                  path === link.href
                    ? "text-darkPink font-semibold"
                    : "text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 gap-4 lg:justify-end">
          <div className="px-4">
            <Search />
          </div>

          {user && <UserButton user={user} />}
          {!user && session.status !== "loading" && (
            <button onClick={() => signIn()}>Login</button>
          )}
          <FavoriteIcon className="h-10 w-10 text-smokeGrey" />
          <ShoppingBagOutlinedIcon className="h-10 w-10 text-smokeGrey" />
        </div>
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="-m-1.5 p-1.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                {" "}
                <Image
                  src="/images/Reform.png"
                  alt="logo"
                  height={75}
                  width={75}
                />{" "}
                <span className="sr-only">Reform</span>
              </Link>
              <div className="px-4 m-2">
                <Search />
              </div>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <CancelOutlinedIcon
                  className="h-6 w-6 text-darkPink"
                  aria-hidden="true"
                />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          <span>Shop</span>
                          <ExpandMoreIcon
                            className={`${
                              open ? "transform rotate-180" : ""
                            } h-5 w-5 flex-none`}
                            aria-hidden="true"
                          />
                        </DisclosureButton>
                        <DisclosurePanel className="mt-2 space-y-2">
                          <div className="grid grid-rows-3 grid-flow-col gap-1 z-10 justify-items-center">
                            {categories.map((category, index) => (
                              <div
                                key={index}
                                className="group relative flex flex-col p-2 m-1 text-sm leading-6  hover:bg-salmonPink hover:rounded-md transition"
                              >
                                <Link
                                  key={index}
                                  href={`/shop/${category.category}`}
                                  className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-salmonPink hover:rounded-md"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  <Image
                                    key={index}
                                    src={category.image}
                                    alt={category.category}
                                    width={150}
                                    height={150}
                                  />
                                </Link>
                                <h4 className="text-center">
                                  {category.category}
                                </h4>
                              </div>
                            ))}
                          </div>
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                  <Link
                    href="/services"
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-salmonPink"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Services{" "}
                  </Link>
                  <Link
                    href="/blog"
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-salmonPink"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Learn{" "}
                  </Link>
                  <Link
                    href="/FAQs"
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-salmonPink"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href={`/profile/account/${user?.id}`}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-salmonPink"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    My account
                  </Link>
                  <Link
                    href="#"
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-salmonPink"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Wishlist
                  </Link>
                  <Link
                    href="#"
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-salmonPink"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Basket
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </nav>
    </header>
  );
}
