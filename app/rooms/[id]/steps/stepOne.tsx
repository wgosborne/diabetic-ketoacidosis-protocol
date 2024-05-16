"use client";

import React, { useState } from 'react';
import MySheet from '../components/sheet';
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
  CardTitle,
} from "@/components/ui/card"


const StepOne = () => {

  const [potassium, setPotassium] = useState(0);

  return (
    <div>
      <MySheet potassium={potassium} onChange={setPotassium}/>
      <Card>
        <CardHeader>
          <CardTitle>Fluid Resuscitation</CardTitle>
          {/* <CardDescription>Fluid Resuscitation & Maintenance Fluids</CardDescription> */}
        </CardHeader>
        <CardContent>
          <p>Give one (1) or two (2) liters of Normal Saline bolus per Provider order</p>
        </CardContent>
        {/* <CardFooter>
          <p>Card Footer</p>
        </CardFooter> */}
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Maintenance Fluids</CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <CardContent>
          <Table>
            {/* <TableCaption>Heres what to do next</TableCaption> */}
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>{potassium}</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default StepOne;
