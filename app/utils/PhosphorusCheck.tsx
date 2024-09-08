import { room } from '@prisma/client';

export const StartPhosTimeOut = (
  currRoom: room | null,
  phosTime: Number | null,
  phosCount: Number | null
) => {
  const intervalInMilliseconds = 4 * 60 * 60 * 1000; // 4 hours in milliseconds
  console.log(phosTime, phosCount);

  if (CheckPhosCount(currRoom, phosCount)) {
    setTimeout(() => {
      //Put the function here
      alert('Time to update the patients Phosphorus');
    }, intervalInMilliseconds);
  } else {
    //case for hitting the 3x mark, for now just alerting but need to add logic here

    alert('Phosphorus has been checked 3x');
  }
};

export const CheckPhosCount = (
  currRoom: room | null,
  phosCount: Number | null
) => {
  //check how many times the phosphorus has been checked, should be less than 3
  //phosCount has already been added to so just need to check here

  if (phosCount == 3) {
    //case for it hitting the 3x mark
    return false;
  } else {
    return true;
  }
};
