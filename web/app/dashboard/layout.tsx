"use client";

import React, { ReactNode} from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

interface Props {
  children: ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div className="bg-[#F3F3F3] p-5 flex flex-col flex-1 ">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6 bg-white rounded-lg mt-10">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
