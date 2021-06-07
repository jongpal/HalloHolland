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
  const intro1Ref = useRef();
  const intro2Ref = useRef();
  const intro3Ref = useRef();
  const user = userContext.currentUserInfos;

  let prevPageData = props.location.state;
  // console.log('what the', userContext.currentUserInfos);
  console.log('prevPage', prevPageData);
  function submitHandler(event) {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const intro = [
      intro1Ref.current.value,
      intro2Ref.current.value,
      intro3Ref.current.value,
    ];

    // const data = {
    //   ...prevPageData,
    //   name,
    //   email,
    // };
    const crops = prevPageData.preferredCrop;
    const sectorNumber = prevPageData.sector;
    const description = prevPageData.description;
    farmContext.addSector(user.id, crops, sectorNumber, description, intro);
    const matched = userContext.searchMatch(user.timetable);
    // console.log(data);
    history.push('/matched-users', matched);
  }
  return (
    <div>
      <h1>Personal Infos verification</h1>
      <form onSubmit={submitHandler}>
        <div>
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
          </div>
          <div>
            <label>
              Email :{' '}
              <input
                type="email"
                defaultValue={user.email}
                required
                ref={emailRef}
              ></input>
            </label>
          </div>
          <div>
            <h3>Introduce yourself</h3>
            <p>
              1. Age :{' '}
              <input type="text" rows="10" cols="90" required ref={intro1Ref} />
            </p>
            <p>
              2. where do you live :{' '}
              <input type="text" rows="10" cols="90" required ref={intro2Ref} />
            </p>
            <p>
              3. Farming Knowledge :{' '}
              <input type="text" rows="10" cols="90" required ref={intro3Ref} />
            </p>
          </div>
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
