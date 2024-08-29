'use client';

import React from 'react';
import { room, patient } from '@prisma/client';
import { SimpleGrid, Text } from '@chakra-ui/react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

interface GridProps {
  rooms: room[];
  patients: patient[];
}

const Grid = ({ rooms, patients }: GridProps) => {
  const router = useRouter();

  const handleOnClick = (e: number) => {
    router.push(`/rooms/` + e);
  };

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
    >
      {rooms.map((room: room) => (
        <Card key={room.id}>
          <CardHeader>
            <CardTitle>{room.roomNum}</CardTitle>
            <CardDescription>
              {findPatient(patients, room.patientID)}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <Button onClick={() => handleOnClick(room.id)}>Select</Button>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
};

const findPatient = (patients: patient[], patientID: number | null) => {
  //let found = false;
  // patients.forEach((pat) => {
  //   if (pat.id == patientID) {
  //     found = true;
  //     console.log(pat.name);
  //     console.log(typeof pat.name);
  //     return pat.name;
  //   }
  // });

  // if (!found) {
  //   return 'VACANT';
  // }

  let currPat = patients.filter((pat) => pat.id == patientID);

  let currName = currPat[0]?.name;

  if (currName != undefined) {
    return currName;
  } else {
    return 'VACANT';
  }

  // return currPat[0].name ? currPat[0].name : 'VACANT';
};

export default Grid;
