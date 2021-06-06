import './EventPage.css';
import Event from '../components/Event';
import {useState} from 'react';
import tan from '../tan.jpg';


function EventPage() {
  const [events, setEvents] = useState([
    {imgSrc: tan, title: 'Making tangerine jam', subtitle:'blahblahblah', numberOfOpening:5, date:'2021-06-30'},
    {imgSrc: tan, title: 'Making orange jam', subtitle:'blahblahblah', numberOfOpening:5, date:'2021-06-30'},
    {imgSrc: tan, title: 'Making tomato jam', subtitle:'blahblahblah', numberOfOpening:5, date:'2021-06-30'},
  ]);

  const renderEvents = events.length ? events.map((event)=>{
    return(
      <Event event={event} key={event.title}/>
    )
  }): 'There is no event available';

  return (
  <main>
    {renderEvents}
  </main>
  );
};

export { EventPage };
