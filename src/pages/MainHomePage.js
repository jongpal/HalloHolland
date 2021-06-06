import groupFarmingImage from '../community garden.jpg';
import eventsImage from '../flower arrangement.jpg';
import reviewImage from '../review.jpg';
import boardImage from '../discussion.png';
import mapImage from '../Koedijkslanden.png';
import './MainHomePage.css';
import {useState} from 'react';


function MainHomePage() {
  const [fgroups, setFgroups] = useState( [
    { groupName: 'YAHO', crop: 'Carrots', date: '2021/05/01~' },
    { groupName: 'FIGTING', crop: 'Tomato', date: '2021/04/01~' },
    { groupName: 'MUYAHO', crop: 'Strawberry', date: '2021/06/01~' },
  ]);
  
  return (
    <main>
      <div className="mainIntro">
        <div className="introDescription">
          <h2>
            Meet your neighbors in<br></br> Urban green
          </h2>
          <p>
            Urban green is a community garden for all<br></br> people of
            Koedijkslanden. Feel free to visit and socialize
          </p>
        </div>
      </div>

      <div className="farmingGroups">
        <h2>
          Currently there are {fgroups.length} farming groups in Urban green
        </h2>
        <div className="fGroups">
          <div className="fGroup">
            <div className="groupName">{fgroups[0].groupName}</div>
            <div className="crop">{fgroups[0].crop}</div>
            <div className="date">{fgroups[0].date}</div>
          </div>
        </div>
      </div>

      <div className="functionIntro">
        <div className="function">
          <div className="image">
            <img src={groupFarmingImage}></img>
          </div>
          <div className="description">
            <h3 className="functionName">Group Farming</h3>
            <p>
              Gather people to join the farming! You can propose what to plant
              and gather people to do it with you or you can just join in! If
              number of people you want joins your group you get to use small
              section of the garden for cetain period of time.
            </p>
          </div>
        </div>
        <div className="function">
          <div className="description">
            <h3 className="functionName">Events</h3>
            <p>
              Host or join any event you want to do with people at Urban green!
              You can do variaty of activities or event in Urban green. For
              instance flower arrangement class, party, or anything fun to do.
            </p>
          </div>
          <div className="image">
            <img src={eventsImage}></img>
          </div>
        </div>
        <div className="function">
          <div className="image">
            <img src={reviewImage}></img>
          </div>
          <div className="description">
            <h3 className="functionName">Review</h3>
            <p>
              Post photos and leave comments for any event or group farming you
              participated in! Let people know how fun it was!
            </p>
          </div>
        </div>
        <div className="function">
          <div className="description">
            <h3 className="functionName">Board</h3>
            <p>Discuss with people whatever you want!</p>
          </div>
          <div className="image">
            <img src={boardImage}></img>
          </div>
        </div>
      </div>
      <div className="location">
        <h2>Location</h2>
        <img src={mapImage}></img>
      </div>
    </main>
  );
}

export { MainHomePage };
