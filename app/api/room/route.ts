import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/client';

export async function GET(request: NextRequest) {
    const rooms = await prisma.room.findMany({ orderBy: { id: 'asc' } });
    return NextResponse.json(rooms);
 }

export async function POST(request: NextRequest) {

  const body = await request.json();

  const newRoom = await prisma.room.create({
    data: { step: body.step, roomNum: body.roomNum },
  });

  return NextResponse.json(newRoom, { status: 201 });
}