"use client";

import { getToken } from "next-auth/jwt";
import { useSession } from "next-auth/react";
import { FaShoppingCart, FaBox, FaHeart, FaUser } from "react-icons/fa";

export default  function DashboardPage() {
const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return window.location.href = "api/auth/signin";

 if(session){
   return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Welcome to Your Fashion Dashboard 👋</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-pink-100 text-pink-600">
              <FaShoppingCart className="text-xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Total Sales</h3>
              <p className="text-2xl font-bold text-gray-800">$12,426</p>
            </div>
          </div>
          <p className="text-xs text-green-500 mt-2">+12.5% from last month</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
              <FaBox className="text-xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Total Products</h3>
              <p className="text-2xl font-bold text-gray-800">24</p>
            </div>
          </div>
          <p className="text-xs text-green-500 mt-2">+4 products this month</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-green-100 text-green-600">
              <FaHeart className="text-xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Favorites</h3>
              <p className="text-2xl font-bold text-gray-800">342</p>
            </div>
          </div>
          <p className="text-xs text-green-500 mt-2">+28% from last month</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-purple-100 text-purple-600">
              <FaUser className="text-xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">New Customers</h3>
              <p className="text-2xl font-bold text-gray-800">56</p>
            </div>
          </div>
          <p className="text-xs text-green-500 mt-2">+8% from last month</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <div className="p-2 rounded-lg bg-pink-100 text-pink-600 mr-3">
                <FaShoppingCart className="text-sm" />
              </div>
              <div>
                <p className="text-sm font-medium">New order received</p>
                <p className="text-xs text-gray-500">2 minutes ago</p>
              </div>
            </div>
            <span className="text-sm font-medium text-pink-600">$129.99</span>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <div className="p-2 rounded-lg bg-green-100 text-green-600 mr-3">
                <FaHeart className="text-sm" />
              </div>
              <div>
                <p className="text-sm font-medium">Product added to favorites</p>
                <p className="text-xs text-gray-500">15 minutes ago</p>
              </div>
            </div>
            <span className="text-sm font-medium text-gray-600">Summer Dress</span>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <div className="p-2 rounded-lg bg-blue-100 text-blue-600 mr-3">
                <FaUser className="text-sm" />
              </div>
              <div>
                <p className="text-sm font-medium">New customer registered</p>
                <p className="text-xs text-gray-500">1 hour ago</p>
              </div>
            </div>
            <span className="text-sm font-medium text-gray-600">Sarah Johnson</span>
          </div>
        </div>
      </div>
    </div>
  );
 }
}