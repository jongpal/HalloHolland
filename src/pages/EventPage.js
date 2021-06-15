import './EventPage.css';
import Event from '../components/Event';
import {useState} from 'react';
import tan from '../tan.jpg';
import straw from '../strawberry_jam.jpeg';
import picnic from '../picnic.jpg';
import barbecue  from  '../barbecue.jpg';

function EventPage() {
  const [events, setEvents] = useState([
    {imgSrc: tan, title: 'Making tangerine jam', subtitle:'for every children', numberOfOpening:7, date:'2021-06-30'},
    {imgSrc: straw, title: "Let's make strawberry jam together", subtitle:'', numberOfOpening:5, date:'2021-06-25'},
    {imgSrc: picnic, title: 'Picnic Party', subtitle:'Anyone can join us!', numberOfOpening:5, date:'2021-06-18'},
    {imgSrc: barbecue, title: 'barbecue Party', subtitle:'Delicious pork and meat', numberOfOpening:6, date:'2021-06-12'},
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
