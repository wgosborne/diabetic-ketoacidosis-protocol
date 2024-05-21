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
      potassium: parseFloat(body.potassium),
      anionGap: parseInt(body.anionGap),
      rate: parseFloat(body.rate),
      weight: parseFloat(body.weight),
      bloodGlucose: parseFloat(body.bloodGlucose),
      BMPqTime: parseFloat(body.BMPqTime),
      PqTime: parseFloat(body.PqTime),
      PqCount: parseFloat(body.PqCount),
      sKqTime: parseFloat(body.sKqTime),
      sKqCount: parseFloat(body.sKqCount),
      POCBloodGqTime:parseFloat(body.POCBloodGqTime)
    },
  });

  return NextResponse.json(updatedRoom);
}


