//for checking the BMP q 4 hours
//should run everytime BMP is updated

const StartBMPTimeOut = (bmpTime: Number | null, anionGap: Number | null) => {
  const intervalInMilliseconds = 4 * 60 * 60 * 1000; // 4 hours in milliseconds, CHANGE THIS BACK TO CONSY
  console.log('bmp time', bmpTime);
  console.log('anion gap', anionGap);

  setTimeout(() => {
    //Put the function here
    alert(
      'Time to update the patients BMP if the anion gap is less than or equla to 16 you can stop'
    );

    //add an anion gap  check here
  }, intervalInMilliseconds);

  //pull the amount of time its been from the db
};

export default StartBMPTimeOut;
