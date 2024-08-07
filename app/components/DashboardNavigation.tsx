"use client";
import React, { useState } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { Dialog, DialogPanel } from "@headlessui/react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export default function DashboardNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const session = useSession();
  const user = session?.data?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/profile/settings");
  }
  return (
    <section>
      <nav className="py-16 pl-8 font-poppins text-lg ">
        <div className=" flex flex-col">
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center font-semibold underline justify-center rounded-md h-40px w-40px "
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              Dashboard Menu
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-col">
            <div className="text-xl underline pb-6 font-semibold">
              Dashboard Menu
            </div>
            <div className="hover:bg-lightYellow rounded-md p-2 w-full">
              <Link className="pb-4 " href="/profile">
                Dashboard Home
              </Link>
            </div>
            <div className="hover:bg-lightBlue rounded-md p-2 w-full">
              <Link className="pb-4" href="/profile/settings">
                Account Settings
              </Link>
            </div>

            <div className="hover:bg-salmonPink rounded-md p-2 w-full">
              <Link className="pb-4" href="/profile/orders">
                Orders
              </Link>
            </div>
            <div className="hover:bg-stoneDark rounded-md p-2 w-full">
              <Link className="pb-4" href="/profile/orders">
                Inspiration
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
                      <div className="hover:bg-lightYellow rounded-md p-2 w-full">
                        <Link
                          className="pb-4 "
                          href="/profile"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Dashboard
                        </Link>
                      </div>
                      <div className="hover:bg-salmonPink rounded-md p-2 w-full">
                        <Link
                          className="pb-4"
                          href="/profile/settings"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Settings
                        </Link>
                      </div>
                      <div className="hover:bg-lightBlue rounded-md p-2 w-full">
                        <Link
                          className="pb-4"
                          href={`/profile/account/${user?.id}`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Account
                        </Link>
                      </div>

                      <div className="hover:bg-mint rounded-md p-2 w-full">
                        <Link
                          className="pb-4"
                          href="/profile/orders"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Orders
                        </Link>
                      </div>
                      <div className="hover:bg-mint rounded-md p-2 w-full">
                        <Link
                          className="pb-4"
                          href="/profile/styleinspo"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Inspiration
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </Dialog>
          </div>
        </div>
      </nav>
    </section>
  );
}
