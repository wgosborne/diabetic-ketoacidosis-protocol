"use client";

import React from 'react';
import { SimpleGrid, Text } from '@chakra-ui/react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';

const Grid = () => {
  const router = useRouter();
  const rooms = [112, 334, 6, 54];

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
      {rooms.map((room) => (
        <Card key={room}>
          <CardHeader>
            <CardTitle>{room}</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
          <Button onClick={() => handleOnClick(room)}>Select</Button>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default Grid;
