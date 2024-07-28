import React from "react";
import IndividualBlogPosts from "@/components/IndividualBlogPosts";
import prisma from "@/lib/prisma";

export default async function page({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const blogId = searchParams.id;
  const blog = parseInt(blogId);

  // console.log(blog);

  const blogPost = await prisma.blog.findUnique({
    where: {
      id: blog,
    },
    select: {
      id: true,
      title: true,
      content: true,
      content2: true,
      content3: true,
      imageUrl: true,
      imageUrl2: true,
      imageUrl3: true,
      createdAt: true,
    },
  });

  console.log(blogPost);
  return (
    <div className="bg-white">
      {blogPost && <IndividualBlogPosts blogpost={blogPost} />}
    </div>
  );
}
