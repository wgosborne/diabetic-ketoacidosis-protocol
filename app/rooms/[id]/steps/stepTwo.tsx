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
      <div className='mb-3'>
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
    </div>
  );
};

export default StepTwo;
