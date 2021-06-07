import { useRef, useContext } from 'react';
import UserContext from './../../store/userContext';
import FarmContext from './../../store/farmContext';
import { useHistory } from 'react-router-dom';

function SecondApplyPage(props) {
  const userContext = useContext(UserContext);
  const farmContext = useContext(FarmContext);
  const history = useHistory();
  const nameRef = useRef();
  const emailRef = useRef();
  const user = userContext.currentUserInfos;

  let prevPageData = props.location.state;
  // console.log('what the', userContext.currentUserInfos);
  console.log('prevPage', prevPageData);
  function submitHandler(event) {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    // const data = {
    //   ...prevPageData,
    //   name,
    //   email,
    // };
    const crops = prevPageData.preferredCrop;
    const sectorNumber = prevPageData.sector;
    const description = prevPageData.description;
    farmContext.addSector(user.id, crops, sectorNumber, description);
    const matched = userContext.searchMatch(user.timetable);
    // console.log(data);
    history.push('/matched-users', matched);
  }
  return (
    <div>
      <h1>Personal Infos verification</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>
            Name :{' '}
            <input
              type="text"
              defaultValue={user.name}
              required
              ref={nameRef}
            ></input>
          </label>
          <label>
            Email :{' '}
            <input
              type="email"
              defaultValue={user.email}
              required
              ref={emailRef}
            ></input>
          </label>
          <div>
            <button>Confirm</button>
            <button>Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default SecondApplyPage;
