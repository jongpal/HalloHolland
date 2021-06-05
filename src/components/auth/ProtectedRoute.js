import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from './../../store/userContext';

export const ProtectedRoute = ({ componenet: Comp, ...rest }) => {
  const userContext = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (userContext.isAuthenticated !== 0) {
          return <Comp {...props} />;
        } else {
          alert('Should be logged in');
          return <Redirect to={{ to: '/', state: props.location }} />;
        }
      }}
    />
  );
};
