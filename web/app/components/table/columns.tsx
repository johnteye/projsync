"use client";

import { ArrowUpDown } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/app/components/ui/button";
import { Checkbox } from "@/app/components/ui/checkbox";
import Image from "next/image";

export type Image = {
  url: string;
  alt: string;
};

export type TeamsInfo = {
  id: string;
  image?: Image; // optional since API doesn’t send it yet
  teamName: string;
  teamLeadId: string;
  teamLead?: {
    id: string;
    username: string;
    email: string;
  };
  description: string;
  created_at: string; // comes as ISO string
};

export const columns: ColumnDef<TeamsInfo>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "image",
    header: () => <div className="font-light font-manrope">Image</div>,
    cell: () => (
      <Image
        src={"/profile-image.svg"} // don't include /public
        alt="Team Lead"
        width={32}
        height={32}
        className="size-8"
      />
    ),
  },
  {
    accessorKey: "teamName",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="font-light font-manrope"
      >
        Team
        <ArrowUpDown className="ml-2" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-left font-light font-manrope text-sm text-gray-400">
        {row.getValue("teamName")}
      </div>
    ),
  },
  {
    accessorKey: "teamLeadId",
    header: () => (
      <div className="font-light font-manrope text-left">Team Lead</div>
    ),
    cell: ({ row }) => {
      const teamLead = row.original.teamLead;
      return (
        <div className="text-left font-light font-manrope text-xs text-gray-400">
          {teamLead?.username || "Unassigned"}
        </div>
      );
    },
  },
  {
    accessorKey: "created_at",
    header: () => <div className="text-right font-light mr-8">Created On</div>,
    cell: ({ row }) => {
      const dateStr = row.getValue("created_at") as string;
      const createdDate = new Date(dateStr);
      return (
        <div className="text-right font-light font-manrope text-gray-400 text-xs">
          {createdDate.toLocaleString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })}
        </div>
      );
    },
  },
];
