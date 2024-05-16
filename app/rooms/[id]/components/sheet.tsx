import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface SheetProps {
  potassium: number;
  onChange: (value: number) => void;
}

const MySheet = ({ potassium, onChange }: SheetProps) => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>Start Here</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Potassium Primary Fluid Adjustment</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
          {/* figure out how to add the apostrophe */}
          <Label>Enter the patients K+ level </Label>
          <Input type="potassium" placeholder="Enter as a decimal number" />
          <Button onClick={() => onChange(5.5)}></Button>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MySheet;
