"use client";
import React, { useState } from "react";
import Sidebar from "@/app/components/Sidebar";
import Navbar from "@/app/components/Navbar";
import ProjectInfo from "@/app/components/ProjectInfo";
import Teams from "@/app/components/Teams";
import Projects from "@/app/components/Projects";

const Homepage = () => {
  const [activeSection, setActiveSection] = useState("ProjectInfo");

  return (
    <div className="w-full h-screen flex">
      <div className="hidden sm:w-[20%] sm:flex sm:justify-center p-4 ">
        <Sidebar />
      </div>
      <div className="w-full sm:w-[80%] bg-gray-100 p-4">
        <Navbar />
        <div className="bg-white p-5 mt-10">
          {activeSection === "Teams" && <Teams />}
          {activeSection === "Projects" && <Projects />}
          {activeSection === "ProjectInfo" && <ProjectInfo />}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
