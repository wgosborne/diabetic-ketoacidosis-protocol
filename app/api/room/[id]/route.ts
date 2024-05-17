import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { room } from "@prisma/client";

export async function GET(request: NextRequest) {
    const rooms = await prisma.room.findMany({ orderBy: { id: 'asc' } });
    return NextResponse.json(rooms);
 }

export async function PATCH(request: NextRequest,
    { params }: { params: { id: number } }) {

    const body = await request.json();
    console.log(body)

    const updatedRoom = await prisma.room.update({
    where: {
        //@ts-ignore
      id: parseInt(params.id),
    },
    data: {
      step: parseInt(body.step),
    },
  });

  return NextResponse.json(updatedRoom);
}


