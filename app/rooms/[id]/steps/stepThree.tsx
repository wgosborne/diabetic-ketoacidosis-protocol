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
      }
    //   } else if (potassium < 5.5 && potassium >= 4) {
    //     return '20 mEq KCI per liter of IV fluid.';
    //   } else if (potassium < 3.5) {
    //     return '40 mEq KCI per liter of IV fluid.';
    //   } else {
    //     return <p>ALERT!</p>;
    //   }
    };
  
    return (
      <div>
        <div className='mb-3'>
          <SheetThree potassium={potassium} weight={weight} onNewPotassium={setPotassium} onNewWeight={setWeight} />
        </div>
  
        <div className='mb-3'>
          <Card>
            <CardHeader>
              <CardTitle>Insulin Bolus IVP</CardTitle>
              <CardDescription>{potassium} {weight}</CardDescription>
            </CardHeader>
            <CardContent>
              Start maintenance fluids of normal saline at 200 mL/hour with{' '}
              {createAdjustment(potassium, weight)}
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