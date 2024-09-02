import React from 'react';
import prisma from '@/prisma/client';
import Protocol from './protocol';

const page = async ({ params }: { params: { id: number } }) => {
  try {
    const thisRoom = await prisma.room.findUnique({
      where: {
        //@ts-ignore because it think its an int but it still makes me parse
        id: parseInt(params.id)
      }
    });

    const thisPatient = await prisma.patient.findUnique({
      where: {
        //@ts-ignore because it think its an int but it still makes me parse
        id: thisRoom?.patientID
      }
    });

    if (!thisRoom) {
      throw new Error('Room not found');
    }

    if (!thisPatient) {
      throw new Error('Patient not found');
    }

    return (
      <div>
        <Protocol currRoom={thisRoom} currPatient={thisPatient} />
      </div>
    );
  } catch (error) {
    console.error('Error fetching room:', error);
    return <div>Error: Room Information Not Found</div>;
  }
};

// const findWholePatient = (patients: patient[], patientID: number | null) => {

// }

export default page;
