"use client";

import React, { useEffect, useState } from "react";
import { IoAddOutline, IoSearch } from "react-icons/io5";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { Spinner } from "@/app/components/ui/spinner";

type Project = {
  id: string;
  ownerId: string;
  projectName: string;
  description: string;
  created_at: string;
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();
        console.log("Fetched projects:", data);
        setProjects(data.projects || data || []); // Fallback to data if no projects key
        console.log("Set projects state:", data.projects || data || []);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError("Failed to load projects. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="">
      <div className="flex items-center justify-between border-b pb-2 mb-5">
        <p className="text-projsync-green font-kumbh-sans text-2xl">Projects</p>
        <Link href="/dashboard/projects/addproject">
          <button className="bg-projsync-green flex w-8 h-8 sm:h-10 sm:w-28 rounded-lg items-center justify-center">
            <IoAddOutline className="text-white size-6 font-extrabold sm:mr-1" />
            <span className="text-white font-manrope text-xs font-medium hidden sm:block">
              New Project
            </span>
          </button>
        </Link>
      </div>

      <div className="flex justify-between mb-5">
        <div className="relative flex items-center">
          <IoSearch className="absolute left-2 text-gray-400 size-5" />
          <input
            type="text"
            placeholder="Search Projects"
            className="size-8 sm:w-72 sm:h-12 border bg-white focus:outline-none border-gray-200 rounded-lg pl-8 shadow-xl"
          />
        </div>
        <button className="bg-projsync-green h-10 w-32 font-semibold rounded-lg text-xs text-white p-1">
          View Project Status
        </button>
      </div>

      {loading ? (
        <Spinner />
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 ">
          {projects.map((project) => (
            <Link key={project.id} href={`/dashboard/projects/${project.id}`}>
              <ProjectCard projectName={project.projectName} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
