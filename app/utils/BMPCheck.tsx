//for checking the BMP q 4 hours
//should run everytime BMP is updated

const StartBMPTimeOut = (bmpTime: Number | null) => {
  const intervalInMilliseconds = 4 * 60 * 60 * 1000; // 4 hours in milliseconds, CHANGE THIS BACK TO CONSY
  console.log(bmpTime);

  setTimeout(() => {
    //Put the function here
    alert('Time to update the patients BMP');
  }, intervalInMilliseconds);

  //pull the amount of time its been from the db
};

export default StartBMPTimeOut;
