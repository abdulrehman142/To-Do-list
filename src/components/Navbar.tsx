import React from 'react';

function Navbar() {
  return (
    <div>
      <div className="flex justify-between items-center p-4 bg-[#280cb3] text-white text-lg font-bold border-b border-gray-950">
        <ul className="flex space-x-10">
          <li>
            <a href="/" className="hover:text-amber-400">
              Home
            </a>
          </li>
          <li>
            <a href="/ToDo" className="hover:text-amber-400">
              To-Do
            </a>
          </li>
          <li>
            <a href="/Contact" className="hover:text-amber-400">
              Contact
            </a>
          </li>
          <li>
            <a href="/About" className="hover:text-amber-400">
              About
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
