import React, { useState } from 'react';
import axios from 'axios';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { room } from '@prisma/client';

interface SheetProps {
  currRoom: room;
  weight: number;
  onNewWeight: (value: number) => void;
  rate: number;
  onNewRate: (value: number) => void;
}

const SheetFour = ({ currRoom, weight, onNewWeight, rate, onNewRate }: SheetProps) => {

  const handleWeightChange = async(event: any) => {
    onNewWeight(event.target.value);
    currRoom.weight = event.target.value;
    try {
      await axios.patch('/api/room/' + currRoom.id, currRoom);
    } catch (error) {
      console.log(error);
    }
  };

  const calcRate = async(event: any) => {
    let weight = event.target.value;
    switch (true) {
      case weight < 39.5:
        onNewRate(-1);
        currRoom.rate = -1;
        try {
          await axios.patch('/api/room/' + currRoom.id, currRoom);
        } catch (error) {
          console.log(error);
        }
        // return false;
      case weight < 44.5:
        onNewRate(4);
        currRoom.rate = 4;
        try {
          await axios.patch('/api/room/' + currRoom.id, currRoom);
        } catch (error) {
          console.log(error);
        }
        break;
      // case weight < 49.5:
      //   onNewRate(4.5)
      //   return '4.5';
      // case weight < 54.5:
      //   onNewRate(5)
      //   return '5';
      // case weight < 59.5:
      //   onNewRate(5.5)
      //   return '5.5';
      // case weight < 64.5:
      //   onNewRate(6)
      //   return '6';
      // case weight < 69.5:
      //   onNewRate(6.5)
      //   return '6.5';
      // case weight < 74.5:
      //   onNewRate(7)
      //   return '7';
      // case weight < 79.5:
      //   onNewRate(7.5)
      //   return '7.5';
      // case weight < 84.5:
      //   onNewRate(8)
      //   return '8';
      // case weight < 89.5:
      //   onNewRate(8.5)
      //   return '8.5';
      // case weight < 94.5:
      //   onNewRate(9)
      //   return '9';
      // case weight < 99.5:
      //   onNewRate(9.5)
      //   return '9.5';
      // case weight < 104.5:
      //   onNewRate(10)
      //   return '10';
      // case weight < 109.5:
      //   onNewRate(10.5)
      //   return '10.5';
      // case weight < 114.5:
      //   onNewRate(11)
      //   return '11';
      // case weight < 119.5:
      //   onNewRate(11.5)
      //   return '11.5';
      // case weight < 124.5:
      //   onNewRate(12)
      //   return '12';
      // case weight < 129.5:
      //   onNewRate(12.5)
      //   return '12.5';
      // case weight < 134.5:
      //   onNewRate(13)
      //   return '13';
      // case weight < 139.5:
      //   onNewRate(13.5)
      //   return '13.5';
      // case weight < 144.5:
      //   onNewRate(14)
      //   return '14';
      // case weight < 149.5:
      //   onNewRate(14.5)
      //   return '14.5';
      // case weight >= 149.5:
      //   onNewRate(15)
      //   return '15';
      // default:
      //   return false;
    }
  }

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Button>Start Here</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Insulin Infusion Rate</SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          {/* figure out how to add the apostrophe */}
          <Label className="mb-2">Enter the patients weight </Label>
          <Input
            className="mt-2 mb-4"
            type="number"
            placeholder="Enter in kilograms"
            onChange={calcRate}
          />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SheetFour;
