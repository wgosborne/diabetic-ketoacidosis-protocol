'use client';

import React, { useState } from 'react';
import SheetFour from '../components/sheetStepFour';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface StepFourProps {
    weight: number;
    setWeight: (value: number) => void;
    rate: number;
    setRate: (value: number) => void;
    
  }

const StepFour = ({weight, setWeight, rate, setRate}: StepFourProps) => {

  const createAdjustment = (rate: number, weight: number) => {
    switch (true) {
      case weight < 39.5:
        return false;
      case weight < 44.5:
        return '4';
      case weight < 49.5:
        return '4.5';
      case weight < 54.5:
        return '5';
      case weight < 59.5:
        return '5.5';
      case weight < 64.5:
        return '6';
      case weight < 69.5:
        return '6.5';
      case weight < 74.5:
        return '7';
      case weight < 79.5:
        return '7.5';
      case weight < 84.5:
        return '8';
      case weight < 89.5:
        return '8.5';
      case weight < 94.5:
        return '9';
      case weight < 99.5:
        return '9.5';
      case weight < 104.5:
        return '10';
      case weight < 109.5:
        return '10.5';
      case weight < 114.5:
        return '11';
      case weight < 119.5:
        return '11.5';
      case weight < 124.5:
        return '12';
      case weight < 129.5:
        return '12.5';
      case weight < 134.5:
        return '13';
      case weight < 139.5:
        return '13.5';
      case weight < 144.5:
        return '14';
      case weight < 149.5:
        return '14.5';
      case weight >= 149.5:
        return '15';
      default:
        return false;
    }
  };

  return (
    <div>
      <div className="mb-3">
        <SheetFour weight={weight} onNewWeight={setWeight} />
      </div>

      <div className="mb-3">
        <Card>
          <CardHeader>
            <CardTitle>Initiate Insulin Infusion</CardTitle>
            {/* <CardDescription>
                {potassium} {weight}
              </CardDescription> */}
          </CardHeader>
          <CardContent>
            {createAdjustment(rate, weight) ? (
              <h2 className='mb-3'>
                Inital insulin infusion rate: {createAdjustment(rate, weight)}{' '}
                units per hour
              </h2>
            ) : (
              <h2 className='mb-3'>Weight too low for an infusion rate</h2>
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
              <li>
                **Any dose greater than 15 units per hour MUST be ordered by
                Provider**
              </li>
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
