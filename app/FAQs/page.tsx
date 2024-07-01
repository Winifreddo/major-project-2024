import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <>
      <Image
        src="/images/Reform.png"
        alt="Reform Logo"
        width={200}
        height={200}
      />
      <p>I am about page</p>
    </>
  );
};

export default page;
