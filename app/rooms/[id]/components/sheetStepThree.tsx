import React, { useState } from 'react';
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

interface SheetProps {
  potassium: number;
  weight: number;
  onNewPotassium: (value: number) => void;
  onNewWeight: (value: number) => void;
}

const SheetThree = ({
  potassium,
  weight,
  onNewPotassium,
  onNewWeight
}: SheetProps) => {
  //change this to not be any once I figure out what it is
  const handlePotassiumChange = (event: any) => {
    console.log(event.target.value);
    onNewPotassium(event.target.value);
  };

  const handleWeightChange = (event: any) => {
    console.log(event.target.value);
    onNewWeight(event.target.value);
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
