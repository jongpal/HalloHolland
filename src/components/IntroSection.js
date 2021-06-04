// import { Link } from 'react-router-dom';
import classes from './intro-section.module.css';
import ApplyButton from './ui/ApplyButton';
import Card from './ui/Card';

function IntroSection(props) {
  const title = props.title;
  const description = props.description;
  return (
    <section>
      <Card>
        <div className={classes.cover}>
          <div className={classes.intro}>
            <div>
              <h1>{title}</h1>
            </div>
            <div>
              <p>{description}</p>
            </div>
            {props.btn ? (
              <ApplyButton text="Apply For it" linkTo="/farming-apply" />
            ) : null}
            {/* <div>
            <button>
              <Link className={classes.btnlink} to="/farming-apply">
                Apply for it
              </Link>
            </button>
          </div> */}
          </div>
          <img src={props.image} alt={props.title} />
        </div>
      </Card>
    </section>
  );
}

export default IntroSection;
