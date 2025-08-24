"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { 
  FaHome, 
  FaUser, 
  FaPlus, 
  FaBox, 
  FaSignOutAlt, 
  FaShoppingCart,
  FaBell,
  FaSearch
} from "react-icons/fa";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);

  const logout = () => {
    signOut()
    toast.success('logout successfull!!')
  }

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}>
        <div className="p-5 h-full flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-blue-600">FashionHub</h2>
            <button 
              className="md:hidden text-gray-500 hover:text-gray-700"
              onClick={() => setSidebarOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <nav className="flex flex-col gap-2 flex-1">
            <Link 
              href="/" 
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 text-gray-700 transition-colors duration-200"
              onClick={() => setSidebarOpen(false)}
            >
              <FaHome className="text-lg" />
              <span>Home</span>
            </Link>
            <Link 
              href="/user-dashboard" 
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 text-gray-700 transition-colors duration-200"
              onClick={() => setSidebarOpen(false)}
            >
              <FaHome className="text-lg" />
              <span>Dashboard</span>
            </Link>
            <Link 
              href="/user-dashboard/Add-product" 
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 text-gray-700 transition-colors duration-200"
              onClick={() => setSidebarOpen(false)}
            >
              <FaPlus className="text-lg" />
              <span>Add Product</span>
            </Link>
            
            <Link 
              href="/user-dashboard/allproduct" 
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 text-gray-700 transition-colors duration-200"
              onClick={() => setSidebarOpen(false)}
            >
              <FaBox className="text-lg" />
              <span>My Products</span>
            </Link>
            
            <Link 
              href="/user-dashboard/orders" 
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 text-gray-700 transition-colors duration-200"
              onClick={() => setSidebarOpen(false)}
            >
              <FaShoppingCart className="text-lg" />
              <span>Orders</span>
            </Link>
          </nav>
          
          <button onClick={logout} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 text-gray-700 mt-auto transition-colors duration-200">
            <FaSignOutAlt className="text-lg" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:ml-0">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <div className="flex items-center">
            <button 
              className="md:hidden mr-4 p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setSidebarOpen(true)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-lg hover:bg-gray-100">
              <FaBell className="text-xl text-gray-600" />
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {notificationCount}
                </span>
              )}
            </button>
            
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
              <FaUser className="text-sm" />
            </div>
            
            <button onClick={logout} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2">
              <FaSignOutAlt className="text-sm" />
              <span className="hidden md:inline">Logout</span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto bg-gray-50">
          <div className="bg-white rounded-lg shadow-sm p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}