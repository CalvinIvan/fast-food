"use client";

import { useState } from "react";

export default function GetSelection() {
  // State to manage the selected option
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined,
  );

  // Function to handle select change
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <section>
      <h1>Select Category:</h1>
      <div className="mb-3 rounded-xl bg-white/75 p-2">
        <label className="font-semibold text-gray-700/90">Category: </label>
        <select
          onChange={handleSelectChange}
          name="category"
          id="category"
          className="rounded-xl bg-white/75 p-2 text-gray-700/90"
        >
          <option value="Pizza">Pizza</option>
          <option value="Burger">Burger</option>
        </select>
      </div>
      <p>Selected Option: {selectedOption || "None"}</p>
    </section>
  );
}
