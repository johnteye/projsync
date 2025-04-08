"use client";
import React, { useState } from "react";
import AddMember from "@/components/AddMember";
import Sidebar from "@/components/Sidebar";

const page = () => {
  const [activeSection, setActiveSection] = useState("Home");
  return (
    <div className="w-full h-screen flex">
      <div className="w-[20%] flex justify-center p-4 ">
        <Sidebar setActiveSection={setActiveSection} />
       
      </div>
      <AddMember
        onSubmit={(data) => console.log(data)}
        onCancel={() => console.log("cancelled")}
      />
    </div>
  );
};

export default page;
