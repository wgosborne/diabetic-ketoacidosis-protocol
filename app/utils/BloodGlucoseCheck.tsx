import { room } from '@prisma/client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import SingleUpdate from '../rooms/[id]/components/singleUpdate';

//for checking the Blood Glucose every 1 hour until off insulin drip

interface BGProps {
  currRoom: room | null;
  BGTime: Number | null;
  onNewBGTime: (value: number) => void;
  onNewBloodGlucose: (value: number) => void;
}

const StartBGTimeOut = ({
  currRoom,
  BGTime,
  onNewBGTime,
  onNewBloodGlucose
}: BGProps) => {
  const intervalInMilliseconds = 60 * 60 * 1000; // 1 hour in milliseconds

  console.log(BGTime);

  setTimeout(() => {
    //Put the function here
    alert('Time to update the patients Blood Glucose');
    return true;

    //add insulin check here
    //this will render the new single update component or have it in the modal
  }, 30000);

  return false;

  //pull the amount of time its been from the db
};

export default StartBGTimeOut;
