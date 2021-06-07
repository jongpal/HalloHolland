import { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from './../../store/userContext';
import { useCookies } from 'react-cookie';
import './Signup.css';
// import axios from 'axios';

function SignInPage() {
  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();

  const [cookies, setCookie] = useCookies(['user']);

  const history = useHistory();
  const userContext = useContext(UserContext);
  const genId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const pwd = passwordRef.current.value;
    const id = genId();

    if (!email || !name || !pwd) history.push('/sign-in');

    const userData = {
      id,
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

    setCookie('email', userData.email, {
      path: '/',
    });
    setCookie('pwd', userData.pwd, {
      path: '/',
    });
    setCookie('id', userData.id, {
      path: '/',
    });
    userContext.addCurrentUser(userData);

    history.replace('/');
  };

  return (
    <div className="SignUp">
      <h1>Sign Up</h1>
      <form>
          {/* <label htmlFor="email">email : </label> */}
          <input type="email" id="email" placeholder="Email" required ref={emailRef} />        
          {/* <label htmlFor="name">name : </label> */}
          <input type="text" id="name" placeholder="Full Name" required ref={nameRef} />        
          {/* <label htmlFor="pwd">password : </label> */}
          <input type="password" id="pwd" placeholder="Password" required ref={passwordRef} />        
          <button className="btn btn-primary full" onClick={onSubmit}>Sign In</button>      </form>
    </div>
  );
}

export default SignInPage;
