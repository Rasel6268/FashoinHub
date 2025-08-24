"use client";

import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold text-pink-600 mb-4">FashionHub</h1>
          <p className="text-sm">
            Your ultimate destination for trendy fashion clothing. Stay stylish and updated with the latest collections.
          </p>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="cursor-pointer hover:text-pink-600" />
            <FaTwitter className="cursor-pointer hover:text-pink-600" />
            <FaInstagram className="cursor-pointer hover:text-pink-600" />
            <FaPinterest className="cursor-pointer hover:text-pink-600" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-pink-600">Home</a></li>
            <li><a href="/shop" className="hover:text-pink-600">Shop</a></li>
            <li><a href="/about" className="hover:text-pink-600">About</a></li>
            <li><a href="/contact" className="hover:text-pink-600">Contact</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h2 className="font-semibold mb-4">Customer Service</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-pink-600">FAQ</a></li>
            <li><a href="#" className="hover:text-pink-600">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-pink-600">Order Tracking</a></li>
            <li><a href="#" className="hover:text-pink-600">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="font-semibold mb-4">Subscribe to Newsletter</h2>
          <p className="text-sm mb-4">Get updates on latest trends and offers.</p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded text-gray-900 focus:outline-none w-full"
            />
            <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm">
        &copy; {new Date().getFullYear()} FashionHub. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
