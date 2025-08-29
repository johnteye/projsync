"use client";
import React from 'react'


import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/app/components/ui/avatar";
import { Badge } from "@/app/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table";

// Replace with your real avatar URLs if you have them
const AV1 = "/avatars/1.png";
const AV2 = "/avatars/2.png";
const AV3 = "/avatars/3.png";
const AV4 = "/avatars/4.png";

const projectCards = [
  { name: "E-Commerce Platform", lead: "Sarah Johnson", avatars: [AV1, AV2, AV3, AV4], count: 6 },
  { name: "Mobile Banking App",  lead: "Marcus Chen",   avatars: [AV4, AV1, AV2, AV3], count: 4 },
  { name: "AI Dashboard",        lead: "Emily Rodriguez", avatars: [AV3, AV4], count: 8 },
  { name: "Customer Portal",     lead: "David Kim",     avatars: [AV2, AV1, AV4], count: 3 },
];

const statusColor: Record<string, string> = {
  Documentation: "bg-yellow-500",
  Design: "bg-blue-500",
  "API Integration": "bg-red-500",
  "User Research": "bg-purple-500",
  "Requirements Gathering": "bg-teal-500",
};

const projectStatusData = [
  { name: "Kofi Manu Sarpong", owner: "sgdfhgk@gmail.com", status: "Documentation",          teamLead: "+233 275465768", dateUpdated: "21-02-2025" },
  { name: "Kofi Manu Sarpong", owner: "sgdfhgk@gmail.com", status: "Design",                 teamLead: "+1 4159876543", dateUpdated: "21-02-2025" },
  { name: "Kofi Manu Sarpong", owner: "sgdfhgk@gmail.com", status: "API Integration",        teamLead: "+44 7712345678", dateUpdated: "21-02-2025" },
  { name: "Kofi Manu Sarpong", owner: "sgdfhgk@gmail.com", status: "Documentation",          teamLead: "+44 7712345678", dateUpdated: "21-02-2025" },
  { name: "Kofi Manu Sarpong", owner: "sgdfhgk@gmail.com", status: "User Research",          teamLead: "+44 7712345678", dateUpdated: "21-02-2025" },
  { name: "Kofi Manu Sarpong", owner: "sgdfhgk@gmail.com", status: "Requirements Gathering", teamLead: "+44 7712345678", dateUpdated: "21-02-2025" },
];

const AdminHompage = () => {
  return (
    <div className=''>
      <div className="p-8 space-y-8">
  {/* Welcome banner */}
  <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-2xl p-8 text-white relative overflow-hidden">
    <div className="relative z-10">
      <h1 className="text-3xl font-medium mb-2">Welcome to the Portal, Ama</h1>
      <p className="text-cyan-100/90">Manage your projects and collaborate with your team</p>
    </div>
    <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20">
      <svg className="w-80 h-48" fill="currentColor" viewBox="0 0 367 218">
        <path d="M268.226 27.2256c0 0-2.37 4.359-3.066 4.547-.696.188-2.473 16.495 7.116 14.392 9.588-2.103 6.076-7.216 6.076-7.216s.166-5.631.533-6.008c.367-.377-10.247-5.915-10.247-5.915l-.412.203z" />
      </svg>
    </div>
  </div>

  {/* Projects grid */}
  <section>
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-semibold text-teal-600">Projects</h2>
      <Link href="/dashboard/projects" className="inline-flex items-center border border-teal-200 text-teal-600 hover:bg-teal-50 rounded-lg px-3 py-2">
        View All <ArrowRight className="w-4 h-4 ml-2" />
      </Link>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {projectCards.map((p) => (
        <Card key={p.name} className="group hover:shadow-lg transition-all duration-200 border-gray-200 rounded-xl overflow-hidden">
          <CardHeader className="pb-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-teal-600 group-hover:text-teal-700 transition-colors">{p.name}</h3>
                <p className="text-sm text-gray-500 mt-1">Project Lead</p>
                <p className="text-sm text-gray-900">{p.lead}</p>
              </div>
              <button className="p-1 text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">
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
                    <span className="text-xs text-white font-medium">+{p.count - 3}</span>
                  </div>
                )}
              </div>
              <span className="text-sm text-gray-500">{p.count} members</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>

  {/* Project Status table */}
  <section>
    <h2 className="text-2xl font-semibold text-teal-600 mb-6">Project Status</h2>
    <Card className="rounded-xl border-gray-200 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-teal-50 hover:bg-teal-50">
            <TableHead className="w-12"></TableHead>
            <TableHead className="font-semibold text-gray-900">Project Name</TableHead>
            <TableHead className="font-semibold text-gray-900">Owner</TableHead>
            <TableHead className="font-semibold text-gray-900">Status</TableHead>
            <TableHead className="font-semibold text-gray-900">Team Lead</TableHead>
            <TableHead className="font-semibold text-gray-900">Date Updated</TableHead>
            <TableHead className="font-semibold text-gray-900">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projectStatusData.map((row, i) => (
            <TableRow key={i} className="hover:bg-gray-50 transition-colors">
              <TableCell><div className="w-6 h-6 rounded bg-white border border-gray-300" /></TableCell>
              <TableCell className="font-medium text-gray-900">{row.name}</TableCell>
              <TableCell className="text-gray-600">{row.owner}</TableCell>
              <TableCell>
                <Badge className={`${statusColor[row.status]} text-white border-0`}>{row.status}</Badge>
              </TableCell>
              <TableCell className="text-gray-600">{row.teamLead}</TableCell>
              <TableCell className="text-gray-600">{row.dateUpdated}</TableCell>
              <TableCell>
                <Link href="/dashboard/projects/123" className="text-teal-600 hover:text-teal-700 font-medium">View more</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  </section>

  {/* FAB to add a team */}
  <Link
    href="/dashboard/projects/addtable"
    className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-teal-600 hover:bg-teal-700 shadow-lg hover:shadow-xl transition-all grid place-items-center"
    aria-label="Add Team"
  >
    <Plus className="w-6 h-6 text-white" />
  </Link>
</div>

    </div>
  )
}

export default AdminHompage
