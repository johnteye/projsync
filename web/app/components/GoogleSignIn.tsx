'use client'
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

const GoogleSignIn = () => {
  return (
    <button
      className="flex items-center justify-center border h-10 w-56 rounded-xl mr-12"
      onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
    >
      <FcGoogle className="text-2xl mr-3.5" />
      <p className="text-xs">
        Login with <span className="font-bold">Google</span>
      </p>
    </button>
  );
};

export default GoogleSignIn;
