import React, { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiMenu,
  FiLayout,
  FiCalendar,
  FiCopy,
  FiMail,
  FiSettings,
  FiLogOut,
  FiHome,
} from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { signOut } from "next-auth/react";

import Logo from "@/public/logo.svg";
import Projsync from "@/public/projsync-logo.svg";

const Sidebar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const commonClasses =
    "flex h-10 w-full items-center rounded-md px-3 text-sm font-normal transition-colors duration-200";
  const defaultClasses = `${commonClasses} text-gray-500 hover:bg-gray-200`;
  const logoutClasses = `${commonClasses} bg-[#254568] text-white hover:bg-[#1f3a5a]`;

  return (
    <Fragment>
      {/* Mobile Hamburger Menu */}
      <button
        className={`fixed left-4 top-8 z-40 rounded-sm bg-white p-2 shadow-lg md:hidden ${
          sidebarOpen ? "hidden" : "block"
        }`}
        onClick={() => setSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        <FiMenu className="text-2xl text-projsync-green" />
      </button>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-64 transform transition-transform duration-300 ease-in-out md:static md:translate-x-0 md:shadow-none
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
         p-5 shadow-lg flex flex-col bg-white`}
      >
        {/* Projsync Logo */}
        <div className="relative mb-10 flex w-full items-center justify-between">
          <Link href="/">
            <Image src={Projsync} alt="Projsync" className="h-8 w-auto" />
          </Link>
          <button
            className="absolute right-0 top-0 my-1 cursor-pointer md:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <IoClose className="text-2xl text-gray-600" />
          </button>
        </div>

        {/* Main Logo */}
        <div className="mb-10 flex justify-center">
          <Image src={Logo} alt="Projsync Logo" className="h-40 w-40" />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-2.5">
          <Link href="/dashboard" className={defaultClasses}>
            <FiHome className="mr-3 text-lg text-gray-500" />
            <span className="font-manrope">Home</span>
          </Link>

          <Link href="/dashboard/teams" className={defaultClasses}>
            <FiLayout className="mr-3 text-lg text-gray-500" />
            <span className="font-manrope">Teams</span>
          </Link>

          <Link href="/dashboard/projects" className={defaultClasses}>
            <FiCalendar className="mr-3 text-lg text-gray-500" />
            <span className="font-manrope">Projects</span>
          </Link>

          <Link href="/dashboard/documents" className={defaultClasses}>
            <FiCopy className="mr-3 text-lg text-gray-500" />
            <span className="font-manrope">Documents</span>
          </Link>

          <Link href="/dashboard/messages" className={defaultClasses}>
            <FiMail className="mr-3 text-lg text-gray-500" />
            <span className="font-manrope">Messages</span>
          </Link>
        </nav>

        {/* Footer Navigation */}
        <footer className="mt-20 md:mt-40 flex flex-col space-y-2.5 pt-5">
          <Link href="/dashboard/settings" className={defaultClasses}>
            <FiSettings className="mr-3 text-lg text-gray-500" />
            <span className="font-manrope">Settings</span>
          </Link>

          <Link href="/api/auth/signout" className={logoutClasses}>
            <button
              className="flex"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              <FiLogOut className="mr-3 text-lg" />
              <span className="font-manrope text-white">Log out</span>
            </button>
          </Link>
        </footer>
      </aside>
    </Fragment>
  );
};

export default Sidebar;
