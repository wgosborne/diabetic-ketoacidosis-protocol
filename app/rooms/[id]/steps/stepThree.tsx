'use client';

import React from 'react';
import SheetThree from '../components/sheetStepThree';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { room } from '@prisma/client';

interface StepThreeProps {
  currRoom: room;
  potassium: number;
  setPotassium: (value: number) => void;
  weight: number;
  setWeight: (value: number) => void;
}

const StepThree = ({
  currRoom,
  potassium,
  setPotassium,
  weight,
  setWeight
}: StepThreeProps) => {
  const createAdjustment = (potassium: number, weight: number) => {
    if (potassium < 3.5) {
      return false;
    } else {
      switch (true) {
        case weight < 39.5:
          return false;
        case weight < 43.5:
          return '6';
        case weight < 49.5:
          return '7';
        case weight < 56.5:
          return '8';
        case weight < 63.5:
          return '9';
        case weight < 69.5:
          return '10';
        case weight < 76.5:
          return '11';
        case weight < 83.5:
          return '12';
        case weight < 90.5:
          return '13';
        case weight < 96.5:
          return '14';
        case weight < 103.5:
          return '15';
        case weight < 109.5:
          return '16';
        case weight < 116.5:
          return '17';
        case weight < 123.5:
          return '18';
        case weight < 129.5:
          return '19';
        case weight < 137.5:
          return '20';
        case weight < 143.5:
          return '21';
        case weight < 149.5:
          return '22';
        case weight >= 149.5:
          return '23';
        default:
          return false;
      }
    }
  };

  return (
    <div>
      <div className="mb-3">
        <SheetThree
          currRoom={currRoom}
          potassium={potassium}
          weight={weight}
          onNewPotassium={setPotassium}
          onNewWeight={setWeight}
        />
      </div>

      <div className="mb-3">
        <Card>
          <CardHeader>
            <CardTitle>Insulin Bolus IVP</CardTitle>
            {/* <CardDescription>
              {potassium} {weight}
            </CardDescription> */}
          </CardHeader>
          <CardContent>
            {createAdjustment(potassium, weight) ? (
              <p>
                Give initial insulin bolus IV push ONE time of{' '}
                {createAdjustment(potassium, weight)} units
              </p>
            ) : potassium < 3.5 ? (
              <p>K+ is below 3.5, hold here</p>
            ) : (
              <p>Weight below 40kg, hold here</p>
            )}
          </CardContent>
          {/* <CardFooter>
            <p>Card Footer</p>
          </CardFooter> */}
        </Card>
      </div>
    </div>
  );
};

export default StepThree;
