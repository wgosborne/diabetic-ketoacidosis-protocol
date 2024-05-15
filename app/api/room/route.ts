import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { room } from "@prisma/client";

export async function PUT(currRoom: room, currStep: number) {
   prisma.room.update({
    where: {
      id: currRoom.id,
    },
    data: {
      step: currStep,
    },
  })
}


