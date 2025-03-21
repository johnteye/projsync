import React from "react";
import { IoAddOutline, IoSearch } from "react-icons/io5";
import TeamsTable from "@/components/TeamsTable"

const Teams = () => {
  return (
    <div>
      <div className="flex items-center justify-between border-b pb-2">
        <p className="text-projsync-green font-kumbh-sans text-2xl">Teams</p>
        <button className="bg-projsync-green flex w-8 h-8 sm:h-10 sm:w-28 rounded-lg items-center justify-center">
          <IoAddOutline className="text-white size-6 font-extrabold sm:mr-1" />
          <span className="text-white font-manrope text-xs  font-medium hidden sm:block">
            New Group
          </span>
        </button>
      </div>
      <div>
      </div>
      <div>
        <TeamsTable />
      </div>
    </div>
  );
};

export default Teams;
