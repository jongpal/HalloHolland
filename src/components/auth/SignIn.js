import { useRef, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from './../../store/userContext';
import { useCookies } from 'react-cookie';
import classes from './signin.module.css';
// import axios from 'axios';

function SignInPage() {
  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();
  const cropRef = useRef();

  const [cookies, setCookie] = useCookies(['user']);
  const [timetable, setTimetable] = useState([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ]);
  const history = useHistory();
  const userContext = useContext(UserContext);
  const genId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  function timecellClickHandler(event) {
    // event.preventDefault();
    // console.log(event.target.id);
    if (event.target.classList.length === 1)
      event.target.classList += ` ${classes.clickedcell}`;
    else event.target.classList = classes.normtd;
    const [rowNum, colNum] = event.target.id.split('__');
    // timet[rowNum][colNum] = timet[rowNum][colNum] === 1 ? 0 : 1;
    setTimetable((prevTable) => {
      prevTable[rowNum][colNum] = prevTable[rowNum][colNum] === 1 ? 0 : 1;
      return prevTable;
    });
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const pwd = passwordRef.current.value;
    const crop = cropRef.current.value;
    const id = genId();
    const timet = timetable;

    if (!email || !name || !pwd) history.push('/sign-in');

    const userData = {
      id,
      email,
      name,
      pwd,
      preferCrops: crop,
      timetable: timet,
    };

    const response = await fetch(
      'https://urban-green-935ab-default-rtdb.firebaseio.com/user.json',
      {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-type': 'application/json',
        },
      }
    );

    setCookie('email', userData.email, {
      path: '/',
    });
    setCookie('pwd', userData.pwd, {
      path: '/',
    });
    setCookie('id', userData.id, {
      path: '/',
    });
    setCookie('id', userData.preferCrops, {
      path: '/',
    });
    setCookie('timetable', userData.timetable, {
      path: '/',
    });
    userContext.addCurrentUser(userData);

    history.replace('/');
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form>
        <div>
          <label htmlFor="email">email : </label>
          <input type="email" id="email" required ref={emailRef} />
        </div>
        <div>
          <label htmlFor="name">name : </label>
          <input type="text" id="name" required ref={nameRef} />
        </div>
        <div>
          <label htmlFor="pwd">password : </label>
          <input type="password" id="pwd" required ref={passwordRef} />
        </div>
        <div>
          <label htmlFor="preferCrops">crops : </label>
          <input type="text" id="preferCrops" ref={cropRef} />
        </div>
        <div>
          <lable htmlFor="timetable">timetable : </lable>
          <div>
            <table className={classes.timetable}>
              <thead>
                <tr>
                  <th>time\day</th>
                  <th>Sun</th>
                  <th>Mon</th>
                  <th>Tue</th>
                  <th>Wed</th>
                  <th>Thu</th>
                  <th>Fri</th>
                  <th>Sat</th>
                </tr>
              </thead>
              <tbody>
                {timetable.map((rows, rindex) => {
                  return (
                    <tr key={rindex}>
                      <td className={classes.normtd}>{`${6 + 2 * rindex}~${
                        6 + 2 * rindex + 2
                      }`}</td>
                      {rows.map((columns, cindex) => {
                        return (
                          <td
                            className={classes.normtd}
                            onClick={timecellClickHandler}
                            key={cindex}
                            id={rindex + '__' + cindex}
                          ></td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <button onClick={onSubmit}>Sign In</button>
        </div>
      </form>
    </div>
  );
}

export default SignInPage;
