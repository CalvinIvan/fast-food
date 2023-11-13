"use client";

import { useEffect, useState } from "react";
import { products } from "@/lib/GetSelection";

export default function Menu() {
  const [selection, setSelection] = useState("");

  useEffect(() => {
    products({ category: selection });
  }, [selection]);

  return (
    <section className="mt-16 flex w-[95%] flex-col">
      <h1>Select Category:</h1>
      <div className="mb-3 rounded-xl bg-white/75 p-2">
        <label className="font-semibold text-gray-700/90">Category: </label>
        <select
          name="category"
          id="category"
          className="rounded-xl bg-white/75 p-2 text-gray-700/90"
          onChange={(e) => setSelection(e.target.value)}
        >
          <option value="Pizza">Pizza</option>
          <option value="Burger">Burger</option>
        </select>
      </div>
      {selection}
    </section>
  );
}
