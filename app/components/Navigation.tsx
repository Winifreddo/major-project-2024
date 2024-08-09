"use client";

// imports for server side rendering
// import { auth, signIn } from "@/auth.config";
// import getSession from "@/lib/getSession";
import React, { useState } from "react";
import UserButton from "./UserButton";
import { signOut } from "next-auth/react";

// imports for client side rendering
import { signIn, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Search from "./Search";
import { categories } from "../navigationRoutes";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import LoginIcon from "@mui/icons-material/Login";
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
    <header className="font-poppins">
      <nav className="flex max-w-8xl items-center justify-between py-2 lg:p-4 bg-white font-poppins ">
        <div className="flex  justify-start">
          <Link href="/">
            <span className="sr-only">Reform</span>{" "}
            <Image
              src="/images/ReformLogo2.svg"
              alt="Reform Logo"
              height={100}
              width={100}
              className="m-2 mt-4 p-1 object-cover"
            />{" "}
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md h-40px w-40px "
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon
              className="m-2 h-11 w-11 text-smokeGrey"
              aria-hidden="true"
            />
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
                      } h-8 w-8 flex-none p-1 text-smokeGrey`}
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
                        className="group relative flex flex-col p-3 m-1 text-sm leading-6 hover:bg-salmonPink hover:rounded-md transition hover:opacity-85"
                      >
                        <Link
                          href={{
                            pathname: `/shop/${category.category}`,
                            query: { category: category.category },
                          }}
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
                          href={{
                            pathname: `/shop/${category.category}`,
                            query: { category: category.category },
                          }}
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
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="md:pt-1"
            >
              <Link
                href={link.href}
                key={link.href}
                className={`${
                  path === link.href
                    ? "text-darkPink font-semibold"
                    : "text-black"
                } `}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 gap-4 lg:justify-end items-center">
          <div className="px-4">
            <Search />
          </div>
          <div>
            {user && <UserButton user={user} />}
            {!user && session.status !== "loading" && (
              <button onClick={() => signIn()}>
                <LoginIcon className="h-7 w-7 text-smokeGrey" />
              </button>
            )}
          </div>
          <FavoriteBorderIcon className="h-7 w-7 text-smokeGrey" />
          <ShoppingBagOutlinedIcon className="h-7 w-7 text-smokeGrey" />
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
                  src="/images/ReformLogo2.svg"
                  alt="logo"
                  height={50}
                  width={50}
                />{" "}
                <span className="sr-only">Reform</span>
              </Link>
              <div className="md:px-4 md:m-2 px-1 m-1">
                <Search />
              </div>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 h-40px w-40px"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <CloseOutlinedIcon
                  className="h-9 w-9 text-smokeGrey"
                  aria-hidden="true"
                />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3 z-10 font-poppins">
                    {({ open }) => (
                      <>
                        <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7">
                          <span className="px-4">Shop</span>
                          <ExpandMoreIcon
                            className={`${
                              open ? "transform rotate-180 text-smokeGrey" : ""
                            } flex-none`}
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
                                  href={{
                                    pathname: `/shop/${category.category}`,
                                    query: { category: category.category },
                                  }}
                                  className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-salmonPink hover:rounded-md"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  <Image
                                    key={index}
                                    src={category.image}
                                    alt={category.category}
                                    width={125}
                                    height={125}
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
                  <div>
                    {user && <UserButton user={user} />}
                    {!user && session.status !== "loading" && (
                      <button onClick={() => signIn()}>Login</button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </nav>
    </header>
  );
}
