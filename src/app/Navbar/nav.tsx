import React, { useState } from "react";
import { navLinks } from "@/lib/data";
import Link from "next/link";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Navbar() {
  const mag = <FaMagnifyingGlass />;
  return (
    <div className="navbar bg-base-100 flex flex-row justify-between border border-white bg-transparent px-5 py-3">
      <a className="btn btn-ghost text-xl" href="/">
        <h1 className="mr-5 flex flex-col text-center text-2xl font-bold uppercase text-white ">
          Speedy Bites
        </h1>
      </a>

      <div className="">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full"></div>
        </label>
        <ul className="flex flex-row gap-[2.5rem] text-2xl">
          {" "}
          {navLinks.map((link) => {
            return (
              <li
                key={link.name}
                className="text-lg font-semibold text-white transition hover:scale-105 hover:underline"
              >
                {" "}
                <Link href={link.link}>{link.name}</Link>{" "}
              </li>
            );
          })}{" "}
        </ul>
      </div>

      <div className="form-control">
        <input
          type="text"
          placeholder="Search 🔎"
          className="input input-bordered flex w-24 rounded-2xl bg-white/75 px-2 py-1 text-gray-700 md:w-auto"
        />
      </div>
    </div>
  );
}
