import './App.css';
import { Route, Switch } from 'react-router-dom';
import { MainHomePage } from './pages/MainHomePage';
import { GroupFarmingPage } from './pages/group-farming/GroupFarmingPage';
import { EventPage } from './pages/EventPage';
import { BoardPage } from './pages/BoardPage';
import { ReviewPage } from './pages/ReviewPage';
import ApplyPageFirst from './pages/group-farming/ApplyPageFirst';
import MainNavigator from './components/layout/MainNavigator';
import SecondApplyPage from './pages/group-farming/SecondApplyPage';
import SignInPage from './components/auth/SignIn';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import LogInPage from './components/auth/LogInPage';
import { useContext, useEffect } from 'react';
import UserContext from './store/userContext';
import { useCookies } from 'react-cookie';
import DetailPage from './pages/group-farming/DetailPage';
import JoinPage from './pages/group-farming/JoinPage';

function App(props) {
  const [cookies, setCookies] = useCookies(['user']);
  const userContext = useContext(UserContext);

  useEffect(() => {
    {
      //cookies.id
      console.log(cookies.email, cookies.pwd);
      console.log(cookies.email === undefined, cookies.pwd === undefined);
      fetch('https://urban-green-935ab-default-rtdb.firebaseio.com/user.json')
        .then((response) => response.json())
        .then((data) => {
          const userList = [];
          for (const key in data) {
            userList.push({
              ...data[key],
            });
          }
          console.log(cookies.email, cookies.pwd);
          const user_ = userList.filter((user) => {
            return user.email === cookies.email && user.pwd === cookies.pwd;
          });
          console.log('user :', user_[0]);
          // console.log(Cookies.get('name'));
          // console.log(userList);
          userContext.setUserList(userList);
          userContext.addCurrentUser(user_[0]);
          // console.log(userContext.currentUserInfos);
        });
    }
  }, [window.onload]);

  return (
    <div>
      <MainNavigator />
      <Switch>
        <Route path="/" exact={true}>
          <MainHomePage />
        </Route>
        <Route path="/group-farming">
          <GroupFarmingPage />
        </Route>
        <Route path="/event">
          <EventPage />
        </Route>
        <Route path="/board">
          <BoardPage />
        </Route>
        <Route path="/review">
          <ReviewPage />
        </Route>
        <Route path="/sign-in">
          <SignInPage />
        </Route>
        <Route path="/log-in">
          <LogInPage />
        </Route>
        <Route path="/detail/:sectorId" component={DetailPage} />
        <ProtectedRoute path="/join/:sectorId" component={JoinPage} />
        <ProtectedRoute
          exact
          path="/farming-apply"
          componenet={ApplyPageFirst}
        />
        <ProtectedRoute
          path="/farming-apply-second"
          componenet={SecondApplyPage}
        />
      </Switch>
    </div>
  );
}

export default App;
