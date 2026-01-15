"use client";

import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { SidebarProvider } from "@/app/context/SidebarContext";

interface Props {
  children: ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <SidebarProvider>
      <div className="flex flex-col md:flex-row w-screen h-screen">
        <Sidebar />
        <div className="bg-[#F3F3F3] p-3 md:p-5 flex flex-col flex-1">
          <Navbar />
          <main className="flex-1 overflow-y-auto p-3 md:p-6 bg-white rounded-lg mt-5 md:mt-10">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
