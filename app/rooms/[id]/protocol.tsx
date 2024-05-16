"use client";

import React, { useState } from 'react';
import prisma from '@/prisma/client';
import axios from 'axios';
import { room } from "@prisma/client";
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button"


interface ProtocolProps {
  currRoom: room;
}

const Protocol = ({currRoom}: ProtocolProps) => {

  const [step, setStep] = useState(currRoom.step || 1);

  const handleOnSubmit = (async(step: number) => {
    setStep(step + 1);
    //@ts-ignore
    //currRoom.step += 1
    try {
      await axios.patch('/api/room/' + currRoom.id, (step+1));
    } catch (error) {
      console.log(error)
    }
    console.log('time to show them step two')
  });

  const handleReset = (async() => {
    setStep(1);
    try {
      await axios.patch('/api/room/' + currRoom.id, 1);
    } catch (error) {
      console.log(error)
    }
    console.log('step reset to 1')
  });

  //trying to figure out where to update it

  const renderSwitch = (step: number) => {
    switch(step) {
      case 1:
        return (
          <p>step {step}</p>
        )
      case 2:
        return (
          <p>step 2</p>
        )
      case 3:
        return (
          <p>step 3</p>
        )
      case 4:
        return (
          <p>step 4</p>
        )
      case 5:
        return (
          <p>step 5</p>
        )
      case 6:
        return (
          <p>step 6</p>
        )
      default:
        return (
          <p>default</p>
        )
    }
  }

  return (
    <div className=''>
      {renderSwitch(step)}
      <Button onClick={() => handleOnSubmit(step)}>Submit</Button>
      <Button onClick={() => handleReset()}>Reset</Button>
    </div>
  );
};

export default Protocol;


// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious
// } from '@/components/ui/carousel';
// import { Card, CardContent } from '@/components/ui/card';
// import Fluids from './fluids';

{/* <Carousel className="w-full max-w-xs">
        <CarouselContent className="">
          <CarouselItem key={'1'} className="">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6 m-6">
                  <Fluids />
              </CardContent>
              <CarouselPrevious />
              <CarouselNext />
            </Card>
          </CarouselItem>
          <CarouselItem key={'2'} className="">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6 m-6">
                  <p>2</p>
              </CardContent>
              <CarouselPrevious />
              <CarouselNext />
            </Card>
          </CarouselItem>
          <CarouselItem key={'3'} className="">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                  <p>3</p>
              </CardContent>
              <CarouselPrevious />
              <CarouselNext />
            </Card>
          </CarouselItem>
        </CarouselContent>
      </Carousel> */}