"use client";

import React from "react";

// type of the data that will be passed as props
type BlogPost = {
  id: number;
  title: string;
  content: string;
  content2: string | null;
  imageUrl: string;
  imageUrl2: string | null;
  imageUrl3: string | null;
  createdAt: Date;
};

// type of the props that are passed to component
type BlogPostsProps = {
  posts: BlogPost[];
};

const BlogPosts: React.FC<BlogPostsProps> = ({ posts }) => {
  return (
    <div>
      {/* map over the array of blog posts and display the data */}
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <img src={`images/${post.imageUrl}`} alt={post.title} />
          <p>{post.content}</p>
          {post.content2 && <p>{post.content2}</p>}
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
