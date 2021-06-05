import { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from './../../store/userContext';

// import axios from 'axios';

function SignInPage() {
  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();

  const history = useHistory();
  const userContext = useContext(UserContext);

  const onSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const pwd = passwordRef.current.value;

    if (!email || !name || !pwd) history.push('/sign-in');

    const userData = {
      email,
      name,
      pwd,
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
          <button onClick={onSubmit}>Sign In</button>
        </div>
      </form>
    </div>
  );
}

export default SignInPage;
