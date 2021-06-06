import { createContext, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

const UserContext = createContext({
  allUsers: [],
  isAuthenticated: 0,
  currentUserInfos: {},
  addCurrentUser: (newUserInfo) => {},
  removeCurrentUser: () => {},
  setUserList: (userList) => {},
});

export function UserContextProvider(props) {
  const [currentUser, setCurrentUser] = useState([]);
  const [userList, setUserList] = useState([]);

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
  };

  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
