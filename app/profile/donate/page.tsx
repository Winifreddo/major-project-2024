import React from "react";
import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Donate",
};

const page = () => {
  return (
    <div>
      {" "}
      <Link href="/profile" className="p-4">
        Back to Dashboard
      </Link>
    </div>
  );
};

export default page;
