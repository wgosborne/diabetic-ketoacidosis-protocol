import { patient, room } from '@prisma/client';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import SingleUpdate from '../rooms/[id]/components/singleUpdate';
import findPatient from '../actions/FindPatient';

//for checking the Blood Glucose every 1 hour until off insulin drip

// interface BGProps {
//   currRoom: room | null;
//   BGTime: Number | null;
//   onNewBGTime: (value: number) => void;
//   onNewBloodGlucose: (value: number) => void;
// }

const StartBGTimeOut = (
  currRoom: room,
  BGTime: number | null,
  currPatient: patient
) => {
  const intervalInMilliseconds = 60 * 60 * 1000; // 1 hour in milliseconds

  console.log(BGTime);

  setTimeout(async () => {
    //Put the function here

    !(currPatient.name == 'VACANT')
      ? alert(
          'Time to update ' +
            currPatient.name +
            ' in room ' +
            currRoom.roomNum +
            "'s Blood Glucose"
        )
      : alert('Time to update the patients Blood Glucose');

    //add insulin check here
    //this will render the new single update component or have it in the modal
  }, 3000);

  //pull the amount of time its been from the db
};

export default StartBGTimeOut;
