import './App.css';
import { Route, Switch } from 'react-router-dom';
import { MainHomePage } from './pages/MainHomePage';
import { GroupFarmingPage } from './pages/GroupFarmingPage';
import { EventPage } from './pages/EventPage';
import { BoardPage } from './pages/BoardPage';
import { ReviewPage } from './pages/ReviewPage';
import MainNavigator from './components/layout/MainNavigator';

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
      </Switch>
    </div>
  );
}

export default App;
