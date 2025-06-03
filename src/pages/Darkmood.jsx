import React, { useState, useEffect } from 'react';
import { BsMoon } from "react-icons/bs";
import { LuSun } from "react-icons/lu";

const Darkmood = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'light' ? false : true;
  });

  useEffect(() => {
    const root = window.document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove("dark");
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(prev => !prev)}
      className="p-[8px] rounded-[8px] transition-colors duration-200 hover:bg-gray-300 dark:hover:bg-[#1f2937]"
    >
      {darkMode ? <LuSun size={18} /> : <BsMoon size={18} />}
    </button>
  );
};

export default Darkmood;
