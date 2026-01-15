"use client";

import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import {
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
import { useSidebar } from "@/app/context/SidebarContext";

import Logo from "@/public/logo.svg";
import Projsync from "@/public/projsync-logo.svg";

const Sidebar: React.FC = () => {
  const { sidebarOpen, setSidebarOpen } = useSidebar();

  const commonClasses =
    "flex h-10 w-full items-center rounded-lg px-3 text-sm font-medium transition-all duration-200";
  const defaultClasses = `${commonClasses} text-gray-600 hover:text-gray-900 hover:bg-gray-100 active:scale-95`;
  const logoutClasses = `${commonClasses} bg-projsync-green text-white hover:bg-green-600 active:scale-95`;

  return (
    <Fragment>
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
         p-6 shadow-sm flex flex-col justify-between bg-gradient-to-b from-white to-gray-50 border-r border-gray-200`}
      >
        <div>
          {/* Projsync Logo */}
          <div className="relative mb-8 flex w-full items-center justify-between">
            <Link href="/dashboard">
              <Image src={Projsync} alt="Projsync" className="h-7 w-auto" />
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
          <div className="mb-8 flex justify-center">
            <Image src={Logo} alt="Projsync Logo" className="h-32 w-32" />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2">
            <Link href="/dashboard" className={defaultClasses}>
              <FiHome className="mr-3 text-lg" />
              <span className="font-manrope">Home</span>
            </Link>

            <Link href="/dashboard/teams" className={defaultClasses}>
              <FiLayout className="mr-3 text-lg" />
              <span className="font-manrope">Teams</span>
            </Link>

            <Link href="/dashboard/projects" className={defaultClasses}>
              <FiCalendar className="mr-3 text-lg" />
              <span className="font-manrope">Projects</span>
            </Link>

            <Link href="/dashboard/documents" className={defaultClasses}>
              <FiCopy className="mr-3 text-lg" />
              <span className="font-manrope">Documents</span>
            </Link>

            <Link href="/dashboard/messages" className={defaultClasses}>
              <FiMail className="mr-3 text-lg" />
              <span className="font-manrope">Messages</span>
            </Link>
          </nav>
        </div>

        {/* Footer Navigation */}
        <footer className="flex flex-col gap-2 border-t border-gray-200 pt-4">
          <Link href="/dashboard/settings" className={defaultClasses}>
            <FiSettings className="mr-3 text-lg" />
            <span className="font-manrope">Settings</span>
          </Link>

          <button
            className={logoutClasses}
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            <FiLogOut className="mr-3 text-lg" />
            <span className="font-manrope">Log out</span>
          </button>
        </footer>
      </aside>
    </Fragment>
  );
};

export default Sidebar;
