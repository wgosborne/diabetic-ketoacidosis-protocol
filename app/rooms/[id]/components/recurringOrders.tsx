'use client';

import React from 'react';
import SheetThree from '../components/sheetStepThree';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { patient, room } from '@prisma/client';
import Update from './statsUpdate';

interface RecurringProps {
  currRoom: room;
  currPatient: patient;
  potassium: number;
  setPotassium: (value: number) => void;
  weight: number;
  setWeight: (value: number) => void;
  rate: number;
  setRate: (value: number) => void;
  bloodGlucose: number;
  setBloodGlucose: (value: number) => void;
  bGTime: number;
  setBGTime: (value: number) => void;
  bmp: number;
  setBMP: (value: number) => void;
  BMPTime: number;
  setBMPTime: (value: number) => void;
  PhosTime: number;
  setPhosTime: (value: number) => void;
  phosphorus: number;
  setPhosphorus: (value: number) => void;
  phosCount: number;
  setPhosCount: (value: number) => void;
  serumKetones: number;
  setSerumKetones: (value: number) => void;
  sKqTime: number;
  setsKqTime: (value: number) => void;
  sKqCount: number;
  setsKqCount: (value: number) => void;
  anionGap: number;
  setAnionGap: (value: number) => void;
}

const Recurring = ({
  currRoom,
  currPatient,
  potassium,
  setPotassium,
  weight,
  setWeight,
  rate,
  setRate,
  bloodGlucose,
  bGTime,
  setBGTime,
  setBloodGlucose,
  bmp,
  setBMP,
  BMPTime,
  setBMPTime,
  PhosTime,
  setPhosTime,
  phosphorus,
  setPhosphorus,
  phosCount,
  setPhosCount,
  serumKetones,
  setSerumKetones,
  sKqTime,
  setsKqTime,
  sKqCount,
  setsKqCount,
  anionGap,
  setAnionGap
}: RecurringProps) => {
  return (
    <div>
      <div className="mb-3">
        <Card>
          <CardHeader>
            <CardTitle>Initial Laboratory Orders</CardTitle>
            {/* <CardDescription>
              {potassium} {weight}
            </CardDescription> */}
          </CardHeader>
          <CardContent>
            <ol className="list-decimal ml-4">
              <li>
                BMP q 4 hours (every 4 hours) until the Gap is less than or
                equal to 16
              </li>
              <li>Phosphorus q 4 hours (every 4 hours) x3</li>
              <li>Serum Ketones q 4 hours (every 4 hours) x3</li>
              <li>
                POC Blood Glucose q 1 hour (every hour) until off insulin drip
              </li>
            </ol>

            <Update
              currRoom={currRoom}
              currPatient={currPatient}
              potassium={potassium}
              weight={weight}
              rate={rate}
              bloodGlucose={bloodGlucose}
              bGTime={bGTime}
              onNewBGTime={setBGTime}
              onNewPotassium={setPotassium}
              onNewWeight={setWeight}
              onNewRate={setRate}
              onNewBloodGlucose={setBloodGlucose}
              bmp={bmp}
              onNewBMP={setBMP}
              BMPTime={BMPTime}
              onNewBMPTime={setBMPTime}
              PhosTime={PhosTime}
              onNewPhosTime={setPhosTime}
              phosphorus={phosphorus}
              onNewPhosphorus={setPhosphorus}
              phosCount={phosCount}
              onNewPhosCount={setPhosCount}
              serumKetones={serumKetones}
              onNewSerumKetones={setSerumKetones}
              sKqTime={sKqTime}
              onNewSKTime={setsKqTime}
              sKqCount={sKqCount}
              onNewSKCount={setsKqCount}
              anionGap={anionGap}
              onNewAnionGap={setAnionGap}
            />
          </CardContent>
          {/* <CardFooter>
            <p>Card Footer</p>
          </CardFooter> */}
        </Card>
      </div>
    </div>
  );
};

export default Recurring;
