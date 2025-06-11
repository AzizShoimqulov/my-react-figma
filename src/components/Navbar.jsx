import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoPersonCircleSharp } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import { useWishlist } from "../pages/context/WishlistContext";
import Darkmood from "../pages/Darkmood";

const navItems = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Products", link: "/products" },
  { id: 3, name: "Categories", link: "/categories" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { wishlist } = useWishlist();

  return (
    <nav className="w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold dark:text-white">Store</h1>
            <div className="hidden md:flex gap-6">
              {navItems.map((item) => (
                <Link 
                  key={item.id} 
                  to={item.link} 
                  className="hover:text-blue-500 dark:hover:text-blue-400 text-sm font-semibold transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Darkmood />
            <div className="relative">
              <FaRegHeart 
                size={20} 
                className="hover:text-yellow-500 dark:hover:text-yellow-400 cursor-pointer transition-colors" 
              />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {wishlist.length}
                </span>
              )}
            </div>
            <FiShoppingCart 
              size={20} 
              className="hover:text-yellow-500 dark:hover:text-yellow-400 cursor-pointer transition-colors" 
            />
            <Link
              to="/login"
              className="flex items-center bg-gray-800 dark:bg-gray-700 px-3 py-1 rounded-lg text-white hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
            >
              <IoPersonCircleSharp size={20} />
              <span className="ml-2 text-sm">Login</span>
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <Darkmood />
            <button 
              onClick={() => setIsOpen(true)}
              className="text-gray-800 dark:text-gray-200"
            >
              <HiMenu size={25} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 transition-opacity ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
          onClick={() => setIsOpen(false)} 
        />
        <div className={`absolute top-0 left-0 h-full w-[75%] max-w-xs bg-white dark:bg-gray-900 p-6 shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-xl font-bold dark:text-white">Store</h1>
            <HiX 
              size={25} 
              onClick={() => setIsOpen(false)} 
              className="text-gray-800 dark:text-gray-200 cursor-pointer hover:text-red-500" 
            />
          </div>
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <Link 
                key={item.id} 
                to={item.link} 
                onClick={() => setIsOpen(false)} 
                className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 text-sm font-medium py-2 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <Link 
                to="/login" 
                onClick={() => setIsOpen(false)} 
                className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <IoPersonCircleSharp size={20} />
                <span>Login</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;