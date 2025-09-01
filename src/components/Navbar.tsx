"use client";

import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { useNavigate, NavLink } from "react-router-dom";
// import SearchBar from "./SearchBar";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg border-b border-gray-100 backdrop-blur-sm ">
        <div className="flex items-center justify-between px-6 py-3 flex-1">
          {/* Left: Logo */}
          <NavLink to="/" className="flex items-center mr-5">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              NextSkill
            </span>
          </NavLink>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8 text-sm text-gray-700 font-medium ">
            <NavLink
              to="/Courses"
              className="cursor-pointer hover:text-blue-600 transition-colors duration-200 relative group"
            >
              <li>
                Courses
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </li>
            </NavLink>
            <NavLink
              to="/Categories"
              className="cursor-pointer hover:text-blue-600 transition-colors duration-200 relative group"
            >
              <li>
                Categories
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </li>
            </NavLink>
            <NavLink
              to="/About"
              className="cursor-pointer hover:text-blue-600 transition-colors duration-200 relative group"
            >
              <li>
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </li>
            </NavLink>
          </ul>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center flex-1 max-w-lg mx-8 bg-gradient-to-r from-gray-50 to-gray-100 px-5 py-2 rounded-xl border border-gray-200 shadow-sm hover:shadow-md focus-within:ring-2 focus-within:ring-blue-400 focus-within:border-blue-300 transition-all duration-200">
            <Search className="text-gray-500 text-lg" />
            <input
              type="text"
              placeholder="Search for courses, topics, or instructors..."
              className="ml-3 w-full bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500"
            />  
          </div>
          {/* <div className="flex-1">
            <SearchBar />
          </div> */}

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => navigate("/login")}
              className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium px-4 py-2 rounded-lg hover:bg-gray-50"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="text-sm px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden px-6 pb-4 space-y-4">
            <ul className="space-y-2 text-gray-700 font-medium">
              <li>
                <NavLink to="/Courses" onClick={() => setIsOpen(false)}>Courses</NavLink>
              </li>
              <li>
                <NavLink to="/Categories" onClick={() => setIsOpen(false)}>Categories</NavLink>
              </li>
              <li>
                <NavLink to="/About" onClick={() => setIsOpen(false)}>About</NavLink>
              </li>
            </ul>

            <div className="flex items-center bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-3 rounded-xl border border-gray-200">
              <Search className="text-gray-500 text-lg" />
              <input
                type="text"
                placeholder="Search..."
                className="ml-3 w-full bg-transparent outline-none text-sm text-gray-700"
              />
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => {
                  navigate("/login");
                  setIsOpen(false);
                }}
                className="flex-1 text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium px-4 py-2 rounded-lg hover:bg-gray-50"
              >
                Login
              </button>
              <button
                onClick={() => {
                  navigate("/register");
                  setIsOpen(false);
                }}
                className="flex-1 text-sm px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700"
              >
                Register
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
