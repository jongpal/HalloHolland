import Card from './../components/ui/Card';
import { useRef } from 'react';
import ApplyButton from './ui/ApplyButton';

function ApplyFormFirst() {
  const firstQuestionRef = useRef();
  const secondQuestionRef = useRef();
  return (
    <Card>
      <form>
        <div>
          <h1>Kinds of crops for your garden</h1>
          <label htmlFor="1-quest" />
          <textarea
            type="text"
            required={true}
            rows="10"
            cols="90"
            id="1-quest"
            ref={firstQuestionRef}
          />
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
        <ApplyButton text="GO TO NEXT" linkTo="/farming-apply-second" />
      </form>
    </Card>
  );
}

export default ApplyFormFirst;
