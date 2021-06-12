import classes from './detail-page.module.css';
import { useContext, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import FarmContext from './../../store/farmContext';

function DetailPage(props) {
  const [timetable, setTimetable] = useState([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ]);
  const farmContext = useContext(FarmContext);
  const history = useHistory();
  const data = props.location.state;
  const host = data.host;
  let { sectorId } = useParams();
  console.log(sectorId);
  // sectorId - 1 , cause index starts from 0, but sectorId, i set it starting 1
  // console.log(farmContext.sectors[sectorId - 1]);
  const currSector = farmContext.sectors[sectorId - 1];
  console.log(host.photo);
  console.log(host);
  function joinButtonHandler(event) {
    event.preventDefault();
    // console.log('clicked', clickedBox);
    const data = {
      sector: sectorId,
    };
    history.push(`/join/${data.sector}`, data);
  }
  return (
    <div className={classes.detailmain}>
      <h1>SECTOR {sectorId} DETAILS</h1>
      <div>
        <div className={classes.firstdescript}>
          <h2>Looking for..</h2>
          <p>{currSector.description}</p>
        </div>
        <div className={classes.seconddescript}>
          <h2>Intereted In</h2>

          <p>
            {currSector.crop.map((crop) => (
              <span>{crop + ' '}</span>
            ))}
          </p>
        </div>
        <div className={classes.thirddescript}>
          <h2>Time free</h2>
          <div>
            <table className={classes.timetable}>
              <thead>
                <tr>
                  <th>time\day</th>
                  <th>Sun</th>
                  <th>Mon</th>
                  <th>Tue</th>
                  <th>Wed</th>
                  <th>Thu</th>
                  <th>Fri</th>
                  <th>Sat</th>
                </tr>
              </thead>
              <tbody>
                {timetable.map((rows, rindex) => {
                  return (
                    <tr key={rindex}>
                      <td className={classes.normtd}>{`${6 + 2 * rindex}~${
                        6 + 2 * rindex + 2
                      }`}</td>
                      {rows.map((columns, cindex) => {
                        return (
                          <td
                            className={
                              host.timetable[rindex][cindex]
                                ? classes.clickedcell
                                : classes.normtd
                            }
                            // onClick={timecellClickHandler}
                            key={cindex}
                            id={rindex + '__' + cindex}
                          ></td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <h1>Host : {host.name}</h1>
        <div className={classes.hostdescript}>
          <div>
            <img src={host.photo} alt="host photo" />
          </div>
          <div>
            <ul>
              {currSector.intro.map((intro) => {
                return <li>{intro}</li>;
              })}
            </ul>
          </div>
        </div>
        <div>
          <button className={classes.btn}>CONTACT TO HOST</button>
          <button onClick={joinButtonHandler} className={classes.btnjoin}>
            JOIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
