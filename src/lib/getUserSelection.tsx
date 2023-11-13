"use client";

// UserSelection.js
import React, { ChangeEvent, useState } from "react";

interface UserSelectionProps {
  onCategoryChange: (category: string) => void;
}

function UserSelection({ onCategoryChange }: UserSelectionProps) {
  // State to hold the selected category
  const [selectedCategory, setSelectedCategory] = useState("");

  // Event handler to update the selected category
  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onCategoryChange(category); // Call the provided callback with the selected category
  };

  return (
    <section className="mt-16 flex w-[95%] flex-col">
      <div className="mb-3 rounded-xl bg-white/75 p-2">
        <h1>Select Category:</h1>
        <form>
          <select
            name="category"
            id="category"
            className="rounded-xl bg-white/75 p-2 text-gray-700/90"
            onChange={handleCategoryChange}
            value={selectedCategory}
          >
            <option value="Pizza">Pizza</option>
            <option value="Burger">Burger</option>
          </select>
        </form>
      </div>

      {/* Display the selected category */}
      <p>Selected Category: {selectedCategory}</p>
    </section>
  );
}

export default UserSelection;
