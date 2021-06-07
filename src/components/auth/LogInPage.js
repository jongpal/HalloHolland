import { useRef, useContext, useEffect } from 'react';
import UserContext from './../../store/userContext';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import './LoginPage.css';
import { Link } from 'react-router-dom';

function LogInPage() {
  const userContext = useContext(UserContext);
  const emailRef = useRef();
  const pwdRef = useRef();
  const history = useHistory();
  const [cookies, setCookie] = useCookies(['user']);

  function onSubmit(event) {
    event.preventDefault();
    fetch('https://urban-green-935ab-default-rtdb.firebaseio.com/user.json')
      .then((response) => response.json())
      .then((data) => {
        const userList = [];
        console.log(data);
        for (const key in data) {
          console.log(key);
          userList.push({
            ...data[key],
          });
        }

        console.log(data);
        const user_ = userList.filter((user) => {
          return (
            user.email === emailRef.current.value &&
            user.pwd === pwdRef.current.value
          );
        })[0];
        console.log(user_);
        if (user_) {
          userContext.addCurrentUser(user_);
          setCookie('email', user_.email, {
            path: '/',
          });
          // console.log(userContext.currentUserInfos);
          setCookie('pwd', user_.pwd, {
            path: '/',
          });
          // console.log('cookie email : ', cookies.email);
          setCookie('id', user_.id, { path: '/' });
          // cookies.user = user_;
          history.replace('/');
        } else {
          alert('check your id & password');
          emailRef.current.value = '';
          pwdRef.current.value = '';
          history.push('/log-in');
        }
      });
  }
  return (
    <div className="Login">
      <h1>Log In to Urban Green</h1>
      <form>
        
          {/* <label htmlFor="email_">email : </label> */}
          <input type="email" id="email_" placeholder="Email" required ref={emailRef} />
        
       
          {/* <label htmlFor="pass">password : </label> */}
          <input type="password" id="pass" placeholder="Password" required ref={pwdRef} />
       
          <button className="btn btn-primary full" onClick={onSubmit}>Log In</button>
          <Link className="signup" to="/sign-in">Not a memver yet? Sign up now!</Link>
      </form>
      
    </div>
  );
}

export default LogInPage;
