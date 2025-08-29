import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest){
    const projects = await prisma.project.findMany();
    return NextResponse.json(projects)
}

export async function POST(request: NextRequest){
    const body = await request.json()
    // validate
    // if invalid, return 400
    // else return data created
    if (!body){
        return NextResponse.json({error: "Invalid Input"} , {status: 400})

    }

    const { ownerId, projectName, description, members } = body;
    

    const project = await prisma.project.create({
      data: {
        ownerId, // must match your schema field
        projectName,
        description,
      },
    });
    return NextResponse.json(project, {status: 201})

    
}