"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/FAQs", label: "About" },
  { href: "/contact", label: "Contact" },
];

const shoppingLinks = [
  { href: "/shop/tops", label: "Tops" },
  { href: "/shop/bottoms", label: "Bottoms" },
  { href: "/shop/dresses", label: "Dresses" },
  { href: "/shop/accessories", label: "Accessories" },
];

const Footer = () => {
  return (
    <section
      className="flex md:flex-row flex-col p-4 justify-items-center md:justify-evenly justify-self-center
     font-poppins font-normal leading-10 "
    >
      <div>
        <Image
          src="/images/Reform.png"
          alt="Reform Logo"
          width={200}
          height={200}
          className="lg:h-52 lg:w-52 h-36 w-36 lg:p-2 p-6"
        />
      </div>
      <div className="lg:p-2 p-8">
        <h3 className="font-bold lg:text-xlg text-xl">Quick Links</h3>
        {links.map((link, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col text-sm leading-10 "
          >
            <div>
              <Link href={link.href}>{link.label}</Link>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="lg:p-2 p-8">
        <h3 className="font-bold lg:text-xlg text-xl">Shop</h3>
        {shoppingLinks.map((link, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col text-sm leading-10"
          >
            <div>
              <Link href={link.href}>{link.label}</Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Footer;
