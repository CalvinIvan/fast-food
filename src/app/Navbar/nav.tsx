import React, { useState } from "react";
import { navLinks } from "@/lib/data";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { redirect } from "next/navigation";
import { getCart } from "@/lib/db/cart";
import ShoppingCartButton from "./ShoppingCartButton";

async function searchProducts(formData: FormData) {
  "use server";

  const searchQuery = formData.get("searchQuery")?.toString();

  if (searchQuery) {
    redirect("/search?query=" + searchQuery);
  }
}

export default async function Navbar() {
  const cart = await getCart();

  return (
    <div className="navbar z-[999] m-auto flex max-w-7xl flex-col items-center bg-base-100 bg-transparent px-5 py-3 sm:flex-row">
      <div className="flex flex-row items-center justify-between">
        <Link className="text-md btn btn-ghost lg:text-xl" href="/">
          <h1 className="flex flex-col text-center text-2xl font-bold uppercase text-white ">
            Speedy Bites
          </h1>
          <Image
            src={logo}
            alt="background"
            width={50}
            height={50}
            priority
            className="mx-2 rounded-full bg-gray-700/10 p-1 shadow-xl"
          />
        </Link>
      </div>

      <div className="flex flex-row items-center justify-center text-center md:ml-16">
        <label tabIndex={0} className="avatar btn btn-circle btn-ghost"></label>
        <ul className="flex flex-col flex-wrap items-center justify-center text-center text-2xl sm:space-x-5 md:flex-row">
          {navLinks.map((link) => {
            return (
              <li
                key={link.name}
                className="text-lg font-semibold text-white transition hover:scale-105 hover:underline"
              >
                <Link href={link.link}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <form action={searchProducts}>
        <div className="form-control flex flex-row justify-end gap-2 lg:px-16">
          <ShoppingCartButton cart={cart} />
          <input
            name="searchQuery"
            placeholder="Search 🔎"
            className="input input-bordered mt-2 flex h-10 rounded-2xl bg-white/75 px-2 py-1 text-gray-700 md:w-auto"
          />
        </div>
      </form>
    </div>
  );
}
