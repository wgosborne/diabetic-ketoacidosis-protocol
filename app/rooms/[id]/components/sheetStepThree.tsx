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
  potassium: number;
  weight: number;
  rate: number;
  onNewPotassium: (value: number) => void;
  onNewWeight: (value: number) => void;
  onNewRate: (value: number) => void;
}

const SheetThree = ({
  currRoom,
  potassium,
  weight,
  rate,
  onNewPotassium,
  onNewWeight,
  onNewRate
}: SheetProps) => {
  //change this to not be any once I figure out what it is
  const handlePotassiumChange = async (event: any) => {
    onNewPotassium(event.target.value);
    currRoom.potassium = event.target.value;
    try {
      await axios.patch('/api/room/' + currRoom.id, currRoom);
    } catch (error) {
      console.log(error);
    }
  };

  const handleWeightChange = async (event: any) => {
    const currWeight = event.target.value;
    onNewWeight(currWeight);
    currRoom.weight = currWeight;

    switch (true) {

      case currWeight < 39.5:
        //setting to -1 if weight too low
        onNewRate(-1);
        currRoom.rate = -1;
        break;

      case currWeight < 44.5:
        onNewRate(4);
        currRoom.rate = 4;
        break;

        case currWeight < 49.5:
          onNewRate(4.5);
          currRoom.rate = 4.5;
          break;

          case currWeight < 54.5:
        onNewRate(5);
        currRoom.rate = 5;
        break;

        case currWeight < 59.5:
        onNewRate(5.5);
        currRoom.rate = 5.5;
        break;

        case currWeight < 64.5:
        onNewRate(6);
        currRoom.rate = 6;
        break;

        case currWeight < 69.5:
        onNewRate(6.5);
        currRoom.rate = 6.5;
        break;

        case currWeight < 74.5:
        onNewRate(7);
        currRoom.rate = 7;
        break;

        case currWeight < 79.5:
        onNewRate(7.5);
        currRoom.rate = 7.5;
        break;

        case currWeight < 84.5:
        onNewRate(8);
        currRoom.rate = 8;
        break;

        case currWeight < 89.5:
        onNewRate(8.5);
        currRoom.rate = 8.5;
        break;

        case currWeight < 94.5:
        onNewRate(9);
        currRoom.rate = 9;
        break;

        case currWeight < 99.5:
        onNewRate(9.5);
        currRoom.rate = 9.5;
        break;

        case currWeight < 104.5:
        onNewRate(10);
        currRoom.rate = 10;
        break;

        case currWeight < 109.5:
        onNewRate(10.5);
        currRoom.rate = 10.5;
        break;

        case currWeight < 114.5:
        onNewRate(11);
        currRoom.rate = 11;
        break;

        case currWeight < 119.5:
        onNewRate(11.5);
        currRoom.rate = 11.5;
        break;

        case currWeight < 124.5:
        onNewRate(12);
        currRoom.rate = 12;
        break;

        case currWeight < 129.5:
        onNewRate(12.5);
        currRoom.rate = 12.5;
        break;

        case currWeight < 134.5:
        onNewRate(13);
        currRoom.rate = 13;
        break;

        case currWeight < 139.5:
        onNewRate(13.5);
        currRoom.rate = 13.5;
        break;

        case currWeight < 144.5:
        onNewRate(14);
        currRoom.rate = 14;
        break;

        case currWeight < 149.5:
        onNewRate(14.5);
        currRoom.rate = 14.5;
        break;

        case currWeight >= 149.5:
        onNewRate(15);
        currRoom.rate = 15;
        break;

      default:
        //setting to 999 if it hits default
        onNewRate(999);
        currRoom.rate = 999;
        break;

    };

    try {
      await axios.patch('/api/room/' + currRoom.id, currRoom);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Button>Start Here</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Potassium Primary Fluid Adjustment</SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          {/* figure out how to add the apostrophe */}
          <Label className="mb-2">Enter the patients K+ level </Label>
          <Input
            className="mt-2 mb-4"
            type="number"
            placeholder="Enter as a decimal number"
            onChange={handlePotassiumChange}
          />
          <Label className="mb-2">Enter the patients weight </Label>
          <Input
            className="mt-2 mb-4"
            type="number"
            placeholder="Enter in kilograms"
            onChange={handleWeightChange}
          />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SheetThree;
