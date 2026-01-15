import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const teams = await prisma.team.findMany({
    include: {
      teamLead: true,
    },
  });
  return NextResponse.json(teams);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // validate
    if (!body?.teamName) {
      return NextResponse.json(
        { error: "Team name is required" },
        { status: 400 }
      );
    }

    console.log("Creating team with data:", body);

    // create team
    const team = await prisma.team.create({
      data: {
        teamName: body.teamName,
        description: body.description,
        teamLeadId: body.teamLeadId || null, // optional
        members: body.members
          ? {
              create: body.members.map((member: { userId: string }) => ({
                userId: member.userId,
              })),
            }
          : undefined,
      },
      include: {
        teamLead: true,
        members: true,
      },
    });

    console.log("Team created successfully:", team);
    return NextResponse.json(team, { status: 201 });
  } catch (error) {
    console.error("Error creating team:", error);
    return NextResponse.json(
      { error: "Something went wrong", details: (error as Error).message },
      { status: 500 }
    );
  }
}
