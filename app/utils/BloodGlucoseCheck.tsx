//for checking the Blood Glucose every 1 hour until off insulin drip

export const StartBGTimeOut = (BG: Number) => {
  const intervalInMilliseconds = 60 * 60 * 1000; // 1 hour in milliseconds

  console.log(BG);

  setTimeout(() => {
    //Put the function here
    alert('Time to update the patients Blood Glucose');
  }, intervalInMilliseconds);

  //pull the amount of time its been from the db
};
