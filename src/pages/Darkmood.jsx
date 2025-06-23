import React, { useState, useEffect } from 'react';
import { BsMoon } from "react-icons/bs";
import { LuSun } from "react-icons/lu";

const Darkmood = () => {
  const [darkMode, setDarkMode] = useState(() => {
    
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    return savedTheme ? savedTheme === 'dark' : prefersDark;
  });

  useEffect(() => {
    const root = document.documentElement;
    
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label={darkMode ? "Light mode" : "Dark mode"}
    >
      {darkMode ? <LuSun size={18} className="text-yellow-400" /> : <BsMoon size={18} />}
    </button>
  );
};

export default Darkmood;