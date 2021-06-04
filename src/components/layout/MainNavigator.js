import { Link } from 'react-router-dom';
import classes from './main-navigator.module.css';
import UserContext from './../../store/userContext';
import { useContext, useState } from 'react';

function MainNavigator() {
  const [isLoggedOut, setLoggedOut] = useState(false);

  const userContext = useContext(UserContext);
  const isNotAuth = userContext.isAuthenticated === 0;

  function LogOutHandler(event) {
    event.preventDefault();
    userContext.removeCurrentUser();
    setLoggedOut((prev) => true);
  }

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
            {isNotAuth && (
              <li>
                <Link to="/sign-in">Sign in</Link>
              </li>
            )}
            {isNotAuth ? (
              <li>
                <Link to="/log-in">Log In</Link>
              </li>
            ) : (
              <li>
                <button onClick={LogOutHandler}>Log Out</button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainNavigator;
