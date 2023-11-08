"use client";
import React, { useState } from "react";
import { navLinks } from "@/app/lib/data";
import Link from "next/link";
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
        className="fixed right-4 top-4 z-[99] overflow-hidden text-4xl text-white hover:cursor-pointer md:hidden"
      />
      {nav ? (
        <div className="fixed top-0 z-20 flex h-screen w-full flex-col items-center justify-center bg-white/[0.05] duration-200 ease-in-out ">
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
        <div className="relative z-[999] hidden md:block">
          <nav className="fixed left-1/2 flex w-full -translate-x-1/2 items-center justify-center rounded-lg bg-gray-200/[0.75] py-4 sm:h-[initial]">
            <ul className="flex flex-row items-center justify-center gap-[2.5rem] px-16 text-xl">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.name}
                    className="text-lg font-semibold text-gray-700/75 transition hover:scale-105 hover:underline"
                  >
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                );
              })}
            </ul>
            <div>asdfasdf</div>
          </nav>
        </div>
      )}
    </div>
  );
};
export default Nav;
