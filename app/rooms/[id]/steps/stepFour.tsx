'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { room } from '@prisma/client';

interface StepFourProps {
  currRoom: room;
  weight: number;
  setWeight: (value: number) => void;
  rate: number;
  setRate: (value: number) => void;
}

const StepFour = ({
  currRoom,
  weight,
  setWeight,
  rate,
  setRate
}: StepFourProps) => {
  const checkRate = () => {
    if (rate != -1) {
      return rate?.toString();
    } else {
      return false;
    }
  };

  return (
    <div>
      <div className="mb-3">
        <Card>
          <CardHeader>
            <CardTitle>Initiate Insulin Infusion</CardTitle>
            {/* <CardDescription>
                {potassium} {weight}
              </CardDescription> */}
          </CardHeader>
          <CardContent>
            {checkRate() ? (
              <h2 className="mb-3">
                Inital insulin infusion rate: {checkRate()} units per hour
              </h2>
            ) : (
              <h2 className="mb-3">Weight too low for an infusion rate</h2>
            )}

            <ol className="list-decimal ml-4">
              <li>
                100 units of regular insulin in 100 mL Normal Saline = 1 unit/mL
              </li>
              <li>Blood Glucose draws must be from a consistent site</li>
              <li>DO NOT draw from a line with dextrose or TPN infusing</li>
              <li>
                Check Blood Glucose q 1 hour (should have been ordered above)
              </li>
              <li>Check BMP q 4 hours (should have been ordered above)</li>
              <p className="mt-2 font-bold">
                **Any dose greater than 15 units per hour MUST be ordered by
                Provider**
              </p>
            </ol>
          </CardContent>
          {/* <CardFooter>
              <p>Card Footer</p>
            </CardFooter> */}
        </Card>
      </div>
    </div>
  );
};

export default StepFour;

// const createAdjustment = (rate: number, weight: number) => {
//     switch (true) {
//       case weight < 39.5:
//         setRate(-1);
//         return false;
//       case weight < 44.5:
//         setRate(4)
//         return '4';
//       case weight < 49.5:
//         setRate(4.5)
//         return '4.5';
//       case weight < 54.5:
//         setRate(5)
//         return '5';
//       case weight < 59.5:
//         setRate(5.5)
//         return '5.5';
//       case weight < 64.5:
//         setRate(6)
//         return '6';
//       case weight < 69.5:
//         setRate(6.5)
//         return '6.5';
//       case weight < 74.5:
//         setRate(7)
//         return '7';
//       case weight < 79.5:
//         setRate(7.5)
//         return '7.5';
//       case weight < 84.5:
//         setRate(8)
//         return '8';
//       case weight < 89.5:
//         setRate(8.5)
//         return '8.5';
//       case weight < 94.5:
//         setRate(9)
//         return '9';
//       case weight < 99.5:
//         setRate(9.5)
//         return '9.5';
//       case weight < 104.5:
//         setRate(10)
//         return '10';
//       case weight < 109.5:
//         setRate(10.5)
//         return '10.5';
//       case weight < 114.5:
//         setRate(11)
//         return '11';
//       case weight < 119.5:
//         setRate(11.5)
//         return '11.5';
//       case weight < 124.5:
//         setRate(12)
//         return '12';
//       case weight < 129.5:
//         setRate(12.5)
//         return '12.5';
//       case weight < 134.5:
//         setRate(13)
//         return '13';
//       case weight < 139.5:
//         setRate(13.5)
//         return '13.5';
//       case weight < 144.5:
//         setRate(14)
//         return '14';
//       case weight < 149.5:
//         setRate(14.5)
//         return '14.5';
//       case weight >= 149.5:
//         setRate(5)
//         return '15';
//       default:
//         return false;
//     }
//   };
