import React from "react";
import { IoSearch } from "react-icons/io5";
import Profile from "@/public/profile-image.svg";
import Image from "next/image";
import { PiQuestionBold } from "react-icons/pi";
import { FiSettings, FiBell } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="h-16 w-full border-b-2 sm:border-none border-[#E5E5E5] p-2.5 flex ">
      

      <div className="flex w-[40%] sm:w-full justify-between sm:justify-normal items-center">
        <div className="relative flex items-center w-1/2 ">
          <IoSearch className="absolute left-2 text-gray-400 size-5" />
          <input
            type="text"
            placeholder="Search something"
            className="size-8 sm:w-96 sm:h-12 border bg-white focus:outline-none border-gray-200 rounded-lg pl-8 shadow-xl"
          />
        </div>
        <div className="flex items-center w-1/2 justify-end">
          <button className="bg-projsync-green flex w-8 h-8 sm:h-12 sm:w-32 rounded-lg items-center justify-center">
            <PiQuestionBold className="text-white size-5 sm:mr-2" />
            <span className="text-white font-manrope text-xs sm:text-sm font-medium hidden sm:block">
              Help
            </span>
          </button>
          <div className="flex md:h-12 w-72 justify-between p-4 ml-7 items-center bg-white rounded-lg">
            <div className="flex space-x-2">
              <FiSettings className="text-gray-500 text-xl" />
              <FiBell className="text-gray-500 text-2xl" />
            </div>
            <div className="flex justify-center items-center">
              <div>
                <p className="font-kumbh-sans text-xs text-projsync-green">Ama Abrampah</p>
                <p className="font-poppins text-xs text-[#1B1F3BA6] text-[10px]">View profile</p>
              </div>
              <Image src={Profile} alt="profile" className="size-8 ml-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
