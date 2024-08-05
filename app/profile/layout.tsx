import React from "react";
import Link from "next/link";
import DashboardNavigation from "../components/DashboardNavigation";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" bg-white">
      <div className="flex lg:flex-row flex-col ">
        <div className="w-52 mx-auto lg:mx-0">
          <DashboardNavigation />
        </div>
        <div className="lg:w-3/4">{children}</div>
      </div>
    </main>
  );
}
