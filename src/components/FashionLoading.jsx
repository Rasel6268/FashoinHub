"use client";

import { useState, useEffect } from "react";

export default function FashionLoading() {
  const [loadingText, setLoadingText] = useState("Loading");
  
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText(prev => {
        if (prev === "Loading...") return "Loading";
        return prev + ".";
      });
    }, 500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated fashion icon */}
        <div className="relative w-24 h-24 mx-auto mb-6">
          {/* Hanger animation */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-6 border-4 border-pink-500 rounded-t-full border-b-0"></div>
          </div>
          
          {/* Clothing animation */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-16 bg-gradient-to-b from-pink-400 to-pink-600 rounded-lg animate-pulse"></div>
          </div>
          
          {/* Sparkle elements */}
          <div className="absolute top-2 right-4 animate-bounce" style={{ animationDelay: '0.2s' }}>
            <div className="w-2 h-2 bg-pink-300 rounded-full"></div>
          </div>
          <div className="absolute bottom-4 left-2 animate-bounce" style={{ animationDelay: '0.4s' }}>
            <div className="w-2 h-2 bg-pink-300 rounded-full"></div>
          </div>
        </div>
        
        {/* Loading text */}
        <h3 className="text-xl font-serif text-gray-800 mb-2">Fashion House</h3>
        <p className="text-gray-600">{loadingText}</p>
        
        {/* Progress bar */}
        <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden mt-4 mx-auto">
          <div className="h-full bg-pink-500 rounded-full animate-progress"></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
        .animate-progress {
          animation: progress 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

// Inline loading component for smaller sections
export function InlineLoading() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin mb-3"></div>
        <p className="text-gray-600 text-sm">Loading styles</p>
      </div>
    </div>
  );
}

// Skeleton loading for product cards
export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
      <div className="w-full h-64 bg-gray-200"></div>
      <div className="p-5">
        <div className="h-6 bg-gray-200 rounded mb-4"></div>
        <div className="h-4 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="flex justify-between items-center">
          <div className="h-6 bg-gray-200 rounded w-1/4"></div>
          <div className="flex space-x-2">
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div className="w-20 h-10 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Skeleton loading for product lists
export function ProductListSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[...Array(4)].map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}

// Loading component for image galleries
export function ImageGallerySkeleton() {
  return (
    <div className="flex flex-col md:flex-row gap-4 animate-pulse">
      <div className="md:w-1/2 h-96 bg-gray-200 rounded-lg"></div>
      <div className="md:w-1/2">
        <div className="grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-44 bg-gray-200 rounded-lg"></div>
          ))}
        </div>
      </div>
    </div>
  );
}