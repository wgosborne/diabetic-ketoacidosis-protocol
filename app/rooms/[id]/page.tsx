import React from 'react';
import prisma from '@/prisma/client';
import Protocol from './protocol';

const page = async({ params }: { params: { id: number } }) => {
  try {
    const thisRoom = await prisma.room.findUnique({
      where: {
        //@ts-ignore because it think its an int but it still makes me parse
        id: parseInt(params.id)
      }
    });

    if (!thisRoom) {
      throw new Error('Room not found');
    }

    return (
      <div>
        <Protocol currRoom={thisRoom} />
      </div>
    );
  } catch (error) {
    console.error('Error fetching room:', error);
    return <div>Error: Room Information Not Found</div>;
  }
};

export default page;
