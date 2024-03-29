import UserContext from './../../store/userContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './matched-user.module.css';
import defaultImg from './default.png';

function MatchedUser(props) {
  const userContext = useContext(UserContext);

  const matchedList = props.location.state;
  const filteredUser = userContext.allUsers.filter((user) =>
    matchedList.some((list) => list === user.id)
  );

  console.log(filteredUser);
  return (
    <div className={classes.detailmain}>
      <h1>{filteredUser.length} matched Users</h1>
      {filteredUser.map((user, index) => {
        return (
          <div className={classes.firstdescript}>
            <h2>{index + 1}</h2>
            <div>
              <img
                className={classes.img}
                src={
                  user.photo
                    ? require(`./../../../public/${user.photo}`).default
                    : defaultImg
                }
              />
            </div>
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
