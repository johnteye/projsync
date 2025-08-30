"use client"
import React from "react";
import { Construction } from "lucide-react";

const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800">
      <div className="flex flex-col items-center space-y-6 p-8 bg-white shadow-lg rounded-2xl">
        {/* Icon */}
        <div className="animate-bounce">
          <Construction size={80} className="text-yellow-500" />
        </div>

        {/* Text */}
        <h1 className="text-2xl font-bold">Page Under Construction</h1>
        <p className="text-gray-500 text-center max-w-sm">
          🚧 We’re working hard to bring you something amazing.  
          Please check back soon!
        </p>

        {/* Button */}
        <button
          onClick={() => (window.location.href = "/dashboard")}
          className="mt-4 px-6 py-2 bg-yellow-500 text-white font-semibold rounded-xl shadow-md hover:bg-yellow-600 active:scale-95 transition-all"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default UnderConstruction;
