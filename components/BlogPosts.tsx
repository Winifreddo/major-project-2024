"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Section from "./Section";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// type of the data that will be passed as props
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

// type of the props that are passed to component
type BlogPostsProps = {
  posts: BlogPost[];
};

const BlogPosts: React.FC<BlogPostsProps> = ({ posts }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <Section>
      <div className="mb-20">
        {posts.map((post) => (
          <motion.div
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            initial={{ opacity: 0, y: 50, scale: 0.5 }}
            animate={isInView ? "animate" : "initial"}
            transition={{
              type: "spring",
              damping: 50,
              stiffness: 200,
              mass: 3,
            }}
            key={post.id}
            className={` flex justify-center md:gap-8 gap-4 mx-auto max-w-6xl md:mb-6 leading-loose p-6 text-center font-poppins ${
              post.id % 2 === 0
                ? " flex-col md:flex-row"
                : "flex-col md:flex-row-reverse"
            }`}
          >
            <div className="md:w-1/2">
              <Image
                src={`images/${post.imageUrl}`}
                alt={post.title}
                width={600}
                height={600}
                className="shadow-md"
              />
            </div>
            <div className="grid place-content-center md:w-1/2">
              <h2 className="font-semibold uppercase md:text-3xl text-xl py-4 underline">
                {post.title}
              </h2>
              <p className="p-4 text-sm">{post.intro}</p>
              <button className="bg-smokeGrey text-white font-poppins font-thin px-6 py-2 w-32 mx-auto mt-4 rounded-sm text-sm">
                <Link
                  href={{
                    pathname: `/blog/${post.id}`,
                    query: { id: post.id },
                  }}
                >
                  Read More
                </Link>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default BlogPosts;
