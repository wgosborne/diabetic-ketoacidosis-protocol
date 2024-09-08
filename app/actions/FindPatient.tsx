//does not work, is giving the prisma error about browser environment

import prisma from '@/prisma/client';
import { patient } from '@prisma/client';

const findPatient = async (patientID: number | null) => {
  let currPat = null;

  const patients = await prisma.patient.findMany({
    orderBy: { id: 'asc' }
  });

  currPat = patients.filter((pat) => pat.id == patientID);

  return currPat[0];

  // return currPat[0].name ? currPat[0].name : 'VACANT';
};

export default findPatient;
