import React from 'react'
import { LuSun } from "react-icons/lu";

const Navbar = () => {
  return (
        <nav className='shadow-md pl-25 pr-25 pt-4 pb-4 bg-[#020817] mx-auto items-center border-b border[#101829] text-[#F8FAFC]'>
            
        <div className="flex justify-between">
            <div className='flex gap-8'>
            <h1>Store</h1>
            <a href="#" className="text-[#F8FAFC] hover:text-blue-600">
                Home
            </a>
            <a href="#" className="text-[#F8FAFC] hover:text-blue-600">
              Product
            </a>
            <a href="#" className="text-[#F8FAFC] hover:text-blue-600">
              Categories
            </a>
            </div>
          <div className="hidden md:flex items-center space-x-4">
          <LuSun />
          </div>
          </div>
        </nav>
  )
}

export default Navbar