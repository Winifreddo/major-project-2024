import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import Maps from "@/app/components/maps";

export const metadata: Metadata = {
  title: "Repairs",
};

const page = () => {
  return (
    <div>
      <Maps />
    </div>
  );
};

export default page;
