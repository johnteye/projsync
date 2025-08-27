import React from "react";
import { IoAddOutline } from "react-icons/io5";
import ProjectCard from "./ProjectCard";
import { IoSearch } from "react-icons/io5";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between border-b pb-2 mb-5">
        <p className="text-projsync-green font-kumbh-sans text-2xl">Projects</p>
        <button className="bg-projsync-green flex w-8 h-8 sm:h-10 sm:w-28 rounded-lg items-center justify-center">
          <IoAddOutline className="text-white size-6 font-extrabold sm:mr-1" />
          <span className="text-white font-manrope text-xs  font-medium hidden sm:block">
            New Group
          </span>
        </button>
      </div>
      <div className="flex justify-between mb-5">
        <div className="relative flex items-center">
          <IoSearch className="absolute left-2 text-gray-400 size-5" />
          <input
            type="text"
            placeholder="Search Groups"
            className="size-8 sm:w-72 sm:h-12 border bg-white focus:outline-none border-gray-200 rounded-lg pl-8 shadow-xl"
          />
        </div>
        <button className="bg-projsync-green h-10 w-32 font-semibold rounded-lg text-xs text-white p-1">
          View Project Status
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:gap-4 overflow-y-auto space-y-5">
        <Link href={"/project"}>
          <ProjectCard />
        </Link>
        <Link href={"/project"}>
          <ProjectCard />
        </Link>
        <Link href={"/project"}>
          <ProjectCard />
        </Link>
        <Link href={"/project"}>
          <ProjectCard />
        </Link>
        <Link href={"/project"}>
          <ProjectCard />
        </Link>
        <Link href={"/project"}>
          <ProjectCard />
        </Link>
        <Link href={"/project"}>
          <ProjectCard />
        </Link>
        <Link href={"/project"}>
          <ProjectCard />
        </Link>
        <Link href={"/project"}>
          <ProjectCard />
        </Link>

      </div>
    </div>
  );
};

export default Projects;
