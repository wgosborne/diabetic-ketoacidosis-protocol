//for checking the Blood Glucose every 1 hour until off insulin drip

const StartBGTimeOut = (BGTime: Number | null) => {
  const intervalInMilliseconds = 60 * 60 * 1000; // 1 hour in milliseconds

  console.log(BGTime);

  setTimeout(() => {
    //Put the function here
    alert('Time to update the patients Blood Glucose');

    //add insulin check here
    
  }, intervalInMilliseconds);

  //pull the amount of time its been from the db
};

export default StartBGTimeOut;
