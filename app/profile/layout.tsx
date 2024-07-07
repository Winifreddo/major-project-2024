import React from "react";
import Link from "next/link";
import DashboardNavigation from "../components/DashboardNavigation";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-row w-screen">
      <DashboardNavigation />
      <div className="flex flex-col w-full items-center"> {children}</div>
    </main>
  );
}
