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
}

const SheetFour = ({ currRoom, weight, onNewWeight }: SheetProps) => {

  const handleWeightChange = async(event: any) => {
    onNewWeight(event.target.value);
    currRoom.weight = event.target.value;
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
            <SheetTitle>Insulin Infusion Rate</SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          {/* figure out how to add the apostrophe */}
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

export default SheetFour;
