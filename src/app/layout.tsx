import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

import Footer from "./footer";
import ReactNodeFooter from "./footer";
import Navbar from "./Navbar/nav";

const wSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Speedy Bites",
  description: "Speedy Bites - Speedy Service, Gourmet Taste!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${wSans.className} bg-gradient-to-r from-[#ff7b00] to-[#ff9e00]`}
      >
        <Navbar />
        <main className="m-auto min-h-screen min-w-[300px] max-w-7xl p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
