'use client';

import React from 'react';
import SheetThree from '../components/sheetStepThree';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { room } from '@prisma/client';


interface RecurringProps {
    currRoom: room;
    potassium: number;
    setPotassium: (value: number) => void;
    weight: number;
    setWeight: (value: number) => void;
    rate: number;
    setRate: (value: number) => void;
  }

const Recurring = ({
    currRoom,
    potassium,
    setPotassium,
    weight,
    setWeight,
    rate,
    setRate
  }: RecurringProps) => {
  return (
    <div>
        <div className="mb-3">
        <Card>
          <CardHeader>
            <CardTitle>Recurring Laboratory Orders</CardTitle>
            {/* <CardDescription>
              {potassium} {weight}
            </CardDescription> */}
          </CardHeader>
          <CardContent>
          <ol className="list-decimal ml-4">
              <li>BMP q 4 hours (every 4 hours) until the  Gap is less than or equal to 16</li>
              <li>Phosphorous q 4 hours (every 4 hours) x3</li>
              <li>Serum Ketones q 4 hours (every 4 hours) x3</li>
              <li>POC Blood Glucose q 1 hour (every hour) until off insulin drip</li>
            </ol>
          </CardContent>
          {/* <CardFooter>
            <p>Card Footer</p>
          </CardFooter> */}
        </Card>
      </div>
    </div>
  )
}

export default Recurring;