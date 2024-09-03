import React from 'react';
import axios from 'axios';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';

interface SingleUpdateProps {
  currRoom: number;
  currData: number;
  currSetter: (value: number) => void;
  time?: number;
  timeSetter?: (value: number) => void;
  count?: number;
  countSetter?: (value: number) => void;
}

const SingleUpdate = ({
  currRoom,
  currData,
  currSetter,
  time,
  timeSetter,
  count,
  countSetter
}: SingleUpdateProps) => {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {
      currData: ''
    },
    shouldUnregister: true
  });

  const pushDatabase = async () => {
    try {
      //await axios.patch('/api/room/' + currRoom.id, currRoom);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (data: any) => {
    //Update state everywhere
    // if (data.bloodGlucose) {
    //   onNewBloodGlucose(data.bloodGlucose);
    //   currRoom.bloodGlucose = data.bloodGlucose;

    //   onNewBGTime(Date.now());
    //   currRoom.bloodGlucoseTime = Date.now();
    // }

    // //Setting the timeout for the times
    // StartBMPTimeOut(currRoom.BMPqTime, currRoom.anionGap);
    // StartBGTimeOut(currRoom.bloodGlucoseTime);
    // StartPhosTimeOut(currRoom.PqTime, currRoom.PqCount);
    // CheckPhosCount(currRoom.PqCount);
    // StartSKTimeOut(currRoom.sKqTime, currRoom.sKqCount);
    // CheckSKCount(currRoom.sKqCount);

    pushDatabase();
  };

  return (
    <div className="bg-slate-950 rounded-md shadow-md">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center my-3 justify-center"
      >
        <div className="ml-5 mt-3">
          <div className="ml-3 justify-center">
            <Label className="text-white">
              Enter the patients Blood Glucose
            </Label>
          </div>
          {/* <Input
            className="mt-2 mb-4 text-white"
            type="number"
            placeholder="Enter in mg/dL"
            {...register('bloodGlucose', { valueAsNumber: true })}
          /> */}
        </div>
      </form>
    </div>
  );
};

export default SingleUpdate;
