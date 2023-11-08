import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

import Nav from "./Navbar/nav";

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
    <html lang="en">
      <body className={`${wSans.className} bg-[#1E0800]`}>
        <Nav />
        <main className="m-auto min-h-screen min-w-[300px] max-w-7xl p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
