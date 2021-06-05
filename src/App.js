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

function App() {
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
