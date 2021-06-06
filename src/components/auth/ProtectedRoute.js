import { Route, Redirect } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import UserContext from './../../store/userContext';
import { useCookies } from 'react-cookie';

export const ProtectedRoute = ({ componenet: Comp, ...rest }) => {
  const userContext = useContext(UserContext);
  const [cookies, setCookie] = useCookies(['user']);
  let pass = false;
  if (cookies.email) {
    pass = true;
  }

  return (
    <Route
      {...rest}
      render={(props) => {
        if (userContext.isAuthenticated !== 0 || pass) {
          return <Comp {...props} />;
        } else {
          console.log('protected');
          alert('Should be logged in');
          return <Redirect to={{ to: '/', state: props.location }} />;
        }
      }}
    />
  );
};
