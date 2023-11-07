"use client";
import React, { useState } from "react";
import next from "@/public/next.svg";
import { navLinks } from "@/app/lib/data";
import Link from "next/link";
import Image from "next/image";
import { CgMenuGridO } from "react-icons/cg";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <CgMenuGridO
        onClick={handleNav}
        className="fixed right-4 top-4 z-[99] overflow-hidden text-4xl hover:cursor-pointer lg:hidden"
      />
      {nav ? (
        <div className="fixed top-0 z-20 flex h-screen w-full flex-col items-center justify-center bg-white/90 duration-200 ease-in-out ">
          <ul className="flex flex-col items-center justify-center">
            {navLinks.map((link) => {
              return (
                <li
                  key={link.name}
                  className="m-2 flex w-full flex-col items-center justify-center rounded-full bg-gray-100 p-4 shadow-lg shadow-gray-300"
                >
                  <Link href={link.link} onClick={handleNav}>
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="relative z-[999] hidden lg:block">
          <nav className="fixed top-0 flex w-full justify-between bg-gradient-to-r from-rose-400/90 to-red-500/90 py-4 sm:h-[initial]">
            <ul className="flex flex-row items-center justify-center gap-[2.5rem] px-16 text-xl">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.name}
                    className=" font-medium text-white transition hover:scale-105 hover:underline"
                  >
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};
export default Nav;
