import { createContext, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { evaluate } from 'mathjs';

const UserContext = createContext({
  allUsers: [],
  isAuthenticated: 0,
  currentUserInfos: {},
  searchMatch: (userTimetable, threshold = 0.1, total = 6 * 7) => {},
  addCurrentUser: (newUserInfo) => {},
  removeCurrentUser: () => {},
  setUserList: (userList) => {},
});

export function UserContextProvider(props) {
  const [currentUser, setCurrentUser] = useState([]);
  const [userList, setUserList] = useState([]);

  function searchMatchHandler(
    userTimetable = currentUser[0].timetable,
    threshold = 0.1,
    total = 6 * 7
  ) {
    // const userTimetable = currentUser[0].timetable;
    let matchUserId = [];
    userList.map((user) => {
      let sum = 0.0;
      if (user.timetable) {
        user.timetable.map((rows, ridx) => {
          rows.map((cols, cidx) => {
            // console.log(cols * userTimetable[ridx][cidx]);
            sum += cols * userTimetable[ridx][cidx] * 1;
            return parseInt(cols * userTimetable[ridx][cidx] * 1);
          });
        });
        console.log(user.id, sum / total);
        if (sum / total <= threshold) {
          matchUserId.push(user.id);
        }
      }
    });
    console.log('matchUserId', matchUserId);
    return matchUserId;
  }

  function setUserListHandler(userList) {
    setUserList((prevUserList) => userList);
  }
  function addCurrentUserHandler(newUserInfo) {
    // setCurrentUser([].push(newUserInfo));
    setCurrentUser((prevUserInfos) => {
      // console.log('newUserInfo', newUserInfo);
      // return [].push(newUserInfo);
      return prevUserInfos.concat(newUserInfo);
    });
  }
  function removeCurrentUserHandler() {
    setCurrentUser((prevUserInfo) => []);
  }
  // function isAuthenticated() {
  //   return currentUserInfos.length;
  // }

  const context = {
    isAuthenticated: currentUser.length,
    currentUserInfos: currentUser[0],
    allUsers: userList,
    addCurrentUser: addCurrentUserHandler,
    removeCurrentUser: removeCurrentUserHandler,
    setUserList: setUserListHandler,
    searchMatch: searchMatchHandler,
  };

  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
