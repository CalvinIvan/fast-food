import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

import Nav from "./Navbar/nav";

const wSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Speedy Bites",
  description: "Speedy Bites - Speedy Service!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={wSans.className}>
        <Nav />
        <main className=" min-h-screen min-w-[300px] max-w-full p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
