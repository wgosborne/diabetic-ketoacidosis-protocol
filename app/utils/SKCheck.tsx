import { room } from '@prisma/client';

export const StartSKTimeOut = (
  currRoom: room | null,
  SKTime: Number | null,
  SKCount: Number | null
) => {
  const intervalInMilliseconds = 4 * 60 * 60 * 1000; // 4 hours in milliseconds

  if (CheckSKCount(currRoom, SKCount)) {
    setTimeout(() => {
      //Put the function here
      alert('Time to update the patients Phosphorus');
    }, intervalInMilliseconds);
  } else {
    //case for hitting the 3x mark, for now just alerting but need to add logic here

    alert('Serum Ketones have been checked 3x');
  }
};

export const CheckSKCount = (currRoom: room | null, SKCount: Number | null) => {
  //check how many times the Serum Ketones have been checked, should be less than 3

  if (SKCount == 3) {
    //case for it hitting the 3x mark
    return false;
  }
  else {
    return true;
  }

};
