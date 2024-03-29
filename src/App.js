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
import SignUpPage from './components/auth/SignUp';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import LogInPage from './components/auth/LogInPage';
import { useContext, useEffect } from 'react';
import UserContext from './store/userContext';
import { useCookies } from 'react-cookie';
import DetailPage from './pages/group-farming/DetailPage';
import JoinPage from './pages/group-farming/JoinPage';
import EventDetailPage from './pages/EventDetailPage';
import MatchedUser from './pages/group-farming/MatchedUser';
import EventMainPage from './pages/event-pages/EventMainPage';
import MovieNightEventPage from './pages/event-pages/MovieNightEventPage';
import ConcertEventPage from './pages/event-pages/ConcertEventPage';
import GetSomeWisdomEventPage from './pages/event-pages/GetSomeWisdomEventPage';
import SportsEventPage from './pages/event-pages/SportsEventPage';

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
        <Route path="/sign-up">
          <SignUpPage />
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
        <ProtectedRoute path="/matched-users" component={MatchedUser} />
        <Route path="/event-main">
          <EventMainPage />
        </Route>
        <Route path="/event-tastes">
          <EventPage />
        </Route>
        <Route path="/tastes-detail">
          <EventDetailPage />
        </Route>
        <Route path="/event-movienight">
          <MovieNightEventPage />
        </Route>
        <Route path="/event-sports">
          <SportsEventPage />
        </Route>
        <Route path="/event-getsomewisdom">
          <GetSomeWisdomEventPage />
        </Route>
        <Route path="/event-concert">
          <ConcertEventPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
