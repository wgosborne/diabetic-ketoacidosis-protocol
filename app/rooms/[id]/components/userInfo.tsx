'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const UserInfo = () => {
  return (
    <div>
      <div>
        <div className="mb-3">
          <Card>
            <CardHeader>
              <CardTitle>User Info</CardTitle>
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
            </CardContent>
            {/* <CardFooter>
            <p>Card Footer</p>
          </CardFooter> */}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
