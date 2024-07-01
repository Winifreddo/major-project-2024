import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

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
        <main className="bg-bgColor">
          <Navigation />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
