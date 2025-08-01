import React from 'react';

function Navbar() {
  return (
    <div className="bg-[#280cb3] text-white border-b border-gray-950">
      <div className="flex justify-between items-center px-4 py-3">
        <div className="text-lg font-bold">My App</div>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex space-x-6 text-base font-medium">
          <li><a href="/" className="hover:text-amber-400">Home</a></li>
          <li><a href="/ToDo" className="hover:text-amber-400">To-Do</a></li>
          <li><a href="/Contact" className="hover:text-amber-400">Contact</a></li>
          <li><a href="/About" className="hover:text-amber-400">About</a></li>
        </ul>
      </div>

      {/* Mobile Nav */}
      <div className="sm:hidden text-center text-sm pb-3 space-y-1">
        <a href="/" className="block hover:text-amber-400">Home</a>
        <a href="/ToDo" className="block hover:text-amber-400">To-Do</a>
        <a href="/Contact" className="block hover:text-amber-400">Contact</a>
        <a href="/About" className="block hover:text-amber-400">About</a>
      </div>
    </div>
  );
}

export default Navbar;
