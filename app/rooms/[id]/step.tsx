
import React, { useState } from 'react';
import prisma from '@/prisma/client';
import { room } from "@prisma/client";
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button"

interface StepProps {
  currRoom: room;
  currStep: number;
}

const Step = async ({currRoom, currStep}: StepProps) => {

    prisma.room.update({
        where: {
          id: currRoom.id,
        },
        data: {
          step: currStep,
        },
      })



  return (
    <div className=''>

    </div>
  );
};

export default Step;