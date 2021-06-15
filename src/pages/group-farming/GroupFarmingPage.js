import IntroSection from '../../components/IntroSection';
import classes from './group-farming.module.css';
import FarmingRect from './../../components/FarmingRect';

const DATA_GROUPFARMING_PAGE = {
  id: 1,
  title: 'Experience group Farming',
  image: 'images/group-farming_intro.jpg',
  description:
    'Join for group farming and get some fresh product with your neighbors ! ',
};

function GroupFarmingPage() {
  return (
    <div className={classes.sections}>
      {/* introduction */}
      <IntroSection
        id={DATA_GROUPFARMING_PAGE.id}
        title={DATA_GROUPFARMING_PAGE.title}
        image={DATA_GROUPFARMING_PAGE.image}
        description={DATA_GROUPFARMING_PAGE.description}
        btn={true}
      />
      <section className={classes.sectiontwo}>
        <div className={classes.firsth2}>
          <h2>What is Experience Farming?</h2>
          <p>
            The experience garden is a part of a project for facilitating
            Koedijksgarden's communication.
            <br />
            <br />
            You are going to manage your own garden sector with your random
            neighbors based on timetables for each of them.
            <br />
            <br />
            You could also participate in numerous events that would be held in
            this very garden !!
          </p>
        </div>
        <div className={classes.secondh2}>
          <h2> Then, how do I apply for that ?</h2>
          <p>
            Simple. Click the OPEN sectors below ! <br />
            <br />
            It will show you the information of that sector. <br />
            <br />
            You could join wherever you want.
          </p>
        </div>
      </section>
      <FarmingRect />

      {/* <section className={classes.farmsummary}>
        <div className={classes.r_one}>
          <p>Occupied</p>
        </div>

        <div className={classes.r_two}>
          <p>Opening</p>
        </div>

        {/* <div className={classes.r_three}>
          <img src="/images/x-icon.png" />
        </div> */}
      {/* plant information */}
      {/* <div className={classes.rectangle}>
          <div className={classes.box1} onClick={boxOnClickListener}></div>
          <div className={classes.box2}></div>
          <div className={classes.box3}></div>
          <div></div>
          <div className={classes.box4}></div>
          <div className={classes.box5}></div>
          <div className={classes.box6}></div>
          <div className={classes.box7}></div>
          <div className={classes.box8}></div>
          <div className={classes.box9}></div>
          <div className={classes.box10}></div>
          <div className={classes.box11}></div>
          <div className={classes.box12}></div>
          <div className={classes.box13}></div>
          <div className={classes.box14}></div>
          <div className={classes.box15}></div>
          <div className={classes.box16}></div>
          <div className={classes.box17}></div>
        </div>
      </section> */}
    </div>
  );
}

export { GroupFarmingPage };
