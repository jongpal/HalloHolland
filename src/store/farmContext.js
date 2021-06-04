import { createContext, useState } from 'react';

const FarmContext = createContext({
  firstSector: [],
  secondSector: [],
  thirdSector: [],
  fourthSector: [],

  occupiedSectors: [],
  joinSector: (personalInfos) => {},
  signOutSector: (personId) => {},
});
