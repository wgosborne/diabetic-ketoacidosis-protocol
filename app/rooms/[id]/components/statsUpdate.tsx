import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { room } from '@prisma/client';

interface UpdateProps {
  currRoom: room;
  potassium: number;
  weight: number;
  rate: number;
  bloodGlucose: number;
  onNewPotassium: (value: number) => void;
  onNewWeight: (value: number) => void;
  onNewRate: (value: number) => void;
  onNewBloodGlucose: (value: number) => void;
}

const Update = ({
  currRoom,
  potassium,
  weight,
  rate,
  bloodGlucose,
  onNewPotassium,
  onNewWeight,
  onNewRate,
  onNewBloodGlucose
}: UpdateProps) => {
  return (
    <div>
      <div className="rounded-md shadow-md flex items-center my-3 justify-center">
        <div className='ml-3'>
          <div className="justify-center">
            <Label>Enter the patients Blood Glucose</Label>
          </div>
          <Input
            className="mt-2 mb-4"
            type="number"
            placeholder="Enter in mg/dL"
          />
        </div>

        <div className='ml-5'>
          <div className="ml-3 justify-center">
            <Label>Enter the patients weight</Label>
          </div>
          <Input
            className="mt-2 mb-4"
            type="number"
            placeholder="Enter in kilograms"
          />
        </div>

      </div>
    </div>
  );
};

export default Update;
