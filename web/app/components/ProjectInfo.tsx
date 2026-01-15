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
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-gray-200 pb-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-projsync-green">
          Projects
        </h2>
        <button className="flex items-center justify-center gap-2 bg-projsync-green hover:bg-green-600 text-white rounded-lg px-4 py-2.5 font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 active:scale-95 self-start sm:self-auto">
          <IoIosArrowDown className="h-5 w-5" />
          <span>Assign Status</span>
        </button>
      </div>

      <div className="space-y-6">
        {/* Project Name */}
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-projsync-green mb-1">
            {project.projectName}
          </h1>
          <p className="text-xs md:text-sm text-gray-500">
            Created {new Date(project.created_at).toLocaleDateString()}
          </p>
        </div>

        {/* Description Section */}
        <div>
          <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">
            Description
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            {project.description || "No description provided"}
          </p>
        </div>

        {/* Members Section */}
        <div>
          <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-3">
            Team Members
          </h3>
          <div className="space-y-2">
            {project.members && project.members.length > 0 ? (
              project.members.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Image
                    src={Image4}
                    alt={member.user.username || "Member"}
                    className="h-8 w-8 rounded-full flex-shrink-0 object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-gray-900 truncate">
                      {member.user.username || "Unknown"}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {member.user.email}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <p className="text-sm text-gray-500">No members assigned yet</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
