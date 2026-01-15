"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Plus,
  FolderOpen,
  Users,
  MessageSquare,
} from "lucide-react";

// 👇 using your app-level UI folder
import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/app/components/ui/avatar";
import { Badge } from "@/app/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import { Button } from "@/app/components/ui/button";
import { useSession } from "next-auth/react";

// Replace with your real avatar URLs
const AV1 = "/avatars/user.png";
const AV2 = "/avatars/man.png";
const AV3 = "/avatars/woman.png";
const AV4 = "/avatars/hacker.png";

const projectCards = [
  {
    name: "E-Commerce Platform",
    lead: "Sarah Johnson",
    avatars: [AV1, AV2, AV3, AV4],
    count: 6,
  },
  {
    name: "Mobile Banking App",
    lead: "Marcus Chen",
    avatars: [AV4, AV1, AV2, AV3],
    count: 4,
  },
  {
    name: "AI Dashboard",
    lead: "Emily Rodriguez",
    avatars: [AV3, AV4],
    count: 8,
  },
  {
    name: "Customer Portal",
    lead: "David Kim",
    avatars: [AV2, AV1, AV4],
    count: 3,
  },
];

const statusColor: Record<string, string> = {
  Documentation: "bg-yellow-500",
  Design: "bg-blue-500",
  "API Integration": "bg-red-500",
  "User Research": "bg-purple-500",
  "Requirements Gathering": "bg-teal-500",
};

const projectStatusData = [
  {
    name: "Kofi Manu Sarpong",
    owner: "sgdfhgk@gmail.com",
    status: "Documentation",
    teamLead: "+233 275465768",
    dateUpdated: "21-02-2025",
  },
  {
    name: "Kofi Manu Sarpong",
    owner: "sgdfhgk@gmail.com",
    status: "Design",
    teamLead: "+1 4159876543",
    dateUpdated: "21-02-2025",
  },
  {
    name: "Kofi Manu Sarpong",
    owner: "sgdfhgk@gmail.com",
    status: "API Integration",
    teamLead: "+44 7712345678",
    dateUpdated: "21-02-2025",
  },
  {
    name: "Kofi Manu Sarpong",
    owner: "sgdfhgk@gmail.com",
    status: "Documentation",
    teamLead: "+44 7712345678",
    dateUpdated: "21-02-2025",
  },
  {
    name: "Kofi Manu Sarpong",
    owner: "sgdfhgk@gmail.com",
    status: "User Research",
    teamLead: "+44 7712345678",
    dateUpdated: "21-02-2025",
  },
  {
    name: "Kofi Manu Sarpong",
    owner: "sgdfhgk@gmail.com",
    status: "Requirements Gathering",
    teamLead: "+44 7712345678",
    dateUpdated: "21-02-2025",
  },
];

// helper for date/time string
function useNowString() {
  const [now, setNow] = React.useState(() => new Date());
  React.useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(id);
  }, []);
  const date = now.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "2-digit",
  });
  const time = now.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
  });
  return `${date} • ${time}`;
}

export default function AdminHomepage() {
  const nowStr = useNowString();
  const { status, data: session } = useSession();
  return (
    <div className="w-full space-y-6 md:space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 rounded-lg md:rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-4 right-12 w-20 h-20 bg-white/10 rounded-full animate-pulse" />
          <div className="absolute top-16 right-32 w-12 h-12 bg-white/5 rounded-full animate-pulse delay-300" />
          <div className="absolute bottom-8 right-16 w-8 h-8 bg-white/15 rounded-full animate-pulse delay-700" />
          <div className="absolute top-8 left-1/2 w-6 h-6 bg-white/10 rounded-full animate-pulse delay-500" />
          <div className="absolute bottom-12 left-3/4 w-4 h-4 bg-white/20 rounded-full animate-pulse delay-1000" />
        </div>

        {/* Geometric Pattern */}
        <div className="absolute right-0 top-0 w-64 h-full opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <pattern
                id="grid"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-start justify-between gap-6">
            <div className="flex-1 w-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs md:text-sm text-cyan-100 font-medium">
                  All systems operational
                </span>
              </div>

              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 leading-tight">
                Welcome back,{" "}
                <span className="text-cyan-200 block md:inline">
                  {" "}
                  {session?.user?.name}
                </span>
              </h1>
              <p className="text-cyan-100 text-sm md:text-base mb-6 max-w-md leading-relaxed">
                Ready to ship something amazing? Your team is waiting.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-8">
                <div className="text-left">
                  <div className="text-xl md:text-2xl font-semibold mb-1">
                    4
                  </div>
                  <div className="text-xs text-cyan-200 uppercase tracking-wide">
                    Active Projects
                  </div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-cyan-300/30" />
                <div className="text-left">
                  <div className="text-xl md:text-2xl font-semibold mb-1">
                    21
                  </div>
                  <div className="text-xs text-cyan-200 uppercase tracking-wide">
                    Team Members
                  </div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-cyan-300/30" />
                <div className="text-left">
                  <div className="text-xl md:text-2xl font-semibold mb-1">
                    87%
                  </div>
                  <div className="text-xs text-cyan-200 uppercase tracking-wide">
                    On Track
                  </div>
                </div>
              </div>
            </div>

            {/* Action Area */}
            <div className="flex flex-col md:flex-row items-start md:items-end gap-3 w-full md:w-auto md:shrink-0">
              <Link
                href="/dashboard/projects/addproject"
                className="w-full md:w-auto"
              >
                <Button className="w-full md:w-auto bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm transition-all duration-200">
                  Start New Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <div className="text-xs text-cyan-200 whitespace-nowrap">
                {nowStr}
              </div>
            </div>
          </div>
        </div>

        {/* Floating Icon Elements */}
        <div className="absolute bottom-6 left-8 opacity-20">
          <div className="flex items-center gap-2">
            <FolderOpen className="w-5 h-5" />
            <Users className="w-5 h-5" />
            <MessageSquare className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Projects grid */}
      <section className="w-full">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-teal-600">
            Projects
          </h2>
          <Link
            href="/dashboard/projects"
            className="inline-flex items-center border border-teal-200 text-teal-600 hover:bg-teal-50 rounded-lg px-3 py-2 text-sm transition-colors"
          >
            View All <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {projectCards.map((p) => (
            <Card
              key={p.name}
              className="group hover:shadow-lg transition-all duration-200 border-gray-200 rounded-lg overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <h3 className="font-semibold text-teal-600 group-hover:text-teal-700 transition-colors line-clamp-2">
                      {p.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">Project Lead</p>
                    <p className="text-sm text-gray-900 line-clamp-1">
                      {p.lead}
                    </p>
                  </div>
                  <button className="p-1 text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {p.avatars.slice(0, 3).map((src, i) => (
                      <Avatar key={i} className="w-7 h-7 border-2 border-white">
                        <AvatarImage src={src} />
                        <AvatarFallback>U{i + 1}</AvatarFallback>
                      </Avatar>
                    ))}
                    {p.count > 3 && (
                      <div className="w-7 h-7 rounded-full bg-teal-600 border-2 border-white flex items-center justify-center">
                        <span className="text-xs text-white font-medium">
                          +{p.count - 3}
                        </span>
                      </div>
                    )}
                  </div>
                  <span className="text-xs md:text-sm text-gray-500">
                    {p.count} members
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Project Status table */}
      <section className="w-full">
        <h2 className="text-xl md:text-2xl font-semibold text-teal-600 mb-6">
          Project Status
        </h2>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <Card className="rounded-lg border-gray-200 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-teal-50 hover:bg-teal-50">
                  <TableHead className="w-12"></TableHead>
                  <TableHead className="font-semibold text-gray-900 text-xs md:text-sm">
                    Project Name
                  </TableHead>
                  <TableHead className="font-semibold text-gray-900 text-xs md:text-sm">
                    Owner
                  </TableHead>
                  <TableHead className="font-semibold text-gray-900 text-xs md:text-sm">
                    Status
                  </TableHead>
                  <TableHead className="font-semibold text-gray-900 text-xs md:text-sm">
                    Team Lead
                  </TableHead>
                  <TableHead className="font-semibold text-gray-900 text-xs md:text-sm">
                    Date Updated
                  </TableHead>
                  <TableHead className="font-semibold text-gray-900 text-xs md:text-sm">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projectStatusData.map((row, i) => (
                  <TableRow
                    key={i}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <TableCell>
                      <div className="w-6 h-6 rounded bg-white border border-gray-300" />
                    </TableCell>
                    <TableCell className="font-medium text-gray-900 text-xs md:text-sm">
                      {row.name}
                    </TableCell>
                    <TableCell className="text-gray-600 text-xs md:text-sm">
                      {row.owner}
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={`${
                          statusColor[row.status]
                        } text-white border-0 text-xs`}
                      >
                        {row.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-600 text-xs md:text-sm">
                      {row.teamLead}
                    </TableCell>
                    <TableCell className="text-gray-600 text-xs md:text-sm">
                      {row.dateUpdated}
                    </TableCell>
                    <TableCell>
                      <Link
                        href="/dashboard/projects/123"
                        className="text-teal-600 hover:text-teal-700 font-medium text-xs md:text-sm"
                      >
                        View
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </section>

      {/* FAB to add a project */}
      <Link
        href="/dashboard/projects/addproject"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 rounded-full bg-teal-600 hover:bg-teal-700 active:scale-95 shadow-lg hover:shadow-xl transition-all grid place-items-center focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        aria-label="Add Project"
      >
        <Plus className="w-6 h-6 text-white" />
      </Link>
    </div>
  );
}
