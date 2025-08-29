"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoAddOutline } from "react-icons/io5";
import { TeamsInfo, columns } from "@/app/components/table/columns";
import { DataTable } from "@/app/components/table/data-table";
import profileImage from "@/public/profile-image.svg";

// Move data outside the component
const getDummyData = (): TeamsInfo[] => {
  return [
    {
      id: "1",
      image: { url: profileImage, alt: "Team Lead profile" },
      team: "DevOps",
      projectLead: "Jordan Mitchell",
      updatedOn: new Date("2024-03-09T04:10:00Z"),
    },
    {
      id: "2",
      image: { url: profileImage, alt: "Team Lead profile" },
      team: "UI/UX",
      projectLead: "Jordan Mitchell",
      updatedOn: new Date("2024-03-09T04:10:00Z"),
    },
    {
      id: "3",
      image: { url: profileImage, alt: "Team Lead profile" },
      team: "Backend Development",
      projectLead: "Jordan Mitchell",
      updatedOn: new Date("2024-03-09T04:10:00Z"),
    },
    {
      id: "4",
      image: { url: profileImage, alt: "Team Lead profile" },
      team: "Frontend Development",
      projectLead: "John Mitchell",
      updatedOn: new Date("2024-03-09T04:10:00Z"),
    },
    {
      id: "5",
      image: { url: profileImage, alt: "Team Lead profile" },
      team: "Product Management",
      projectLead: "Jordan Mitchell",
      updatedOn: new Date("2024-03-09T04:10:00Z"),
    },
  ];
};

const Teams = () => {
  const [data, setData] = useState<TeamsInfo[]>([]);

  useEffect(() => {
    // Fetch data when component mounts
    setData(getDummyData());

    // If you need to fetch from an API instead:
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch('/api/teams');
    //     const result = await response.json();
    //     setData(result);
    //   } catch (error) {
    //     console.error('Error fetching teams data:', error);
    //   }
    // };
    // fetchData();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between border-b pb-2">
        <p className="text-projsync-green font-kumbh-sans text-2xl">Teams</p>
       <Link href="/dashboard/teams/addteam">
          <button className="bg-projsync-green flex w-8 h-8 sm:h-10 sm:w-28 rounded-lg items-center justify-center">
            <IoAddOutline className="text-white size-6 font-extrabold sm:mr-1" />
            <span className="text-white font-manrope text-xs font-medium hidden sm:block">
              New Team
            </span>
          </button>
       </Link>
      </div>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Teams;
