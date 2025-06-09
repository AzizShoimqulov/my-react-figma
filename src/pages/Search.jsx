import React from 'react';
import { CiFilter } from "react-icons/ci";

const Search = () => {
  return (
    <div className="bg-white dark:bg-[#020817] transition-colors duration-300">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-black dark:text-white pt-6 sm:pt-9 mb-4 sm:mb-6 text-center sm:text-left">
          Onlayn Store
        </h1>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-4 sm:p-0">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full sm:w-auto flex-1 px-4 py-2 border text-[#94a3b8] border-[#5c716c] rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-[#0f172a] dark:text-white dark:border-[#475569] transition duration-300"
          />
          <button className="w-full sm:w-auto px-6 py-2 border flex items-center justify-center text-white border-[#5c716c] bg-blue-600 hover:bg-blue-700 rounded-md transition duration-200">
            <CiFilter size={18} className="mr-2" /> Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
