"use client";

import { usePathname } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaTachometerAlt,
  FaSignOutAlt,
  FaHeart,
  FaCog,
  FaBox,
} from "react-icons/fa";

const Navbar = () => {
  const { data: session, status } = useSession();
  const isLoggedIn = status === "authenticated";

  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Hide navbar on dashboard pages
  if (pathname.includes("dashboard")) return null;

  return (
    <nav className="bg-white shadow-md sticky top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-pink-600 cursor-pointer">
          FashionHub
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li>
            <a href="/" className="hover:text-pink-600">Home</a>
          </li>
          <li>
            <a href="/product" className="hover:text-pink-600">Shop</a>
          </li>
          <li>
            <a href="/about" className="hover:text-pink-600">About</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-pink-600">Contact</a>
          </li>
        </ul>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <FaShoppingCart className="text-xl cursor-pointer hover:text-pink-600" />

          {isLoggedIn ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-1 focus:outline-none"
              >
                <div className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center text-white">
                  <FaUser className="text-sm" />
                </div>
                <span className="text-gray-700 font-medium">
                  {session.user?.name || "User"}
                </span>
                <FaChevronDown
                  className={`text-xs transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">
                      {session.user?.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {session.user?.email}
                    </p>
                  </div>

                  <a
                    href="/user-dashboard"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                  >
                    <FaTachometerAlt className="mr-2" />
                    Dashboard
                  </a>
                  <button
                    onClick={() => signOut()}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 border-t border-gray-100 w-full text-left"
                  >
                    <FaSignOutAlt className="mr-2" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div>
              <ul className="flex items-center gap-2">
                <li className="bg-pink-600 py-2 px-3 rounded-md text-white font-bold hover:bg-pink-500 transition-colors">
                  <a href="/register">Register</a>
                </li>
                <li className="bg-pink-600 py-2 px-3 rounded-md text-white font-bold hover:bg-pink-500 transition-colors cursor-pointer">
                  <button onClick={() => signIn()} className="cursor-pointer">
                    Login
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col px-6 py-4 space-y-4 font-medium text-gray-700">
            <li>
              <a href="/" className="hover:text-pink-600">Home</a>
            </li>
            <li>
              <a href="/shop" className="hover:text-pink-600">Shop</a>
            </li>
            <li>
              <a href="/about" className="hover:text-pink-600">About</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-pink-600">Contact</a>
            </li>

            {isLoggedIn ? (
              <>
                <li className="pt-2">
                  <details className="group" open>
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <span className="font-medium flex items-center">
                        <div className="w-6 h-6 rounded-full bg-pink-600 flex items-center justify-center text-white mr-2">
                          <FaUser className="text-xs" />
                        </div>
                        {session.user?.name || "User"}
                      </span>
                      <FaChevronDown className="text-sm transition-transform group-open:rotate-180" />
                    </summary>
                    <ul className="mt-2 pl-8 space-y-2 border-l border-gray-200">
                      <li>
                        <a href="/dashboard" className="text-gray-600 hover:text-pink-600 flex items-center">
                          <FaTachometerAlt className="mr-2 text-sm" />
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a href="/orders" className="text-gray-600 hover:text-pink-600 flex items-center">
                          <FaBox className="mr-2 text-sm" />
                          My Orders
                        </a>
                      </li>
                      <li>
                        <a href="/wishlist" className="text-gray-600 hover:text-pink-600 flex items-center">
                          <FaHeart className="mr-2 text-sm" />
                          Wishlist
                        </a>
                      </li>
                      <li>
                        <a href="/settings" className="text-gray-600 hover:text-pink-600 flex items-center">
                          <FaCog className="mr-2 text-sm" />
                          Settings
                        </a>
                      </li>
                      <li className="pt-2 border-t border-gray-200 mt-2">
                        <button
                          onClick={() => signOut()}
                          className="text-gray-600 hover:text-pink-600 flex items-center w-full text-left"
                        >
                          <FaSignOutAlt className="mr-2 text-sm" />
                          Logout
                        </button>
                      </li>
                    </ul>
                  </details>
                </li>
              </>
            ) : (
              <li className="flex flex-col gap-2 pt-2">
                <a href="/register" className="bg-pink-600 py-2 px-3 rounded-md text-white font-bold hover:bg-pink-500 text-center">
                  Register
                </a>
                <button
                  onClick={() => signIn()}
                  className="bg-pink-600 py-2 px-3 rounded-md text-white font-bold hover:bg-pink-500 text-center"
                >
                  Login
                </button>
              </li>
            )}

            <li className="flex items-center space-x-4 pt-2">
              <FaShoppingCart className="text-xl hover:text-pink-600" />
              <input
                type="text"
                placeholder="Search..."
                className="border rounded px-2 py-1 w-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
