import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../context/MyContext';

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
const {user} =useContext(MyContext)
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link to="/" className="text-white font-bold text-xl">Home</Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                
               {user ? <Link to="/profile" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Profile</Link>:<><Link to="/register" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Register</Link>
                <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</Link></>} 
                <Link to="/lobby" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Lobby</Link>
              </div>
            </div>
          </div>
          <div className="block sm:hidden">
            <button onClick={toggleMenu} className="text-gray-300 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white px-2 py-1 rounded-md">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/register" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Register</Link>
            <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Login</Link>
            <Link to="/lobby" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Lobby</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
