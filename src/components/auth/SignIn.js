import { useRef } from 'react';
import axios from 'axios';

function SignInPage() {
  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();

  const onSubmit = async (event) => {
    event.preventDefault();
    // const response = await axios.post()
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form>
        <div>
          <label htmlFor="email">email : </label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="name">name : </label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="name">password : </label>
          <input type="password" id="pwd" required />
        </div>
        <div>
          <button onClick={onSubmit}>Sign In</button>
        </div>
      </form>
    </div>
  );
}

export default SignInPage;
