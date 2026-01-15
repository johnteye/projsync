import React from "react";
import Image from "next/image";
import SigninImage from "@/public/sign-in.svg";
import Logo from "@/public/projsync-logo.svg";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockFill } from "react-icons/ri";
import Link from "next/link";
import GoogleSignIn from "./components/GoogleSignIn";

const SignIn = () => {
  return (
    <div className="w-screen h-dvh flex flex-col lg:flex-row bg-white overflow-hidden">
      {/* Left: Login Form */}
      <div className="w-full lg:w-2/5 flex flex-col items-center justify-center px-4 md:px-8 py-6 md:py-0 overflow-y-auto lg:overflow-visible">
        <div className="w-full max-w-sm flex flex-col justify-center items-center space-y-6">
          {/* Logo */}
          <div className="flex justify-center flex-shrink-0">
            <Image
              src={Logo}
              className="w-48 md:w-56 lg:w-64"
              alt="ProjSync Logo"
            />
          </div>

          {/* Heading */}
          <div className="text-center space-y-2 w-full flex-shrink-0">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
              Welcome back
            </h1>
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
              Sign in to access your projects and teams
            </p>
          </div>

          {/* Form */}
          <form className="w-full space-y-4 flex-shrink-0">
            {/* Email Input */}
            <div className="space-y-1">
              <label className="block text-xs md:text-sm font-semibold text-gray-900">
                Email
              </label>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full pl-4 pr-11 py-3 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-projsync-green focus:ring-offset-2 focus:border-transparent transition-all hover:border-gray-400"
                  required
                />
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-projsync-green transition-colors">
                  <AiOutlineMail className="text-lg" />
                </div>
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1">
              <label className="block text-xs md:text-sm font-semibold text-gray-900">
                Password
              </label>
              <div className="relative group">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full pl-4 pr-11 py-3 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-projsync-green focus:ring-offset-2 focus:border-transparent transition-all hover:border-gray-400"
                  required
                />
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-projsync-green transition-colors">
                  <RiLockFill className="text-lg" />
                </div>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="flex justify-end">
              <a
                href="#"
                className="text-sm text-projsync-green hover:text-green-700 font-medium transition-colors focus:outline-none focus:underline"
              >
                Forgot password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full h-11 bg-projsync-green hover:bg-green-700 text-white font-semibold text-base rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 active:scale-95 mt-2"
            >
              Sign in
            </button>
          </form>

          {/* Divider */}
          <div className="relative w-full flex-shrink-0">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-2 bg-white text-xs text-gray-500 font-medium">
                or
              </span>
            </div>
          </div>

          {/* Google Sign In */}
          <Link href="/api/auth/signin" className="w-full flex-shrink-0">
            <GoogleSignIn />
          </Link>

          {/* Footer */}
          <p className="text-xs text-gray-500 text-center flex-shrink-0">
            By signing in, you agree to our Terms and Privacy Policy
          </p>
        </div>
      </div>

      {/* Right: Image (Desktop only) */}
      <div className="hidden lg:w-3/5 lg:flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={SigninImage}
            alt="Sign in illustration"
            className="w-3/4 h-auto object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
