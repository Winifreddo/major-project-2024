import React from "react";
import Link from "next/link";
import DashboardNavigation from "../components/DashboardNavigation";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-screen bg-white">
      <Link href="/profile">Back to Dashboard</Link>
      {/* <DashboardNavigation /> */}
      <div className="max-5xl items-center"> {children}</div>
    </main>
  );
}
