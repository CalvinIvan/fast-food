import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

import Nav from "./Navbar/nav";

const wSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        <main className="m-auto min-h-screen min-w-[300px] max-w-[95vw] p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
