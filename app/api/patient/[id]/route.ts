import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { patient } from "@prisma/client";

export async function GET(request: NextRequest) {
    const patients = await prisma.patient.findMany({ orderBy: { id: 'asc' } });
    return NextResponse.json(patients);
 }

export async function PATCH(request: NextRequest,
    { params }: { params: { id: number } }) {

    const body = await request.json();

    const updatedPatient = await prisma.patient.update({
    where: {
        //@ts-ignore
      id: parseInt(params.id),
    },
    data: {
      status: parseInt(body.status),
      name: body.name
    },
  });

  return NextResponse.json(updatedPatient);
}


