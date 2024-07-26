"use client";
import React from "react";

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
  return (
    <div>
      <h1>{blogpost.title}</h1>
    </div>
  );
};

export default IndividualBlogPosts;
