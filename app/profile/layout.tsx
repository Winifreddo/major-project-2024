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
      <div className="flex">
        <div className="w-52">
          <DashboardNavigation />
        </div>
        <div className="w-3/4">{children}</div>
      </div>
    </main>
  );
}
