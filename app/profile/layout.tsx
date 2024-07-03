import React from "react";
import Link from "next/link";
import DashboardNavigation from "../components/DashboardNavigation";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-row">
      <DashboardNavigation />
      {children}
    </main>
  );
}
