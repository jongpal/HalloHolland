import Card from './../components/ui/Card';
import { useRef } from 'react';
import ApplyButton from './ui/ApplyButton';
import classes from './apply-form-first.module.css';
import { useHistory } from 'react-router-dom';

function ApplyFormFirst(props) {
  // const firstQuestionRef = useRef();
  const sectorData = props.sector;
  console.log('sectorData', sectorData);
  const secondQuestionRef = useRef();
  const history = useHistory();

  let checked = [];
  function checkBoxHandler(event) {
    console.log(event.target.id);
    console.log(event.target.checked);
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
    };
    history.location.state = data;
    console.log(history);
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
