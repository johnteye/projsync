import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params }: Props) {
  // fetch data from a database
  // if not found, return 404 error
  // else return data
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  return NextResponse.json(user)
}

export function PUT(request: NextRequest, { params }: Props) {
  // validate the request body
  // if invalid, return 400
  // Fetch the user with the given id
  // if user doesn't exist, return 404
  // update the user
  // return the update user
}
