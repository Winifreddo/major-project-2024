import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import SmoothScroll from "@/components/SmoothScroll";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500"],
  style: "normal",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Reformed",
  description: "e-commerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Navigation />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
