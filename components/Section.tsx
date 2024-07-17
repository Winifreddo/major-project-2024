"use client";
import React, { useRef } from "react";
import { motion, MotionProps, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type SectionProps = {
  className?: string;
} & MotionProps;

export default function Section({ className, ...rest }: SectionProps) {
  return (
    <motion.div
      className={twMerge("flex flex-col gap-4 mx-auto max-w-6xl", className)}
      {...rest}
    />
  );
}
