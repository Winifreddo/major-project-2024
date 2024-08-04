import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Repairs",
};

const page = () => {
  <Link href="/profile" className="p-4">
    Back to Dashboard
  </Link>;
  return <div>page</div>;
};

export default page;
