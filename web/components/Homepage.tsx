"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Teams from "./Teams";
import Projects from "./Projects";

const Homepage = () => {
  const [activeSection, setActiveSection] = useState("Home");

  return (
    <div className="w-screen h-dvh flex">
      
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
   
      <div className="w-full bg-gray-100 p-4">
        {/* <Navbar /> */}
        <div className="bg-white p-5 mt-10">
          {activeSection === "Teams" && <Teams />}
          {activeSection === "Projects" && <Projects />}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
