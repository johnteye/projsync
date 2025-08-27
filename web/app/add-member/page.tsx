"use client";
import React, { useState } from "react";
import AddMember from "@/app/components/AddMember";
import Sidebar from "@/app/components/Sidebar";

const AddMemberPage = () => {
  const [, setActiveSection] = useState("Home");
  return (
    <div className="w-full h-screen flex">
      <div className="w-[20%] flex justify-center p-4 ">
        <Sidebar />
      </div>
      <AddMember
        onSubmit={(data) => console.log(data)}
        onCancel={() => console.log("cancelled")}
      />
    </div>
  );
};

export default AddMemberPage;
