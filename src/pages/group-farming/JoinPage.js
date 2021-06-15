import { useRef, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import UserContext from './../../store/userContext';
import FarmContext from './../../store/farmContext';
import classes from './join-page.module.css';

function JoinPage(props) {
  const userContext = useContext(UserContext);
  const farmContext = useContext(FarmContext);
  const nameRef = useRef();
  const emailRef = useRef();
  const history = useHistory();

  let prevPageData = props.location.state;
  const { sectorId } = useParams();
  const user = userContext.currentUserInfos || null;
  // console.log('user', user);
  function cancelHandler(event) {
    event.preventDefault();
    history.replace('/');
  }
  function submitHandler(event) {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const data = {
      ...prevPageData,
      name,
      email,
    };
    // originally : add to db , but for here : add to context
    farmContext.joinSector(user.id, sectorId - 1);
    console.log(farmContext.sectors[sectorId - 1]);
    history.replace('/group-farming');
  }
  return (
    <div className={classes.joinmain}>
      <h1>Personal Infos verification</h1>
      <form className={classes.formmain} onSubmit={submitHandler}>
        <div>
          <label>
            Name :{' '}
            <input
              type="text"
              defaultValue={user ? user.name : null}
              required
              ref={nameRef}
            ></input>
          </label>
          <br />
          <br />
          <label>
            Email :{' '}
            <input
              type="email"
              defaultValue={user ? user.email : null}
              required
              ref={emailRef}
            ></input>
          </label>
          <div className={classes.btns}>
            <button>Confirm</button>
            <button onClick={cancelHandler}>Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default JoinPage;
