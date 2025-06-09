import React from 'react'
import { CiFilter } from "react-icons/ci";

const Search = () => {
  return (
    <div className='bg-[#020817]'>
      <div className='max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-bold text-white pt-9 mb-6'>Onlayn Store</h1>
        <div className="flex items-center gap-3 p-4">
          <input
            type="text"
            placeholder="Search products..."
            className="px-136 mr-2 ml-[-15px] py-[6px] border text-[#94a3b8] border-[#5c716c] rounded-md focus:ring-blue-500"
          />
          <button className="px-6 py-[6px] border flex text-white border-[#5c716c] rounded-md hover:bg-blue-700 transition duration-200">
           <p className='mt-1 mr-2 ml-[-8px]'><CiFilter size={18}/></p> Filter
          </button>
        </div>
      </div>
    </div>
  )
}

export default Search