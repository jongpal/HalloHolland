import IntroSection from './../../components/IntroSection';
import classes from './event-main.module.css';
import { Link, useHistory } from 'react-router-dom';

const DATA_EVENT_PAGE = {
  id: 111,
  title: 'Event Page',
  image: 'images/flower arrangement.jpg',
  description: 'Experience your 5 senses here in this garden',
};

function EventMainPage() {
  const history = useHistory();

  function onClickHandler(event) {
    event.preventDefault();
    history.push(`/${event.target.id}`);
  }
  return (
    <div className={classes.main}>
      <IntroSection
        id={DATA_EVENT_PAGE.id}
        title={DATA_EVENT_PAGE.title}
        image={DATA_EVENT_PAGE.image}
        description={DATA_EVENT_PAGE.description}
        btn={false}
      />
      <div className={classes.mainevent}>
        <div onClick={onClickHandler} className={classes.linkCard}>
          <label id="taste-event">
            <img
              id="event-tastes"
              src="images/lets-taste.jpg"
              alt="taste event photo"
            />
            <p>Let's taste</p>
          </label>
        </div>
        <div onClick={onClickHandler} className={classes.linkCard}>
          <label id="event-movienight">
            <img
              id="event-movienight"
              src="images/movie-night.jpg"
              alt="movie night photo"
            />
            <p>Movie Night</p>
          </label>
        </div>
        <div onClick={onClickHandler} className={classes.linkCard}>
          <label id="event-sports">
            <img id="event-sports" src="images/sports.jpg" alt="sports photo" />
            <p>Sports</p>
          </label>
        </div>
        <div onClick={onClickHandler} className={classes.linkCard}>
          <label id="event-concert">
            <img
              id="event-concert"
              src="images/concert.jpg"
              alt="concert photo"
            />
            <p>Concert</p>
          </label>
        </div>
        <div onClick={onClickHandler} className={classes.linkCard}>
          <label id="event-getsomewisdom">
            <img
              id="event-getsomewisdom"
              src="images/getsomewisdom.jpg"
              alt="getsomewisdom photo"
            />
            <p>Get Some Wisdom</p>
          </label>
        </div>
      </div>
    </div>
  );
}

export default EventMainPage;
