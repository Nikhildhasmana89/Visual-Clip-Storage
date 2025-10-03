import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Header() {
  const navLinks = (
    <>
      <Link
        to="/"
        className="text-lg md:text-base hover:text-indigo-400 transition duration-300 block py-2 md:py-0"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="text-lg md:text-base hover:text-indigo-400 transition duration-300 block py-2 md:py-0"
      >
        About
      </Link>
      <Link
        to="/clips"
        className="text-lg md:text-base hover:text-indigo-400 transition duration-300 block py-2 md:py-0"
      >
        Clips
      </Link>
      <Link
        to="/contact"
        className="text-lg md:text-base hover:text-indigo-400 transition duration-300 block py-2 md:py-0"
      >
        Contact
      </Link>
    </>
  );

  return (
    <header className="bg-gray-800 text-gray-50 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="Visual Clip Storage Logo"
            className="w-10 h-10 rounded-full border-2 border-indigo-500 p-0.5 object-cover"
          />
          <Link
            to="/"
            className="text-2xl font-extrabold tracking-tight text-white hover:text-indigo-400 transition duration-300"
          >
            Visual Clip Storage
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8 font-medium text-gray-300">
          {navLinks}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/signin"
            className="px-5 py-2 border border-transparent rounded-full text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="px-5 py-2 border border-indigo-500 rounded-full text-sm font-semibold text-indigo-400 hover:text-white hover:bg-indigo-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Sign Up
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute w-full bg-gray-900 border-t border-gray-700 transition-all ease-in-out duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-gray-300 font-medium">
          {navLinks}
          <div className="border-t border-gray-700 mt-2 pt-2 space-y-2">
            <Link
              to="/signin"
              onClick={toggleMenu}
              className="block w-full text-center px-4 py-2 border border-transparent rounded-lg text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              onClick={toggleMenu}
              className="block w-full text-center px-4 py-2 border border-indigo-500 rounded-lg text-base font-medium text-indigo-400 hover:text-white hover:bg-indigo-600 transition duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
