import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/60 backdrop-blur-md shadow-md px-4 py-2 flex justify-center space-x-4 rounded-b-2xl">
      {['Mood', 'Routine', 'Budget', 'Insights'].map((tab) => (
        <NavLink
          key={tab}
          to={`/${tab.toLowerCase()}`}
          className={({ isActive }) =>
            `text-sm md:text-base px-4 py-2 rounded-full transition-all duration-300 ${
              isActive
                ? 'bg-purple-600 text-white shadow-lg scale-105'
                : 'bg-white/20 text-white hover:bg-purple-500 hover:text-white'
            }`
          }
        >
          {tab}
        </NavLink>
      ))}
    </nav>
  );
};
<button
  onClick={() => {
    const html = document.documentElement;
    html.classList.toggle("dark");
  }}
  className="bg-white/10 px-3 py-1 rounded-xl hover:bg-white/20"
>
  🌗 Toggle Theme
</button>

export default Navbar;

