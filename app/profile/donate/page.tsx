import React from "react";
import Link from "next/link";

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
