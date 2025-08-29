import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Props {
  params: { id: string }; 
}

export async function GET(request: NextRequest, { params }: Props) {
  try {
    const project = await prisma.project.findUnique({
      where: { id: params.id },
      include: { owner: true }, 
    });

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong", details: (error as Error).message },
      { status: 500 }
    );
  }
}
