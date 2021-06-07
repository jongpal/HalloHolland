import { createContext, useState } from 'react';
import { useCookies } from 'react-cookie';

const FarmContext = createContext({
  totSectorNum: 0,
  sectors: [],
  occupiedSector: [],
  // user id 가 들어감
  addSector: (hostId, crop, sectNum, description, maxNum = 5) => {},
  joinSector: (userId, sectorNum) => {},
  signOutSector: (userId, sectorNum) => {},
  addToOccupied: (sectorNum) => {},
  removeFromOccupied: (sectorNum) => {},
});
//sector structure
// {
//   maxNum : 5,
//   currNum : 3,
//   userIds : [
//     1, 2, 3, 4
//   ]
// },

export function FarmContextProvider(props) {
  const [currSector, setCurrSector] = useState([
    {
      maxNum: 5,
      currNum: 3,
      hostId: 1,
      description: 'Neighbors who want to grow healthy vegetables',
      intro: [
        'Age : 29',
        'Have been living in koedijksgarden since forever',
        'Farming knowledge : novice, not educated',
      ],
      crop: ['potato'],
      userIds: [1, 2, 3],
    },
    {
      maxNum: 5,
      currNum: 5,
      hostId: 4,
      description: 'Neighbors who got a lot of time to grow crops',
      intro: [
        'Age : 29',
        'Have been living in koedijksgarden since forever',
        'Farming knowledge : novice, not educated',
      ],
      crop: ['potato'],
      userIds: [4, 5, 6, 13, 14],
    },
    {
      maxNum: 5,
      currNum: 0,
      hostId: undefined,
      description: undefined,
      intro: [],
      crop: [],
      userIds: [],
    },
    {
      maxNum: 5,
      currNum: 3,
      hostId: 10,
      intro: [],
      crop: ['potato'],
      userIds: [10, 11, 12],
    },
    {
      maxNum: 5,
      currNum: 5,
      hostId: 16,
      intro: [],
      crop: ['potato'],
      userIds: [16, 17, 18, 19, 20],
    },
    {
      maxNum: 5,
      currNum: 5,
      hostId: 21,
      intro: [],
      crop: ['potato'],
      userIds: [21, 22, 23, 24, 25],
    },
    {
      maxNum: 5,
      currNum: 3,
      hostId: 26,
      crop: ['potato'],
      userIds: [26, 27, 28],
    },
    {
      maxNum: 5,
      currNum: 3,
      hostId: 29,
      intro: [],
      crop: ['potato'],
      userIds: [29, 30, 31],
    },
    {
      maxNum: 5,
      currNum: 3,
      hostId: 32,
      intro: [],
      crop: ['potato'],
      userIds: [32, 33, 34],
    },
    {
      maxNum: 5,
      currNum: 3,
      hostId: 35,
      crop: ['potato'],
      userIds: [35, 36, 37],
    },
    {
      maxNum: 5,
      currNum: 5,
      hostId: 38,
      intro: [],
      crop: ['potato'],
      userIds: [38, 39, 40, 41],
    },
    {
      maxNum: 5,
      currNum: 3,
      hostId: 42,
      intro: [],
      crop: ['potato'],
      userIds: [42, 43, 44],
    },
    {
      maxNum: 5,
      currNum: 3,
      hostId: 45,
      intro: [],
      crop: ['potato'],
      userIds: [45, 46, 47],
    },
  ]);
  const [occupiedSector, setOccupiedSector] = useState([1, 4, 5, 10]);
  // const [joinSectorm setJoinSector] = useState();

  function addSectorHandler(
    hostId,
    crop,
    sectNum,
    description,
    intro,
    maxNum = 5
  ) {
    const newSector = {
      maxNum,
      currNum: 1,
      hostId: hostId,
      crop,
      description,
      intro,
      users: [hostId],
    };
    setCurrSector((prevSector) => {
      prevSector[sectNum - 1] = newSector;
      return prevSector;
    });
  }
  function addToOccupiedHandler(sectorNum) {
    setOccupiedSector((prevOccupied) => {
      return prevOccupied.concat(sectorNum);
    });
  }
  function removeFromOccupiedHandler(sectorNum) {
    setOccupiedSector((prevOccupied) => {
      return prevOccupied.filter((sector) => sector !== sectorNum);
    });
  }
  function signOutSectorHandler(userId, sectorNum) {
    setCurrSector((prevSector) => {
      prevSector[sectorNum].userIds.filter((user) => user !== userId);
      prevSector[sectorNum].currNum -= 1;
      if (occupiedSector.some((sector) => sector === sectorNum))
        removeFromOccupiedHandler(sectorNum);
      return prevSector;
    });
    // remove
  }
  function joinSectorHandler(userId, sectorNum) {
    console.log('hi');
    if (occupiedSector.some((sector) => sector === sectorNum)) {
      //Err (should be handled)
      return;
    }
    // const userId = personalInfos.id; // personal info should be given
    setCurrSector((prevSector) => {
      prevSector[sectorNum].userIds.concat(userId);
      prevSector[sectorNum].currNum += 1;
      if (prevSector[sectorNum].maxNum === prevSector[sectorNum].currNum) {
        addToOccupiedHandler(sectorNum);
      }
      console.log('new', prevSector);
      return prevSector;
    });
  }

  const context = {
    totSectorNum: currSector.length,
    sectors: currSector,
    occupiedSector,
    addSector: addSectorHandler,
    joinSector: joinSectorHandler,
    signOutHandler: signOutSectorHandler,
    addToOccupied: addToOccupiedHandler,
    removeFromOccupied: removeFromOccupiedHandler,
  };
  return (
    <FarmContext.Provider value={context}>
      {props.children}
    </FarmContext.Provider>
  );
}

export default FarmContext;
