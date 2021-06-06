import classes from './apply-button.module.css';
import { Link } from 'react-router-dom';

function ApplyButton(props) {
  return (
    <div>
      <Link
        // onSubmit={props.onSubmit}
        // onClick={props.onClick}
        className={classes.btnlink}
        to={props.linkTo}
      >
        <button>{props.text}</button>
      </Link>
    </div>
  );
}

export default ApplyButton;
