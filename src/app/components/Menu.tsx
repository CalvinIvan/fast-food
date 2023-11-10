"use client";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function Menu() {
  return (
    <section className="mt-16 flex w-[95%]  flex-col">
      <h1>Select Category:</h1>
      <div className="mb-3 rounded-xl bg-white/75 p-2">
        <label className="font-semibold text-gray-700/90">Category: </label>
        <form>
          <select
            name="category"
            id="category"
            className="rounded-xl bg-white/75 p-2 text-gray-700/90"
          >
            <option value="Pizza">Pizza</option>
            <option value="Burger">Burger</option>
          </select>
        </form>
      </div>
    </section>
  );
}
