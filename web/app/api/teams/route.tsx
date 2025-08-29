import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const teams = await prisma.team.findMany();
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

    // create team
    const team = await prisma.team.create({
      data: {
        teamName: body.teamName,
        description: body.description,
        teamLeadId: body.teamLeadId || null, // optional
        members: body.members
          ? {
              create: body.members.map(
                (member: { userId: string; role?: string }) => ({
                  userId: member.userId,
                  role: member.role ?? "member",
                })
              ),
            }
          : undefined,
      },
      include: {
        teamLead: true,
        members: true,
      },
    });

    return NextResponse.json(team, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong", details: (error as Error).message },
      { status: 500 }
    );
  }
}
