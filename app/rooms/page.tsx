import React from 'react';
import Grid from '../components/grid';
import prisma from '@/prisma/client';

const Home = async () => {
  const rooms = await prisma.room.findMany({
    orderBy: { roomNum: 'asc' }
  });

  const patients = await prisma.patient.findMany({
    orderBy: { id: 'asc' }
  });

  return (
    <div>
      <Grid rooms={rooms} patients={patients} />
    </div>
  );
};

export default Home;
