"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Search from "./Search";
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
import { useState } from "react";
import { categories } from "../navigationRoutes";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="font-poppins">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/">
            <span className="sr-only">Reform</span>{" "}
            <Image src="/images/Reform.png" alt="logo" height={75} width={75} />{" "}
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
            <PopoverButton className="flex items-center gap-x-1">
              Shop <ExpandMoreIcon className="h-5 w-5" />
            </PopoverButton>
            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md  overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <Link href={`/shop/${category.category}`}>
                      {category.category}
                    </Link>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <Link href="/services">Services</Link>
          <Link href="/blog">Learn</Link>
          <Link href="/FAQs">About Us</Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="px-4">
            <Search />
          </div>
          <Link href="/login" className="lg:px-2">
            <AccountCircleOutlinedIcon />
          </Link>
          <Link href="/cart" className="lg:px-2">
            <ShoppingBagOutlinedIcon />
          </Link>
          <Link href="/wishlist" className="lg:px-2">
            <FavoriteBorderOutlinedIcon />
          </Link>
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
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <CancelOutlinedIcon className="h-6 w-6" aria-hidden="true" />
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
                          {categories.map((category, index) => (
                            <Link
                              key={index}
                              href={`/shop/${category.category}`}
                              className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {category.category}
                            </Link>
                          ))}
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                  <Link
                    href="/services"
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Services{" "}
                  </Link>
                  <Link
                    href="/blog"
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Learn{" "}
                  </Link>
                  <Link
                    href="/FAQs"
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <div>
                    <div className="px-4">
                      <Search />
                    </div>
                    <Link
                      href="/login"
                      className="lg:px-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <AccountCircleOutlinedIcon />
                    </Link>
                    <Link
                      href="/cart"
                      className="lg:px-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <ShoppingBagOutlinedIcon />
                    </Link>
                    <Link
                      href="/wishlist"
                      className="lg:px-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <FavoriteBorderOutlinedIcon />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </nav>
    </header>
  );
};

export default Navigation;
