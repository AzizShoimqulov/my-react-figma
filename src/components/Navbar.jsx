import React, { useState } from 'react';
import { LuSun } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoPersonCircleSharp } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";

const navItems = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Products", link: "/" },
  { id: 3, name: "Categories", link: "/" },
];

const navIcons = [
  { id: 1, icon: <LuSun size={18} /> },
  { id: 2, icon: <FaRegHeart size={18} /> },
  { id: 3, icon: <FiShoppingCart size={18} /> },
  { id: 4, icon: <IoPersonCircleSharp size={21} /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full border-b border-b-[#52565f] bg-[#020817] text-white relative z-50">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & nav links */}
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold cursor-pointer">Store</h1>

            <div className="hidden md:flex gap-6">
              {navItems.map(item => (
                <a
                  key={item.id}
                  href={item.link}
                  className="hover:text-blue-400 cursor-pointer transition-colors duration-200 text-[14px] font-semibold"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop icons */}
          <div className="hidden md:flex items-center gap-4">
            {navIcons.map(item => (
              <button
                key={item.id}
                className={`text-white cursor-pointer flex gap-2.5 p-[8px] rounded-[8px] transition-colors duration-200
                  ${item.id === 4 ? 'bg-[#101828] pl-2 pr-3 pt-[6px] hover:bg-[#8291a9] border border-[#434855]' : 'hover:bg-[#91a4c3]'}
              `}
              >
                {item.icon}
                {item.id === 4 && <span className="text-sm">Login</span>}
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)}>
              <HiMenu size={25} />
            </button>
          </div>
        </div>
      </div>

      {/* Overlay & Sidebar */}
      <div className={`fixed inset-0 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* BACKDROP */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
          onClick={closeMenu}
        ></div>

        {/* SIDEBAR */}
        <div className={`absolute top-0 left-0 h-full w-[75%] max-w-xs bg-[#020817] p-6 shadow-lg transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex justify-end">
            <button onClick={closeMenu} className="text-white">
              <HiX size={25} />
            </button>
          </div>

          <div className="flex flex-col gap-6 mt-4">
            {navItems.map(item => (
              <a
                key={item.id}
                href={item.link}
                onClick={closeMenu}
                className="hover:text-blue-400 transition-colors duration-200 text-[15px] font-medium"
              >
                {item.name}
              </a>
            ))}

            <div className="flex flex-col gap-4 mt-4">
              <p className="text-[15px] font-medium">Wishlist (1)</p>
              <p className="text-[15px] font-medium">Cart (0)</p>
              <p className="text-[15px] font-medium">Login / Register</p>
              <div className="flex items-center gap-2">
                <span className="text-[15px] font-medium">Theme:</span>
                <LuSun />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
