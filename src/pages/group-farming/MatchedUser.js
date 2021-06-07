import UserContext from './../../store/userContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function MatchedUser(props) {
  const userContext = useContext(UserContext);

  const matchedList = props.location.state;
  const filteredUser = userContext.allUsers.filter((user) =>
    matchedList.some((list) => list === user.id)
  );

  console.log(filteredUser);
  return (
    <div>
      <h1>MatchedUser</h1>
      {filteredUser.map((user) => {
        return (
          <div>
            <h3>Name</h3>
            <span>{user.name}</span>
            <h3>Email</h3>
            <div>{user.email}</div>
            <h3>Preferred</h3>
            <div>{user.preferCrops}</div>
          </div>
        );
      })}
      <Link to="/group-farming">GO TO FARMING PAGE</Link>
    </div>
  );
}

export default MatchedUser;
