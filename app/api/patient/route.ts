import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/client';

export async function GET(request: NextRequest) {
    const patients = await prisma.patient.findMany({ orderBy: { id: 'asc' } });
    return NextResponse.json(patients);
 }

export async function POST(request: NextRequest) {

    //not using this yet but will need it for making patients

  const body = await request.json();

  const newPatient = await prisma.patient.create({
    data: { id: body.id, name: body.name },
  });

  return NextResponse.json(newPatient, { status: 201 });
}