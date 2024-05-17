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
  onNew: (value: number) => void;
}

const MySheet = ({ currRoom, potassium, onNew }: SheetProps) => {
  //change this to not be any once I figure out what it is
  const handleChange = async (event: any) => {
    onNew(event.target.value);
    currRoom.potassium = event.target.value;
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
            onChange={handleChange}
          />
          {/* may not need the button because it doesnt do anything */}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MySheet;
