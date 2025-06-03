import React from 'react';
import { LuSun } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoPersonCircleSharp } from "react-icons/io5";

  const navItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Product", link: "/" },
    { id: 3, name: "Categories", link: "/" }
  ];
  const navIcons = [
  { id: 1, icon: <LuSun size={18} /> },
  { id: 2, icon: <FaRegHeart size={18} /> },
  { id: 3, icon: <FiShoppingCart size={18} /> },
  { id: 4, icon: <IoPersonCircleSharp size={21} /> },
];
const Navbar = () => {
  return (
    <nav className="w-full border-b-4 border-b-blue-900 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
       
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold">Store</h1>
        {navItems.map(item => (
          <div key={item.id}>
             <a className='hover:text-blue-400 transition-colors duration-200' to={item.link}>{item.name}</a>
          </div>
        ))}
          </div>

        <div className="flex items-center gap-8">
           {navIcons.map(item => (
            <button
                  key={item.id}
                  className="text-white hover:text-yellow-400 transition-colors duration-200">
                  {item.icon}
            </button>
            ))}
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
