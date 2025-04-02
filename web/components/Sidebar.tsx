import React from "react";
import Logo from "@/public/logo.svg";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import {
  FiMenu,
  FiLayout,
  FiCalendar,
  FiCopy,
  FiMail,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

const Sidebar = ({
  setActiveSection,
}: {
  setActiveSection: (section: string) => void;
}) => {
  return (
    <div className="w-[80%] h-full py-5 flex flex-col items-center">
      <p className="font-kumbh-sans text-projsync-green text-2xl font-medium mb-10 w-full relative">
        Projsync
        <IoClose className="absolute top-0 end-0 my-1 md:hidden" />
      </p>
      <Image src={Logo} alt="Projsync Logo" className="size-40 mb-10" />
      <div className="flex flex-col space-y-2.5 w-full">
        <div
          className="flex h-10 w-full hover:bg-gray-400 items-center"
          onClick={() => setActiveSection("Home")}
        >
          <FiMenu className="text-projsync-gray text-sm mx-3" />
          <p className="font-manrope text-gray-500 font-normal text-sm">Home</p>
        </div>
        <div
          className="flex h-10 w-full hover:bg-gray-400 items-center"
          onClick={() => setActiveSection("Teams")}
        >
          <FiLayout className="text-projsync-gray text-sm mx-3" />
          <p className="font-manrope text-gray-500 font-normal text-sm">
            Teams
          </p>
        </div>
        <div
          className="flex h-10 w-full hover:bg-gray-400 items-center"
          onClick={() => setActiveSection("Projects")}
        >
          <FiCalendar className="text-projsync-gray text-sm mx-3" />
          <p className="font-manrope text-gray-500 font-normal text-sm">
            Projects
          </p>
        </div>
        <div
          className="flex h-10 w-full hover:bg-gray-400 items-center"
          onClick={() => setActiveSection("Documents")}
        >
          <FiCopy className="text-projsync-gray text-sm mx-3" />
          <p className="font-manrope text-gray-500 font-normal text-sm">
            Documents
          </p>
        </div>
        <div
          className="flex h-10 w-full hover:bg-gray-400 items-center"
          onClick={() => setActiveSection("Messages")}
        >
          <FiMail className="text-projsync-gray text-sm mx-3" />
          <p className="font-manrope text-gray-500 font-normal text-sm">
            Messages
          </p>
        </div>
      </div>

      <footer className="flex flex-col sm:mt-40 w-full">
        <div className="flex h-10 w-full hover:bg-gray-400 items-center">
          <FiSettings className="text-projsync-gray text-sm mx-3" />
          <p className="font-manrope text-gray-500 font-normal text-sm">
            Settings
          </p>
        </div>
        <div className="flex h-10 w-full bg-[#254568] items-center">
          <FiLogOut className="text-white text-sm mx-3" />
          <p className="font-manrope text-white font-normal text-sm">Log out</p>
        </div>
      </footer>
    </div>
  );
};

export default Sidebar;
