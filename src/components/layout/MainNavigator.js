import { Link } from 'react-router-dom';
import classes from './MainNavigator.module.css';

function MainNavigator() {
  return (
    <header className={classes.header}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/group-farming">GROUP FARMING</Link>
            </li>
            <li>
              <Link to="/event">EVENT</Link>
            </li>
            <li>
              <Link to="/board">BOARD</Link>
            </li>
            <li>
              <Link to="/review">REVIEW</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainNavigator;