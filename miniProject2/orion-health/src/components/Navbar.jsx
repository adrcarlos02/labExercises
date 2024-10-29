// src/components/Navbar.js
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets'; // Import your assets

const Navbar = ({ user, setUser }) => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null); // Clear user state
    navigate('/login'); // Redirect to login page
  };

  return (
    <nav className="bg-white border-b border-gray-200 pb-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a onClick={() => navigate('/')} className="flex items-center space-x-3 cursor-pointer">
          <img src={assets.logo} className="h-9" alt="Logo" />
        </a>
        <button
          onClick={() => setShowMenu(!showMenu)} // Toggle mobile menu
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-multi-level"
          aria-expanded={showMenu}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${showMenu ? '' : 'hidden'}`}>
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0">
            <li>
              <NavLink to="/" className={({ isActive }) => `block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:p-0 ${isActive ? 'text-blue-600' : ''}`}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => `block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:p-0 ${isActive ? 'text-blue-600' : ''}`}>About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => `block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:p-0 ${isActive ? 'text-blue-600' : ''}`}>Contact</NavLink>
            </li>
            {user ? (
              <>
                <li>
                  <NavLink to={`/my-profile/${user.email}`} className={({ isActive }) => `block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:p-0 ${isActive ? 'text-blue-600' : ''}`}>Profile</NavLink>
                </li>
                <li>
                  <NavLink to="/doctors" className={({ isActive }) => `block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:p-0 ${isActive ? 'text-blue-600' : ''}`}>Doctors</NavLink>
                </li>
                <li>
                  <NavLink to="/my-appointments" className={({ isActive }) => `block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:p-0 ${isActive ? 'text-blue-600' : ''}`}>My Appointments</NavLink>
                </li>
                <li>
                  <button onClick={handleLogout} className="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:p-0">Logout</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/login" className={({ isActive }) => `block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:p-0 ${isActive ? 'text-blue-600' : ''}`}>Login</NavLink>
                </li>
                <li>
                  <NavLink to="/signup" className={({ isActive }) => `block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:p-0 ${isActive ? 'text-blue-600' : ''}`}>Sign Up</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;