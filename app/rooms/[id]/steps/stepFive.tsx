import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { room } from '@prisma/client';

interface StepFiveProps {
  currRoom: room;
  weight: number;
  setWeight: (value: number) => void;
  rate: number;
  setRate: (value: number) => void;
}

const StepFive = ({
  currRoom,
  weight,
  setWeight,
  rate,
  setRate
}: StepFiveProps) => {

  return (
    <div>
      <div className="mb-3">
        <Card>
          <CardHeader>
            <CardTitle>Adjusting the Insulin Infusion Rate</CardTitle>
            {/* <CardDescription>
              
              </CardDescription> */}
          </CardHeader>
          <CardContent>
            {/* {checkRate() ? (
              <h2 className="mb-3">
                Inital insulin infusion rate: {checkRate()}{' '}
                units per hour
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
              <p className='mt-2 font-bold'>
                **Any dose greater than 15 units per hour MUST be ordered by
                Provider**
              </p>
            </ol> */}
          </CardContent>
          {/* <CardFooter>
              <p>Card Footer</p>
            </CardFooter> */}
        </Card>
      </div>
    </div>
  );
  
};

export default StepFive;
