"use client";
import React from "react";
import Image from "next/image";
import "/public/fonts/fonts.css";

type BlogPost = {
  id: number;
  title: string;
  content: string;
  content2: string | null;
  content3: string | null;
  imageUrl: string;
  imageUrl2: string | null;
  imageUrl3: string | null;
  createdAt: Date;
};

const IndividualBlogPosts = ({ blogpost }: { blogpost: BlogPost }) => {
  console.log(blogpost.title);
  return (
    <div className="max-w-5xl mx-auto pb-16 text-justify font-poppins">
      <div className="lg:p-16 md:p-8 p-4 leading-loose text-center">
        <h1 className="text-center md:text-6xl text-4xl font-semibold">
          {blogpost.title}
        </h1>
        <h2 className="pt-2 md:text-xl text-lg font-thin">
          <b>Article by:</b> Leigh Richards
        </h2>
        <h3 className="font-thin">{blogpost.createdAt.toDateString()}</h3>
      </div>
      <p className="p-4">{blogpost.content}</p>
      <div className="flex items-center md:flex-row flex-col">
        <div className="lg:w-1/2 md:w-1/3 px-4">
          <Image
            src={`/images/${blogpost.imageUrl}`}
            alt={blogpost.title}
            width={500}
            height={500}
            className="shadow-md md:my-0 my-8"
          />
        </div>
        <div className="lg:w-1/2 md:w-2/3 ">
          <p className="px-4">{blogpost.content2}</p>
        </div>
      </div>
      <div className="flex md:flex-row-reverse flex-col items-center py-6">
        <div className="lg:w-1/2 md:w-1/3 px-4">
          <Image
            src={`/images/${blogpost.imageUrl2}`}
            alt={blogpost.title}
            width={500}
            height={500}
            className="shadow-md md:my-0 my-8"
          />
        </div>
        <div className="lg:w-1/2 md:w-2/3 ">
          <p className="px-8">{blogpost.content3}</p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center py-6">
        <div className="lg:w-1/2 md:w-1/3 px-4">
          <Image
            src={`/images/${blogpost.imageUrl3}`}
            alt={blogpost.title}
            width={500}
            height={500}
            className="shadow-md md:my-0 my-8"
          />
        </div>
        <div className="lg:w-1/2 md:w-2/3 ">
          <p className="md:p-8 px-8">{blogpost.content3}</p>
        </div>
      </div>
    </div>
  );
};

export default IndividualBlogPosts;
