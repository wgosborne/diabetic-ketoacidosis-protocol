import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

const StepTwo = () => {
  return (
    <div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Initial Laboratory Orders</CardTitle>
            {/* <CardDescription>Fluid Resuscitation & Maintenance Fluids</CardDescription> */}
          </CardHeader>
          <CardContent>
            <ol className="list-decimal ml-4">
              <li>CBC</li>
              <li>CMP</li>
              <li>Serum Ketones</li>
              <li>Hgb a l c</li>
              <li>Phosphorus</li>
              <li>Magnesium</li>
              <li>Urinalysis (UAI)</li>
            </ol>
          </CardContent>
          {/* <CardFooter>
          <p>Card Footer</p>
        </CardFooter> */}
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Recurring Laboratory Orders</CardTitle>
            {/* <CardDescription>Fluid Resuscitation & Maintenance Fluids</CardDescription> */}
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
  );
};

export default StepTwo;
