import React from "react";
import prisma from "@/lib/prisma";
import BlogPosts from "@/components/BlogPosts";

// specify the type of the data that will be returned from the query

type BlogPost = {
  id: number;
  title: string;
  intro: string;
  content: string;
  content2: string | null;
  content3: string | null;
  imageUrl: string;
  imageUrl2: string | null;
  imageUrl3: string | null;
  createdAt: Date;
};

export default async function page() {
  // query the database for all blog posts data is returned as an array of objects
  const posts: BlogPost[] = await prisma.blog.findMany({
    select: {
      id: true,
      title: true,
      intro: true,
      content: true,
      content2: true,
      content3: true,
      imageUrl: true,
      imageUrl2: true,
      imageUrl3: true,
      createdAt: true,
    },
  });

  return (
    <div className="bg-white">
      {/* check for null value */}
      {posts && <BlogPosts posts={posts} />}
    </div>
  );
}
