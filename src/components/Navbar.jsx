import React, { useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoPersonCircleSharp } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import Darkmood from '../pages/Darkmood';

const navItems = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Products", link: "/" },
  { id: 3, name: "Categories", link: "/" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full border-b border-b-gray-700 sticky top-0 shadow bg-white dark:bg-[#020817] dark:text-white text-black z-50 transition-colors duration-300">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
        
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold cursor-pointer">Store</h1>

           
            <div className="hidden md:flex gap-6">
              {navItems.map(item => (
                <a
                  key={item.id}
                  href={item.link}
                  className="hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer transition-colors duration-200 text-[14px] font-semibold"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          
          <div className="hidden md:flex items-center gap-4">
            <Darkmood />
            <button className="hover:text-yellow-400 transition-colors duration-200">
              <FaRegHeart size={18} />
            </button>
            <button className="hover:text-yellow-400 transition-colors duration-200">
              <FiShoppingCart size={18} />
            </button>
            <button className="flex gap-2 items-center bg-[#101828] px-3 py-[6px] rounded-[8px] border border-[#434855] hover:bg-[#8291a9] transition-colors duration-200">
              <IoPersonCircleSharp size={20} />
              <span className="text-sm">Login</span>
            </button>
          </div>

        
          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)}>
              <HiMenu size={25} />
            </button>
          </div>
        </div>
      </div>

      
      <div className={`fixed inset-0 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
       
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={closeMenu}
        />

      
        <div className={`absolute top-0 left-0 h-full w-[75%] max-w-xs bg-white dark:bg-[#020817] p-6 shadow-lg transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex justify-end">
            <button onClick={closeMenu} className="text-black dark:text-white">
              <HiX size={25} />
            </button>
          </div>

          <div className="flex flex-col gap-6 mt-4">
            {navItems.map(item => (
              <a
                key={item.id}
                href={item.link}
                onClick={closeMenu}
                className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 text-[15px] font-medium"
              >
                {item.name}
              </a>
            ))}

            <div className="flex flex-col gap-4 mt-6">
              <Darkmood />
              <p className="text-[15px] font-medium">Wishlist (1)</p>
              <p className="text-[15px] font-medium">Cart (0)</p>
              <p className="text-[15px] font-medium">Login / Register</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
