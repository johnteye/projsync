"use client";

import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import Profile from "@/public/profile-image.svg";
import Image from "next/image";
import { PiQuestionBold } from "react-icons/pi";
import { FiSettings, FiBell, FiMenu } from "react-icons/fi";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSidebar } from "@/app/context/SidebarContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { status, data: session } = useSession();
  const { setSidebarOpen } = useSidebar();

  if (status === "loading") return null;

  return (
    <div className="h-14 sm:h-16 border-b border-gray-200 flex justify-between items-center px-4 sm:px-6 lg:px-8 bg-white rounded-sm sticky top-0 z-40">
      {/* Left - Hamburger + Search */}
      <div className="flex items-center gap-3 flex-1">
        {/* Hamburger Menu - Mobile only */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden rounded-lg bg-white p-2 hover:bg-gray-50 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-projsync-green focus:ring-offset-2"
          aria-label="Open sidebar"
        >
          <FiMenu className="text-xl text-projsync-green" />
        </button>

        {/* Search */}
        <div className="relative flex items-center flex-1">
          <IoSearch className="absolute left-3 text-gray-400 size-4 sm:size-5" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full sm:w-80 h-9 sm:h-10 border border-gray-200 bg-white rounded-lg pl-9 sm:pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-projsync-green focus:ring-opacity-50 transition-all"
            aria-label="Search"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center justify-end gap-3 sm:gap-4">
        {/* Help button - hidden on mobile */}
        <button
          className="hidden lg:flex bg-projsync-green h-10 px-4 rounded-lg items-center justify-center gap-2 transition-colors hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          aria-label="Get help"
        >
          <PiQuestionBold className="text-white size-5" />
          <span className="text-white font-manrope text-sm font-medium">
            Help
          </span>
        </button>

        {/* Desktop profile card */}
        <div className="hidden md:flex h-10 sm:h-12 px-3 sm:px-4 gap-3 sm:gap-4 items-center bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex gap-2 sm:gap-3">
            <button
              className="text-gray-500 hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-projsync-green rounded"
              aria-label="Settings"
            >
              <FiSettings className="size-5" />
            </button>
            <button
              className="text-gray-500 hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-projsync-green rounded"
              aria-label="Notifications"
            >
              <FiBell className="size-5 sm:size-6" />
            </button>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 border-l border-gray-200 pl-3 sm:pl-4">
            <div className="text-right hidden sm:block">
              {status === "authenticated" && (
                <p className="font-manrope text-sm font-medium text-projsync-green truncate max-w-[120px]">
                  {session.user?.name || "User"}
                </p>
              )}
              <p className="text-xs text-gray-500">View Profile</p>
            </div>
            <Image
              src={Profile}
              alt="User profile"
              className="size-8 sm:size-10 rounded-full flex-shrink-0"
              width={40}
              height={40}
            />
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <div className="relative md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="focus:outline-none focus:ring-2 focus:ring-projsync-green rounded-full p-1"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <Image
              src={Profile}
              alt="User profile"
              className="size-10 sm:size-12 rounded-full"
              width={48}
              height={48}
            />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
              {status === "authenticated" && (
                <div className="px-4 py-2 border-b border-gray-200">
                  <p className="text-sm font-medium text-projsync-green truncate">
                    {session.user?.name || "User"}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {session.user?.email}
                  </p>
                </div>
              )}
              <button
                onClick={() => setOpen(false)}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none gap-2"
              >
                <FiBell className="size-4" /> Notifications
              </button>
              <button
                onClick={() => setOpen(false)}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none gap-2"
              >
                <FiSettings className="size-4" /> Settings
              </button>
              <button
                onClick={() => setOpen(false)}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none gap-2"
              >
                View Profile
              </button>
              <button
                onClick={() => setOpen(false)}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none gap-2"
              >
                <PiQuestionBold className="size-4" /> Help
              </button>
              <button
                onClick={() => {
                  signOut({ callbackUrl: "/" });
                  setOpen(false);
                }}
                className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors focus:outline-none border-t border-gray-200 gap-2 font-medium"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
