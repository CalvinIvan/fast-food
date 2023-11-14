"use client";

import { useState } from "react";

export function Products() {
  const [category, setCategory] = useState("");

  return (
    <form>
      <select
        onChange={(e) => setCategory(e.target.value)}
        name="category"
        id="category"
        className="rounded-xl bg-white/75 p-2 text-gray-700/90"
      >
        <option value="Pizza">Pizza</option>
        <option value="Burger">Burger</option>
      </select>
    </form>
  );
}
