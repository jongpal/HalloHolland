import { Link } from 'react-router-dom';
import classes from './main-navigator.module.css';
import UserContext from './../../store/userContext';
import { useContext, useState } from 'react';
import { useCookies } from 'react-cookie';

function MainNavigator() {
  const [isLoggedOut, setLoggedOut] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['user']);

  const userContext = useContext(UserContext);
  const isNotAuth = userContext.isAuthenticated === 0;

  function LogOutHandler(event) {
    event.preventDefault();
    removeCookie('email');
    removeCookie('pwd');
    userContext.removeCurrentUser();
    // removeCookie("id");
    setLoggedOut((prev) => true);
  }

  return (
    <header className={classes.header}>
      <nav>
        <div className={classes.logo}>
          <Link className={classes.logoLink} to="/">
            Urban Green
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/group-farming">Group Farming</Link>
          </li>
          <li>
            <Link to="/event-main">Event</Link>
          </li>
          {/* <li>
            <Link to="/event">Event</Link>
          </li> */}
          <li>
            <Link to="/board">Board</Link>
          </li>
          <li>
            <Link to="/review">Review</Link>
          </li>
        </ul>
        <div className={classes.auth}>
          {isNotAuth ? (
            <Link to="/log-in">
              <button className="btn btn-primary">Log In</button>
            </Link>
          ) : (
            <button className="btn btn-primary" onClick={LogOutHandler}>
              Log Out
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default MainNavigator;
