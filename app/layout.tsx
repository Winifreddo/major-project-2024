import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { SessionProvider } from "next-auth/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500"],
  style: "normal",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Reform",
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
        <SessionProvider>
          <main className="bg-bgColor">
            <SmoothScroll>
              <Navigation />
              {children}
              <Footer />
            </SmoothScroll>
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
