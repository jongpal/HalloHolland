import { createContext, useState } from 'react';
import { useCookies } from 'react-cookie';

const FarmContext = createContext({
  totSectorNum: 0,
  sectors: [],
  occupiedSector: [],
  // user id 가 들어감
  addSector: (maxNum) => {},
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
      crop: 'potato',
      userIds: [1, 2, 3],
    },
    {
      maxNum: 5,
      currNum: 5,
      hostId: 4,
      crop: 'potato',
      userIds: [4, 5, 6, 13, 14],
    },
    {
      maxNum: 5,
      currNum: 3,
      hostId: 7,
      crop: 'potato',
      userIds: [7, 8, 9],
    },
    {
      maxNum: 5,
      currNum: 3,
      hostId: 10,
      crop: 'potato',
      userIds: [10, 11, 12],
    },
    {
      maxNum: 5,
      currNum: 5,
      hostId: 16,
      crop: 'potato',
      userIds: [16, 17, 18, 19, 20],
    },
    {
      maxNum: 5,
      currNum: 5,
      hostId: 21,
      crop: 'potato',
      userIds: [21, 22, 23, 24, 25],
    },
    {
      maxNum: 5,
      currNum: 3,
      hostId: 26,
      crop: 'potato',
      userIds: [26, 27, 28],
    },
    {
      maxNum: 5,
      currNum: 3,
      hostId: 29,
      crop: 'potato',
      userIds: [29, 30, 31],
    },
    {
      maxNum: 5,
      currNum: 3,
      hostId: 32,
      crop: 'potato',
      userIds: [32, 33, 34],
    },
    {
      maxNum: 5,
      currNum: 3,
      hostId: 35,
      crop: 'potato',
      userIds: [35, 36, 37],
    },
    {
      maxNum: 5,
      currNum: 5,
      hostId: 38,
      crop: 'potato',
      userIds: [38, 39, 40, 41],
    },
    {
      maxNum: 5,
      currNum: 3,
      hostId: 42,
      crop: 'potato',
      userIds: [42, 43, 44],
    },
    {
      maxNum: 5,
      currNum: 3,
      hostId: 45,
      crop: 'potato',
      userIds: [45, 46, 47],
    },
  ]);
  const [occupiedSector, setOccupiedSector] = useState([1, 4, 5, 10]);
  // const [joinSectorm setJoinSector] = useState();

  function addSectorHandler(hostId, maxNum, crop) {
    const newSector = {
      maxNum,
      currNum: 0,
      hostId: hostId,
      crop,
      users: [hostId],
    };
    setCurrSector((prevSector) => prevSector.concat(newSector));
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
