import React, { useState } from 'react';
import { CiFilter } from "react-icons/ci";
import { HiX } from "react-icons/hi";

const categories = [
  { title: "All Categories", value: "" },
  { title: "Electronics", value: "electronics" },
  { title: "Jewelery", value: "jewelery" },
  { title: "Men's Clothing", value: "men's clothing" },
  { title: "Women's Clothing", value: "women's clothing" }
];

const Search = ({ onCategoryChange, onSearch }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFilter = () => setIsOpen(!isOpen);
  const closeFilter = () => setIsOpen(false);

  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    onCategoryChange(selected);
    closeFilter();
  };

  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="relative bg-white dark:bg-[#020817] transition-colors duration-300">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-black dark:text-white pt-6 sm:pt-9 mb-4 sm:mb-6 text-center sm:text-left">
          Onlayn Store
        </h1>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-4 sm:p-0">
          <input
            type="text"
            placeholder="Search products..."
            onChange={handleInputChange}
            className="w-full sm:w-auto flex-1 px-4 py-2 border text-[#94a3b8] border-[#5c716c] rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-[#0f172a] dark:text-white dark:border-[#475569] transition duration-300"
          />
          <button
            onClick={toggleFilter}
            className="w-full sm:w-auto px-6 py-2 border flex items-center justify-center text-white border-[#5c716c] bg-blue-600 hover:bg-blue-700 rounded-md transition duration-200"
          >
            <CiFilter size={18} className="mr-2" /> Filter
          </button>
        </div>
      </div>

      {/* FILTER PANEL */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-[300px] bg-white dark:bg-[#0f172a] shadow-lg transition-transform duration-450 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-bold text-black dark:text-white">Filter Options</h2>
          <button onClick={closeFilter} className="text-black dark:text-white">
            <HiX size={24} />
          </button>
        </div>
        <div className="p-4 text-black dark:text-white">
          <h4 className="text-xl font-bold mb-1">Filter Products</h4>
          <p className="text-sm mb-4 text-[#64748b] dark:text-[#cbd5e1]">Narrow down products by applying filters</p>

          <h3 className="font-semibold mb-2">Category</h3>
          <select
            onChange={handleCategoryChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-[#1e293b] dark:text-white"
          >
            {categories.map(cat => (
              <option key={cat.value} value={cat.value}>
                {cat.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* BACKDROP */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-[3px] z-40"
          onClick={closeFilter}
        />
      )}
    </div>
  );
};

export default Search;
