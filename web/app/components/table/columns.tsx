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
  image: Image;
  team:
    | "DevOps"
    | "UI/UX"
    | "Backend Development"
    | "Frontend Development"
    | "Product Management";
  projectLead: string;
  updatedOn: Date;
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
    cell: ({ row }) => {
      const image = row.getValue("image") as Image;
      return (
        <div>
          <Image
            src={image.url}
            alt={image.alt}
            width={10}
            height={10}
            className="size-8"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "team",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="font-light font-manrope"
        >
          Team
          <ArrowUpDown className="ml-2 " />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="text-left font-light font-manrope text-sm text-gray-400">
          {row.getValue("team")}
        </div>
      );
    },
  },
  {
    accessorKey: "projectLead",
    header: () => (
      <div className="font-light font-manrope text-left">Project Lead</div>
    ),
    cell: ({ row }) => {
      return (
        <div className="text-left font-light font-manrope text-xs text-gray-400">
          {row.getValue("projectLead")}
        </div>
      );
    },
  },
  {
    accessorKey: "updatedOn",
    header: () => <div className="text-right font-light mr-8">Updated On</div>,
    cell: ({ row }) => {
      const updatedDate = row.getValue("updatedOn") as Date;
      return (
        <div className="text-right font-light font-manrope text-gray-400 text-xs">
          {updatedDate.toLocaleString("en-US", {
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
