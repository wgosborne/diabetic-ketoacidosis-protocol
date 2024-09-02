import React from 'react';
import prisma from '@/prisma/client';
import Protocol from './protocol';

const page = async ({ params }: { params: { id: number } }) => {
  const emptyPatient = {
    id: -1,
    name: 'VACANT',
    status: -1
  };
  const thisRoom = await prisma.room.findUnique({
    where: {
      //@ts-ignore because it think its an int but it still makes me parse
      id: parseInt(params.id)
    }
  });

  if (!thisRoom) {
    throw new Error('Room not found');
  }

  try {
    const thisPatient = await prisma.patient.findUnique({
      where: {
        //@ts-ignore because it think its an int but it still makes me parse
        id: thisRoom?.patientID
      }
    });

    if (!thisPatient) {
      throw new Error('Patient not found');
    }

    return (
      <div>
        <Protocol currRoom={thisRoom} currPatient={thisPatient} />
      </div>
    );
  } catch (error) {
    console.error('Patient not found:', error);
    return (
      <div>
        <Protocol currRoom={thisRoom} currPatient={emptyPatient} />
      </div>
    );
  }
};

// const findWholePatient = (patients: patient[], patientID: number | null) => {

// }

export default page;
