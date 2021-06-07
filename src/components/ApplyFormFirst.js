import Card from './../components/ui/Card';
import { useRef, useState } from 'react';
import ApplyButton from './ui/ApplyButton';
import classes from './apply-form-first.module.css';
import { useHistory } from 'react-router-dom';

function ApplyFormFirst(props) {
  // const firstQuestionRef = useRef();
  const [timetable, setTimetable] = useState([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ]);
  const sectorData = props.sector;
  // console.log('sectorData', sectorData);
  const secondQuestionRef = useRef();
  const history = useHistory();
  // let timet = [
  //   [0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0],
  // ];
  let checked = [];

  function timecellClickHandler(event) {
    // event.preventDefault();
    // console.log(event.target.id);
    if (event.target.classList.length === 1)
      event.target.classList += ` ${classes.clickedcell}`;
    else event.target.classList = classes.normtd;
    const [rowNum, colNum] = event.target.id.split('__');
    // timet[rowNum][colNum] = timet[rowNum][colNum] === 1 ? 0 : 1;
    setTimetable((prevTable) => {
      prevTable[rowNum][colNum] = prevTable[rowNum][colNum] === 1 ? 0 : 1;
      return prevTable;
    });
  }

  function checkBoxHandler(event) {
    console.log(event.target.id);
    if (event.target.checked) {
      checked.push(event.target.id.split('-')[1]);
    } else {
      checked = checked.filter(
        (checkbox) => checkbox !== event.target.id.split('-')[1]
      );
    }
  }
  function submitHandler(event) {
    event.preventDefault();

    const data = {
      ...sectorData,
      preferredCrop: checked,
      description: secondQuestionRef.current.value,
      timetable,
    };
    history.location.state = data;
    console.log(history);
    // console.log(timetable);
    history.push('/farming-apply-second', data);
  }
  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div>
          <h1>Kinds of crops for your garden</h1>
          <div className={classes.firstQList}>
            <label>
              <input
                id="checkbox-carrot"
                type="checkbox"
                onChange={checkBoxHandler}
              />
              <span> Carrot</span>
            </label>
            <label>
              <input
                id="checkbox-potato"
                type="checkbox"
                onChange={checkBoxHandler}
              />
              <span> Potato</span>
            </label>
            <label>
              <input
                id="checkbox-orange"
                type="checkbox"
                onChange={checkBoxHandler}
              />
              <span> Orange</span>
            </label>
            <label>
              <input
                id="checkbox-strawberry"
                type="checkbox"
                onChange={checkBoxHandler}
              />
              <span> Strawberry</span>
            </label>
          </div>
        </div>
        <div>
          <h1>I'm looking for neighbors who..</h1>
          <label htmlFor="2-quest" />
          <textarea
            required={true}
            rows="10"
            cols="90"
            id="2-quest"
            ref={secondQuestionRef}
          />
        </div>
        <div>
          <h1>Time Available for planting</h1>
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
                            className={classes.normtd}
                            onClick={timecellClickHandler}
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
        <button type="submit">GO TO NEXT</button>
        {/* <ApplyButton
          onSubmit={submitHandler}
          text="GO TO NEXT"
          linkTo="/farming-apply-second"
        /> */}
      </form>
    </Card>
  );
}

export default ApplyFormFirst;
