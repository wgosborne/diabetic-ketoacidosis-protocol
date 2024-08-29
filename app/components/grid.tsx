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
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
      //lg:grid-cols-5
    >
      {rooms.map((room: room) => (
        <Card key={room.id} className="flex flex-col">
          <CardHeader>
            <CardTitle>{room.roomNum}</CardTitle>
            <CardDescription>
              {findPatient(patients, room.patientID)}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <b className="text-sm">Serum Ketone Time: </b>
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              {room.sKqTime || 'NULL'}
            </code>
            <br />
            <b className="text-sm">Phosphorous Time: </b>
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              {room.PqTime || 'NULL'}
            </code>
            <br />
            <b className="text-sm">BMP Time: </b>
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              {room.BMPqTime || 'NULL'}
            </code>
            <br />
            <b className="text-sm">Blood Glucose Time: </b>
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              {room.bloodGlucoseTime || 'NULL'}
            </code>
          </CardContent>
          <CardFooter className="padding-10">
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
