"use client";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import ProjectInfo from "@/components/ProjectInfo";
import Teams from "@/components/Teams";
import Projects from "@/components/Projects";

const Homepage = () => {
  const [activeSection, setActiveSection] = useState("ProjectInfo");

  return (
    <div className="w-full h-screen flex">
      <div className="hidden sm:w-[20%] sm:flex sm:justify-center p-4 ">
        <Sidebar setActiveSection={setActiveSection} />
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
