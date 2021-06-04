import { createContext, useState } from 'react';

const UserContext = createContext({
  isAuthenticated: 0,
  currentUserInfos: {},
  addCurrentUser: (newUserInfo) => {},
  removeCurrentUser: () => {},
});

export function UserContextProvider(props) {
  const [currentUser, setCurrentUser] = useState([]);

  function addCurrentUserHandler(newUserInfo) {
    setCurrentUser((prevUserInfos) => {
      return [newUserInfo];
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
    addCurrentUser: addCurrentUserHandler,
    removeCurrentUser: removeCurrentUserHandler,
  };

  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
