'use client';

import React, { useEffect, useState } from 'react';
import prisma from '@/prisma/client';
import axios from 'axios';
import { room } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Recurring from './components/recurringOrders';
import StepOne from './steps/stepOne';
import StepTwo from './steps/stepTwo';
import StepThree from './steps/stepThree';
import StepFour from './steps/stepFour';
import StepFive from './steps/stepFive';
import StepSix from './steps/stepSix';

interface ProtocolProps {
  currRoom: room;
}

const Protocol = ({ currRoom }: ProtocolProps) => {
  const [step, setStep] = useState(currRoom.step || 1);
  const [potassium, setPotassium] = useState(-1);
  const [anionGap, setAnionGap] = useState(-1);
  const [weight, setWeight] = useState(-1);
  const [rate, setRate] = useState(-1);
  const [bloodGlucose, setBloodGlucose] = useState(-1);
  const [bloodGlucoseTime, setBloodGlucoseTime] = useState(-1);
  const [phosphorus, setPhosphorus] = useState(-1);
  const [bmp, setBMP] = useState(-1);
  const [serumKetones, setSerumKetones] = useState(-1);
  const [BMPqTime, setBMPqTime] = useState(Date.now());
  const [PqTime, setPqTime] = useState(Date.now()); //phosphorus q time
  const [PqCount, setPqCount] = useState(-1); //phosphorus q count
  const [sKqTime, setsKqTime] = useState(Date.now()); //Serum Ketones q time
  const [sKqCount, setsKqCount] = useState(-1); //Serum Ketones q count
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleOnSubmit = async (step: number) => {
    setStep(step + 1);
    currRoom.step = step + 1;
    try {
      await axios.patch('/api/room/' + currRoom.id, currRoom);
    } catch (error) {
      console.log(error);
    }
  };

  const handleReset = async () => {
    setStep(1);
    currRoom.step = 1;
    try {
      await axios.patch('/api/room/' + currRoom.id, currRoom);
    } catch (error) {
      console.log(error);
    }
  };

  //trying to figure out where to update it

  const renderSwitch = (step: number) => {
    switch (step) {
      case 1:
        return (
          <StepOne
            currRoom={currRoom}
            potassium={potassium}
            setPotassium={setPotassium}
          />
        );
      case 2:
        return <StepTwo />;
      case 3:
        return (
          <StepThree
            currRoom={currRoom}
            potassium={potassium}
            setPotassium={setPotassium}
            weight={weight}
            setWeight={setWeight}
            rate={rate}
            setRate={setRate}
          />
        );
      case 4:
        return (
          <StepFour
            currRoom={currRoom}
            weight={weight}
            setWeight={setWeight}
            rate={rate}
            setRate={setRate}
          />
        );
      case 5:
        return (
          <StepFive
            currRoom={currRoom}
            weight={weight}
            setWeight={setWeight}
            rate={rate}
            setRate={setRate}
            potassium={potassium}
            setPotassium={setPotassium}
            bloodGlucose={bloodGlucose}
            setBloodGlucose={setBloodGlucose}
          />
        );
      case 6:
        return <StepSix />;
      default:
        return <p>default</p>;
    }
  };

  return (
    <div className="">
      {renderSwitch(step)}
      <Recurring
        currRoom={currRoom}
        potassium={potassium}
        setPotassium={setPotassium}
        weight={weight}
        setWeight={setWeight}
        rate={rate}
        setRate={setRate}
        bloodGlucose={bloodGlucose}
        setBloodGlucose={setBloodGlucose}
        bGTime={bloodGlucoseTime}
        setBGTime={setBloodGlucoseTime}
        bmp={bmp}
        setBMP={setBMP}
        BMPTime={BMPqTime}
        setBMPTime={setBMPqTime}
        PhosTime={PqTime}
        setPhosTime={setPqTime}
        phosphorus={phosphorus}
        setPhosphorus={setPhosphorus}
        phosCount={PqCount}
        setPhosCount={setPqCount}
        serumKetones={serumKetones}
        setSerumKetones={setSerumKetones}
        sKqTime={sKqTime}
        setsKqTime={setsKqTime}
        sKqCount={sKqCount}
        setsKqCount={setsKqCount}

      />
      <Button onClick={() => handleOnSubmit(step)} className="mr-3">
        Next Step
      </Button>
      <Button onClick={() => handleReset()}>Step One</Button>
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

{
  /* <Carousel className="w-full max-w-xs">
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
      </Carousel> */
}
