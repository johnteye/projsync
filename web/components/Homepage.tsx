"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Teams from "./Teams";
import Projects from "./Projects";

const Homepage = () => {
  const [activeSection, setActiveSection] = useState("Home");

  return (
    <div className="w-dvw h-dvh flex">
      <div className="w-[20%] h-full flex justify-center p-4 ">
        <Sidebar setActiveSection={setActiveSection} />
      </div>
      <div className="w-full sm:w-[80%] bg-gray-100 p-4">
        <Navbar />
        <div className="bg-white p-5 mt-10">
          {activeSection === "Teams" && <Teams />}
          {activeSection === "Projects" && <Projects />}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
