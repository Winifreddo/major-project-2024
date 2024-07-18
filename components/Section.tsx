"use client";
import React from "react";
import { motion, MotionProps } from "framer-motion";
import { twMerge } from "tailwind-merge";

type SectionProps = {
  className?: string;
} & MotionProps;

export default function Section({ className, ...rest }: SectionProps) {
  return <motion.div className={twMerge("", className)} {...rest} />;
}
