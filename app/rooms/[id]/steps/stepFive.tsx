import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { room } from '@prisma/client';
import SheetFive from '../components/sheetStepFive';

interface StepFiveProps {
  currRoom: room;
  weight: number;
  setWeight: (value: number) => void;
  rate: number;
  setRate: (value: number) => void;
  potassium: number;
  setPotassium: (value: number) => void;
  bloodGlucose: number;
  setBloodGlucose: (value: number) => void;
}

const StepFive = ({
  currRoom,
  weight,
  setWeight,
  rate,
  setRate,
  potassium,
  setPotassium,
  bloodGlucose,
  setBloodGlucose
}: StepFiveProps) => {

  const adjust = (potassium: number, ) => {

  }

  return (
    <div>
      <div className="mb-3">
        <SheetFive
          currRoom={currRoom}
          potassium={potassium}
          weight={weight}
          rate={rate}
          bloodGlucose={bloodGlucose}
          onNewPotassium={setPotassium}
          onNewWeight={setWeight}
          onNewRate={setRate}
          onNewBloodGlucose={setBloodGlucose}
        />
      </div>
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
            )} */}
            <p>Rate: {rate}</p>
            <p>weight: {weight}</p>

            <ol className="list-decimal ml-4">
              <li>
                RN is to document each insulin infusion rate change in the EHR
                and MAR
              </li>
              <li>
                Check Blood Glucose q 1 hour (should have been ordered above)
              </li>
              <li>
                Blood glucose should decrease by approximately 50-100 mg/dL per
                hour. If blood glucose decreases by more than 150 mg/dL per
                hour, decrease the rate of change of insulin infusion by 50% and
                notify the provider
              </li>
              <li>
                When 2 CONSECUTIVE BLOOD GLUCOSES are less than 250 mg/dL (less
                than 250 mg/dL), OR BLOOD GLUCOSE DECREASES BY MORE THAN 200
                MG/DL IN 2 HOURS: * Change Primary Fluid to D5 1/2 NS at
                100mL/hr. * Add Potassium Chloride per Table 1 (above)
              </li>
              <li>
                Begin subcutaneous insulin 2 hours before stopping insulin drip.
                **Do NOT abruptly stop insulin drip. Failure to overlap
                therapies may result in recurrence of DKA. **{' '}
              </li>
              <p className="mt-2 font-bold">
                ***Nurse MUST accompany patient to any diagnostic tests outside
                of the ICU while on insulin infusion***
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

export default StepFive;
