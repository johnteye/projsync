"use client";

import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import Profile from "@/public/profile-image.svg";
import Image from "next/image";
import { PiQuestionBold } from "react-icons/pi";
import { FiSettings, FiBell } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-16 border-b-2 sm:border-none border-[#E5E5E5] flex justify-between ">
      {/* Left - Search */}
      <div className="relative flex items-center pl-10 md:pl-0 w-full">
        <IoSearch className="absolute left-2 text-gray-400 size-5" />
        <input
          type="text"
          placeholder="Search something"
          className="w-full md:w-96 h-10 sm:h-12 border bg-white focus:outline-none border-gray-200 rounded-lg pl-8 shadow-sm"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center justify-end w-auto  ml-4">
        {/* Help button */}
        <button className="bg-projsync-green hidden md:flex h-12 w-32 rounded-lg items-center justify-center">
          <PiQuestionBold className="text-white size-5 mr-2" />
          <span className="text-white font-manrope text-xs sm:text-sm font-medium hidden sm:block">
            Help
          </span>
        </button>

        {/* Desktop profile card */}
        <div className="hidden md:flex md:h-12 w-72 justify-between p-4 ml-7 items-center bg-white rounded-lg shadow-sm">
          <div className="flex space-x-2">
            <FiSettings className="text-gray-500 text-xl" />
            <FiBell className="text-gray-500 text-2xl" />
          </div>
          <div className="flex justify-center items-center">
            <div>
              <p className="font-kumbh-sans text-xs text-projsync-green">
                Ama Abrampah
              </p>
              <p className="font-poppins text-[10px] text-[#1B1F3BA6]">
                View profile
              </p>
            </div>
            <Image
              src={Profile}
              alt="profile"
              className="size-8 ml-2 rounded-full"
            />
          </div>
        </div>

        {/* Mobile dropdown */}
        <div className="relative md:hidden ml-3">
          <button onClick={() => setOpen(!open)}>
            <Image
              src={Profile}
              alt="profile"
              className="size-14 rounded-full"
            />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
              <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <FiBell className="mr-2" /> Notifications
              </button>
              <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <FiSettings className="mr-2" /> Settings
              </button>
              <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                View Profile
              </button>
              <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Help
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
