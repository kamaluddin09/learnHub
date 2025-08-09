"use client"

import React, { useState } from "react";
import { Search } from 'lucide-react';
// import RegisterForm from "../components/RegisterForm";
import SignInForm from "../Login sign-up/SignInForm";
import RegisterForm from "../Login sign-up/RegisterForm";

const Header = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <div>
      <nav className="flex items-center justify-between px-8 py-5 bg-white shadow-lg border-b border-gray-100 backdrop-blur-sm">
        {/* Left: Logo + Nav */}
        <div className="flex items-center gap-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              NextSkill
            </span>
          </div>
          
          {/* Nav Links */}
          <ul className="flex items-center gap-8 text-sm text-gray-700 font-medium">
            <li className="cursor-pointer hover:text-blue-600 transition-colors duration-200 relative group">
              Courses
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </li>
            <li className="cursor-pointer hover:text-blue-600 transition-colors duration-200 relative group">
              Categories
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </li>
            <li className="cursor-pointer hover:text-blue-600 transition-colors duration-200 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </li>
          </ul>
        </div>

        {/* Center: Search Bar */}
        <div className="flex items-center flex-1 max-w-lg mx-12 bg-gradient-to-r from-gray-50 to-gray-100 px-5 py-3 rounded-xl border border-gray-200 shadow-sm hover:shadow-md focus-within:ring-2 focus-within:ring-blue-400 focus-within:border-blue-300 transition-all duration-200">
          <Search className="text-gray-500 text-lg" />
          <input
            type="text"
            placeholder="Search for courses, topics, or instructors..."
            className="ml-3 w-full bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500"
          />
        </div>

        {/* Right: Auth Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowSignIn(true)}
            className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium px-4 py-2 rounded-lg hover:bg-gray-50"
          >
            Login
          </button>
          <button
            onClick={() => setShowRegister(true)}
            className="text-sm px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
           Register
          </button>
        </div>
      </nav>

      {showRegister && <RegisterForm onClose={() => setShowRegister(false)} />}
      {showSignIn && <SignInForm onClose={() => setShowSignIn(false)} />}
    </div>
  );
};

export default Header;
