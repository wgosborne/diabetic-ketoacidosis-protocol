//for checking the BMP q 4 hours
//should run everytime BMP is updated

const StartBMPTimeOut = (bmpTime: Number | null) => {
  const intervalInMilliseconds = 4 * 60 * 60 * 1000; // 4 hours in milliseconds
  console.log(bmpTime);

  setTimeout(function runAndReschedule() {
    //Put the function here
    //right now it restarts and refreshes every time you switch the page
    setTimeout(runAndReschedule, intervalInMilliseconds);
  }, intervalInMilliseconds);

  //pull the amount of time its been from the db
};

export default StartBMPTimeOut;
