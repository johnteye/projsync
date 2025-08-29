"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoAddOutline } from "react-icons/io5";
import { TeamsInfo, columns } from "@/app/components/table/columns";
import { DataTable } from "@/app/components/table/data-table";

const Teams = () => {
  const [data, setData] = useState<TeamsInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch("/api/teams", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch teams");
        }

        const result: TeamsInfo[] = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching teams:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  if (loading) {
    return <p className="text-center py-10">Loading teams...</p>;
  }

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
