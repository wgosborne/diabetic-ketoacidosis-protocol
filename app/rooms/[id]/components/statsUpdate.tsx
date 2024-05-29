import React, { useEffect } from 'react';
import axios from 'axios';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { room } from '@prisma/client';
import { useForm } from 'react-hook-form';

interface UpdateProps {
  currRoom: room;
  potassium: number;
  weight: number;
  rate: number;
  bloodGlucose: number;
  bGTime: number;
  onNewBGTime: (value: number) => void;
  onNewPotassium: (value: number) => void;
  onNewWeight: (value: number) => void;
  onNewRate: (value: number) => void;
  onNewBloodGlucose: (value: number) => void;
  bmp: number;
  onNewBMP: (value: number) => void;
  BMPTime: number;
  onNewBMPTime: (value: number) => void;
  PhosTime: number;
  onNewPhosTime: (value: number) => void;
  phosphorus: number;
  onNewPhosphorus: (value: number) => void;
  phosCount: number;
  onNewPhosCount: (value: number) => void;
  serumKetones: number;
  onNewSerumKetones: (value: number) => void;
  sKqTime: number;
  onNewSKTime: (value: number) => void;
  sKqCount: number;
  onNewSKCount: (value: number) => void;
  anionGap: number;
  onNewAnionGap: (value: number) => void;
}

const Update = ({
  currRoom,
  potassium,
  weight,
  rate,
  bloodGlucose,
  onNewPotassium,
  onNewWeight,
  onNewRate,
  onNewBloodGlucose,
  bGTime,
  onNewBGTime,
  bmp,
  onNewBMP,
  BMPTime,
  onNewBMPTime,
  PhosTime,
  onNewPhosTime,
  phosCount,
  onNewPhosCount,
  phosphorus,
  onNewPhosphorus,
  serumKetones,
  onNewSerumKetones,
  sKqTime,
  onNewSKTime,
  sKqCount,
  onNewSKCount,
  anionGap,
  onNewAnionGap
}: UpdateProps) => {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {
      bloodGlucose: '',
      bmp: '',
      serumKetones: '',
      weight: '',
      phosphorus: '',
      anionGap: ''
    },
    shouldUnregister: true
  });

  const pushDatabase = async () => {
    try {
      await axios.patch('/api/room/' + currRoom.id, currRoom);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (data: any) => {
    //Update state everywhere
    if (data.bloodGlucose) {
      onNewBloodGlucose(data.bloodGlucose);
      currRoom.bloodGlucose = data.bloodGlucose;

      onNewBGTime(Date.now());
      currRoom.bloodGlucoseTime = Date.now();
    }
    if (data.bmp) {
      //Updating bmp
      onNewBMP(data.bmp);
      currRoom.bmp = data.bmp;

      //Updating bmp time
      onNewBMPTime(Date.now());
      currRoom.BMPqTime = Date.now();
    }
    if (data.serumKetones) {
      //Updating serum ketones
      onNewSerumKetones(data.serumKetones);
      currRoom.serumKetones = data.serumKetones;

      //Updating serum ketones time
      onNewSKTime(Date.now());
      currRoom.sKqTime = Date.now();

      //Updating serum ketones count
      onNewSKCount(++sKqCount);
      currRoom.sKqCount = ++sKqCount;
    }
    if (data.weight) {
      onNewWeight(data.weight);
      currRoom.weight = data.weight;
    }
    if (data.phosphorus) {
      //Updating Phosphorus
      onNewPhosphorus(data.phosphorus);
      currRoom.phosphorus = data.phosphorus;

      //Updating Phosphorus time
      onNewPhosTime(Date.now());
      currRoom.PqTime = Date.now();

      //Updating Phosphorus count
      onNewPhosCount(++phosCount);
      currRoom.PqCount = ++phosCount;
    }
    if (data.anionGap) {
      //Updating Phosphorus
      onNewAnionGap(data.anionGap);
      currRoom.anionGap = data.anionGap;
    }
    pushDatabase();
  };

  return (
    <div>
      <div className="bg-slate-950 rounded-md shadow-md">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-center my-3 justify-center"
        >
          {/* keeping this commented out incase I want to change it to the card format later */}

          {/* <Card className="my-3">
            <CardHeader>
              <CardTitle className="">
                Enter the patients Blood Glucose
              </CardTitle>
              <CardDescription>
                The last time this stat was taken goes here
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Input
                className=""
                type="number"
                placeholder="Enter in mg/dL"
                //   onChange={handleBloodGlucoseChange}
                {...register('bloodGlucose', { valueAsNumber: true })}
              />
            </CardContent>
          </Card> */}

          <div className="ml-5 mt-3">
            <div className="ml-3 justify-center">
              <Label className="text-white">
                Enter the patients Blood Glucose
              </Label>
            </div>
            <Input
              className="mt-2 mb-4 text-white"
              type="number"
              placeholder="Enter in mg/dL"
              {...register('bloodGlucose', { valueAsNumber: true })}
            />
          </div>

          <div className="ml-5 mt-3">
            <div className="ml-3 justify-center">
              <Label className="text-white">Enter the patients BMP</Label>
            </div>
            <Input
              className="mt-2 mb-4 text-white"
              type="number"
              placeholder="Enter as a number"
              {...register('bmp', { valueAsNumber: true })}
            />
          </div>

          <div className="ml-5 mt-3">
            <div className="ml-3 justify-center">
              <Label className="text-white">
                Enter the patients Serum Ketones
              </Label>
            </div>
            <Input
              className="mt-2 mb-4 text-white"
              type="number"
              placeholder="Enter as a number"
              {...register('serumKetones', { valueAsNumber: true })}
            />
          </div>

          <div className="ml-5 mt-3">
            <div className="ml-3 justify-center">
              <Label className="text-white">Enter the patients weight</Label>
            </div>
            <Input
              className="mt-2 mb-4 text-white"
              type="number"
              step=".01"
              placeholder="Enter in kilograms"
              {...register('weight', { valueAsNumber: true })}
            />
          </div>

          <div className="ml-5 mt-3">
            <div className="ml-3 justify-center">
              <Label className="text-white">
                Enter the patients Phosphorus level
              </Label>
            </div>
            <Input
              className="mt-2 mb-4 text-white"
              type="number"
              step=".01"
              placeholder="Enter in mg/dL"
              {...register('phosphorus', { valueAsNumber: true })}
            />
          </div>

          <div className="ml-5 mt-3">
            <div className="ml-3 justify-center">
              <Label className="text-white">Enter the patients Anion Gap</Label>
            </div>
            <Input
              className="mt-2 mb-4 text-white"
              type="number"
              step=".01"
              placeholder="Enter in mEq/L"
              {...register('anionGap', { valueAsNumber: true })}
            />
          </div>

          <div className="ml-5 mt-3 mr-4">
            <Button
              type="submit"
              onClick={onSubmit}
              className="bg-white text-black"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
