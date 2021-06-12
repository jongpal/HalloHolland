import './Event.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Event({ event }) {
  return (
    <Link className="Event" to={'/tastes-detail'}>
      <div className="eventImage">
        <img src={event.imgSrc}></img>
      </div>
      <div className="mainDescription">
        <h3>{event.title}</h3>
        <p>{event.subtitle}</p>
      </div>
      <div className="subDescription">
        <div className="members">Number of Opening:{event.numberOfOpening}</div>
        <div className="dueDate">Date:{event.date}</div>
      </div>
    </Link>
  );
}

export default Event;
