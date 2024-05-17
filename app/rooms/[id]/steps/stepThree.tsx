'use client';

import React, { useState } from 'react';
import SheetThree from '../components/sheetStepThree';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

const StepThree = () => {
  const [potassium, setPotassium] = useState(-1);
  const [weight, setWeight] = useState(-1);

  const createAdjustment = (potassium: number, weight: number) => {
    if (potassium < 3.5) {
      return 'K+ is below 3.5, hold here';
    } else {
      switch (true) {
        case weight < 39.5:
          return 'Not heavy enought';
          break;
        case weight < 43.5:
          return '6';
          break;
        case weight < 49.5:
          return '7';
          break;
        case weight < 56.5:
          return '8';
          break;
        case weight < 63.5:
          return '9';
          break;
        case weight < 69.5:
          return '10';
          break;
        case weight < 76.5:
          return '11';
          break;
        case weight < 83.5:
          return '12';
          break;
        case weight < 90.5:
          return '13';
          break;
        case weight < 96.5:
          return '14';
          break;
        case weight < 103.5:
          return '15';
          break;
        case weight < 109.5:
          return '16';
          break;
        case weight < 116.5:
          return '17';
          break;
        case weight < 123.5:
          return '18';
          break;
        case weight < 129.5:
          return '19';
          break;
        case weight < 137.5:
          return '20';
          break;
        case weight < 143.5:
          return '21';
          break;
        case weight < 149.5:
          return '22';
          break;
        case weight >= 149.5:
          return '23';
          break;
        default:
          return 'invalid weight entered';
          break;
      }
    }
  };

  return (
    <div>
      <div className="mb-3">
        <SheetThree
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
            <CardDescription>
              {potassium} {weight}
            </CardDescription>
          </CardHeader>
          <CardContent>
            Give initial insulin bolus IV push ONE time of{' '}
            {createAdjustment(potassium, weight)} units
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
