'use client';

import React, { useState } from "react";

interface PickProps {
  items: string[]; // Replace with your item type (string, object, etc.)
  onSelect: (selectedItem: string) => void; // Replace with your callback type
  placeholder?: string;
}

const Pick: React.FC<PickProps> = ({ items, onSelect, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | undefined>(undefined);

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.target as Element)) {
      setIsOpen(false);
    }
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className={`w-full rounded-md border border-gray-300 py-2 px-3 text-left focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
          selectedItem ? "" : "text-gray-400"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedItem || placeholder || "Pick an item"}
      </button>
      {isOpen && (
        <div
          className="absolute top-0 left-0 w-full mt-1 rounded-md shadow-sm bg-white z-50"
          onClick={handleClickOutside}
        >
          <ul className="max-h-60 overflow-auto">
            {items.map((item) => (
              <li
                key={item}
                className="hover:bg-gray-100 px-3 py-2 cursor-pointer"
                onClick={() => handleItemClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Pick;
