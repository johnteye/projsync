"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

const GoogleSignIn = () => {
  return (
    <button
      className="group flex items-center justify-center gap-3 w-full border border-gray-300 h-11 md:h-12 rounded-lg text-sm md:text-base font-medium text-gray-700 bg-white hover:bg-gray-50 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm hover:shadow-lg hover:border-gray-400"
      onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
      aria-label="Sign in with Google"
    >
      <FcGoogle className="text-2xl md:text-3xl flex-shrink-0 transition-transform group-hover:scale-110 group-active:scale-95" />
      <span className="text-sm md:text-base font-medium">
        Continue with <span className="font-bold">Google</span>
      </span>
    </button>
  );
};

export default GoogleSignIn;
