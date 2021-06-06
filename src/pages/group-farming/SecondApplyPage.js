import { useRef, useContext } from 'react';
import UserContext from './../../store/userContext';

function SecondApplyPage(props) {
  const userContext = useContext(UserContext);
  const nameRef = useRef();
  const emailRef = useRef();

  let prevPageData = props.location.state;
  // console.log('what the', userContext.currentUserInfos);
  const user = userContext.currentUserInfos;

  function submitHandler(event) {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const data = {
      ...prevPageData,
      name,
      email,
    };
    console.log(data);
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
