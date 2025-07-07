import React, { useState, useCallback, Fragment } from "react";
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

import Logo from "@/public/logo.svg";
import Projsync from "@/public/projsync-logo.svg";

// --- Navigation Data ---
const navigationItems = [
  {
    id: "home",
    label: "Home",
    icon: FiHome,
    href: "/",
    section: "Home",
  },
  {
    id: "teams",
    label: "Teams",
    icon: FiLayout,
    section: "Teams",
  },
  {
    id: "projects",
    label: "Projects",
    icon: FiCalendar,
    section: "Projects",
  },
  {
    id: "documents",
    label: "Documents",
    icon: FiCopy,
    section: "Documents",
  },
  {
    id: "messages",
    label: "Messages",
    icon: FiMail,
    section: "Messages",
  },
];

const settingsItems = [
  {
    id: "settings",
    label: "Settings",
    icon: FiSettings,
    section: "Settings",
  },
];

const logoutItem = {
  id: "logout",
  label: "Log out",
  icon: FiLogOut,
  section: "Logout",
  isLogout: true,
};

// --- SidebarItem Component ---
interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  onClick?: () => void;
  href?: string;
  isLogout?: boolean;
  isActive?: boolean; // New prop for active state
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  onClick,
  href,
  isLogout = false,
  isActive = false, // Default to false
}) => {
  const commonClasses = `flex h-10 w-full items-center rounded-md px-3 text-sm font-normal transition-colors duration-200`;
  const defaultClasses = `${commonClasses} text-gray-500 hover:bg-gray-200`;
  const logoutClasses = `${commonClasses} bg-[#254568] text-white hover:bg-[#1f3a5a]`;

  // Classes for active state
  // You might want to adjust the background color for the active state
  const activeClasses = `${commonClasses} bg-projsync-green text-white font-medium`; // Example active state
  // Or if you just want text color change:
  // const activeClasses = `${commonClasses} text-projsync-green font-medium hover:bg-gray-200`;


  const content = (
    <>
      <Icon className={`mr-3 text-lg ${isActive ? 'text-projsync-green' : 'text-gray-500'}`} /> {/* Icon color also changes */}
      <span className="font-manrope">{label}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} passHref legacyBehavior>
        <a className={isActive ? activeClasses : defaultClasses} onClick={onClick}>
          {content}
        </a>
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={isLogout ? logoutClasses : (isActive ? activeClasses : defaultClasses)}
      type="button"
    >
      {content}
    </button>
  );
};

// --- Sidebar Component ---
interface SidebarProps {
  activeSection: string; // Add activeSection to props
  setActiveSection: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLinkClick = useCallback(
    (section: string) => {
      setActiveSection(section);
      setSidebarOpen(false); // Close sidebar on mobile after selection
    },
    [setActiveSection]
  );

  return (
    <Fragment>
      {/* Mobile Hamburger Menu */}
      <button
        className={`fixed left-4 top-4 z-40 rounded-full bg-white p-2 shadow-lg md:hidden ${
          sidebarOpen ? "hidden" : "block"
        }`}
        onClick={() => setSidebarOpen(true)}
        aria-label="Open sidebar"
        aria-expanded={sidebarOpen}
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
        className={`fixed left-0 top-0 z-50 h-full w-64 transform transition-transform duration-300 ease-in-out md:static md:block md:translate-x-0 md:shadow-none
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        bg-white p-5 shadow-lg flex flex-col`}
        aria-label="Sidebar navigation"
      >
        {/* Projsync Logo and Close Button */}
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
        <nav className="flex flex-grow flex-col space-y-2.5">
          {navigationItems.map((item) => (
            <SidebarItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              href={item.href}
              onClick={
                item.section ? () => handleLinkClick(item.section) : undefined
              }
              isActive={item.section === activeSection} // Pass isActive prop
            />
          ))}
        </nav>

        {/* Footer Navigation (Settings & Logout) */}
        <footer className="mt-20 md:mt-40 flex flex-col space-y-2.5 pt-5">
          {settingsItems.map((item) => (
            <SidebarItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              onClick={() => handleLinkClick(item.section)}
              isActive={item.section === activeSection} // Pass isActive prop
            />
          ))}
          <SidebarItem
            key={logoutItem.id}
            icon={logoutItem.icon}
            label={logoutItem.label}
            isLogout={true}
            onClick={() => handleLinkClick(logoutItem.section)}
            isActive={logoutItem.section === activeSection} // Even for logout, if you want it highlighted when selected
          />
        </footer>
      </aside>
    </Fragment>
  );
};

export default Sidebar;