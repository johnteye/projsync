"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import Image4 from "@/public/project-card4.svg";
import { Spinner } from "@/app/components/ui/spinner";

interface Project {
  id: string;
  ownerId: string;
  projectName: string;
  description: string;
  created_at: string;
  members?: Array<{
    id: string;
    userId: string;
    projectId: string;
    user: {
      id: string;
      username: string;
      email: string;
    };
  }>;
}

interface ProjectInfoProps {
  id: string;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({ id }) => {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`/api/projects/${id}`);
        const data = await res.json();
        console.log("Fetched project:", data);
        setProject(data.project || data); // Adjust based on API response structure
      } catch (error) {
        console.error("Error fetching project:", error);
        setError("Failed to load project details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!project) {
    return <p>No project found.</p>;
  }

  return (
    <div>
      <div className="flex items-center justify-between border-b pb-2 mb-5">
        <p className="text-projsync-green font-kumbh-sans text-2xl">Projects</p>
        <button className="bg-projsync-green flex w-8 h-8 sm:h-10 sm:w-28 rounded-lg items-center justify-center">
          <IoIosArrowDown className="text-white size-4 font-extrabold sm:mr-1" />
          <span className="text-white font-manrope text-xs font-medium hidden sm:block">
            Assign Status
          </span>
        </button>
      </div>
      <div>
        <h1 className="font-manrope font-medium text-3xl text-projsync-green mb-4">
          {project.projectName}
        </h1>
        <h4 className="font-manrope text-projsync-green font-normal text-sm mb-4">
          Description
        </h4>
        <p className="font-poppins font-light text-gray-700 text-left text-sm/7 w-8/12 mb-4">
          {project.description}
        </p>
        <h3 className="font-kumbh-sans text-projsync-green font-medium text-sm mb-4">
          Members
        </h3>
        <div className="space-y-3 mb-4">
          {project.members && project.members.length > 0 ? (
            project.members.map((member) => (
              <div key={member.id} className="flex">
                <Image src={Image4} alt="profile" className="size-7 mr-5" />
                <p className="font-kumbh-sans">
                  {member.user.username || member.user.email}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No members assigned</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
