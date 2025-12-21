import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";


export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  // fetch data from a database
  // if not found, return 404 error
  // else return data
   const { id } = await params;
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  return NextResponse.json(user)
}


