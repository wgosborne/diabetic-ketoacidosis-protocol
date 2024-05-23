import React from 'react';
import axios from 'axios';
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
  onNewPotassium: (value: number) => void;
  onNewWeight: (value: number) => void;
  onNewRate: (value: number) => void;
  onNewBloodGlucose: (value: number) => void;
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
  onNewBloodGlucose
}: UpdateProps) => {
  const { register, handleSubmit } = useForm({});

  const onSubmit = async (data: any) => {

    //Update state everywhere
    if (data.bloodGlucose) {
      onNewBloodGlucose(data.bloodGlucose);
      currRoom.bloodGlucose = data.bloodGlucose;
      try {
        await axios.patch('/api/room/' + currRoom.id, currRoom);
      } catch (error) {
        console.log(error);
      }
    }
    if (data.weight) {
      onNewWeight(data.weight);
      currRoom.weight = data.weight;
      try {
        await axios.patch('/api/room/' + currRoom.id, currRoom);
      } catch (error) {
        console.log(error);
      }
    }
    // if (data.bloodGlucose) {
    //   onNewBloodGlucose(data.bloodGlucose);
    //   currRoom.bloodGlucose = data.bloodGlucose;
    // }
    // if (data.bloodGlucose) {
    //   onNewBloodGlucose(data.bloodGlucose);
    //   currRoom.bloodGlucose = data.bloodGlucose;
    // }

    // try {
    //   await axios.patch('/api/room/' + currRoom.id, currRoom);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div>
      <div className='bg-slate-950 rounded-md shadow-md'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-center my-3 justify-center"
        >
          <div className="ml-3 mt-3">
            <div className="justify-center">
              <Label className='text-white'>Enter the patients Blood Glucose</Label>
            </div>
            <Input
              className="mt-2 mb-4 text-white"
              type="number"
              placeholder="Enter in mg/dL"
              //   onChange={handleBloodGlucoseChange}
              {...register('bloodGlucose', { valueAsNumber: true })}
            />
          </div>

          <div className="ml-5 mt-3">
            <div className="ml-3 justify-center">
              <Label className='text-white'>Enter the patients weight</Label>
            </div>
            <Input
              className="mt-2 mb-4 text-white"
              type="number"
              placeholder="Enter in kilograms"
              {...register('weight', { valueAsNumber: true })}
            />
          </div>
          <div className="ml-5 mt-3">
            <Button type="submit" onClick={onSubmit} className='bg-white text-black'>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
